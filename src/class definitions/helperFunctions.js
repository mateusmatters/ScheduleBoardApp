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
            let prefEarliestStart = addTime(emp.segmentStart, 120);
            let prefLatestStart = addTime(emp.segmentStart, 225);
            if(compareTimeStamps(time, prefEarliestStart) < 0){ //T < A
                let range = compareTimeStamps(prefEarliestStart, emp.segmentStart);
                let numerator = compareTimeStamps(time, emp.segmentStart);
                return ["white", "green", getPercentage(numerator, range)]
            } else if(compareTimeStamps(time, prefLatestStart) <= 0){//T<B
                let range = compareTimeStamps(prefLatestStart, prefEarliestStart);
                let numerator = compareTimeStamps(time, prefEarliestStart);
                return ["green", "red", getPercentage(numerator, range)]
            }
        } else if(emp.break1EndTime === null){
            let timeToEndBreak1 = addTime(emp.break1StartTime, 15);
            let minsBeforeOrAfterBreak1EndTime = compareTimeStamps(time, timeToEndBreak1);
            if(minsBeforeOrAfterBreak1EndTime <= 0){
                let barWidth = minsBeforeOrAfterBreak1EndTime >= -15 ? getPercentage(minsBeforeOrAfterBreak1EndTime + 15,15) : 0
                return ["white", "salmon", barWidth];
            }
        }
        if(emp.break1StartTime === null || emp.break1EndTime === null) return ["dark-red", "none", 0];
    } else if(typeOfBreak === "lunch"){
        if(emp.hoursDaySeg > 6 && (emp.break1StartTime === null || emp.break1EndTime === null)) return ["light-grey", "none", 0]        
        if(emp.lunchStartTime === null){
            //these preferences are assuming it's an 8 hour day. ask costco ppl about times 6<X<8
            let prefEarliestStart = addTime(emp.segmentStart, 180);
            let prefLatestStart = addTime(emp.segmentStart, 300);
            let timeTillMandatoryNoBreakFinish = addTime(emp.break1EndTime, 60);
            if(compareTimeStamps(time, prefEarliestStart) < 0){//T < A
                //range max is the bigger value between prefEarliestStart and timeTillMandatoryNoBreakFinish
                let rangeMax = (compareTimeStamps(prefEarliestStart, timeTillMandatoryNoBreakFinish)> 0) ? prefEarliestStart: timeTillMandatoryNoBreakFinish;
                let range = compareTimeStamps(rangeMax, emp.break1EndTime);
                let numerator = compareTimeStamps(time, emp.break1EndTime);
                return ["white", "green", getPercentage(numerator, range)]
            } else if(compareTimeStamps(time, prefLatestStart) <= 0){//T<B
                if(compareTimeStamps(time, timeTillMandatoryNoBreakFinish) < 0 && compareTimeStamps(emp.break1EndTime, prefLatestStart) <= -75){ //if diff 
                    let range = 60;
                    let numerator = compareTimeStamps(time, emp.break1EndTime);
                    return ["white", "green", getPercentage(numerator, range)]
                }
                let temp;
                if(compareTimeStamps(timeTillMandatoryNoBreakFinish, prefEarliestStart)<0) temp = prefEarliestStart  //If Y <A
                else if(compareTimeStamps(emp.break1EndTime, prefLatestStart) <= -75)temp = timeTillMandatoryNoBreakFinish;//diff between x+60+15 and B is at least 75 mins
                else temp = emp.break1EndTime;

                let range = compareTimeStamps(prefLatestStart, temp);
                let numerator = compareTimeStamps(time, temp);
                console.log(`${numerator}/${range}`)
                return ["green", "red", getPercentage(numerator, range)];
            }
        } else if(emp.lunchEndTime === null){
            let timeToEndLunch = addTime(emp.lunchStartTime, 30);
            let minsBeforeOrAfterLunchEndTime = compareTimeStamps(time, timeToEndLunch);
            if(minsBeforeOrAfterLunchEndTime < 0){
                let barWidth = minsBeforeOrAfterLunchEndTime >= -30 ? getPercentage(minsBeforeOrAfterLunchEndTime + 30,30) : 0
                return ["white", "salmon", barWidth];
            }
        }
        if(emp.lunchStartTime === null || emp.lunchEndTime === null) return ["dark-red", "none", 0];
    } else if(typeOfBreak === "break2"){
        //have section grayed out if 1. Is 6 hour day and break1 times not done or 2. Is more than 6 hour day and lunch times not done
        if(emp.hoursDaySeg === 6 && (emp.break1StartTime === null || emp.break1EndTime === null)) return ["light-grey", "none", 0];
        if(emp.hoursDaySeg > 6 && (emp.lunchStartTime === null || emp.lunchEndTime === null)) return ["light-grey", "none", 0]

        if(emp.break2StartTime === null){
            //these preferences are assuming it's an 8 hour day. ask costco ppl about times 6<X<8
            let prefEarliestStart = addTime(emp.segmentEnd, -150);
            let prefLatestStart = addTime(emp.segmentEnd, -15);
            let prevBreakEnd = emp.hoursDaySeg === 6 ? emp.break1EndTime: emp.lunchEndTime;
            let timeTillMandatoryNoBreakFinish = addTime(prevBreakEnd, 60);
            
            if(compareTimeStamps(time, prefEarliestStart) < 0){//T < A
                //range max is the bigger value between prefEarliestStart and timeTillMandatoryNoBreakFinish
                let rangeMax = (compareTimeStamps(prefEarliestStart, timeTillMandatoryNoBreakFinish)> 0) ? prefEarliestStart: timeTillMandatoryNoBreakFinish;
                let range = compareTimeStamps(rangeMax, prevBreakEnd);
                let numerator = compareTimeStamps(time, prevBreakEnd);
                return ["white", "green", getPercentage(numerator, range)]
            } else if(compareTimeStamps(time, prefLatestStart) <= 0){//T<B
                if(compareTimeStamps(time, timeTillMandatoryNoBreakFinish) < 0 && compareTimeStamps(prevBreakEnd, prefLatestStart) <= -75){ //if diff 
                    let range = 60;
                    let numerator = compareTimeStamps(time, prevBreakEnd);
                    return ["white", "green", getPercentage(numerator, range)]
                }
                let temp;
                if(compareTimeStamps(timeTillMandatoryNoBreakFinish, prefEarliestStart)<0) temp = prefEarliestStart  //If Y <A
                else if(compareTimeStamps(prevBreakEnd, prefLatestStart) <= -75)temp = timeTillMandatoryNoBreakFinish;//diff between x+60+15 and B is at least 75 mins
                else temp = prevBreakEnd;

                let range = compareTimeStamps(prefLatestStart, temp);
                let numerator = compareTimeStamps(time, temp);
                console.log(`${numerator}/${range}`)
                return ["green", "red", getPercentage(numerator, range)];
            }
        } else if(emp.break2EndTime === null){
            let timeToEndBreak2 = addTime(emp.break2StartTime, 15);
            let minsBeforeOrAfterBreak2EndTime = compareTimeStamps(time, timeToEndBreak2);
            if(minsBeforeOrAfterBreak2EndTime < 0){
                let barWidth = minsBeforeOrAfterBreak2EndTime >= -15 ? getPercentage(minsBeforeOrAfterBreak2EndTime + 15,15) : 0
                return ["white", "salmon", barWidth];
            }
        }
        if(emp.break2StartTime === null || emp.break2EndTime === null) return ["dark-red", "none", 0];
        
        
        
    }
    return ["light-grey", "none", 0]
}