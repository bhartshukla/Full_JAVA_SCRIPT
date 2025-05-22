function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}

function three(){
    console.log("three")
}

one()
two()
three()

/*
🧾 Execution Step-by-Step with Call Stack
🔹 First Call: one()
one() is pushed onto the stack.
→ Stack: [one]
→ Output: one

Inside one(), it calls two()
→ two() is pushed
→ Stack: [one, two]
→ Output: two

Inside two(), it calls three()
→ three() is pushed
→ Stack: [one, two, three]
→ Output: three

three() finishes → popped
→ Stack: [one, two]

two() finishes → popped
→ Stack: [one]

one() finishes → popped
→ Stack: []

🔹 Second Call: two()
two() is pushed
→ Output: two

three() is called → pushed
→ Output: three

three() finishes → popped

two() finishes → popped

🔹 Third Call: three()
three() is pushed
→ Output: three

three() finishes → popped
*/
