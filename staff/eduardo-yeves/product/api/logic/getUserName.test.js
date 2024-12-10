import getUserName from './getUserName.js';

try {
    const name = getUserName('m4abhmhvrm');

    console.log(name);
} catch (error) {
    console.error(error);
}