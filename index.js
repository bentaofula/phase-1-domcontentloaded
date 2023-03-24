document.addEventListener("DOMContentLoaded",function(){
    console.log("Dom hasloaded")
let parTag =document.getElementById("text")
parTag.textContent = "This is really cool!"
})
console.log("Load Dom before event listener")