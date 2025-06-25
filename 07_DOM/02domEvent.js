// DOM Events 
// Events are signals that something has occurred .(User Input/Output)  

/* let btn = document.querySelector('.btn')
    console.dir(btn)

    btn.onclick = function (){
    alert("btn clicked ")
 }
*/
function sayhello() {
    alert("Hello Bharat")
}

function sayhello2() {
    alert("Hello shukla ji")
}



/* btn.onclick = sayhello

    let btn2 = document.querySelectorAll('button')

    for(btn of btn2){
     btn.onclick = sayhello
 }
*/     


/*

    let btn3 = document.querySelectorAll(".btn")

    for(btn of btn3){
        // btn.onclick = sayhello
        btn.onmouseenter = function(){
            console.log("plz enter")
        }
    }
*/

//Event Listener

let btn = document.querySelectorAll('button')

for (btn of btn){
    // btn.addEventListener("click",sayhello);
    btn.addEventListener("click",sayhello2);
    // btn.addEventListener("dblclick",sayhello2);
}


let para  = document.querySelector('p')
para.addEventListener('click', function(){
    alert("i am a paragraph")
} )



let div2 = document.querySelector(".newdiv")

// function redcolor(){
//      div2.style.backgroundColor = 'red'
// }

div2.addEventListener("mouseenter", function(){
    div2.style.backgroundColor = "red"
    // alert("i am box")
})

// div2.addEventListener("mouseenter",redcolor)





