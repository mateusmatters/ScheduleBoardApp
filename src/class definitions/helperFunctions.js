export function createTimeStamp(hours, minutes){
    const time = new Date(); // get today's date
    time.setHours(hours, minutes, 0, 0); // set hours, minutes, seconds, and milliseconds
    return time;
}

export function parseTimeString(timeString) {
    if (!/^\d{2}:\d{2}$/.test(timeString)) {
        throw new Error("Invalid time format. Expected format: 'HH:MM'");
    }
    const [hours, minutes] = timeString.split(":").map(Number);
    return [hours, minutes];
}

function addTime(time, minutes) {
    if (!(time instanceof Date) || typeof minutes !== 'number') {
        throw new Error('Invalid input: time must be a Date object and minutes must be a number');
    }

    const result = new Date(time);
    result.setMinutes(result.getMinutes() + minutes);

    return result;
}

/**
 * Returns the time difference between two time values. time stamp 1 must happen before time stamp 2
 * @param {Date} earlyTimeStamp - Earlier time value
 * @param {Date} laterTimeStamp - Later time value
 */
export function getDifferenceTimeStamps(earlyTimeStamp, laterTimeStamp){
    let differenceHours = laterTimeStamp.getHours() - earlyTimeStamp.getHours();
    let differenceMinutes = laterTimeStamp.getMinutes() - earlyTimeStamp.getMinutes();
    if(differenceMinutes < 0){
        differenceHours = differenceHours -1;
        differenceMinutes = 60 + differenceMinutes;
    }
    let differenceCombined = differenceHours + (differenceMinutes/60)
    let roundUpTwoDecimals = Math.ceil(differenceCombined * 100) / 100;
    return roundUpTwoDecimals;
}


//takes in integer value that represents an integer of number of seconds
export function percentageOfSeconds(num){
    return Math.round((num/60) * 100);
}

/**
 * Compares the first and second time values by numerical order for hours, and then minutes
 * @param {Date} timeStamp1 - First time value
 * @param {Date} timeStamp2 - Second time value
 * @returns {number} - Negative number if timeStamp1 is less than, positive number if timeStamp1 is greater than, 0 if time stamps are equal
 */
export function compareTimeStamps(timeStamp1, timeStamp2){
    let valueTimeStamp1 =  (60 * timeStamp1.getHours()) + timeStamp1.getMinutes();
    let valueTimeStamp2 =  (60 * timeStamp2.getHours()) + timeStamp2.getMinutes();
    return valueTimeStamp1 - valueTimeStamp2;
}

export function simplifiedTimeStampString(timeStamp){
    let hoursStr = "" + timeStamp.getHours();
    let minutesStr = "" + timeStamp.getMinutes();
    if(timeStamp.getHours() < 10){
        hoursStr = "0" + hoursStr
    }
    if(timeStamp.getMinutes() < 10){
        minutesStr = "0" + minutesStr
    }
    return `${hoursStr}:${minutesStr}`;
}

function getPercentage(numerator, denominator){
 return Math.round((numerator/denominator) *100)
}


