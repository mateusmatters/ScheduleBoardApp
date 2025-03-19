import {Employee} from "./employee.js";
import {SortedArray} from "./sorted-array.js"
import { createTimeStamp } from "./helperFunctions.js";
const employeeArray = new SortedArray(Employee);
// employeeArray.add(new Employee("DONALD", "WOODS", createTimeStamp(8,30), createTimeStamp(9,30), "Cashier Asst", "FRONT-END")); //WEIRD SEG
// employeeArray.add(new Employee("LIDA", "CARRANZA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("GUPTA", "SUDESH", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("MOHAMMED", "SARA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("PETROGRADSKIY", "ARKADIY", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("COLE", "DAVID", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("ANGELITA", "TAPIA MUJICA", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("GAIL", "GRAYBILL", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("LYDIA", "OPOKU", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("EVELYN", "REYES", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("HIRUTE", "TAKELE", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("ZOILA", "FLORES", createTimeStamp(10,30), createTimeStamp(15,30), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("KENNEDY", "AMPADU", createTimeStamp(10,30), createTimeStamp(12,30), "Cashier", "FRONT-END")); //WEIRD SEG
// employeeArray.add(new Employee("HANIF", "MOHAMMAD", createTimeStamp(10,30), createTimeStamp(15,0), "Cashier", "FRONT-END")); 
// employeeArray.add(new Employee("SAAD", "ANDRAOS", createTimeStamp(10,30), createTimeStamp(19,0), "Cashier Asst", "FRONT-END"));
// employeeArray.add(new Employee("MARGARET", "NTIM", createTimeStamp(10,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));
// employeeArray.add(new Employee("BARACK", "OBAMA", createTimeStamp(13,45), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MICHELLE", "OBAMA", createTimeStamp(3,0), createTimeStamp(9,0), "Cashier", "FRONT-END"));


export default employeeArray;