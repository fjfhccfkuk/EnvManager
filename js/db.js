const fs_path = require('path')
const DB = require('electron-db');
const path = require('path');
const _db_devs_name = "devDb"

var _dbHolder = null
var dbLocation = path.join("","")

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
        _initDatabases(getDevsDBName())
}

function setValueToDb(dbtable = '', data = null, cb) {
    // try to write data
    if (DB.valid(dbtable, dbLocation) && data) {
        DB.insertTableContent(dbtable, dbLocation ,data, (ret, msg) => {
            console.log("Success: " + ret);
            console.log("Message: " + msg);
            if(ret && cb) {
                cb(ret)
            }
        })
    }
};

function getValueFromDb(dbtable = 'sysinfo', cb = null, key = null) {
    DB.getAll(dbtable, dbLocation,(ret, msg) => {
        console.log("msg:" + msg)
        if (ret && cb) {
            cb(msg)
        }
    })
}