const text = document.getElementById("text")
const listi = document.getElementById("list-container")

function addTask(){
    if(text.value === ''){
        alert("You must write some Task")
    }
    else{
        let li=document.createElement("li")
        li.innerHTML = text.value;
        listi.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    text.value = "";
    saveData();
}

listi.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if( e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listi.innerHTML)
}

function showTask(){
    listi.innerHTML = localStorage.getItem("data")
}

showTask();
