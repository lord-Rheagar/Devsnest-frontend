

const wrap = document.querySelector(".box");

for (let i = 0; i < 400; i++){
    const createDiv = document.createElement("div")
    createDiv.style.border = "5px solid Black"
    createDiv.style.width = "30px";
    createDiv.style.height = "30px";
    createDiv.style.borderRadius="7px";
    createDiv.addEventListener("click", () => {

        if(createDiv.classList.contains("clicked"))
        createDiv.classList.remove("clicked")

        else{
            createDiv.classList.add("clicked");
        }
    })
    wrap.appendChild(createDiv);
    }