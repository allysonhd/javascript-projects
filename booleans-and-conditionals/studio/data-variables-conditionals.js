// Initialize Variables below
const date = "Monday 2019-03-18"
const time = "10:05:34 AM"
const astronautCount = 7
const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = (astronautCount*averageAstronautMassKg)
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = (crewMassKg + fuelMassKg + shuttleMassKg)
const maximumMassLimit = 850000
const feulTempCelcius = -225
const minimumFuelTemp = -300
const maximumFuelTemp = -150
const fuelLevel = "100%"
const weatherStatus = "clear"
let preparedForLiftOff = true


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
    console.log("Too many astronauts.");
} 

// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    preparedForLiftOff = false;
    console.log("Atronauts not ready.");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > 850000) {
    preparedForLiftOff = false;
    console.log("Warning: total mass exceeds limit.");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (maximumFuelTemp > -150 || minimumFuelTemp < -300) {
    preparedForLiftOff = false;
    console.log("Warning: check fuel temperature");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false;
    console.log("Warning: Check fuel level.");
}
// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    preparedForLiftOff = false;
    console.log("Warning: check weather status.");
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff !== true) {
    console.log("Mission scrubbed.");
} else {
    console.log("Ok to go!");
}