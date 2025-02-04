import SystemError from "./SystemError";

class ValidationError extends Error {
    constructor(message) {
        super(message);
    };
};

export default ValidationError;