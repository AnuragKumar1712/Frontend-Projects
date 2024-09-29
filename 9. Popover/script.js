const myBtn = document.getElementById("myBtn");
const myPopover = document.getElementById("mypopover");
const closeBtn = document.getElementById("closebtn");

myBtn.addEventListener("click", function(){
    myPopover.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    myPopover.classList.remove("active");
});