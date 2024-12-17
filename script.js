let ctr=1;
const deleteTodo = (index)=>{
    const element = document.getElementById(index)
    element.parentNode.removeChild(element)
    const indices = document.querySelectorAll(".index")
    indices.forEach((indexEl,index)=>{
        indexEl.textContent = index+1
    })
}

const updateTodo = (index)=>{
    const element = document.getElementById(index)
    const contentEl = element.children[0].children[1]
    const input = document.querySelector("input")
    input.value = contentEl.textContent
    deleteTodo(index)
}

const addTodo = ()=>{
    const inputEl = document.querySelector("input");
    const contentEl = document.querySelector(".content")
    const value = inputEl.value;
    const newDiv = document.createElement("div")
    newDiv.setAttribute("id",ctr)
    newDiv.innerHTML = `<span><span class="index">${contentEl.children.length}</span>. <span>${value}</span></span> <button onclick="deleteTodo(${ctr})">X</button> <button onclick="updateTodo(${ctr})">Edit</button>`;
    contentEl.appendChild(newDiv)
    inputEl.value=""
    ctr++;
}