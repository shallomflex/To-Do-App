const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list_container");

function addTask() {
    if (inputBox === '') {
        alert("Please enter a task first!")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // adding the done icon "x"
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveData();
    }else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }

}, false);

// function to save the DATA to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
// function to display the saved data
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();