//[backgroundColor, progressBarColor, width percentage] 
export function chooseRightColor(emp, typeOfBreak, time){
    if(!emp.isClockedIn) return ["grey", "none", 0];
    if(typeOfBreak === "break1"){
        if(emp.break1StartTime === null){
            let earliestTimeToStartBreak = addTime(emp.segmentStart, 120);
            let minsBeforeOrAfterEarliestTime = compareTimeStamps(time, earliestTimeToStartBreak);
            //show a green bar with white background if not yet time for proper break
            if(minsBeforeOrAfterEarliestTime<0) return ["white", "green", getPercentage(120+minsBeforeOrAfterEarliestTime, 120)];
            //show red bar with green background if currently in time for proper break
            else if(minsBeforeOrAfterEarliestTime>=0 && minsBeforeOrAfterEarliestTime < 120) return ["green","red", getPercentage(minsBeforeOrAfterEarliestTime, 120)]
            //show no bar and dark-red background if time for proper break has past
            else return ["dark-red", "none", 0]
        } else if(emp.break1EndTime === null){
            let timeToEndBreak1 = addTime(emp.break1StartTime, 15);
            let minsBeforeOrAfterBreak1EndTime = compareTimeStamps(time, timeToEndBreak1);
            if(minsBeforeOrAfterBreak1EndTime < 0){
                let barWidth = minsBeforeOrAfterBreak1EndTime >= -15 ? getPercentage(minsBeforeOrAfterBreak1EndTime + 15,15) : 0
                return ["white", "salmon", barWidth];
            } else{
                return ["dark-red", "none", 0];
            }
        }
    } else if(typeOfBreak === "lunch"){
        if(emp.hoursDaySeg > 6 && (emp.break1StartTime === null || emp.break1EndTime === null)) return ["light-grey", "none", 0]

        if(emp.lunchStartTime === null){
            return ["dark-red", "none", 0]
            // let earliestTimeToStartLunch = addTime(emp.segmentStart, 240);
            // let minsBeforeOrAfterEarliestLunchTime = compareTimeStamps(time, earliestTimeToStartLunch);
            // if(minsBeforeOrAfterEarliestLunchTime<0){
            //     return ["white", "green", Math.round(((120 + minsBeforeOrAfterEarliestLunchTime)/120) *100)];
            // } else if(minsBeforeOrAfterEarliestLunchTime>=0 && minsBeforeOrAfterEarliestLunchTime < 120){
            //     return ["green","red", Math.round((minsBeforeOrAfterEarliestLunchTime/120) * 100)]
            // } else{
            //     return ["dark-red", "none", 0]
            // }
        } else if (emp.lunchEndTime === null){
            let timeToEndLunch = addTime(emp.lunchStartTime, 30);
            let minsBeforeOrAfterLunchEndTime = compareTimeStamps(time, timeToEndLunch);
            if(minsBeforeOrAfterLunchEndTime < 0){
                let barWidth = minsBeforeOrAfterLunchEndTime >= -30 ? getPercentage(minsBeforeOrAfterLunchEndTime + 30,30) : 0
                return ["white", "salmon", barWidth];
            } else{
                return ["dark-red", "none", 0];
            }
        }
    } else if(typeOfBreak === "break2"){
        //have section grayed out if 1. Is 6 hour day and break1 times not done or 2. Is more than 6 hour day and lunch times not done
        if(emp.hoursDaySeg === 6 && (emp.break1StartTime === null || emp.break1EndTime === null)) return ["light-grey", "none", 0];
        if(emp.hoursDaySeg > 6 && (emp.lunchStartTime === null || emp.lunchEndTime === null)) return ["light-grey", "none", 0]
        
        if(emp.break2StartTime === null){
            let lastBreakEndTime = emp.hoursDaySeg === 6 ? emp.break1EndTime : emp.lunchEndTime;
            let latestTimeToStartBreak2 = addTime(emp.segmentEnd, -15);
            let timeBetweenLastBreakEndAndLatestBreak2Start = Math.abs(compareTimeStamps(lastBreakEndTime, latestTimeToStartBreak2));
            let firstBreakOnTime = false;

            if(timeBetweenLastBreakEndAndLatestBreak2Start >=75){//75 is arbitrary num. want some number over 60. want to show that the proper break is after 60 min work
                let minsSinceLastBreak = compareTimeStamps(time, lastBreakEndTime)
                if(minsSinceLastBreak<60) return ["white", "green", getPercentage(minsSinceLastBreak, 60)];
                firstBreakOnTime = true;
            }
            let earliestBreak2Start = firstBreakOnTime ? addTime(lastBreakEndTime, 60): lastBreakEndTime;
            let timeBetweenEarliestBreak2StartAndLatestBreak2Start = compareTimeStamps(earliestBreak2Start, latestTimeToStartBreak2);
            let minsSinceEarliestBreak2Start = compareTimeStamps(time, earliestBreak2Start);
            console.log(`${timeBetweenEarliestBreak2StartAndLatestBreak2Start} mins in between`);
            if(timeBetweenEarliestBreak2StartAndLatestBreak2Start <0 && compareTimeStamps(time, latestTimeToStartBreak2) <0){
                return ["green", "red", getPercentage(minsSinceEarliestBreak2Start,Math.abs(timeBetweenEarliestBreak2StartAndLatestBreak2Start))];
            } 
            return ["dark-red", "none", 0];
        } else if (emp.break2EndTime === null){
            let timeToEndBreak2 = addTime(emp.break2StartTime, 15);
            let minsBeforeOrAfterBreak2EndTime = compareTimeStamps(time, timeToEndBreak2);
            if(minsBeforeOrAfterBreak2EndTime < 0){
                let barWidth = minsBeforeOrAfterBreak2EndTime >= -15 ? getPercentage(minsBeforeOrAfterBreak2EndTime + 15,15) : 0;
                return ["white", "salmon", barWidth];
            } else{
                return ["dark-red", "none", 0];
            }
        }
    }
    return ["light-grey", "none", 0]
}