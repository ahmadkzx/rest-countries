/**
 * separate number by 3 character
 * @param {Number} payload
 * @returns {String}
 */
export function _separateNumber(payload) {
  return payload.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
