var Master = require('../lib/master/masterAgent');
var Monitor = require('../lib/monitor/monitorAgent');


var masterHost = '127.0.0.1';
var masterPort = 3333;

var monitorId1 = 'connector-server-1';
var monitorId2 = 'area-server-1';
var monitorType1 = 'connector';
var monitorType2 = 'area';
var moduleId1 = 'testModuleId1';
var moduleId2 = 'testModuleId2';

var masterConsole = {
    env:'development',
    authServer:function(req,env,cb) {
        cb('ok');
    }
};

var master = new Master(masterConsole,{whitelist:[]});

master.listen(masterPort);