let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    //console.log("Button clicked!")
    formValidation();
});

let formValidation = () => {
    if(input.value === ""){
        msg.innerHTML = "Cannot submit and empty field"
        console.log("Failure");
    }
    else{
        msg.innerHTML = "Successfully submited "
        console.log("success");
        collectData();
    }
}
let data = {};

let collectData = () => {
    data["text"] = input.value;
    console.log("data Pushed", data);
    createPost();
}
let createPost = () => {
    posts.innerHTML +=
    
    `
                <div>
                    <p>${data.text}</p>
                    <span class="options">

                        <i class="fas fa-edit" onClick="Edit(this)"></i>
                        <i class="fas fa-trash-alt" onClick="deletePost(this)"></i>
                    </span>
                </div>
    `;
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let Edit = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();

}