const Help = require('./help');

module.exports = class CommandParser {

  static identifyMessage(message) {
    const messageReceived = message.content.split(' ')[0];

    switch (messageReceived) {
      case '!help':
        Help.parse(message);
        break;
    }
  }
};