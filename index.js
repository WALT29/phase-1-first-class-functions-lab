const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers=([x,y,z,a])=>{
    return [x,y];
}

console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers=([x,y,z,a])=>{
    return[z,a];
}
console.log(returnLastTwoDrivers(drivers));

let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier=(fare)=>{

    return function(multiplier){
        return fare*multiplier;
    }
}

const fareDoubler=createFareMultiplier(2);
console.log(fareDoubler(4));

const fareTripler=createFareMultiplier(3);

function selectDifferentDrivers(drivers,selectionFunction){
    return selectionFunction(drivers);

}