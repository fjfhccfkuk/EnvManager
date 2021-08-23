// const request = net.request("http://192.168.0.1/rest/login")
//   "userName":"OkaysOkta","password":"sCf&X!ybG3!mQDr9*qQkmj%F23*-ws"

const http = require('http');
const { ipcRenderer } = require('electron')

const data = JSON.stringify({
    userName : "OkaysOkta",
    password : "sCf&X!ybG3!mQDr9*qQkmj%F23*-ws"
})

const options = {
    hostname: '192.168.0.1',
    port: 80,
    path: '/rest/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

function Net_Connect_01() {

    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`)
        res.on('data', d => {
            process.stdout.write(d)
        })
    })

    req.on('error', error => {
        // console.error(error)
        console.log("eror")
    })

    req.write(data)
    req.end()
}

//------------------ very bottom ------------------//

const IDSend = "ipcRender [send msg]:"
const IDRecv = "ipcRender [recv msg]:"

ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(IDRecv + arg)
})

function doTestMessage(arg) {

    console.log("this is func:doTestMessage()  arg:" + arg)
    
    msg = "sync-ping"
    console.log(IDSend + msg)
    var syncRecv = ipcRenderer.sendSync('synchronous-message', msg)
    console.log(IDRecv + syncRecv)

    msg = "async-ping"
    console.log(IDSend + msg)
    ipcRenderer.send('asynchronous-message', msg)
}