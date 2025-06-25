/*

function Hello (){
    console.log("Inside the hello fnx")
    console.log("Hello BHARAT")
}

function demo(){
      console.log("Calling the hello fnx")
    Hello()
}

console.log("calling the demo fnx")
demo();
  console.log("Done , TATA!")


*/

// Visualizing the call stack  +++++++++++++++++

function one(){
    //  console.log("Function one")
    return 1;
}

function two(){
    //  console.log("Function two")
    return one() + one()
}

function three(){
    // console.log("Function three")
    let ans  = two() + one()
    console.log(ans)
}

three()




