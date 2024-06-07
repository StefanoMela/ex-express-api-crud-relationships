class RestError extends Error {
    constructor(message, code = 500){
        super(message);
        this.statusCode = code;
        this.customMessage = message;
    }
}

module.exports = RestError;