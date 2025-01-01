const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");


let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img= document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    
})

notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // No need to reattach the listener to all notes repeatedly.
        e.target.onkeyup = function() {
            updateStorage();
        };
    }
});

// Add event listener for existing notes
notesContainer.querySelectorAll(".input-Box").forEach(note => {
    note.addEventListener("keyup", updateStorage);
});

document.addEventListener("keydown", event =>{
    if(event.key ==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


showNotes();