// Loop through the following array and count how many "computers" there are. Log the final count:
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];  
// function computerCount(str){
//     var arr = officeItems;
//     var compCount = 0;
//     for (var i = 0; i < arr.length; i++){
//         if (arr[i] === str){
//             compCount++;
//         }
//     }
//     return compCount; 
// }
// console.log(computerCount("computer"));
// Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [  
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
] 
var arr = peopleWhoWantToSeeMadMaxFuryRoad;
function ageValidator(arr){
    // var arr = peopleWhoWantToSeeMadMaxFuryRoad;
    for (var i = 0; i < arr.length; i++){
        if (arr[i].age >= 18){
            console.log(arr[i].name + " is old enough to see Mad Max");
        } else {
            console.log(arr[i].name + " is not old enough to see Mad Max");
        }
        
    }
}
console.log(ageValidator(arr));

