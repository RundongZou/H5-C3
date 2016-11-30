/**
 * Created by Administrator on 2016/11/30.
 */
define(function(require,exports,module){
    var c = require('./c');
    var serviceb = function(){
        console.log('i am in module b.js');
        c.cfn();
    }
    module.exports = {
        bfn:serviceb
    }
});