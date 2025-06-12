// reduce 

const myarr = [1,2,3,4]

// const mytotal = myarr.reduce(function(acc,currvalue){
//     console.log(`acc = ${acc} and currvalue = ${currvalue}`)
//     return acc + currvalue
// },0)

const mytotal = myarr.reduce( (acc, currvalue)=>(acc+currvalue),0)

// console.log(mytotal)

const course = [
    {
        itemname:"js",
        price:2999
    },

    {
        itemname:"CPP",
        price:3999
    },

    {
        itemname:"Py",
        price:3999
    }

]

const pricetotal = course.reduce((acc,item)=>(acc+item.price),0)

console.log(pricetotal)


