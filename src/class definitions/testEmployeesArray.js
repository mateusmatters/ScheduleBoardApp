import {Employee} from "./employee.js";
import {SortedArray} from "./sorted-array.js"
import { createTimeStamp } from "./helperFunctions.js";
const employeeArray = new SortedArray(Employee);
employeeArray.add(new Employee("DONALD", "WOODS", createTimeStamp(8,30), createTimeStamp(9,30), "Cashier Asst", "FRONT-END")); //WEIRD SEG
employeeArray.add(new Employee("LIDA", "CARRANZA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("GUPTA", "SUDESH", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MOHAMMED", "SARA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("PETROGRADSKIY", "ARKADIY", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("COLE", "DAVID", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("ANGELITA", "TAPIA MUJICA", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("GAIL", "GRAYBILL", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("LYDIA", "OPOKU", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("EVELYN", "REYES", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("HIRUTE", "TAKELE", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("ZOILA", "FLORES", createTimeStamp(10,30), createTimeStamp(15,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("KENNEDY", "AMPADU", createTimeStamp(10,30), createTimeStamp(12,30), "Cashier", "FRONT-END")); //WEIRD SEG
employeeArray.add(new Employee("HANIF", "MOHAMMAD", createTimeStamp(10,30), createTimeStamp(15,0), "Cashier", "FRONT-END")); 
employeeArray.add(new Employee("SAAD", "ANDRAOS", createTimeStamp(10,30), createTimeStamp(19,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("MARGARET", "NTIM", createTimeStamp(10,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("BARACK", "OBAMA", createTimeStamp(13,45), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MICHELLE", "OBAMA", createTimeStamp(7,0), createTimeStamp(13,0), "Cashier", "FRONT-END"));

employeeArray.add(new Employee("WIZ", "KHALIFA", createTimeStamp(8,30), createTimeStamp(9,30), "Baker", "BAKERY")); //WEIRD SEG
employeeArray.add(new Employee("SHECK", "WES", createTimeStamp(9,30), createTimeStamp(18,0), "Baker", "BAKERY"));
employeeArray.add(new Employee("JERMAINE", "COLE", createTimeStamp(9,30), createTimeStamp(18,0), "Baker", "BAKERY"));
employeeArray.add(new Employee("AUBREY", "GRAHM", createTimeStamp(9,30), createTimeStamp(18,0), "Baker", "BAKERY"));
employeeArray.add(new Employee("TYRESSE", "OWENS", createTimeStamp(9,30), createTimeStamp(18,0), "Baker", "BAKERY"));
employeeArray.add(new Employee("CANDICE", "OWENS", createTimeStamp(10,0), createTimeStamp(18,30), "Door", "MEMBERSHIP-SERVICE"));
employeeArray.add(new Employee("JACK", "BLACK", createTimeStamp(10,0), createTimeStamp(18,30), "Door", "MEMBERSHIP-SERVICE"));
employeeArray.add(new Employee("LEONARDO", "DICAPRIO", createTimeStamp(10,15), createTimeStamp(18,45), "Door", "MEMBERSHIP-SERVICE"));
employeeArray.add(new Employee("SCARLET", "JOHANSON", createTimeStamp(10,15), createTimeStamp(18,45), "Door", "MEMBERSHIP-SERVICE"));
employeeArray.add(new Employee("CHRIS", "HEMSWORTH", createTimeStamp(10,15), createTimeStamp(18,45), "Sandwich Maker", "DELI"));
employeeArray.add(new Employee("TOM", "HOLLAND", createTimeStamp(10,15), createTimeStamp(18,45), "Sandwich Maker", "DELI"));
employeeArray.add(new Employee("ROBERT", "DOWEY", createTimeStamp(10,30), createTimeStamp(15,30), "Chicken Maker", "DELI"));
employeeArray.add(new Employee("CHRIS", "EVANS", createTimeStamp(10,30), createTimeStamp(12,30), "Sandwich Maker", "DELI")); //WEIRD SEG
employeeArray.add(new Employee("DARREN", "WATKINS", createTimeStamp(10,30), createTimeStamp(15,0), "Chicken Maker", "DELI")); 
employeeArray.add(new Employee("CHRISTOPHER", "NOLAN", createTimeStamp(10,30), createTimeStamp(19,0), "Pharmacist", "PHARMACY"));
employeeArray.add(new Employee("ADAM", "LEVINE", createTimeStamp(10,45), createTimeStamp(15,15), "Pharmacist", "PHARMACY"));
employeeArray.add(new Employee("BRITTANEY", "SPEARS", createTimeStamp(13,45), createTimeStamp(18,45), "Pharmacist", "PHARMACY"));
employeeArray.add(new Employee("MILEY", "CYRUS", createTimeStamp(7,0), createTimeStamp(13,0), "Pharmacist", "PHARMACY"));

export default employeeArray;