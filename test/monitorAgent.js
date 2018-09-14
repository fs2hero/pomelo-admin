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

var monitorConsole1 = {
    execute: function(moduleId, method, msg, cb) {
        req1Count++;
        moduleId.should.eql(moduleId1);
        cb(null, msg);
    },
    env:'development',
    authServer:function(req,env,cb) {
        cb('11122233334455');
    }
};

var monitor1 = new Monitor({
    consoleService: monitorConsole1, 
    id: monitorId1, 
    type: monitorType1,
    info:''
});

monitor1.connect(masterPort, masterHost, function(){
    console.log('connect end');
});