const mynames = ["ram","Shyam", "Mohan"];
const player = ["Virat", "Rohit", "Pandya"]

// player.push(mynames);
// console.log(player)
// console.log(player[3][2])

// const newplayeres = player.concat(mynames);
// console.log(newplayeres)


const allplayers = [...mynames,...player]
console.log(allplayers)

