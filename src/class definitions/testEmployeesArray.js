import {Employee} from "./employee.js";
import {SortedArray} from "./sorted-array.js"
import { createTimeStamp } from "./helperFunctions.js";


// const firstNames = [
//   "James", "Mary", "Robert", "Patricia", "John", "Jennifer", "Michael", "Linda", "David", "Elizabeth",
//   "William", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen"
// ];

// const lastNames = [
//   "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
//   "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"
// ];

// function getRandomName(list, usedNames) {
//   let name;
//   do {
//     name = list[Math.floor(Math.random() * list.length)];
//   } while (usedNames.has(name));
//   usedNames.add(name);
//   return name;
// }
// console.log(getRandomName)

// const employeeArray = new SortedArray(Employee);
// const usedFirstNames = new Set();
// const usedLastNames = new Set();

// for (let i = 0; i < 40; i++) {
//   const firstName = getRandomName(firstNames, usedFirstNames);
//   const lastName = getRandomName(lastNames, usedLastNames);
//   const startHour = Math.floor(Math.random() * 12) + 7; // Random start between 7 AM - 6 PM
//   const startMinute = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
//   const endHour = startHour + Math.floor(Math.random() * 6) + 1; // Random end time 1-7 hours later
//   const endMinute = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
//   const positions = ["Cashier", "Cashier Asst", "Baker", "Door", "Sandwich Maker", "Chicken Maker", "Pharmacist"];
//   const departments = ["FRONT-END", "BAKERY", "MEMBERSHIP-SERVICE", "DELI", "PHARMACY"];
  
//   employeeArray.add(new Employee(
//     firstName,
//     lastName,
//     createTimeStamp(startHour, startMinute),
//     createTimeStamp(endHour, endMinute),
//     positions[Math.floor(Math.random() * positions.length)],
//     departments[Math.floor(Math.random() * departments.length)]
//   ));
// }


 //--------------------------------------------------------------------------


