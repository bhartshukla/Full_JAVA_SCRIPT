const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.map( (num) => num+10) //map returns value
// console.log(newnums)

const newnum2 = []

mynums.forEach((num) => {
    newnum2.push(num+10)
})
console.log(newnum2)




const bignums = [1,2,3,4,5,6,7,8,9]

const newnum3 = bignums
                .map( (num) => num*10 )
                .map((num) => num+1)
                .filter( (num)=> num>60)

console.log(newnum3)                