/**
 * Created by Administrator on 2016/11/30.
 */
define(function(require,exports,module){
    //通过require引入依赖
    //var $ = require('jquery');
    //或者通过module.exports 提供整个接口
    var b = require('./b');
    require('jquery');
    require('handlebars');
    var tpl = require('./h.html');
    var compilerTpl = Handlebars.compile(tpl);
    $(document.body).append(compilerTpl({name:
    'zou'}));

    var servicea = function(){
        console.log('I am in module a.js');
        b.bfn();
    }

    module.exports = {
        aaafn:servicea
    }
})