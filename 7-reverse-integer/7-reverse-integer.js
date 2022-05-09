/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    const limit = 2147483648;
    const sign = x < 0 ? -1 : 1;
    const n = Number(String(Math.abs(x)).split('').reverse().join(''));
    return n > limit ? 0 : n * sign;
};