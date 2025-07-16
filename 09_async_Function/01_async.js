// Async kewword .....

/*
async function greet() {
    throw "Some Random Error"
    return ("hello") // return a promise 
}

greet()
    .then((result) => {
        console.log("Promise was successFull")

    })
    .catch((error) => {
        console.log("Promise is unseccessFull some error Occure")
    })


let demo = async()=>{
    return 5;
}  // returns a promis 

*/


// Await Keyword    == pause the execution of its surrounding async function untile the promise is settled(resolved or rejected)

/*
function getNum(){
    return new Promise ((resolev, reject) =>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 10 ) + 1;
            console.log(num);
            resolev();

        }, 2000); 
    })
}

async function demo(){
    await getNum();
    await getNum();
    await getNum();

}

*/

/*

let h1 = document.querySelector("h1")

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("COLOR Changed")
        }, delay);
    })
}

async function run() {
    await colorChange("red" , 1000)
    await colorChange("blue" , 1000)
    await colorChange("green" , 1000)
    await colorChange("yellow" , 1000)

    

}

run();

*/


// ===== Handling Rejection With Await +++++


let h1 = document.querySelector("h1")

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 5) + 1;
        if (number > 3) {
            reject("Promise rejected")
        }
        setTimeout(() => {
            h1.style.color = color;
            resolve("COLOR Changed")
        }, delay);
    })
}

async function run() {
    try {
        await colorChange("red", 1000)
        await colorChange("blue", 1000)
        await colorChange("green", 1000)
        await colorChange("yellow", 1000)
    } catch (err) {
        console.log("Some error")
        console.log(err)
    }


    let a = 6
    console.log(a)
    console.log(a + 3)


}

