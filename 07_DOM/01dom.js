let heading = (document.querySelector('h1'))
heading.innerHTML= "<u>Hello</u>";

let para = document.querySelector('p')
console.log(para)

console.log(para.innerHTML) // shows the full markup
console.log(para.innerText) // shows the visible text contained
console.log(para.textContent) // shows all the full text if hidden or not 

para.innerText = "Hi i am bherat shukla"

para.innerHTML = "Hi i am <b> Bharat shukla</b>"


// manipulating Attributes ....


let img = document.querySelector('img')

console.log(img)

console.log(img.getAttribute("id"))

img.setAttribute('id',"mainimag1111") 

 img.setAttribute('src', "https://images.unsplash.com/photo-1750087023850-36213c737960?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D")
   

// Manipulating Style 

console.log(para.style)
console.log(heading.style)  
heading.style.color = "red "
para.style.backgroundColor = 'blue'
para.style.color = 'white'


console.log(para.classList)
para.classList.add("abc,xyz")   // to add classes
para.classList.remove("abc")    // to remove classes
para.classList.contains("abc")  //to check if class exist
para.classList.toggle("abc")    // to toggle between add & remove 

// Navigation 
  let Navigation = document.querySelector('h2   ')
   console.log(Navigation.parentElement) 
   console.log(Navigation.children)

 let parent = document. querySelector('.navagation')
 console.log(parent.children) 


// adding Elements 

let newp = (document.createElement("p"))

newp.innerText = "Hii I am bHrat shukla"

let body = (document.querySelector('body'));

body.appendChild(newp) 

newp.append ("wow this is good") //add in last 

newp.prepend("nice") // add in the start

newp.remove

// body.remove



    

