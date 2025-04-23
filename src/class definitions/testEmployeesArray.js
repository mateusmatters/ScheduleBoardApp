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
employeeArray.add(new Employee(5823947,"DALE", "WOODS", createTimeStamp(8,30), createTimeStamp(9,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(1039482, "LIDA", "CARRANZA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(7492015, "GUAPA", "SUDDY", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(2384710, "MOHAMMED", "SARA", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(9901742, "PETROGRADSKIY", "ARKADIY", createTimeStamp(9,30), createTimeStamp(18,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(8172634, "COLE", "DAVID", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(4509218,"ANGELITA", "TAPIA", createTimeStamp(10,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(3748201,"GRAY", "GAILBILL", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(1203847,"LYDIA", "OTTOMON", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(6593820,"EVELYN", "REYES", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(7482910,"ROOTY", "TALAKEE", createTimeStamp(10,15), createTimeStamp(18,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(3029481,"ZEDWARD", "FLORES", createTimeStamp(10,30), createTimeStamp(15,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(9384712,"KENNEDY", "AMPADU", createTimeStamp(10,30), createTimeStamp(12,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(1293847,"HANIF", "MOHAMMAD", createTimeStamp(10,30), createTimeStamp(15,0), "Cashier", "FRONT-END")); 
employeeArray.add(new Employee(4850291,"SAAD", "ANDRAOS", createTimeStamp(10,30), createTimeStamp(19,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(5739204,"MARGARET", "NTIM", createTimeStamp(10,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));
// //---------------
employeeArray.add(new Employee(6820149,"JIMMY", "HAROLD", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(1948203,"JOE", "TISCHLER", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(8401923,"THOMAS", "MOLINA", createTimeStamp(11,15), createTimeStamp(19,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(2948173,"GARY", "HOWARD", createTimeStamp(11,30), createTimeStamp(15,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(3840291,"DAYSI", "HERNANDEZ", createTimeStamp(11,30), createTimeStamp(16,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(1209483,"JONATHAN", "ROMERO", createTimeStamp(11,45), createTimeStamp(17,45), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(5839201,"CHRISTIANA", "AMIHERE", createTimeStamp(12,0), createTimeStamp(18,30), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(8392017,"MABEL", "AMOABENG", createTimeStamp(12,45), createTimeStamp(15,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(4982013,"DALE", "WOODS", createTimeStamp(13,0), createTimeStamp(17,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(2384729,"REYNA", "PEREIRA", createTimeStamp(13,0), createTimeStamp(18,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(9820341,"KENNEDY", "AMPADU", createTimeStamp(15,0), createTimeStamp(19,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(4029381,"MARIA", "MORALES", createTimeStamp(16,0), createTimeStamp(21,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(7402918,"ADEWALE", "ADELEKE", createTimeStamp(16,0), createTimeStamp(21,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(5948201,"ABI", "MEJIA", createTimeStamp(16,0), createTimeStamp(18,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(3948205,"MARGARET", "NTIM", createTimeStamp(17,15), createTimeStamp(19,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(1239840,"MABEL", "AMOABENG", createTimeStamp(17,15), createTimeStamp(21,15), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(2309481,"HANIF", "MOHAMMAD", createTimeStamp(18,0), createTimeStamp(19,0), "Cashier", "FRONT-END"));
employeeArray.add(new Employee(9482012,"JUDY", "AMP", createTimeStamp(18,0), createTimeStamp(23,0), "Cashier Asst", "FRONT-END"));
// //---------------
employeeArray.add(new Employee(8920410,"SOCHETA", "KHOUN", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(7401823,"NILKA", "LAWSON", createTimeStamp(11,0), createTimeStamp(19,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(9283014,"ABI", "MEJIA", createTimeStamp(11,15), createTimeStamp(19,45), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(1840293,"COMFORA", "AFA", createTimeStamp(11,30), createTimeStamp(15,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(6203847,"MARGARITA", "ZELAYA", createTimeStamp(11,30), createTimeStamp(16,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(8493021,"SARA", "ASTUDILLO", createTimeStamp(11,45), createTimeStamp(17,45), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(7891234,"SILVIA", "CHEN", createTimeStamp(12,0), createTimeStamp(18,30), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(2139847,"DALE", "WOODS", createTimeStamp(12,45), createTimeStamp(15,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(3840921,"CHRISTIANA", "AMIHERE", createTimeStamp(13,0), createTimeStamp(17,0), "Cashier Asst", "FRONT-END"));
employeeArray.add(new Employee(8492013,"JEANNE", "FUMEY", createTimeStamp(13,0), createTimeStamp(18,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(1209384,"KENNEDY", "AMPADU", createTimeStamp(15,0), createTimeStamp(19,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(4392018,"HANIF", "MOHAMMAD", createTimeStamp(16,0), createTimeStamp(21,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(5849302,"MARGARET", "NTIM", createTimeStamp(16,0), createTimeStamp(21,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(7203841,"MABEL", "AMOBENG", createTimeStamp(16,0), createTimeStamp(18,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(9834721,"DAYSI", "HERNANDEZ", createTimeStamp(17,15), createTimeStamp(19,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(6902814,"COMFORA", "AFA", createTimeStamp(17,15), createTimeStamp(21,15), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(1000001,"MARGARITA", "ZELAYA", createTimeStamp(18,0), createTimeStamp(19,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(1000002,"ABI", "MEJIA", createTimeStamp(18,0), createTimeStamp(23,0), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(1000003,"SARA", "ASTUDILLO", createTimeStamp(18,0), createTimeStamp(20,30), "Self Check Out(X)", "FRONT-END"));
employeeArray.add(new Employee(1000004,"ZACH", "LOUKAS", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000005,"KWAME", "MANU", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000006,"SHEKU", "CONTEH", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));
// //---------------
employeeArray.add(new Employee(1000007,"ACQUAH", "JOEL", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000008,"SCHULTZ", "CHAD", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000009,"ABARIO", "FELIX", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000010,"JOHNSON", "WILLIE", createTimeStamp(9,30), createTimeStamp(18,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000011,"ROBERTS", "JAMES", createTimeStamp(10,0), createTimeStamp(15,0), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000012,"PONCE", "JOSE", createTimeStamp(10,30), createTimeStamp(15,30), "Cart Crew(X)", "LOT-CREW"));
employeeArray.add(new Employee(1000013,"TANAYA", "WILLIAMS", createTimeStamp(12,0), createTimeStamp(18,30), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000014,"TATIANA", "MEJIA",  createTimeStamp(12,45), createTimeStamp(15,15), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000015,"CARMELITA", "DE LEON", createTimeStamp(13,0), createTimeStamp(17,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000016,"FATIMA", "ESTRADA",  createTimeStamp(13,0), createTimeStamp(18,15), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000017,"BRIAN", "VILLALOBOS",  createTimeStamp(15,0), createTimeStamp(19,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000018,"SOTHEAVY", "NGAN", createTimeStamp(16,0), createTimeStamp(21,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000019,"WISDOM", "ADOBLE", createTimeStamp(16,0), createTimeStamp(21,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000020,"RODA", "VIERNES", createTimeStamp(16,0), createTimeStamp(18,0), "Sup Hourly", "ADMINISTRATION"));
employeeArray.add(new Employee(1000021,"THERESA", "SALBURO", createTimeStamp(17,15), createTimeStamp(19,15), "Mgr Asst Dept", "ADMINISTRATION"));
employeeArray.add(new Employee(1000022,"CHRISTOPHER", "RENNIE", createTimeStamp(17,15), createTimeStamp(21,15), "Mgr Asst Dept", "ADMINISTRATION"));
employeeArray.add(new Employee(1000023,"IMAN", "BOUSALEH", createTimeStamp(18,0), createTimeStamp(19,0), "Mgr Staff", "ADMINISTRATION"));
employeeArray.add(new Employee(1000024,"ROGER", "PINNACLE", createTimeStamp(18,0), createTimeStamp(23,0), "Sup in Training", "ADMINISTRATION"));
// //---------------
employeeArray.add(new Employee(1000025,"DELMIS", "MEDRANO", createTimeStamp(10,30), createTimeStamp(19,0), "Sup Hourly", "MEMBERSHIP"));
employeeArray.add(new Employee(1000026,"JENNY", "KNOL", createTimeStamp(11,0), createTimeStamp(19,30), "Mgr Dept", "MEMBERSHIP"));
employeeArray.add(new Employee(1000027,"BERNICE", "ALLOTEY", createTimeStamp(9,30), createTimeStamp(18,0), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000028,"ALEJANDRO", "HERRERA", createTimeStamp(9,30), createTimeStamp(18,0), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000029,"GLORIA", "CACERES", createTimeStamp(9,45), createTimeStamp(18,15), "Refund Cashier", "MEMBERSHIP"));
employeeArray.add(new Employee(1000030,"HA", "DAM", createTimeStamp(9,45), createTimeStamp(18,15), "Refund Cashier", "MEMBERSHIP"));
employeeArray.add(new Employee(1000031,"VIGNON", "WILSON", createTimeStamp(10,0), createTimeStamp(18,30), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000032,"MAY", "WU", createTimeStamp(10,0), createTimeStamp(18,30), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000033,"MILA", "AFABLE", createTimeStamp(12,30), createTimeStamp(21,0), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000034,"PEI", "WANG", createTimeStamp(12,30), createTimeStamp(21,0), "Membership Clerk", "MEMBERSHIP"));
employeeArray.add(new Employee(1000035,"PATRICIA", "VILL", createTimeStamp(15,0), createTimeStamp(21,0), "Refund Cashier", "MEMBERSHIP"));
employeeArray.add(new Employee(1000036,"ANDERESA", "HERN", createTimeStamp(16,0), createTimeStamp(21,0), "Refund Cashier", "MEMBERSHIP"));
employeeArray.add(new Employee(1000037,"THERESE", "FOUDA", createTimeStamp(16,0), createTimeStamp(21,0), "Refund Cashier", "MEMBERSHIP"));
employeeArray.add(new Employee(1000038,"THAI", "NGUY", createTimeStamp(16,0), createTimeStamp(21,0), "Refund Cashier", "MEMBERSHIP"));
// //---------------
employeeArray.add(new Employee(1000039,"MARCO", "CANDLE", createTimeStamp(3,0), createTimeStamp(11,30), "Maintenance Clerk", "MAINTENANCE"));
employeeArray.add(new Employee(1000040,"SONICA", "VENTIS", createTimeStamp(6,15), createTimeStamp(14,45), "Maintenance Asst", "MAINTENANCE"));
employeeArray.add(new Employee(1000041,"RUBY", "FELICIANDO", createTimeStamp(8,0), createTimeStamp(13,0), "Maintenance Asst", "MAINTENANCE"));
employeeArray.add(new Employee(1000042,"TREVEOR", "BORTANDO", createTimeStamp(11,0), createTimeStamp(19,30), "Maintenance Asst", "MAINTENANCE"));
employeeArray.add(new Employee(1000043,"LIBERTY", "WEST", createTimeStamp(17,0), createTimeStamp(22,0), "Maintenance Asst", "MAINTENANCE"));
employeeArray.add(new Employee(1000044,"GEORGE", "NGUY", createTimeStamp(18,0), createTimeStamp(23,0), "Maintenance Asst", "MAINTENANCE"));




export default employeeArray;