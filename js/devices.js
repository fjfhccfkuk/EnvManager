
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


