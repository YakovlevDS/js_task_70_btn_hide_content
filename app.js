// ? Task:


// Solution 1
const panes = document.querySelectorAll(".pane");

panes.forEach(pane => {
let btnRemove = document.createElement("button");
 btnRemove.classList.add("remove-button");
 btnRemove.textContent = "[x]";

    // let btnRemove = document.createElement('div')
    // btnRemove.innerHTML = '<button class="remove-button">[x]</button>'

    pane.appendChild(btnRemove)

    pane.addEventListener('click',()=> pane.remove())
})


// ! Explanation: 
