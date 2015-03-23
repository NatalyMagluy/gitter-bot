var Gitter = require('node-gitter'),
    calc = require('./calc'),
    token = 'ecea3da700dad9262cfcff1b27238bc9e928fbbc',
    roomName = process.argv[2] || 'NatalyMagluy/gitter-bot';

var gitter = new Gitter(token);

gitter.currentUser()
    .then(function(user) {
        console.log('You are logged in as:', user.username);
    });

gitter.rooms.join(roomName)
    .then(function(room) {
        var events = room.listen();

        events.on('message', function(message) {
            var result = calc.getResponse(message.text);
            if(result !== false) {
                room.send(result);
            }
        });
    });