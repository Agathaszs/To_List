const inputBox= document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

const adicionar=()=>{
  if(inputBox.value ===''){
    alert('Você deve escrever algo')
  }
  else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(marcar){
  if(marcar.target.tagName === "LI"){
    marcar.target.classList.toggle("checked")
    saveData();
  }
  else if(marcar.target.tagName === "SPAN"){
    marcar.target.parentElement.remove(
    )
    saveData();
  }
},false)

const saveData=()=>{
  localStorage.setItem("data", listContainer.innerHTML)
}
const showTask=()=>{
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

