
{
    // for windows
    // var executablePath = "C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe";
    // for linux
    var executablePath = "/usr/bin/firefox";
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

    alert("onClick")
    console.log("Function item-entry test.")
    // child(executablePath, function(err, data) {
    //     if(err){
    //        console.error(err);
    //        return;
    //     }
     
    //     console.log(data.toString());
    // });
}

function systemCall() {
    alert("systemCall 1")
    alert("systemCall 2")
    alert("systemCall 3")

    const child = require('child_process').execFile;
    alert("systemCall 4")
    
    alert("child required")
    child(executablePath, function(err, data) {
        if(err){
            alert("systemCall  err/n" + err)
            console.error(err);
            return;
        }
     
        alert("systemCall  ok/n" + data.toString())
        console.log(data.toString());
    });
}

function popup() {
    alert("Button click down")
}