const employeeArray = new SortedArray(Employee);
employeeArray.add(new Employee("DONALD", "WOODS", createTimeStamp(8,30), createTimeStamp(9,30), "Cashier Asst", "FRONT-END")); //WEIRD SEG
employeeArray.add(new Employee("LIDA", "CARRANZA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("GUPTA", "SUDESH", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MOHAMMED", "SARA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("PETROGRADSKIY", "ARKADIY", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("COLE", "DAVID", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("ANGELITA", "TAPIA", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("GAIL", "GRAYBILL", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("LYDIA", "OPOKU", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("EVELYN", "REYES", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("HIRUTE", "TAKELE", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("ZOILA", "FLORES", createTimeStamp(10,30), createTimeStamp(15,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("KENNEDY", "AMPADU", createTimeStamp(10,30), createTimeStamp(12,30), "Cashier", "FRONT-END")); //WEIRD SEG
employeeArray.add(new Employee("HANIF", "MOHAMMAD", createTimeStamp(10,30), createTimeStamp(15,0), "Cashier", "FRONT-END")); 
employeeArray.add(new Employee("SAAD", "ANDRAOS", createTimeStamp(10,30), createTimeStamp(19,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("MARGARET", "NTIM", createTimeStamp(10,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));

employeeArray.add(new Employee("JIMMY", "HARRIS", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("JOE", "TISCHLER", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("EDISON", "MOLINA", createTimeStamp(11,15), createTimeStamp(19,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("GARY", "HOWARD", createTimeStamp(11,30), createTimeStamp(15,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("DAYSI", "HERNANDEZ", createTimeStamp(11,30), createTimeStamp(16,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("JONATHAN", "ROMERO", createTimeStamp(11,45), createTimeStamp(17,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("CHRISTIANA", "AMIHERE", createTimeStamp(12,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MABEL", "AMOABENG", createTimeStamp(12,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("DONALD", "WOODS", createTimeStamp(13,0), createTimeStamp(17,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("REYNA", "PEREIRA", createTimeStamp(13,0), createTimeStamp(18,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("KENNEDY", "AMPADU", createTimeStamp(15,0), createTimeStamp(19,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MARIA", "MORALES", createTimeStamp(16,0), createTimeStamp(21,0), "Cashier", "FRONT-END"));//WHAT IF SHE CLOCKED IN EARLY
employeeArray.add(new Employee("ADEWALE", "ADELEKE", createTimeStamp(16,0), createTimeStamp(21,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("ABI", "MEJIA", createTimeStamp(16,0), createTimeStamp(18,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("MARGARET", "NTIM", createTimeStamp(17,15), createTimeStamp(19,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("MABEL", "AMOABENG", createTimeStamp(17,15), createTimeStamp(21,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("HANIF", "MOHAMMAD", createTimeStamp(18,0), createTimeStamp(19,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee("JUDITH", "AMPONG", createTimeStamp(18,0), createTimeStamp(23,0), "Cashier Asst", "FRONT-END"));

employeeArray.add(new Employee("SOCHETA", "KHOUN", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("NILKA", "LAWSON", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("ABI", "MEJIA", createTimeStamp(11,15), createTimeStamp(19,45), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("COMFORT", "AFUA", createTimeStamp(11,30), createTimeStamp(15,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("MARGARITA", "ZELAYA", createTimeStamp(11,30), createTimeStamp(16,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("SARA", "ASTUDILLO", createTimeStamp(11,45), createTimeStamp(17,45), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("SILVIA", "CHEN", createTimeStamp(12,0), createTimeStamp(18,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("DONALD", "WOODS", createTimeStamp(12,45), createTimeStamp(15,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("CHRISTIANA", "AMIHERE", createTimeStamp(13,0), createTimeStamp(17,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee("JEANNE", "FUMEY", createTimeStamp(13,0), createTimeStamp(18,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("KENNEDY", "AMPADU", createTimeStamp(15,0), createTimeStamp(19,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("HANIF", "MOHAMMAD", createTimeStamp(16,0), createTimeStamp(21,0), "Self Check Out(X)", "FRONT-END"));//WHAT IF SHE CLOCKED IN EARLY
employeeArray.add(new Employee("MARGARET", "NTIM", createTimeStamp(16,0), createTimeStamp(21,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("MABEL", "AMOBENG", createTimeStamp(16,0), createTimeStamp(18,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("DAYSI", "HERNANDEZ", createTimeStamp(17,15), createTimeStamp(19,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("COMFORT", "AFUA", createTimeStamp(17,15), createTimeStamp(21,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("MARGARITA", "ZELAYA", createTimeStamp(18,0), createTimeStamp(19,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("ABI", "MEJIA", createTimeStamp(18,0), createTimeStamp(23,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("SARA", "ASTUDILLO", createTimeStamp(18,0), createTimeStamp(20,30), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee("ZACH", "LOUKAS", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("KWAME", "MANU", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("SHEKU", "CONTEH", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));



employeeArray.add(new Employee("ACQUAH", "JOEL", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("SCHULTZ", "CHAD", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("ABARIO", "FELIX", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("JOHNSON", "WILLIE", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("ROBERTS", "JAMES", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee("PONCE", "JOSE", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));

employeeArray.add(new Employee("TANAYA", "WILLIAMS", createTimeStamp(12,0), createTimeStamp(18,30), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("TATIANA", "MEJIA",  createTimeStamp(12,45), createTimeStamp(15,15), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee ("CARMELITA", "DE LEON", createTimeStamp(13,0), createTimeStamp(17,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("FATIMA", "ESTRADA",  createTimeStamp(13,0), createTimeStamp(18,15), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("BRIAN", "VILLALOBOS",  createTimeStamp(15,0), createTimeStamp(19,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("SOTHEAVY", "NGAN", createTimeStamp(16,0), createTimeStamp(21,0), "Sup Hourly", "ADMINISTRATION"));//WHAT IF SHE CLOCKED IN EARLY
employeeArray.add(new Employee("WISDOM", "ADOBLE", createTimeStamp(16,0), createTimeStamp(21,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("RODA", "VIERNES", createTimeStamp(16,0), createTimeStamp(18,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee("THERESA", "SALBURO", createTimeStamp(17,15), createTimeStamp(19,15), "Mgr Asst Dept", "ADMINISTRATION"));
employeeArray.add(new Employee("CHRISTOPHER", "RENNIE", createTimeStamp(17,15), createTimeStamp(21,15), "Mgr Asst Dept", "ADMINISTRATION"));
employeeArray.add(new Employee("IMAN", "BOUSALEH", createTimeStamp(18,0), createTimeStamp(19,0), "Mgr Staff", "ADMINISTRATION"));
employeeArray.add(new Employee("PONCE", "ROGER", createTimeStamp(18,0), createTimeStamp(23,0), "Sup in Training", "ADMINISTRATION"));




export default employeeArray;