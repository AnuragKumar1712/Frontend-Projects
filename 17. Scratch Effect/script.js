document.addEventListener("mousemove",(e)=>{
    const body = document.querySelector("body");

    const scratcher = document.createElement("span");

    scratcher.style.left = -40 + e.offsetX + "px";
    scratcher.style.top = -40 + e.offsetY + "px";
    body.append(scratcher);
});