
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

function _sysInvoke() {
    const { exec } = require('child_process');
        exec('echo "dfdddddddd" > /tmp/bbz.txt', (err, stdout, stderr) => {
        if (err) {
            // node couldn't execute the command
            return;
        }
        // list of printers with brief details
        console.log(stdout);
        // the *entire* stdout and stderr (buffered)
        stdout=stdout.split("  ");
        var printers=[];
        j=0;
        stdout = stdout.filter(item => item);
        for (i = 0; i < stdout.length; i++)
        {
            if(stdout[i]==" \r\r\n" ||stdout[i]=="\r\r\n")
            {
            printers[j]=stdout[i+1];
            j++; 
            }
        }
        // list of only printers name
        console.log(printers);
        console.log(stderr);
    });
}

function FuncTest() {
    _sysInvoke()
    alert("Click")
}

