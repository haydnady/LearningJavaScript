// Values and Variables
let country = "USA"
let continent = "North America"
let population = "999999999"

/*
console.log(country)
console.log(continent)
console.log(population)
*/

// Data Types
let isIsland = false
let language
/*
console.log(typeof(isIsland))
console.log(typeof(population))
console.log(typeof(country))
console.log(typeof(language))
console.log(typeof(language))
*/

// Calculate BMI
const johnsHeight = 1.95;
const johnsMass = 92;
const marksHeight = 1.69;
const marksMass = 78;

const johnsBMI = johnsMass / johnsHeight **2;
const marksBMI = marksMass / (marksHeight * marksHeight);

const markHigherBMI = (marksBMI > johnsBMI)
console.log("Mark BMI:", marksBMI, "John BMI", johnsBMI)
console.log("Mark has higher BMI than John:", markHigherBMI)

// Template literals
const addedBMI = `Mark + John BMI: ${johnsBMI + marksBMI}`;
console.log(addedBMI)