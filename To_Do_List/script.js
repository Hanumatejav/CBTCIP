

const input = document.getElementById('input');
const taskContainer = document.getElementById('task-container');

function addTask()
{
    if(input.value === '')
    {
        alert("You Must Write Something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    input.value = '';
}

taskContainer.addEventListener("click", function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }

    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
    }
}, false);


let icon = document.getElementById('icon');

icon.onclick = function()
{
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme'))
    {
        icon.src = "white_theme.png";
    }

    else
    {
        icon.src = "dark_theme.png"
    }
} 
