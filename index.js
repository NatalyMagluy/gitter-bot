var Gitter = require('node-gitter'),
    calc = require('./calc'),
    config = require('./config.json'),
    roomName = process.argv[2] || 'NatalyMagluy/gitter-bot',
    gitter = new Gitter(config.token);

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as: ', user.username);
    });

gitter.rooms.join(roomName)
    .then(function(room) {
        var events = room.listen();

        events.on('message', function(message) {
            console.log(message.text);
            var result = calc.evaluate(message.text);
            if(result !== false) {
                room.send(result);
            }
        });
    }).fail(function(err) {
        console.log('Room cannot be joined: ', err);
    });