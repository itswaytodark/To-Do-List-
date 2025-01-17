const todo_Input = document.getElementById("todo_input")
const todo_List = document.getElementById("todo_list")

const form = document.querySelector("form")

form.addEventListener('submit' , function(e){

    e.preventDefault()
    add_btn()
    console.log(typeof(todo_Input.value))
})

function add_btn()
{
    if(todo_Input.value.trim() === "")
    {
        todo_Input.placeholder = "Enter a Text First 💀"
    }

    else
    {
        let task = document.createElement("li")
        task.className= "todo"
        task.innerHTML = todo_Input.value
        todo_List.appendChild(task)

        todo_Input.value = ""
        
    }
}


