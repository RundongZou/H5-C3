/**
 * Created by Administrator on 2016/11/30.
 */
define(function(require,exports,module){
    require('./css/style.css');
    var servicec = function(){
        console.log('i am in module c.js');
    }
    exports.cfn = servicec;
});