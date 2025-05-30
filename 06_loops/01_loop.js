// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element==5){
       // console.log("Its five")
    }
   // console.log(element)
}


for(let i =0; i<=10; i++){
    // console.log(`outer loop : ${i}`);
    for(let j =0; j<=10; j++){
        // console.log(`inner loop : ${j} and outer loop : ${i}`)
    //    console.log(i + '*' + j + '=' + i*j)

    }

}

let myarry = ["Bharat" , "Shukla","Ram", "Shyam"]

for(let index = 0; index<myarry.length; index++){
    const element = myarry[index]
    // console.log(element);
    
}



// break and continue 

for(let index = 0; index<=20;index++){
    if(index == 5){
        console.log("its five") 
        break
    }
    console.log(`value of i is ${index}`)
}


for(let index = 0; index<=20;index++){
    if(index == 10){
        console.log("its Ten") 
        continue
    }
    console.log(`value of i is ${index}`)
}



