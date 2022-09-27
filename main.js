// document.getElementById(count-el).innerText=5

// let myage = 19
// console.log(myage)

// let firstbatch = 5
// let secondbatch = 6

// let count = firstbatch + secondbatch

// console.log(count)

// let myAge = 19
// let humanDogRatio = 7
// const myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// FUNCTION

// function logout() {

//     console.log(42)
    
// }
// logout()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function myLogger() {
//     let totalLapTime = lap1 + lap2 + lap3
//     console.log(totalLapTime)
// }
// myLogger()

// let lapsCompleted = 0

// function lapIncrement() {
//    lapsCompleted = lapsCompleted + 1
// }
// lapIncrement()
// lapIncrement()
// lapIncrement()

// console.log(lapsCompleted)

// intialize the count as 0
// listen for clicks
// increment the count variable when the button is clicked
// change the count in the HTML


//STRINGS


// let username = "per"

// let message = "You have three new notifications"

// let messageToUser = message + ", " + username
// console.log(messageToUser);

// let myName = "Joseph"
// let greeting = "Hi my name is "
// let myGreeting = greeting + myName
// console.log(myGreeting);
// console.log(4 + 5); // 9
// console.log("2" + "4"); // 24
// console.log("5" + 1); // 51

// let welcomeEl = document.getElementById("welcome-el")

// let theName = "Joseph Kaita"
// let greeting = "Welcome back "


// welcomeEl.innerText = greeting + theName

// //adding an emoji

// welcomeEl.innerText = welcomeEl.innerText + "👋"


let saveEl = document.getElementById("save-el");
console.log(saveEl);

let countEl = document.getElementById("count-el")
console.log(countEl);

let count = 0

function increment() {
    count += 1;
   countEl.innerText = count;
    
}

function decrement() {
    count -= 1;
    countEl.textContent = count;
}

function saver() {
    let countstr = count + " - ";
    saveEl.textContent += countstr;
    countEl.textContent = 0
    count = 0
}



