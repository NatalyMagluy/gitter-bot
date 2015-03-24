var mathjs = require('mathjs'),
    exprRegExp = /^(calc)(\s)+((\d|\+|\-|\*|\/|\(|\))+)$/i;

exports.evaluate = function (msg) {
    var expr, result, matches;
    matches = msg.match(exprRegExp);
    if(matches.length && matches[3]) {
        expr = matches[3]
        try {
            result = mathjs.eval(expr);
            return [expr, '=', result].join('');
        } catch(e) {
            return 'Error occurred while evaluating an expression';
        }
    }
    return false;
};
