const fs_path = require('path')
const DB = require('electron-db');
const path = require('path');
const _db_devs_name = "DATABASE_DEVICES"

var _dbHolder = null
var dbLocation = path.join("./","")

function db_list() {}

function _initDatabases(table) {
    //_db_devs_name
    DB.createTable(table, dbLocation, (rev, msg) => {            
        if (rev) {
            console.log(msg)                
        } else {
            console.log('An error has occured. ' + msg)
        }
    })
}

function getDevsDBName() {
    return _db_devs_name;
}

function initDatabase() {
        _initDatabases(_db_devs_name)
        // _initDatabases(...)
}

function setValueToDb(dbtable = '', obj = null) {
    // try to write data
    if (obj) {
        DB.insertTableContent(dbtable, dbLocation ,data, (ret, msg) => {
            console.log("Success: " + ret);
            console.log("Message: " + msg);
        })

        return
    }

    // {
    //     let data = new Object();
    //     data.name = "Wali"                    
    //     data.age = 24
    //     data.addr = "Beijing,chaoyang "

    //     DB.insertTableContent(dbtable, dbLocation ,data, (ret, msg) => {
    //         console.log("Success: " + ret);
    //         console.log("Message: " + msg);
    //     })
    // }
};

function getValueFromDb(dbtable = 'sysinfo', cb = null, key = null) {
    DB.getAll(dbtable, dbLocation,(ret, msg) => {
        console.log("msg:" + msg)
        if (ret) {
            values = "aabbcc"
            if (cb) {cb(msg)}
        }
    })
}