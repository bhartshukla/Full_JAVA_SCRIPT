// for each loop

const code  = ["Js", "C++", "Pyhton", "java"]

code.forEach(function (item){
    // console.log(item)
})

code.forEach( (item)=>{
    // console.log(item)
})

function printme(item){
    console.log(item)
}

code.forEach(printme)

code.forEach( (item , index, arr)=>{
    // console.log(item,index,arr)
})


const mycode = [
    {
        codelanguage:"Javascript",
        languagefile:"js"
    },

    {
        codelanguage:"java",
        languagefile:"java"
    },
    {
        codelanguage:"python",
        languagefile:"py"
    }
]

mycode.forEach( (item)=>{
    console.log(item.languagefile)
})

mycode.forEach( (item)=>{
    console.log(item.codelanguage)
})