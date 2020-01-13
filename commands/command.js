module.exports = class Command {
    
    /**
     * 
     * @param {String} message 
     */
    static parse(message) {
        if(this.match(message)) {
            this.action(message)
            return true;
        }
        return false;
    }

    /**
     * 
     * @param {String} message 
     */
    static match(message) {
        return false;
    }

    /**
     * 
     * @param {String} message 
     */
    static action(message) {}
}