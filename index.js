

function wakeDog(dogName, dogBreed) {
	let wake = (`Wake ${dogName} the ${dogBreed}`)
  console.log(wake)
  return wake
};

function leashDog(dogName, dogBreed) {
  let leash = (`Leash ${dogName} the ${dogBreed}`)
  console.log(leash)
  return leash
};

function walkToPark(dogName, dogBreed){
  let walk = (`Walk to the park with ${dogName} the ${dogBreed}`)
  console.log(walk)
  return walk
};

function throwFrisbee(dogName, dogBreed){
  let play = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
  console.log(play)
  return play
};

function walkHome(dogName, dogBreed){
  let home = (`Walk home with ${dogName} the ${dogBreed}`)
  console.log(home)
  return home
};

function unleashDog(dogName, dogBreed){
  let unleash = (`Unleash ${dogName} the ${dogBreed}`)
  console.log(unleash)
  return unleash
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]



function exerciseDog(dogName, dogBreed){
  let array = routine.map(function(activity) {
    return activity(dogName, dogBreed)
  })
  return array
}



//Iterate over the routine Array
// Call each function in the array and
// pass the dogName and dogBreed received by exerciseDog() to the function as they are called
// capture the result of each function's call
// return an Array of all those functions' return values

//1. make an array called routine that contains all of the "exercise" functions

//2.





// console.log("Unleash Byron the poodle");
