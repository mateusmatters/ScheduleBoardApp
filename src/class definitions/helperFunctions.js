// const START_TIME = 0;
// const END_TIME = 1;

// export class Employee {
//     constructor(firstName, lastName, segmentStart, segmentEnd, role, department ="No Department") {
//       if (!firstName, !lastName || !segmentStart || !segmentEnd) {
//         throw new Error("name, segmentStart, and segmentEnd are required fields.");
//       }
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.segmentStart = segmentStart;
//       this.segmentEnd = segmentEnd;
//       this.break1 = [null, null];
//       this.lunch = [null, null];
//       this.break2 = [null, null]
//       this.hoursDaySeg = getDifferenceTimeStamps(segmentStart, segmentEnd);
//       this.role = role;
//       this.department = department;
//       this.isClockedIn= false;
//     }

//     get fullName(){
//         return `${this.lastName}, ${this.firstName}`
//     }

//     get break1StartTime(){
//         return this.break1[START_TIME];
//     }
//     get break1EndTime(){
//         return this.break1[END_TIME];
//     }

//     get break2StartTime(){
//         return this.break2[START_TIME];
//     }
//     get break2EndTime(){
//         return this.break2[END_TIME];
//     }
    
//     get lunchStartTime(){
//         return this.lunch[START_TIME];
//     }
//     get lunchEndTime(){
//         return this.lunch[END_TIME];
//     }

//     get segStartString(){
//         return simplifiedTimeStampString(this.segmentStart);
//     }

//     get segEndString(){
//         return simplifiedTimeStampString(this.segmentEnd);
//     }
//     get hoursDaySegString(){
//         let temp = String(this.hoursDaySeg);
//         if(temp.length ==1){
//             return temp + ".00"
//         } else if(temp.length == 3){
//             return temp + "0"
//         } else {
//             return temp;
//         }
//     }


//     //compares each employee in a heiarchy of segment start, segment end, last name, first name
//     compareTo(other) {
//         return (
//             compareTimeStamps(this.segmentStart, other.segmentStart) ||
//             compareTimeStamps(this.segmentEnd, other.segmentEnd) ||
//             this.lastName.localeCompare(other.lastName) ||
//             this.firstName.localeCompare(other.firstName)
//         );
//     }

//     // Example method to display employee details
//     toString() {
//         const breaks = [
//             { start: this.break1[START_TIME], end: this.break1[END_TIME] },
//             { start: this.break2[START_TIME], end: this.break2[END_TIME] },
//             { start: this.lunch[START_TIME], end: this.lunch[END_TIME] }
//         ];
        
//         const [break1StartStr, break1EndStr, break2StartStr, break2EndStr, lunchStartStr, lunchEndStr] = breaks.flatMap(({ start, end }) => [
//             start !== null ? simplifiedTimeStampString(start) : "DNE",
//             end !== null ? simplifiedTimeStampString(end) : "DNE"
//         ]);

//         return `
//         {
//             Name: ${this.firstName} ${this.lastName}: ${this.isClockedIn ? "CLOCKED IN": "NOT CLOCKED IN"},
//             Segment: ${simplifiedTimeStampString(this.segmentStart)} - ${simplifiedTimeStampString(this.segmentEnd)},
//             Work Hours: ${this.hoursDaySeg},
//             Role: ${this.role},
//             Department: ${this.department},
//             Break1: ${break1StartStr} - ${break1EndStr},
//             Lunch: ${lunchStartStr} - ${lunchEndStr},
//             Break2: ${break2StartStr} - ${break2EndStr},
//         }
//         `;
//     }
//     toStringSimplified() {
//         return `{Name: ${this.firstName} ${this.lastName}}`;
//       }
// }





















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

