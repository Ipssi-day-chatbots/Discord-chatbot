const Command = require('./command');

module.exports = class Help extends Command {
    
    static match(message) {
        return message.content.startsWith('!help')
    }

    static action(message) {
        message.channel.send('This is a sample command \o/');
    }

}