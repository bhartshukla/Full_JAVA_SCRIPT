// promise object represent the eventual completion (0r failure ) of an asynchronous operation and its resulting value..

/*
function savetoDATA(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) +1;
    if(internetSpeed>4){
        success();
    }else{
        failure();
    }
}


savetoDATA(
    "Bharat Shukla",
    ()=>{
        console.log("success : Your data is saved ")
        savetoDATA("good boy" , 
            ()=>{
                console.log("Success2 : data seved ")
                savetoDATA("ha ha" , 
                    ()=>{
                        console.log("Succces : Your data is saved ")
                    }, 
                    ()=>{
                        console.log("Failure3: data is not seved")
                    }
                )
            },  
            ()=>{
                console.log("failure2 : data not seved ")
            }
        )
    }, 
    ()=>{
        console.log(" failure:  Week connection , data not saved")
    }
);

*/


//  promise (OBJECT) +++++++++++++++++++++++++++++++++

function savetoDATA(data){   
    return new Promise((resolve, reject)=>{
         let internetSpeed = Math.floor(Math.random() * 10) +1;
         if(internetSpeed>4){
            resolve("Success: data was saved");
         }else{
            reject("Failure : data not seved");
         }
    })
   
 
}
/*

let request = savetoDATA("Helo BHART SHUKLA") //req  = promise object  

request
    .then(()=>{
        console.log("promise was resolved")
        console.log(request)
    })  
    .catch(()=>{
        console.log("Promise was rejected")
         console.log(request)
    })
*/         


// promise chaining +++++++++===========================  
// improved version
// result : resolve , error : reject

savetoDATA("Helo BHART SHUKLA")
.then((result)=>{
        console.log("promise was resolved , data one saved ")
        console.log(result)
       return savetoDATA("Goodboy");        
    })  
    .then((result)=>{
        console.log("DATA 2 is saved ")
        console.log(result)
        return savetoDATA("GOOd study class")  
    })
    .then((result)=>{
        console.log("Data 3 was seved")
        console.log(result)
    })
    .catch((error)=>{       
        console.log("Promise was rejected")
        console.log(error)
    
    })



 
