var Gitter = require('node-gitter'),
    calc = require('./calc'),
    token = process.argv[3],
    roomName = process.argv[2] || 'NatalyMagluy/gitter-bot',
    gitter = new Gitter(token);

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as:', user.username);
    });

gitter.rooms.join(roomName)
    .then(function(room) {
        var events = room.listen();

        events.on('message', function(message) {
            var result = calc.evaluate(message.text);
            if(result !== false) {
                room.send(result);
            }
        });
    });