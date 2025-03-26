import { queryHelpers } from "@testing-library/dom";
import {Employee} from "./employee.js";

export class SortedArray {
    constructor(elementType) {
      if (typeof elementType.prototype.toString !== "function" || typeof elementType.prototype.compareTo !== "function") {
        throw new Error("Element type must implement toString() and compareTo() methods");
      }
      this._elementType = elementType;
      this._array = [];
    }

    get array(){
      return this._array;
    }
    set array(otherArray){
      //put some code later that checks for the type of the parameter
      this._array = otherArray;
    }

    get size(){
      return this._array.length;
    }

    get elementType() {
      return this._elementType
    }
  
    add(element){
      if(!(element instanceof this._elementType)){
        throw new TypeError(`Element must be of type ${this._elementType}`)
      }
      let left = 0;
      let right = this._array.length;

      // Use binary search to find the correct insertion index.
      while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (this._array[mid].compareTo(element) < 0) { //less than
          left = mid + 1;
        } else { //equal or greater than
          right = mid;
        }
      }
      // left is now the insertion index
      this._array.splice(left,0,element);
      return this._arrary;
    }

    deleteElement(){

    }

    getSpecificDepartment(departmentName){
      if (!departmentName) return this._array;
      let retValue = this._array.filter(employee => employee.department === departmentName);
      console.log("the ret value size is: ", retValue.length);
      return retValue;

    }

    toString() {
      let retString ="{";
      for (let element of this._array){
        retString = retString + element.toString()+", "
      }
      if( retString.length == 1) return "{}";
      return retString.slice(0, retString.length-2) + "}";
    }  
}

