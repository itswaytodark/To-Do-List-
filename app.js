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
        
        
        // This is Todo List
        let task = document.createElement("li")
        task.className= "todo"
        // task.innerHTML = todo_Input.value
        todo_List.appendChild(task)
        
        
        
        
        // This is Cheakbox
        let check_btn = document.createElement("input")
        check_btn.type = "checkbox"
        // document.createAttribute("for")
        // check_btn.value = "todo-1"
        check_btn.className = "checkbox"
        task.appendChild(check_btn)
        

        let span = document.createElement("span")
        span.innerHTML = todo_Input.value
        span.className= "todo"
        task.appendChild(span)



        // This is Delete
        let del_btn = document.createElement("button")
        del_btn.className = "delete"
        del_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
                    <path d="M6 8v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8H6zM24 4h-6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1H6C5.4 4 5 4.4 5 5s.4 1 1 1h18c.6 0 1-.4 1-1S24.6 4 24 4z"></path>
                    </svg> `

        task.appendChild(del_btn)



        del_btn.addEventListener("click", del)
        function del()
        {
            todo_List.removeChild(task)
        }

    
        todo_Input.value = ""

        
    }
}


