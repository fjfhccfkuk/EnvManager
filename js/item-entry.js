const { NodeEventEmitter } = require("electron")

function ActivePage(page_addr) {
    var ele = document.getElementById("areaContent")
    // ele.innerHTML = page_addr
    ele.src = page_addr
}


function ActiveWebFrame(page_addr) {
    //enable div-Frame, disable div-webSrc
    document.getElementById("websrc").display = none
    document.getElementById("webiframe").display = inline-block
    document.getElementById("areaContent").src = page_addr
}

function ActiveWebSrc(page_addr) {
    //enable div-webSrc, disable div-Frame
    document.getElementById("websrc").display = inline-block
    document.getElementById("webiframe").display = none
    document.getElementById("areaContent").src = page_addr
}