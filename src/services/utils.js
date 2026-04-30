

/**
 * convert a date object to this format : hh:mm
 * @param {Date} date 
 * @returns {String}
 */
export const formatDate = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours}:${minutes}`;
}
