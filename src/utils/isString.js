/**
 *
 *
 * @export
 * @param {string} [str='']
 * @return {*} 
 */
export default function isString(str = '') {
    if (str) {
        return typeof str === 'string';
    } else {
        return false;
    }
}
