const fs_path = require('path')
const DB = require('electron-db');
const path = require('path');

var _dbHolder = null
var dbLocation = path.join("/tmp/","")

function db_list() {}

function initDatabase(__dbname__ = 'sysdb', dbtable = 'sysinfo') {

    // if (DB.valid(dbtable)) {
    //     return _dbHolder
    // } else {

        DB.createTable(dbtable, dbLocation, (rev, msg) => {            
            if (rev) {
                console.log(msg)                
            } else {
                console.log('An error has occured. ' + msg)
            }
        })

        // open database
        // return DB
    // }
}

function setValueToDb(dbtable = 'sysinfo') {
    // try to write data
    {
        let data = new Object();
        data.name = "Wali"                    
        data.age = 24
        data.addr = "Beijing,chaoyang "

        DB.insertTableContent(dbtable, dbLocation ,data, (ret, msg) => {
            console.log("Success: " + ret);
            console.log("Message: " + msg);
        })
    }
};

function getValueFromDb(dbtable = 'sysinfo', key = null) {
    DB.getAll(dbtable, dbLocation,(ret, msg) => {
        console.log("aaaaaaaaaaaaaa")
    })
}