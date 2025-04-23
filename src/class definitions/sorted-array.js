function areNamesSimilar(partialOrWholeName, wholeName){
  if (typeof partialOrWholeName !== 'string' || typeof wholeName !== 'string') {
    throw new Error("Both inputs must be strings");
  }
  // Create a regex pattern that checks if partialOrWholeName matches from the start of wholeName
  let regex = new RegExp(`^${partialOrWholeName}`, "i"); // ^ ensures it matches from the beginning
  return regex.test(wholeName);
}

//can return empty array, or array of names from employeeList inputted
export function findSimilarNameInList(inputName, employeeList){
  if(inputName.length ===0) return employeeList;
  if (!/^[A-Za-z'-]+ ?(?: [A-Za-z'-]+)?$/.test(inputName)) throw new Error("Invalid format. Expecting only one or two names. Either first, last, or both");
  if(employeeList.length <1) return [];

  let match = inputName.match(/^([A-Za-z'-]+) ?([A-Za-z'-]+)?$/);
  let name1 = match[1]; // First name (always present)
  let name2 = match[2] || null; // Second name (optional, defaults to null)
  let retArray = [];
  if (name2 === null){
    for (let employee of employeeList){
      if(areNamesSimilar(name1, employee.firstName) || areNamesSimilar(name1, employee.lastName)){
        retArray.push(employee);
      }
    }
  } else{
    for(let employee of employeeList){
      if(areNamesSimilar(name1, employee.firstName) && areNamesSimilar(name2, employee.lastName)){
        retArray.push(employee);
      } else if(areNamesSimilar(name1, employee.lastName) && areNamesSimilar(name2, employee.firstName)){
        retArray.push(employee);
      }
    }
  }
  return retArray;
}


export class SortedArray {
    constructor(elementType) {
      if (typeof elementType.prototype.toString !== "function" || typeof elementType.prototype.compareTo !== "function") {
        throw new Error("Element type must implement toString() and compareTo() methods");
      }
      this._elementType = elementType;
      this._array = [];
    }

    get array(){return this._array}
    get size(){return this._array.length}
    get elementType() {return this._elementType}

    set array(otherArray){
      //put some code later that checks for the type of the parameter
      this._array = otherArray;
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


    //employee specific function
    getSpecificDepartment(departmentName){
      if (!departmentName || departmentName=== "ALL") return this._array;
      let retValue = this._array.filter(employee => employee.department === departmentName);
      return retValue;
    }

    findEmployeeById(id){
      const employee = this._array.find(emp => emp.id === id);
      if(!employee) {throw new Error(`Employee with ID ${id} not found`)}
      return employee;
    }

    toString() {
      let retString ="{";
      for (let element of this._array){
        retString = retString + element.toStringSimplified()+", "
      }
      if( retString.length == 1) return "{}";
      return retString.slice(0, retString.length-2) + "}";
    }  
}