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

//[backgroundColor, progressBarColor, width percentage] 
// chooseRightProgressBarColor
export function chooseRightColor(emp, typeOfBreak, time){
    if(!emp.isClockedIn) return ["grey", "none", 0];
    if(typeOfBreak === "break1"){
        if(emp.break1StartTime === null){
            let earliestTimeToStartBreak = addTime(emp.segmentStart, 120);
            let minsBeforeOrAfterEarliestTime = compareTimeStamps(time, earliestTimeToStartBreak);
            if(minsBeforeOrAfterEarliestTime<0){//show a green bar if you are waiting to be in alloted time for a break
                return ["white", "green", Math.round(((120 + minsBeforeOrAfterEarliestTime)/120) *100)];
            } else if(minsBeforeOrAfterEarliestTime>=0 && minsBeforeOrAfterEarliestTime < 120){//show red bar if you are currently in alloted time for a break
                return ["green","red", Math.round((minsBeforeOrAfterEarliestTime/120) * 100)]
            } else{
                return ["dark-red", "none", 0]
            }
        } else if(emp.break1EndTime === null){
            let timeToEndBreak1 = addTime(emp.break1StartTime, 15);
            let minsBeforeOrAfterBreak1EndTime = compareTimeStamps(time, timeToEndBreak1);
            if(minsBeforeOrAfterBreak1EndTime < 0){
                let barWidth = minsBeforeOrAfterBreak1EndTime >= -15 ? Math.round(((15+minsBeforeOrAfterBreak1EndTime)/15)* 100) : 0
                return ["white", "salmon", barWidth];
            } else{
                return ["dark-red", "none", 0];
            }
        }
    } else if(typeOfBreak === "lunch"){
        if(emp.break1StartTime === null || emp.break1EndTime === null){
            return ["light-grey", "none", 0]
        } else if(emp.lunchStartTime === null){
            let earliestTimeToStartLunch = addTime(emp.segmentStart, 240);
            let minsBeforeOrAfterEarliestLunchTime = compareTimeStamps(time, earliestTimeToStartLunch);
            if(minsBeforeOrAfterEarliestLunchTime<0){
                return ["white", "green", Math.round(((120 + minsBeforeOrAfterEarliestLunchTime)/120) *100)];
            } else if(minsBeforeOrAfterEarliestLunchTime>=0 && minsBeforeOrAfterEarliestLunchTime < 120){
                return ["green","red", Math.round((minsBeforeOrAfterEarliestLunchTime/120) * 100)]
            } else{
                return ["dark-red", "none", 0]
            }

        } else if (emp.lunchEndTime === null){
            let timeToEndLunch = addTime(emp.break1StartTime, 30);
            let minsBeforeOrAfterLunchEndTime = compareTimeStamps(time, timeToEndLunch);
            if(minsBeforeOrAfterLunchEndTime < 0){
                let a = Math.round(((30+minsBeforeOrAfterLunchEndTime)/30)* 100)
                return ["white", "salmon", a];
            } else{
                return ["dark-red", "none", 0];
            }
        }
    } else if(typeOfBreak === "break2"){
        //need to show progress bar in 2 diff cases
        //1 if break1 start and end time finish and emp.hoursDaySeg === 6
        //2 if lunch1 start and end time finish and emp.hoursDaySeg > 6
        //otherwise should be grayed out and wait for one of these 2 prior breaks to finish
        if((emp.hoursDaySeg === 6 && (emp.break1StartTime === null || emp.break1EndTime === null))){
            return ["light-grey", "none", 0]
        }
        if(emp.break2StartTime === null){
            let lastBreakEndTime = emp.hoursDaySeg === 6 ? emp.break1EndTime : emp.lunchEndTime;
            let latestTimeToStartBreak2 = addTime(emp.segmentEnd, -15);
            let timeInBetween = Math.abs(compareTimeStamps(lastBreakEndTime, latestTimeToStartBreak2));

            let minsBeforeOrAfterLatestTimeToStartBreak2 = compareTimeStamps(time, latestTimeToStartBreak2);
            if(minsBeforeOrAfterLatestTimeToStartBreak2<0){
                return ["green", "red", Math.round(((timeInBetween + minsBeforeOrAfterLatestTimeToStartBreak2)/timeInBetween) *100)];
            } else{
                return ["dark-red", "none", 0]
            }
        } else if (emp.break2EndTime === null){
            let timeToEndLunch = addTime(emp.break1StartTime, 30);
            let minsBeforeOrAfterLunchEndTime = compareTimeStamps(time, timeToEndLunch);
            if(minsBeforeOrAfterLunchEndTime < 0){
                let a = Math.round(((30+minsBeforeOrAfterLunchEndTime)/30)* 100)
                return ["white", "salmon", a];
            } else{
                return ["dark-red", "none", 0];
            }
        }
        
    }
    return ["light-grey", "none", 0]
}