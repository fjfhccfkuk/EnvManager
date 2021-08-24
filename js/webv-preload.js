

{
    // for windows
    // var executablePath = "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
    // for linux
    var executablePath = "file:////usr/bin/firefox";
}

function _dev(sName, sType) {
    this.name = sName,
    this.type = sType
}

function Printer(_dev, sAddr, sLocation){
    this.dev = _dev,
    this.ip_addr = sAddr,
    this.location = sLocation,

    Test = function () {
        console.log("打印机测试")
    }

    Connect = function () {        
    }
}

function FuncTest() {

    console.log("Function item-entry test.")
    child(executablePath, function(err, data) {
        if(err){
           console.error(err);
           return;
        }
     
        console.log(data.toString());
    });
}

function systemCall() {
    const child = require('child_process').execFile;
    alert("systemCall preload")
    child(executablePath, function(err, data) {
        if(err){
           console.error(err);
           return;
        }
     
        console.log(data.toString());
    });
}
