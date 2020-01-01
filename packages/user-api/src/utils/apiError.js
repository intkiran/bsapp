/**
 * Abstract base class for all errors.
 *
 * @class
 */
class apiError {
  /**
   * Create a Abstract Error
   *
   * @param {String} message  Message describing the error
   * @param {String} status     status of error code
   */
  constructor(message = "", status = 400) {
    this.message = message;
    this.status = status;
  }
  /**
   * Return error represented in string
   *
   * @returns {String} errorString
   */
  toString() {
    return "[Error] " + this.status + ": " + this.message;
  }
}

export default apiError;
