const Help = require('./help');

module.exports = class CommandParser {

    /**
     * 
     * @param {String} message 
     */
  static identifyMessage(message) {
    const messageReceived = message.content.split(' ')[0];

    switch (messageReceived) {
      case '!help':
        Help.parse(message);
        break;
    }
  }
};