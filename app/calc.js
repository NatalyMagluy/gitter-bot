var exprRegExp = /^(calc )(\d|\+|\-|\*|\\|\(|\))+$/i;

function parseMessage(msg) {
    if(exprRegExp.test(msg)) {
        return 'I read your msg';
    }
    return false;
}

exports.getResponse = function(message) {
    var result = parseMessage(message);
    return result;
};
