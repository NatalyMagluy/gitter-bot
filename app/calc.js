var mathjs = require('mathjs'),
    exprRegExp = /^(calc)(\s)+(\d|\+|\-|\*|\/|\(|\))+$/i;

function parseMessage(msg) {
    var expr, result;
    if(exprRegExp.test(msg)) {
        expr = msg.replace(/^calc /i, '');
        try {
            result = mathjs.eval(expr);
            return [expr, '=', result].join('');
        } catch(e) {
            return 'Error occurred while evaluating an expression';
        }
    }
    return false;
}

exports.getResponse = function(message) {
    var result = parseMessage(message);
    return result;
};
