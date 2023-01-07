import isString from '@/utils/isString';

/**
 *
 *
 * @export
 * @param {string} [email='']
 * @return {*} 
 */
export default function isValidEmail(email = '') {
    //the email must be a valid string as we test using regular expressions
    if (isString(email)) {
        //email regex
        const emailRegex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //returns true is the email is valid
        return emailRegex?.test(email);
    } else {
        return false;
    }
}
