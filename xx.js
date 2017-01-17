var shelljs = require ("shelljs");
var open = require ('open');

shelljs.exec ("node_modules\\.bin\\http-server.cmd",{async:true});

open('http://127.0.0.1:8080/index.html');