export function chooseRightBackgroundColor(employee, typeOfBreak){
    if(!employee.isClockedIn){
      return "grey";
    }
    if(typeOfBreak === "break1"){
      if(employee.break1StartTime !== null && employee.break1EndTime !== null){
        return "light-grey"
      }
    }
    if(typeOfBreak === "lunch"){
      //make cell light grey if break1 still needs to be entered or start and end time in lunch has already been filled
      if((employee.lunchStartTime !== null && employee.lunchEndTime !== null) || (employee.break1StartTime === null || employee.break1EndTime === null)){
        return "light-grey"
      }
    }
    if(typeOfBreak === "break2"){
      //make cell light grey if time === 6 hours and break1 is null
      //also make cell light grey if time is over 8 hours and break1 and lunch is null
      if((employee.hoursDaySeg === 6 && (employee.break1StartTime === null || employee.break1EndTime === null))||
      employee.break1StartTime === null || employee.break1EndTime === null || employee.lunchStartTime === null || employee.lunchEndTime === null){
        return "light-grey";
      }
  
    }
    return "white";
  }
  
//[backgroundColor, progressBarColor]
export function chooseRightProgressBarColor(employee, typeOfBreak, time){
    if(!employee.isClockedIn){
        return "none";
    }
    //either the start or end time for break 1 is null, you must show some type of bar
    if(typeOfBreak === "break1"){
            let hey = yoyo(employee, time);
            if(employee.break1StartTime === null){
                if(hey<0){//show a green bar if you are waiting to be in alloted time for a break
                    return "green";
                } else if(hey>0 && hey < 120){//show red bar if you are currently in alloted time for a break
                    return "red"
                }
            } else if(employee.break1EndTime === null){
                if(hey < 0){//show salmon bar if (start time given and end time not given) and (in alloted time)
                    return "salmon";
                } else{//show none if (start time given and end time not given) and (not in alloted time)
                    return "none";
                }
            }
            return "none"
    }
    if(typeOfBreak === "lunch"){
        //make cell light grey if break1 still needs to be entered or start and end time in lunch has already been filled
        if((employee.lunchStartTime !== null && employee.lunchEndTime !== null) || (employee.break1StartTime === null || employee.break1EndTime === null)){
        return "none"
        }
    }
    if(typeOfBreak === "break2"){
        //make cell show no progress bar if time === 6 hours and break1 is null
        //also make cell show no progress bar if time is over 8 hours and break1 and lunch is null
        if((employee.hoursDaySeg === 6 && (employee.break1StartTime === null || employee.break1EndTime === null))||
        employee.break1StartTime === null || employee.break1EndTime === null || employee.lunchStartTime === null || employee.lunchEndTime === null){
        return "none";
        }

    }
    return "none";
}


function yoyo(employee, currentTime){
    if(employee.break1StartTime === null){
        let timeWhereBreakPermissable = addTime(employee.segmentStart, 120);
        let b = compareTimeStamps(currentTime, timeWhereBreakPermissable);
        return b;
    } else if(employee.break1StartTime !== null && employee.break1EndTime === null){
        let timeLeftInBreak = addTime(employee.break1StartTime, 15);
        console.log(`time left in the break is :${timeLeftInBreak}`)
        let b = compareTimeStamps(currentTime, timeLeftInBreak);
        return b;
    }
    return 0;
}

export function widthPercentage(employee, currentTime){
    let temp = yoyo(employee, currentTime);
    console.log(`first thing is ${temp}`);
    if(employee.break1StartTime=== null){
        if(temp <0){
            let a = ((120 + temp)/120) *100;//bc 2 hrs
            let answer = Math.round(a);
            console.log(`the answer is ${answer}`);
            return answer;
        } else if(temp >=0 && temp <=120){
            return Math.round((temp/120) * 100);
        }
    } else if(employee.break1EndTime=== null){
        let startTimewithFifteenMinutesAdded = addTime(employee.break1StartTime, 15);
        let c = compareTimeStamps(currentTime, startTimewithFifteenMinutesAdded);
        if(c<0){
            let d = 15+ c;
            return Math.round((d/15)*100);
        }
    }
    
    return 0;

}



// let m = new Employee("MICHELLE", "OBAMA", createTimeStamp(0,0), createTimeStamp(5,0), "Cashier", "FRONT-END");
// const currTime = new Date();
// currTime.setHours(1, 59, 0, 0); // Set time to 00:00
