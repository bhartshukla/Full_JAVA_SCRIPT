const code  = ["Js", "C++", "Pyhton", "java"]

// const values  = code.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(values) // its undefined  for each not return value 





const mynums = [1,,3,4,5,6,7,8,9,10]

// const newnum = mynums.filter((num)=>num>4)
const newnum = mynums.filter((num)=>{
    return num > 4
})

// console.log(newnum)






const newnums = [1,,3,4,5,6,7,8,9,10]

const newnum2 = []
newnum.forEach( (num) =>{
    if (num>4) {
        newnum2.push(num)
    }
})

// console.log(newnum2)


const books = [
  {
    name: "Wings of Fire",
    genre: "Autobiography",
    publicationDate: 1999
  },
  {
    name: "The White Tiger",
    genre: "Fiction",
    publicationDate: 2008
  },
  {
    name: "India After Gandhi",
    genre: "History",
    publicationDate: 2007
  },
  {
    name: "Half Girlfriend",
    genre: "Romance",
   publicationDate: 2001
  },
  {
    name: "The Guide",
    genre: "Drama",
    publicationDate: 2006
  },
  {
    name: "The Immortals of Meluha",
    genre: "Mythology",
    publicationDate: 2010
  }
];



// const userbook = books.filter( (bk) => bk.genre === "Romance" )
const userbook = books.filter( (bk)=> {
    return bk.publicationDate>1999 && bk.genre === "History"
})
console.log(userbook)

