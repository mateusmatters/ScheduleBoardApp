import { compareTimeStamps, simplifiedTimeStampString} from "./helperFunctions.js";

const START_TIME = 0;
const END_TIME = 1;

// noShow BOOLEAN
// job STRING
// firstName STRING
// lastName STRING
// hoursDaySeg [Number, Number]
// segStart DATE
// break1 Arr[DATE, DATE]
// lunch Arr[DATE, DATE]
// break2 Arr[DATE, DATE]
// segEnd DATE
// waiver STRING
// duties STRING


export function correctHoursDaySeg(earlyTimeStamp, laterTimeStamp){
    let differenceHours = laterTimeStamp.getHours() - earlyTimeStamp.getHours();
    let differenceMinutes = laterTimeStamp.getMinutes() - earlyTimeStamp.getMinutes();
    if(differenceMinutes < 0){
        differenceHours = differenceHours -1;
        differenceMinutes = 60 + differenceMinutes;
    }
    let differenceCombined = differenceHours + (differenceMinutes/60)
    let roundUpTwoDecimals = Math.ceil(differenceCombined * 100) / 100;
    //returns the difference if normal, the difference - .5 hours if over 6 hours diff (mandatory lunch time needed)
    return roundUpTwoDecimals >6 ? roundUpTwoDecimals - 0.5: roundUpTwoDecimals;
}

export class Employee {
    constructor(id, firstName, lastName, segmentStart, segmentEnd, role, department ="No Department") {
      if (!firstName, !lastName || !segmentStart || !segmentEnd) {
        throw new Error("name, segmentStart, and segmentEnd are required fields.");
      }
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.segmentStart = segmentStart;
      this.segmentEnd = segmentEnd;
      this.break1 = [null, null];
      this.lunch = [null, null];
      this.break2 = [null, null]
      this.hoursDaySeg = correctHoursDaySeg(segmentStart, segmentEnd);
      this.role = role;
      this.department = department;
      this.isClockedIn= false;
    }

    get fullName(){return `${this.lastName}, ${this.firstName}`}

    get break1StartTime(){return this.break1[START_TIME];}
    get break1EndTime(){return this.break1[END_TIME];}

    get break2StartTime(){return this.break2[START_TIME];}
    get break2EndTime(){return this.break2[END_TIME];}
    
    get lunchStartTime(){return this.lunch[START_TIME];}
    get lunchEndTime(){return this.lunch[END_TIME];}

    get segStartString(){return simplifiedTimeStampString(this.segmentStart);}

    get segEndString(){return simplifiedTimeStampString(this.segmentEnd);}
    get hoursDaySegString(){
        let temp = String(this.hoursDaySeg);
        if(temp.length ==1){
            return temp + ".00"
        } else if(temp.length == 3){
            return temp + "0"
        } else {
            return temp;
        }
    }


    //compares each employee in a heiarchy of segment start, segment end, last name, first name
    compareTo(other) {
        return (
            compareTimeStamps(this.segmentStart, other.segmentStart) ||
            compareTimeStamps(this.segmentEnd, other.segmentEnd) ||
            this.lastName.localeCompare(other.lastName) ||
            this.firstName.localeCompare(other.firstName)
        );
    }

    // Example method to display employee details
    toString() {
        const breaks = [
            { start: this.break1[START_TIME], end: this.break1[END_TIME] },
            { start: this.break2[START_TIME], end: this.break2[END_TIME] },
            { start: this.lunch[START_TIME], end: this.lunch[END_TIME] }
        ];
        
        const [break1StartStr, break1EndStr, break2StartStr, break2EndStr, lunchStartStr, lunchEndStr] = breaks.flatMap(({ start, end }) => [
            start !== null ? simplifiedTimeStampString(start) : "DNE",
            end !== null ? simplifiedTimeStampString(end) : "DNE"
        ]);

        return `
        {
            Name: ${this.firstName} ${this.lastName}: ${this.isClockedIn ? "CLOCKED IN": "NOT CLOCKED IN"},
            Segment: ${simplifiedTimeStampString(this.segmentStart)} - ${simplifiedTimeStampString(this.segmentEnd)},
            Work Hours: ${this.hoursDaySeg},
            Role: ${this.role},
            Department: ${this.department},
            Break1: ${break1StartStr} - ${break1EndStr},
            Lunch: ${lunchStartStr} - ${lunchEndStr},
            Break2: ${break2StartStr} - ${break2EndStr},
        }
        `;
    }
    toStringSimplified() {return `{Name: ${this.firstName} ${this.lastName}}`}
}
