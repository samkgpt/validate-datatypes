"use strict";

module.exports = {
  /**
   * @Function isObject - Validates if a value is an object
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isObject: (value) => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  },

    /**
   * @Function isString - Validates if a value is an string
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isString: (value) => {
    return typeof value === "string";
  },

    /**
   * @Function isInteger - Validates if a value is an integer
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isInteger: (value) => {
    return typeof value === 'number' && value%1 === 0;
  },

    /**
   * @Function isNumber - Validates if a value is an number
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isNumber: (value) => {
    return  typeof value === 'number';
  },

    /**
   * @Function isFunction - Validates if a value is an function
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isFunction: (value) => {
    return typeof value === "function";
  },

    /**
   * @Function isArray - Validates if a value is an array
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isArray: (value) => {
    return Object.prototype.toString.call(value) === "[object Array]";
  },
  
    /**
   * @Function isPositiveInteger - Validates if a value is an positive integer
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isPositiveInteger: (value) => {
    return Number.isInteger(value) && value > 0;
  },

    /**
   * @Function isStringArray - Validates if a value is string array
   * @param {*} value - value to be validated
   * @returns {Boolean} boolean indicating whether value is a object
   */
  isStringArray: (value) => {
    var length;
    if (!Array.isArray(value)) {
      return false;
    }
    length = value.length;
    if (!length) {
      return false;
    }
    for (var i = 0; i < length; i++) {
      if (typeof value[i] !== "string") {
        return false;
      }
    }
    return true;
  },
};
