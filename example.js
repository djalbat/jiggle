(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
  };

  // lib/constants.js
  var require_constants = __commonJS({
    "lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.RELATIVE_MOUSE_COORDINATES_MULTIPLIER = exports.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = exports.EXT_TEXTURE_FILTER_ANISOTROPIC = exports.DEGREES_TO_RADIANS_MULTIPLIER = exports.MOUSE_WHEEL_DELTA_MULTIPLIER = exports.ANGLES_MULTIPLIER = exports.INVERT_MULTIPLIER = exports.MINIMUM_DISTANCE = exports.VERTICES_LENGTH = exports.DESIGN_CAMERA = exports.GAMING_CAMERA = exports.ANONYMOUS = exports.FUNCTION = exports.CANVAS = exports.HEIGHT = exports.WIDTH = void 0;
      var WIDTH = "width";
      exports.WIDTH = WIDTH;
      var HEIGHT = "height";
      exports.HEIGHT = HEIGHT;
      var CANVAS = "canvas";
      exports.CANVAS = CANVAS;
      var FUNCTION = "function";
      exports.FUNCTION = FUNCTION;
      var ANONYMOUS = "anonymous";
      exports.ANONYMOUS = ANONYMOUS;
      var GAMING_CAMERA = "gaming_camera";
      exports.GAMING_CAMERA = GAMING_CAMERA;
      var DESIGN_CAMERA = "design_camera";
      exports.DESIGN_CAMERA = DESIGN_CAMERA;
      var VERTICES_LENGTH = 3;
      exports.VERTICES_LENGTH = VERTICES_LENGTH;
      var MINIMUM_DISTANCE = 1;
      exports.MINIMUM_DISTANCE = MINIMUM_DISTANCE;
      var INVERT_MULTIPLIER = -1;
      exports.INVERT_MULTIPLIER = INVERT_MULTIPLIER;
      var ANGLES_MULTIPLIER = 0.01;
      exports.ANGLES_MULTIPLIER = ANGLES_MULTIPLIER;
      var MOUSE_WHEEL_DELTA_MULTIPLIER = 0.25;
      exports.MOUSE_WHEEL_DELTA_MULTIPLIER = MOUSE_WHEEL_DELTA_MULTIPLIER;
      var DEGREES_TO_RADIANS_MULTIPLIER = Math.PI / 180;
      exports.DEGREES_TO_RADIANS_MULTIPLIER = DEGREES_TO_RADIANS_MULTIPLIER;
      var EXT_TEXTURE_FILTER_ANISOTROPIC = "EXT_texture_filter_anisotropic";
      exports.EXT_TEXTURE_FILTER_ANISOTROPIC = EXT_TEXTURE_FILTER_ANISOTROPIC;
      var MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = "MOZ_EXT_texture_filter_anisotropic";
      exports.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC = MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC;
      var WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = "WEBKIT_EXT_texture_filter_anisotropic";
      exports.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC = WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC;
      var RELATIVE_MOUSE_COORDINATES_MULTIPLIER = 0.025;
      exports.RELATIVE_MOUSE_COORDINATES_MULTIPLIER = RELATIVE_MOUSE_COORDINATES_MULTIPLIER;
    }
  });

  // node_modules/necessary/lib/levels.js
  var require_levels = __commonJS({
    "node_modules/necessary/lib/levels.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.FATAL_LEVEL = exports.ERROR_LEVEL = exports.WARNING_LEVEL = exports.INFO_LEVEL = exports.DEBUG_LEVEL = exports.TRACE_LEVEL = void 0;
      var TRACE_LEVEL = "trace";
      exports.TRACE_LEVEL = TRACE_LEVEL;
      var DEBUG_LEVEL = "debug";
      exports.DEBUG_LEVEL = DEBUG_LEVEL;
      var INFO_LEVEL = "info";
      exports.INFO_LEVEL = INFO_LEVEL;
      var WARNING_LEVEL = "warning";
      exports.WARNING_LEVEL = WARNING_LEVEL;
      var ERROR_LEVEL = "error";
      exports.ERROR_LEVEL = ERROR_LEVEL;
      var FATAL_LEVEL = "fatal";
      exports.FATAL_LEVEL = FATAL_LEVEL;
      var _default = {
        TRACE_LEVEL,
        DEBUG_LEVEL,
        INFO_LEVEL,
        WARNING_LEVEL,
        ERROR_LEVEL,
        FATAL_LEVEL
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/methods.js
  var require_methods = __commonJS({
    "node_modules/necessary/lib/methods.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.OPTIONS_METHOD = exports.DELETE_METHOD = exports.POST_METHOD = exports.GET_METHOD = void 0;
      var GET_METHOD = "GET";
      exports.GET_METHOD = GET_METHOD;
      var POST_METHOD = "POST";
      exports.POST_METHOD = POST_METHOD;
      var DELETE_METHOD = "DELETE";
      exports.DELETE_METHOD = DELETE_METHOD;
      var OPTIONS_METHOD = "OPTIONS";
      exports.OPTIONS_METHOD = OPTIONS_METHOD;
      var _default = {
        GET_METHOD,
        POST_METHOD,
        DELETE_METHOD,
        OPTIONS_METHOD
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/headers.js
  var require_headers = __commonJS({
    "node_modules/necessary/lib/headers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.ACCESS_CONTROL_REQUEST_METHOD_HEADER = exports.ACCESS_CONTROL_ALLOW_HEADERS_HEADER = exports.ACCESS_CONTROL_ALLOW_METHODS_HEADER = exports.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = exports.CONTENT_DISPOSITION_HEADER = exports.TRANSFER_ENCODING_HEADER = exports.CONTENT_LENGTH_HEADER = exports.CACHE_CONTROL_HEADER = exports.AUTHORIZATION_HEADER = exports.CONTENT_TYPE_HEADER = exports.USER_AGENT_HEADER = exports.LOCATION_HEADER = exports.ACCEPT_HEADER = exports.PRAGMA_HEADER = void 0;
      var PRAGMA_HEADER = "pragma";
      exports.PRAGMA_HEADER = PRAGMA_HEADER;
      var ACCEPT_HEADER = "accept";
      exports.ACCEPT_HEADER = ACCEPT_HEADER;
      var LOCATION_HEADER = "location";
      exports.LOCATION_HEADER = LOCATION_HEADER;
      var USER_AGENT_HEADER = "user-agent";
      exports.USER_AGENT_HEADER = USER_AGENT_HEADER;
      var CONTENT_TYPE_HEADER = "content-type";
      exports.CONTENT_TYPE_HEADER = CONTENT_TYPE_HEADER;
      var AUTHORIZATION_HEADER = "authorization";
      exports.AUTHORIZATION_HEADER = AUTHORIZATION_HEADER;
      var CACHE_CONTROL_HEADER = "cache-control";
      exports.CACHE_CONTROL_HEADER = CACHE_CONTROL_HEADER;
      var CONTENT_LENGTH_HEADER = "content-length";
      exports.CONTENT_LENGTH_HEADER = CONTENT_LENGTH_HEADER;
      var TRANSFER_ENCODING_HEADER = "transfer-encoding";
      exports.TRANSFER_ENCODING_HEADER = TRANSFER_ENCODING_HEADER;
      var CONTENT_DISPOSITION_HEADER = "content-disposition";
      exports.CONTENT_DISPOSITION_HEADER = CONTENT_DISPOSITION_HEADER;
      var ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = "access-control-allow-origin";
      exports.ACCESS_CONTROL_ALLOW_ORIGIN_HEADER = ACCESS_CONTROL_ALLOW_ORIGIN_HEADER;
      var ACCESS_CONTROL_ALLOW_METHODS_HEADER = "access-control-allow-methods";
      exports.ACCESS_CONTROL_ALLOW_METHODS_HEADER = ACCESS_CONTROL_ALLOW_METHODS_HEADER;
      var ACCESS_CONTROL_ALLOW_HEADERS_HEADER = "access-control-allow-headers";
      exports.ACCESS_CONTROL_ALLOW_HEADERS_HEADER = ACCESS_CONTROL_ALLOW_HEADERS_HEADER;
      var ACCESS_CONTROL_REQUEST_METHOD_HEADER = "access-control-request-method";
      exports.ACCESS_CONTROL_REQUEST_METHOD_HEADER = ACCESS_CONTROL_REQUEST_METHOD_HEADER;
      var _default = {
        PRAGMA_HEADER,
        ACCEPT_HEADER,
        LOCATION_HEADER,
        USER_AGENT_HEADER,
        CONTENT_TYPE_HEADER,
        AUTHORIZATION_HEADER,
        CACHE_CONTROL_HEADER,
        CONTENT_LENGTH_HEADER,
        TRANSFER_ENCODING_HEADER,
        CONTENT_DISPOSITION_HEADER,
        ACCESS_CONTROL_ALLOW_ORIGIN_HEADER,
        ACCESS_CONTROL_ALLOW_METHODS_HEADER,
        ACCESS_CONTROL_ALLOW_HEADERS_HEADER,
        ACCESS_CONTROL_REQUEST_METHOD_HEADER
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/keyCodes.js
  var require_keyCodes = __commonJS({
    "node_modules/necessary/lib/keyCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.ESCAPE_KEYCODE = exports.SHIFT_KEY_CODE = void 0;
      var SHIFT_KEY_CODE = 16;
      exports.SHIFT_KEY_CODE = SHIFT_KEY_CODE;
      var ESCAPE_KEYCODE = 27;
      exports.ESCAPE_KEYCODE = ESCAPE_KEYCODE;
      var _default = {
        SHIFT_KEY_CODE,
        ESCAPE_KEYCODE
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/encodings.js
  var require_encodings = __commonJS({
    "node_modules/necessary/lib/encodings.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.BASE64_ENCODING = exports.UTF_8_ENCODING = exports.UTF8_ENCODING = void 0;
      var UTF8_ENCODING = "utf8";
      exports.UTF8_ENCODING = UTF8_ENCODING;
      var UTF_8_ENCODING = "utf-8";
      exports.UTF_8_ENCODING = UTF_8_ENCODING;
      var BASE64_ENCODING = "base64";
      exports.BASE64_ENCODING = BASE64_ENCODING;
      var _default = {
        UTF8_ENCODING,
        UTF_8_ENCODING,
        BASE64_ENCODING
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/characters.js
  var require_characters = __commonJS({
    "node_modules/necessary/lib/characters.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.EXCLAMATION_MARK_CHARACTER = exports.CARRIAGE_RETURN_CHARACTER = exports.FORWARD_SLASH_CHARACTER = exports.GREATER_THAN_CHARACTER = exports.LESS_THAN_CHARACTER = exports.AMPERSAND_CHARACTER = exports.BACKSPACE_CHARACTER = exports.NEW_LINE_CHARACTER = exports.BACKTICK_DELIMITER = exports.WILDCARD_CHARACTER = exports.CTRL_C_CHARACTER = exports.PERIOD_CHARACTER = exports.COLON_CHARACTER = exports.COMMA_CHARACTER = exports.SPACE_CHARACTER = exports.DASH_CHARACTER = exports.BAR_CHARACTER = exports.ETX_CHARACTER = void 0;
      var ETX_CHARACTER = "";
      exports.ETX_CHARACTER = ETX_CHARACTER;
      var BAR_CHARACTER = "|";
      exports.BAR_CHARACTER = BAR_CHARACTER;
      var DASH_CHARACTER = "-";
      exports.DASH_CHARACTER = DASH_CHARACTER;
      var SPACE_CHARACTER = " ";
      exports.SPACE_CHARACTER = SPACE_CHARACTER;
      var COMMA_CHARACTER = ",";
      exports.COMMA_CHARACTER = COMMA_CHARACTER;
      var COLON_CHARACTER = ":";
      exports.COLON_CHARACTER = COLON_CHARACTER;
      var PERIOD_CHARACTER = ".";
      exports.PERIOD_CHARACTER = PERIOD_CHARACTER;
      var CTRL_C_CHARACTER = "^C";
      exports.CTRL_C_CHARACTER = CTRL_C_CHARACTER;
      var WILDCARD_CHARACTER = "*";
      exports.WILDCARD_CHARACTER = WILDCARD_CHARACTER;
      var BACKTICK_DELIMITER = "`";
      exports.BACKTICK_DELIMITER = BACKTICK_DELIMITER;
      var NEW_LINE_CHARACTER = "\n";
      exports.NEW_LINE_CHARACTER = NEW_LINE_CHARACTER;
      var BACKSPACE_CHARACTER = String.fromCharCode(127);
      exports.BACKSPACE_CHARACTER = BACKSPACE_CHARACTER;
      var AMPERSAND_CHARACTER = "&";
      exports.AMPERSAND_CHARACTER = AMPERSAND_CHARACTER;
      var LESS_THAN_CHARACTER = "&lt;";
      exports.LESS_THAN_CHARACTER = LESS_THAN_CHARACTER;
      var GREATER_THAN_CHARACTER = "&gt;";
      exports.GREATER_THAN_CHARACTER = GREATER_THAN_CHARACTER;
      var FORWARD_SLASH_CHARACTER = "/";
      exports.FORWARD_SLASH_CHARACTER = FORWARD_SLASH_CHARACTER;
      var CARRIAGE_RETURN_CHARACTER = "\r";
      exports.CARRIAGE_RETURN_CHARACTER = CARRIAGE_RETURN_CHARACTER;
      var EXCLAMATION_MARK_CHARACTER = "!";
      exports.EXCLAMATION_MARK_CHARACTER = EXCLAMATION_MARK_CHARACTER;
      var _default = {
        ETX_CHARACTER,
        BAR_CHARACTER,
        DASH_CHARACTER,
        SPACE_CHARACTER,
        COMMA_CHARACTER,
        COLON_CHARACTER,
        PERIOD_CHARACTER,
        CTRL_C_CHARACTER,
        WILDCARD_CHARACTER,
        BACKTICK_DELIMITER,
        NEW_LINE_CHARACTER,
        AMPERSAND_CHARACTER,
        BACKSPACE_CHARACTER,
        LESS_THAN_CHARACTER,
        GREATER_THAN_CHARACTER,
        FORWARD_SLASH_CHARACTER,
        CARRIAGE_RETURN_CHARACTER,
        EXCLAMATION_MARK_CHARACTER
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/statusCodes.js
  var require_statusCodes = __commonJS({
    "node_modules/necessary/lib/statusCodes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.INTERNAL_SERVER_ERROR_500_STATUS_CODE = exports.TOO_MANY_REQUESTS_429_STATUS_CODE = exports.UNAUTHORISED_401_STATUS_CODE = exports.BAD_REQUEST_400_STATUS_CODE = exports.BAD_GATEWAY_502_STATUS_CODE = exports.NO_CONTENT_204_STATUS_CODE = exports.NOT_FOUND_404_STATUS_CODE = exports.FORBIDDEN_403_STATUS_CODE = exports.SEE_OTHER_303_STATUS_CODE = exports.CREATED_201_STATUS_CODE = exports.FOUND_302_STATUS_CODE = exports.OK_200_STATUS_CODE = exports.ZERO_0_STATUS_CODE = void 0;
      var ZERO_0_STATUS_CODE = 0;
      exports.ZERO_0_STATUS_CODE = ZERO_0_STATUS_CODE;
      var OK_200_STATUS_CODE = 200;
      exports.OK_200_STATUS_CODE = OK_200_STATUS_CODE;
      var FOUND_302_STATUS_CODE = 302;
      exports.FOUND_302_STATUS_CODE = FOUND_302_STATUS_CODE;
      var CREATED_201_STATUS_CODE = 201;
      exports.CREATED_201_STATUS_CODE = CREATED_201_STATUS_CODE;
      var SEE_OTHER_303_STATUS_CODE = 303;
      exports.SEE_OTHER_303_STATUS_CODE = SEE_OTHER_303_STATUS_CODE;
      var FORBIDDEN_403_STATUS_CODE = 403;
      exports.FORBIDDEN_403_STATUS_CODE = FORBIDDEN_403_STATUS_CODE;
      var NOT_FOUND_404_STATUS_CODE = 404;
      exports.NOT_FOUND_404_STATUS_CODE = NOT_FOUND_404_STATUS_CODE;
      var NO_CONTENT_204_STATUS_CODE = 204;
      exports.NO_CONTENT_204_STATUS_CODE = NO_CONTENT_204_STATUS_CODE;
      var BAD_GATEWAY_502_STATUS_CODE = 502;
      exports.BAD_GATEWAY_502_STATUS_CODE = BAD_GATEWAY_502_STATUS_CODE;
      var BAD_REQUEST_400_STATUS_CODE = 400;
      exports.BAD_REQUEST_400_STATUS_CODE = BAD_REQUEST_400_STATUS_CODE;
      var UNAUTHORISED_401_STATUS_CODE = 401;
      exports.UNAUTHORISED_401_STATUS_CODE = UNAUTHORISED_401_STATUS_CODE;
      var TOO_MANY_REQUESTS_429_STATUS_CODE = 429;
      exports.TOO_MANY_REQUESTS_429_STATUS_CODE = TOO_MANY_REQUESTS_429_STATUS_CODE;
      var INTERNAL_SERVER_ERROR_500_STATUS_CODE = 500;
      exports.INTERNAL_SERVER_ERROR_500_STATUS_CODE = INTERNAL_SERVER_ERROR_500_STATUS_CODE;
      var _default = {
        ZERO_0_STATUS_CODE,
        OK_200_STATUS_CODE,
        FOUND_302_STATUS_CODE,
        CREATED_201_STATUS_CODE,
        SEE_OTHER_303_STATUS_CODE,
        FORBIDDEN_403_STATUS_CODE,
        NOT_FOUND_404_STATUS_CODE,
        NO_CONTENT_204_STATUS_CODE,
        BAD_GATEWAY_502_STATUS_CODE,
        BAD_REQUEST_400_STATUS_CODE,
        UNAUTHORISED_401_STATUS_CODE,
        TOO_MANY_REQUESTS_429_STATUS_CODE,
        INTERNAL_SERVER_ERROR_500_STATUS_CODE
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/contentTypes.js
  var require_contentTypes = __commonJS({
    "node_modules/necessary/lib/contentTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = exports.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = exports.TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = exports.TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = exports.APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = exports.APPLICATION_JSON_CONTENT_TYPE = exports.TEXT_PLAIN_CONTENT_TYPE = exports.TEXT_HTML_CONTENT_TYPE = void 0;
      var TEXT_HTML_CONTENT_TYPE = "text/html";
      exports.TEXT_HTML_CONTENT_TYPE = TEXT_HTML_CONTENT_TYPE;
      var TEXT_PLAIN_CONTENT_TYPE = "text/plain";
      exports.TEXT_PLAIN_CONTENT_TYPE = TEXT_PLAIN_CONTENT_TYPE;
      var APPLICATION_JSON_CONTENT_TYPE = "application/json";
      exports.APPLICATION_JSON_CONTENT_TYPE = APPLICATION_JSON_CONTENT_TYPE;
      var APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = "application/x-www-form-urlencoded";
      exports.APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE = APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE;
      var TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = "text/html; charset=utf-8";
      exports.TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE = TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE;
      var TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = "text/plain; charset=utf-8";
      exports.TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE = TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE;
      var APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = "application/json; charset=utf-8";
      exports.APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE = APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE;
      var APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = "application/x-www-form-urlencoded; charset=utf-8";
      exports.APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE = APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE;
      var _default = {
        TEXT_HTML_CONTENT_TYPE,
        TEXT_PLAIN_CONTENT_TYPE,
        APPLICATION_JSON_CONTENT_TYPE,
        APPLICATION_JSON_CHARSET_UTF_8_CONTENT_TYPE,
        TEXT_HTML_CHARSET_UTF_8_CONTENT_TYPE,
        TEXT_PLAIN_CHARSET_UTF_8_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CONTENT_TYPE,
        APPLICATION_X_WWW_FORM_ENCODED_CHARSET_UTF_8_CONTENT_TYPE
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/statusMessages.js
  var require_statusMessages = __commonJS({
    "node_modules/necessary/lib/statusMessages.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = exports.TOO_MANY_REQUESTS_429_STATUS_MESSAGE = exports.UNAUTHORISED_401_STATUS_MESSAGE = exports.BAD_REQUEST_400_STATUS_MESSAGE = exports.BAD_GATEWAY_502_STATUS_MESSAGE = exports.NO_CONTENT_204_STATUS_MESSAGE = exports.NOT_FOUND_404_STATUS_MESSAGE = exports.FORBIDDEN_403_STATUS_MESSAGE = exports.SEE_OTHER_303_STATUS_MESSAGE = exports.CREATED_201_STATUS_MESSAGE = exports.FOUND_302_STATUS_MESSAGE = exports.OK_200_STATUS_MESSAGE = void 0;
      var OK_200_STATUS_MESSAGE = "OK";
      exports.OK_200_STATUS_MESSAGE = OK_200_STATUS_MESSAGE;
      var FOUND_302_STATUS_MESSAGE = "Found";
      exports.FOUND_302_STATUS_MESSAGE = FOUND_302_STATUS_MESSAGE;
      var CREATED_201_STATUS_MESSAGE = "Created";
      exports.CREATED_201_STATUS_MESSAGE = CREATED_201_STATUS_MESSAGE;
      var SEE_OTHER_303_STATUS_MESSAGE = "See other";
      exports.SEE_OTHER_303_STATUS_MESSAGE = SEE_OTHER_303_STATUS_MESSAGE;
      var FORBIDDEN_403_STATUS_MESSAGE = "Forbidden";
      exports.FORBIDDEN_403_STATUS_MESSAGE = FORBIDDEN_403_STATUS_MESSAGE;
      var NOT_FOUND_404_STATUS_MESSAGE = "Not found";
      exports.NOT_FOUND_404_STATUS_MESSAGE = NOT_FOUND_404_STATUS_MESSAGE;
      var NO_CONTENT_204_STATUS_MESSAGE = "No content";
      exports.NO_CONTENT_204_STATUS_MESSAGE = NO_CONTENT_204_STATUS_MESSAGE;
      var BAD_GATEWAY_502_STATUS_MESSAGE = "Bad gateway";
      exports.BAD_GATEWAY_502_STATUS_MESSAGE = BAD_GATEWAY_502_STATUS_MESSAGE;
      var BAD_REQUEST_400_STATUS_MESSAGE = "Bad request";
      exports.BAD_REQUEST_400_STATUS_MESSAGE = BAD_REQUEST_400_STATUS_MESSAGE;
      var UNAUTHORISED_401_STATUS_MESSAGE = "Unauthorised";
      exports.UNAUTHORISED_401_STATUS_MESSAGE = UNAUTHORISED_401_STATUS_MESSAGE;
      var TOO_MANY_REQUESTS_429_STATUS_MESSAGE = "Too many requests";
      exports.TOO_MANY_REQUESTS_429_STATUS_MESSAGE = TOO_MANY_REQUESTS_429_STATUS_MESSAGE;
      var INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = "Internal server error";
      exports.INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE = INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE;
      var _default = {
        OK_200_STATUS_MESSAGE,
        FOUND_302_STATUS_MESSAGE,
        CREATED_201_STATUS_MESSAGE,
        SEE_OTHER_303_STATUS_MESSAGE,
        FORBIDDEN_403_STATUS_MESSAGE,
        NOT_FOUND_404_STATUS_MESSAGE,
        NO_CONTENT_204_STATUS_MESSAGE,
        BAD_GATEWAY_502_STATUS_MESSAGE,
        BAD_REQUEST_400_STATUS_MESSAGE,
        UNAUTHORISED_401_STATUS_MESSAGE,
        TOO_MANY_REQUESTS_429_STATUS_MESSAGE,
        INTERNAL_SERVER_ERROR_500_STATUS_MESSAGE
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/array.js
  var require_array = __commonJS({
    "node_modules/necessary/lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.first = first;
      exports.second = second;
      exports.third = third;
      exports.fourth = fourth;
      exports.fifth = fifth;
      exports.fifthLast = fifthLast;
      exports.fourthLast = fourthLast;
      exports.thirdLast = thirdLast;
      exports.secondLast = secondLast;
      exports.firstLast = firstLast;
      exports.last = last;
      exports.head = head;
      exports.tail = tail;
      exports.back = back;
      exports.front = front;
      exports.push = push;
      exports.unshift = unshift;
      exports.concat = concat;
      exports.clear = clear;
      exports.copy = copy;
      exports.merge = merge;
      exports.splice = splice;
      exports.replace = replace;
      exports.filter = filter;
      exports.find = find;
      exports.prune = prune;
      exports.patch = patch;
      exports.augment = augment;
      exports.separate = separate;
      exports.forwardsSome = forwardsSome;
      exports.backwardsSome = backwardsSome;
      exports.forwardsEvery = forwardsEvery;
      exports.backwardsEvery = backwardsEvery;
      exports.forwardsReduce = forwardsReduce;
      exports.backwardsReduce = backwardsReduce;
      exports.forwardsForEach = forwardsForEach;
      exports.backwardsForEach = backwardsForEach;
      exports.default = void 0;
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function first(array) {
        return array[0];
      }
      function second(array) {
        return array[1];
      }
      function third(array) {
        return array[2];
      }
      function fourth(array) {
        return array[3];
      }
      function fifth(array) {
        return array[4];
      }
      function fifthLast(array) {
        return array[array.length - 5];
      }
      function fourthLast(array) {
        return array[array.length - 4];
      }
      function thirdLast(array) {
        return array[array.length - 3];
      }
      function secondLast(array) {
        return array[array.length - 2];
      }
      function firstLast(array) {
        return array[array.length - 1];
      }
      function last(array) {
        return array[array.length - 1];
      }
      function head(array) {
        return array.slice(0, 1);
      }
      function tail(array) {
        return array.slice(1);
      }
      function back(array) {
        return array.slice(array.length - 1);
      }
      function front(array) {
        return array.slice(0, array.length - 1);
      }
      function push(array1, array2) {
        Array.prototype.push.apply(array1, array2);
      }
      function unshift(array1, array2) {
        Array.prototype.unshift.apply(array1, array2);
      }
      function concat(array1, elementOrArray2) {
        var array2 = _instanceof(elementOrArray2, Array) ? elementOrArray2 : [
          elementOrArray2
        ];
        push(array1, array2);
      }
      function clear(array) {
        var start = 0;
        return array.splice(start);
      }
      function copy(array1, array2) {
        var start = 0, deleteCount = array2.length;
        splice(array1, start, deleteCount, array2);
      }
      function merge(array1, array2) {
        Array.prototype.push.apply(array1, array2);
      }
      function splice(array1, start) {
        var deleteCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity, array2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
        var args = [
          start,
          deleteCount
        ].concat(_toConsumableArray(array2)), deletedItemsArray = Array.prototype.splice.apply(array1, args);
        return deletedItemsArray;
      }
      function replace(array, element1, test) {
        var start;
        var found = array.some(function(element, index) {
          var passed = test(element, index);
          if (passed) {
            start = index;
            return true;
          }
        });
        if (found) {
          var deleteCount = 1;
          array.splice(start, deleteCount, element1);
        }
        return found;
      }
      function filter(array, test) {
        var filteredElements = [];
        backwardsForEach(array, function(element, index) {
          var passed = test(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            filteredElements.unshift(firstDeletedElement);
          }
        });
        return filteredElements;
      }
      function find(array, test) {
        var elements = [];
        forwardsForEach(array, function(element, index) {
          var passed = test(element, index);
          if (passed) {
            elements.push(element);
          }
        });
        return elements;
      }
      function prune(array, test) {
        var prunedElement = void 0;
        array.some(function(element, index) {
          var passed = test(element, index);
          if (!passed) {
            var start = index, deleteCount = 1, deletedElements = array.splice(start, deleteCount), firstDeletedElement = first(deletedElements);
            prunedElement = firstDeletedElement;
            return true;
          }
        });
        return prunedElement;
      }
      function patch(array, element2, test) {
        var found = array.some(function(element, index) {
          var passed = test(element, index);
          if (passed) {
            return true;
          }
        });
        if (found) {
          array.push(element2);
        }
        return found;
      }
      function augment(array1, array2, test) {
        array2.forEach(function(element, index) {
          var passed = test(element, index);
          if (passed) {
            array1.push(element);
          }
        });
      }
      function separate(array, array1, array2, test) {
        array.forEach(function(element, index) {
          var passed = test(element, index);
          passed ? array1.push(element) : array2.push(element);
        });
      }
      function forwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], result = callback(element, index);
          if (result) {
            return true;
          }
        }
        return false;
      }
      function backwardsSome(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], result = callback(element, index);
          if (result) {
            return true;
          }
        }
        return false;
      }
      function forwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index], result = callback(element, index);
          if (!result) {
            return false;
          }
        }
        return true;
      }
      function backwardsEvery(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index], result = callback(element, index);
          if (!result) {
            return false;
          }
        }
        return true;
      }
      function forwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        forwardsForEach(array, function(element, index) {
          value = callback(value, element, index);
        });
        return value;
      }
      function backwardsReduce(array, callback, initialValue) {
        var value = initialValue;
        backwardsForEach(array, function(element, index) {
          value = callback(value, element, index);
        });
        return value;
      }
      function forwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = 0; index < arrayLength; index++) {
          var element = array[index];
          callback(element, index);
        }
      }
      function backwardsForEach(array, callback) {
        var arrayLength = array.length;
        for (var index = arrayLength - 1; index >= 0; index--) {
          var element = array[index];
          callback(element, index);
        }
      }
      var _default = {
        first,
        second,
        third,
        fourth,
        fifth,
        fifthLast,
        fourthLast,
        thirdLast,
        secondLast,
        firstLast,
        last,
        head,
        tail,
        back,
        front,
        push,
        unshift,
        concat,
        clear,
        copy,
        merge,
        splice,
        replace,
        filter,
        find,
        prune,
        patch,
        augment,
        separate,
        forwardsSome,
        backwardsSome,
        forwardsEvery,
        backwardsEvery,
        forwardsReduce,
        backwardsReduce,
        forwardsForEach,
        backwardsForEach
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/constants.js
  var require_constants2 = __commonJS({
    "node_modules/necessary/lib/constants.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EMPTY_STRING = exports.ENVIRONMENT = exports.DEFAULT = exports.BOOLEAN = exports.NUMBER = exports.STRING = exports.ERROR = exports.DATA = void 0;
      var DATA = "data";
      exports.DATA = DATA;
      var ERROR = "error";
      exports.ERROR = ERROR;
      var STRING = "string";
      exports.STRING = STRING;
      var NUMBER = "number";
      exports.NUMBER = NUMBER;
      var BOOLEAN = "boolean";
      exports.BOOLEAN = BOOLEAN;
      var DEFAULT = "default";
      exports.DEFAULT = DEFAULT;
      var ENVIRONMENT = "ENVIRONMENT";
      exports.ENVIRONMENT = ENVIRONMENT;
      var EMPTY_STRING = "";
      exports.EMPTY_STRING = EMPTY_STRING;
    }
  });

  // node_modules/necessary/lib/utilities/http.js
  var require_http = __commonJS({
    "node_modules/necessary/lib/utilities/http.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.overwrite = overwrite;
      exports.underwrite = underwrite;
      exports.portFromHost = portFromHost;
      exports.secureFromHost = secureFromHost;
      exports.hostnameFromHost = hostnameFromHost;
      exports.queryStringFromQuery = queryStringFromQuery;
      exports.urlFromHostURIAndQuery = urlFromHostURIAndQuery;
      exports.default = void 0;
      var _array = require_array();
      var _constants = require_constants2();
      var _characters = require_characters();
      function overwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName1 = existingNames.find(function(existingName) {
          var existingLowerCaseName = existingName.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName1 !== null) {
          headers[existingName1] = value;
        }
      }
      function underwrite(headers, name, value) {
        var lowerCaseName = name.toLowerCase(), existingNames = Object.getOwnPropertyNames(headers), existingName2 = existingNames.find(function(existingName) {
          var existingLowerCaseName = existingName.toLowerCase();
          if (existingLowerCaseName === lowerCaseName) {
            return true;
          }
        }) || null;
        if (existingName2 === null) {
          headers[name] = value;
        }
      }
      function portFromHost(host) {
        var port;
        var matches = host.match(/^https?:\/\/([^\/]+)/), secondMatch = (0, _array).second(matches), index = secondMatch.indexOf(_characters.COLON_CHARACTER);
        if (index === -1) {
          var secure = secureFromHost(host);
          port = secure ? 443 : 80;
        } else {
          var start = index + 1, portString = secondMatch.substring(start);
          port = Number(portString);
        }
        return port;
      }
      function secureFromHost(host) {
        var secure = /^https:\/\//.test(host);
        return secure;
      }
      function hostnameFromHost(host) {
        var matches = host.match(/^https?:\/\/([^:\/]+)/), secondMatch = (0, _array).second(matches), hostname = secondMatch;
        return hostname;
      }
      function queryStringFromQuery(query) {
        var names = Object.keys(query), namesLength = names.length, lastIndex = namesLength - 1, queryString1 = names.reduce(function(queryString, name, index) {
          var value = query[name], encodedName = encodeURIComponent(name), encodedValue = encodeURIComponent(value), ampersandOrNothing = index !== lastIndex ? _characters.AMPERSAND_CHARACTER : _constants.EMPTY_STRING;
          queryString += "".concat(encodedName, "=").concat(encodedValue).concat(ampersandOrNothing);
          return queryString;
        }, _constants.EMPTY_STRING);
        return queryString1;
      }
      function urlFromHostURIAndQuery(host, uri, query) {
        var queryString = queryStringFromQuery(query), url = queryString === _constants.EMPTY_STRING ? "".concat(host).concat(uri) : "".concat(host).concat(uri, "?").concat(queryString);
        return url;
      }
      var _default = {
        overwrite,
        underwrite,
        portFromHost,
        secureFromHost,
        hostnameFromHost,
        queryStringFromQuery,
        urlFromHostURIAndQuery
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/ajax.js
  var require_ajax = __commonJS({
    "node_modules/necessary/lib/utilities/ajax.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.get = get;
      exports.post = post;
      exports.request = request;
      exports.default = void 0;
      var _methods = require_methods();
      var _contentTypes = require_contentTypes();
      var _headers = require_headers();
      var _http = require_http();
      function get(host, uri, query, headers, callback) {
        if (callback === void 0) {
          callback = headers;
          headers = {};
        }
        var method = _methods.GET_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, content = null;
        underwriteAcceptHeader(headers, accept);
        request(host, uri, query, method, headers, content, callback);
      }
      function post(host, uri, query, headers, content, callback) {
        if (callback === void 0) {
          callback = content;
          content = headers;
          headers = {};
        }
        var method = _methods.POST_METHOD, accept = _contentTypes.APPLICATION_JSON_CONTENT_TYPE, contentType = _contentTypes.APPLICATION_JSON_CONTENT_TYPE;
        underwriteAcceptHeader(headers, accept);
        underwriteContentTypeHeader(headers, contentType);
        request(host, uri, query, method, headers, content, callback);
      }
      function request(host, uri, query, method, headers, content1, callback) {
        var url = (0, _http).urlFromHostURIAndQuery(host, uri, query), accept = headers[_headers.ACCEPT_HEADER] || null, contentType = headers[_headers.CONTENT_TYPE_HEADER] || null, xmlHttpRequest = new XMLHttpRequest();
        if (contentType === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
          var json = content1, jsonString = JSON.stringify(json);
          content1 = jsonString;
        }
        xmlHttpRequest.onreadystatechange = function() {
          var readyState = xmlHttpRequest.readyState, status = xmlHttpRequest.status, response = xmlHttpRequest.response, statusCode = status;
          if (readyState == 4) {
            var content = response;
            if (accept === _contentTypes.APPLICATION_JSON_CONTENT_TYPE) {
              try {
                var jsonString2 = content, json2 = JSON.parse(jsonString2);
                content = json2;
              } catch (error) {
                content = null;
              }
            }
            callback(content, statusCode);
          }
        };
        xmlHttpRequest.open(method, url);
        if (accept !== null) {
          xmlHttpRequest.setRequestHeader(_headers.ACCEPT_HEADER, accept);
        }
        if (contentType !== null) {
          xmlHttpRequest.setRequestHeader(_headers.CONTENT_TYPE_HEADER, contentType);
        }
        content1 !== null ? xmlHttpRequest.send(content1) : xmlHttpRequest.send();
      }
      var _default = {
        get,
        post,
        request
      };
      exports.default = _default;
      function underwriteAcceptHeader(headers, accept) {
        var name = _headers.ACCEPT_HEADER, value = accept;
        (0, _http).underwrite(headers, name, value);
      }
      function underwriteContentTypeHeader(headers, contentTYpe) {
        var name = _headers.CONTENT_TYPE_HEADER, value = contentTYpe;
        (0, _http).underwrite(headers, name, value);
      }
    }
  });

  // node_modules/necessary/lib/utilities/path.js
  var require_path = __commonJS({
    "node_modules/necessary/lib/utilities/path.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isPathName = isPathName;
      exports.isPathTopmostName = isPathTopmostName;
      exports.isPathRelativePath = isPathRelativePath;
      exports.isPathAbsolutePath = isPathAbsolutePath;
      exports.isTopmostNameInAbsolutePath = isTopmostNameInAbsolutePath;
      exports.combinePaths = combinePaths;
      exports.concatenatePaths = concatenatePaths;
      exports.bottommostNameFromPath = bottommostNameFromPath;
      exports.topmostDirectoryPathFromPath = topmostDirectoryPathFromPath;
      exports.topmostDirectoryNameFromPath = topmostDirectoryNameFromPath;
      exports.pathWithoutBottommostNameFromPath = pathWithoutBottommostNameFromPath;
      exports.pathWithoutTopmostDirectoryNameFromPath = pathWithoutTopmostDirectoryNameFromPath;
      exports.default = void 0;
      var _constants = require_constants2();
      var _array = require_array();
      function isPathName(path) {
        path = path.replace(/^\//, _constants.EMPTY_STRING).replace(/\/$/, _constants.EMPTY_STRING);
        var pathName = /\//.test(path) === false;
        return pathName;
      }
      function isPathTopmostName(path) {
        var pathName = isPathName(path), pathAbsolutePath = isPathAbsolutePath(path), pathTopmostName = pathName && pathAbsolutePath;
        return pathTopmostName;
      }
      function isPathRelativePath(path) {
        var pathRelativePath = !/^\//.test(path);
        return pathRelativePath;
      }
      function isPathAbsolutePath(path) {
        var pathAbsolutePath = /^\//.test(path);
        return pathAbsolutePath;
      }
      function isTopmostNameInAbsolutePath(topmostName, absolutePath) {
        var regExp = new RegExp("^".concat(topmostName, "(?:\\/.+)?$")), topmostNameInAbsolutePath = regExp.test(absolutePath);
        return topmostNameInAbsolutePath;
      }
      function combinePaths(path, relativePath) {
        var combinedPath = null;
        var pathNames = path.split(/\//), relativePathNames = relativePath.split(/\//);
        var lastPathName, firstRelativePathName = (0, _array).first(relativePathNames);
        if (firstRelativePathName === ".") {
          relativePathNames.shift();
        }
        firstRelativePathName = (0, _array).first(relativePathNames);
        lastPathName = (0, _array).last(pathNames);
        while (firstRelativePathName === ".." && lastPathName !== void 0) {
          relativePathNames.shift();
          pathNames.pop();
          firstRelativePathName = (0, _array).first(relativePathNames);
          lastPathName = (0, _array).last(pathNames);
        }
        if (lastPathName !== void 0) {
          var combinedPathNames = [].concat(pathNames).concat(relativePathNames);
          combinedPath = combinedPathNames.join("/");
        }
        return combinedPath;
      }
      function concatenatePaths(path, relativePath) {
        path = path.replace(/\/$/, _constants.EMPTY_STRING);
        var concatenatedPath = "".concat(path, "/").concat(relativePath);
        return concatenatedPath;
      }
      function bottommostNameFromPath(path) {
        var bottommostName = null;
        var matches = path.match(/^.*\/([^\/]+\/?)$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          bottommostName = secondMatch;
        }
        return bottommostName;
      }
      function topmostDirectoryPathFromPath(path) {
        var matches = path.match(/^(.+)\/[^\/]+\/?$/), secondMatch = (0, _array).second(matches), topmostDirectoryPath = secondMatch;
        return topmostDirectoryPath;
      }
      function topmostDirectoryNameFromPath(path) {
        var topmostDirectoryName = null;
        var matches = path.match(/^([^\/]+)\/.+$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          topmostDirectoryName = secondMatch;
        }
        return topmostDirectoryName;
      }
      function pathWithoutBottommostNameFromPath(path) {
        var pathWithoutBottommostName = null;
        var matches = path.match(/^(.*)\/[^\/]+\/?$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          pathWithoutBottommostName = secondMatch;
        }
        return pathWithoutBottommostName;
      }
      function pathWithoutTopmostDirectoryNameFromPath(path) {
        var pathWithoutTopmostDirectoryName = null;
        var matches = path.match(/^[^\/]+\/(.+)$/);
        if (matches !== null) {
          var secondMatch = (0, _array).second(matches);
          pathWithoutTopmostDirectoryName = secondMatch;
        }
        return pathWithoutTopmostDirectoryName;
      }
      var _default = {
        isPathName,
        isPathTopmostName,
        isPathRelativePath,
        isPathAbsolutePath,
        isTopmostNameInAbsolutePath,
        combinePaths,
        concatenatePaths,
        bottommostNameFromPath,
        topmostDirectoryPathFromPath,
        topmostDirectoryNameFromPath,
        pathWithoutBottommostNameFromPath,
        pathWithoutTopmostDirectoryNameFromPath
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/utilities/asynchronous.js
  var require_asynchronous = __commonJS({
    "node_modules/necessary/lib/utilities/asynchronous.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.whilst = whilst;
      exports.forEach = forEach;
      exports.sequence = sequence;
      exports.eventually = eventually;
      exports.repeatedly = repeatedly;
      exports.forwardsForEach = forwardsForEach;
      exports.backwardsForEach = backwardsForEach;
      exports.default = void 0;
      function whilst(operation, done, context) {
        var count = -1;
        function next() {
          count++;
          var index = count, terminate = operation(next, done, context, index);
          if (terminate) {
            done();
          }
        }
        next();
      }
      function forEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function sequence(operations, done, context) {
        var length = operations.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, operation = operations[index];
            operation(next, done, context, index);
          }
        }
        next();
      }
      function eventually(operations, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var length = operations.length;
        var count = 0;
        operations.forEach(function(operation, index) {
          operation(next, done, context, index);
        });
      }
      function repeatedly(operation, length, done, context) {
        var next = function next2() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          }
        };
        var count = 0;
        for (var index = 0; index < length; index++) {
          operation(next, done, context, index);
        }
      }
      function forwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = -1;
        function next() {
          count++;
          var terminate = count === length;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      function backwardsForEach(array, operation, done, context) {
        var length = array.length;
        var count = length;
        function next() {
          count--;
          var terminate = count === -1;
          if (terminate) {
            done();
          } else {
            var index = count, element = array[index];
            operation(element, next, done, context, index);
          }
        }
        next();
      }
      var _default = {
        whilst,
        forEach,
        sequence,
        eventually,
        repeatedly,
        forwardsForEach,
        backwardsForEach
      };
      exports.default = _default;
    }
  });

  // node_modules/necessary/lib/browser.js
  var require_browser = __commonJS({
    "node_modules/necessary/lib/browser.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "levels", {
        enumerable: true,
        get: function() {
          return _levels.default;
        }
      });
      Object.defineProperty(exports, "methods", {
        enumerable: true,
        get: function() {
          return _methods.default;
        }
      });
      Object.defineProperty(exports, "headers", {
        enumerable: true,
        get: function() {
          return _headers.default;
        }
      });
      Object.defineProperty(exports, "keyCodes", {
        enumerable: true,
        get: function() {
          return _keyCodes.default;
        }
      });
      Object.defineProperty(exports, "encodings", {
        enumerable: true,
        get: function() {
          return _encodings.default;
        }
      });
      Object.defineProperty(exports, "characters", {
        enumerable: true,
        get: function() {
          return _characters.default;
        }
      });
      Object.defineProperty(exports, "statusCodes", {
        enumerable: true,
        get: function() {
          return _statusCodes.default;
        }
      });
      Object.defineProperty(exports, "contentTypes", {
        enumerable: true,
        get: function() {
          return _contentTypes.default;
        }
      });
      Object.defineProperty(exports, "statusMessages", {
        enumerable: true,
        get: function() {
          return _statusMessages.default;
        }
      });
      Object.defineProperty(exports, "ajaxUtilities", {
        enumerable: true,
        get: function() {
          return _ajax.default;
        }
      });
      Object.defineProperty(exports, "pathUtilities", {
        enumerable: true,
        get: function() {
          return _path.default;
        }
      });
      Object.defineProperty(exports, "httpUtilities", {
        enumerable: true,
        get: function() {
          return _http.default;
        }
      });
      Object.defineProperty(exports, "arrayUtilities", {
        enumerable: true,
        get: function() {
          return _array.default;
        }
      });
      Object.defineProperty(exports, "asynchronousUtilities", {
        enumerable: true,
        get: function() {
          return _asynchronous.default;
        }
      });
      var _levels = _interopRequireDefault2(require_levels());
      var _methods = _interopRequireDefault2(require_methods());
      var _headers = _interopRequireDefault2(require_headers());
      var _keyCodes = _interopRequireDefault2(require_keyCodes());
      var _encodings = _interopRequireDefault2(require_encodings());
      var _characters = _interopRequireDefault2(require_characters());
      var _statusCodes = _interopRequireDefault2(require_statusCodes());
      var _contentTypes = _interopRequireDefault2(require_contentTypes());
      var _statusMessages = _interopRequireDefault2(require_statusMessages());
      var _ajax = _interopRequireDefault2(require_ajax());
      var _path = _interopRequireDefault2(require_path());
      var _http = _interopRequireDefault2(require_http());
      var _array = _interopRequireDefault2(require_array());
      var _asynchronous = _interopRequireDefault2(require_asynchronous());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/utilities/array.js
  var require_array2 = __commonJS({
    "lib/utilities/array.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.add = add;
      exports.permute = permute;
      exports.flatten = flatten;
      exports.guarantee = guarantee;
      exports.separate = exports.merge = exports.push = exports.fourth = exports.third = exports.second = exports.first = void 0;
      var _necessary = require_browser();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var first = _necessary.arrayUtilities.first;
      var second = _necessary.arrayUtilities.second;
      var third = _necessary.arrayUtilities.third;
      var fourth = _necessary.arrayUtilities.fourth;
      var push = _necessary.arrayUtilities.push;
      var merge = _necessary.arrayUtilities.merge;
      var separate = _necessary.arrayUtilities.separate;
      exports.first = first;
      exports.second = second;
      exports.third = third;
      exports.fourth = fourth;
      exports.push = push;
      exports.merge = merge;
      exports.separate = separate;
      function add(array, element) {
        array.push(element);
      }
      function permute(array, places) {
        var length = array.length, cut = length - places, leadingElements = array.slice(0, cut), trailingElements = array.slice(cut);
        array = _toConsumableArray(trailingElements).concat(_toConsumableArray(leadingElements));
        return array;
      }
      function flatten(arrays) {
        return arrays.reduce(function(elements, array) {
          return elements.concat(array);
        }, []);
      }
      function guarantee(arrayOrElement) {
        arrayOrElement = arrayOrElement || [];
        return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
          arrayOrElement
        ];
      }
    }
  });

  // lib/element.js
  var require_element = __commonJS({
    "lib/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      var _array = require_array2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var Element = /* @__PURE__ */ function() {
        function Element2() {
          _classCallCheck(this, Element2);
        }
        _createClass(Element2, [
          {
            key: "getProperties",
            value: function getProperties() {
              return this.properties;
            }
          },
          {
            key: "getChildElements",
            value: function getChildElements() {
              return this.childElements;
            }
          },
          {
            key: "setProperties",
            value: function setProperties(properties) {
              this.properties = properties;
            }
          },
          {
            key: "setChildElements",
            value: function setChildElements(childElements) {
              this.childElements = childElements;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var element = _construct(Class, _toConsumableArray(remainingArguments)), childElements = _typeof(element.childElements) === _constants.FUNCTION ? (0, _array).guarantee(element.childElements(properties)) : properties.childElements || [];
              element.setProperties(properties);
              element.setChildElements(childElements);
              return element;
            }
          }
        ]);
        return Element2;
      }();
      exports.default = Element;
    }
  });

  // lib/maths/vector.js
  var require_vector = __commonJS({
    "lib/maths/vector.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.zero2 = zero2;
      exports.zero3 = zero3;
      exports.zero4 = zero4;
      exports.length2 = length2;
      exports.length3 = length3;
      exports.length4 = length4;
      exports.dot2 = dot2;
      exports.dot3 = dot3;
      exports.dot4 = dot4;
      exports.cross3 = cross3;
      exports.normalise2 = normalise2;
      exports.normalise3 = normalise3;
      exports.normalise4 = normalise4;
      exports.reflect2 = reflect2;
      exports.reflect3 = reflect3;
      exports.reflect4 = reflect4;
      exports.truncate4 = truncate4;
      exports.scale2 = scale2;
      exports.scale3 = scale3;
      exports.scale4 = scale4;
      exports.add2 = add2;
      exports.add3 = add3;
      exports.add4 = add4;
      exports.subtract2 = subtract2;
      exports.subtract3 = subtract3;
      exports.subtract4 = subtract4;
      exports.multiply2 = multiply2;
      exports.multiply3 = multiply3;
      exports.multiply4 = multiply4;
      exports.transform2 = transform2;
      exports.transform3 = transform3;
      exports.transform4 = transform4;
      exports.default = void 0;
      function zero2() {
        return [
          0,
          0
        ];
      }
      function zero3() {
        return [
          0,
          0,
          0
        ];
      }
      function zero4() {
        return [
          0,
          0,
          0,
          0
        ];
      }
      function length2(vector) {
        var x = vector[0], y = vector[1];
        return Math.sqrt(x * x + y * y);
      }
      function length3(vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        return Math.sqrt(x * x + y * y + z * z);
      }
      function length4(vector) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3];
        return Math.sqrt(x * x + y * y + z * z + w * w);
      }
      function dot2(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1];
      }
      function dot3(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2];
      }
      function dot4(vectorA, vectorB) {
        return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1] + vectorA[2] * vectorB[2] + vectorA[3] * vectorB[3];
      }
      function cross3(vectorA, vectorB) {
        var ax = vectorA[0], ay = vectorA[1], az = vectorA[2], bx = vectorB[0], by = vectorB[1], bz = vectorB[2];
        return [
          ay * bz - az * by,
          az * bx - ax * bz,
          ax * by - ay * bx
        ];
      }
      function normalise2(vector) {
        var x = vector[0], y = vector[1], length = Math.sqrt(x * x + y * y);
        if (length > 0) {
          return [
            x / length,
            y / length
          ];
        }
      }
      function normalise3(vector) {
        var x = vector[0], y = vector[1], z = vector[2], length = Math.sqrt(x * x + y * y + z * z);
        if (length > 0) {
          return [
            x / length,
            y / length,
            z / length
          ];
        }
      }
      function normalise4(vector) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3], length = Math.sqrt(x * x + y * y + z * z + w * w);
        if (length > 0) {
          return [
            x / length,
            y / length,
            z / length,
            w / length
          ];
        }
      }
      function reflect2(vector) {
        return [
          -vector[0],
          -vector[1]
        ];
      }
      function reflect3(vector) {
        return [
          -vector[0],
          -vector[1],
          -vector[2]
        ];
      }
      function reflect4(vector) {
        return [
          -vector[0],
          -vector[1],
          -vector[2],
          -vector[3]
        ];
      }
      function truncate4(vector) {
        return [
          vector[0],
          vector[1],
          vector[2]
        ];
      }
      function scale2(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar
        ];
      }
      function scale3(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar,
          vector[2] * scalar
        ];
      }
      function scale4(vector, scalar) {
        return [
          vector[0] * scalar,
          vector[1] * scalar,
          vector[2] * scalar,
          vector[3] * scalar
        ];
      }
      function add2(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1]
        ];
      }
      function add3(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1],
          vectorA[2] + vectorB[2]
        ];
      }
      function add4(vectorA, vectorB) {
        return [
          vectorA[0] + vectorB[0],
          vectorA[1] + vectorB[1],
          vectorA[2] + vectorB[2],
          vectorA[3] + vectorB[3]
        ];
      }
      function subtract2(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1]
        ];
      }
      function subtract3(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1],
          vectorA[2] - vectorB[2]
        ];
      }
      function subtract4(vectorA, vectorB) {
        return [
          vectorA[0] - vectorB[0],
          vectorA[1] - vectorB[1],
          vectorA[2] - vectorB[2],
          vectorA[3] - vectorB[3]
        ];
      }
      function multiply2(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1]
        ];
      }
      function multiply3(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1],
          vectorA[2] * vectorB[2]
        ];
      }
      function multiply4(vectorA, vectorB) {
        return [
          vectorA[0] * vectorB[0],
          vectorA[1] * vectorB[1],
          vectorA[2] * vectorB[2],
          vectorA[3] * vectorB[3]
        ];
      }
      function transform2(vector, matrix) {
        var x = vector[0], y = vector[1];
        return [
          matrix[0] * x + matrix[2] * y,
          matrix[1] * x + matrix[3] * y
        ];
      }
      function transform3(vector, matrix) {
        var x = vector[0], y = vector[1], z = vector[2];
        return [
          matrix[0] * x + matrix[3] * y + matrix[6] * z,
          matrix[1] * x + matrix[4] * y + matrix[7] * z,
          matrix[2] * x + matrix[5] * y + matrix[8] * z
        ];
      }
      function transform4(vector, matrix) {
        var x = vector[0], y = vector[1], z = vector[2], w = vector[3];
        return [
          matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12] * w,
          matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13] * w,
          matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14] * w,
          matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15] * w
        ];
      }
      var _default = {
        zero2,
        zero3,
        zero4,
        length2,
        length3,
        length4,
        dot2,
        dot3,
        dot4,
        cross3,
        normalise2,
        normalise3,
        normalise4,
        reflect2,
        reflect3,
        reflect4,
        truncate4,
        scale2,
        scale3,
        scale4,
        add2,
        add3,
        add4,
        subtract2,
        subtract3,
        subtract4,
        multiply2,
        multiply3,
        multiply4,
        transform2,
        transform3,
        transform4
      };
      exports.default = _default;
    }
  });

  // lib/primitive/edge.js
  var require_edge = __commonJS({
    "lib/primitive/edge.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Edge = /* @__PURE__ */ function() {
        function Edge2(position, extent) {
          _classCallCheck(this, Edge2);
          this.position = position;
          this.extent = extent;
        }
        _createClass(Edge2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), extent = this.extent.slice(), edge = new Edge2(position, extent);
              return edge;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(Class, startVertex, endVertex) {
              if (endVertex === void 0) {
                endVertex = startVertex;
                startVertex = Class;
                Class = Edge2;
              }
              var startPosition = startVertex.getPosition(), endPosition = endVertex.getPosition(), position = startPosition.slice(), extent = (0, _vector).subtract3(endPosition, startPosition), edge = new Class(position, extent);
              return edge;
            }
          }
        ]);
        return Edge2;
      }();
      exports.default = Edge;
    }
  });

  // lib/utilities/midPoint.js
  var require_midPoint = __commonJS({
    "lib/utilities/midPoint.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateMidPointPosition = calculateMidPointPosition;
      exports.projectMidPointPositionOntoXYPlane = projectMidPointPositionOntoXYPlane;
      exports.isMidPointPositionToOneSideOfMaskingEdges = isMidPointPositionToOneSideOfMaskingEdges;
      var _vector = require_vector();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function calculateMidPointPosition(vertices) {
        var midPointPosition1 = vertices.reduce(function(midPointPosition, vertex) {
          var vertexPosition = vertex.getPosition(), scaledVertexPosition = (0, _vector).scale3(vertexPosition, 1 / 3);
          midPointPosition = (0, _vector).add3(midPointPosition, scaledVertexPosition);
          return midPointPosition;
        }, [
          0,
          0,
          0
        ]);
        return midPointPosition1;
      }
      function projectMidPointPositionOntoXYPlane(midPointPosition) {
        midPointPosition = _toConsumableArray(midPointPosition.slice(0, 2)).concat([
          0
        ]);
        return midPointPosition;
      }
      function isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges = isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToTheRightOfMaskingEdges = isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges), midPointPositionToOneSideOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdges || midPointPositionToTheRightOfMaskingEdges;
        return midPointPositionToOneSideOfMaskingEdges;
      }
      function isMidPointPositionToTheLeftOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheLeftOfMaskingEdges1 = maskingEdges.reduce(function(midPointPositionToTheLeftOfMaskingEdges, maskingEdge) {
          if (midPointPositionToTheLeftOfMaskingEdges) {
            var midPointPositionToTheLeftOfMaskingEdge = maskingEdge.isMidPointPositionToTheLeft(midPointPosition);
            midPointPositionToTheLeftOfMaskingEdges = midPointPositionToTheLeftOfMaskingEdge;
          }
          return midPointPositionToTheLeftOfMaskingEdges;
        }, true);
        return midPointPositionToTheLeftOfMaskingEdges1;
      }
      function isMidPointPositionToTheRightOfMaskingEdges(midPointPosition, maskingEdges) {
        var midPointPositionToTheRightOfMaskingEdges1 = maskingEdges.reduce(function(midPointPositionToTheRightOfMaskingEdges, maskingEdge) {
          if (midPointPositionToTheRightOfMaskingEdges) {
            var midPointPositionToTheRightOfMaskingEdge = maskingEdge.isMidPointPositionToTheRight(midPointPosition);
            midPointPositionToTheRightOfMaskingEdges = midPointPositionToTheRightOfMaskingEdge;
          }
          return midPointPositionToTheRightOfMaskingEdges;
        }, true);
        return midPointPositionToTheRightOfMaskingEdges1;
      }
    }
  });

  // lib/primitive/edge/masking.js
  var require_masking = __commonJS({
    "lib/primitive/edge/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _array = require_array2();
      var _vector = require_vector();
      var _midPoint = require_midPoint();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var MaskingEdge = /* @__PURE__ */ function(Edge) {
        _inherits(MaskingEdge2, Edge);
        var _super = _createSuper(MaskingEdge2);
        function MaskingEdge2() {
          _classCallCheck(this, MaskingEdge2);
          return _super.apply(this, arguments);
        }
        _createClass(MaskingEdge2, [
          {
            key: "isMidPointPositionToTheLeft",
            value: function isMidPointPositionToTheLeft(midPointPosition) {
              midPointPosition = (0, _midPoint).projectMidPointPositionOntoXYPlane(midPointPosition);
              var extent = this.getExtent(), position = this.getPosition(), midPointRelativePosition = (0, _vector).subtract3(midPointPosition, position), crossProductComponents = (0, _vector).cross3(extent, midPointRelativePosition), thirdCrossProductComponent = (0, _array).third(crossProductComponents), midPointPositionToTheLeft = thirdCrossProductComponent > 0;
              return midPointPositionToTheLeft;
            }
          },
          {
            key: "isMidPointPositionToTheRight",
            value: function isMidPointPositionToTheRight(midPointPosition) {
              var midPointPositionToTheLeft = this.isMidPointPositionToTheLeft(midPointPosition), midPointPositionToTheRight = !midPointPositionToTheLeft;
              return midPointPositionToTheRight;
            }
          }
        ], [
          {
            key: "fromStartVertexAndEndVertex",
            value: function fromStartVertexAndEndVertex(startVertex, endVertex) {
              return _edge.default.fromStartVertexAndEndVertex(MaskingEdge2, startVertex, endVertex);
            }
          }
        ]);
        return MaskingEdge2;
      }(_edge.default);
      exports.default = MaskingEdge;
    }
  });

  // lib/defaults.js
  var require_defaults = __commonJS({
    "lib/defaults.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DEFAULT_MOUSE_WHEEL_SENSITIVITY = exports.DEFAULT_MOUSE_SENSITIVITY = exports.DEFAULT_INITIAL_POSITION = exports.DEFAULT_INITIAL_DISTANCE = exports.DEFAULT_MARGIN_OF_ERROR = exports.DEFAULT_INITIAL_OFFSETS = exports.DEFAULT_INITIAL_ANGLES = exports.DEFAULT_FIELD_OF_VIEW = exports.DEFAULT_PERSIST = exports.DEFAULT_Z_NEAR = exports.DEFAULT_Z_FAR = exports.DEFAULT_DEPTH = exports.DEFAULT_HOST = exports.DEFAULT_A = exports.DEFAULT_B = exports.DEFAULT_G = exports.DEFAULT_R = void 0;
      var _vector = require_vector();
      var DEFAULT_R = 0;
      exports.DEFAULT_R = DEFAULT_R;
      var DEFAULT_G = 0;
      exports.DEFAULT_G = DEFAULT_G;
      var DEFAULT_B = 0;
      exports.DEFAULT_B = DEFAULT_B;
      var DEFAULT_A = 1;
      exports.DEFAULT_A = DEFAULT_A;
      var DEFAULT_HOST = "";
      exports.DEFAULT_HOST = DEFAULT_HOST;
      var DEFAULT_DEPTH = 1;
      exports.DEFAULT_DEPTH = DEFAULT_DEPTH;
      var DEFAULT_Z_FAR = 1e3;
      exports.DEFAULT_Z_FAR = DEFAULT_Z_FAR;
      var DEFAULT_Z_NEAR = 1;
      exports.DEFAULT_Z_NEAR = DEFAULT_Z_NEAR;
      var DEFAULT_PERSIST = false;
      exports.DEFAULT_PERSIST = DEFAULT_PERSIST;
      var DEFAULT_FIELD_OF_VIEW = 45;
      exports.DEFAULT_FIELD_OF_VIEW = DEFAULT_FIELD_OF_VIEW;
      var DEFAULT_INITIAL_ANGLES = (0, _vector).zero2();
      exports.DEFAULT_INITIAL_ANGLES = DEFAULT_INITIAL_ANGLES;
      var DEFAULT_INITIAL_OFFSETS = (0, _vector).zero3();
      exports.DEFAULT_INITIAL_OFFSETS = DEFAULT_INITIAL_OFFSETS;
      var DEFAULT_MARGIN_OF_ERROR = 1e-7;
      exports.DEFAULT_MARGIN_OF_ERROR = DEFAULT_MARGIN_OF_ERROR;
      var DEFAULT_INITIAL_DISTANCE = 5;
      exports.DEFAULT_INITIAL_DISTANCE = DEFAULT_INITIAL_DISTANCE;
      var DEFAULT_INITIAL_POSITION = [
        0,
        0,
        5
      ];
      exports.DEFAULT_INITIAL_POSITION = DEFAULT_INITIAL_POSITION;
      var DEFAULT_MOUSE_SENSITIVITY = 1;
      exports.DEFAULT_MOUSE_SENSITIVITY = DEFAULT_MOUSE_SENSITIVITY;
      var DEFAULT_MOUSE_WHEEL_SENSITIVITY = 1;
      exports.DEFAULT_MOUSE_WHEEL_SENSITIVITY = DEFAULT_MOUSE_WHEEL_SENSITIVITY;
    }
  });

  // lib/utilities/approximate.js
  var require_approximate = __commonJS({
    "lib/utilities/approximate.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isApproximatelyEqualToOne = isApproximatelyEqualToOne;
      exports.isApproximatelyEqualToZero = isApproximatelyEqualToZero;
      var _defaults = require_defaults();
      function isApproximatelyEqualToOne(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 1, marginOfError);
      }
      function isApproximatelyEqualToZero(value) {
        var marginOfError = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        return isApproximatelyEqualTo(value, 0, marginOfError);
      }
      function isApproximatelyEqualTo(valueA, valueB) {
        var marginOfError = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_MARGIN_OF_ERROR;
        var difference = valueA - valueB, absoluteDifference = Math.abs(difference), approximatelyEqual = absoluteDifference < marginOfError;
        return approximatelyEqual;
      }
    }
  });

  // lib/utilities/angle.js
  var require_angle = __commonJS({
    "lib/utilities/angle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateHalfAngleSine = calculateHalfAngleSine;
      exports.calculateHalfAngleCosine = calculateHalfAngleCosine;
      function calculateHalfAngleSine(angleCosine) {
        return Math.sqrt((1 - angleCosine) / 2);
      }
      function calculateHalfAngleCosine(angleCosine) {
        return Math.sqrt((1 + angleCosine) / 2);
      }
    }
  });

  // lib/utilities/quaternion.js
  var require_quaternion = __commonJS({
    "lib/utilities/quaternion.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rotateImaginaryQuaternion = rotateImaginaryQuaternion;
      exports.calculateInverseRotationQuaternion = calculateInverseRotationQuaternion;
      exports.calculateForwardsRotationQuaternion = calculateForwardsRotationQuaternion;
      exports.calculateBackwardsRotationQuaternion = calculateBackwardsRotationQuaternion;
      exports.calculateArbitraryRotationQuaternion = calculateArbitraryRotationQuaternion;
      exports.calculateRotationAboutZAxisQuaternion = calculateRotationAboutZAxisQuaternion;
      var _vector = require_vector();
      var _approximate = require_approximate();
      var _array = require_array2();
      var _angle = require_angle();
      function rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion) {
        return hamiltonProduct(hamiltonProduct(rotationQuaternion, imaginaryQuaternion), inverseRotationQuaternion);
      }
      function calculateInverseRotationQuaternion(rotationQuaternion) {
        var rotationQuaternionComponents = rotationQuaternion, firstRotationQuaternionComponent = (0, _array).first(rotationQuaternionComponents), secondRotationQuaternionComponent = (0, _array).second(rotationQuaternionComponents), thirdRotationQuaternionComponent = (0, _array).third(rotationQuaternionComponents), fourthRotationQuaternionComponent = (0, _array).fourth(rotationQuaternionComponents), inverseRotationQuaternion = [
          firstRotationQuaternionComponent,
          -secondRotationQuaternionComponent,
          -thirdRotationQuaternionComponent,
          -fourthRotationQuaternionComponent
        ];
        return inverseRotationQuaternion;
      }
      function calculateForwardsRotationQuaternion(rotationQuaternion) {
        var forwardsRotationQuaternion = rotationQuaternion;
        return forwardsRotationQuaternion;
      }
      function calculateBackwardsRotationQuaternion(rotationQuaternion) {
        var inverseRotationQuaternion = calculateInverseRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = inverseRotationQuaternion;
        return backwardsRotationQuaternion;
      }
      function calculateArbitraryRotationQuaternion(normal) {
        var extent = normal.getExtent(), unitNormal = extent, zAxis = [
          0,
          0,
          1
        ], dotProductOfUnitNormalAndZAxis = (0, _vector).dot3(unitNormal, zAxis), crossProductOfUnitNormalAndZAxis = (0, _vector).cross3(unitNormal, zAxis), angleOfRotationCosine = dotProductOfUnitNormalAndZAxis, angleOfRotationCosineAbsoluteValue = Math.abs(angleOfRotationCosine), angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne = (0, _approximate).isApproximatelyEqualToOne(angleOfRotationCosineAbsoluteValue), axisOfRotation = angleOfRotationCosineAbsoluteValueApproximatelyEqualToOne ? [
          1,
          0,
          0
        ] : crossProductOfUnitNormalAndZAxis, unitAxisOfRotation = (0, _vector).normalise3(axisOfRotation), halfAngleOfRotationCosine = (0, _angle).calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = (0, _angle).calculateHalfAngleSine(angleOfRotationCosine), unitAxisOfRotationComponents = unitAxisOfRotation, firstAxisOfRotationComponent = (0, _array).first(unitAxisOfRotationComponents), secondAxisOfRotationComponent = (0, _array).second(unitAxisOfRotationComponents), thirdAxisOfRotationComponent = (0, _array).third(unitAxisOfRotationComponents), arbitraryRotationQuaternion = [
          halfAngleOfRotationCosine,
          firstAxisOfRotationComponent * halfAngleOfRotationSine,
          secondAxisOfRotationComponent * halfAngleOfRotationSine,
          thirdAxisOfRotationComponent * halfAngleOfRotationSine
        ];
        return arbitraryRotationQuaternion;
      }
      function calculateRotationAboutZAxisQuaternion(maskingEdge) {
        var maskingEdgeExtent = maskingEdge.getExtent(), unitMaskingEdgeExtent = (0, _vector).normalise3(maskingEdgeExtent), unitMaskingEdgeExtentComponents = unitMaskingEdgeExtent, firstUnitMaskingEdgeExtentComponent = (0, _array).first(unitMaskingEdgeExtentComponents), secondUnitMaskingEdgeExtentComponent = (0, _array).second(unitMaskingEdgeExtentComponents), angleOfRotationSine = firstUnitMaskingEdgeExtentComponent, angleOfRotationCosine = secondUnitMaskingEdgeExtentComponent, halfAngleOfRotationCosine = (0, _angle).calculateHalfAngleCosine(angleOfRotationCosine), halfAngleOfRotationSine = angleOfRotationSine > 0 ? +(0, _angle).calculateHalfAngleSine(angleOfRotationCosine) : -(0, _angle).calculateHalfAngleSine(angleOfRotationCosine), rotationAboutZAxisQuaternion = [
          halfAngleOfRotationCosine,
          0,
          0,
          halfAngleOfRotationSine
        ];
        return rotationAboutZAxisQuaternion;
      }
      function hamiltonProduct(quaternionA, quaternionB) {
        var a1 = quaternionA[0], b1 = quaternionA[1], c1 = quaternionA[2], d1 = quaternionA[3], a2 = quaternionB[0], b2 = quaternionB[1], c2 = quaternionB[2], d2 = quaternionB[3], a = a1 * a2 - b1 * b2 - c1 * c2 - d1 * d2, b = a1 * b2 + b1 * a2 + c1 * d2 - d1 * c2, c = a1 * c2 - b1 * d2 + c1 * a2 + d1 * b2, d = a1 * d2 + b1 * c2 - c1 * b2 + d1 * a2, quaternion = [
          a,
          b,
          c,
          d
        ];
        return quaternion;
      }
    }
  });

  // lib/utilities/rotation.js
  var require_rotation = __commonJS({
    "lib/utilities/rotation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rotatePosition = rotatePosition;
      var _quaternion = require_quaternion();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function rotatePosition(position, rotationQuaternion) {
        var imaginaryQuaternion = imaginaryQuaternionFromPosition(position), inverseRotationQuaternion = (0, _quaternion).calculateInverseRotationQuaternion(rotationQuaternion), rotatedImaginaryQuaternion = (0, _quaternion).rotateImaginaryQuaternion(imaginaryQuaternion, rotationQuaternion, inverseRotationQuaternion);
        position = positionFromImaginaryQuaternion(rotatedImaginaryQuaternion);
        return position;
      }
      function imaginaryQuaternionFromPosition(position) {
        return [
          0
        ].concat(_toConsumableArray(position));
      }
      function positionFromImaginaryQuaternion(imaginaryQuaternion) {
        return imaginaryQuaternion.slice(1);
      }
    }
  });

  // lib/utilities/intersection.js
  var require_intersection = __commonJS({
    "lib/utilities/intersection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateIntersection = calculateIntersection;
      exports.calculateNonNullIntersections = calculateNonNullIntersections;
      exports.calculateNullIntersectionIndex = calculateNullIntersectionIndex;
      exports.calculateNonNullIntersectionIndex = calculateNonNullIntersectionIndex;
      exports.calculateIntermediateVertexPosition = calculateIntermediateVertexPosition;
      var _array = require_array2();
      var _vector = require_vector();
      var _approximate = require_approximate();
      function calculateIntersection(edge, firstPositionComponent) {
        var intersection = null;
        var edgeNonParallel = isEdgeNonParallel(edge);
        if (edgeNonParallel) {
          var edgeIntersection = calculateEdgeIntersection(edge, firstPositionComponent), edgeIntersectionNonTrivial = edgeIntersection > 0 && edgeIntersection < 1;
          if (edgeIntersectionNonTrivial) {
            intersection = edgeIntersection;
          }
        }
        return intersection;
      }
      function calculateNonNullIntersections(intersections) {
        var nonNullIntersections1 = intersections.reduce(function(nonNullIntersections, intersection) {
          if (intersection !== null) {
            var nonNullIntersection = intersection;
            nonNullIntersections.push(nonNullIntersection);
          }
          return nonNullIntersections;
        }, []);
        return nonNullIntersections1;
      }
      function calculateNullIntersectionIndex(intersections) {
        var nullIntersectionIndex1 = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
          if (nullIntersectionIndex === null) {
            if (intersection === null) {
              nullIntersectionIndex = index;
            }
          }
          return nullIntersectionIndex;
        }, null);
        return nullIntersectionIndex1;
      }
      function calculateNonNullIntersectionIndex(intersections) {
        var nullIntersectionIndex2 = intersections.reduce(function(nullIntersectionIndex, intersection, index) {
          if (nullIntersectionIndex === null) {
            if (intersection !== null) {
              nullIntersectionIndex = index;
            }
          }
          return nullIntersectionIndex;
        }, null);
        return nullIntersectionIndex2;
      }
      function calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection) {
        var extent = (0, _vector).subtract3(endVertexPosition, startVertexPosition), offset = (0, _vector).scale3(extent, intersection), intermediateVertexPosition = (0, _vector).add3(startVertexPosition, offset);
        return intermediateVertexPosition;
      }
      function isEdgeNonParallel(edge) {
        var edgeExtent = edge.getExtent(), edgeExtentComponents = edgeExtent, firstEdgeExtentComponent = (0, _array).first(edgeExtentComponents), secondEdgeExtentComponent = (0, _array).second(edgeExtentComponents), edgeAngleTangent = firstEdgeExtentComponent / secondEdgeExtentComponent, edgeAngleTangentApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(edgeAngleTangent), edgeParallel = edgeAngleTangentApproximatelyEqualToZero, edgeNonParallel = !edgeParallel;
        return edgeNonParallel;
      }
      function calculateEdgeIntersection(edge, firstPositionComponent) {
        var edgeExtent = edge.getExtent(), edgePosition = edge.getPosition(), edgeExtentComponents = edgeExtent, edgePositionComponents = edgePosition, firstEdgeExtentComponent = (0, _array).first(edgeExtentComponents), firstEdgePositionComponent = (0, _array).first(edgePositionComponents), edgeIntersection = (firstPositionComponent - firstEdgePositionComponent) / firstEdgeExtentComponent;
        return edgeIntersection;
      }
    }
  });

  // lib/primitive/verticalLine.js
  var require_verticalLine = __commonJS({
    "lib/primitive/verticalLine.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _array = require_array2();
      var _rotation = require_rotation();
      var _intersection = require_intersection();
      var _quaternion = require_quaternion();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var VerticalLine = /* @__PURE__ */ function() {
        function VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _classCallCheck(this, VerticalLine2);
          this.firstPositionComponent = firstPositionComponent;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _createClass(VerticalLine2, [
          {
            key: "getFirstPositionComponent",
            value: function getFirstPositionComponent() {
              return this.firstPositionComponent;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, smallerFacets, marginOfError) {
              var _this = this;
              var edges = facet.getEdges(), intersections = edges.map(function(edge) {
                var intersection = (0, _intersection).calculateIntersection(edge, _this.firstPositionComponent);
                return intersection;
              });
              facet.splitWithIntersections(intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitFacets",
            value: function splitFacets(facets, marginOfError) {
              var _this = this;
              var smallerFacets = [];
              facets.forEach(function(facet) {
                facet.rotate(_this.forwardsRotationQuaternion);
                _this.splitFacet(facet, smallerFacets, marginOfError);
              });
              smallerFacets.forEach(function(smallerFacet) {
                return smallerFacet.rotate(_this.backwardsRotationQuaternion);
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromMaskingEdge",
            value: function fromMaskingEdge(maskingEdge) {
              var maskingEdgePosition = maskingEdge.getPosition(), rotationAboutZAxisQuaternion = (0, _quaternion).calculateRotationAboutZAxisQuaternion(maskingEdge), rotationQuaternion = rotationAboutZAxisQuaternion, forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), position = (0, _rotation).rotatePosition(maskingEdgePosition, rotationQuaternion), positionComponents = position, firstPositionComponent = (0, _array).first(positionComponents), verticalLine = new VerticalLine2(firstPositionComponent, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return verticalLine;
            }
          }
        ]);
        return VerticalLine2;
      }();
      exports.default = VerticalLine;
    }
  });

  // lib/utilities/vertices.js
  var require_vertices = __commonJS({
    "lib/utilities/vertices.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.rotateVertices = rotateVertices;
      exports.verticesFromCoordinateTuplesAndIndexTuple = verticesFromCoordinateTuplesAndIndexTuple;
      function rotateVertices(vertices, rotationQuaternion) {
        var rotatedVertices = vertices.map(function(vertex) {
          var rotatedVertex = vertex.clone();
          rotatedVertex.rotate(rotationQuaternion);
          return rotatedVertex;
        });
        return rotatedVertices;
      }
      function verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, Vertex) {
        var indexes = indexTuple, vertices = indexes.map(function(index) {
          var coordinateTuple = coordinateTuples[index], vertex = Vertex.fromCoordinateTuple(coordinateTuple);
          return vertex;
        });
        return vertices;
      }
    }
  });

  // lib/primitive/maskingFacet.js
  var require_maskingFacet = __commonJS({
    "lib/primitive/maskingFacet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _masking2 = _interopRequireDefault2(require_masking());
      var _verticalLine = _interopRequireDefault2(require_verticalLine());
      var _vertices = require_vertices();
      var _array = require_array2();
      var _constants = require_constants();
      var _quaternion = require_quaternion();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var MaskingFacet = /* @__PURE__ */ function() {
        function MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion) {
          _classCallCheck(this, MaskingFacet2);
          this.maskingEdges = maskingEdges;
          this.verticalLines = verticalLines;
          this.forwardsRotationQuaternion = forwardsRotationQuaternion;
          this.backwardsRotationQuaternion = backwardsRotationQuaternion;
        }
        _createClass(MaskingFacet2, [
          {
            key: "getMaskingEdges",
            value: function getMaskingEdges() {
              return this.maskingEdges;
            }
          },
          {
            key: "getVerticalLines",
            value: function getVerticalLines() {
              return this.verticalLines;
            }
          },
          {
            key: "getForwardsRotationQuaternion",
            value: function getForwardsRotationQuaternion() {
              return this.forwardsRotationQuaternion;
            }
          },
          {
            key: "getBackwardsRotationQuaternion",
            value: function getBackwardsRotationQuaternion() {
              return this.backwardsRotationQuaternion;
            }
          },
          {
            key: "maskFacet",
            value: function maskFacet(facet, unmaskedFacets, marginOfError) {
              var unmaskedFacet = facet.clone();
              facet.rotate(this.forwardsRotationQuaternion);
              var maskingFacet = this, smallerFacets = this.splitFacet(facet, marginOfError), maskedSmallerFacets = [], unmaskedSmallerFacets = [];
              (0, _array).separate(smallerFacets, maskedSmallerFacets, unmaskedSmallerFacets, function(smallerFacet) {
                var smallerFacetMasked = smallerFacet.isMasked(maskingFacet);
                return smallerFacetMasked;
              });
              var maskedSmallerFacetsLength = maskedSmallerFacets.length;
              if (maskedSmallerFacetsLength === 0) {
                unmaskedFacets.push(unmaskedFacet);
              } else {
                var _this = this;
                unmaskedSmallerFacets.forEach(function(unmaskedSmallerFacet) {
                  unmaskedSmallerFacet.rotate(_this.backwardsRotationQuaternion);
                });
                (0, _array).push(unmaskedFacets, unmaskedSmallerFacets);
              }
            }
          },
          {
            key: "splitFacet",
            value: function splitFacet(facet, marginOfError) {
              var facets = [
                facet
              ], smallerFacets = facets;
              this.verticalLines.forEach(function(verticalLine) {
                smallerFacets = verticalLine.splitFacets(facets, marginOfError);
                facets = smallerFacets;
              });
              return smallerFacets;
            }
          }
        ], [
          {
            key: "fromFacet",
            value: function fromFacet(facet) {
              var facetNormal = facet.getNormal(), facetVertices = facet.getVertices(), normal = facetNormal, arbitraryRotationQuaternion = (0, _quaternion).calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion, vertices = (0, _vertices).rotateVertices(facetVertices, rotationQuaternion), maskingEdges = calculateMaskingEdges(vertices), verticalLines = maskingEdges.map(function(maskingEdge) {
                var verticalLine = _verticalLine.default.fromMaskingEdge(maskingEdge);
                return verticalLine;
              }), forwardsRotationQuaternion = (0, _quaternion).calculateForwardsRotationQuaternion(rotationQuaternion), backwardsRotationQuaternion = (0, _quaternion).calculateBackwardsRotationQuaternion(rotationQuaternion), maskingFacet = new MaskingFacet2(maskingEdges, verticalLines, forwardsRotationQuaternion, backwardsRotationQuaternion);
              return maskingFacet;
            }
          }
        ]);
        return MaskingFacet2;
      }();
      exports.default = MaskingFacet;
      function calculateMaskingEdges(vertices) {
        var maskingEdges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], maskingEdge = _masking2.default.fromStartVertexAndEndVertex(startVertex, endVertex);
          return maskingEdge;
        });
        return maskingEdges;
      }
    }
  });

  // lib/maths/matrix.js
  var require_matrix = __commonJS({
    "lib/maths/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.identity2 = identity2;
      exports.identity3 = identity3;
      exports.identity4 = identity4;
      exports.multiply2 = multiply2;
      exports.multiply3 = multiply3;
      exports.multiply4 = multiply4;
      exports.invert2 = invert2;
      exports.invert3 = invert3;
      exports.invert4 = invert4;
      exports.transpose2 = transpose2;
      exports.transpose3 = transpose3;
      exports.transpose4 = transpose4;
      exports.scale4 = scale4;
      exports.rotate4 = rotate4;
      exports.translate4 = translate4;
      exports.perspective4 = perspective4;
      exports.default = void 0;
      function identity2() {
        return [
          1,
          0,
          0,
          1
        ];
      }
      function identity3() {
        return [
          1,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          1
        ];
      }
      function identity4() {
        return [
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1
        ];
      }
      function multiply2(matrixA, matrixB) {
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3];
        return [
          a0 * b0 + a2 * b1,
          a1 * b0 + a3 * b1,
          a0 * b2 + a2 * b3,
          a1 * b2 + a3 * b3
        ];
      }
      function multiply3(matrixA, matrixB) {
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], a4 = matrixA[4], a5 = matrixA[5], a6 = matrixA[6], a7 = matrixA[7], a8 = matrixA[8], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3], b4 = matrixB[4], b5 = matrixB[5], b6 = matrixB[6], b7 = matrixB[7], b8 = matrixB[8];
        return [
          a0 * b0 + a3 * b1 + a6 * b2,
          a1 * b0 + a4 * b1 + a7 * b2,
          a2 * b0 + a5 * b1 + a8 * b2,
          a0 * b3 + a3 * b4 + a6 * b5,
          a1 * b3 + a4 * b4 + a7 * b5,
          a2 * b3 + a5 * b4 + a8 * b5,
          a0 * b6 + a3 * b7 + a6 * b8,
          a1 * b6 + a4 * b7 + a7 * b8,
          a2 * b6 + a5 * b7 + a8 * b8
        ];
      }
      function multiply4(matrixA, matrixB) {
        var a0 = matrixA[0], a1 = matrixA[1], a2 = matrixA[2], a3 = matrixA[3], a4 = matrixA[4], a5 = matrixA[5], a6 = matrixA[6], a7 = matrixA[7], a8 = matrixA[8], a9 = matrixA[9], a10 = matrixA[10], a11 = matrixA[11], a12 = matrixA[12], a13 = matrixA[13], a14 = matrixA[14], a15 = matrixA[15], b0 = matrixB[0], b1 = matrixB[1], b2 = matrixB[2], b3 = matrixB[3], b4 = matrixB[4], b5 = matrixB[5], b6 = matrixB[6], b7 = matrixB[7], b8 = matrixB[8], b9 = matrixB[9], b10 = matrixB[10], b11 = matrixB[11], b12 = matrixB[12], b13 = matrixB[13], b14 = matrixB[14], b15 = matrixB[15];
        return [
          a0 * b0 + a4 * b1 + a8 * b2 + a12 * b3,
          a1 * b0 + a5 * b1 + a9 * b2 + a13 * b3,
          a2 * b0 + a6 * b1 + a10 * b2 + a14 * b3,
          a3 * b0 + a7 * b1 + a11 * b2 + a15 * b3,
          a0 * b4 + a4 * b5 + a8 * b6 + a12 * b7,
          a1 * b4 + a5 * b5 + a9 * b6 + a13 * b7,
          a2 * b4 + a6 * b5 + a10 * b6 + a14 * b7,
          a3 * b4 + a7 * b5 + a11 * b6 + a15 * b7,
          a0 * b8 + a4 * b9 + a8 * b10 + a12 * b11,
          a1 * b8 + a5 * b9 + a9 * b10 + a13 * b11,
          a2 * b8 + a6 * b9 + a10 * b10 + a14 * b11,
          a3 * b8 + a7 * b9 + a11 * b10 + a15 * b11,
          a0 * b12 + a4 * b13 + a8 * b14 + a12 * b15,
          a1 * b12 + a5 * b13 + a9 * b14 + a13 * b15,
          a2 * b12 + a6 * b13 + a10 * b14 + a14 * b15,
          a3 * b12 + a7 * b13 + a11 * b14 + a15 * b15
        ];
      }
      function invert2(matrix) {
        var m0 = matrix[0], m1 = matrix[1], m2 = matrix[2], m3 = matrix[3], determinant = m0 * m3 - m2 * m1;
        if (determinant !== 0) {
          return [
            +m3 / determinant,
            -m1 / determinant,
            -m2 / determinant,
            +m0 / determinant
          ];
        }
      }
      function invert3(matrix) {
        var m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m10 = matrix[3], m11 = matrix[4], m12 = matrix[5], m20 = matrix[6], m21 = matrix[7], m22 = matrix[8], b01 = m22 * m11 - m12 * m21, b11 = -m22 * m10 + m12 * m20, b21 = m21 * m10 - m11 * m20, determinant = m00 * b01 + m01 * b11 + m02 * b21;
        if (determinant !== 0) {
          return [
            b01 / determinant,
            (-m22 * m01 + m02 * m21) / determinant,
            (m12 * m01 - m02 * m11) / determinant,
            b11 / determinant,
            (m22 * m00 - m02 * m20) / determinant,
            (-m12 * m00 + m02 * m10) / determinant,
            b21 / determinant,
            (-m21 * m00 + m01 * m20) / determinant,
            (m11 * m00 - m01 * m10) / determinant
          ];
        }
      }
      function invert4(matrix) {
        var m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11], m30 = matrix[12], m31 = matrix[13], m32 = matrix[14], m33 = matrix[15], b00 = m00 * m11 - m01 * m10, b01 = m00 * m12 - m02 * m10, b02 = m00 * m13 - m03 * m10, b03 = m01 * m12 - m02 * m11, b04 = m01 * m13 - m03 * m11, b05 = m02 * m13 - m03 * m12, b06 = m20 * m31 - m21 * m30, b07 = m20 * m32 - m22 * m30, b08 = m20 * m33 - m23 * m30, b09 = m21 * m32 - m22 * m31, b10 = m21 * m33 - m23 * m31, b11 = m22 * m33 - m23 * m32, determinant = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (determinant !== 0) {
          return [
            (m11 * b11 - m12 * b10 + m13 * b09) / determinant,
            (m02 * b10 - m01 * b11 - m03 * b09) / determinant,
            (m31 * b05 - m32 * b04 + m33 * b03) / determinant,
            (m22 * b04 - m21 * b05 - m23 * b03) / determinant,
            (m12 * b08 - m10 * b11 - m13 * b07) / determinant,
            (m00 * b11 - m02 * b08 + m03 * b07) / determinant,
            (m32 * b02 - m30 * b05 - m33 * b01) / determinant,
            (m20 * b05 - m22 * b02 + m23 * b01) / determinant,
            (m10 * b10 - m11 * b08 + m13 * b06) / determinant,
            (m01 * b08 - m00 * b10 - m03 * b06) / determinant,
            (m30 * b04 - m31 * b02 + m33 * b00) / determinant,
            (m21 * b02 - m20 * b04 - m23 * b00) / determinant,
            (m11 * b07 - m10 * b09 - m12 * b06) / determinant,
            (m00 * b09 - m01 * b07 + m02 * b06) / determinant,
            (m31 * b01 - m30 * b03 - m32 * b00) / determinant,
            (m20 * b03 - m21 * b01 + m22 * b00) / determinant
          ];
        }
      }
      function transpose2(matrix) {
        return [
          matrix[0],
          matrix[2],
          matrix[1],
          matrix[3]
        ];
      }
      function transpose3(matrix) {
        return [
          matrix[0],
          matrix[3],
          matrix[6],
          matrix[1],
          matrix[4],
          matrix[7],
          matrix[2],
          matrix[5],
          matrix[8]
        ];
      }
      function transpose4(matrix) {
        return [
          matrix[0],
          matrix[4],
          matrix[8],
          matrix[12],
          matrix[1],
          matrix[5],
          matrix[9],
          matrix[13],
          matrix[2],
          matrix[6],
          matrix[10],
          matrix[14],
          matrix[3],
          matrix[7],
          matrix[11],
          matrix[15]
        ];
      }
      function scale4(matrix, vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        return [
          matrix[0] * x,
          matrix[1] * x,
          matrix[2] * x,
          matrix[3] * x,
          matrix[4] * y,
          matrix[5] * y,
          matrix[6] * y,
          matrix[7] * y,
          matrix[8] * z,
          matrix[9] * z,
          matrix[10] * z,
          matrix[11] * z,
          matrix[12] * 1,
          matrix[13] * 1,
          matrix[14] * 1,
          matrix[15] * 1
        ];
      }
      function rotate4(matrix, angle, vector) {
        var x = vector[0], y = vector[1], z = vector[2];
        var length = Math.sqrt(x * x + y * y + z * z);
        if (length !== 0) {
          x /= length;
          y /= length;
          z /= length;
          var s = Math.sin(angle), c = Math.cos(angle), t = 1 - c, m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11], b00 = x * x * t + c, b01 = y * x * t + z * s, b02 = z * x * t - y * s, b10 = x * y * t - z * s, b11 = y * y * t + c, b12 = z * y * t + x * s, b20 = x * z * t + y * s, b21 = y * z * t - x * s, b22 = z * z * t + c;
          return [
            m00 * b00 + m10 * b01 + m20 * b02,
            m01 * b00 + m11 * b01 + m21 * b02,
            m02 * b00 + m12 * b01 + m22 * b02,
            m03 * b00 + m13 * b01 + m23 * b02,
            m00 * b10 + m10 * b11 + m20 * b12,
            m01 * b10 + m11 * b11 + m21 * b12,
            m02 * b10 + m12 * b11 + m22 * b12,
            m03 * b10 + m13 * b11 + m23 * b12,
            m00 * b20 + m10 * b21 + m20 * b22,
            m01 * b20 + m11 * b21 + m21 * b22,
            m02 * b20 + m12 * b21 + m22 * b22,
            m03 * b20 + m13 * b21 + m23 * b22,
            matrix[12],
            matrix[13],
            matrix[14],
            matrix[15]
          ];
        }
      }
      function translate4(matrix, vector) {
        var x = vector[0], y = vector[1], z = vector[2], m00 = matrix[0], m01 = matrix[1], m02 = matrix[2], m03 = matrix[3], m10 = matrix[4], m11 = matrix[5], m12 = matrix[6], m13 = matrix[7], m20 = matrix[8], m21 = matrix[9], m22 = matrix[10], m23 = matrix[11];
        return [
          m00,
          m01,
          m02,
          m03,
          m10,
          m11,
          m12,
          m13,
          m20,
          m21,
          m22,
          m23,
          m00 * x + m10 * y + m20 * z + matrix[12],
          m01 * x + m11 * y + m21 * z + matrix[13],
          m02 * x + m12 * y + m22 * z + matrix[14],
          m03 * x + m13 * y + m23 * z + matrix[15]
        ];
      }
      function perspective4(fieldOfView, aspectRatio, zNear, zFar) {
        var f = 1 / Math.tan(fieldOfView / 2), nf = 1 / (zNear - zFar);
        return [
          f / aspectRatio,
          0,
          0,
          0,
          0,
          f,
          0,
          0,
          0,
          0,
          (zFar + zNear) * nf,
          -1,
          0,
          0,
          2 * zFar * zNear * nf,
          0
        ];
      }
      var _default = {
        identity2,
        identity3,
        identity4,
        multiply2,
        multiply3,
        multiply4,
        invert2,
        invert3,
        invert4,
        transpose2,
        transpose3,
        transpose4,
        scale4,
        rotate4,
        translate4,
        perspective4
      };
      exports.default = _default;
    }
  });

  // lib/utilities/matrix.js
  var require_matrix2 = __commonJS({
    "lib/utilities/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.scaleMatrixFromScale = scaleMatrixFromScale;
      exports.offsetsMatrixFromOffsets = offsetsMatrixFromOffsets;
      exports.positionMatrixFromNothing = positionMatrixFromNothing;
      exports.positionMatrixFromDistance = positionMatrixFromDistance;
      exports.positionMatrixFromPosition = positionMatrixFromPosition;
      exports.rotationsMatrixFromAngles = rotationsMatrixFromAngles;
      exports.rotationsMatrixFromRotations = rotationsMatrixFromRotations;
      exports.normalsMatrixFromRotationsMatrix = normalsMatrixFromRotationsMatrix;
      exports.projectionMatrixFromCameraAndCanvas = projectionMatrixFromCameraAndCanvas;
      var _vector = require_vector();
      var _array = require_array2();
      var _constants = require_constants();
      var _matrix = require_matrix();
      function scaleMatrixFromScale(scale) {
        var scaleMatrix = (0, _matrix).identity4();
        scaleMatrix = (0, _matrix).scale4(scaleMatrix, scale);
        return scaleMatrix;
      }
      function offsetsMatrixFromOffsets(offsets) {
        var offsetsMatrix = (0, _matrix).identity4();
        offsetsMatrix = (0, _matrix).translate4(offsetsMatrix, offsets);
        return offsetsMatrix;
      }
      function positionMatrixFromNothing() {
        var positionMatrix = (0, _matrix).identity4();
        return positionMatrix;
      }
      function positionMatrixFromDistance(distance) {
        var positionMatrix = (0, _matrix).identity4();
        var x = 0, y = 0, z = -distance;
        positionMatrix = (0, _matrix).translate4(positionMatrix, [
          x,
          y,
          z
        ]);
        return positionMatrix;
      }
      function positionMatrixFromPosition(position) {
        var positionMatrix = (0, _matrix).identity4();
        positionMatrix = (0, _matrix).translate4(positionMatrix, position);
        return positionMatrix;
      }
      function rotationsMatrixFromAngles(angles) {
        var reverseOrder = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var rotationsMatrix = (0, _matrix).identity4();
        var firstAngle = (0, _array).first(angles), secondAngle = (0, _array).second(angles), thirdAngle = (0, _array).third(angles), xAngle = firstAngle, yAngle = secondAngle, zAngle = thirdAngle, xAxis = [
          1,
          0,
          0
        ], yAxis = [
          0,
          1,
          0
        ], zAxis = [
          0,
          0,
          1
        ];
        if (reverseOrder) {
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, zAngle, zAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, xAngle, xAxis);
        } else {
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, xAngle, xAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, yAngle, yAxis);
          rotationsMatrix = (0, _matrix).rotate4(rotationsMatrix, zAngle, zAxis);
        }
        return rotationsMatrix;
      }
      function rotationsMatrixFromRotations(rotations) {
        var scalar = _constants.DEGREES_TO_RADIANS_MULTIPLIER, angles = (0, _vector).scale3(rotations, scalar), rotationsMatrix = rotationsMatrixFromAngles(angles);
        return rotationsMatrix;
      }
      function normalsMatrixFromRotationsMatrix(rotationsMatrix) {
        var normalsMatrix = (0, _matrix).invert4(rotationsMatrix);
        normalsMatrix = (0, _matrix).transpose4(normalsMatrix);
        return normalsMatrix;
      }
      function projectionMatrixFromCameraAndCanvas(camera, canvas) {
        var zFar = camera.getZFar(), zNear = camera.getZNear(), width = canvas.getWidth(), height = canvas.getHeight(), fieldOfView = camera.getFieldOfView(), aspectRatio = width / height, projectionMatrix = (0, _matrix).perspective4(fieldOfView, aspectRatio, zNear, zFar);
        return projectionMatrix;
      }
    }
  });

  // lib/utilities/transform.js
  var require_transform = __commonJS({
    "lib/utilities/transform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.composeTransform = composeTransform;
      var _matrix = require_matrix();
      var _vector = require_vector();
      var _matrix1 = require_matrix2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function composeTransform(scale, position, rotations) {
        var matrix = null;
        if (scale !== null) {
          var scaleMatrix = (0, _matrix1).scaleMatrixFromScale(scale);
          matrix = matrix === null ? scaleMatrix : (0, _matrix).multiply4(scaleMatrix, matrix);
        }
        if (rotations !== null) {
          var rotationsMatrix = (0, _matrix1).rotationsMatrixFromRotations(rotations);
          matrix = matrix === null ? rotationsMatrix : (0, _matrix).multiply4(rotationsMatrix, matrix);
        }
        if (position !== null) {
          var positionMatrix = (0, _matrix1).positionMatrixFromPosition(position);
          matrix = matrix === null ? positionMatrix : (0, _matrix).multiply4(positionMatrix, matrix);
        }
        var transform = matrix === null ? function(vector) {
          return vector;
        } : function(vector) {
          return (0, _vector).transform4(_toConsumableArray(vector).concat([
            1
          ]), matrix).slice(0, 3);
        };
        return transform;
      }
    }
  });

  // lib/element/mask.js
  var require_mask = __commonJS({
    "lib/element/mask.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _maskingFacet = _interopRequireDefault2(require_maskingFacet());
      var _array = require_array2();
      var _transform = require_transform();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var Mask = /* @__PURE__ */ function(Element) {
        _inherits(Mask2, Element);
        var _super = _createSuper(Mask2);
        function Mask2(reference, transform) {
          _classCallCheck(this, Mask2);
          var _this;
          _this = _super.call(this);
          _this.reference = reference;
          _this.transform = transform;
          return _this;
        }
        _createClass(Mask2, [
          {
            key: "getReference",
            value: function getReference() {
              return this.reference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "retrieveMaskingFacets",
            value: function retrieveMaskingFacets() {
              var childElements = this.getChildElements(), facets = retrieveFacets(childElements), maskingFacets = facets.map(function(facet) {
                var maskingFacet = _maskingFacet.default.fromFacet(facet);
                return maskingFacet;
              });
              return maskingFacets;
            }
          },
          {
            key: "maskElement",
            value: function maskElement1(element, marginOfError) {
              var maskingFacets = this.retrieveMaskingFacets(), childElements = element.getChildElements();
              maskElement(element, maskingFacets, marginOfError);
              childElements.forEach(function(childElement) {
                return maskElement(childElement, maskingFacets, marginOfError);
              });
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var reference = properties.reference, _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _position = properties.position, position = _position === void 0 ? null : _position, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, transform = (0, _transform).composeTransform(scale, position, rotations), mask = _element.default.fromProperties(Mask2, properties, reference, transform);
              return mask;
            }
          }
        ]);
        return Mask2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Mask;
      function retrieveFacets(childElements1) {
        var facets = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        childElements1.forEach(function(childElement) {
          var element = childElement, elementFacets = element.getFacets(), childElements = element.getChildElements();
          (0, _array).push(facets, elementFacets);
          retrieveFacets(childElements, facets);
        });
        return facets;
      }
      function maskElement(element1, maskingFacets, marginOfError) {
        var facets = element1.getFacets();
        maskingFacets.forEach(function(maskingFacet) {
          var unmaskedFacets = [];
          facets.forEach(function(facet) {
            return maskingFacet.maskFacet(facet, unmaskedFacets, marginOfError);
          });
          facets = unmaskedFacets;
        });
        element1.setFacets(facets);
        var childElements = element1.getChildElements();
        childElements.forEach(function(childElement) {
          var element = childElement;
          maskElement(element, maskingFacets, marginOfError);
        });
      }
    }
  });

  // lib/utilities/element.js
  var require_element2 = __commonJS({
    "lib/utilities/element.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.elementsFromChildElements = elementsFromChildElements;
      exports.elementFromChildElements = elementFromChildElements;
      function _instanceof(left, right) {
        if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
          return right[Symbol.hasInstance](left);
        } else {
          return left instanceof right;
        }
      }
      function elementsFromChildElements(childElements, Class) {
        var elements1 = childElements.reduce(function(elements, childElement) {
          if (_instanceof(childElement, Class)) {
            var element = childElement;
            elements.push(element);
          }
          return elements;
        }, []);
        return elements1;
      }
      function elementFromChildElements(childElements, Class) {
        var element1 = childElements.reduce(function(element, childElement) {
          if (element === null) {
            if (_instanceof(childElement, Class)) {
              element = childElement;
            }
          }
          return element;
        }, null);
        return element1;
      }
    }
  });

  // lib/element/canvas.js
  var require_canvas = __commonJS({
    "lib/element/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _mask = _interopRequireDefault2(require_mask());
      var _transform = require_transform();
      var _element1 = require_element2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var CanvasElement = /* @__PURE__ */ function(Element) {
        _inherits(CanvasElement2, Element);
        var _super = _createSuper(CanvasElement2);
        function CanvasElement2(maskReference, transform, facets, masks) {
          _classCallCheck(this, CanvasElement2);
          var _this;
          _this = _super.call(this);
          _this.maskReference = maskReference;
          _this.transform = transform;
          _this.facets = facets;
          _this.masks = masks;
          return _this;
        }
        _createClass(CanvasElement2, [
          {
            key: "getMaskReference",
            value: function getMaskReference() {
              return this.maskReference;
            }
          },
          {
            key: "getTransform",
            value: function getTransform() {
              return this.transform;
            }
          },
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getMasks",
            value: function getMasks() {
              return this.masks;
            }
          },
          {
            key: "setFacets",
            value: function setFacets(facets) {
              this.facets = facets;
            }
          },
          {
            key: "applyMask",
            value: function applyMask(masks, marginOfError) {
              if (this.maskReference !== null) {
                var _this = this;
                var mask1 = masks.find(function(mask) {
                  var reference = mask.getReference();
                  if (reference === _this.maskReference) {
                    return true;
                  }
                }) || null;
                if (mask1 !== null) {
                  var element = this;
                  mask1.maskElement(element, marginOfError);
                }
              }
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              var childElements = this.getChildElements();
              this.facets.forEach(function(facet) {
                return facet.applyTransform(transform);
              });
              childElements.forEach(function(childElement) {
                return childElement.applyTransform(transform);
              });
            }
          },
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.createFacets(marginOfError);
              });
            }
          },
          {
            key: "maskFacets",
            value: function maskFacets(masks, marginOfError) {
              masks = _toConsumableArray(masks).concat(_toConsumableArray(this.masks));
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.maskFacets(masks, marginOfError);
              });
              this.applyTransform(this.transform);
              this.applyMask(masks, marginOfError);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var childElements = this.getChildElements();
              childElements.forEach(function(childElement) {
                return childElement.addFacets(colourRenderer, textureRenderer);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var childElements = properties.childElements, _scale = properties.scale, scale = _scale === void 0 ? null : _scale, _position = properties.position, position = _position === void 0 ? null : _position, _rotations = properties.rotations, rotations = _rotations === void 0 ? null : _rotations, _maskReference = properties.maskReference, maskReference = _maskReference === void 0 ? null : _maskReference, transform = (0, _transform).composeTransform(scale, position, rotations), facets = [], masks = (0, _element1).elementsFromChildElements(childElements, _mask.default), canvasElement = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                maskReference,
                transform,
                facets,
                masks
              ].concat(_toConsumableArray(remainingArguments)));
              return canvasElement;
            }
          }
        ]);
        return CanvasElement2;
      }(_wrapNativeSuper(_element.default));
      exports.default = CanvasElement;
    }
  });

  // lib/element/canvas/function.js
  var require_function = __commonJS({
    "lib/element/canvas/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var FunctionCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(FunctionCanvasElement2, CanvasElement);
        var _super = _createSuper(FunctionCanvasElement2);
        function FunctionCanvasElement2() {
          _classCallCheck(this, FunctionCanvasElement2);
          return _super.apply(this, arguments);
        }
        _createClass(FunctionCanvasElement2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var functionElement = _canvas.default.fromProperties(FunctionCanvasElement2, properties);
              return functionElement;
            }
          }
        ]);
        return FunctionCanvasElement2;
      }(_canvas.default);
      exports.default = FunctionCanvasElement;
    }
  });

  // lib/utilities/elements.js
  var require_elements = __commonJS({
    "lib/utilities/elements.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.removeFalseyElements = removeFalseyElements;
      function removeFalseyElements(elements1) {
        elements1 = elements1.reduce(function(elements, element) {
          if (element) {
            elements.push(element);
          }
          return elements;
        }, []);
        return elements1;
      }
    }
  });

  // lib/react.js
  var require_react = __commonJS({
    "lib/react.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _function = _interopRequireDefault2(require_function());
      var _constants = require_constants();
      var _array = require_array2();
      var _elements = require_elements();
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function createElement(firstArgument, properties) {
        for (var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          childElements[_key - 2] = arguments[_key];
        }
        properties = properties || {};
        childElements = sanitiseChildElements(childElements);
        var element = void 0;
        if (isSubclassOf(firstArgument, _element.default)) {
          var Class = firstArgument;
          Object.assign(properties, {
            childElements
          });
          element = Class.fromProperties(properties);
        } else if ((typeof firstArgument === "undefined" ? "undefined" : _typeof(firstArgument)) === _constants.FUNCTION) {
          var func = firstArgument, childElements1 = (0, _array).guarantee(func(properties));
          Object.assign(properties, {
            childElements: childElements1
          });
          element = _function.default.fromProperties(properties);
        }
        return element;
      }
      var React2 = {
        createElement
      };
      var _default = React2;
      exports.default = _default;
      function isSubclassOf(argument, Class) {
        var typeOf = false;
        if (argument.name === Class.name) {
          typeOf = true;
        } else {
          argument = Object.getPrototypeOf(argument);
          if (argument) {
            typeOf = isSubclassOf(argument, Class);
          }
        }
        return typeOf;
      }
      function sanitiseChildElements(childElements) {
        childElements = (0, _array).flatten(childElements);
        childElements = (0, _elements).removeFalseyElements(childElements);
        return childElements;
      }
    }
  });

  // lib/mixins/depth.js
  var require_depth = __commonJS({
    "lib/mixins/depth.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _defaults = require_defaults();
      function clearDepth() {
        var depth = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_DEPTH;
        this.context.clearDepth(depth);
      }
      function clearDepthBuffer() {
        var DEPTH_BUFFER_BIT = this.context.DEPTH_BUFFER_BIT, mask = DEPTH_BUFFER_BIT;
        this.context.clear(mask);
      }
      function enableDepthTesting() {
        var _context = this.context, DEPTH_TEST = _context.DEPTH_TEST, LEQUAL = _context.LEQUAL, capacity = DEPTH_TEST, depthComparisonFunction = LEQUAL;
        this.context.enable(capacity);
        this.context.depthFunc(depthComparisonFunction);
      }
      var depthMixins = {
        clearDepth,
        clearDepthBuffer,
        enableDepthTesting
      };
      var _default = depthMixins;
      exports.default = _default;
    }
  });

  // lib/errors.js
  var require_errors = __commonJS({
    "lib/errors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.WEB_GL_CONTEXT_ERROR = exports.SHADER_ERROR = void 0;
      var SHADER_ERROR = "Unable to create the shader.";
      exports.SHADER_ERROR = SHADER_ERROR;
      var WEB_GL_CONTEXT_ERROR = "Unable to get the WebGL context.";
      exports.WEB_GL_CONTEXT_ERROR = WEB_GL_CONTEXT_ERROR;
    }
  });

  // lib/mixins/shader.js
  var require_shader = __commonJS({
    "lib/mixins/shader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _errors = require_errors();
      function createShader(type, shaderSource) {
        var COMPILE_STATUS = this.context.COMPILE_STATUS, pname = COMPILE_STATUS, shader = this.context.createShader(type);
        this.context.shaderSource(shader, shaderSource);
        this.context.compileShader(shader);
        var compileStatus = this.context.getShaderParameter(shader, pname);
        if (!compileStatus) {
          throw new Error(_errors.SHADER_ERROR);
        }
        return shader;
      }
      function createVertexShader(vertexShaderSource, canvas) {
        var VERTEX_SHADER = this.context.VERTEX_SHADER, type = VERTEX_SHADER, vertexShader = this.createShader(type, vertexShaderSource);
        return vertexShader;
      }
      function createFragmentShader(fragmentShaderSource, canvas) {
        var FRAGMENT_SHADER = this.context.FRAGMENT_SHADER, type = FRAGMENT_SHADER, fragmentShader = this.createShader(type, fragmentShaderSource);
        return fragmentShader;
      }
      var shaderMixins = {
        createShader,
        createVertexShader,
        createFragmentShader
      };
      var _default = shaderMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/buffer.js
  var require_buffer = __commonJS({
    "lib/mixins/buffer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function createElementBuffer(data) {
        var _context = this.context, ELEMENT_ARRAY_BUFFER = _context.ELEMENT_ARRAY_BUFFER, STATIC_DRAW = _context.STATIC_DRAW, target = ELEMENT_ARRAY_BUFFER, usage = STATIC_DRAW, uint16Array = new Uint16Array(data), elementBuffer = this.context.createBuffer();
        this.context.bindBuffer(target, elementBuffer);
        this.context.bufferData(target, uint16Array, usage);
        return elementBuffer;
      }
      function bindElementBuffer(elementBuffer) {
        var ELEMENT_ARRAY_BUFFER = this.context.ELEMENT_ARRAY_BUFFER, target = ELEMENT_ARRAY_BUFFER;
        this.context.bindBuffer(target, elementBuffer);
      }
      function createBuffer(data) {
        var _context = this.context, ARRAY_BUFFER = _context.ARRAY_BUFFER, STATIC_DRAW = _context.STATIC_DRAW, target = ARRAY_BUFFER, usage = STATIC_DRAW, buffer = this.context.createBuffer(), float32Array = new Float32Array(data);
        this.context.bindBuffer(target, buffer);
        this.context.bufferData(target, float32Array, usage);
        return buffer;
      }
      function bindBuffer(buffer, attributeLocation, components) {
        var _context = this.context, ARRAY_BUFFER = _context.ARRAY_BUFFER, FLOAT = _context.FLOAT, target = ARRAY_BUFFER, type = FLOAT, normalize = false, stride = 0, offset = 0;
        this.context.bindBuffer(target, buffer);
        this.context.vertexAttribPointer(attributeLocation, components, type, normalize, stride, offset);
        this.context.enableVertexAttribArray(attributeLocation);
      }
      var bufferMixins = {
        createElementBuffer,
        bindElementBuffer,
        createBuffer,
        bindBuffer
      };
      var _default = bufferMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/colour.js
  var require_colour = __commonJS({
    "lib/mixins/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _defaults = require_defaults();
      function clearColour() {
        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_R, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_G, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_B, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_A;
        this.context.clearColor(r, g, b, a);
      }
      function clearColourBuffer() {
        var COLOR_BUFFER_BIT = this.context.COLOR_BUFFER_BIT, mask = COLOR_BUFFER_BIT;
        this.context.clear(mask);
      }
      var colourMixins = {
        clearColour,
        clearColourBuffer
      };
      var _default = colourMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/matrix.js
  var require_matrix3 = __commonJS({
    "lib/mixins/matrix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function applyMatrix(uniformLocation, matrix) {
        var transpose = false;
        this.context.uniformMatrix4fv(uniformLocation, transpose, matrix);
      }
      var matrixMixins = {
        applyMatrix
      };
      var _default = matrixMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/texture.js
  var require_texture = __commonJS({
    "lib/mixins/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      function createTexture(image, index, repeat) {
        var _context = this.context, RGBA = _context.RGBA, LINEAR = _context.LINEAR, UNSIGNED_BYTE = _context.UNSIGNED_BYTE, TEXTURE0 = _context.TEXTURE0, TEXTURE_2D = _context.TEXTURE_2D, TEXTURE_WRAP_S = _context.TEXTURE_WRAP_S, TEXTURE_WRAP_T = _context.TEXTURE_WRAP_T, UNPACK_FLIP_Y_WEBGL = _context.UNPACK_FLIP_Y_WEBGL, CLAMP_TO_EDGE = _context.CLAMP_TO_EDGE, NEAREST = _context.NEAREST, REPEAT = _context.REPEAT, TEXTURE_MIN_FILTER = _context.TEXTURE_MIN_FILTER, target = TEXTURE0 + index, level = 0, internalFormat = RGBA, format = RGBA, type = UNSIGNED_BYTE, texture = this.context.createTexture();
        this.context.activeTexture(target);
        this.context.bindTexture(TEXTURE_2D, texture);
        this.context.pixelStorei(UNPACK_FLIP_Y_WEBGL, true);
        this.context.texImage2D(TEXTURE_2D, level, internalFormat, format, type, image);
        if (repeat) {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, REPEAT);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, REPEAT);
        } else {
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
          this.context.texParameteri(TEXTURE_2D, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
        }
        this.context.texParameteri(TEXTURE_2D, TEXTURE_MIN_FILTER, LINEAR);
        return texture;
      }
      function enableAnisotropicFiltering() {
        var extension = this.context.getExtension(_constants.EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.MOZ_EXT_TEXTURE_FILTER_ANISOTROPIC) || this.context.getExtension(_constants.WEBKIT_EXT_TEXTURE_FILTER_ANISOTROPIC);
        if (extension) {
          var TEXTURE_2D = this.context.TEXTURE_2D, MAX_TEXTURE_MAX_ANISOTROPY_EXT = extension.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY_EXT = extension.TEXTURE_MAX_ANISOTROPY_EXT, maximum = this.context.getParameter(MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          this.context.texParameterf(TEXTURE_2D, TEXTURE_MAX_ANISOTROPY_EXT, maximum);
        }
      }
      var textureMixins = {
        createTexture,
        enableAnisotropicFiltering
      };
      var _default = textureMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/program.js
  var require_program = __commonJS({
    "lib/mixins/program.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function createProgram(vertexShader, fragmentShader) {
        var program = this.context.createProgram();
        this.context.attachShader(program, vertexShader);
        this.context.attachShader(program, fragmentShader);
        this.context.linkProgram(program);
        return program;
      }
      function useProgram(program) {
        this.context.useProgram(program);
      }
      var programMixins = {
        createProgram,
        useProgram
      };
      var _default = programMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/blending.js
  var require_blending = __commonJS({
    "lib/mixins/blending.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function enableBlending() {
        var _context = this.context, BLEND = _context.BLEND, SRC_ALPHA = _context.SRC_ALPHA, ONE = _context.ONE, capacity = BLEND, sourceFactor = SRC_ALPHA, destinationFactor = ONE;
        this.context.enable(capacity);
        this.context.blendFunc(sourceFactor, destinationFactor);
      }
      var blendingMixins = {
        enableBlending
      };
      var _default = blendingMixins;
      exports.default = _default;
    }
  });

  // lib/mixins/location.js
  var require_location = __commonJS({
    "lib/mixins/location.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function getUniformLocation(program, name) {
        return this.context.getUniformLocation(program, name);
      }
      function getAttributeLocation(program, name) {
        return this.context.getAttribLocation(program, name);
      }
      function setUniformLocationIntegerValue(uniformLocation, integerValue) {
        this.context.uniform1i(uniformLocation, integerValue);
      }
      var locationMixins = {
        getUniformLocation,
        getAttributeLocation,
        setUniformLocationIntegerValue
      };
      var _default = locationMixins;
      exports.default = _default;
    }
  });

  // lib/canvas.js
  var require_canvas2 = __commonJS({
    "lib/canvas.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _depth = _interopRequireDefault2(require_depth());
      var _shader = _interopRequireDefault2(require_shader());
      var _buffer = _interopRequireDefault2(require_buffer());
      var _colour = _interopRequireDefault2(require_colour());
      var _matrix = _interopRequireDefault2(require_matrix3());
      var _texture = _interopRequireDefault2(require_texture());
      var _program = _interopRequireDefault2(require_program());
      var _blending = _interopRequireDefault2(require_blending());
      var _location = _interopRequireDefault2(require_location());
      var _errors = require_errors();
      var _constants = require_constants();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Canvas = /* @__PURE__ */ function() {
        function Canvas2() {
          var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _constants.CANVAS;
          _classCallCheck(this, Canvas2);
          var domElement = domElementFromSelector(selector), context = contextFromDOMElement(domElement);
          this.domElement = domElement;
          this.context = context;
          this.enableDepthTesting();
        }
        _createClass(Canvas2, [
          {
            key: "getDOMElement",
            value: function getDOMElement() {
              return this.domElement;
            }
          },
          {
            key: "getContext",
            value: function getContext() {
              return this.context;
            }
          },
          {
            key: "getWidth",
            value: function getWidth() {
              return this.domElement.width;
            }
          },
          {
            key: "getHeight",
            value: function getHeight() {
              return this.domElement.height;
            }
          },
          {
            key: "getClientWidth",
            value: function getClientWidth() {
              return this.domElement.clientWidth;
            }
          },
          {
            key: "getClientHeight",
            value: function getClientHeight() {
              return this.domElement.clientHeight;
            }
          },
          {
            key: "setWidth",
            value: function setWidth(width) {
              this.domElement.setAttribute(_constants.WIDTH, width);
            }
          },
          {
            key: "setHeight",
            value: function setHeight(height) {
              this.domElement.setAttribute(_constants.HEIGHT, height);
            }
          },
          {
            key: "resize",
            value: function resize(width, height) {
              var x = 0, y = 0;
              this.setWidth(width);
              this.setHeight(height);
              this.context.viewport(x, y, width, height);
            }
          },
          {
            key: "clear",
            value: function clear() {
              this.clearDepth();
              this.clearColour();
              this.clearDepthBuffer();
              this.clearColourBuffer();
            }
          },
          {
            key: "render",
            value: function render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var offsetsMatrixUniformLocation = renderer.getOffsetsMatrixUniformLocation(), normalsMatrixUniformLocation = renderer.getNormalsMatrixUniformLocation(), positionMatrixUniformLocation = renderer.getPositionMatrixUniformLocation(), rotationsMatrixUniformLocation = renderer.getRotationsMatrixUniformLocation(), projectionMatrixUniformLocation = renderer.getProjectionMatrixUniformLocation();
              this.applyMatrix(offsetsMatrixUniformLocation, offsetsMatrix);
              this.applyMatrix(normalsMatrixUniformLocation, normalsMatrix);
              this.applyMatrix(positionMatrixUniformLocation, positionMatrix);
              this.applyMatrix(rotationsMatrixUniformLocation, rotationsMatrix);
              this.applyMatrix(projectionMatrixUniformLocation, projectionMatrix);
            }
          },
          {
            key: "drawElements",
            value: function drawElements(start, finish) {
              var _context = this.context, TRIANGLES = _context.TRIANGLES, UNSIGNED_SHORT = _context.UNSIGNED_SHORT, mode = TRIANGLES, type = UNSIGNED_SHORT, count = finish - start, offset = start * 2;
              this.context.drawElements(mode, count, type, offset);
            }
          }
        ]);
        return Canvas2;
      }();
      exports.default = Canvas;
      Object.assign(Canvas.prototype, _depth.default);
      Object.assign(Canvas.prototype, _shader.default);
      Object.assign(Canvas.prototype, _buffer.default);
      Object.assign(Canvas.prototype, _colour.default);
      Object.assign(Canvas.prototype, _matrix.default);
      Object.assign(Canvas.prototype, _texture.default);
      Object.assign(Canvas.prototype, _program.default);
      Object.assign(Canvas.prototype, _blending.default);
      Object.assign(Canvas.prototype, _location.default);
      function domElementFromSelector(selector) {
        var domElement = typeof selector === "string" ? document.querySelectorAll(selector)[0] : selector;
        return domElement;
      }
      function contextFromDOMElement(domElement) {
        var context = domElement.getContext("webgl");
        if (!context) {
          throw new Error(_errors.WEB_GL_CONTEXT_ERROR);
        }
        return context;
      }
    }
  });

  // lib/renderer.js
  var require_renderer = __commonJS({
    "lib/renderer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createProgram = createProgram;
      exports.default = void 0;
      var _array = require_array2();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var add = _array.push;
      var Renderer = /* @__PURE__ */ function() {
        function Renderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations) {
          _classCallCheck(this, Renderer2);
          this.facets = facets;
          this.program = program;
          this.rendererData = rendererData;
          this.rendererBuffers = rendererBuffers;
          this.uniformLocations = uniformLocations;
          this.attributeLocations = attributeLocations;
        }
        _createClass(Renderer2, [
          {
            key: "getFacets",
            value: function getFacets() {
              return this.facets;
            }
          },
          {
            key: "getProgram",
            value: function getProgram() {
              return this.program;
            }
          },
          {
            key: "getRendererData",
            value: function getRendererData() {
              return this.rendererData;
            }
          },
          {
            key: "getRendererBuffers",
            value: function getRendererBuffers() {
              return this.rendererBuffers;
            }
          },
          {
            key: "getUniformLocations",
            value: function getUniformLocations() {
              return this.uniformLocations;
            }
          },
          {
            key: "getAttributeLocations",
            value: function getAttributeLocations() {
              return this.attributeLocations;
            }
          },
          {
            key: "getCount",
            value: function getCount() {
              return this.rendererData.getCount();
            }
          },
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.uniformLocations.getOffsetsMatrixUniformLocation();
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.uniformLocations.getNormalsMatrixUniformLocation();
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.uniformLocations.getPositionMatrixUniformLocation();
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.uniformLocations.getRotationsMatrixUniformLocation();
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.uniformLocations.getProjectionMatrixUniformLocation();
            }
          },
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.attributeLocations.getVertexPositionAttributeLocation();
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.attributeLocations.getVertexNormalAttributeLocation();
            }
          },
          {
            key: "addFacets",
            value: function addFacets(facets) {
              add(this.facets, facets);
            }
          }
        ]);
        return Renderer2;
      }();
      exports.default = Renderer;
      function createProgram(vertexShaderSource, fragmentShaderSource, canvas) {
        var vertexShader = canvas.createVertexShader(vertexShaderSource), fragmentShader = canvas.createFragmentShader(fragmentShaderSource), program = canvas.createProgram(vertexShader, fragmentShader);
        return program;
      }
    }
  });

  // lib/renderer/data.js
  var require_data = __commonJS({
    "lib/renderer/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _array = require_array2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var add = _array.merge;
      var RendererData = /* @__PURE__ */ function() {
        function RendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData) {
          _classCallCheck(this, RendererData2);
          this.vertexPositionsData = vertexPositionsData;
          this.vertexNormalsData = vertexNormalsData;
          this.vertexIndexesData = vertexIndexesData;
        }
        _createClass(RendererData2, [
          {
            key: "getCount",
            value: function getCount() {
              var vertexIndexesDataLength = this.vertexIndexesData.length, count = vertexIndexesDataLength;
              return count;
            }
          },
          {
            key: "getVertexPositionsData",
            value: function getVertexPositionsData() {
              return this.vertexPositionsData;
            }
          },
          {
            key: "getVertexNormalsData",
            value: function getVertexNormalsData() {
              return this.vertexNormalsData;
            }
          },
          {
            key: "getVertexIndexesData",
            value: function getVertexIndexesData() {
              return this.vertexIndexesData;
            }
          },
          {
            key: "addVertexPositions",
            value: function addVertexPositions(vertexPositions) {
              var vertexPositionsData = (0, _array).flatten(vertexPositions);
              add(this.vertexPositionsData, vertexPositionsData);
            }
          },
          {
            key: "addVertexNormals",
            value: function addVertexNormals(vertexNormals) {
              var vertexNormalsData = (0, _array).flatten(vertexNormals);
              add(this.vertexNormalsData, vertexNormalsData);
            }
          },
          {
            key: "addVertexIndexes",
            value: function addVertexIndexes(vertexIndexes) {
              var vertexIndexesData = vertexIndexes;
              add(this.vertexIndexesData, vertexIndexesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsData = [], vertexNormalsData = [], vertexIndexesData = [], rendererData = _construct(Class, [
                vertexPositionsData,
                vertexNormalsData,
                vertexIndexesData
              ].concat(_toConsumableArray(remainingArguments)));
              return rendererData;
            }
          }
        ]);
        return RendererData2;
      }();
      exports.default = RendererData;
    }
  });

  // lib/renderer/data/colour.js
  var require_colour2 = __commonJS({
    "lib/renderer/data/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _data = _interopRequireDefault2(require_data());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var add = _array.merge;
      var ColourRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(ColourRendererData2, RendererData);
        var _super = _createSuper(ColourRendererData2);
        function ColourRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData) {
          _classCallCheck(this, ColourRendererData2);
          var _this;
          _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
          _this.vertexColoursData = vertexColoursData;
          return _this;
        }
        _createClass(ColourRendererData2, [
          {
            key: "getVertexColoursData",
            value: function getVertexColoursData() {
              return this.vertexColoursData;
            }
          },
          {
            key: "addVertexColours",
            value: function addVertexColours(vertexColours) {
              var vertexColoursData = (0, _array).flatten(vertexColours);
              add(this.vertexColoursData, vertexColoursData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursData = [], colourRendererData = _data.default.fromNothing(ColourRendererData2, vertexColoursData);
              return colourRendererData;
            }
          }
        ]);
        return ColourRendererData2;
      }(_data.default);
      exports.default = ColourRendererData;
    }
  });

  // lib/renderer/source/lighting.js
  var require_lighting = __commonJS({
    "lib/renderer/source/lighting.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.vertexNormalAttributeName = exports.normalsMatrixName = void 0;
      var normalsMatrixName = "uNormalsMatrix";
      exports.normalsMatrixName = normalsMatrixName;
      var vertexNormalAttributeName = "aVertexNormal";
      exports.vertexNormalAttributeName = vertexNormalAttributeName;
      var lightingSource = new String("\n  \n        uniform mat4 ".concat(normalsMatrixName, ";\n\n        attribute vec3 ").concat(vertexNormalAttributeName, ";\n\n        vec3 directionalLightColour = vec3(1, 1, 1),\n             directionalVector = normalize(vec3(1.0, 1.0, 1.0));\n          \n        vec3 calculateLighting() {\n          vec4 transformedNormal = ").concat(normalsMatrixName, " * vec4(").concat(vertexNormalAttributeName, ", 1.0);            \n\n          float directional = (dot(transformedNormal.xyz, directionalVector) + 1.0) / 2.0;\n          \n          vec3 lighting = (directionalLightColour * directional);\n          \n          return lighting;\n        }\n\n      "));
      var _default = lightingSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/position.js
  var require_position = __commonJS({
    "lib/renderer/source/position.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.vertexPositionAttributeName = exports.projectionMatrixName = exports.rotationsMatrixName = exports.positionMatrixName = exports.offsetsMatrixName = void 0;
      var offsetsMatrixName = "uOffsetsMatrix";
      exports.offsetsMatrixName = offsetsMatrixName;
      var positionMatrixName = "uPositionMatrix";
      exports.positionMatrixName = positionMatrixName;
      var rotationsMatrixName = "uRotationsMatrix";
      exports.rotationsMatrixName = rotationsMatrixName;
      var projectionMatrixName = "uPerspectiveMatrix";
      exports.projectionMatrixName = projectionMatrixName;
      var vertexPositionAttributeName = "aVertexPosition";
      exports.vertexPositionAttributeName = vertexPositionAttributeName;
      var positionSource = new String("\n  \n        uniform mat4 ".concat(offsetsMatrixName, ",\n                     ").concat(rotationsMatrixName, ",\n                     ").concat(positionMatrixName, ",\n                     ").concat(projectionMatrixName, ";\n        \n        attribute vec4 ").concat(vertexPositionAttributeName, ";\n\n        vec4 calculatePosition() {\n          vec4 position = ").concat(projectionMatrixName, " * ").concat(positionMatrixName, " * ").concat(rotationsMatrixName, " * ").concat(offsetsMatrixName, " * ").concat(vertexPositionAttributeName, ";\n          \n          return position;\n        }\n        \n      "));
      var _default = positionSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/colour/vertexShader.js
  var require_vertexShader = __commonJS({
    "lib/renderer/source/colour/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.vertexColourAttributeName = void 0;
      var _lighting = _interopRequireDefault2(require_lighting());
      var _position = _interopRequireDefault2(require_position());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var vertexColourAttributeName = "aVertexColour";
      exports.vertexColourAttributeName = vertexColourAttributeName;
      var vertexShaderSource = new String("\n    \n        attribute vec4 ".concat(vertexColourAttributeName, ";\n\n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n    \n        varying highp vec3 vLighting;\n        \n        varying lowp vec4 vColour;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n\n          vColour = ").concat(vertexColourAttributeName, ";                    \n        }\n        \n      "));
      var _default = vertexShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/source/colour/fragmentShader.js
  var require_fragmentShader = __commonJS({
    "lib/renderer/source/colour/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var fragmentShaderSource = new String("\n        \n        varying lowp vec4 vColour;\n              \n        varying highp vec3 vLighting;\n\n        void main() {\n          gl_FragColor = vec4(vColour.rgb * vLighting, vColour.a);\n        }\n        \n      ");
      var _default = fragmentShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/buffers.js
  var require_buffers = __commonJS({
    "lib/renderer/buffers.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var vertexNormalComponents = 3;
      var vertexPositionComponents = 3;
      var RendererBuffers = /* @__PURE__ */ function() {
        function RendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer) {
          _classCallCheck(this, RendererBuffers2);
          this.vertexPositionsBuffer = vertexPositionsBuffer;
          this.vertexNormalsBuffer = vertexNormalsBuffer;
          this.vertexIndexesElementBuffer = vertexIndexesElementBuffer;
        }
        _createClass(RendererBuffers2, [
          {
            key: "createVertexPositionsBuffer",
            value: function createVertexPositionsBuffer(vertexPositionsData, canvas) {
              this.vertexPositionsBuffer = canvas.createBuffer(vertexPositionsData);
            }
          },
          {
            key: "createVertexNormalsBuffer",
            value: function createVertexNormalsBuffer(vertexNormalsData, canvas) {
              this.vertexNormalsBuffer = canvas.createBuffer(vertexNormalsData);
            }
          },
          {
            key: "createVertexIndexesElementBuffer",
            value: function createVertexIndexesElementBuffer(vertexIndexesData, canvas) {
              this.vertexIndexesElementBuffer = canvas.createElementBuffer(vertexIndexesData);
            }
          },
          {
            key: "bindVertexNormalsBuffer",
            value: function bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexNormalsBuffer, vertexNormalAttributeLocation, vertexNormalComponents);
            }
          },
          {
            key: "bindVertexPositionsBuffer",
            value: function bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexPositionsBuffer, vertexPositionAttributeLocation, vertexPositionComponents);
            }
          },
          {
            key: "bindVertexIndexesElementBuffer",
            value: function bindVertexIndexesElementBuffer(canvas) {
              canvas.bindElementBuffer(this.vertexIndexesElementBuffer);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas) {
              this.createVertexPositionsBuffer(vertexPositionsData, canvas);
              this.createVertexNormalsBuffer(vertexNormalsData, canvas);
              this.createVertexIndexesElementBuffer(vertexIndexesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas) {
              this.bindVertexNormalsBuffer(vertexNormalAttributeLocation, canvas);
              this.bindVertexPositionsBuffer(vertexPositionAttributeLocation, canvas);
              this.bindVertexIndexesElementBuffer(canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                remainingArguments[_key - 1] = arguments[_key];
              }
              var vertexPositionsBuffer = null, vertexNormalsBuffer = null, vertexIndexesElementBuffer = null, rendererBuffers = _construct(Class, [
                vertexPositionsBuffer,
                vertexNormalsBuffer,
                vertexIndexesElementBuffer
              ].concat(_toConsumableArray(remainingArguments)));
              return rendererBuffers;
            }
          }
        ]);
        return RendererBuffers2;
      }();
      exports.default = RendererBuffers;
    }
  });

  // lib/renderer/buffers/colour.js
  var require_colour3 = __commonJS({
    "lib/renderer/buffers/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _buffers = _interopRequireDefault2(require_buffers());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var vertexColourComponents = 4;
      var ColourRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(ColourRendererBuffers2, RendererBuffers);
        var _super = _createSuper(ColourRendererBuffers2);
        function ColourRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, vertexColoursBuffer) {
          _classCallCheck(this, ColourRendererBuffers2);
          var _this;
          _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
          _this.vertexColoursBuffer = vertexColoursBuffer;
          return _this;
        }
        _createClass(ColourRendererBuffers2, [
          {
            key: "createVertexColoursBuffer",
            value: function createVertexColoursBuffer(vertexColoursData, canvas) {
              this.vertexColoursBuffer = canvas.createBuffer(vertexColoursData);
            }
          },
          {
            key: "bindVertexColoursBuffer",
            value: function bindVertexColoursBuffer(vertexColourAttributeLocation, canvas) {
              canvas.bindBuffer(this.vertexColoursBuffer, vertexColourAttributeLocation, vertexColourComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas) {
              _get(_getPrototypeOf(ColourRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createVertexColoursBuffer(vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas) {
              _get(_getPrototypeOf(ColourRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindVertexColoursBuffer(vertexColourAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexColoursBuffer = null, colourRendererBuffers = _buffers.default.fromNothing(ColourRendererBuffers2, vertexColoursBuffer);
              return colourRendererBuffers;
            }
          }
        ]);
        return ColourRendererBuffers2;
      }(_buffers.default);
      exports.default = ColourRendererBuffers;
    }
  });

  // lib/renderer/locations/uniform.js
  var require_uniform = __commonJS({
    "lib/renderer/locations/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _lighting = require_lighting();
      var _position = require_position();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var UniformLocations = /* @__PURE__ */ function() {
        function UniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation) {
          _classCallCheck(this, UniformLocations2);
          this.offsetsMatrixUniformLocation = offsetsMatrixUniformLocation;
          this.normalsMatrixUniformLocation = normalsMatrixUniformLocation;
          this.positionMatrixUniformLocation = positionMatrixUniformLocation;
          this.rotationsMatrixUniformLocation = rotationsMatrixUniformLocation;
          this.projectionMatrixUniformLocation = projectionMatrixUniformLocation;
        }
        _createClass(UniformLocations2, [
          {
            key: "getOffsetsMatrixUniformLocation",
            value: function getOffsetsMatrixUniformLocation() {
              return this.offsetsMatrixUniformLocation;
            }
          },
          {
            key: "getNormalsMatrixUniformLocation",
            value: function getNormalsMatrixUniformLocation() {
              return this.normalsMatrixUniformLocation;
            }
          },
          {
            key: "getPositionMatrixUniformLocation",
            value: function getPositionMatrixUniformLocation() {
              return this.positionMatrixUniformLocation;
            }
          },
          {
            key: "getRotationsMatrixUniformLocation",
            value: function getRotationsMatrixUniformLocation() {
              return this.rotationsMatrixUniformLocation;
            }
          },
          {
            key: "getProjectionMatrixUniformLocation",
            value: function getProjectionMatrixUniformLocation() {
              return this.projectionMatrixUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var offsetsMatrixUniformLocation = canvas.getUniformLocation(program, _position.offsetsMatrixName), normalsMatrixUniformLocation = canvas.getUniformLocation(program, _lighting.normalsMatrixName), positionMatrixUniformLocation = canvas.getUniformLocation(program, _position.positionMatrixName), rotationsMatrixUniformLocation = canvas.getUniformLocation(program, _position.rotationsMatrixName), projectionMatrixUniformLocation = canvas.getUniformLocation(program, _position.projectionMatrixName), uniformLocations = _construct(Class, [
                offsetsMatrixUniformLocation,
                normalsMatrixUniformLocation,
                positionMatrixUniformLocation,
                rotationsMatrixUniformLocation,
                projectionMatrixUniformLocation
              ].concat(_toConsumableArray(remainingArguments)));
              return uniformLocations;
            }
          }
        ]);
        return UniformLocations2;
      }();
      exports.default = UniformLocations;
    }
  });

  // lib/renderer/locations/colour/uniform.js
  var require_uniform2 = __commonJS({
    "lib/renderer/locations/colour/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _uniform = _interopRequireDefault2(require_uniform());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var ColourUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(ColourUniformLocations2, UniformLocations);
        var _super = _createSuper(ColourUniformLocations2);
        function ColourUniformLocations2() {
          _classCallCheck(this, ColourUniformLocations2);
          return _super.apply(this, arguments);
        }
        _createClass(ColourUniformLocations2, null, [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              return _uniform.default.fromProgram(ColourUniformLocations2, program, canvas);
            }
          }
        ]);
        return ColourUniformLocations2;
      }(_uniform.default);
      exports.default = ColourUniformLocations;
    }
  });

  // lib/renderer/locations/attribute.js
  var require_attribute = __commonJS({
    "lib/renderer/locations/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _lighting = require_lighting();
      var _position = require_position();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var AttributeLocations = /* @__PURE__ */ function() {
        function AttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation) {
          _classCallCheck(this, AttributeLocations2);
          this.vertexPositionAttributeLocation = vertexPositionAttributeLocation;
          this.vertexNormalAttributeLocation = vertexNormalAttributeLocation;
        }
        _createClass(AttributeLocations2, [
          {
            key: "getVertexPositionAttributeLocation",
            value: function getVertexPositionAttributeLocation() {
              return this.vertexPositionAttributeLocation;
            }
          },
          {
            key: "getVertexNormalAttributeLocation",
            value: function getVertexNormalAttributeLocation() {
              return this.vertexNormalAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(Class, program, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
                remainingArguments[_key - 3] = arguments[_key];
              }
              var vertexPositionAttributeLocation = canvas.getAttributeLocation(program, _position.vertexPositionAttributeName), vertexNormalAttributeLocation = canvas.getAttributeLocation(program, _lighting.vertexNormalAttributeName), attributeLocations = _construct(Class, [
                vertexPositionAttributeLocation,
                vertexNormalAttributeLocation
              ].concat(_toConsumableArray(remainingArguments)));
              return attributeLocations;
            }
          }
        ]);
        return AttributeLocations2;
      }();
      exports.default = AttributeLocations;
    }
  });

  // lib/renderer/locations/colour/attribute.js
  var require_attribute2 = __commonJS({
    "lib/renderer/locations/colour/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _attribute = _interopRequireDefault2(require_attribute());
      var _vertexShader = require_vertexShader();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var ColourAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(ColourAttributeLocations2, AttributeLocations);
        var _super = _createSuper(ColourAttributeLocations2);
        function ColourAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, vertexColourAttributeLocation) {
          _classCallCheck(this, ColourAttributeLocations2);
          var _this;
          _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
          _this.vertexColourAttributeLocation = vertexColourAttributeLocation;
          return _this;
        }
        _createClass(ColourAttributeLocations2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              return this.vertexColourAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var vertexColourAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.vertexColourAttributeName), colourAttributeLocations = _attribute.default.fromProgram(ColourAttributeLocations2, program, canvas, vertexColourAttributeLocation);
              return colourAttributeLocations;
            }
          }
        ]);
        return ColourAttributeLocations2;
      }(_attribute.default);
      exports.default = ColourAttributeLocations;
    }
  });

  // lib/renderer/colour.js
  var require_colour4 = __commonJS({
    "lib/renderer/colour.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _renderer = _interopRequireWildcard(require_renderer());
      var _colour = _interopRequireDefault2(require_colour2());
      var _vertexShader = _interopRequireDefault2(require_vertexShader());
      var _fragmentShader = _interopRequireDefault2(require_fragmentShader());
      var _colour1 = _interopRequireDefault2(require_colour3());
      var _uniform = _interopRequireDefault2(require_uniform2());
      var _attribute = _interopRequireDefault2(require_attribute2());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var add = _array.push;
      var ColourRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(ColourRenderer2, Renderer);
        var _super = _createSuper(ColourRenderer2);
        function ColourRenderer2() {
          _classCallCheck(this, ColourRenderer2);
          return _super.apply(this, arguments);
        }
        _createClass(ColourRenderer2, [
          {
            key: "getVertexColourAttributeLocation",
            value: function getVertexColourAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), vertexColourAttributeLocation = attributeLocations.getVertexColourAttributeLocation();
              return vertexColourAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexColours = [];
              facets.forEach(function(facet, index) {
                var colouredFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), colouredFacetVertexColours = colouredFacet.getVertexColours();
                add(vertexIndexes, facetVertexIndexes);
                add(vertexNormals, facetVertexNormals);
                add(vertexPositions, facetVertexPositions);
                add(vertexColours, colouredFacetVertexColours);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexColours(vertexColours);
              rendererData.addVertexPositions(vertexPositions);
              var rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexColoursData = rendererData.getVertexColoursData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexColoursData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), vertexColourAttributeLocation = this.getVertexColourAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, vertexColourAttributeLocation, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var count = this.getCount(), start = 0, finish = count;
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(canvas) {
              var facets = [], program = (0, _renderer).createProgram(_vertexShader.default, _fragmentShader.default, canvas), colourRendererData = _colour.default.fromNothing(), colourRendererBuffers = _colour1.default.fromNothing(), colourUniformLocations = _uniform.default.fromProgram(program, canvas), colourAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = colourRendererData, rendererBuffers = colourRendererBuffers, uniformLocations = colourUniformLocations, attributeLocations = colourAttributeLocations, colourRenderer = new ColourRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
              return colourRenderer;
            }
          }
        ]);
        return ColourRenderer2;
      }(_renderer.default);
      exports.default = ColourRenderer;
    }
  });

  // lib/renderer/source/texture/vertexShader.js
  var require_vertexShader2 = __commonJS({
    "lib/renderer/source/texture/vertexShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.textureCoordinateAttributeName = void 0;
      var _lighting = _interopRequireDefault2(require_lighting());
      var _position = _interopRequireDefault2(require_position());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var textureCoordinateAttributeName = "aTextureCoordinate";
      exports.textureCoordinateAttributeName = textureCoordinateAttributeName;
      var vertexShaderSource = new String("\n        \n        attribute vec2 ".concat(textureCoordinateAttributeName, ";\n        \n        ").concat(_lighting.default, "\n      \n        ").concat(_position.default, "\n\n        varying highp vec3 vLighting;\n        \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          vLighting = calculateLighting();\n\n          gl_Position = calculatePosition();\n                    \n          vTextureCoordinate = ").concat(textureCoordinateAttributeName, ";\n        }\n        \n      "));
      var _default = vertexShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/data/texture.js
  var require_texture2 = __commonJS({
    "lib/renderer/data/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _data = _interopRequireDefault2(require_data());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var add = _array.merge;
      var TextureRendererData = /* @__PURE__ */ function(RendererData) {
        _inherits(TextureRendererData2, RendererData);
        var _super = _createSuper(TextureRendererData2);
        function TextureRendererData2(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData) {
          _classCallCheck(this, TextureRendererData2);
          var _this;
          _this = _super.call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData);
          _this.vertexTextureCoordinatesData = vertexTextureCoordinatesData;
          return _this;
        }
        _createClass(TextureRendererData2, [
          {
            key: "getVertexTextureCoordinatesData",
            value: function getVertexTextureCoordinatesData() {
              return this.vertexTextureCoordinatesData;
            }
          },
          {
            key: "addVertexTextureCoordinateTuples",
            value: function addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples) {
              var vertexTextureCoordinatesData = (0, _array).flatten(vertexTextureCoordinateTuples);
              add(this.vertexTextureCoordinatesData, vertexTextureCoordinatesData);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var vertexTextureCoordinatesData = [], textureRendererData = _data.default.fromNothing(TextureRendererData2, vertexTextureCoordinatesData);
              return textureRendererData;
            }
          }
        ]);
        return TextureRendererData2;
      }(_data.default);
      exports.default = TextureRendererData;
    }
  });

  // lib/renderer/source/texture/fragmentShader.js
  var require_fragmentShader2 = __commonJS({
    "lib/renderer/source/texture/fragmentShader.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = exports.samplerName = void 0;
      var samplerName = "uSampler";
      exports.samplerName = samplerName;
      var fragmentShaderSource = new String("\n        \n        uniform sampler2D ".concat(samplerName, ";\n\n        varying highp vec3 vLighting;\n                   \n        varying highp vec2 vTextureCoordinate;\n        \n        void main() {\n          highp vec4 texelColour = texture2D(").concat(samplerName, ", vTextureCoordinate);\n          \n          gl_FragColor = vec4(texelColour.rgb * vLighting, texelColour.a);  \n        }\n        \n      "));
      var _default = fragmentShaderSource;
      exports.default = _default;
    }
  });

  // lib/renderer/buffers/texture.js
  var require_texture3 = __commonJS({
    "lib/renderer/buffers/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _buffers = _interopRequireDefault2(require_buffers());
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var textureCoordinateComponents = 2;
      var TextureRendererBuffers = /* @__PURE__ */ function(RendererBuffers) {
        _inherits(TextureRendererBuffers2, RendererBuffers);
        var _super = _createSuper(TextureRendererBuffers2);
        function TextureRendererBuffers2(vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer, textureCoordinatesBuffer) {
          _classCallCheck(this, TextureRendererBuffers2);
          var _this;
          _this = _super.call(this, vertexPositionsBuffer, vertexNormalsBuffer, vertexIndexesElementBuffer);
          _this.textureCoordinatesBuffer = textureCoordinatesBuffer;
          return _this;
        }
        _createClass(TextureRendererBuffers2, [
          {
            key: "createTextureCoordinatesBuffer",
            value: function createTextureCoordinatesBuffer(textureCoordinatesData, canvas) {
              this.textureCoordinatesBuffer = canvas.createBuffer(textureCoordinatesData);
            }
          },
          {
            key: "bindTextureCoordinatesBuffer",
            value: function bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas) {
              canvas.bindBuffer(this.textureCoordinatesBuffer, textureCoordinateAttributeLocation, textureCoordinateComponents);
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, textureCoordinatesData, canvas) {
              _get(_getPrototypeOf(TextureRendererBuffers2.prototype), "createBuffers", this).call(this, vertexPositionsData, vertexNormalsData, vertexIndexesData, canvas);
              this.createTextureCoordinatesBuffer(textureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas) {
              _get(_getPrototypeOf(TextureRendererBuffers2.prototype), "bindBuffers", this).call(this, vertexNormalAttributeLocation, vertexPositionAttributeLocation, canvas);
              this.bindTextureCoordinatesBuffer(textureCoordinateAttributeLocation, canvas);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var textureCoordinatesBuffer = null, textureRendererBuffers = _buffers.default.fromNothing(TextureRendererBuffers2, textureCoordinatesBuffer);
              return textureRendererBuffers;
            }
          }
        ]);
        return TextureRendererBuffers2;
      }(_buffers.default);
      exports.default = TextureRendererBuffers;
    }
  });

  // lib/renderer/locations/texture/uniform.js
  var require_uniform3 = __commonJS({
    "lib/renderer/locations/texture/uniform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _uniform = _interopRequireDefault2(require_uniform());
      var _fragmentShader = require_fragmentShader2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var TextureUniformLocations = /* @__PURE__ */ function(UniformLocations) {
        _inherits(TextureUniformLocations2, UniformLocations);
        var _super = _createSuper(TextureUniformLocations2);
        function TextureUniformLocations2(offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation, samplerUniformLocation) {
          _classCallCheck(this, TextureUniformLocations2);
          var _this;
          _this = _super.call(this, offsetsMatrixUniformLocation, normalsMatrixUniformLocation, positionMatrixUniformLocation, rotationsMatrixUniformLocation, projectionMatrixUniformLocation);
          _this.samplerUniformLocation = samplerUniformLocation;
          return _this;
        }
        _createClass(TextureUniformLocations2, [
          {
            key: "getSamplerUniformLocation",
            value: function getSamplerUniformLocation() {
              return this.samplerUniformLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var samplerUniformLocation = canvas.getUniformLocation(program, _fragmentShader.samplerName), textureUniformLocations = _uniform.default.fromProgram(TextureUniformLocations2, program, canvas, samplerUniformLocation);
              return textureUniformLocations;
            }
          }
        ]);
        return TextureUniformLocations2;
      }(_uniform.default);
      exports.default = TextureUniformLocations;
    }
  });

  // lib/renderer/locations/texture/attribute.js
  var require_attribute3 = __commonJS({
    "lib/renderer/locations/texture/attribute.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _attribute = _interopRequireDefault2(require_attribute());
      var _vertexShader = require_vertexShader2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var TextureAttributeLocations = /* @__PURE__ */ function(AttributeLocations) {
        _inherits(TextureAttributeLocations2, AttributeLocations);
        var _super = _createSuper(TextureAttributeLocations2);
        function TextureAttributeLocations2(vertexPositionAttributeLocation, vertexNormalAttributeLocation, textureCoordinateAttributeLocation) {
          _classCallCheck(this, TextureAttributeLocations2);
          var _this;
          _this = _super.call(this, vertexPositionAttributeLocation, vertexNormalAttributeLocation);
          _this.textureCoordinateAttributeLocation = textureCoordinateAttributeLocation;
          return _this;
        }
        _createClass(TextureAttributeLocations2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              return this.textureCoordinateAttributeLocation;
            }
          }
        ], [
          {
            key: "fromProgram",
            value: function fromProgram(program, canvas) {
              var textureCoordinateAttributeLocation = canvas.getAttributeLocation(program, _vertexShader.textureCoordinateAttributeName), textureAttributeLocations = _attribute.default.fromProgram(TextureAttributeLocations2, program, canvas, textureCoordinateAttributeLocation);
              return textureAttributeLocations;
            }
          }
        ]);
        return TextureAttributeLocations2;
      }(_attribute.default);
      exports.default = TextureAttributeLocations;
    }
  });

  // lib/renderer/texture.js
  var require_texture4 = __commonJS({
    "lib/renderer/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _renderer = _interopRequireWildcard(require_renderer());
      var _vertexShader = _interopRequireDefault2(require_vertexShader2());
      var _texture = _interopRequireDefault2(require_texture2());
      var _fragmentShader = _interopRequireDefault2(require_fragmentShader2());
      var _texture1 = _interopRequireDefault2(require_texture3());
      var _uniform = _interopRequireDefault2(require_uniform3());
      var _attribute = _interopRequireDefault2(require_attribute3());
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                if (desc.get || desc.set) {
                  Object.defineProperty(newObj, key, desc);
                } else {
                  newObj[key] = obj[key];
                }
              }
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var TextureRenderer = /* @__PURE__ */ function(Renderer) {
        _inherits(TextureRenderer2, Renderer);
        var _super = _createSuper(TextureRenderer2);
        function TextureRenderer2() {
          _classCallCheck(this, TextureRenderer2);
          return _super.apply(this, arguments);
        }
        _createClass(TextureRenderer2, [
          {
            key: "getTextureCoordinateAttributeLocation",
            value: function getTextureCoordinateAttributeLocation() {
              var attributeLocations = this.getAttributeLocations(), textureCoordinateAttributeLocation = attributeLocations.getTextureCoordinateAttributeLocation();
              return textureCoordinateAttributeLocation;
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var rendererData = this.getRendererData(), rendererBuffers = this.getRendererBuffers(), vertexPositionsData = rendererData.getVertexPositionsData(), vertexNormalsData = rendererData.getVertexNormalsData(), vertexIndexesData = rendererData.getVertexIndexesData(), vertexTextureCoordinatesData = rendererData.getVertexTextureCoordinatesData();
              rendererBuffers.createBuffers(vertexPositionsData, vertexNormalsData, vertexIndexesData, vertexTextureCoordinatesData, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing(Class, canvas) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var facets = [], program = (0, _renderer).createProgram(_vertexShader.default, _fragmentShader.default, canvas), textureRendererData = _texture.default.fromNothing(), textureRendererBuffers = _texture1.default.fromNothing(), textureUniformLocations = _uniform.default.fromProgram(program, canvas), textureAttributeLocations = _attribute.default.fromProgram(program, canvas), rendererData = textureRendererData, rendererBuffers = textureRendererBuffers, uniformLocations = textureUniformLocations, attributeLocations = textureAttributeLocations, textureRenderer = _construct(Class, [
                facets,
                program,
                rendererData,
                rendererBuffers,
                uniformLocations,
                attributeLocations
              ].concat(_toConsumableArray(remainingArguments)));
              canvas.enableAnisotropicFiltering();
              return textureRenderer;
            }
          }
        ]);
        return TextureRenderer2;
      }(_renderer.default);
      exports.default = TextureRenderer;
    }
  });

  // lib/renderer/texture/images.js
  var require_images = __commonJS({
    "lib/renderer/texture/images.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texture = _interopRequireDefault2(require_texture4());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var add = _array.push;
      var ImagesTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImagesTextureRenderer2, TextureRenderer);
        var _super = _createSuper(ImagesTextureRenderer2);
        function ImagesTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageNames, facetsMap, offsets) {
          _classCallCheck(this, ImagesTextureRenderer2);
          var _this;
          _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
          _this.imageNames = imageNames;
          _this.facetsMap = facetsMap;
          _this.offsets = offsets;
          return _this;
        }
        _createClass(ImagesTextureRenderer2, [
          {
            key: "addFacets",
            value: function addFacets(facets) {
              var texturedFacets = facets, texturedFacetsLength = texturedFacets.length;
              if (texturedFacetsLength > 0) {
                var firstTexturedFacet = (0, _array).first(texturedFacets), texturedFacet = firstTexturedFacet, imageName = texturedFacet.getImageName(), facets1 = this.facetsMap[imageName];
                add(facets1, texturedFacets);
              }
            }
          },
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              var index = 0;
              this.imageNames.forEach(function(imageName) {
                var facets = _this.facetsMap[imageName];
                facets.forEach(function(facet) {
                  var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), texturedFacetTextureCoordinateTuples = texturedFacet.getTextureCoordinateTuples(), texturedFacetVertexTextureCoordinateTuples = texturedFacetTextureCoordinateTuples;
                  add(vertexIndexes, facetVertexIndexes);
                  add(vertexNormals, facetVertexNormals);
                  add(vertexPositions, facetVertexPositions);
                  add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
                  index++;
                });
                var offset = index * 3;
                _this.offsets.push(offset);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_getPrototypeOf(ImagesTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var _this = this;
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var start, finish = 0;
              this.offsets.forEach(function(offset, index) {
                start = finish;
                finish = offset;
                _this.useTexture(index, canvas);
                canvas.drawElements(start, finish);
              });
            }
          }
        ], [
          {
            key: "fromImagesImageNamesAndImageTiling",
            value: function fromImagesImageNamesAndImageTiling(images, imageNames, imageTiling, canvas) {
              var offsets = [], facetsMap = {};
              images.forEach(function(image, index) {
                var facets = [], repeat = imageTiling, imageName = imageNames[index];
                facetsMap[imageName] = facets;
                canvas.createTexture(image, index, repeat);
              });
              var imagesTextureRenderer = _texture.default.fromNothing(ImagesTextureRenderer2, canvas, imageNames, facetsMap, offsets);
              return imagesTextureRenderer;
            }
          }
        ]);
        return ImagesTextureRenderer2;
      }(_texture.default);
      exports.default = ImagesTextureRenderer;
    }
  });

  // lib/renderer/texture/imageMap.js
  var require_imageMap = __commonJS({
    "lib/renderer/texture/imageMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texture = _interopRequireDefault2(require_texture4());
      var _array = require_array2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var add = _array.push;
      var ImageMapTextureRenderer = /* @__PURE__ */ function(TextureRenderer) {
        _inherits(ImageMapTextureRenderer2, TextureRenderer);
        var _super = _createSuper(ImageMapTextureRenderer2);
        function ImageMapTextureRenderer2(facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations, imageMapJSON) {
          _classCallCheck(this, ImageMapTextureRenderer2);
          var _this;
          _this = _super.call(this, facets, program, rendererData, rendererBuffers, uniformLocations, attributeLocations);
          _this.imageMapJSON = imageMapJSON;
          return _this;
        }
        _createClass(ImageMapTextureRenderer2, [
          {
            key: "createBuffers",
            value: function createBuffers(canvas) {
              var _this = this;
              var facets = this.getFacets(), vertexIndexes = [], vertexNormals = [], vertexPositions = [], vertexTextureCoordinateTuples = [];
              facets.forEach(function(facet, index) {
                var texturedFacet = facet, facetVertexIndexes = facet.getVertexIndexes(index), facetVertexNormals = facet.getVertexNormals(), facetVertexPositions = facet.getVertexPositions(), mappedTextureCoordinateTuples = texturedFacet.getMappedTextureCoordinateTuples(_this.imageMapJSON), texturedFacetVertexTextureCoordinateTuples = mappedTextureCoordinateTuples;
                add(vertexIndexes, facetVertexIndexes);
                add(vertexNormals, facetVertexNormals);
                add(vertexPositions, facetVertexPositions);
                add(vertexTextureCoordinateTuples, texturedFacetVertexTextureCoordinateTuples);
              });
              var rendererData = this.getRendererData();
              rendererData.addVertexIndexes(vertexIndexes);
              rendererData.addVertexNormals(vertexNormals);
              rendererData.addVertexPositions(vertexPositions);
              rendererData.addVertexTextureCoordinateTuples(vertexTextureCoordinateTuples);
              _get(_getPrototypeOf(ImageMapTextureRenderer2.prototype), "createBuffers", this).call(this, canvas);
            }
          },
          {
            key: "bindBuffers",
            value: function bindBuffers(canvas) {
              var rendererBuffers = this.getRendererBuffers(), vertexNormalAttributeLocation = this.getVertexNormalAttributeLocation(), vertexPositionAttributeLocation = this.getVertexPositionAttributeLocation(), textureCoordinateAttributeLocation = this.getTextureCoordinateAttributeLocation();
              rendererBuffers.bindBuffers(vertexNormalAttributeLocation, vertexPositionAttributeLocation, textureCoordinateAttributeLocation, canvas);
            }
          },
          {
            key: "useTexture",
            value: function useTexture(index, canvas) {
              var uniformLocations = this.getUniformLocations(), samplerUniformLocation = uniformLocations.getSamplerUniformLocation(), samplerUniformLocationIntegerValue = index;
              canvas.setUniformLocationIntegerValue(samplerUniformLocation, samplerUniformLocationIntegerValue);
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              var program = this.getProgram();
              canvas.useProgram(program);
              this.bindBuffers(canvas);
              var renderer = this;
              canvas.render(renderer, offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
              var rendererData = this.getRendererData(), count = rendererData.getCount(), index = 0, start = 0, finish = count;
              this.useTexture(index, canvas);
              canvas.drawElements(start, finish);
            }
          }
        ], [
          {
            key: "fromImageMapAndImageMapJSON",
            value: function fromImageMapAndImageMapJSON(imageMap, imageMapJSON, canvas) {
              var image = imageMap, index = 0, repeat = false;
              canvas.createTexture(image, index, repeat);
              var imageMapTextureRenderer = _texture.default.fromNothing(ImageMapTextureRenderer2, canvas, imageMapJSON);
              return imageMapTextureRenderer;
            }
          }
        ]);
        return ImageMapTextureRenderer2;
      }(_texture.default);
      exports.default = ImageMapTextureRenderer;
    }
  });

  // lib/element/part.js
  var require_part = __commonJS({
    "lib/element/part.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _mask = _interopRequireDefault2(require_mask());
      var _element = _interopRequireDefault2(require_element());
      var _colour = _interopRequireDefault2(require_colour4());
      var _images = _interopRequireDefault2(require_images());
      var _imageMap = _interopRequireDefault2(require_imageMap());
      var _element1 = require_element2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var Part = /* @__PURE__ */ function(Element) {
        _inherits(Part2, Element);
        var _super = _createSuper(Part2);
        function Part2(images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer) {
          _classCallCheck(this, Part2);
          var _this;
          _this = _super.call(this);
          _this.images = images;
          _this.imageMap = imageMap;
          _this.imageNames = imageNames;
          _this.imageTiling = imageTiling;
          _this.imageMapJSON = imageMapJSON;
          _this.colourRenderer = colourRenderer;
          _this.textureRenderer = textureRenderer;
          return _this;
        }
        _createClass(Part2, [
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var colourRenderer = _colour.default.fromNothing(canvas), childElements = this.getChildElements(), masks = (0, _element1).elementsFromChildElements(childElements, _mask.default);
              var textureRenderer = null;
              if (this.images !== null) {
                var imagesTextureRenderer = _images.default.fromImagesImageNamesAndImageTiling(this.images, this.imageNames, this.imageTiling, canvas);
                textureRenderer = imagesTextureRenderer;
              }
              if (this.imageMap !== null) {
                var imageMapTextureRenderer = _imageMap.default.fromImageMapAndImageMapJSON(this.imageMap, this.imageMapJSON, canvas);
                textureRenderer = imageMapTextureRenderer;
              }
              childElements.forEach(function(childElement) {
                return childElement.createFacets(marginOfError);
              });
              childElements.forEach(function(childElement) {
                return childElement.maskFacets(masks, marginOfError);
              });
              childElements.forEach(function(childElement) {
                return childElement.addFacets(colourRenderer, textureRenderer);
              });
              if (colourRenderer !== null) {
                colourRenderer.createBuffers(canvas);
              }
              if (textureRenderer !== null) {
                textureRenderer.createBuffers(canvas);
              }
              this.colourRenderer = colourRenderer;
              this.textureRenderer = textureRenderer;
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas) {
              this.colourRenderer && this.colourRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
              this.textureRenderer && this.textureRenderer.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, canvas);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _images1 = properties.images, images = _images1 === void 0 ? null : _images1, _imageMap1 = properties.imageMap, imageMap = _imageMap1 === void 0 ? null : _imageMap1, _imageNames = properties.imageNames, imageNames = _imageNames === void 0 ? null : _imageNames, _imageTiling = properties.imageTiling, imageTiling = _imageTiling === void 0 ? false : _imageTiling, _imageMapJSON = properties.imageMapJSON, imageMapJSON = _imageMapJSON === void 0 ? null : _imageMapJSON, colourRenderer = null, textureRenderer = null, part = _element.default.fromProperties(Part2, properties, images, imageMap, imageNames, imageTiling, imageMapJSON, colourRenderer, textureRenderer);
              return part;
            }
          }
        ]);
        return Part2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Part;
    }
  });

  // lib/element/camera.js
  var require_camera = __commonJS({
    "lib/element/camera.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _element = _interopRequireDefault2(require_element());
      var _constants = require_constants();
      var _defaults = require_defaults();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var Camera = /* @__PURE__ */ function(Element) {
        _inherits(Camera2, Element);
        var _super = _createSuper(Camera2);
        function Camera2(zFar, zNear, fieldOfView) {
          _classCallCheck(this, Camera2);
          var _this;
          _this = _super.call(this);
          _this.zFar = zFar;
          _this.zNear = zNear;
          _this.fieldOfView = fieldOfView;
          return _this;
        }
        _createClass(Camera2, [
          {
            key: "getZFar",
            value: function getZFar() {
              return this.zFar;
            }
          },
          {
            key: "getZNear",
            value: function getZNear() {
              return this.zNear;
            }
          },
          {
            key: "getFieldOfView",
            value: function getFieldOfView() {
              return this.fieldOfView;
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                remainingArguments[_key - 2] = arguments[_key];
              }
              var _Element;
              var _fieldOfView = properties.fieldOfView, fieldOfView = _fieldOfView === void 0 ? _defaults.DEFAULT_FIELD_OF_VIEW : _fieldOfView;
              fieldOfView *= _constants.DEGREES_TO_RADIANS_MULTIPLIER;
              var _zFar = properties.zFar, zFar = _zFar === void 0 ? _defaults.DEFAULT_Z_FAR : _zFar, _zNear = properties.zNear, zNear = _zNear === void 0 ? _defaults.DEFAULT_Z_NEAR : _zNear, camera = (_Element = _element.default).fromProperties.apply(_Element, [
                Class,
                properties,
                zFar,
                zNear,
                fieldOfView
              ].concat(_toConsumableArray(remainingArguments)));
              return camera;
            }
          }
        ]);
        return Camera2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Camera;
    }
  });

  // lib/eventTypes.js
  var require_eventTypes = __commonJS({
    "lib/eventTypes.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MOUSEMOVE_EVENT_TYPE = exports.MOUSEDOWN_EVENT_TYPE = exports.MOUSEUP_EVENT_TYPE = exports.KEYDOWN_EVENT_TYPE = exports.KEYUP_EVENT_TYPE = exports.WHEEL_EVENT_TYPE = void 0;
      var WHEEL_EVENT_TYPE = "wheel";
      exports.WHEEL_EVENT_TYPE = WHEEL_EVENT_TYPE;
      var KEYUP_EVENT_TYPE = "keyup";
      exports.KEYUP_EVENT_TYPE = KEYUP_EVENT_TYPE;
      var KEYDOWN_EVENT_TYPE = "keydown";
      exports.KEYDOWN_EVENT_TYPE = KEYDOWN_EVENT_TYPE;
      var MOUSEUP_EVENT_TYPE = "mouseup";
      exports.MOUSEUP_EVENT_TYPE = MOUSEUP_EVENT_TYPE;
      var MOUSEDOWN_EVENT_TYPE = "mousedown";
      exports.MOUSEDOWN_EVENT_TYPE = MOUSEDOWN_EVENT_TYPE;
      var MOUSEMOVE_EVENT_TYPE = "mousemove";
      exports.MOUSEMOVE_EVENT_TYPE = MOUSEMOVE_EVENT_TYPE;
    }
  });

  // lib/miscellaneous/keyEvents.js
  var require_keyEvents = __commonJS({
    "lib/miscellaneous/keyEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _necessary = require_browser();
      var _eventTypes = require_eventTypes();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var ESCAPE_KEY_CODE = _necessary.keyCodes.ESCAPE_KEY_CODE;
      var SHIFT_KEY_CODE = _necessary.keyCodes.SHIFT_KEY_CODE;
      var KeyEvents = /* @__PURE__ */ function() {
        function KeyEvents2(handlers, shiftKeyDown) {
          _classCallCheck(this, KeyEvents2);
          this.handlers = handlers;
          this.shiftKeyDown = shiftKeyDown;
        }
        _createClass(KeyEvents2, [
          {
            key: "isShiftKeyDown",
            value: function isShiftKeyDown() {
              return this.shiftKeyDown;
            }
          },
          {
            key: "keyUpEventListener",
            value: function keyUpEventListener(event) {
              var keyCode = event.keyCode;
              if (keyCode === SHIFT_KEY_CODE) {
                var _this = this;
                this.shiftKeyDown = false;
                this.handlers.forEach(function(handler) {
                  return handler(_this.shiftKeyDown);
                });
              }
            }
          },
          {
            key: "keyDownEventListener",
            value: function keyDownEventListener(event) {
              var keyCode = event.keyCode;
              if (keyCode === SHIFT_KEY_CODE) {
                var _this = this;
                this.shiftKeyDown = true;
                this.handlers.forEach(function(handler) {
                  return handler(_this.shiftKeyDown);
                });
              }
            }
          },
          {
            key: "addShiftKeyHandler",
            value: function addShiftKeyHandler(shiftKeyHandler) {
              var handler = shiftKeyHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              var documentDOMElement = document.documentElement;
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, function(event) {
                var keyCode = event.keyCode;
                if (keyCode === ESCAPE_KEY_CODE) {
                  escapeKeyDownHandler();
                }
              });
            }
          },
          {
            key: "initialise",
            value: function initialise() {
              var documentDOMElement = document.documentElement, keyUpEventListener = this.keyUpEventListener.bind(this), keyDownEventListener = this.keyDownEventListener.bind(this);
              documentDOMElement.addEventListener(_eventTypes.KEYUP_EVENT_TYPE, keyUpEventListener);
              documentDOMElement.addEventListener(_eventTypes.KEYDOWN_EVENT_TYPE, keyDownEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], shiftKeyDown = false, keyEvents = new KeyEvents2(handlers, shiftKeyDown);
              return keyEvents;
            }
          }
        ]);
        return KeyEvents2;
      }();
      exports.default = KeyEvents;
    }
  });

  // lib/miscellaneous/mouseEvents.js
  var require_mouseEvents = __commonJS({
    "lib/miscellaneous/mouseEvents.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _eventTypes = require_eventTypes();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var MouseEvents = /* @__PURE__ */ function() {
        function MouseEvents2(handlersMap, mouseDown) {
          _classCallCheck(this, MouseEvents2);
          this.handlersMap = handlersMap;
          this.mouseDown = mouseDown;
        }
        _createClass(MouseEvents2, [
          {
            key: "wheelEventListener",
            value: function wheelEventListener(event) {
              var handlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE], mouseWheelDelta = mouseWheelDeltaFromEvent(event);
              handlers.forEach(function(handler) {
                return handler(mouseWheelDelta);
              });
              event.preventDefault();
            }
          },
          {
            key: "mouseEventListener",
            value: function mouseEventListener(event, eventType) {
              var _this = this;
              var handlers = this.handlersMap[eventType], mouseCoordinates = mouseCoordinatesFromEvent(event);
              handlers.forEach(function(handler) {
                return handler(mouseCoordinates, _this.mouseDown);
              });
              event.preventDefault();
            }
          },
          {
            key: "mouseUpEventListener",
            value: function mouseUpEventListener(event) {
              this.mouseDown = false;
              this.mouseEventListener(event, _eventTypes.MOUSEUP_EVENT_TYPE);
            }
          },
          {
            key: "mouseDownEventListener",
            value: function mouseDownEventListener(event) {
              this.mouseDown = true;
              this.mouseEventListener(event, _eventTypes.MOUSEDOWN_EVENT_TYPE);
            }
          },
          {
            key: "mouseMoveEventListener",
            value: function mouseMoveEventListener(event) {
              this.mouseEventListener(event, _eventTypes.MOUSEMOVE_EVENT_TYPE);
            }
          },
          {
            key: "addMouseUpHandler",
            value: function addMouseUpHandler(mouseUpHandler) {
              var mouseUpHandlers = this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE];
              mouseUpHandlers.push(mouseUpHandler);
            }
          },
          {
            key: "addMouseDownHandler",
            value: function addMouseDownHandler(mouseDownHandler) {
              var mouseDownHandlers = this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE];
              mouseDownHandlers.push(mouseDownHandler);
            }
          },
          {
            key: "addMouseMoveHandler",
            value: function addMouseMoveHandler(mouseMoveHandler) {
              var mouseMoveHandlers = this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE];
              mouseMoveHandlers.push(mouseMoveHandler);
            }
          },
          {
            key: "addMouseWheelHandler",
            value: function addMouseWheelHandler(mouseWheelHandler) {
              var mouseWheelHandlers = this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE];
              mouseWheelHandlers.push(mouseWheelHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var canvasDOMElement = canvas.getDOMElement(), wheelEventListener = this.wheelEventListener.bind(this), mouseUpEventListener = this.mouseUpEventListener.bind(this), mouseDownEventListener = this.mouseDownEventListener.bind(this), mouseMoveEventListener = this.mouseMoveEventListener.bind(this);
              this.handlersMap[_eventTypes.WHEEL_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEUP_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEDOWN_EVENT_TYPE] = [];
              this.handlersMap[_eventTypes.MOUSEMOVE_EVENT_TYPE] = [];
              canvasDOMElement.addEventListener(_eventTypes.WHEEL_EVENT_TYPE, wheelEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEUP_EVENT_TYPE, mouseUpEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEDOWN_EVENT_TYPE, mouseDownEventListener);
              canvasDOMElement.addEventListener(_eventTypes.MOUSEMOVE_EVENT_TYPE, mouseMoveEventListener);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlersMap = {}, mouseDown = false, mouseEvents = new MouseEvents2(handlersMap, mouseDown);
              return mouseEvents;
            }
          }
        ]);
        return MouseEvents2;
      }();
      exports.default = MouseEvents;
      var count = 0;
      function mouseWheelDeltaFromEvent(event) {
        var wheelDelta = event.wheelDelta, mouseWheelDelta = Math.max(-1, Math.min(1, wheelDelta));
        console.log(count++);
        return mouseWheelDelta;
      }
      function mouseCoordinatesFromEvent(event) {
        var target = event.target, clientX = event.clientX, clientY = event.clientY, canvasDOMElement = target, boundingClientRect = canvasDOMElement.getBoundingClientRect(), top = boundingClientRect.top, left = boundingClientRect.left, mouseCoordinates = [
          clientX - left,
          top - clientY
        ];
        return mouseCoordinates;
      }
    }
  });

  // lib/miscellaneous/userInput.js
  var require_userInput = __commonJS({
    "lib/miscellaneous/userInput.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _keyEvents = _interopRequireDefault2(require_keyEvents());
      var _mouseEvents = _interopRequireDefault2(require_mouseEvents());
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var UserInput = /* @__PURE__ */ function() {
        function UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates) {
          _classCallCheck(this, UserInput2);
          this.handlers = handlers;
          this.keyEvents = keyEvents;
          this.mouseEvents = mouseEvents;
          this.mouseCoordinates = mouseCoordinates;
          this.previousMouseCoordinates = previousMouseCoordinates;
        }
        _createClass(UserInput2, [
          {
            key: "mouseMoveHandler",
            value: function mouseMoveHandler(mouseCoordinates, mouseDown, canvas) {
              this.previousMouseCoordinates = this.mouseCoordinates;
              this.mouseCoordinates = mouseCoordinates;
              if (this.previousMouseCoordinates === null) {
                return;
              }
              if (mouseDown) {
                var mouseWheelDelta = 0, shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).subtract2(this.mouseCoordinates, this.previousMouseCoordinates);
                this.handlers.forEach(function(handler) {
                  return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
                });
              }
            }
          },
          {
            key: "mouseWheelHandler",
            value: function mouseWheelHandler(mouseWheelDelta, canvas) {
              var shiftKeyDown = this.keyEvents.isShiftKeyDown(), relativeMouseCoordinates = (0, _vector).zero2();
              this.handlers.forEach(function(handler) {
                return handler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
              });
            }
          },
          {
            key: "addUserInputHandler",
            value: function addUserInputHandler(userInputHandler) {
              var handler = userInputHandler;
              this.handlers.push(handler);
            }
          },
          {
            key: "addEscapeKeyDownHandler",
            value: function addEscapeKeyDownHandler(escapeKeyDownHandler) {
              this.keyEvents.addEscapeKeyDownHandler(escapeKeyDownHandler);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas) {
              var mouseMoveHandler = this.mouseMoveHandler.bind(this), mouseWheelHandler = this.mouseWheelHandler.bind(this);
              this.keyEvents.initialise();
              this.mouseEvents.initialise(canvas);
              this.mouseEvents.addMouseMoveHandler(mouseMoveHandler);
              this.mouseEvents.addMouseWheelHandler(mouseWheelHandler);
            }
          }
        ], [
          {
            key: "fromNothing",
            value: function fromNothing() {
              var handlers = [], keyEvents = _keyEvents.default.fromNothing(), mouseEvents = _mouseEvents.default.fromNothing(), mouseCoordinates = null, previousMouseCoordinates = null, userInput = new UserInput2(handlers, keyEvents, mouseEvents, mouseCoordinates, previousMouseCoordinates);
              return userInput;
            }
          }
        ]);
        return UserInput2;
      }();
      exports.default = UserInput;
    }
  });

  // lib/element/scene.js
  var require_scene = __commonJS({
    "lib/element/scene.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _part = _interopRequireDefault2(require_part());
      var _camera = _interopRequireDefault2(require_camera());
      var _element = _interopRequireDefault2(require_element());
      var _userInput = _interopRequireDefault2(require_userInput());
      var _vector = require_vector();
      var _defaults = require_defaults();
      var _element1 = require_element2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _construct(Parent, args, Class) {
        if (isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct2(Parent2, args2, Class2) {
            var a = [
              null
            ];
            a.push.apply(a, args2);
            var Constructor = Function.bind.apply(Parent2, a);
            var instance = new Constructor();
            if (Class2)
              _setPrototypeOf(instance, Class2.prototype);
            return instance;
          };
        }
        return _construct.apply(null, arguments);
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : void 0;
        _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
          if (Class2 === null || !_isNativeFunction(Class2))
            return Class2;
          if (typeof Class2 !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }
          if (typeof _cache !== "undefined") {
            if (_cache.has(Class2))
              return _cache.get(Class2);
            _cache.set(Class2, Wrapper);
          }
          function Wrapper() {
            return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
          }
          Wrapper.prototype = Object.create(Class2.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class2);
        };
        return _wrapNativeSuper(Class);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var Scene = /* @__PURE__ */ function(Element) {
        _inherits(Scene2, Element);
        var _super = _createSuper(Scene2);
        function Scene2(parts, camera, canvas) {
          _classCallCheck(this, Scene2);
          var _this;
          _this = _super.call(this);
          _this.parts = parts;
          _this.camera = camera;
          _this.canvas = canvas;
          return _this;
        }
        _createClass(Scene2, [
          {
            key: "escapeKeyDownHandler",
            value: function escapeKeyDownHandler() {
              this.camera.reset();
              this.windowResizeHandler();
            }
          },
          {
            key: "windowResizeHandler",
            value: function windowResizeHandler() {
              var clientWidth = this.canvas.getClientWidth(), clientHeight = this.canvas.getClientHeight(), width = clientWidth, height = clientHeight;
              this.canvas.resize(width, height);
              var relativeMouseCoordinates = (0, _vector).zero2(), mouseWheelDelta = 0, shiftKeyDown = false;
              this.userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown);
            }
          },
          {
            key: "userInputHandler",
            value: function userInputHandler(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown) {
              var render = this.render.bind(this);
              this.camera.update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, this.canvas, render);
            }
          },
          {
            key: "initialise",
            value: function initialise(canvas, marginOfError) {
              var userInput = _userInput.default.fromNothing(), userInputHandler = this.userInputHandler.bind(this), windowResizeHandler = this.windowResizeHandler.bind(this), escapeKeyDownHandler = this.escapeKeyDownHandler.bind(this);
              this.parts.forEach(function(part) {
                return part.initialise(canvas, marginOfError);
              });
              userInput.initialise(canvas);
              userInput.addUserInputHandler(userInputHandler);
              userInput.addEscapeKeyDownHandler(escapeKeyDownHandler);
              window.onresize = windowResizeHandler;
              this.windowResizeHandler();
            }
          },
          {
            key: "render",
            value: function render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix) {
              var _this = this;
              this.canvas.clear();
              this.parts.forEach(function(part) {
                return part.render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix, _this.canvas);
              });
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var canvas = properties.canvas, context = properties.context, childElements = properties.childElements, parts = (0, _element1).elementsFromChildElements(childElements, _part.default), camera = (0, _element1).elementFromChildElements(childElements, _camera.default), scene = _element.default.fromProperties(Scene2, properties, parts, camera, canvas), marginOfError = _defaults.DEFAULT_MARGIN_OF_ERROR;
              scene.initialise(canvas, marginOfError);
              return scene;
            }
          }
        ]);
        return Scene2;
      }(_wrapNativeSuper(_element.default));
      exports.default = Scene;
    }
  });

  // lib/utilities/offsets.js
  var require_offsets = __commonJS({
    "lib/utilities/offsets.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.relativeOffsetsFromAnglesAndDirections = relativeOffsetsFromAnglesAndDirections;
      var _matrix = require_matrix2();
      var _vector = require_vector();
      function relativeOffsetsFromAnglesAndDirections(angles, directions) {
        angles = (0, _vector).reflect3(angles);
        var reverseOrder = true, rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles, reverseOrder);
        var relativeOffsets = (0, _vector).transform4(directions, rotationsMatrix);
        relativeOffsets = (0, _vector).truncate4(relativeOffsets);
        return relativeOffsets;
      }
    }
  });

  // lib/miscellaneous/pan.js
  var require_pan = __commonJS({
    "lib/miscellaneous/pan.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _vector = require_vector();
      var _offsets = require_offsets();
      var _constants = require_constants();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var Pan = /* @__PURE__ */ function() {
        function Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier) {
          _classCallCheck(this, Pan2);
          this.offsets = offsets;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
          this.relativeMouseCoordinatesMultiplier = relativeMouseCoordinatesMultiplier;
        }
        _createClass(Pan2, [
          {
            key: "getOffsets",
            value: function getOffsets() {
              return this.offsets;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "getRelativeMouseCoordinatesMultiplier",
            value: function getRelativeMouseCoordinatesMultiplier() {
              return this.relativeMouseCoordinatesMultiplier;
            }
          },
          {
            key: "updateOffsets",
            value: function updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, this.relativeMouseCoordinatesMultiplier);
              var scaledReflectedRelativeMouseCoordinates = (0, _vector).reflect2((0, _vector).scale2(relativeMouseCoordinates, 1)), directions = _toConsumableArray(scaledReflectedRelativeMouseCoordinates).concat([
                mouseWheelDelta,
                0
              ]), relativeOffsets = (0, _offsets).relativeOffsetsFromAnglesAndDirections(angles, directions, 1);
              this.offsets = (0, _vector).add3(this.offsets, relativeOffsets);
            }
          }
        ], [
          {
            key: "fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity",
            value: function fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity) {
              var offsets = initialOffsets, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, relativeMouseCoordinatesMultiplier = _constants.RELATIVE_MOUSE_COORDINATES_MULTIPLIER * mouseSensitivity, pan = new Pan2(offsets, mouseWheelDeltaMultiplier, relativeMouseCoordinatesMultiplier);
              return pan;
            }
          }
        ]);
        return Pan2;
      }();
      exports.default = Pan;
    }
  });

  // lib/miscellaneous/tilt.js
  var require_tilt = __commonJS({
    "lib/miscellaneous/tilt.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      var _vector = require_vector();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      var Tilt = /* @__PURE__ */ function() {
        function Tilt2(angles, clockwise) {
          _classCallCheck(this, Tilt2);
          this.angles = angles;
          this.clockwise = clockwise;
        }
        _createClass(Tilt2, [
          {
            key: "getAngles",
            value: function getAngles() {
              return this.angles;
            }
          },
          {
            key: "isClockwise",
            value: function isClockwise() {
              return this.clockwise;
            }
          },
          {
            key: "updateAngles",
            value: function updateAngles(relativeMouseCoordinates) {
              relativeMouseCoordinates = (0, _vector).scale2(relativeMouseCoordinates, _constants.ANGLES_MULTIPLIER);
              var multiplier = this.clockwise ? 1 : -1, matrix = [
                0,
                +multiplier,
                0,
                -multiplier,
                0,
                0,
                0,
                0,
                0
              ], relativeAngles = (0, _vector).transform3(_toConsumableArray(relativeMouseCoordinates).concat([
                0
              ]), matrix);
              this.angles = (0, _vector).add3(this.angles, relativeAngles);
            }
          }
        ], [
          {
            key: "fromInitialAngles",
            value: function fromInitialAngles(initialAngles) {
              var angles = _toConsumableArray(initialAngles).concat([
                0
              ]), clockwise = false, tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          },
          {
            key: "fromInitialAnglesAndClockwise",
            value: function fromInitialAnglesAndClockwise(initialAngles, clockwise) {
              var angles = _toConsumableArray(initialAngles).concat([
                0
              ]), tilt = new Tilt2(angles, clockwise);
              return tilt;
            }
          }
        ]);
        return Tilt2;
      }();
      exports.default = Tilt;
    }
  });

  // lib/utilities/localStorage.js
  var require_localStorage = __commonJS({
    "lib/utilities/localStorage.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getJSON = getJSON;
      exports.setJSON = setJSON;
      exports.removeJSON = removeJSON;
      function getJSON(key) {
        var json = null;
        var value = get(key);
        if (value !== null) {
          json = JSON.parse(value);
        }
        return json;
      }
      function setJSON(key, json) {
        var value = JSON.stringify(json);
        set(key, value);
      }
      function removeJSON(key) {
        remove(key);
      }
      function get(kay) {
        var value = localStorage.getItem(kay) || null;
        return value;
      }
      function set(kay, value) {
        localStorage.setItem(kay, value);
      }
      function remove(key) {
        localStorage.removeItem(key);
      }
    }
  });

  // lib/element/camera/gaming.js
  var require_gaming = __commonJS({
    "lib/element/camera/gaming.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _pan = _interopRequireDefault2(require_pan());
      var _tilt = _interopRequireDefault2(require_tilt());
      var _camera = _interopRequireDefault2(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var GamingCamera = /* @__PURE__ */ function(Camera) {
        _inherits(GamingCamera2, Camera);
        var _super = _createSuper(GamingCamera2);
        function GamingCamera2(zFar, zNear, fieldOfView, pan, tilt, persist) {
          _classCallCheck(this, GamingCamera2);
          var _this;
          _this = _super.call(this, zFar, zNear, fieldOfView);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.persist = persist;
          return _this;
        }
        _createClass(GamingCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.GAMING_CAMERA;
              (0, _localStorage).removeJSON(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown || mouseWheelMoved) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets();
              if (persist) {
                var key = _constants.GAMING_CAMERA, angles2 = this.tilt.getAngles(), json = {
                  angles: angles2,
                  offsets
                };
                (0, _localStorage).setJSON(key, json);
              }
              var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromNothing(), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles1), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), gamingCamera = _camera.default.fromProperties(GamingCamera2, properties, pan, tilt, persist);
              return gamingCamera;
            }
          }
        ]);
        return GamingCamera2;
      }(_camera.default);
      exports.default = GamingCamera;
      function panFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
        var _initialPosition = properties.initialPosition, initialPosition = _initialPosition === void 0 ? _defaults.DEFAULT_INITIAL_POSITION : _initialPosition;
        var initialOffsets = (0, _vector).scale3(initialPosition, _constants.INVERT_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
        var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
        initialAngles = (0, _vector).scale2(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.GAMING_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var clockwise = true, tilt = _tilt.default.fromInitialAnglesAndClockwise(initialAngles, clockwise);
        return tilt;
      }
    }
  });

  // lib/miscellaneous/zoom.js
  var require_zoom = __commonJS({
    "lib/miscellaneous/zoom.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _constants = require_constants();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Zoom = /* @__PURE__ */ function() {
        function Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier) {
          _classCallCheck(this, Zoom2);
          this.distance = distance;
          this.minimumDistance = minimumDistance;
          this.mouseWheelDeltaMultiplier = mouseWheelDeltaMultiplier;
        }
        _createClass(Zoom2, [
          {
            key: "getDistance",
            value: function getDistance() {
              return this.distance;
            }
          },
          {
            key: "getMinimumDistance",
            value: function getMinimumDistance() {
              return this.minimumDistance;
            }
          },
          {
            key: "getDeltaMultiplier",
            value: function getDeltaMultiplier() {
              return this.mouseWheelDeltaMultiplier;
            }
          },
          {
            key: "updateDistance",
            value: function updateDistance(mouseWheelDelta) {
              mouseWheelDelta = mouseWheelDelta * this.mouseWheelDeltaMultiplier;
              this.distance = this.distance - mouseWheelDelta;
              this.distance = Math.max(this.minimumDistance, this.distance);
            }
          }
        ], [
          {
            key: "fromInitialDistanceAndMouseWheelSensitivity",
            value: function fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity) {
              var distance = initialDistance, minimumDistance = _constants.MINIMUM_DISTANCE, mouseWheelDeltaMultiplier = _constants.MOUSE_WHEEL_DELTA_MULTIPLIER * mouseWheelSensitivity, zoom = new Zoom2(distance, minimumDistance, mouseWheelDeltaMultiplier);
              return zoom;
            }
          }
        ]);
        return Zoom2;
      }();
      exports.default = Zoom;
    }
  });

  // lib/element/camera/design.js
  var require_design = __commonJS({
    "lib/element/camera/design.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _pan = _interopRequireDefault2(require_pan());
      var _tilt = _interopRequireDefault2(require_tilt());
      var _zoom = _interopRequireDefault2(require_zoom());
      var _camera = _interopRequireDefault2(require_camera());
      var _vector = require_vector();
      var _localStorage = require_localStorage();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var _matrix = require_matrix2();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var DesignCamera = /* @__PURE__ */ function(Camera) {
        _inherits(DesignCamera2, Camera);
        var _super = _createSuper(DesignCamera2);
        function DesignCamera2(zFar, zNear, fieldOfView, pan, tilt, zoom, persist) {
          _classCallCheck(this, DesignCamera2);
          var _this;
          _this = _super.call(this, zFar, zNear, fieldOfView);
          _this.pan = pan;
          _this.tilt = tilt;
          _this.zoom = zoom;
          _this.persist = persist;
          return _this;
        }
        _createClass(DesignCamera2, [
          {
            key: "getPan",
            value: function getPan() {
              return this.pan;
            }
          },
          {
            key: "getTilt",
            value: function getTilt() {
              return this.tilt;
            }
          },
          {
            key: "getZoom",
            value: function getZoom() {
              return this.zoom;
            }
          },
          {
            key: "doesPersist",
            value: function doesPersist() {
              return this.persist;
            }
          },
          {
            key: "reset",
            value: function reset() {
              var key = _constants.DESIGN_CAMERA;
              (0, _localStorage).removeJSON(key);
              this.pan = panFromProperties(this.properties);
              this.tilt = tiltFromProperties(this.properties);
              this.zoom = zoomFromProperties(this.properties);
            }
          },
          {
            key: "update",
            value: function update(relativeMouseCoordinates, mouseWheelDelta, shiftKeyDown, canvas, render) {
              var mouseWheelMoved = mouseWheelDelta !== 0;
              if (false) {
              } else if (shiftKeyDown) {
                var angles = this.tilt.getAngles();
                this.pan.updateOffsets(relativeMouseCoordinates, mouseWheelDelta, angles);
              } else if (mouseWheelMoved) {
                this.zoom.updateDistance(mouseWheelDelta);
              } else {
                this.tilt.updateAngles(relativeMouseCoordinates);
              }
              var camera = this, angles1 = this.tilt.getAngles(), persist = this.doesPersist(), offsets = this.pan.getOffsets(), distance = this.zoom.getDistance();
              if (persist) {
                var key = _constants.DESIGN_CAMERA, json = {
                  angles: angles1,
                  offsets,
                  distance
                };
                (0, _localStorage).setJSON(key, json);
              }
              var offsetsMatrix = (0, _matrix).offsetsMatrixFromOffsets(offsets), positionMatrix = (0, _matrix).positionMatrixFromDistance(distance), rotationsMatrix = (0, _matrix).rotationsMatrixFromAngles(angles1), projectionMatrix = (0, _matrix).projectionMatrixFromCameraAndCanvas(camera, canvas), normalsMatrix = (0, _matrix).normalsMatrixFromRotationsMatrix(rotationsMatrix);
              render(offsetsMatrix, normalsMatrix, positionMatrix, rotationsMatrix, projectionMatrix);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, pan = panFromProperties(properties), tilt = tiltFromProperties(properties), zoom = zoomFromProperties(properties), designCamera = _camera.default.fromProperties(DesignCamera2, properties, pan, tilt, zoom, persist);
              return designCamera;
            }
          }
        ]);
        return DesignCamera2;
      }(_camera.default);
      exports.default = DesignCamera;
      function panFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseSensitivity = properties.mouseSensitivity, mouseSensitivity = _mouseSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_SENSITIVITY : _mouseSensitivity, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
        var _initialOffsets = properties.initialOffsets, initialOffsets = _initialOffsets === void 0 ? _defaults.DEFAULT_INITIAL_OFFSETS : _initialOffsets;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var offsets = json.offsets;
            initialOffsets = offsets;
          }
        }
        var pan = _pan.default.fromInitialOffsetsMouseSensitivityAndMouseWheelSensitivity(initialOffsets, mouseSensitivity, mouseWheelSensitivity);
        return pan;
      }
      function tiltFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist;
        var _initialAngles = properties.initialAngles, initialAngles = _initialAngles === void 0 ? _defaults.DEFAULT_INITIAL_ANGLES : _initialAngles;
        initialAngles = (0, _vector).scale2(initialAngles, _constants.DEGREES_TO_RADIANS_MULTIPLIER);
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var angles = json.angles;
            initialAngles = angles;
          }
        }
        var tilt = _tilt.default.fromInitialAngles(initialAngles);
        return tilt;
      }
      function zoomFromProperties(properties) {
        var _persist = properties.persist, persist = _persist === void 0 ? _defaults.DEFAULT_PERSIST : _persist, _mouseWheelSensitivity = properties.mouseWheelSensitivity, mouseWheelSensitivity = _mouseWheelSensitivity === void 0 ? _defaults.DEFAULT_MOUSE_WHEEL_SENSITIVITY : _mouseWheelSensitivity;
        var _initialDistance = properties.initialDistance, initialDistance = _initialDistance === void 0 ? _defaults.DEFAULT_INITIAL_DISTANCE : _initialDistance;
        if (persist) {
          var key = _constants.DESIGN_CAMERA, json = (0, _localStorage).getJSON(key);
          if (json !== null) {
            var distance = json.distance;
            initialDistance = distance;
          }
        }
        var zoom = _zoom.default.fromInitialDistanceAndMouseWheelSensitivity(initialDistance, mouseWheelSensitivity);
        return zoom;
      }
    }
  });

  // lib/utilities/preload.js
  var require_preload = __commonJS({
    "lib/utilities/preload.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.preloadImages = preloadImages;
      exports.preloadImageMap = preloadImageMap;
      exports.default = void 0;
      var _necessary = require_browser();
      var _constants = require_constants();
      var _defaults = require_defaults();
      var forEach = _necessary.asynchronousUtilities.forEach;
      function preloadImages(callback) {
        var configuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.__configuration__;
        var done = function done2() {
          var images = context.images;
          callback(images, imageNames);
        };
        var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageNames = configuration.imageNames, imageDirectoryURI = configuration.imageDirectoryURI, images1 = [], context = {
          images: images1
        };
        forEach(imageNames, function(imageName, next, done2, context2) {
          var onload = function onload2() {
            images1.push(image);
            next();
          };
          var src = "".concat(host).concat(imageDirectoryURI, "/").concat(imageName), image = new Image(), crossOrigin = _constants.ANONYMOUS;
          Object.assign(image, {
            src,
            onload,
            crossOrigin
          });
        }, done, context);
      }
      function preloadImageMap(callback) {
        var configuration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.__configuration__;
        var onload = function onload2(event) {
          callback(imageMap, imageMapJSON);
        };
        var _host = configuration.host, host = _host === void 0 ? _defaults.DEFAULT_HOST : _host, imageMapURI = configuration.imageMapURI, imageMapJSON = configuration.imageMapJSON, src = "".concat(host).concat(imageMapURI), imageMap = new Image(), crossOrigin = _constants.ANONYMOUS;
        Object.assign(imageMap, {
          src,
          onload,
          crossOrigin
        });
      }
      var _default = {
        preloadImages,
        preloadImageMap
      };
      exports.default = _default;
    }
  });

  // lib/primitive/normal.js
  var require_normal = __commonJS({
    "lib/primitive/normal.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _array = require_array2();
      var _vector = require_vector();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Normal = /* @__PURE__ */ function() {
        function Normal2(extent) {
          _classCallCheck(this, Normal2);
          this.extent = extent;
        }
        _createClass(Normal2, [
          {
            key: "getExtent",
            value: function getExtent() {
              return this.extent;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var extent = cloneExtent(this.extent), normal = new Normal2(extent);
              return normal;
            }
          }
        ], [
          {
            key: "fromVertices",
            value: function fromVertices(vertices) {
              var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstPosition = firstVertex.getPosition(), secondPosition = secondVertex.getPosition(), thirdPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondPosition, firstPosition), secondExtent = (0, _vector).subtract3(thirdPosition, firstPosition), extent = (0, _vector).normalise3((0, _vector).cross3(firstExtent, secondExtent)), normal = new Normal2(extent);
              return normal;
            }
          }
        ]);
        return Normal2;
      }();
      exports.default = Normal;
      function cloneExtent(extent) {
        return extent.slice();
      }
    }
  });

  // lib/primitive/vertex.js
  var require_vertex = __commonJS({
    "lib/primitive/vertex.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _rotation = require_rotation();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var Vertex = /* @__PURE__ */ function() {
        function Vertex2(position) {
          _classCallCheck(this, Vertex2);
          this.position = position;
        }
        _createClass(Vertex2, [
          {
            key: "getPosition",
            value: function getPosition() {
              return this.position;
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.position = (0, _rotation).rotatePosition(this.position, rotationQuaternion);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.position = transform(this.position);
            }
          },
          {
            key: "clone",
            value: function clone() {
              var position = this.position.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ], [
          {
            key: "fromPosition",
            value: function fromPosition(position) {
              var vertex = new Vertex2(position);
              return vertex;
            }
          },
          {
            key: "fromCoordinateTuple",
            value: function fromCoordinateTuple(coordinateTuple) {
              var position = coordinateTuple.slice(), vertex = new Vertex2(position);
              return vertex;
            }
          }
        ]);
        return Vertex2;
      }();
      exports.default = Vertex;
    }
  });

  // lib/utilities/facet.js
  var require_facet = __commonJS({
    "lib/utilities/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cloneEdges = cloneEdges;
      exports.cloneNormal = cloneNormal;
      exports.cloneVertices = cloneVertices;
      exports.calculateEdges = calculateEdges;
      exports.calculateNormal = calculateNormal;
      exports.calculateArea = calculateArea;
      var _constants = require_constants();
      var _array = require_array2();
      var _vector = require_vector();
      function cloneEdges(edges) {
        edges = edges.map(function(edge) {
          return edge.clone();
        });
        return edges;
      }
      function cloneNormal(normal) {
        normal = normal.clone();
        return normal;
      }
      function cloneVertices(vertices) {
        vertices = vertices.map(function(vertex) {
          return vertex.clone();
        });
        return vertices;
      }
      function calculateEdges(vertices, Edge) {
        var edges = vertices.map(function(vertex, index) {
          var startIndex = index, endIndex = (startIndex + 1) % _constants.VERTICES_LENGTH, startVertex = vertices[startIndex], endVertex = vertices[endIndex], edge = Edge.fromStartVertexAndEndVertex(startVertex, endVertex);
          return edge;
        });
        return edges;
      }
      function calculateNormal(vertices, Normal) {
        var normal = Normal.fromVertices(vertices);
        return normal;
      }
      function calculateArea(vertices) {
        var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstExtent = (0, _vector).subtract3(secondVertexPosition, firstVertexPosition), secondExtent = (0, _vector).subtract3(thirdVertexPosition, firstVertexPosition), area = (0, _vector).length3((0, _vector).cross3(firstExtent, secondExtent)) / 2;
        return area;
      }
    }
  });

  // lib/primitive/facet.js
  var require_facet2 = __commonJS({
    "lib/primitive/facet.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _array = require_array2();
      var _constants = require_constants();
      var _facet = require_facet();
      var _midPoint = require_midPoint();
      var _intersection = require_intersection();
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Facet = /* @__PURE__ */ function() {
        function Facet2(vertices, normal, edges) {
          _classCallCheck(this, Facet2);
          this.vertices = vertices;
          this.normal = normal;
          this.edges = edges;
        }
        _createClass(Facet2, [
          {
            key: "getVertices",
            value: function getVertices() {
              return this.vertices;
            }
          },
          {
            key: "getNormal",
            value: function getNormal() {
              return this.normal;
            }
          },
          {
            key: "getEdges",
            value: function getEdges() {
              return this.edges;
            }
          },
          {
            key: "getVertexPositions",
            value: function getVertexPositions() {
              var vertexPositions = this.vertices.map(function(vertex) {
                return vertex.getPosition();
              });
              return vertexPositions;
            }
          },
          {
            key: "getVertexNormals",
            value: function getVertexNormals() {
              var normalExtent = this.normal.getExtent(), vertexNormal = normalExtent, vertexNormals = [
                vertexNormal,
                vertexNormal,
                vertexNormal
              ];
              return vertexNormals;
            }
          },
          {
            key: "getVertexIndexes",
            value: function getVertexIndexes(index) {
              var vertexIndex = index * 3, vertexIndexes = [
                vertexIndex + 0,
                vertexIndex + 1,
                vertexIndex + 2
              ];
              return vertexIndexes;
            }
          },
          {
            key: "isMasked",
            value: function isMasked(maskingFacet) {
              var maskingEdges = maskingFacet.getMaskingEdges(), midPointPosition = (0, _midPoint).calculateMidPointPosition(this.vertices), midPointPositionToOneSideOfMaskingEdges = (0, _midPoint).isMidPointPositionToOneSideOfMaskingEdges(midPointPosition, maskingEdges), masked = midPointPositionToOneSideOfMaskingEdges;
              return masked;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              this.vertices = (0, _array).permute(this.vertices, places);
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "rotate",
            value: function rotate(rotationQuaternion) {
              this.vertices.forEach(function(vertex) {
                return vertex.rotate(rotationQuaternion);
              });
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "applyTransform",
            value: function applyTransform(transform) {
              this.vertices.forEach(function(vertex) {
                return vertex.applyTransform(transform);
              });
              this.normal = (0, _facet).calculateNormal(this.vertices, _normal.default);
              this.edges = (0, _facet).calculateEdges(this.vertices, _edge.default);
            }
          },
          {
            key: "splitWithIntersections",
            value: function splitWithIntersections(intersections, smallerFacets, marginOfError) {
              var nonNullIntersections = (0, _intersection).calculateNonNullIntersections(intersections), nonNullIntersectionsLength = nonNullIntersections.length;
              switch (nonNullIntersectionsLength) {
                case 2:
                  this.splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
                case 1:
                  this.splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError);
                  break;
                case 0:
                  this.splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError);
                  break;
              }
            }
          },
          {
            key: "splitWithTwoNonNullIntersections",
            value: function splitWithTwoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var nullIntersectionIndex = (0, _intersection).calculateNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array).permute(intersections, places);
              intersections = intersections.slice(1);
              this.permute(places);
              var startVertexPositionIndexes = [
                1,
                2
              ], endVertexPositionIndexes = [
                2,
                0
              ], indexTuples = [
                [
                  0,
                  1,
                  3
                ],
                [
                  3,
                  4,
                  0
                ],
                [
                  3,
                  2,
                  4
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithOneNonNullIntersection",
            value: function splitWithOneNonNullIntersection(intersections, smallerFacets, marginOfError) {
              var nonNullIntersectionIndex = (0, _intersection).calculateNonNullIntersectionIndex(intersections), places = (_constants.VERTICES_LENGTH - nonNullIntersectionIndex) % _constants.VERTICES_LENGTH;
              intersections = (0, _array).permute(intersections, places);
              intersections = intersections.slice(0, 1);
              this.permute(places);
              var startVertexPositionIndexes = [
                0
              ], endVertexPositionIndexes = [
                1
              ], indexTuples = [
                [
                  0,
                  3,
                  2
                ],
                [
                  3,
                  1,
                  2
                ]
              ];
              this.splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError);
            }
          },
          {
            key: "splitWithNoNonNullIntersections",
            value: function splitWithNoNonNullIntersections(intersections, smallerFacets, marginOfError) {
              var smallerFacet = this.fromVerticesAndMarginOfError(this.vertices, marginOfError);
              smallerFacets.push(smallerFacet);
            }
          },
          {
            key: "splitWithIndexTuplesAndIntersections",
            value: function splitWithIndexTuplesAndIntersections(startVertexPositionIndexes, endVertexPositionIndexes, indexTuples, intersections, smallerFacets, marginOfError) {
              var _this = this;
              var vertexPositions = this.getVertexPositions(), intermediateVertexPositions = intersections.map(function(intersection, index) {
                var startVertexPositionIndex = startVertexPositionIndexes[index], endVertexPositionIndex = endVertexPositionIndexes[index], startVertexPosition = vertexPositions[startVertexPositionIndex], endVertexPosition = vertexPositions[endVertexPositionIndex], intermediateVertexPosition = (0, _intersection).calculateIntermediateVertexPosition(startVertexPosition, endVertexPosition, intersection);
                return intermediateVertexPosition;
              });
              (0, _array).push(vertexPositions, intermediateVertexPositions);
              indexTuples.forEach(function(indexTuple) {
                var positions = vertexPositions, indexes = indexTuple, facet = _this, smallerFacet = smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError);
                if (smallerFacet !== null) {
                  smallerFacets.push(smallerFacet);
                }
              });
            }
          }
        ]);
        return Facet2;
      }();
      exports.default = Facet;
      function smallerFacetFromPositionsIndexesFacetAndMarginOfError(positions, indexes, facet, marginOfError) {
        var vertices = indexes.map(function(index) {
          var position = positions[index];
          position = position.slice();
          var vertex = _vertex.default.fromPosition(position);
          return vertex;
        }), smallerFacet = facet.fromVerticesAndMarginOfError(vertices, marginOfError);
        return smallerFacet;
      }
    }
  });

  // lib/primitive/facet/coloured.js
  var require_coloured = __commonJS({
    "lib/primitive/facet/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _facet = _interopRequireDefault2(require_facet2());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var ColouredFacet = /* @__PURE__ */ function(Facet) {
        _inherits(ColouredFacet2, Facet);
        var _super = _createSuper(ColouredFacet2);
        function ColouredFacet2(vertices, normal, edges, rgba) {
          _classCallCheck(this, ColouredFacet2);
          var _this;
          _this = _super.call(this, vertices, normal, edges);
          _this.rgba = rgba;
          return _this;
        }
        _createClass(ColouredFacet2, [
          {
            key: "getVertexColours",
            value: function getVertexColours() {
              var vertexColour = this.rgba, vertexColours = [
                vertexColour,
                vertexColour,
                vertexColour
              ];
              return vertexColours;
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var colouredFacet = null;
              var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              }
              return colouredFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1).cloneVertices(vertices);
              normal = (0, _facet1).cloneNormal(normal);
              edges = (0, _facet1).cloneEdges(edges);
              var colouredFacet = new ColouredFacet2(vertices, normal, edges, this.rgba);
              return colouredFacet;
            }
          }
        ], [
          {
            key: "fromCoordinateTuplesIndexTupleColourAndMarginOfError",
            value: function fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, colour, marginOfError) {
              var colouredFacet = null;
              var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default), rgba = _toConsumableArray(colour).concat([
                  1
                ]);
                colouredFacet = new ColouredFacet2(vertices, normal, edges, rgba);
              }
              return colouredFacet;
            }
          }
        ]);
        return ColouredFacet2;
      }(_facet.default);
      exports.default = ColouredFacet;
    }
  });

  // lib/element/canvas/coloured.js
  var require_coloured2 = __commonJS({
    "lib/element/canvas/coloured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      var _coloured = _interopRequireDefault2(require_coloured());
      var _array = require_array2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var ColouredCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(ColouredCanvasElement2, CanvasElement);
        var _super = _createSuper(ColouredCanvasElement2);
        function ColouredCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, colour) {
          _classCallCheck(this, ColouredCanvasElement2);
          var _this;
          _this = _super.call(this, maskReference, transform, facets, masks);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.colour = colour;
          return _this;
        }
        _createClass(ColouredCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets1 = indexTuples.reduce(function(facets, indexTuple) {
                var coordinateTuples = _this.coordinates, colouredFacet = _coloured.default.fromCoordinateTuplesIndexTupleColourAndMarginOfError(coordinateTuples, indexTuple, _this.colour, marginOfError), facet = colouredFacet;
                if (facet !== null) {
                  (0, _array).add(facets, facet);
                }
                return facets;
              }, []);
              this.setFacets(facets1);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              colourRenderer.addFacets(facets);
              _get(_getPrototypeOf(ColouredCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, colour) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
                remainingArguments[_key - 5] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                colour
              ].concat(_toConsumableArray(remainingArguments)));
            }
          }
        ]);
        return ColouredCanvasElement2;
      }(_canvas.default);
      exports.default = ColouredCanvasElement;
    }
  });

  // lib/utilities/texture.js
  var require_texture5 = __commonJS({
    "lib/utilities/texture.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cloneTextureCoordinateTuples = cloneTextureCoordinateTuples;
      exports.calculateMappedTextureCoordinateTuples = calculateMappedTextureCoordinateTuples;
      exports.calculateAdjustedTextureCoordinateTuples = calculateAdjustedTextureCoordinateTuples;
      var _vertices = require_vertices();
      var _matrix = require_matrix();
      var _array = require_array2();
      var _quaternion = require_quaternion();
      var _vector = require_vector();
      function cloneTextureCoordinateTuples(textureCoordinateTuples) {
        textureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          return textureCoordinateTuple.slice();
        });
        return textureCoordinateTuples;
      }
      function calculateMappedTextureCoordinateTuples(textureCoordinateTuples, extent) {
        var left = extent.left, bottom = extent.bottom, width = extent.width, height = extent.height, mappedTextureCoordinateTuples = textureCoordinateTuples.map(function(textureCoordinateTuple) {
          return (0, _vector).add2((0, _vector).multiply2(textureCoordinateTuple, [
            width,
            height
          ]), [
            left,
            bottom
          ]);
        });
        return mappedTextureCoordinateTuples;
      }
      function calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, textureCoordinateTuples) {
        var arbitraryRotationQuaternion = (0, _quaternion).calculateArbitraryRotationQuaternion(normal), rotationQuaternion = arbitraryRotationQuaternion;
        var rotatedVertices = (0, _vertices).rotateVertices(vertices, rotationQuaternion);
        parentVertices = (0, _vertices).rotateVertices(parentVertices, rotationQuaternion);
        vertices = rotatedVertices;
        var firstVertex = (0, _array).first(vertices), secondVertex = (0, _array).second(vertices), thirdVertex = (0, _array).third(vertices), firstParentVertex = (0, _array).first(parentVertices), secondParentVertex = (0, _array).second(parentVertices), thirdParentVertex = (0, _array).third(parentVertices), firstTextureCoordinateTuple = (0, _array).first(textureCoordinateTuples), secondTextureCoordinateTuple = (0, _array).second(textureCoordinateTuples), thirdTextureCoordinateTuple = (0, _array).third(textureCoordinateTuples), firstVertexPosition = firstVertex.getPosition(), secondVertexPosition = secondVertex.getPosition(), thirdVertexPosition = thirdVertex.getPosition(), firstParentVertexPosition = firstParentVertex.getPosition(), secondParentVertexPosition = secondParentVertex.getPosition(), thirdParentVertexPosition = thirdParentVertex.getPosition(), R1x = firstVertexPosition[0], R1y = firstVertexPosition[1], R2x = secondVertexPosition[0], R2y = secondVertexPosition[1], R3x = thirdVertexPosition[0], R3y = thirdVertexPosition[1], P1x = firstParentVertexPosition[0], P2x = secondParentVertexPosition[0], P3x = thirdParentVertexPosition[0], P1y = firstParentVertexPosition[1], P2y = secondParentVertexPosition[1], P3y = thirdParentVertexPosition[1], P1u = firstTextureCoordinateTuple[0], P1v = firstTextureCoordinateTuple[1], P2u = secondTextureCoordinateTuple[0], P2v = secondTextureCoordinateTuple[1], P3u = thirdTextureCoordinateTuple[0], P3v = thirdTextureCoordinateTuple[1], textureCoordinatesMatrix = (0, _matrix).invert3([
          1,
          1,
          1,
          P1u,
          P2u,
          P3u,
          P1v,
          P2v,
          P3v
        ]), firstTransformedParentVerticesComponent = (0, _vector).transform3([
          P1x,
          P2x,
          P3x
        ], textureCoordinatesMatrix), secondTransformedParentVerticesComponent = (0, _vector).transform3([
          P1y,
          P2y,
          P3y
        ], textureCoordinatesMatrix), Ox = firstTransformedParentVerticesComponent[0], Ux = firstTransformedParentVerticesComponent[1], Vx = firstTransformedParentVerticesComponent[2], Oy = secondTransformedParentVerticesComponent[0], Uy = secondTransformedParentVerticesComponent[1], Vy = secondTransformedParentVerticesComponent[2], transformedParentVerticesMatrix = (0, _matrix).invert2([
          Ux,
          Uy,
          Vx,
          Vy
        ]), firstAdjustedTextureCoordinate = (0, _vector).transform2([
          R1x - Ox,
          R1y - Oy
        ], transformedParentVerticesMatrix), secondAdjustedTextureCoordinate = (0, _vector).transform2([
          R2x - Ox,
          R2y - Oy
        ], transformedParentVerticesMatrix), thirdAdjustedTextureCoordinate = (0, _vector).transform2([
          R3x - Ox,
          R3y - Oy
        ], transformedParentVerticesMatrix), adjustedTextureCoordinateTuple = [
          firstAdjustedTextureCoordinate,
          secondAdjustedTextureCoordinate,
          thirdAdjustedTextureCoordinate
        ];
        return adjustedTextureCoordinateTuple;
      }
    }
  });

  // lib/primitive/facet/textured.js
  var require_textured = __commonJS({
    "lib/primitive/facet/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _edge = _interopRequireDefault2(require_edge());
      var _facet = _interopRequireDefault2(require_facet2());
      var _normal = _interopRequireDefault2(require_normal());
      var _vertex = _interopRequireDefault2(require_vertex());
      var _array = require_array2();
      var _approximate = require_approximate();
      var _vertices = require_vertices();
      var _facet1 = require_facet();
      var _texture = require_texture5();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var TexturedFacet = /* @__PURE__ */ function(Facet) {
        _inherits(TexturedFacet2, Facet);
        var _super = _createSuper(TexturedFacet2);
        function TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples) {
          _classCallCheck(this, TexturedFacet2);
          var _this;
          _this = _super.call(this, vertices, normal, edges);
          _this.imageName = imageName;
          _this.textureCoordinateTuples = textureCoordinateTuples;
          return _this;
        }
        _createClass(TexturedFacet2, [
          {
            key: "getImageName",
            value: function getImageName() {
              return this.imageName;
            }
          },
          {
            key: "getTextureCoordinateTuples",
            value: function getTextureCoordinateTuples() {
              return this.textureCoordinateTuples;
            }
          },
          {
            key: "getMappedTextureCoordinateTuples",
            value: function getMappedTextureCoordinateTuples(imageMapJSON) {
              var json = imageMapJSON[this.imageName], extent = json, mappedTextureCoordinateTuples = (0, _texture).calculateMappedTextureCoordinateTuples(this.textureCoordinateTuples, extent);
              return mappedTextureCoordinateTuples;
            }
          },
          {
            key: "permute",
            value: function permute(places) {
              _get(_getPrototypeOf(TexturedFacet2.prototype), "permute", this).call(this, places);
              this.textureCoordinateTuples = (0, _array).permute(this.textureCoordinateTuples, places);
            }
          },
          {
            key: "fromVerticesAndMarginOfError",
            value: function fromVerticesAndMarginOfError(vertices, marginOfError) {
              var texturedFacet = null;
              var area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), parentVertices = this.vertices, adjustedTextureCoordinateTuple = (0, _texture).calculateAdjustedTextureCoordinateTuples(vertices, normal, parentVertices, this.textureCoordinateTuples), edges = (0, _facet1).calculateEdges(vertices, _edge.default), imageName = this.imageName, textureCoordinateTuples = adjustedTextureCoordinateTuple;
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          },
          {
            key: "clone",
            value: function clone() {
              var vertices = this.getVertices(), normal = this.getNormal(), edges = this.getEdges();
              vertices = (0, _facet1).cloneVertices(vertices);
              normal = (0, _facet1).cloneNormal(normal);
              edges = (0, _facet1).cloneEdges(edges);
              var imageName = this.imageName, textureCoordinateTuples = (0, _texture).cloneTextureCoordinateTuples(this.textureCoordinateTuples), texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              return texturedFacet;
            }
          }
        ], [
          {
            key: "fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError",
            value: function fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(textureCoordinateTuples, coordinateTuples, indexTuple, imageName, marginOfError) {
              var texturedFacet = null;
              var vertices = (0, _vertices).verticesFromCoordinateTuplesAndIndexTuple(coordinateTuples, indexTuple, _vertex.default), area = (0, _facet1).calculateArea(vertices), areaApproximatelyEqualToZero = (0, _approximate).isApproximatelyEqualToZero(area, marginOfError);
              if (!areaApproximatelyEqualToZero) {
                var normal = (0, _facet1).calculateNormal(vertices, _normal.default), edges = (0, _facet1).calculateEdges(vertices, _edge.default);
                texturedFacet = new TexturedFacet2(vertices, normal, edges, imageName, textureCoordinateTuples);
              }
              return texturedFacet;
            }
          }
        ]);
        return TexturedFacet2;
      }(_facet.default);
      exports.default = TexturedFacet;
    }
  });

  // lib/element/canvas/textured.js
  var require_textured2 = __commonJS({
    "lib/element/canvas/textured.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _canvas = _interopRequireDefault2(require_canvas());
      var _textured = _interopRequireDefault2(require_textured());
      var _array = require_array2();
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return _arrayLikeToArray(arr);
      }
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get2(target2, property2, receiver2) {
            var base = _superPropBase(target2, property2);
            if (!base)
              return;
            var desc = Object.getOwnPropertyDescriptor(base, property2);
            if (desc.get) {
              return desc.get.call(receiver2);
            }
            return desc.value;
          };
        }
        return _get(target, property, receiver || target);
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null)
            break;
        }
        return object;
      }
      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(n);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var TexturedCanvasElement = /* @__PURE__ */ function(CanvasElement) {
        _inherits(TexturedCanvasElement2, CanvasElement);
        var _super = _createSuper(TexturedCanvasElement2);
        function TexturedCanvasElement2(maskReference, transform, facets, masks, coordinates, indexes, imageName, textureCoordinates) {
          _classCallCheck(this, TexturedCanvasElement2);
          var _this;
          _this = _super.call(this, maskReference, transform, facets, masks);
          _this.coordinates = coordinates;
          _this.indexes = indexes;
          _this.imageName = imageName;
          _this.textureCoordinates = textureCoordinates;
          return _this;
        }
        _createClass(TexturedCanvasElement2, [
          {
            key: "createFacets",
            value: function createFacets(marginOfError) {
              var _this = this;
              _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "createFacets", this).call(this, marginOfError);
              var indexTuples = this.indexes, facets1 = indexTuples.reduce(function(facets, indexTuple, index) {
                var vertexTextureCoordinateTuples = _this.textureCoordinates[index], coordinateTuples = _this.coordinates, texturedFacet = _textured.default.fromTextureCoordinateTuplesCoordinatesTuplesIndexTupleImageNameAndMarginOfError(vertexTextureCoordinateTuples, coordinateTuples, indexTuple, _this.imageName, marginOfError), facet = texturedFacet;
                if (facet !== null) {
                  (0, _array).add(facets, facet);
                }
                return facets;
              }, []);
              this.setFacets(facets1);
            }
          },
          {
            key: "addFacets",
            value: function addFacets(colourRenderer, textureRenderer) {
              var facets = this.getFacets();
              textureRenderer.addFacets(facets);
              _get(_getPrototypeOf(TexturedCanvasElement2.prototype), "addFacets", this).call(this, colourRenderer, textureRenderer);
            }
          }
        ], [
          {
            key: "fromProperties",
            value: function fromProperties(Class, properties, coordinates, indexes, imageName, textureCoordinates) {
              for (var _len = arguments.length, remainingArguments = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
                remainingArguments[_key - 6] = arguments[_key];
              }
              var _CanvasElement;
              return (_CanvasElement = _canvas.default).fromProperties.apply(_CanvasElement, [
                Class,
                properties,
                coordinates,
                indexes,
                imageName,
                textureCoordinates
              ].concat(_toConsumableArray(remainingArguments)));
            }
          }
        ]);
        return TexturedCanvasElement2;
      }(_canvas.default);
      exports.default = TexturedCanvasElement;
    }
  });

  // lib/index.js
  var require_lib = __commonJS({
    "lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "React", {
        enumerable: true,
        get: function() {
          return _react.default;
        }
      });
      Object.defineProperty(exports, "Canvas", {
        enumerable: true,
        get: function() {
          return _canvas.default;
        }
      });
      Object.defineProperty(exports, "Mask", {
        enumerable: true,
        get: function() {
          return _mask.default;
        }
      });
      Object.defineProperty(exports, "Part", {
        enumerable: true,
        get: function() {
          return _part.default;
        }
      });
      Object.defineProperty(exports, "Scene", {
        enumerable: true,
        get: function() {
          return _scene.default;
        }
      });
      Object.defineProperty(exports, "Camera", {
        enumerable: true,
        get: function() {
          return _camera.default;
        }
      });
      Object.defineProperty(exports, "GamingCamera", {
        enumerable: true,
        get: function() {
          return _gaming.default;
        }
      });
      Object.defineProperty(exports, "DesignCamera", {
        enumerable: true,
        get: function() {
          return _design.default;
        }
      });
      Object.defineProperty(exports, "CanvasElement", {
        enumerable: true,
        get: function() {
          return _canvas1.default;
        }
      });
      Object.defineProperty(exports, "preloadUtilities", {
        enumerable: true,
        get: function() {
          return _preload.default;
        }
      });
      Object.defineProperty(exports, "ColouredCanvasElement", {
        enumerable: true,
        get: function() {
          return _coloured.default;
        }
      });
      Object.defineProperty(exports, "TexturedCanvasElement", {
        enumerable: true,
        get: function() {
          return _textured.default;
        }
      });
      Object.defineProperty(exports, "vectorMaths", {
        enumerable: true,
        get: function() {
          return _vector.default;
        }
      });
      Object.defineProperty(exports, "matrixMaths", {
        enumerable: true,
        get: function() {
          return _matrix.default;
        }
      });
      var _react = _interopRequireDefault2(require_react());
      var _canvas = _interopRequireDefault2(require_canvas2());
      var _mask = _interopRequireDefault2(require_mask());
      var _part = _interopRequireDefault2(require_part());
      var _scene = _interopRequireDefault2(require_scene());
      var _camera = _interopRequireDefault2(require_camera());
      var _gaming = _interopRequireDefault2(require_gaming());
      var _design = _interopRequireDefault2(require_design());
      var _canvas1 = _interopRequireDefault2(require_canvas());
      var _preload = _interopRequireDefault2(require_preload());
      var _coloured = _interopRequireDefault2(require_coloured2());
      var _textured = _interopRequireDefault2(require_textured2());
      var _vector = _interopRequireDefault2(require_vector());
      var _matrix = _interopRequireDefault2(require_matrix());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
    }
  });

  // lib/xgl.js
  var require_xgl = __commonJS({
    "lib/xgl.js"() {
      "use strict";
      var _index = require_lib();
      Object.assign(window, {
        React: _index.React
      });
    }
  });

  // lib/example/element/colouredSquare.js
  var require_colouredSquare = __commonJS({
    "lib/example/element/colouredSquare.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultColour = [
        1,
        0,
        0
      ];
      var ColouredSquare = /* @__PURE__ */ function(ColouredCanvasElement) {
        _inherits(ColouredSquare2, ColouredCanvasElement);
        var _super = _createSuper(ColouredSquare2);
        function ColouredSquare2() {
          _classCallCheck(this, ColouredSquare2);
          return _super.apply(this, arguments);
        }
        _createClass(ColouredSquare2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour, colouredSquare = _index.ColouredCanvasElement.fromProperties(ColouredSquare2, properties, coordinates, indexes, colour);
              return colouredSquare;
            }
          }
        ]);
        return ColouredSquare2;
      }(_index.ColouredCanvasElement);
      exports.default = ColouredSquare;
    }
  });

  // lib/example/element/face.js
  var require_face = __commonJS({
    "lib/example/element/face.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Face = function(properties) {
        var colour = properties.colour;
        return /* @__PURE__ */ React.createElement(_colouredSquare.default, {
          colour,
          position: [
            -0.5,
            -0.5,
            0.5
          ]
        });
      };
      var _default = Face;
      exports.default = _default;
    }
  });

  // lib/example/element/cube.js
  var require_cube = __commonJS({
    "lib/example/element/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _face = _interopRequireDefault2(require_face());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var defaultColour = [
        1,
        1,
        0
      ];
      var Cube = function(properties) {
        var _colour = properties.colour, colour = _colour === void 0 ? defaultColour : _colour;
        return [
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              180,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              -90,
              0,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_face.default, {
            colour,
            rotations: [
              0,
              -90,
              0
            ]
          })
        ];
      };
      var _default = Cube;
      exports.default = _default;
    }
  });

  // lib/example/cube.js
  var require_cube2 = __commonJS({
    "lib/example/cube.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _cube2 = _interopRequireDefault2(require_cube());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var cubeExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_cube2.default, {
          colour: [
            0,
            1,
            0
          ]
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, {
          persist: true
        }));
      };
      var _default = cubeExample;
      exports.default = _default;
    }
  });

  // lib/example/element/texturedQuadrangle.js
  var require_texturedQuadrangle = __commonJS({
    "lib/example/element/texturedQuadrangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0,
          1,
          0
        ],
        [
          1,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          3
        ],
        [
          3,
          2,
          0
        ]
      ];
      var defaultImageName = "plaster.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            2,
            0
          ],
          [
            2,
            2
          ]
        ],
        [
          [
            2,
            2
          ],
          [
            0,
            2
          ],
          [
            0,
            0
          ]
        ]
      ];
      var TexturedQuadrangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedQuadrangle2, TexturedCanvasElement);
        var _super = _createSuper(TexturedQuadrangle2);
        function TexturedQuadrangle2() {
          _classCallCheck(this, TexturedQuadrangle2);
          return _super.apply(this, arguments);
        }
        _createClass(TexturedQuadrangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedQuadrangle = _index.TexturedCanvasElement.fromProperties(TexturedQuadrangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedQuadrangle;
            }
          }
        ]);
        return TexturedQuadrangle2;
      }(_index.TexturedCanvasElement);
      exports.default = TexturedQuadrangle;
    }
  });

  // lib/example/tiling.js
  var require_tiling = __commonJS({
    "lib/example/tiling.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      var _texturedQuadrangle = _interopRequireDefault2(require_texturedQuadrangle());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImages = _index.preloadUtilities.preloadImages;
      var tilingExample = function() {
        preloadImages(function(images, imageNames) {
          var canvas = new _index.Canvas(), context = {};
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas,
            context
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            images,
            imageNames,
            imageTiling: true
          }, /* @__PURE__ */ React.createElement(_index.Mask, {
            reference: "mask"
          }, /* @__PURE__ */ React.createElement(_colouredSquare.default, {
            scale: [
              0.25,
              0.25,
              1
            ],
            position: [
              0.125,
              0.125,
              0.125
            ]
          })), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              0,
              0,
              0
            ],
            imageName: "floorboards.jpg",
            maskReference: "mask"
          }), /* @__PURE__ */ React.createElement(_texturedQuadrangle.default, {
            position: [
              -0.5,
              -0.5,
              -0.5
            ],
            imageName: "paving.jpg",
            maskReference: "mask"
          })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
        });
      };
      var _default = tilingExample;
      exports.default = _default;
    }
  });

  // lib/example/simple.js
  var require_simple = __commonJS({
    "lib/example/simple.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _colouredSquare = _interopRequireDefault2(require_colouredSquare());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var simpleExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, false), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = simpleExample;
      exports.default = _default;
    }
  });

  // lib/example/masking.js
  var require_masking2 = __commonJS({
    "lib/example/masking.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _cube2 = _interopRequireDefault2(require_cube());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var maskingExample = function() {
        var canvas = new _index.Canvas();
        return /* @__PURE__ */ React.createElement(_index.Scene, {
          canvas
        }, /* @__PURE__ */ React.createElement(_index.Part, null, /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "quarter-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube2.default, {
          scale: [
            1 / 4,
            1 / 4,
            1 / 4
          ]
        })), /* @__PURE__ */ React.createElement(_index.Mask, {
          reference: "half-sized-cube"
        }, /* @__PURE__ */ React.createElement(_cube2.default, {
          scale: [
            1 / 2,
            1 / 2,
            1 / 2
          ],
          maskReference: "quarter-sized-cube"
        })), /* @__PURE__ */ React.createElement(_cube2.default, {
          maskReference: "half-sized-cube"
        })), /* @__PURE__ */ React.createElement(_index.DesignCamera, null));
      };
      var _default = maskingExample;
      exports.default = _default;
    }
  });

  // lib/example/element/texturedTriangle.js
  var require_texturedTriangle = __commonJS({
    "lib/example/element/texturedTriangle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      var _typeof = function(obj) {
        "@swc/helpers - typeof";
        return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
      };
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      var coordinates = [
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          0
        ],
        [
          0.5,
          1,
          0
        ]
      ];
      var indexes = [
        [
          0,
          1,
          2
        ]
      ];
      var defaultImageName = "stripes.jpg";
      var defaultTextureCoordinates = [
        [
          [
            0,
            0
          ],
          [
            1,
            0
          ],
          [
            0.5,
            1
          ]
        ]
      ];
      var TexturedTriangle = /* @__PURE__ */ function(TexturedCanvasElement) {
        _inherits(TexturedTriangle2, TexturedCanvasElement);
        var _super = _createSuper(TexturedTriangle2);
        function TexturedTriangle2() {
          _classCallCheck(this, TexturedTriangle2);
          return _super.apply(this, arguments);
        }
        _createClass(TexturedTriangle2, null, [
          {
            key: "fromProperties",
            value: function fromProperties(properties) {
              var _imageName = properties.imageName, imageName = _imageName === void 0 ? defaultImageName : _imageName, _textureCoordinates = properties.textureCoordinates, textureCoordinates = _textureCoordinates === void 0 ? defaultTextureCoordinates : _textureCoordinates, texturedTriangle = _index.TexturedCanvasElement.fromProperties(TexturedTriangle2, properties, coordinates, indexes, imageName, textureCoordinates);
              return texturedTriangle;
            }
          }
        ]);
        return TexturedTriangle2;
      }(_index.TexturedCanvasElement);
      exports.default = TexturedTriangle;
    }
  });

  // lib/example/element/side.js
  var require_side = __commonJS({
    "lib/example/element/side.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _texturedTriangle = _interopRequireDefault2(require_texturedTriangle());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Side = function(properties) {
        return React.createElement(_texturedTriangle.default, {
          scale: [
            1,
            1 / Math.sqrt(2),
            1
          ],
          position: [
            -0.5,
            0,
            0.5
          ],
          rotations: [
            -45,
            0,
            0
          ]
        });
      };
      var _default = Side;
      exports.default = _default;
    }
  });

  // lib/example/element/pyramid.js
  var require_pyramid = __commonJS({
    "lib/example/element/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _side = _interopRequireDefault2(require_side());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var Pyramid = function(properties) {
        return [
          /* @__PURE__ */ React.createElement(_side.default, null),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              90,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              180,
              0
            ]
          }),
          /* @__PURE__ */ React.createElement(_side.default, {
            rotations: [
              0,
              270,
              0
            ]
          })
        ];
      };
      var _default = Pyramid;
      exports.default = _default;
    }
  });

  // lib/example/pyramid.js
  var require_pyramid2 = __commonJS({
    "lib/example/pyramid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _index = require_lib();
      var _pyramid2 = _interopRequireDefault2(require_pyramid());
      function _interopRequireDefault2(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }
      var preloadImageMap = _index.preloadUtilities.preloadImageMap;
      var pyramidExample = function() {
        preloadImageMap(function(imageMap, imageMapJSON) {
          var canvas = new _index.Canvas();
          return /* @__PURE__ */ React.createElement(_index.Scene, {
            canvas
          }, /* @__PURE__ */ React.createElement(_index.Part, {
            imageMap,
            imageMapJSON
          }, /* @__PURE__ */ React.createElement(_pyramid2.default, null)), /* @__PURE__ */ React.createElement(_index.GamingCamera, {
            mouseSensitivity: 10
          }));
        });
      };
      var _default = pyramidExample;
      exports.default = _default;
    }
  });

  // lib/example.js
  "use strict";
  require_xgl();
  var _cube = _interopRequireDefault(require_cube2());
  var _tiling = _interopRequireDefault(require_tiling());
  var _simple = _interopRequireDefault(require_simple());
  var _masking = _interopRequireDefault(require_masking2());
  var _pyramid = _interopRequireDefault(require_pyramid2());
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  var example = window.location.search.substring(1);
  switch (example) {
    case "cube":
      (0, _cube).default();
      break;
    case "tiling":
      (0, _tiling).default();
      break;
    case "simple":
      (0, _simple).default();
      break;
    case "masking":
      (0, _masking).default();
      break;
    case "pyramid":
      (0, _pyramid).default();
      break;
  }
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbnN0YW50cy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9sZXZlbHMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvbWV0aG9kcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9oZWFkZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2tleUNvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2VuY29kaW5ncy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9jaGFyYWN0ZXJzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3N0YXR1c0NvZGVzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL2NvbnRlbnRUeXBlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy9zdGF0dXNNZXNzYWdlcy5qcyIsICJub2RlX21vZHVsZXMvbmVjZXNzYXJ5L3NyYy91dGlsaXRpZXMvYXJyYXkuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvY29uc3RhbnRzLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9odHRwLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hamF4LmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9wYXRoLmpzIiwgIm5vZGVfbW9kdWxlcy9uZWNlc3Nhcnkvc3JjL3V0aWxpdGllcy9hc3luY2hyb25vdXMuanMiLCAibm9kZV9tb2R1bGVzL25lY2Vzc2FyeS9zcmMvYnJvd3Nlci5qcyIsICJzcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgInNyYy9lbGVtZW50LmpzIiwgInNyYy9tYXRocy92ZWN0b3IuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlLmpzIiwgInNyYy91dGlsaXRpZXMvbWlkUG9pbnQuanMiLCAic3JjL3ByaW1pdGl2ZS9lZGdlL21hc2tpbmcuanMiLCAic3JjL2RlZmF1bHRzLmpzIiwgInNyYy91dGlsaXRpZXMvYXBwcm94aW1hdGUuanMiLCAic3JjL3V0aWxpdGllcy9hbmdsZS5qcyIsICJzcmMvdXRpbGl0aWVzL3F1YXRlcm5pb24uanMiLCAic3JjL3V0aWxpdGllcy9yb3RhdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2ludGVyc2VjdGlvbi5qcyIsICJzcmMvcHJpbWl0aXZlL3ZlcnRpY2FsTGluZS5qcyIsICJzcmMvdXRpbGl0aWVzL3ZlcnRpY2VzLmpzIiwgInNyYy9wcmltaXRpdmUvbWFza2luZ0ZhY2V0LmpzIiwgInNyYy9tYXRocy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy9tYXRyaXguanMiLCAic3JjL3V0aWxpdGllcy90cmFuc2Zvcm0uanMiLCAic3JjL2VsZW1lbnQvbWFzay5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy9mdW5jdGlvbi5qcyIsICJzcmMvdXRpbGl0aWVzL2VsZW1lbnRzLmpzIiwgInNyYy9yZWFjdC5qcyIsICJzcmMvbWl4aW5zL2RlcHRoLmpzIiwgInNyYy9lcnJvcnMuanMiLCAic3JjL21peGlucy9zaGFkZXIuanMiLCAic3JjL21peGlucy9idWZmZXIuanMiLCAic3JjL21peGlucy9jb2xvdXIuanMiLCAic3JjL21peGlucy9tYXRyaXguanMiLCAic3JjL21peGlucy90ZXh0dXJlLmpzIiwgInNyYy9taXhpbnMvcHJvZ3JhbS5qcyIsICJzcmMvbWl4aW5zL2JsZW5kaW5nLmpzIiwgInNyYy9taXhpbnMvbG9jYXRpb24uanMiLCAic3JjL2NhbnZhcy5qcyIsICJzcmMvcmVuZGVyZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvbGlnaHRpbmcuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9wb3NpdGlvbi5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL3NvdXJjZS9jb2xvdXIvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL2NvbG91ci91bmlmb3JtLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci9sb2NhdGlvbnMvY29sb3VyL2F0dHJpYnV0ZS5qcyIsICJzcmMvcmVuZGVyZXIvY29sb3VyLmpzIiwgInNyYy9yZW5kZXJlci9zb3VyY2UvdGV4dHVyZS92ZXJ0ZXhTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2RhdGEvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXIuanMiLCAic3JjL3JlbmRlcmVyL2J1ZmZlcnMvdGV4dHVyZS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvdW5pZm9ybS5qcyIsICJzcmMvcmVuZGVyZXIvbG9jYXRpb25zL3RleHR1cmUvYXR0cmlidXRlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlLmpzIiwgInNyYy9yZW5kZXJlci90ZXh0dXJlL2ltYWdlcy5qcyIsICJzcmMvcmVuZGVyZXIvdGV4dHVyZS9pbWFnZU1hcC5qcyIsICJzcmMvZWxlbWVudC9wYXJ0LmpzIiwgInNyYy9lbGVtZW50L2NhbWVyYS5qcyIsICJzcmMvZXZlbnRUeXBlcy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9rZXlFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvbW91c2VFdmVudHMuanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdXNlcklucHV0LmpzIiwgInNyYy9lbGVtZW50L3NjZW5lLmpzIiwgInNyYy91dGlsaXRpZXMvb2Zmc2V0cy5qcyIsICJzcmMvbWlzY2VsbGFuZW91cy9wYW4uanMiLCAic3JjL21pc2NlbGxhbmVvdXMvdGlsdC5qcyIsICJzcmMvdXRpbGl0aWVzL2xvY2FsU3RvcmFnZS5qcyIsICJzcmMvZWxlbWVudC9jYW1lcmEvZ2FtaW5nLmpzIiwgInNyYy9taXNjZWxsYW5lb3VzL3pvb20uanMiLCAic3JjL2VsZW1lbnQvY2FtZXJhL2Rlc2lnbi5qcyIsICJzcmMvdXRpbGl0aWVzL3ByZWxvYWQuanMiLCAic3JjL3ByaW1pdGl2ZS9ub3JtYWwuanMiLCAic3JjL3ByaW1pdGl2ZS92ZXJ0ZXguanMiLCAic3JjL3V0aWxpdGllcy9mYWNldC5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0LmpzIiwgInNyYy9wcmltaXRpdmUvZmFjZXQvY29sb3VyZWQuanMiLCAic3JjL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkLmpzIiwgInNyYy91dGlsaXRpZXMvdGV4dHVyZS5qcyIsICJzcmMvcHJpbWl0aXZlL2ZhY2V0L3RleHR1cmVkLmpzIiwgInNyYy9lbGVtZW50L2NhbnZhcy90ZXh0dXJlZC5qcyIsICJzcmMvaW5kZXguanMiLCAic3JjL3hnbC5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2NvbG91cmVkU3F1YXJlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvZmFjZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L2N1YmUuanMiLCAic3JjL2V4YW1wbGUvY3ViZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZS5qcyIsICJzcmMvZXhhbXBsZS90aWxpbmcuanMiLCAic3JjL2V4YW1wbGUvc2ltcGxlLmpzIiwgInNyYy9leGFtcGxlL21hc2tpbmcuanMiLCAic3JjL2V4YW1wbGUvZWxlbWVudC90ZXh0dXJlZFRyaWFuZ2xlLmpzIiwgInNyYy9leGFtcGxlL2VsZW1lbnQvc2lkZS5qcyIsICJzcmMvZXhhbXBsZS9lbGVtZW50L3B5cmFtaWQuanMiLCAic3JjL2V4YW1wbGUvcHlyYW1pZC5qcyIsICJzcmMvZXhhbXBsZS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXSURUSCA9IFwid2lkdGhcIjtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSBcImhlaWdodFwiO1xuZXhwb3J0IGNvbnN0IENBTlZBUyA9IFwiY2FudmFzXCI7XG5leHBvcnQgY29uc3QgRlVOQ1RJT04gPSBcImZ1bmN0aW9uXCI7XG5leHBvcnQgY29uc3QgQU5PTllNT1VTID0gXCJhbm9ueW1vdXNcIjtcbmV4cG9ydCBjb25zdCBHQU1JTkdfQ0FNRVJBID0gXCJnYW1pbmdfY2FtZXJhXCI7XG5leHBvcnQgY29uc3QgREVTSUdOX0NBTUVSQSA9IFwiZGVzaWduX2NhbWVyYVwiO1xuZXhwb3J0IGNvbnN0IFZFUlRJQ0VTX0xFTkdUSCA9IDM7XG5leHBvcnQgY29uc3QgTUlOSU1VTV9ESVNUQU5DRSA9IDE7XG5leHBvcnQgY29uc3QgSU5WRVJUX01VTFRJUExJRVIgPSAtMTtcbmV4cG9ydCBjb25zdCBBTkdMRVNfTVVMVElQTElFUiA9IDAuMDE7XG5leHBvcnQgY29uc3QgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiA9IDAuMjU7XG5leHBvcnQgY29uc3QgREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVIgPSBNYXRoLlBJIC8gMTgwO1xuZXhwb3J0IGNvbnN0IEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiRVhUX3RleHR1cmVfZmlsdGVyX2FuaXNvdHJvcGljXCI7XG5leHBvcnQgY29uc3QgTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyA9IFwiTU9aX0VYVF90ZXh0dXJlX2ZpbHRlcl9hbmlzb3Ryb3BpY1wiO1xuZXhwb3J0IGNvbnN0IFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMgPSBcIldFQktJVF9FWFRfdGV4dHVyZV9maWx0ZXJfYW5pc290cm9waWNcIjtcbmV4cG9ydCBjb25zdCBSRUxBVElWRV9NT1VTRV9DT09SRElOQVRFU19NVUxUSVBMSUVSID0gMC4wMjU7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBUUkFDRV9MRVZFTCA9IFwidHJhY2VcIjtcbmV4cG9ydCBjb25zdCBERUJVR19MRVZFTCA9IFwiZGVidWdcIjtcbmV4cG9ydCBjb25zdCBJTkZPX0xFVkVMID0gXCJpbmZvXCI7XG5leHBvcnQgY29uc3QgV0FSTklOR19MRVZFTCA9IFwid2FybmluZ1wiO1xuZXhwb3J0IGNvbnN0IEVSUk9SX0xFVkVMID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IEZBVEFMX0xFVkVMID0gXCJmYXRhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFRSQUNFX0xFVkVMLFxuICBERUJVR19MRVZFTCxcbiAgSU5GT19MRVZFTCxcbiAgV0FSTklOR19MRVZFTCxcbiAgRVJST1JfTEVWRUwsXG4gIEZBVEFMX0xFVkVMXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgR0VUX01FVEhPRCA9IFwiR0VUXCI7XG5leHBvcnQgY29uc3QgUE9TVF9NRVRIT0QgPSBcIlBPU1RcIjtcbmV4cG9ydCBjb25zdCBERUxFVEVfTUVUSE9EID0gXCJERUxFVEVcIjtcbmV4cG9ydCBjb25zdCBPUFRJT05TX01FVEhPRCA9IFwiT1BUSU9OU1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9NRVRIT0QsXG4gIFBPU1RfTUVUSE9ELFxuICBERUxFVEVfTUVUSE9ELFxuICBPUFRJT05TX01FVEhPRFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFBSQUdNQV9IRUFERVIgPSBcInByYWdtYVwiO1xuZXhwb3J0IGNvbnN0IEFDQ0VQVF9IRUFERVIgPSBcImFjY2VwdFwiO1xuZXhwb3J0IGNvbnN0IExPQ0FUSU9OX0hFQURFUiA9IFwibG9jYXRpb25cIjtcbmV4cG9ydCBjb25zdCBVU0VSX0FHRU5UX0hFQURFUiA9IFwidXNlci1hZ2VudFwiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfVFlQRV9IRUFERVIgPSBcImNvbnRlbnQtdHlwZVwiO1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSID0gXCJhdXRob3JpemF0aW9uXCI7XG5leHBvcnQgY29uc3QgQ0FDSEVfQ09OVFJPTF9IRUFERVIgPSBcImNhY2hlLWNvbnRyb2xcIjtcbmV4cG9ydCBjb25zdCBDT05URU5UX0xFTkdUSF9IRUFERVIgPSBcImNvbnRlbnQtbGVuZ3RoXCI7XG5leHBvcnQgY29uc3QgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSID0gXCJ0cmFuc2Zlci1lbmNvZGluZ1wiO1xuZXhwb3J0IGNvbnN0IENPTlRFTlRfRElTUE9TSVRJT05fSEVBREVSID0gXCJjb250ZW50LWRpc3Bvc2l0aW9uXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctb3JpZ2luXCI7XG5leHBvcnQgY29uc3QgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIgPSBcImFjY2Vzcy1jb250cm9sLWFsbG93LW1ldGhvZHNcIjtcbmV4cG9ydCBjb25zdCBBQ0NFU1NfQ09OVFJPTF9BTExPV19IRUFERVJTX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtYWxsb3ctaGVhZGVyc1wiO1xuZXhwb3J0IGNvbnN0IEFDQ0VTU19DT05UUk9MX1JFUVVFU1RfTUVUSE9EX0hFQURFUiA9IFwiYWNjZXNzLWNvbnRyb2wtcmVxdWVzdC1tZXRob2RcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBQUkFHTUFfSEVBREVSLFxuICBBQ0NFUFRfSEVBREVSLFxuICBMT0NBVElPTl9IRUFERVIsXG4gIFVTRVJfQUdFTlRfSEVBREVSLFxuICBDT05URU5UX1RZUEVfSEVBREVSLFxuICBBVVRIT1JJWkFUSU9OX0hFQURFUixcbiAgQ0FDSEVfQ09OVFJPTF9IRUFERVIsXG4gIENPTlRFTlRfTEVOR1RIX0hFQURFUixcbiAgVFJBTlNGRVJfRU5DT0RJTkdfSEVBREVSLFxuICBDT05URU5UX0RJU1BPU0lUSU9OX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfT1JJR0lOX0hFQURFUixcbiAgQUNDRVNTX0NPTlRST0xfQUxMT1dfTUVUSE9EU19IRUFERVIsXG4gIEFDQ0VTU19DT05UUk9MX0FMTE9XX0hFQURFUlNfSEVBREVSLFxuICBBQ0NFU1NfQ09OVFJPTF9SRVFVRVNUX01FVEhPRF9IRUFERVJcbn07IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgU0hJRlRfS0VZX0NPREUgPSAxNjtcbmV4cG9ydCBjb25zdCBFU0NBUEVfS0VZQ09ERSA9IDI3O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFNISUZUX0tFWV9DT0RFLFxuICBFU0NBUEVfS0VZQ09ERVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVURjhfRU5DT0RJTkcgPSBcInV0ZjhcIjtcbmV4cG9ydCBjb25zdCBVVEZfOF9FTkNPRElORyA9IFwidXRmLThcIjtcbmV4cG9ydCBjb25zdCBCQVNFNjRfRU5DT0RJTkcgPSBcImJhc2U2NFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFVURjhfRU5DT0RJTkcsXG4gIFVURl84X0VOQ09ESU5HLFxuICBCQVNFNjRfRU5DT0RJTkdcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBFVFhfQ0hBUkFDVEVSID0gXCJcXHUwMDAzXCI7XG5leHBvcnQgY29uc3QgQkFSX0NIQVJBQ1RFUiA9IFwifFwiO1xuZXhwb3J0IGNvbnN0IERBU0hfQ0hBUkFDVEVSID0gXCItXCI7XG5leHBvcnQgY29uc3QgU1BBQ0VfQ0hBUkFDVEVSID0gXCIgXCI7XG5leHBvcnQgY29uc3QgQ09NTUFfQ0hBUkFDVEVSID0gXCIsXCI7XG5leHBvcnQgY29uc3QgQ09MT05fQ0hBUkFDVEVSID0gXCI6XCI7XG5leHBvcnQgY29uc3QgUEVSSU9EX0NIQVJBQ1RFUiA9IFwiLlwiO1xuZXhwb3J0IGNvbnN0IENUUkxfQ19DSEFSQUNURVIgPSBcIl5DXCI7XG5leHBvcnQgY29uc3QgV0lMRENBUkRfQ0hBUkFDVEVSID0gXCIqXCI7XG5leHBvcnQgY29uc3QgQkFDS1RJQ0tfREVMSU1JVEVSID0gXCJgXCI7XG5leHBvcnQgY29uc3QgTkVXX0xJTkVfQ0hBUkFDVEVSID0gXCJcXG5cIjtcbmV4cG9ydCBjb25zdCBCQUNLU1BBQ0VfQ0hBUkFDVEVSID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxMjcpO1xuZXhwb3J0IGNvbnN0IEFNUEVSU0FORF9DSEFSQUNURVIgPSBcIiZcIjtcbmV4cG9ydCBjb25zdCBMRVNTX1RIQU5fQ0hBUkFDVEVSID0gXCImbHQ7XCI7XG5leHBvcnQgY29uc3QgR1JFQVRFUl9USEFOX0NIQVJBQ1RFUiA9IFwiJmd0O1wiO1xuZXhwb3J0IGNvbnN0IEZPUldBUkRfU0xBU0hfQ0hBUkFDVEVSID0gXCIvXCI7XG5leHBvcnQgY29uc3QgQ0FSUklBR0VfUkVUVVJOX0NIQVJBQ1RFUiA9IFwiXFxyXCI7XG5leHBvcnQgY29uc3QgRVhDTEFNQVRJT05fTUFSS19DSEFSQUNURVIgPSBcIiFcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBFVFhfQ0hBUkFDVEVSLFxuICBCQVJfQ0hBUkFDVEVSLFxuICBEQVNIX0NIQVJBQ1RFUixcbiAgU1BBQ0VfQ0hBUkFDVEVSLFxuICBDT01NQV9DSEFSQUNURVIsXG4gIENPTE9OX0NIQVJBQ1RFUixcbiAgUEVSSU9EX0NIQVJBQ1RFUixcbiAgQ1RSTF9DX0NIQVJBQ1RFUixcbiAgV0lMRENBUkRfQ0hBUkFDVEVSLFxuICBCQUNLVElDS19ERUxJTUlURVIsXG4gIE5FV19MSU5FX0NIQVJBQ1RFUixcbiAgQU1QRVJTQU5EX0NIQVJBQ1RFUixcbiAgQkFDS1NQQUNFX0NIQVJBQ1RFUixcbiAgTEVTU19USEFOX0NIQVJBQ1RFUixcbiAgR1JFQVRFUl9USEFOX0NIQVJBQ1RFUixcbiAgRk9SV0FSRF9TTEFTSF9DSEFSQUNURVIsXG4gIENBUlJJQUdFX1JFVFVSTl9DSEFSQUNURVIsXG4gIEVYQ0xBTUFUSU9OX01BUktfQ0hBUkFDVEVSXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgWkVST18wX1NUQVRVU19DT0RFID0gMDtcbmV4cG9ydCBjb25zdCBPS18yMDBfU1RBVFVTX0NPREUgPSAyMDA7XG5leHBvcnQgY29uc3QgRk9VTkRfMzAyX1NUQVRVU19DT0RFID0gMzAyO1xuZXhwb3J0IGNvbnN0IENSRUFURURfMjAxX1NUQVRVU19DT0RFID0gMjAxO1xuZXhwb3J0IGNvbnN0IFNFRV9PVEhFUl8zMDNfU1RBVFVTX0NPREUgPSAzMDM7XG5leHBvcnQgY29uc3QgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSA9IDQwMztcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19DT0RFID0gNDA0O1xuZXhwb3J0IGNvbnN0IE5PX0NPTlRFTlRfMjA0X1NUQVRVU19DT0RFID0gMjA0O1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSA9IDUwMjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX0NPREUgPSA0MDA7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJU0VEXzQwMV9TVEFUVVNfQ09ERSA9IDQwMTtcbmV4cG9ydCBjb25zdCBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUgPSA0Mjk7XG5leHBvcnQgY29uc3QgSU5URVJOQUxfU0VSVkVSX0VSUk9SXzUwMF9TVEFUVVNfQ09ERSA9IDUwMDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBaRVJPXzBfU1RBVFVTX0NPREUsXG4gIE9LXzIwMF9TVEFUVVNfQ09ERSxcbiAgRk9VTkRfMzAyX1NUQVRVU19DT0RFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfQ09ERSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfQ09ERSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfQ09ERSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfQ09ERSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX0NPREUsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfQ09ERSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19DT0RFLFxuICBVTkFVVEhPUklTRURfNDAxX1NUQVRVU19DT0RFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX0NPREUsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX0NPREVcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBURVhUX0hUTUxfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWxcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NPTlRFTlRfVFlQRSA9IFwidGV4dC9wbGFpblwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFID0gXCJhcHBsaWNhdGlvbi9qc29uXCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fWF9XV1dfRk9STV9FTkNPREVEX0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI7XG5leHBvcnQgY29uc3QgVEVYVF9IVE1MX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L2h0bWw7IGNoYXJzZXQ9dXRmLThcIjtcbmV4cG9ydCBjb25zdCBURVhUX1BMQUlOX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFID0gXCJ0ZXh0L3BsYWluOyBjaGFyc2V0PXV0Zi04XCI7XG5leHBvcnQgY29uc3QgQVBQTElDQVRJT05fSlNPTl9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiO1xuZXhwb3J0IGNvbnN0IEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRSA9IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PXV0Zi04XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgVEVYVF9IVE1MX0NPTlRFTlRfVFlQRSxcbiAgVEVYVF9QTEFJTl9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICBBUFBMSUNBVElPTl9KU09OX0NIQVJTRVRfVVRGXzhfQ09OVEVOVF9UWVBFLFxuICBURVhUX0hUTUxfQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIFRFWFRfUExBSU5fQ0hBUlNFVF9VVEZfOF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DT05URU5UX1RZUEUsXG4gIEFQUExJQ0FUSU9OX1hfV1dXX0ZPUk1fRU5DT0RFRF9DSEFSU0VUX1VURl84X0NPTlRFTlRfVFlQRVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IE9LXzIwMF9TVEFUVVNfTUVTU0FHRSA9IFwiT0tcIjtcbmV4cG9ydCBjb25zdCBGT1VORF8zMDJfU1RBVFVTX01FU1NBR0UgPSBcIkZvdW5kXCI7XG5leHBvcnQgY29uc3QgQ1JFQVRFRF8yMDFfU1RBVFVTX01FU1NBR0UgPSBcIkNyZWF0ZWRcIjtcbmV4cG9ydCBjb25zdCBTRUVfT1RIRVJfMzAzX1NUQVRVU19NRVNTQUdFID0gXCJTZWUgb3RoZXJcIjtcbmV4cG9ydCBjb25zdCBGT1JCSURERU5fNDAzX1NUQVRVU19NRVNTQUdFID0gXCJGb3JiaWRkZW5cIjtcbmV4cG9ydCBjb25zdCBOT1RfRk9VTkRfNDA0X1NUQVRVU19NRVNTQUdFID0gXCJOb3QgZm91bmRcIjtcbmV4cG9ydCBjb25zdCBOT19DT05URU5UXzIwNF9TVEFUVVNfTUVTU0FHRSA9IFwiTm8gY29udGVudFwiO1xuZXhwb3J0IGNvbnN0IEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSA9IFwiQmFkIGdhdGV3YXlcIjtcbmV4cG9ydCBjb25zdCBCQURfUkVRVUVTVF80MDBfU1RBVFVTX01FU1NBR0UgPSBcIkJhZCByZXF1ZXN0XCI7XG5leHBvcnQgY29uc3QgVU5BVVRIT1JJU0VEXzQwMV9TVEFUVVNfTUVTU0FHRSA9IFwiVW5hdXRob3Jpc2VkXCI7XG5leHBvcnQgY29uc3QgVE9PX01BTllfUkVRVUVTVFNfNDI5X1NUQVRVU19NRVNTQUdFID0gXCJUb28gbWFueSByZXF1ZXN0c1wiO1xuZXhwb3J0IGNvbnN0IElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0UgPSBcIkludGVybmFsIHNlcnZlciBlcnJvclwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIE9LXzIwMF9TVEFUVVNfTUVTU0FHRSxcbiAgRk9VTkRfMzAyX1NUQVRVU19NRVNTQUdFLFxuICBDUkVBVEVEXzIwMV9TVEFUVVNfTUVTU0FHRSxcbiAgU0VFX09USEVSXzMwM19TVEFUVVNfTUVTU0FHRSxcbiAgRk9SQklEREVOXzQwM19TVEFUVVNfTUVTU0FHRSxcbiAgTk9UX0ZPVU5EXzQwNF9TVEFUVVNfTUVTU0FHRSxcbiAgTk9fQ09OVEVOVF8yMDRfU1RBVFVTX01FU1NBR0UsXG4gIEJBRF9HQVRFV0FZXzUwMl9TVEFUVVNfTUVTU0FHRSxcbiAgQkFEX1JFUVVFU1RfNDAwX1NUQVRVU19NRVNTQUdFLFxuICBVTkFVVEhPUklTRURfNDAxX1NUQVRVU19NRVNTQUdFLFxuICBUT09fTUFOWV9SRVFVRVNUU180MjlfU1RBVFVTX01FU1NBR0UsXG4gIElOVEVSTkFMX1NFUlZFUl9FUlJPUl81MDBfU1RBVFVTX01FU1NBR0Vcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07fVxuXG5leHBvcnQgZnVuY3Rpb24gc2Vjb25kKGFycmF5KSB7IHJldHVybiBhcnJheVsxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gdGhpcmQoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzJdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3VydGgoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWZ0aChhcnJheSkgeyByZXR1cm4gYXJyYXlbNF07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpZnRoTGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gNV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJ0aExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDRdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0aGlyZExhc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5W2FycmF5Lmxlbmd0aCAtIDNdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWNvbmRMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAyXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RMYXN0KGFycmF5KSB7IHJldHVybiBhcnJheVthcnJheS5sZW5ndGggLSAxXTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gbGFzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbYXJyYXkubGVuZ3RoIC0gMV07IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWQoYXJyYXkpIHsgcmV0dXJuIGFycmF5LnNsaWNlKDAsIDEpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWlsKGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gYmFjayhhcnJheSkgeyByZXR1cm4gYXJyYXkuc2xpY2UoYXJyYXkubGVuZ3RoIC0gMSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb250KGFycmF5KSB7IHJldHVybiBhcnJheS5zbGljZSgwLCBhcnJheS5sZW5ndGggLSAxKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gcHVzaChhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2hpZnQoYXJyYXkxLCBhcnJheTIpIHsgQXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYXJyYXkxLCBhcnJheTIpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXQoYXJyYXkxLCBlbGVtZW50T3JBcnJheTIpIHtcbiAgY29uc3QgYXJyYXkyID0gKGVsZW1lbnRPckFycmF5MiBpbnN0YW5jZW9mIEFycmF5KSA/XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRPckFycmF5MiA6XG4gICAgICAgICAgICAgICAgICAgICBbZWxlbWVudE9yQXJyYXkyXTtcbiAgXG4gIHB1c2goYXJyYXkxLCBhcnJheTIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoYXJyYXkpIHtcbiAgY29uc3Qgc3RhcnQgPSAwO1xuICBcbiAgcmV0dXJuIGFycmF5LnNwbGljZShzdGFydCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5KGFycmF5MSwgYXJyYXkyKSB7XG4gIGNvbnN0IHN0YXJ0ID0gMCxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBhcnJheTIubGVuZ3RoOyAgLy8vXG4gIFxuICBzcGxpY2UoYXJyYXkxLCBzdGFydCwgZGVsZXRlQ291bnQsIGFycmF5Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcnJheTEsIGFycmF5MikgeyBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcnJheTEsIGFycmF5Mik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHNwbGljZShhcnJheTEsIHN0YXJ0LCBkZWxldGVDb3VudCA9IEluZmluaXR5LCBhcnJheTIgPSBbXSkge1xuICBjb25zdCBhcmdzID0gW3N0YXJ0LCBkZWxldGVDb3VudCwgLi4uYXJyYXkyXSxcbiAgICAgICAgZGVsZXRlZEl0ZW1zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmFwcGx5KGFycmF5MSwgYXJncyk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRJdGVtc0FycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZShhcnJheSwgZWxlbWVudCwgdGVzdCkge1xuICBsZXQgc3RhcnQ7XG4gIFxuICBjb25zdCBmb3VuZCA9IGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAocGFzc2VkKSB7XG4gICAgICBzdGFydCA9IGluZGV4OyAgLy8vXG4gICAgICBcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZiAoZm91bmQpIHtcbiAgICBjb25zdCBkZWxldGVDb3VudCA9IDE7XG5cbiAgICBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCBlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBmb3VuZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihhcnJheSwgdGVzdCkge1xuICBjb25zdCBmaWx0ZXJlZEVsZW1lbnRzID0gW107XG4gIFxuICBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmICghcGFzc2VkKSB7XG4gICAgICBjb25zdCBzdGFydCA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgICBkZWxldGVDb3VudCA9IDEsXG4gICAgICAgICAgICBkZWxldGVkRWxlbWVudHMgPSBhcnJheS5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KSxcbiAgICAgICAgICAgIGZpcnN0RGVsZXRlZEVsZW1lbnQgPSBmaXJzdChkZWxldGVkRWxlbWVudHMpO1xuICAgICAgXG4gICAgICBmaWx0ZXJlZEVsZW1lbnRzLnVuc2hpZnQoZmlyc3REZWxldGVkRWxlbWVudCk7ICAvLy9cbiAgICB9XG4gIH0pO1xuICBcbiAgcmV0dXJuIGZpbHRlcmVkRWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kKGFycmF5LCB0ZXN0KSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgZm9yd2FyZHNGb3JFYWNoKGFycmF5LCAoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXNzZWQgPSB0ZXN0KGVsZW1lbnQsIGluZGV4KTtcblxuICAgIGlmIChwYXNzZWQpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcnVuZShhcnJheSwgdGVzdCkge1xuICBsZXQgcHJ1bmVkRWxlbWVudCA9IHVuZGVmaW5lZDtcbiAgXG4gIGFycmF5LnNvbWUoKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgcGFzc2VkID0gdGVzdChlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXBhc3NlZCkge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZGVsZXRlQ291bnQgPSAxLFxuICAgICAgICAgICAgZGVsZXRlZEVsZW1lbnRzID0gYXJyYXkuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCksXG4gICAgICAgICAgICBmaXJzdERlbGV0ZWRFbGVtZW50ID0gZmlyc3QoZGVsZXRlZEVsZW1lbnRzKTtcbiAgICAgIFxuICAgICAgcHJ1bmVkRWxlbWVudCA9IGZpcnN0RGVsZXRlZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgXG4gIHJldHVybiBwcnVuZWRFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0Y2goYXJyYXksIGVsZW1lbnQsIHRlc3QpIHtcbiAgY29uc3QgZm91bmQgPSBhcnJheS5zb21lKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuXG4gIGlmIChmb3VuZCkge1xuICAgIGFycmF5LnB1c2goZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZm91bmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdWdtZW50KGFycmF5MSwgYXJyYXkyLCB0ZXN0KSB7XG4gIGFycmF5Mi5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHBhc3NlZCkge1xuICAgICAgYXJyYXkxLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcGFyYXRlKGFycmF5LCBhcnJheTEsIGFycmF5MiwgdGVzdCkge1xuICBhcnJheS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHBhc3NlZCA9IHRlc3QoZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgcGFzc2VkID9cbiAgICAgIGFycmF5MS5wdXNoKGVsZW1lbnQpIDpcbiAgICAgICAgYXJyYXkyLnB1c2goZWxlbWVudCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKGVsZW1lbnQsIGluZGV4KTtcbiAgICBcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNTb21lKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0sXG4gICAgICAgICAgcmVzdWx0ID0gY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNFdmVyeShhcnJheSwgY2FsbGJhY2spIHtcbiAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5TGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmFja3dhcmRzRXZlcnkoYXJyYXksIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gYXJyYXlMZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGFycmF5W2luZGV4XSxcbiAgICAgICAgICByZXN1bHQgPSBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG5cbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGZvcndhcmRzRm9yRWFjaChhcnJheSwgKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgdmFsdWUgPSBjYWxsYmFjayh2YWx1ZSwgZWxlbWVudCwgaW5kZXgpO1xuICB9KTtcblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNSZWR1Y2UoYXJyYXksIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgbGV0IHZhbHVlID0gaW5pdGlhbFZhbHVlO1xuXG4gIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIHZhbHVlID0gY2FsbGJhY2sodmFsdWUsIGVsZW1lbnQsIGluZGV4KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXlMZW5ndGg7IGluZGV4KyspIHtcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xuXG4gICAgY2FsbGJhY2soZWxlbWVudCwgaW5kZXgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiYWNrd2FyZHNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBmb3IgKGxldCBpbmRleCA9IGFycmF5TGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XG5cbiAgICBjYWxsYmFjayhlbGVtZW50LCBpbmRleCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBmaXJzdCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgZm91cnRoLFxuICBmaWZ0aCxcbiAgZmlmdGhMYXN0LFxuICBmb3VydGhMYXN0LFxuICB0aGlyZExhc3QsXG4gIHNlY29uZExhc3QsXG4gIGZpcnN0TGFzdCxcbiAgbGFzdCxcbiAgaGVhZCxcbiAgdGFpbCxcbiAgYmFjayxcbiAgZnJvbnQsXG4gIHB1c2gsXG4gIHVuc2hpZnQsXG4gIGNvbmNhdCxcbiAgY2xlYXIsXG4gIGNvcHksXG4gIG1lcmdlLFxuICBzcGxpY2UsXG4gIHJlcGxhY2UsXG4gIGZpbHRlcixcbiAgZmluZCxcbiAgcHJ1bmUsXG4gIHBhdGNoLFxuICBhdWdtZW50LFxuICBzZXBhcmF0ZSxcbiAgZm9yd2FyZHNTb21lLFxuICBiYWNrd2FyZHNTb21lLFxuICBmb3J3YXJkc0V2ZXJ5LFxuICBiYWNrd2FyZHNFdmVyeSxcbiAgZm9yd2FyZHNSZWR1Y2UsXG4gIGJhY2t3YXJkc1JlZHVjZSxcbiAgZm9yd2FyZHNGb3JFYWNoLFxuICBiYWNrd2FyZHNGb3JFYWNoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3QgREFUQSA9IFwiZGF0YVwiO1xuZXhwb3J0IGNvbnN0IEVSUk9SID0gXCJlcnJvclwiO1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IFwic3RyaW5nXCI7XG5leHBvcnQgY29uc3QgTlVNQkVSID0gXCJudW1iZXJcIjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gXCJib29sZWFuXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVCA9IFwiZGVmYXVsdFwiO1xuZXhwb3J0IGNvbnN0IEVOVklST05NRU5UID0gXCJFTlZJUk9OTUVOVFwiO1xuZXhwb3J0IGNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNlY29uZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IENPTE9OX0NIQVJBQ1RFUiwgQU1QRVJTQU5EX0NIQVJBQ1RFUiB9IGZyb20gXCIuLi9jaGFyYWN0ZXJzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgbG93ZXJDYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgZXhpc3RpbmdOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLCAgLy8vXG4gICAgICAgIGV4aXN0aW5nTmFtZSA9IGV4aXN0aW5nTmFtZXMuZmluZCgoZXhpc3RpbmdOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmdMb3dlckNhc2VOYW1lID0gZXhpc3RpbmdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICBpZiAoZXhpc3RpbmdMb3dlckNhc2VOYW1lID09PSBsb3dlckNhc2VOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pIHx8IG51bGw7XG5cbiAgaWYgKGV4aXN0aW5nTmFtZSAhPT0gbnVsbCkge1xuICAgIGhlYWRlcnNbZXhpc3RpbmdOYW1lXSA9IHZhbHVlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKSB7XG4gIGNvbnN0IGxvd2VyQ2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgIGV4aXN0aW5nTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKSwgIC8vL1xuICAgICAgICBleGlzdGluZ05hbWUgPSBleGlzdGluZ05hbWVzLmZpbmQoKGV4aXN0aW5nTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9IGV4aXN0aW5nTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgaWYgKGV4aXN0aW5nTG93ZXJDYXNlTmFtZSA9PT0gbG93ZXJDYXNlTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSB8fCBudWxsO1xuXG4gIGlmIChleGlzdGluZ05hbWUgPT09IG51bGwpIHtcbiAgICBoZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcnRGcm9tSG9zdChob3N0KSB7XG4gIGxldCBwb3J0O1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBob3N0Lm1hdGNoKC9eaHR0cHM/OlxcL1xcLyhbXlxcL10rKS8pLFxuICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgaW5kZXggPSBzZWNvbmRNYXRjaC5pbmRleE9mKENPTE9OX0NIQVJBQ1RFUik7XG5cbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGNvbnN0IHNlY3VyZSA9IHNlY3VyZUZyb21Ib3N0KGhvc3QpO1xuXG4gICAgcG9ydCA9IHNlY3VyZSA/IDQ0MyA6IDgwOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzdGFydCA9IGluZGV4ICsgMSxcbiAgICAgICAgICBwb3J0U3RyaW5nID0gc2Vjb25kTWF0Y2guc3Vic3RyaW5nKHN0YXJ0KTtcblxuICAgIHBvcnQgPSBOdW1iZXIocG9ydFN0cmluZyk7XG4gIH1cblxuICByZXR1cm4gcG9ydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlY3VyZUZyb21Ib3N0KGhvc3QpIHtcbiAgY29uc3Qgc2VjdXJlID0gL15odHRwczpcXC9cXC8vLnRlc3QoaG9zdCk7XG5cbiAgcmV0dXJuIHNlY3VyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvc3RuYW1lRnJvbUhvc3QoaG9zdCkge1xuICBjb25zdCBtYXRjaGVzID0gaG9zdC5tYXRjaCgvXmh0dHBzPzpcXC9cXC8oW146XFwvXSspLyksXG4gICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICBob3N0bmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cblxuICByZXR1cm4gaG9zdG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSkge1xuICBjb25zdCBuYW1lcyA9IE9iamVjdC5rZXlzKHF1ZXJ5KSxcbiAgICAgICAgbmFtZXNMZW5ndGggPSBuYW1lcy5sZW5ndGgsXG4gICAgICAgIGxhc3RJbmRleCA9IG5hbWVzTGVuZ3RoIC0gMSxcbiAgICAgICAgcXVlcnlTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKHF1ZXJ5U3RyaW5nLCBuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbbmFtZV0sXG4gICAgICAgICAgICAgICAgZW5jb2RlZE5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSksXG4gICAgICAgICAgICAgICAgZW5jb2RlZFZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSxcbiAgICAgICAgICAgICAgICBhbXBlcnNhbmRPck5vdGhpbmcgPSAoaW5kZXggIT09IGxhc3RJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQU1QRVJTQU5EX0NIQVJBQ1RFUiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVNUFRZX1NUUklORztcbiAgXG4gICAgICAgICAgcXVlcnlTdHJpbmcgKz0gYCR7ZW5jb2RlZE5hbWV9PSR7ZW5jb2RlZFZhbHVlfSR7YW1wZXJzYW5kT3JOb3RoaW5nfWA7XG4gIFxuICAgICAgICAgIHJldHVybiBxdWVyeVN0cmluZztcbiAgICAgICAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gcXVlcnlTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5KGhvc3QsIHVyaSwgcXVlcnkpIHtcbiAgY29uc3QgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZ0Zyb21RdWVyeShxdWVyeSksXG4gICAgICAgIHVybCA9IChxdWVyeVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICAgYCR7aG9zdH0ke3VyaX1gIDpcbiAgICAgICAgICAgICAgICAgIGAke2hvc3R9JHt1cml9PyR7cXVlcnlTdHJpbmd9YDtcblxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG92ZXJ3cml0ZSxcbiAgdW5kZXJ3cml0ZSxcbiAgcG9ydEZyb21Ib3N0LFxuICBzZWN1cmVGcm9tSG9zdCxcbiAgaG9zdG5hbWVGcm9tSG9zdCxcbiAgcXVlcnlTdHJpbmdGcm9tUXVlcnksXG4gIHVybEZyb21Ib3N0VVJJQW5kUXVlcnlcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEdFVF9NRVRIT0QsIFBPU1RfTUVUSE9EIH0gZnJvbSBcIi4uL21ldGhvZHNcIjtcbmltcG9ydCB7IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFIH0gZnJvbSBcIi4uL2NvbnRlbnRUeXBlc1wiO1xuaW1wb3J0IHsgQUNDRVBUX0hFQURFUiwgQ09OVEVOVF9UWVBFX0hFQURFUiB9IGZyb20gXCIuLi9oZWFkZXJzXCI7XG5pbXBvcnQgeyB1bmRlcndyaXRlLCB1cmxGcm9tSG9zdFVSSUFuZFF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9odHRwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXQoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGhlYWRlcnM7IC8vL1xuICAgIGhlYWRlcnMgPSB7fTtcbiAgfVxuXG4gIGNvbnN0IG1ldGhvZCA9IEdFVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50ID0gbnVsbDtcblxuICB1bmRlcndyaXRlQWNjZXB0SGVhZGVyKGhlYWRlcnMsIGFjY2VwdCk7XG5cbiAgcmVxdWVzdChob3N0LCB1cmksIHF1ZXJ5LCBtZXRob2QsIGhlYWRlcnMsIGNvbnRlbnQsIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc3QoaG9zdCwgdXJpLCBxdWVyeSwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgaWYgKGNhbGxiYWNrID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxsYmFjayA9IGNvbnRlbnQ7XG4gICAgY29udGVudCA9IGhlYWRlcnM7XG4gICAgaGVhZGVycyA9IHt9O1xuICB9XG5cbiAgY29uc3QgbWV0aG9kID0gUE9TVF9NRVRIT0QsXG4gICAgICAgIGFjY2VwdCA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFLFxuICAgICAgICBjb250ZW50VHlwZSA9IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFO1xuXG4gIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KTtcblxuICB1bmRlcndyaXRlQ29udGVudFR5cGVIZWFkZXIoaGVhZGVycywgY29udGVudFR5cGUpO1xuXG4gIHJlcXVlc3QoaG9zdCwgdXJpLCBxdWVyeSwgbWV0aG9kLCBoZWFkZXJzLCBjb250ZW50LCBjYWxsYmFjayk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0KGhvc3QsIHVyaSwgcXVlcnksIG1ldGhvZCwgaGVhZGVycywgY29udGVudCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gdXJsRnJvbUhvc3RVUklBbmRRdWVyeShob3N0LCB1cmksIHF1ZXJ5KSxcbiAgICAgICAgYWNjZXB0ID0gaGVhZGVyc1tBQ0NFUFRfSEVBREVSXSB8fCBudWxsLFxuICAgICAgICBjb250ZW50VHlwZSA9IGhlYWRlcnNbQ09OVEVOVF9UWVBFX0hFQURFUl0gfHwgbnVsbCxcbiAgICAgICAgeG1sSHR0cFJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICBpZiAoY29udGVudFR5cGUgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgY29uc3QganNvbiA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbik7XG5cbiAgICBjb250ZW50ID0ganNvblN0cmluZzsgIC8vL1xuICB9XG5cbiAgeG1sSHR0cFJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgcmVhZHlTdGF0ZSwgc3RhdHVzLCByZXNwb25zZSB9ID0geG1sSHR0cFJlcXVlc3QsXG4gICAgICAgICAgc3RhdHVzQ29kZSA9IHN0YXR1cztcblxuICAgIGlmIChyZWFkeVN0YXRlID09IDQpIHtcbiAgICAgIGxldCBjb250ZW50ID0gcmVzcG9uc2U7XG5cbiAgICAgIGlmIChhY2NlcHQgPT09IEFQUExJQ0FUSU9OX0pTT05fQ09OVEVOVF9UWVBFKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QganNvblN0cmluZyA9IGNvbnRlbnQsICAvLy9cbiAgICAgICAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcblxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uOyAgLy8vXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29udGVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soY29udGVudCwgc3RhdHVzQ29kZSk7XG4gICAgfVxuICB9O1xuXG4gIHhtbEh0dHBSZXF1ZXN0Lm9wZW4obWV0aG9kLCB1cmwpO1xuXG4gIGlmIChhY2NlcHQgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKEFDQ0VQVF9IRUFERVIsIGFjY2VwdCk7XG4gIH1cblxuICBpZiAoY29udGVudFR5cGUgIT09IG51bGwpIHtcbiAgICB4bWxIdHRwUmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKENPTlRFTlRfVFlQRV9IRUFERVIsIGNvbnRlbnRUeXBlKTtcbiAgfVxuXG4gIChjb250ZW50ICE9PSBudWxsKSA/XG4gICAgeG1sSHR0cFJlcXVlc3Quc2VuZChjb250ZW50KSA6XG4gICAgICB4bWxIdHRwUmVxdWVzdC5zZW5kKCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0LFxuICBwb3N0LFxuICByZXF1ZXN0XG59XG5cbmZ1bmN0aW9uIHVuZGVyd3JpdGVBY2NlcHRIZWFkZXIoaGVhZGVycywgYWNjZXB0KSB7XG4gIGNvbnN0IG5hbWUgPSBBQ0NFUFRfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gYWNjZXB0OyAvLy9cblxuICB1bmRlcndyaXRlKGhlYWRlcnMsIG5hbWUsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gdW5kZXJ3cml0ZUNvbnRlbnRUeXBlSGVhZGVyKGhlYWRlcnMsIGNvbnRlbnRUWXBlKSB7XG4gIGNvbnN0IG5hbWUgPSBDT05URU5UX1RZUEVfSEVBREVSLCAgLy8vXG4gICAgICAgIHZhbHVlID0gY29udGVudFRZcGU7IC8vL1xuXG4gIHVuZGVyd3JpdGUoaGVhZGVycywgbmFtZSwgdmFsdWUpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCBsYXN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoTmFtZShwYXRoKSB7XG4gIHBhdGggPSBwYXRoLnJlcGxhY2UoL15cXC8vLCBFTVBUWV9TVFJJTkcpLnJlcGxhY2UoL1xcLyQvLCBFTVBUWV9TVFJJTkcpOyAvLy9cblxuICBjb25zdCBwYXRoTmFtZSA9ICgvXFwvLy50ZXN0KHBhdGgpID09PSBmYWxzZSk7XG5cbiAgcmV0dXJuIHBhdGhOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoVG9wbW9zdE5hbWUocGF0aCkge1xuICBjb25zdCBwYXRoTmFtZSA9IGlzUGF0aE5hbWUocGF0aCksXG4gICAgICAgIHBhdGhBYnNvbHV0ZVBhdGggPSBpc1BhdGhBYnNvbHV0ZVBhdGgocGF0aCksXG4gICAgICAgIHBhdGhUb3Btb3N0TmFtZSA9IChwYXRoTmFtZSAmJiBwYXRoQWJzb2x1dGVQYXRoKTtcblxuICByZXR1cm4gcGF0aFRvcG1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQYXRoUmVsYXRpdmVQYXRoKHBhdGgpIHtcbiAgY29uc3QgcGF0aFJlbGF0aXZlUGF0aCA9ICEvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aFJlbGF0aXZlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUGF0aEFic29sdXRlUGF0aChwYXRoKSB7XG4gIGNvbnN0IHBhdGhBYnNvbHV0ZVBhdGggPSAvXlxcLy8udGVzdChwYXRoKTtcblxuICByZXR1cm4gcGF0aEFic29sdXRlUGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCh0b3Btb3N0TmFtZSwgYWJzb2x1dGVQYXRoKSB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYF4ke3RvcG1vc3ROYW1lfSg/OlxcXFwvLispPyRgKSxcbiAgICAgICAgdG9wbW9zdE5hbWVJbkFic29sdXRlUGF0aCA9IHJlZ0V4cC50ZXN0KGFic29sdXRlUGF0aCk7XG5cbiAgcmV0dXJuIHRvcG1vc3ROYW1lSW5BYnNvbHV0ZVBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbWJpbmVQYXRocyhwYXRoLCByZWxhdGl2ZVBhdGgpIHtcbiAgbGV0IGNvbWJpbmVkUGF0aCA9IG51bGw7XG5cbiAgY29uc3QgcGF0aE5hbWVzID0gcGF0aC5zcGxpdCgvXFwvLyksXG4gICAgICAgIHJlbGF0aXZlUGF0aE5hbWVzID0gcmVsYXRpdmVQYXRoLnNwbGl0KC9cXC8vKTtcblxuICBsZXQgbGFzdFBhdGhOYW1lLFxuICAgICAgZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID0gZmlyc3QocmVsYXRpdmVQYXRoTmFtZXMpO1xuXG4gIGlmIChmaXJzdFJlbGF0aXZlUGF0aE5hbWUgPT09IFwiLlwiKSB7XG4gICAgcmVsYXRpdmVQYXRoTmFtZXMuc2hpZnQoKTtcbiAgfVxuXG4gIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgbGFzdFBhdGhOYW1lID0gbGFzdChwYXRoTmFtZXMpO1xuXG4gIHdoaWxlICgoZmlyc3RSZWxhdGl2ZVBhdGhOYW1lID09PSBcIi4uXCIpICYmIChsYXN0UGF0aE5hbWUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZWxhdGl2ZVBhdGhOYW1lcy5zaGlmdCgpO1xuICAgIHBhdGhOYW1lcy5wb3AoKTtcblxuICAgIGZpcnN0UmVsYXRpdmVQYXRoTmFtZSA9IGZpcnN0KHJlbGF0aXZlUGF0aE5hbWVzKTtcbiAgICBsYXN0UGF0aE5hbWUgPSBsYXN0KHBhdGhOYW1lcyk7XG4gIH1cblxuICBpZiAobGFzdFBhdGhOYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBjb21iaW5lZFBhdGhOYW1lcyA9IFtdLmNvbmNhdChwYXRoTmFtZXMpLmNvbmNhdChyZWxhdGl2ZVBhdGhOYW1lcyk7XG5cbiAgICBjb21iaW5lZFBhdGggPSBjb21iaW5lZFBhdGhOYW1lcy5qb2luKFwiL1wiKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZFBhdGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRlbmF0ZVBhdGhzKHBhdGgsIHJlbGF0aXZlUGF0aCkge1xuICBwYXRoID0gcGF0aC5yZXBsYWNlKC9cXC8kLywgRU1QVFlfU1RSSU5HKTsgIC8vL1xuXG4gIGNvbnN0IGNvbmNhdGVuYXRlZFBhdGggPSBgJHtwYXRofS8ke3JlbGF0aXZlUGF0aH1gO1xuXG4gIHJldHVybiBjb25jYXRlbmF0ZWRQYXRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBib3R0b21tb3N0TmFtZSA9IG51bGw7XG5cbiAgY29uc3QgbWF0Y2hlcyA9IHBhdGgubWF0Y2goL14uKlxcLyhbXlxcL10rXFwvPykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIGJvdHRvbW1vc3ROYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBib3R0b21tb3N0TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgocGF0aCkge1xuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKylcXC9bXlxcL10rXFwvPyQvKSxcbiAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgIHRvcG1vc3REaXJlY3RvcnlQYXRoID0gc2Vjb25kTWF0Y2g7IC8vL1xuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5UGF0aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgocGF0aCkge1xuICBsZXQgdG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eKFteXFwvXSspXFwvLiskLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHRvcG1vc3REaXJlY3RvcnlOYW1lID0gc2Vjb25kTWF0Y2g7ICAvLy9cbiAgfVxuXG4gIHJldHVybiB0b3Btb3N0RGlyZWN0b3J5TmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aChwYXRoKSB7XG4gIGxldCBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lID0gbnVsbDtcblxuICBjb25zdCBtYXRjaGVzID0gcGF0aC5tYXRjaCgvXiguKilcXC9bXlxcL10rXFwvPyQvKTtcblxuICBpZiAobWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpO1xuXG4gICAgcGF0aFdpdGhvdXRCb3R0b21tb3N0TmFtZSA9IHNlY29uZE1hdGNoOyAvLy9cbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dEJvdHRvbW1vc3ROYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoKHBhdGgpIHtcbiAgbGV0IHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBudWxsO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBwYXRoLm1hdGNoKC9eW15cXC9dK1xcLyguKykkLyk7XG5cbiAgaWYgKG1hdGNoZXMgIT09IG51bGwpIHtcbiAgICBjb25zdCBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKTtcblxuICAgIHBhdGhXaXRob3V0VG9wbW9zdERpcmVjdG9yeU5hbWUgPSBzZWNvbmRNYXRjaDtcbiAgfVxuXG4gIHJldHVybiBwYXRoV2l0aG91dFRvcG1vc3REaXJlY3RvcnlOYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGlzUGF0aE5hbWUsXG4gIGlzUGF0aFRvcG1vc3ROYW1lLFxuICBpc1BhdGhSZWxhdGl2ZVBhdGgsXG4gIGlzUGF0aEFic29sdXRlUGF0aCxcbiAgaXNUb3Btb3N0TmFtZUluQWJzb2x1dGVQYXRoLFxuICBjb21iaW5lUGF0aHMsXG4gIGNvbmNhdGVuYXRlUGF0aHMsXG4gIGJvdHRvbW1vc3ROYW1lRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlQYXRoRnJvbVBhdGgsXG4gIHRvcG1vc3REaXJlY3RvcnlOYW1lRnJvbVBhdGgsXG4gIHBhdGhXaXRob3V0Qm90dG9tbW9zdE5hbWVGcm9tUGF0aCxcbiAgcGF0aFdpdGhvdXRUb3Btb3N0RGlyZWN0b3J5TmFtZUZyb21QYXRoXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdoaWxzdChvcGVyYXRpb24sIGRvbmUsIGNvbnRleHQpIHtcclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgdGVybWluYXRlID0gb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuXHJcbiAgICBpZiAodGVybWluYXRlKSB7XHJcbiAgICAgIGRvbmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcXVlbmNlKG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBvcGVyYXRpb24gPSBvcGVyYXRpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHVhbGx5KG9wZXJhdGlvbnMsIGRvbmUsIGNvbnRleHQpIHtcclxuICBjb25zdCBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAwO1xyXG5cclxuICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgY291bnQrKztcclxuXHJcbiAgICBjb25zdCB0ZXJtaW5hdGUgPSAoY291bnQgPT09IGxlbmd0aCk7XHJcblxyXG4gICAgaWYgKHRlcm1pbmF0ZSkge1xyXG4gICAgICBkb25lKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvcGVyYXRpb25zLmZvckVhY2goKG9wZXJhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgIG9wZXJhdGlvbihuZXh0LCBkb25lLCBjb250ZXh0LCBpbmRleCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZGx5KG9wZXJhdGlvbiwgbGVuZ3RoLCBkb25lLCBjb250ZXh0KSB7XHJcbiAgbGV0IGNvdW50ID0gMDtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgb3BlcmF0aW9uKG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSAtMTtcclxuXHJcbiAgZnVuY3Rpb24gbmV4dCgpIHtcclxuICAgIGNvdW50Kys7XHJcblxyXG4gICAgY29uc3QgdGVybWluYXRlID0gKGNvdW50ID09PSBsZW5ndGgpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2t3YXJkc0ZvckVhY2goYXJyYXksIG9wZXJhdGlvbiwgZG9uZSwgY29udGV4dCkge1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgIC8vL1xyXG5cclxuICBsZXQgY291bnQgPSBsZW5ndGg7XHJcblxyXG4gIGZ1bmN0aW9uIG5leHQoKSB7XHJcbiAgICBjb3VudC0tO1xyXG5cclxuICAgIGNvbnN0IHRlcm1pbmF0ZSA9IChjb3VudCA9PT0gLTEpO1xyXG5cclxuICAgIGlmICh0ZXJtaW5hdGUpIHtcclxuICAgICAgZG9uZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBjb3VudCwgIC8vL1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gYXJyYXlbaW5kZXhdO1xyXG5cclxuICAgICAgb3BlcmF0aW9uKGVsZW1lbnQsIG5leHQsIGRvbmUsIGNvbnRleHQsIGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHQoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHdoaWxzdCxcclxuICBmb3JFYWNoLFxyXG4gIHNlcXVlbmNlLFxyXG4gIGV2ZW50dWFsbHksXHJcbiAgcmVwZWF0ZWRseSxcclxuICBmb3J3YXJkc0ZvckVhY2gsXHJcbiAgYmFja3dhcmRzRm9yRWFjaFxyXG59O1xyXG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgbGV2ZWxzIH0gZnJvbSBcIi4vbGV2ZWxzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ldGhvZHMgfSBmcm9tIFwiLi9tZXRob2RzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGhlYWRlcnMgfSBmcm9tIFwiLi9oZWFkZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGtleUNvZGVzIH0gZnJvbSBcIi4va2V5Q29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZW5jb2RpbmdzIH0gZnJvbSBcIi4vZW5jb2RpbmdzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNoYXJhY3RlcnMgfSBmcm9tIFwiLi9jaGFyYWN0ZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c0NvZGVzIH0gZnJvbSBcIi4vc3RhdHVzQ29kZXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgY29udGVudFR5cGVzIH0gZnJvbSBcIi4vY29udGVudFR5cGVzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0YXR1c01lc3NhZ2VzIH0gZnJvbSBcIi4vc3RhdHVzTWVzc2FnZXNcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBhamF4VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FqYXhcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBwYXRoVXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3BhdGhcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaHR0cFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9odHRwXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9hc3luY2hyb25vdXNcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmV4cG9ydCBjb25zdCB7IGZpcnN0LCBzZWNvbmQsIHRoaXJkLCBmb3VydGgsIHB1c2gsIG1lcmdlLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXksIGVsZW1lbnQpIHtcbiAgYXJyYXkucHVzaChlbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBlcm11dGUoYXJyYXksIHBsYWNlcykge1xuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICAgIGN1dCA9IGxlbmd0aCAtIHBsYWNlcyxcbiAgICAgICAgbGVhZGluZ0VsZW1lbnRzID0gYXJyYXkuc2xpY2UoMCwgY3V0KSxcbiAgICAgICAgdHJhaWxpbmdFbGVtZW50cyA9IGFycmF5LnNsaWNlKGN1dCk7XG5cbiAgYXJyYXkgPSBbIC4uLnRyYWlsaW5nRWxlbWVudHMsIC4uLmxlYWRpbmdFbGVtZW50cyBdO1xuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IHsgZ3VhcmFudGVlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuICBnZXRQcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnRpZXM7XG4gIH1cblxuICBnZXRDaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkRWxlbWVudHM7XG4gIH1cblxuICBzZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICB9XG5cbiAgc2V0Q2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gICAgdGhpcy5jaGlsZEVsZW1lbnRzID0gY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IG5ldyBDbGFzcyguLi5yZW1haW5pbmdBcmd1bWVudHMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSAodHlwZW9mIGVsZW1lbnQuY2hpbGRFbGVtZW50cyA9PT0gRlVOQ1RJT04pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWUoZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLmNoaWxkRWxlbWVudHMgfHwgW107XG5cbiAgICBlbGVtZW50LnNldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG5cbiAgICBlbGVtZW50LnNldENoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gemVybzIoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gemVybzMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB6ZXJvNCgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVuZ3RoMih2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHgqeCArIHkqeSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZW5ndGgzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlbmd0aDQodmVjdG9yKSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIE1hdGguc3FydCh4KnggKyB5KnkgKyB6KnogKyB3KncpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG90Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7IHJldHVybiAodmVjdG9yQVswXSAqIHZlY3RvckJbMF0gKyB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDModmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdDQodmVjdG9yQSwgdmVjdG9yQikgeyByZXR1cm4gKHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdICsgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0gKyB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSArIHZlY3RvckFbM10gKiB2ZWN0b3JCWzNdKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY3Jvc3MzKHZlY3RvckEsIHZlY3RvckIpIHtcbiAgY29uc3QgYXggPSB2ZWN0b3JBWzBdLCBheSA9IHZlY3RvckFbMV0sIGF6ID0gdmVjdG9yQVsyXSxcbiAgICAgICAgYnggPSB2ZWN0b3JCWzBdLCBieSA9IHZlY3RvckJbMV0sIGJ6ID0gdmVjdG9yQlsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIGF5ICogYnogLSBheiAqIGJ5LFxuICAgIGF6ICogYnggLSBheCAqIGJ6LFxuICAgIGF4ICogYnkgLSBheSAqIGJ4LFxuXG4gIF0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UyKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpc2UzKHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuICAgICAgICBsZW5ndGggPSBNYXRoLnNxcnQoeCp4ICsgeSp5ICsgeip6KTtcblxuICBpZiAobGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICB4IC8gbGVuZ3RoLFxuICAgICAgeSAvIGxlbmd0aCxcbiAgICAgIHogLyBsZW5ndGgsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXNlNCh2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXSxcbiAgICAgICAgdyA9IHZlY3RvclszXSxcbiAgICAgICAgbGVuZ3RoID0gTWF0aC5zcXJ0KHgqeCArIHkqeSArIHoqeiArIHcqdyk7XG5cbiAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgeCAvIGxlbmd0aCxcbiAgICAgIHkgLyBsZW5ndGgsXG4gICAgICB6IC8gbGVuZ3RoLFxuICAgICAgdyAvIGxlbmd0aCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Mih2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWZsZWN0Myh2ZWN0b3IpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAtdmVjdG9yWzBdLFxuICAgIC12ZWN0b3JbMV0sXG4gICAgLXZlY3RvclsyXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZmxlY3Q0KHZlY3Rvcikge1xuICByZXR1cm4gKFtcblxuICAgIC12ZWN0b3JbMF0sXG4gICAgLXZlY3RvclsxXSxcbiAgICAtdmVjdG9yWzJdLFxuICAgIC12ZWN0b3JbM10sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnVuY2F0ZTQodmVjdG9yKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yWzBdLFxuICAgIHZlY3RvclsxXSxcbiAgICB2ZWN0b3JbMl1cblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlMih2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTModmVjdG9yLCBzY2FsYXIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JbMF0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzFdICogc2NhbGFyLFxuICAgIHZlY3RvclsyXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlNCh2ZWN0b3IsIHNjYWxhcikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvclswXSAqIHNjYWxhcixcbiAgICB2ZWN0b3JbMV0gKiBzY2FsYXIsXG4gICAgdmVjdG9yWzJdICogc2NhbGFyLFxuICAgIHZlY3RvclszXSAqIHNjYWxhcixcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZDIodmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKyB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKyB2ZWN0b3JCWzFdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkMyh2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSArIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSArIHZlY3RvckJbMV0sXG4gICAgdmVjdG9yQVsyXSArIHZlY3RvckJbMl0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQ0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICsgdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICsgdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICsgdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICsgdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAtIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAtIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdDModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gLSB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gLSB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gLSB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VidHJhY3Q0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdIC0gdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdIC0gdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdIC0gdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdIC0gdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5Mih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gIHJldHVybiAoW1xuXG4gICAgdmVjdG9yQVswXSAqIHZlY3RvckJbMF0sXG4gICAgdmVjdG9yQVsxXSAqIHZlY3RvckJbMV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtdWx0aXBseTModmVjdG9yQSwgdmVjdG9yQikge1xuICByZXR1cm4gKFtcblxuICAgIHZlY3RvckFbMF0gKiB2ZWN0b3JCWzBdLFxuICAgIHZlY3RvckFbMV0gKiB2ZWN0b3JCWzFdLFxuICAgIHZlY3RvckFbMl0gKiB2ZWN0b3JCWzJdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KHZlY3RvckEsIHZlY3RvckIpIHtcbiAgcmV0dXJuIChbXG5cbiAgICB2ZWN0b3JBWzBdICogdmVjdG9yQlswXSxcbiAgICB2ZWN0b3JBWzFdICogdmVjdG9yQlsxXSxcbiAgICB2ZWN0b3JBWzJdICogdmVjdG9yQlsyXSxcbiAgICB2ZWN0b3JBWzNdICogdmVjdG9yQlszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybTIodmVjdG9yLCBtYXRyaXgpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFswXSAqIHggKyBtYXRyaXhbMl0gKiB5LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbM10gKiB5LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNmb3JtMyh2ZWN0b3IsIG1hdHJpeCkge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdICogeCArIG1hdHJpeFszXSAqIHkgKyBtYXRyaXhbNl0gKiB6LFxuICAgIG1hdHJpeFsxXSAqIHggKyBtYXRyaXhbNF0gKiB5ICsgbWF0cml4WzddICogeixcbiAgICBtYXRyaXhbMl0gKiB4ICsgbWF0cml4WzVdICogeSArIG1hdHJpeFs4XSAqIHosXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm00KHZlY3RvciwgbWF0cml4KSB7XG4gIGNvbnN0IHggPSB2ZWN0b3JbMF0sXG4gICAgICAgIHkgPSB2ZWN0b3JbMV0sXG4gICAgICAgIHogPSB2ZWN0b3JbMl0sXG4gICAgICAgIHcgPSB2ZWN0b3JbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbIDBdICogeCArIG1hdHJpeFsgNF0gKiB5ICsgbWF0cml4WyA4XSAqIHogKyBtYXRyaXhbMTJdICogdyxcbiAgICBtYXRyaXhbIDFdICogeCArIG1hdHJpeFsgNV0gKiB5ICsgbWF0cml4WyA5XSAqIHogKyBtYXRyaXhbMTNdICogdyxcbiAgICBtYXRyaXhbIDJdICogeCArIG1hdHJpeFsgNl0gKiB5ICsgbWF0cml4WzEwXSAqIHogKyBtYXRyaXhbMTRdICogdyxcbiAgICBtYXRyaXhbIDNdICogeCArIG1hdHJpeFsgN10gKiB5ICsgbWF0cml4WzExXSAqIHogKyBtYXRyaXhbMTVdICogdyxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICB6ZXJvMixcbiAgemVybzMsXG4gIHplcm80LFxuICBsZW5ndGgyLFxuICBsZW5ndGgzLFxuICBsZW5ndGg0LFxuICBkb3QyLFxuICBkb3QzLFxuICBkb3Q0LFxuICBjcm9zczMsXG4gIG5vcm1hbGlzZTIsXG4gIG5vcm1hbGlzZTMsXG4gIG5vcm1hbGlzZTQsXG4gIHJlZmxlY3QyLFxuICByZWZsZWN0MyxcbiAgcmVmbGVjdDQsXG4gIHRydW5jYXRlNCxcbiAgc2NhbGUyLFxuICBzY2FsZTMsXG4gIHNjYWxlNCxcbiAgYWRkMixcbiAgYWRkMyxcbiAgYWRkNCxcbiAgc3VidHJhY3QyLFxuICBzdWJ0cmFjdDMsXG4gIHN1YnRyYWN0NCxcbiAgbXVsdGlwbHkyLFxuICBtdWx0aXBseTMsXG4gIG11bHRpcGx5NCxcbiAgdHJhbnNmb3JtMixcbiAgdHJhbnNmb3JtMyxcbiAgdHJhbnNmb3JtNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3VidHJhY3QzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGdlIHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24sIGV4dGVudCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmV4dGVudCA9IGV4dGVudDtcbiAgfVxuXG4gIGdldFBvc2l0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0RXh0ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmV4dGVudDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5zbGljZSgpLFxuICAgICAgICAgIGV4dGVudCA9IHRoaXMuZXh0ZW50LnNsaWNlKCksXG4gICAgICAgICAgZWRnZSA9IG5ldyBFZGdlKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KENsYXNzLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KSB7XG4gICAgaWYgKGVuZFZlcnRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbmRWZXJ0ZXggPSBzdGFydFZlcnRleDsgIC8vL1xuICAgICAgc3RhcnRWZXJ0ZXggPSBDbGFzczsgIC8vL1xuICAgICAgQ2xhc3MgPSBFZGdlOyAvLy9cbiAgICB9XG4gICAgXG4gICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IHN0YXJ0VmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgZW5kUG9zaXRpb24gPSBlbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbiA9IHN0YXJ0UG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFBvc2l0aW9uLCBzdGFydFBvc2l0aW9uKSxcbiAgICAgICAgICBlZGdlID0gbmV3IENsYXNzKHBvc2l0aW9uLCBleHRlbnQpO1xuXG4gICAgcmV0dXJuIGVkZ2U7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYWRkMywgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbih2ZXJ0aWNlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uID0gdmVydGljZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uLCB2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbiA9IHZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHNjYWxlZFZlcnRleFBvc2l0aW9uID0gc2NhbGUzKHZlcnRleFBvc2l0aW9uLCAxLzMpO1xuXG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IGFkZDMobWlkUG9pbnRQb3NpdGlvbiwgc2NhbGVkVmVydGV4UG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb247XG4gIH0sIFsgMCwgMCwgMCBdKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbikge1xuICBtaWRQb2ludFBvc2l0aW9uID0gWyAuLi5taWRQb2ludFBvc2l0aW9uLnNsaWNlKDAsIDIpLCAwIF07ICAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcykge1xuICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpLFxuICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyB8fCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzOyAvLy9cblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlcyhtaWRQb2ludFBvc2l0aW9uLCBtYXNraW5nRWRnZXMpIHtcbiAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzLnJlZHVjZSgobWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMpIHtcbiAgICAgIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnRPZk1hc2tpbmdFZGdlID0gbWFza2luZ0VkZ2UuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZXMgPSBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0T2ZNYXNraW5nRWRnZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdE9mTWFza2luZ0VkZ2VzO1xufVxuXG5mdW5jdGlvbiBpc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMobWlkUG9pbnRQb3NpdGlvbiwgbWFza2luZ0VkZ2VzKSB7XG4gIGNvbnN0IG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0T2ZNYXNraW5nRWRnZXMgPSBtYXNraW5nRWRnZXMucmVkdWNlKChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzLCBtYXNraW5nRWRnZSkgPT4ge1xuICAgIGlmIChtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzKSB7XG4gICAgICBjb25zdCBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2UgPSBtYXNraW5nRWRnZS5pc01pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0KG1pZFBvaW50UG9zaXRpb24pO1xuXG4gICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzID0gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlO1xuICAgIH1cblxuICAgIHJldHVybiBtaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodE9mTWFza2luZ0VkZ2VzO1xuICB9LCB0cnVlKTtcblxuICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlUmlnaHRPZk1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcblxuaW1wb3J0IHsgdGhpcmQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdFZGdlIGV4dGVuZHMgRWRnZSB7XG4gIGlzTWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgbWlkUG9pbnRQb3NpdGlvbiA9IHByb2plY3RNaWRQb2ludFBvc2l0aW9uT250b1hZUGxhbmUobWlkUG9pbnRQb3NpdGlvbik7ICAvLy9cblxuICAgIGNvbnN0IGV4dGVudCA9IHRoaXMuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc2l0aW9uKCksXG4gICAgICAgICAgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uID0gc3VidHJhY3QzKG1pZFBvaW50UG9zaXRpb24sIHBvc2l0aW9uKSxcbiAgICAgICAgICBjcm9zc1Byb2R1Y3RDb21wb25lbnRzID0gY3Jvc3MzKGV4dGVudCwgbWlkUG9pbnRSZWxhdGl2ZVBvc2l0aW9uKSwgLy8vXG4gICAgICAgICAgdGhpcmRDcm9zc1Byb2R1Y3RDb21wb25lbnQgPSB0aGlyZChjcm9zc1Byb2R1Y3RDb21wb25lbnRzKSxcbiAgICAgICAgICBtaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0ID0gKHRoaXJkQ3Jvc3NQcm9kdWN0Q29tcG9uZW50ID4gMCk7XG5cbiAgICByZXR1cm4gbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdDtcbiAgfVxuICBcbiAgaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVSaWdodChtaWRQb2ludFBvc2l0aW9uKSB7XG4gICAgY29uc3QgbWlkUG9pbnRQb3NpdGlvblRvVGhlTGVmdCA9IHRoaXMuaXNNaWRQb2ludFBvc2l0aW9uVG9UaGVMZWZ0KG1pZFBvaW50UG9zaXRpb24pLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0ID0gIW1pZFBvaW50UG9zaXRpb25Ub1RoZUxlZnQ7XG4gICAgXG4gICAgcmV0dXJuIG1pZFBvaW50UG9zaXRpb25Ub1RoZVJpZ2h0O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KHN0YXJ0VmVydGV4LCBlbmRWZXJ0ZXgpIHsgcmV0dXJuIEVkZ2UuZnJvbVN0YXJ0VmVydGV4QW5kRW5kVmVydGV4KE1hc2tpbmdFZGdlLCBzdGFydFZlcnRleCwgZW5kVmVydGV4KTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB6ZXJvMiwgemVybzMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUiA9IDA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9HID0gMDtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0IgPSAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfQSA9IDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9IT1NUID0gXCJcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFUFRIID0gMS4wO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9GQVIgPSAxMDAwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfWl9ORUFSID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BFUlNJU1QgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZJRUxEX09GX1ZJRVcgPSA0NTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfQU5HTEVTID0gemVybzIoKTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyA9IHplcm8zKCk7XG5leHBvcnQgY29uc3QgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgPSAwLjAwMDAwMDE7XG5leHBvcnQgY29uc3QgREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFID0gNTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lOSVRJQUxfUE9TSVRJT04gPSBbIDAsIDAsIDUgXTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZID0gMTtcbmV4cG9ydCBjb25zdCBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZID0gMTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IgfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9PbmUodmFsdWUsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikgeyByZXR1cm4gaXNBcHByb3hpbWF0ZWx5RXF1YWxUbyh2YWx1ZSwgMSwgbWFyZ2luT2ZFcnJvcik7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKHZhbHVlLCBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1IpIHsgcmV0dXJuIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWUsIDAsIG1hcmdpbk9mRXJyb3IpOyB9XG5cbmZ1bmN0aW9uIGlzQXBwcm94aW1hdGVseUVxdWFsVG8odmFsdWVBLCB2YWx1ZUIsIG1hcmdpbk9mRXJyb3IgPSBERUZBVUxUX01BUkdJTl9PRl9FUlJPUikge1xuICBjb25zdCBkaWZmZXJlbmNlID0gdmFsdWVBIC0gdmFsdWVCLFxuICAgICAgICBhYnNvbHV0ZURpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlKSxcbiAgICAgICAgYXBwcm94aW1hdGVseUVxdWFsID0gKGFic29sdXRlRGlmZmVyZW5jZSA8IG1hcmdpbk9mRXJyb3IpO1xuXG4gIHJldHVybiBhcHByb3hpbWF0ZWx5RXF1YWw7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgLSBhbmdsZUNvc2luZSkgLyAyKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlQ29zaW5lKSB7IHJldHVybiBNYXRoLnNxcnQoKDEgKyBhbmdsZUNvc2luZSkgLyAyKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkb3QzLCBjcm9zczMsIG5vcm1hbGlzZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcHByb3hpbWF0ZVwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUhhbGZBbmdsZUNvc2luZSwgY2FsY3VsYXRlSGFsZkFuZ2xlU2luZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvYW5nbGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZUltYWdpbmFyeVF1YXRlcm5pb24oaW1hZ2luYXJ5UXVhdGVybmlvbiwgcm90YXRpb25RdWF0ZXJuaW9uLCBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKSB7IHJldHVybiBoYW1pbHRvblByb2R1Y3QoaGFtaWx0b25Qcm9kdWN0KHJvdGF0aW9uUXVhdGVybmlvbiwgaW1hZ2luYXJ5UXVhdGVybmlvbiksIGludmVyc2VSb3RhdGlvblF1YXRlcm5pb24pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCByb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzID0gcm90YXRpb25RdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZmlyc3Qocm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZFJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudCA9IHNlY29uZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgdGhpcmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQgPSB0aGlyZChyb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRzKSxcbiAgICAgICAgZm91cnRoUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50ID0gZm91cnRoKHJvdGF0aW9uUXVhdGVybmlvbkNvbXBvbmVudHMpLFxuICAgICAgICBpbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGZpcnN0Um90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1zZWNvbmRSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnQsXG4gICAgICAgICAgLXRoaXJkUm90YXRpb25RdWF0ZXJuaW9uQ29tcG9uZW50LFxuICAgICAgICAgIC1mb3VydGhSb3RhdGlvblF1YXRlcm5pb25Db21wb25lbnRcbiAgICAgICAgXTtcblxuICByZXR1cm4gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbikge1xuICBjb25zdCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IHJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3QgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbjsgIC8vL1xuXG4gIHJldHVybiBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpIHtcbiAgY29uc3QgZXh0ZW50ID0gbm9ybWFsLmdldEV4dGVudCgpLFxuICAgICAgICB1bml0Tm9ybWFsID0gZXh0ZW50LCAgLy8vXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF0sXG4gICAgICAgIGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGRvdDModW5pdE5vcm1hbCwgekF4aXMpLFxuICAgICAgICBjcm9zc1Byb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcyA9IGNyb3NzMyh1bml0Tm9ybWFsLCB6QXhpcyksXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSA9IGRvdFByb2R1Y3RPZlVuaXROb3JtYWxBbmRaQXhpcywgLy8vXG4gICAgICAgIGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUgPSBNYXRoLmFicyhhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25Db3NpbmVBYnNvbHV0ZVZhbHVlQXBwcm94aW1hdGVseUVxdWFsVG9PbmUgPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvT25lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWUpLFxuICAgICAgICBheGlzT2ZSb3RhdGlvbiA9IGFuZ2xlT2ZSb3RhdGlvbkNvc2luZUFic29sdXRlVmFsdWVBcHByb3hpbWF0ZWx5RXF1YWxUb09uZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsgMSwgMCwgMCBdIDogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Jvc3NQcm9kdWN0T2ZVbml0Tm9ybWFsQW5kWkF4aXMsXG4gICAgICAgIHVuaXRBeGlzT2ZSb3RhdGlvbiA9IG5vcm1hbGlzZTMoYXhpc09mUm90YXRpb24pLFxuICAgICAgICBoYWxmQW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlQ29zaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lID0gY2FsY3VsYXRlSGFsZkFuZ2xlU2luZShhbmdsZU9mUm90YXRpb25Db3NpbmUpLFxuICAgICAgICB1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzID0gdW5pdEF4aXNPZlJvdGF0aW9uLCAgLy8vXG4gICAgICAgIGZpcnN0QXhpc09mUm90YXRpb25Db21wb25lbnQgPSBmaXJzdCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kQXhpc09mUm90YXRpb25Db21wb25lbnQgPSBzZWNvbmQodW5pdEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50cyksXG4gICAgICAgIHRoaXJkQXhpc09mUm90YXRpb25Db21wb25lbnQgPSB0aGlyZCh1bml0QXhpc09mUm90YXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgYXJiaXRyYXJ5Um90YXRpb25RdWF0ZXJuaW9uID0gW1xuICAgICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUsXG4gICAgICAgICAgZmlyc3RBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lLFxuICAgICAgICAgIHNlY29uZEF4aXNPZlJvdGF0aW9uQ29tcG9uZW50ICogaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUsXG4gICAgICAgICAgdGhpcmRBeGlzT2ZSb3RhdGlvbkNvbXBvbmVudCAqIGhhbGZBbmdsZU9mUm90YXRpb25TaW5lXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24obWFza2luZ0VkZ2UpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VFeHRlbnQgPSBtYXNraW5nRWRnZS5nZXRFeHRlbnQoKSxcbiAgICAgICAgdW5pdE1hc2tpbmdFZGdlRXh0ZW50ID0gbm9ybWFsaXNlMyhtYXNraW5nRWRnZUV4dGVudCksXG4gICAgICAgIHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMgPSB1bml0TWFza2luZ0VkZ2VFeHRlbnQsICAvLy9cbiAgICAgICAgZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdCh1bml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50ID0gc2Vjb25kKHVuaXRNYXNraW5nRWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBhbmdsZU9mUm90YXRpb25TaW5lID0gZmlyc3RVbml0TWFza2luZ0VkZ2VFeHRlbnRDb21wb25lbnQsICAvLy9cbiAgICAgICAgYW5nbGVPZlJvdGF0aW9uQ29zaW5lID0gc2Vjb25kVW5pdE1hc2tpbmdFZGdlRXh0ZW50Q29tcG9uZW50LCAgLy8vXG4gICAgICAgIGhhbGZBbmdsZU9mUm90YXRpb25Db3NpbmUgPSBjYWxjdWxhdGVIYWxmQW5nbGVDb3NpbmUoYW5nbGVPZlJvdGF0aW9uQ29zaW5lKSxcbiAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmUgPSAoYW5nbGVPZlJvdGF0aW9uU2luZSA+IDAgKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICtjYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1jYWxjdWxhdGVIYWxmQW5nbGVTaW5lKGFuZ2xlT2ZSb3RhdGlvbkNvc2luZSksXG4gICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBbXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvbkNvc2luZSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgaGFsZkFuZ2xlT2ZSb3RhdGlvblNpbmVcbiAgICAgICAgXTtcblxuICByZXR1cm4gcm90YXRpb25BYm91dFpBeGlzUXVhdGVybmlvbjtcbn1cblxuZnVuY3Rpb24gaGFtaWx0b25Qcm9kdWN0KHF1YXRlcm5pb25BLCBxdWF0ZXJuaW9uQikge1xuICBjb25zdCBhMSA9IHF1YXRlcm5pb25BWzBdLFxuICAgICAgICBiMSA9IHF1YXRlcm5pb25BWzFdLFxuICAgICAgICBjMSA9IHF1YXRlcm5pb25BWzJdLFxuICAgICAgICBkMSA9IHF1YXRlcm5pb25BWzNdLFxuICAgICAgICBhMiA9IHF1YXRlcm5pb25CWzBdLFxuICAgICAgICBiMiA9IHF1YXRlcm5pb25CWzFdLFxuICAgICAgICBjMiA9IHF1YXRlcm5pb25CWzJdLFxuICAgICAgICBkMiA9IHF1YXRlcm5pb25CWzNdLFxuICAgICAgICBhID0gYTEgKiBhMiAtIGIxICogYjIgLSBjMSAqIGMyIC0gZDEgKiBkMixcbiAgICAgICAgYiA9IGExICogYjIgKyBiMSAqIGEyICsgYzEgKiBkMiAtIGQxICogYzIsXG4gICAgICAgIGMgPSBhMSAqIGMyIC0gYjEgKiBkMiArIGMxICogYTIgKyBkMSAqIGIyLFxuICAgICAgICBkID0gYTEgKiBkMiArIGIxICogYzIgLSBjMSAqIGIyICsgZDEgKiBhMixcbiAgICAgICAgcXVhdGVybmlvbiA9IFsgYSwgYiwgYywgZCBdO1xuXG4gIHJldHVybiBxdWF0ZXJuaW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uLCBjYWxjdWxhdGVJbnZlcnNlUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByb3RhdGVQb3NpdGlvbihwb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gIGNvbnN0IGltYWdpbmFyeVF1YXRlcm5pb24gPSBpbWFnaW5hcnlRdWF0ZXJuaW9uRnJvbVBvc2l0aW9uKHBvc2l0aW9uKSxcbiAgICAgICAgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUludmVyc2VSb3RhdGlvblF1YXRlcm5pb24ocm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgcm90YXRlZEltYWdpbmFyeVF1YXRlcm5pb24gPSByb3RhdGVJbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24sIHJvdGF0aW9uUXVhdGVybmlvbiwgaW52ZXJzZVJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgcG9zaXRpb24gPSBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKHJvdGF0ZWRJbWFnaW5hcnlRdWF0ZXJuaW9uKTtcblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbmZ1bmN0aW9uIGltYWdpbmFyeVF1YXRlcm5pb25Gcm9tUG9zaXRpb24ocG9zaXRpb24pIHsgcmV0dXJuIFswLCAuLi5wb3NpdGlvbl07IH0gIC8vL1xuXG5mdW5jdGlvbiBwb3NpdGlvbkZyb21JbWFnaW5hcnlRdWF0ZXJuaW9uKGltYWdpbmFyeVF1YXRlcm5pb24pIHsgcmV0dXJuIGltYWdpbmFyeVF1YXRlcm5pb24uc2xpY2UoMSk7IH0gIC8vL1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgYWRkMywgc3VidHJhY3QzLCBzY2FsZTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSB7XG4gIGxldCBpbnRlcnNlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0IGVkZ2VOb25QYXJhbGxlbCA9IGlzRWRnZU5vblBhcmFsbGVsKGVkZ2UpO1xuXG4gIGlmIChlZGdlTm9uUGFyYWxsZWwpIHtcbiAgICBjb25zdCBlZGdlSW50ZXJzZWN0aW9uID0gY2FsY3VsYXRlRWRnZUludGVyc2VjdGlvbihlZGdlLCBmaXJzdFBvc2l0aW9uQ29tcG9uZW50KSxcbiAgICAgICAgICBlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCA9ICgoZWRnZUludGVyc2VjdGlvbiA+IDAgKSAmJiAoZWRnZUludGVyc2VjdGlvbiA8IDEpKTtcblxuICAgIGlmIChlZGdlSW50ZXJzZWN0aW9uTm9uVHJpdmlhbCkge1xuICAgICAgaW50ZXJzZWN0aW9uID0gZWRnZUludGVyc2VjdGlvbjsgIC8vL1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpbnRlcnNlY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zKSB7XG4gIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG5vbk51bGxJbnRlcnNlY3Rpb25zLCBpbnRlcnNlY3Rpb24pID0+IHtcbiAgICBpZiAoaW50ZXJzZWN0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9uID0gaW50ZXJzZWN0aW9uOyAvLy9cblxuICAgICAgbm9uTnVsbEludGVyc2VjdGlvbnMucHVzaChub25OdWxsSW50ZXJzZWN0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gbm9uTnVsbEludGVyc2VjdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVOdWxsSW50ZXJzZWN0aW9uSW5kZXgoaW50ZXJzZWN0aW9ucykge1xuICBjb25zdCBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbnRlcnNlY3Rpb25zLnJlZHVjZSgobnVsbEludGVyc2VjdGlvbkluZGV4LCBpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgaWYgKG51bGxJbnRlcnNlY3Rpb25JbmRleCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGludGVyc2VjdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBudWxsSW50ZXJzZWN0aW9uSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbnVsbEludGVyc2VjdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9uTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpIHtcbiAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW50ZXJzZWN0aW9ucy5yZWR1Y2UoKG51bGxJbnRlcnNlY3Rpb25JbmRleCwgaW50ZXJzZWN0aW9uLCBpbmRleCkgPT4ge1xuICAgIGlmIChudWxsSW50ZXJzZWN0aW9uSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGlmIChpbnRlcnNlY3Rpb24gIT09IG51bGwpIHtcbiAgICAgICAgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG51bGxJbnRlcnNlY3Rpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uKHN0YXJ0VmVydGV4UG9zaXRpb24sIGVuZFZlcnRleFBvc2l0aW9uLCBpbnRlcnNlY3Rpb24pIHtcbiAgY29uc3QgZXh0ZW50ID0gc3VidHJhY3QzKGVuZFZlcnRleFBvc2l0aW9uLCBzdGFydFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgb2Zmc2V0ID0gc2NhbGUzKGV4dGVudCwgaW50ZXJzZWN0aW9uKSxcbiAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBhZGQzKHN0YXJ0VmVydGV4UG9zaXRpb24sIG9mZnNldCk7XG5cbiAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xufVxuXG5mdW5jdGlvbiBpc0VkZ2VOb25QYXJhbGxlbChlZGdlKSB7XG4gIGNvbnN0IGVkZ2VFeHRlbnQgPSBlZGdlLmdldEV4dGVudCgpLFxuICAgICAgICBlZGdlRXh0ZW50Q29tcG9uZW50cyA9IGVkZ2VFeHRlbnQsIC8vL1xuICAgICAgICBmaXJzdEVkZ2VFeHRlbnRDb21wb25lbnQgPSBmaXJzdChlZGdlRXh0ZW50Q29tcG9uZW50cyksXG4gICAgICAgIHNlY29uZEVkZ2VFeHRlbnRDb21wb25lbnQgPSBzZWNvbmQoZWRnZUV4dGVudENvbXBvbmVudHMpLFxuICAgICAgICBlZGdlQW5nbGVUYW5nZW50ID0gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50IC8gc2Vjb25kRWRnZUV4dGVudENvbXBvbmVudCxcbiAgICAgICAgZWRnZUFuZ2xlVGFuZ2VudEFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGVkZ2VBbmdsZVRhbmdlbnQpLFxuICAgICAgICBlZGdlUGFyYWxsZWwgPSBlZGdlQW5nbGVUYW5nZW50QXBwcm94aW1hdGVseUVxdWFsVG9aZXJvLCAvLy9cbiAgICAgICAgZWRnZU5vblBhcmFsbGVsID0gIWVkZ2VQYXJhbGxlbDtcblxuICByZXR1cm4gZWRnZU5vblBhcmFsbGVsO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFZGdlSW50ZXJzZWN0aW9uKGVkZ2UsIGZpcnN0UG9zaXRpb25Db21wb25lbnQpIHtcbiAgY29uc3QgZWRnZUV4dGVudCA9IGVkZ2UuZ2V0RXh0ZW50KCksXG4gICAgICAgIGVkZ2VQb3NpdGlvbiA9IGVkZ2UuZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgZWRnZUV4dGVudENvbXBvbmVudHMgPSBlZGdlRXh0ZW50LCAvLy9cbiAgICAgICAgZWRnZVBvc2l0aW9uQ29tcG9uZW50cyA9IGVkZ2VQb3NpdGlvbiwgLy8vXG4gICAgICAgIGZpcnN0RWRnZUV4dGVudENvbXBvbmVudCA9IGZpcnN0KGVkZ2VFeHRlbnRDb21wb25lbnRzKSxcbiAgICAgICAgZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQgPSBmaXJzdChlZGdlUG9zaXRpb25Db21wb25lbnRzKSxcbiAgICAgICAgZWRnZUludGVyc2VjdGlvbiA9IChmaXJzdFBvc2l0aW9uQ29tcG9uZW50IC0gZmlyc3RFZGdlUG9zaXRpb25Db21wb25lbnQpIC8gZmlyc3RFZGdlRXh0ZW50Q29tcG9uZW50O1xuXG4gIHJldHVybiBlZGdlSW50ZXJzZWN0aW9uO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJvdGF0ZVBvc2l0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yb3RhdGlvblwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlSW50ZXJzZWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IGNhbGN1bGF0ZVJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24sIGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBjYWxjdWxhdGVCYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGljYWxMaW5lIHtcbiAgY29uc3RydWN0b3IoZmlyc3RQb3NpdGlvbkNvbXBvbmVudCwgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMuZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0UG9zaXRpb25Db21wb25lbnQ7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0Rmlyc3RQb3NpdGlvbkNvbXBvbmVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5maXJzdFBvc2l0aW9uQ29tcG9uZW50O1xuICB9XG4gIFxuICBnZXRGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIGdldEJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb247XG4gIH1cblxuICBzcGxpdEZhY2V0KGZhY2V0LCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgZWRnZXMgPSBmYWNldC5nZXRFZGdlcygpLFxuICAgICAgICAgIGludGVyc2VjdGlvbnMgPSBlZGdlcy5tYXAoKGVkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVyc2VjdGlvbiA9IGNhbGN1bGF0ZUludGVyc2VjdGlvbihlZGdlLCB0aGlzLmZpcnN0UG9zaXRpb25Db21wb25lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4gaW50ZXJzZWN0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgZmFjZXQuc3BsaXRXaXRoSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0RmFjZXRzKGZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgICB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuICAgIH0pO1xuXG4gICAgc21hbGxlckZhY2V0cy5mb3JFYWNoKChzbWFsbGVyRmFjZXQpID0+IHNtYWxsZXJGYWNldC5yb3RhdGUodGhpcy5iYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pKTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXNraW5nRWRnZShtYXNraW5nRWRnZSkge1xuICAgIGNvbnN0IG1hc2tpbmdFZGdlUG9zaXRpb24gPSBtYXNraW5nRWRnZS5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHJvdGF0aW9uQWJvdXRaQXhpc1F1YXRlcm5pb24gPSBjYWxjdWxhdGVSb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uKG1hc2tpbmdFZGdlKSxcbiAgICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSByb3RhdGlvbkFib3V0WkF4aXNRdWF0ZXJuaW9uLCAgLy8vXG4gICAgICAgICAgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24gPSBjYWxjdWxhdGVGb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbihyb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIHBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24obWFza2luZ0VkZ2VQb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKSxcbiAgICAgICAgICBwb3NpdGlvbkNvbXBvbmVudHMgPSBwb3NpdGlvbiwgLy8vXG4gICAgICAgICAgZmlyc3RQb3NpdGlvbkNvbXBvbmVudCA9IGZpcnN0KHBvc2l0aW9uQ29tcG9uZW50cyksXG4gICAgICAgICAgdmVydGljYWxMaW5lID0gbmV3IFZlcnRpY2FsTGluZShmaXJzdFBvc2l0aW9uQ29tcG9uZW50LCBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiwgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKTtcblxuICAgIHJldHVybiB2ZXJ0aWNhbExpbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgY29uc3Qgcm90YXRlZFZlcnRpY2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgpID0+IHtcbiAgICBjb25zdCByb3RhdGVkVmVydGV4ID0gdmVydGV4LmNsb25lKCk7ICAvLy9cblxuICAgIHJvdGF0ZWRWZXJ0ZXgucm90YXRlKHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgICByZXR1cm4gcm90YXRlZFZlcnRleDtcbiAgfSk7XG5cbiAgcmV0dXJuIHJvdGF0ZWRWZXJ0aWNlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCkgeyAgLy8vXG4gIGNvbnN0IGluZGV4ZXMgPSBpbmRleFR1cGxlLCAvLy9cbiAgICAgICAgdmVydGljZXMgPSBpbmRleGVzLm1hcCgoaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZGluYXRlVHVwbGUgPSBjb29yZGluYXRlVHVwbGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbUNvb3JkaW5hdGVUdXBsZShjb29yZGluYXRlVHVwbGUpO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcnRleDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTWFza2luZ0VkZ2UgZnJvbSBcIi4vZWRnZS9tYXNraW5nXCI7XG5pbXBvcnQgVmVydGljYWxMaW5lIGZyb20gXCIuL3ZlcnRpY2FsTGluZVwiO1xuXG5pbXBvcnQgeyByb3RhdGVWZXJ0aWNlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IHB1c2gsIHNlcGFyYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgVkVSVElDRVNfTEVOR1RIIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2FsY3VsYXRlRm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWF0ZXJuaW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tpbmdGYWNldCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tpbmdFZGdlcywgdmVydGljYWxMaW5lcywgZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24sIGJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbikge1xuICAgIHRoaXMubWFza2luZ0VkZ2VzID0gbWFza2luZ0VkZ2VzO1xuICAgIHRoaXMudmVydGljYWxMaW5lcyA9IHZlcnRpY2FsTGluZXM7XG4gICAgdGhpcy5mb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICAgIHRoaXMuYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0TWFza2luZ0VkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLm1hc2tpbmdFZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2FsTGluZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGljYWxMaW5lcztcbiAgfVxuXG4gIGdldEZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uO1xuICB9XG5cbiAgZ2V0QmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbjtcbiAgfVxuXG4gIG1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1bm1hc2tlZEZhY2V0ID0gZmFjZXQuY2xvbmUoKTsgIC8vL1xuXG4gICAgZmFjZXQucm90YXRlKHRoaXMuZm9yd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgY29uc3QgbWFza2luZ0ZhY2V0ID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNtYWxsZXJGYWNldHMgPSB0aGlzLnNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgIG1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXSxcbiAgICAgICAgICB1bm1hc2tlZFNtYWxsZXJGYWNldHMgPSBbXTtcblxuICAgIHNlcGFyYXRlKHNtYWxsZXJGYWNldHMsIG1hc2tlZFNtYWxsZXJGYWNldHMsIHVubWFza2VkU21hbGxlckZhY2V0cywgKHNtYWxsZXJGYWNldCkgPT4ge1xuICAgICAgY29uc3Qgc21hbGxlckZhY2V0TWFza2VkID0gc21hbGxlckZhY2V0LmlzTWFza2VkKG1hc2tpbmdGYWNldCk7XG5cbiAgICAgIHJldHVybiBzbWFsbGVyRmFjZXRNYXNrZWQ7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXNrZWRTbWFsbGVyRmFjZXRzTGVuZ3RoID0gbWFza2VkU21hbGxlckZhY2V0cy5sZW5ndGg7XG5cbiAgICBpZiAobWFza2VkU21hbGxlckZhY2V0c0xlbmd0aCA9PT0gMCkge1xuICAgICAgdW5tYXNrZWRGYWNldHMucHVzaCh1bm1hc2tlZEZhY2V0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5tYXNrZWRTbWFsbGVyRmFjZXRzLmZvckVhY2goKHVubWFza2VkU21hbGxlckZhY2V0KSA9PiB7XG4gICAgICAgIHVubWFza2VkU21hbGxlckZhY2V0LnJvdGF0ZSh0aGlzLmJhY2t3YXJkc1JvdGF0aW9uUXVhdGVybmlvbik7XG4gICAgICB9KTtcblxuICAgICAgcHVzaCh1bm1hc2tlZEZhY2V0cywgdW5tYXNrZWRTbWFsbGVyRmFjZXRzKTtcbiAgICB9XG4gIH1cbiAgXG4gIHNwbGl0RmFjZXQoZmFjZXQsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgZmFjZXRzID0gW1xuICAgICAgICAgIGZhY2V0XG4gICAgICAgIF0sXG4gICAgICAgIHNtYWxsZXJGYWNldHMgPSBmYWNldHM7IC8vL1xuXG4gICAgdGhpcy52ZXJ0aWNhbExpbmVzLmZvckVhY2goKHZlcnRpY2FsTGluZSkgPT4ge1xuICAgICAgc21hbGxlckZhY2V0cyA9IHZlcnRpY2FsTGluZS5zcGxpdEZhY2V0cyhmYWNldHMsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgICBmYWNldHMgPSBzbWFsbGVyRmFjZXRzOyAvLy9cbiAgICB9KTtcblxuICAgIHJldHVybiBzbWFsbGVyRmFjZXRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GYWNldChmYWNldCkge1xuICAgIGNvbnN0IGZhY2V0Tm9ybWFsID0gZmFjZXQuZ2V0Tm9ybWFsKCksXG4gICAgICAgICAgZmFjZXRWZXJ0aWNlcyA9IGZhY2V0LmdldFZlcnRpY2VzKCksXG4gICAgICAgICAgbm9ybWFsID0gZmFjZXROb3JtYWwsIC8vL1xuICAgICAgICAgIGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICAgIHJvdGF0aW9uUXVhdGVybmlvbiA9IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiwgLy8vXG4gICAgICAgICAgdmVydGljZXMgPSByb3RhdGVWZXJ0aWNlcyhmYWNldFZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pLFxuICAgICAgICAgIG1hc2tpbmdFZGdlcyA9IGNhbGN1bGF0ZU1hc2tpbmdFZGdlcyh2ZXJ0aWNlcyksXG4gICAgICAgICAgdmVydGljYWxMaW5lcyA9IG1hc2tpbmdFZGdlcy5tYXAoKG1hc2tpbmdFZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbExpbmUgPSBWZXJ0aWNhbExpbmUuZnJvbU1hc2tpbmdFZGdlKG1hc2tpbmdFZGdlKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHZlcnRpY2FsTGluZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBmb3J3YXJkc1JvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgYmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uID0gY2FsY3VsYXRlQmFja3dhcmRzUm90YXRpb25RdWF0ZXJuaW9uKHJvdGF0aW9uUXVhdGVybmlvbiksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0ID0gbmV3IE1hc2tpbmdGYWNldChtYXNraW5nRWRnZXMsIHZlcnRpY2FsTGluZXMsIGZvcndhcmRzUm90YXRpb25RdWF0ZXJuaW9uLCBiYWNrd2FyZHNSb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVNYXNraW5nRWRnZXModmVydGljZXMpIHtcbiAgY29uc3QgbWFza2luZ0VkZ2VzID0gdmVydGljZXMubWFwKCh2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IGluZGV4LFxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICAgICAgICBtYXNraW5nRWRnZSA9IE1hc2tpbmdFZGdlLmZyb21TdGFydFZlcnRleEFuZEVuZFZlcnRleChzdGFydFZlcnRleCwgZW5kVmVydGV4KTtcblxuICAgICAgICAgIHJldHVybiBtYXNraW5nRWRnZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG1hc2tpbmdFZGdlcztcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5MigpIHtcbiAgcmV0dXJuIChbXG5cbiAgICAxLCAwLFxuICAgIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTMoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCxcbiAgICAwLCAxLCAwLFxuICAgIDAsIDAsIDEsXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpZGVudGl0eTQoKSB7XG4gIHJldHVybiAoW1xuXG4gICAgMSwgMCwgMCwgMCxcbiAgICAwLCAxLCAwLCAwLFxuICAgIDAsIDAsIDEsIDAsXG4gICAgMCwgMCwgMCwgMSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11bHRpcGx5MihtYXRyaXhBLCBtYXRyaXhCKSB7XG4gIGNvbnN0IGEwID0gbWF0cml4QVswXSxcbiAgICAgICAgYTEgPSBtYXRyaXhBWzFdLFxuICAgICAgICBhMiA9IG1hdHJpeEFbMl0sXG4gICAgICAgIGEzID0gbWF0cml4QVszXSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM107XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqIGIwICsgYTIgKiBiMSxcbiAgICBhMSAqIGIwICsgYTMgKiBiMSxcblxuICAgIGEwICogYjIgKyBhMiAqIGIzLFxuICAgIGExICogYjIgKyBhMyAqIGIzLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHkzKG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgYTAgPSBtYXRyaXhBWzBdLFxuICAgICAgICBhMSA9IG1hdHJpeEFbMV0sXG4gICAgICAgIGEyID0gbWF0cml4QVsyXSxcbiAgICAgICAgYTMgPSBtYXRyaXhBWzNdLFxuICAgICAgICBhNCA9IG1hdHJpeEFbNF0sXG4gICAgICAgIGE1ID0gbWF0cml4QVs1XSxcbiAgICAgICAgYTYgPSBtYXRyaXhBWzZdLFxuICAgICAgICBhNyA9IG1hdHJpeEFbN10sXG4gICAgICAgIGE4ID0gbWF0cml4QVs4XSxcblxuICAgICAgICBiMCA9IG1hdHJpeEJbMF0sXG4gICAgICAgIGIxID0gbWF0cml4QlsxXSxcbiAgICAgICAgYjIgPSBtYXRyaXhCWzJdLFxuICAgICAgICBiMyA9IG1hdHJpeEJbM10sXG4gICAgICAgIGI0ID0gbWF0cml4Qls0XSxcbiAgICAgICAgYjUgPSBtYXRyaXhCWzVdLFxuICAgICAgICBiNiA9IG1hdHJpeEJbNl0sXG4gICAgICAgIGI3ID0gbWF0cml4Qls3XSxcbiAgICAgICAgYjggPSBtYXRyaXhCWzhdO1xuXG4gIHJldHVybiAoW1xuXG4gICAgYTAgKiBiMCArIGEzICogYjEgKyBhNiAqIGIyLFxuICAgIGExICogYjAgKyBhNCAqIGIxICsgYTcgKiBiMixcbiAgICBhMiAqIGIwICsgYTUgKiBiMSArIGE4ICogYjIsXG5cbiAgICBhMCAqIGIzICsgYTMgKiBiNCArIGE2ICogYjUsXG4gICAgYTEgKiBiMyArIGE0ICogYjQgKyBhNyAqIGI1LFxuICAgIGEyICogYjMgKyBhNSAqIGI0ICsgYTggKiBiNSxcblxuICAgIGEwICogYjYgKyBhMyAqIGI3ICsgYTYgKiBiOCxcbiAgICBhMSAqIGI2ICsgYTQgKiBiNyArIGE3ICogYjgsXG4gICAgYTIgKiBiNiArIGE1ICogYjcgKyBhOCAqIGI4LFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbXVsdGlwbHk0KG1hdHJpeEEsIG1hdHJpeEIpIHtcbiAgY29uc3QgIGEwID0gbWF0cml4QVsgMF0sXG4gICAgICAgICBhMSA9IG1hdHJpeEFbIDFdLFxuICAgICAgICAgYTIgPSBtYXRyaXhBWyAyXSxcbiAgICAgICAgIGEzID0gbWF0cml4QVsgM10sXG4gICAgICAgICBhNCA9IG1hdHJpeEFbIDRdLFxuICAgICAgICAgYTUgPSBtYXRyaXhBWyA1XSxcbiAgICAgICAgIGE2ID0gbWF0cml4QVsgNl0sXG4gICAgICAgICBhNyA9IG1hdHJpeEFbIDddLFxuICAgICAgICAgYTggPSBtYXRyaXhBWyA4XSxcbiAgICAgICAgIGE5ID0gbWF0cml4QVsgOV0sXG4gICAgICAgIGExMCA9IG1hdHJpeEFbMTBdLFxuICAgICAgICBhMTEgPSBtYXRyaXhBWzExXSxcbiAgICAgICAgYTEyID0gbWF0cml4QVsxMl0sXG4gICAgICAgIGExMyA9IG1hdHJpeEFbMTNdLFxuICAgICAgICBhMTQgPSBtYXRyaXhBWzE0XSxcbiAgICAgICAgYTE1ID0gbWF0cml4QVsxNV0sXG5cbiAgICAgICAgIGIwID0gbWF0cml4QlsgMF0sXG4gICAgICAgICBiMSA9IG1hdHJpeEJbIDFdLFxuICAgICAgICAgYjIgPSBtYXRyaXhCWyAyXSxcbiAgICAgICAgIGIzID0gbWF0cml4QlsgM10sXG4gICAgICAgICBiNCA9IG1hdHJpeEJbIDRdLFxuICAgICAgICAgYjUgPSBtYXRyaXhCWyA1XSxcbiAgICAgICAgIGI2ID0gbWF0cml4QlsgNl0sXG4gICAgICAgICBiNyA9IG1hdHJpeEJbIDddLFxuICAgICAgICAgYjggPSBtYXRyaXhCWyA4XSxcbiAgICAgICAgIGI5ID0gbWF0cml4QlsgOV0sXG4gICAgICAgIGIxMCA9IG1hdHJpeEJbMTBdLFxuICAgICAgICBiMTEgPSBtYXRyaXhCWzExXSxcbiAgICAgICAgYjEyID0gbWF0cml4QlsxMl0sXG4gICAgICAgIGIxMyA9IG1hdHJpeEJbMTNdLFxuICAgICAgICBiMTQgPSBtYXRyaXhCWzE0XSxcbiAgICAgICAgYjE1ID0gbWF0cml4QlsxNV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICBhMCAqICBiMCArICBhNCAqICBiMSArICBhOCAqICBiMiArIGExMiAqICBiMyxcbiAgICBhMSAqICBiMCArICBhNSAqICBiMSArICBhOSAqICBiMiArIGExMyAqICBiMyxcbiAgICBhMiAqICBiMCArICBhNiAqICBiMSArIGExMCAqICBiMiArIGExNCAqICBiMyxcbiAgICBhMyAqICBiMCArICBhNyAqICBiMSArIGExMSAqICBiMiArIGExNSAqICBiMyxcblxuICAgIGEwICogIGI0ICsgIGE0ICogIGI1ICsgIGE4ICogIGI2ICsgYTEyICogIGI3LFxuICAgIGExICogIGI0ICsgIGE1ICogIGI1ICsgIGE5ICogIGI2ICsgYTEzICogIGI3LFxuICAgIGEyICogIGI0ICsgIGE2ICogIGI1ICsgYTEwICogIGI2ICsgYTE0ICogIGI3LFxuICAgIGEzICogIGI0ICsgIGE3ICogIGI1ICsgYTExICogIGI2ICsgYTE1ICogIGI3LFxuXG4gICAgYTAgKiAgYjggKyAgYTQgKiAgYjkgKyAgYTggKiBiMTAgKyBhMTIgKiBiMTEsXG4gICAgYTEgKiAgYjggKyAgYTUgKiAgYjkgKyAgYTkgKiBiMTAgKyBhMTMgKiBiMTEsXG4gICAgYTIgKiAgYjggKyAgYTYgKiAgYjkgKyBhMTAgKiBiMTAgKyBhMTQgKiBiMTEsXG4gICAgYTMgKiAgYjggKyAgYTcgKiAgYjkgKyBhMTEgKiBiMTAgKyBhMTUgKiBiMTEsXG5cbiAgICBhMCAqIGIxMiArICBhNCAqIGIxMyArICBhOCAqIGIxNCArIGExMiAqIGIxNSxcbiAgICBhMSAqIGIxMiArICBhNSAqIGIxMyArICBhOSAqIGIxNCArIGExMyAqIGIxNSxcbiAgICBhMiAqIGIxMiArICBhNiAqIGIxMyArIGExMCAqIGIxNCArIGExNCAqIGIxNSxcbiAgICBhMyAqIGIxMiArICBhNyAqIGIxMyArIGExMSAqIGIxNCArIGExNSAqIGIxNSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmVydDIobWF0cml4KSB7XG4gIGNvbnN0IG0wID0gbWF0cml4WzBdLFxuICAgICAgICBtMSA9IG1hdHJpeFsxXSxcbiAgICAgICAgbTIgPSBtYXRyaXhbMl0sXG4gICAgICAgIG0zID0gbWF0cml4WzNdLFxuXG4gICAgICAgIGRldGVybWluYW50ID0gbTAgKiBtMyAtIG0yICogbTE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgICttMyAvIGRldGVybWluYW50LCAtbTEgLyBkZXRlcm1pbmFudCxcbiAgICAgIC1tMiAvIGRldGVybWluYW50LCArbTAgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQzKG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbMF0sIG0wMSA9IG1hdHJpeFsxXSwgbTAyID0gbWF0cml4WzJdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbM10sIG0xMSA9IG1hdHJpeFs0XSwgbTEyID0gbWF0cml4WzVdLFxuICAgICAgICBtMjAgPSBtYXRyaXhbNl0sIG0yMSA9IG1hdHJpeFs3XSwgbTIyID0gbWF0cml4WzhdLFxuXG4gICAgICAgIGIwMSA9ICBtMjIgKiBtMTEgLSBtMTIgKiBtMjEsXG4gICAgICAgIGIxMSA9IC1tMjIgKiBtMTAgKyBtMTIgKiBtMjAsXG4gICAgICAgIGIyMSA9ICBtMjEgKiBtMTAgLSBtMTEgKiBtMjAsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBtMDAgKiBiMDEgKyBtMDEgKiBiMTEgKyBtMDIgKiBiMjE7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIGIwMSAvIGRldGVybWluYW50LCAoLW0yMiAqIG0wMSArIG0wMiAqIG0yMSkgLyBkZXRlcm1pbmFudCwgKCBtMTIgKiBtMDEgLSBtMDIgKiBtMTEpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICBiMTEgLyBkZXRlcm1pbmFudCwgKCBtMjIgKiBtMDAgLSBtMDIgKiBtMjApIC8gZGV0ZXJtaW5hbnQsICgtbTEyICogbTAwICsgbTAyICogbTEwKSAvIGRldGVybWluYW50LFxuICAgICAgYjIxIC8gZGV0ZXJtaW5hbnQsICgtbTIxICogbTAwICsgbTAxICogbTIwKSAvIGRldGVybWluYW50LCAoIG0xMSAqIG0wMCAtIG0wMSAqIG0xMCkgLyBkZXRlcm1pbmFudCxcblxuICAgIF0pO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnQ0KG1hdHJpeCkge1xuICBjb25zdCBtMDAgPSBtYXRyaXhbIDBdLCBtMDEgPSBtYXRyaXhbIDFdLCBtMDIgPSBtYXRyaXhbIDJdLCBtMDMgPSBtYXRyaXhbIDNdLFxuICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLCBtMTEgPSBtYXRyaXhbIDVdLCBtMTIgPSBtYXRyaXhbIDZdLCBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICBtMjAgPSBtYXRyaXhbIDhdLCBtMjEgPSBtYXRyaXhbIDldLCBtMjIgPSBtYXRyaXhbMTBdLCBtMjMgPSBtYXRyaXhbMTFdLFxuICAgICAgICBtMzAgPSBtYXRyaXhbMTJdLCBtMzEgPSBtYXRyaXhbMTNdLCBtMzIgPSBtYXRyaXhbMTRdLCBtMzMgPSBtYXRyaXhbMTVdLFxuXG4gICAgICAgIGIwMCA9IG0wMCAqIG0xMSAtIG0wMSAqIG0xMCxcbiAgICAgICAgYjAxID0gbTAwICogbTEyIC0gbTAyICogbTEwLFxuICAgICAgICBiMDIgPSBtMDAgKiBtMTMgLSBtMDMgKiBtMTAsXG4gICAgICAgIGIwMyA9IG0wMSAqIG0xMiAtIG0wMiAqIG0xMSxcbiAgICAgICAgYjA0ID0gbTAxICogbTEzIC0gbTAzICogbTExLFxuICAgICAgICBiMDUgPSBtMDIgKiBtMTMgLSBtMDMgKiBtMTIsXG4gICAgICAgIGIwNiA9IG0yMCAqIG0zMSAtIG0yMSAqIG0zMCxcbiAgICAgICAgYjA3ID0gbTIwICogbTMyIC0gbTIyICogbTMwLFxuICAgICAgICBiMDggPSBtMjAgKiBtMzMgLSBtMjMgKiBtMzAsXG4gICAgICAgIGIwOSA9IG0yMSAqIG0zMiAtIG0yMiAqIG0zMSxcbiAgICAgICAgYjEwID0gbTIxICogbTMzIC0gbTIzICogbTMxLFxuICAgICAgICBiMTEgPSBtMjIgKiBtMzMgLSBtMjMgKiBtMzIsXG5cbiAgICAgICAgZGV0ZXJtaW5hbnQgPSBiMDAgKiBiMTEgLSBiMDEgKiBiMTAgKyBiMDIgKiBiMDkgKyBiMDMgKiBiMDggLSBiMDQgKiBiMDcgKyBiMDUgKiBiMDY7XG5cbiAgaWYgKGRldGVybWluYW50ICE9PSAwKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIChtMTEgKiBiMTEgLSBtMTIgKiBiMTAgKyBtMTMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMDIgKiBiMTAgLSBtMDEgKiBiMTEgLSBtMDMgKiBiMDkpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDUgLSBtMzIgKiBiMDQgKyBtMzMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsIChtMjIgKiBiMDQgLSBtMjEgKiBiMDUgLSBtMjMgKiBiMDMpIC8gZGV0ZXJtaW5hbnQsXG4gICAgICAobTEyICogYjA4IC0gbTEwICogYjExIC0gbTEzICogYjA3KSAvIGRldGVybWluYW50LCAobTAwICogYjExIC0gbTAyICogYjA4ICsgbTAzICogYjA3KSAvIGRldGVybWluYW50LCAobTMyICogYjAyIC0gbTMwICogYjA1IC0gbTMzICogYjAxKSAvIGRldGVybWluYW50LCAobTIwICogYjA1IC0gbTIyICogYjAyICsgbTIzICogYjAxKSAvIGRldGVybWluYW50LFxuICAgICAgKG0xMCAqIGIxMCAtIG0xMSAqIGIwOCArIG0xMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0wMSAqIGIwOCAtIG0wMCAqIGIxMCAtIG0wMyAqIGIwNikgLyBkZXRlcm1pbmFudCwgKG0zMCAqIGIwNCAtIG0zMSAqIGIwMiArIG0zMyAqIGIwMCkgLyBkZXRlcm1pbmFudCwgKG0yMSAqIGIwMiAtIG0yMCAqIGIwNCAtIG0yMyAqIGIwMCkgLyBkZXRlcm1pbmFudCxcbiAgICAgIChtMTEgKiBiMDcgLSBtMTAgKiBiMDkgLSBtMTIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMDAgKiBiMDkgLSBtMDEgKiBiMDcgKyBtMDIgKiBiMDYpIC8gZGV0ZXJtaW5hbnQsIChtMzEgKiBiMDEgLSBtMzAgKiBiMDMgLSBtMzIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsIChtMjAgKiBiMDMgLSBtMjEgKiBiMDEgKyBtMjIgKiBiMDApIC8gZGV0ZXJtaW5hbnQsXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNwb3NlMihtYXRyaXgpIHtcbiAgcmV0dXJuIChbXG5cbiAgICBtYXRyaXhbMF0sIG1hdHJpeFsyXSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFszXSxcblxuICBdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zcG9zZTMobWF0cml4KSB7XG4gIHJldHVybiAoW1xuXG4gICAgbWF0cml4WzBdLCBtYXRyaXhbM10sIG1hdHJpeFs2XSxcbiAgICBtYXRyaXhbMV0sIG1hdHJpeFs0XSwgbWF0cml4WzddLFxuICAgIG1hdHJpeFsyXSwgbWF0cml4WzVdLCBtYXRyaXhbOF0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc3Bvc2U0KG1hdHJpeCkge1xuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0sIG1hdHJpeFsgNF0sIG1hdHJpeFsgOF0sIG1hdHJpeFsxMl0sXG4gICAgbWF0cml4WyAxXSwgbWF0cml4WyA1XSwgbWF0cml4WyA5XSwgbWF0cml4WzEzXSxcbiAgICBtYXRyaXhbIDJdLCBtYXRyaXhbIDZdLCBtYXRyaXhbMTBdLCBtYXRyaXhbMTRdLFxuICAgIG1hdHJpeFsgM10sIG1hdHJpeFsgN10sIG1hdHJpeFsxMV0sIG1hdHJpeFsxNV0sXG5cbiAgXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZTQobWF0cml4LCB2ZWN0b3IpIHtcbiAgY29uc3QgeCA9IHZlY3RvclswXSxcbiAgICAgICAgeSA9IHZlY3RvclsxXSxcbiAgICAgICAgeiA9IHZlY3RvclsyXTtcblxuICByZXR1cm4gKFtcblxuICAgIG1hdHJpeFsgMF0gKiB4LCBtYXRyaXhbIDFdICogeCwgbWF0cml4WyAyXSAqIHgsIG1hdHJpeFsgM10gKiB4LFxuICAgIG1hdHJpeFsgNF0gKiB5LCBtYXRyaXhbIDVdICogeSwgbWF0cml4WyA2XSAqIHksIG1hdHJpeFsgN10gKiB5LFxuICAgIG1hdHJpeFsgOF0gKiB6LCBtYXRyaXhbIDldICogeiwgbWF0cml4WzEwXSAqIHosIG1hdHJpeFsxMV0gKiB6LFxuICAgIG1hdHJpeFsxMl0gKiAxLCBtYXRyaXhbMTNdICogMSwgbWF0cml4WzE0XSAqIDEsIG1hdHJpeFsxNV0gKiAxLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm90YXRlNChtYXRyaXgsIGFuZ2xlLCB2ZWN0b3IpIHtcbiAgbGV0IHggPSB2ZWN0b3JbMF0sXG4gICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgeiA9IHZlY3RvclsyXTtcblxuICBjb25zdCBsZW5ndGggPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSArIHogKiB6KTtcblxuICBpZiAobGVuZ3RoICE9PSAwKSB7XG4gICAgeCAvPSBsZW5ndGg7XG4gICAgeSAvPSBsZW5ndGg7XG4gICAgeiAvPSBsZW5ndGg7XG5cbiAgICBjb25zdCBzID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgIGMgPSBNYXRoLmNvcyhhbmdsZSksXG4gICAgICAgICAgdCA9IDEgLSBjLFxuXG4gICAgICAgICAgbTAwID0gbWF0cml4WyAwXSxcbiAgICAgICAgICBtMDEgPSBtYXRyaXhbIDFdLFxuICAgICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgICAgbTAzID0gbWF0cml4WyAzXSxcbiAgICAgICAgICBtMTAgPSBtYXRyaXhbIDRdLFxuICAgICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgICAgbTEyID0gbWF0cml4WyA2XSxcbiAgICAgICAgICBtMTMgPSBtYXRyaXhbIDddLFxuICAgICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgICAgbTIxID0gbWF0cml4WyA5XSxcbiAgICAgICAgICBtMjIgPSBtYXRyaXhbMTBdLFxuICAgICAgICAgIG0yMyA9IG1hdHJpeFsxMV0sXG5cbiAgICAgICAgICBiMDAgPSB4ICogeCAqIHQgKyBjLFxuICAgICAgICAgIGIwMSA9IHkgKiB4ICogdCArIHogKiBzLFxuICAgICAgICAgIGIwMiA9IHogKiB4ICogdCAtIHkgKiBzLFxuICAgICAgICAgIGIxMCA9IHggKiB5ICogdCAtIHogKiBzLFxuICAgICAgICAgIGIxMSA9IHkgKiB5ICogdCArIGMsXG4gICAgICAgICAgYjEyID0geiAqIHkgKiB0ICsgeCAqIHMsXG4gICAgICAgICAgYjIwID0geCAqIHogKiB0ICsgeSAqIHMsXG4gICAgICAgICAgYjIxID0geSAqIHogKiB0IC0geCAqIHMsXG4gICAgICAgICAgYjIyID0geiAqIHogKiB0ICsgYztcblxuICAgIHJldHVybiAoW1xuXG4gICAgICBtMDAgKiBiMDAgKyBtMTAgKiBiMDEgKyBtMjAgKiBiMDIsIG0wMSAqIGIwMCArIG0xMSAqIGIwMSArIG0yMSAqIGIwMiwgbTAyICogYjAwICsgbTEyICogYjAxICsgbTIyICogYjAyLCBtMDMgKiBiMDAgKyBtMTMgKiBiMDEgKyBtMjMgKiBiMDIsXG4gICAgICBtMDAgKiBiMTAgKyBtMTAgKiBiMTEgKyBtMjAgKiBiMTIsIG0wMSAqIGIxMCArIG0xMSAqIGIxMSArIG0yMSAqIGIxMiwgbTAyICogYjEwICsgbTEyICogYjExICsgbTIyICogYjEyLCBtMDMgKiBiMTAgKyBtMTMgKiBiMTEgKyBtMjMgKiBiMTIsXG4gICAgICBtMDAgKiBiMjAgKyBtMTAgKiBiMjEgKyBtMjAgKiBiMjIsIG0wMSAqIGIyMCArIG0xMSAqIGIyMSArIG0yMSAqIGIyMiwgbTAyICogYjIwICsgbTEyICogYjIxICsgbTIyICogYjIyLCBtMDMgKiBiMjAgKyBtMTMgKiBiMjEgKyBtMjMgKiBiMjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxMl0sICAgICAgICAgICAgICAgICAgICAgICAgbWF0cml4WzEzXSwgICAgICAgICAgICAgICAgICAgICAgICBtYXRyaXhbMTRdLCAgICAgICAgICAgICAgICAgICAgICAgIG1hdHJpeFsxNV0sXG5cbiAgICBdKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlNChtYXRyaXgsIHZlY3Rvcikge1xuICBjb25zdCB4ID0gdmVjdG9yWzBdLFxuICAgICAgICB5ID0gdmVjdG9yWzFdLFxuICAgICAgICB6ID0gdmVjdG9yWzJdLFxuXG4gICAgICAgIG0wMCA9IG1hdHJpeFsgMF0sXG4gICAgICAgIG0wMSA9IG1hdHJpeFsgMV0sXG4gICAgICAgIG0wMiA9IG1hdHJpeFsgMl0sXG4gICAgICAgIG0wMyA9IG1hdHJpeFsgM10sXG4gICAgICAgIG0xMCA9IG1hdHJpeFsgNF0sXG4gICAgICAgIG0xMSA9IG1hdHJpeFsgNV0sXG4gICAgICAgIG0xMiA9IG1hdHJpeFsgNl0sXG4gICAgICAgIG0xMyA9IG1hdHJpeFsgN10sXG4gICAgICAgIG0yMCA9IG1hdHJpeFsgOF0sXG4gICAgICAgIG0yMSA9IG1hdHJpeFsgOV0sXG4gICAgICAgIG0yMiA9IG1hdHJpeFsxMF0sXG4gICAgICAgIG0yMyA9IG1hdHJpeFsxMV07XG5cbiAgcmV0dXJuIChbXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAxLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAyLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTEsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMTMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0yMyxcbiAgICBtMDAgKiB4ICsgbTEwICogeSArIG0yMCAqIHogKyBtYXRyaXhbMTJdLCBtMDEgKiB4ICsgbTExICogeSArIG0yMSAqIHogKyBtYXRyaXhbMTNdLCBtMDIgKiB4ICsgbTEyICogeSArIG0yMiAqIHogKyBtYXRyaXhbMTRdLCBtMDMgKiB4ICsgbTEzICogeSArIG0yMyAqIHogKyBtYXRyaXhbMTVdLFxuXG4gIF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGVyc3BlY3RpdmU0KGZpZWxkT2ZWaWV3LCBhc3BlY3RSYXRpbywgek5lYXIsIHpGYXIpIHtcbiAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZpZWxkT2ZWaWV3IC8gMiksXG4gICAgICAgIG5mID0gMSAvICh6TmVhciAtIHpGYXIpO1xuXG4gIHJldHVybiAoW1xuXG4gICAgZiAvIGFzcGVjdFJhdGlvLCAwLCAwLCAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAwLCAgICAgICAgICAgICAgIGYsIDAsICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgIDAsICAgICAgICAgICAgICAgMCwgKHpGYXIgKyB6TmVhcikgKiBuZiwgICAgLTEsXG4gICAgMCwgICAgICAgICAgICAgICAwLCAoMiAqIHpGYXIgKiB6TmVhcikgKiBuZiwgMCxcblxuICBdKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBpZGVudGl0eTIsXG4gIGlkZW50aXR5MyxcbiAgaWRlbnRpdHk0LFxuICBtdWx0aXBseTIsXG4gIG11bHRpcGx5MyxcbiAgbXVsdGlwbHk0LFxuICBpbnZlcnQyLFxuICBpbnZlcnQzLFxuICBpbnZlcnQ0LFxuICB0cmFuc3Bvc2UyLFxuICB0cmFuc3Bvc2UzLFxuICB0cmFuc3Bvc2U0LFxuICBzY2FsZTQsXG4gIHJvdGF0ZTQsXG4gIHRyYW5zbGF0ZTQsXG4gIHBlcnNwZWN0aXZlNFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc2NhbGUzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGlkZW50aXR5NCwgc2NhbGU0LCBpbnZlcnQ0LCByb3RhdGU0LCB0cmFuc2xhdGU0LCB0cmFuc3Bvc2U0LCBwZXJzcGVjdGl2ZTQgfSBmcm9tIFwiLi4vbWF0aHMvbWF0cml4XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY2FsZU1hdHJpeEZyb21TY2FsZShzY2FsZSkge1xuICBsZXQgc2NhbGVNYXRyaXggPSBpZGVudGl0eTQoKTtcblxuICBzY2FsZU1hdHJpeCA9IHNjYWxlNChzY2FsZU1hdHJpeCwgc2NhbGUpO1xuXG4gIHJldHVybiBzY2FsZU1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mZnNldHNNYXRyaXhGcm9tT2Zmc2V0cyhvZmZzZXRzKSB7XG4gIGxldCBvZmZzZXRzTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIG9mZnNldHNNYXRyaXggPSB0cmFuc2xhdGU0KG9mZnNldHNNYXRyaXgsIG9mZnNldHMpO1xuXG4gIHJldHVybiBvZmZzZXRzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZygpIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uTWF0cml4RnJvbURpc3RhbmNlKGRpc3RhbmNlKSB7XG4gIGxldCBwb3NpdGlvbk1hdHJpeCA9IGlkZW50aXR5NCgpOyAvLy9cblxuICBjb25zdCB4ID0gMCxcbiAgICAgICAgeSA9IDAsXG4gICAgICAgIHogPSAtZGlzdGFuY2U7XG5cbiAgcG9zaXRpb25NYXRyaXggPSB0cmFuc2xhdGU0KHBvc2l0aW9uTWF0cml4LCBbIHgsIHksIHogXSk7XG5cbiAgcmV0dXJuIHBvc2l0aW9uTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pIHtcbiAgbGV0IHBvc2l0aW9uTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIHBvc2l0aW9uTWF0cml4ID0gdHJhbnNsYXRlNChwb3NpdGlvbk1hdHJpeCwgcG9zaXRpb24pO1xuXG4gIHJldHVybiBwb3NpdGlvbk1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzLCByZXZlcnNlT3JkZXIgPSBmYWxzZSkge1xuICBsZXQgcm90YXRpb25zTWF0cml4ID0gaWRlbnRpdHk0KCk7IC8vL1xuXG4gIGNvbnN0IGZpcnN0QW5nbGUgPSBmaXJzdChhbmdsZXMpLFxuICAgICAgICBzZWNvbmRBbmdsZSA9IHNlY29uZChhbmdsZXMpLFxuICAgICAgICB0aGlyZEFuZ2xlID0gdGhpcmQoYW5nbGVzKSxcbiAgICAgICAgeEFuZ2xlID0gZmlyc3RBbmdsZSwgIC8vLy9cbiAgICAgICAgeUFuZ2xlID0gc2Vjb25kQW5nbGUsIC8vL1xuICAgICAgICB6QW5nbGUgPSB0aGlyZEFuZ2xlLCAgLy8vXG4gICAgICAgIHhBeGlzID0gWyAxLCAwLCAwIF0sXG4gICAgICAgIHlBeGlzID0gWyAwLCAxLCAwIF0sXG4gICAgICAgIHpBeGlzID0gWyAwLCAwLCAxIF07XG5cbiAgaWYgKHJldmVyc2VPcmRlcikge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB6QW5nbGUsIHpBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHhBbmdsZSwgeEF4aXMpO1xuICB9IGVsc2Uge1xuICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0ZTQocm90YXRpb25zTWF0cml4LCB4QW5nbGUsIHhBeGlzKTtcbiAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGU0KHJvdGF0aW9uc01hdHJpeCwgeUFuZ2xlLCB5QXhpcyk7XG4gICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRlNChyb3RhdGlvbnNNYXRyaXgsIHpBbmdsZSwgekF4aXMpO1xuICB9XG5cbiAgcmV0dXJuIHJvdGF0aW9uc01hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKSB7XG4gIGNvbnN0IHNjYWxhciA9IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSLCAvLy9cbiAgICAgICAgYW5nbGVzID0gc2NhbGUzKHJvdGF0aW9ucywgc2NhbGFyKSxcbiAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpO1xuXG4gIHJldHVybiByb3RhdGlvbnNNYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpIHtcbiAgbGV0IG5vcm1hbHNNYXRyaXggPSBpbnZlcnQ0KHJvdGF0aW9uc01hdHJpeCk7IC8vL1xuXG4gIG5vcm1hbHNNYXRyaXggPSB0cmFuc3Bvc2U0KG5vcm1hbHNNYXRyaXgpO1xuXG4gIHJldHVybiBub3JtYWxzTWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpIHtcbiAgY29uc3QgekZhciA9IGNhbWVyYS5nZXRaRmFyKCksXG4gICAgICAgIHpOZWFyID0gY2FtZXJhLmdldFpOZWFyKCksXG4gICAgICAgIHdpZHRoID0gY2FudmFzLmdldFdpZHRoKCksXG4gICAgICAgIGhlaWdodCA9IGNhbnZhcy5nZXRIZWlnaHQoKSxcbiAgICAgICAgZmllbGRPZlZpZXcgPSBjYW1lcmEuZ2V0RmllbGRPZlZpZXcoKSxcbiAgICAgICAgYXNwZWN0UmF0aW8gPSAoIHdpZHRoIC8gaGVpZ2h0ICksXG4gICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwZXJzcGVjdGl2ZTQoZmllbGRPZlZpZXcsIGFzcGVjdFJhdGlvLCB6TmVhciwgekZhcik7XG5cbiAgcmV0dXJuIHByb2plY3Rpb25NYXRyaXg7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5NCB9IGZyb20gXCIuLi9tYXRocy9tYXRyaXhcIjtcbmltcG9ydCB7IHRyYW5zZm9ybTQgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBzY2FsZU1hdHJpeEZyb21TY2FsZSwgcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24sIHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucykge1xuICBsZXQgbWF0cml4ID0gbnVsbDtcblxuICBpZiAoc2NhbGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBzY2FsZU1hdHJpeCA9IHNjYWxlTWF0cml4RnJvbVNjYWxlKHNjYWxlKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHNjYWxlTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgbXVsdGlwbHk0KHNjYWxlTWF0cml4LCBtYXRyaXgpO1xuICB9XG5cbiAgaWYgKHJvdGF0aW9ucyAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21Sb3RhdGlvbnMocm90YXRpb25zKTtcblxuICAgIG1hdHJpeCA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA6XG4gICAgICAgICAgICAgICAgIG11bHRpcGx5NChyb3RhdGlvbnNNYXRyaXgsIG1hdHJpeCk7XG5cbiAgfVxuXG4gIGlmIChwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgbWF0cml4ID0gKG1hdHJpeCA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uTWF0cml4IDpcbiAgICAgICAgICAgICAgICAgIG11bHRpcGx5NChwb3NpdGlvbk1hdHJpeCwgbWF0cml4KTtcbiAgfVxuXG4gIGNvbnN0IHRyYW5zZm9ybSA9IChtYXRyaXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAodmVjdG9yKSA9PiB2ZWN0b3IgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZlY3RvcikgPT4gdHJhbnNmb3JtNChbIC4uLnZlY3RvciwgMSBdLCBtYXRyaXgpLnNsaWNlKDAsIDMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm07XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgTWFza2luZ0ZhY2V0IGZyb20gXCIuLi9wcmltaXRpdmUvbWFza2luZ0ZhY2V0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQge2NvbXBvc2VUcmFuc2Zvcm19IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhbnNmb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2sgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVmZXJlbmNlLCB0cmFuc2Zvcm0pIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybTtcbiAgfVxuXG4gIHJldHJpZXZlTWFza2luZ0ZhY2V0cygpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCksXG4gICAgICAgICAgZmFjZXRzID0gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cyksXG4gICAgICAgICAgbWFza2luZ0ZhY2V0cyA9IGZhY2V0cy5tYXAoKGZhY2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXNraW5nRmFjZXQgPSBNYXNraW5nRmFjZXQuZnJvbUZhY2V0KGZhY2V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG1hc2tpbmdGYWNldDtcbiAgICAgICAgICB9KTtcbiAgICBcbiAgICByZXR1cm4gbWFza2luZ0ZhY2V0czsgICAgICAgICAgXG4gIH1cblxuICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbWFza2luZ0ZhY2V0cyA9IHRoaXMucmV0cmlldmVNYXNraW5nRmFjZXRzKCksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgbWFza0VsZW1lbnQoZWxlbWVudCwgbWFza2luZ0ZhY2V0cywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gbWFza0VsZW1lbnQoY2hpbGRFbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSk7XG4gIH1cblxuICBhcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuICB9XG5cbiAgY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBjaGlsZEVsZW1lbnRzID0gdGhpcy5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBjaGlsZEVsZW1lbnRzLmZvckVhY2goKGNoaWxkRWxlbWVudCkgPT4gY2hpbGRFbGVtZW50LmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSk7XG4gIH1cblxuICBtYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5tYXNrRmFjZXRzKG1hc2tzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKHRoaXMudHJhbnNmb3JtKTsgIC8vL1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHt9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHJlZmVyZW5jZSwgc2NhbGUgPSBudWxsLCBwb3NpdGlvbiA9IG51bGwsIHJvdGF0aW9ucyA9IG51bGwgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdHJhbnNmb3JtID0gY29tcG9zZVRyYW5zZm9ybShzY2FsZSwgcG9zaXRpb24sIHJvdGF0aW9ucyksXG4gICAgICAgICAgbWFzayA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTWFzaywgcHJvcGVydGllcywgcmVmZXJlbmNlLCB0cmFuc2Zvcm0pO1xuXG4gICAgcmV0dXJuIG1hc2s7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVGYWNldHMoY2hpbGRFbGVtZW50cywgZmFjZXRzID0gW10pIHtcbiAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gY2hpbGRFbGVtZW50LCAvLy9cbiAgICAgICAgICBlbGVtZW50RmFjZXRzID0gZWxlbWVudC5nZXRGYWNldHMoKSxcbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZWxlbWVudC5nZXRDaGlsZEVsZW1lbnRzKCk7XG5cbiAgICBwdXNoKGZhY2V0cywgZWxlbWVudEZhY2V0cyk7XG5cbiAgICByZXRyaWV2ZUZhY2V0cyhjaGlsZEVsZW1lbnRzLCBmYWNldHMpO1xuICB9KTtcblxuICByZXR1cm4gZmFjZXRzO1xufVxuXG5mdW5jdGlvbiBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gIGxldCBmYWNldHMgPSBlbGVtZW50LmdldEZhY2V0cygpO1xuXG4gIG1hc2tpbmdGYWNldHMuZm9yRWFjaCgobWFza2luZ0ZhY2V0KSA9PiB7XG4gICAgY29uc3QgdW5tYXNrZWRGYWNldHMgPSBbXTtcblxuICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gbWFza2luZ0ZhY2V0Lm1hc2tGYWNldChmYWNldCwgdW5tYXNrZWRGYWNldHMsIG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGZhY2V0cyA9IHVubWFza2VkRmFjZXRzOyAgLy8vXG4gIH0pO1xuXG4gIGVsZW1lbnQuc2V0RmFjZXRzKGZhY2V0cyk7XG5cbiAgY29uc3QgY2hpbGRFbGVtZW50cyA9IGVsZW1lbnQuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IGNoaWxkRWxlbWVudDsgLy8vXG5cbiAgICBtYXNrRWxlbWVudChlbGVtZW50LCBtYXNraW5nRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfSk7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENsYXNzKSB7XG4gIGNvbnN0IGVsZW1lbnRzID0gY2hpbGRFbGVtZW50cy5yZWR1Y2UoKGVsZW1lbnRzLCBjaGlsZEVsZW1lbnQpID0+IHtcbiAgICBpZiAoY2hpbGRFbGVtZW50IGluc3RhbmNlb2YgQ2xhc3MpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnQ7ICAvLy9cblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIENsYXNzKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBjaGlsZEVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudCwgY2hpbGRFbGVtZW50KSA9PiB7XG4gICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgIGlmIChjaGlsZEVsZW1lbnQgaW5zdGFuY2VvZiBDbGFzcykge1xuICAgICAgICBlbGVtZW50ID0gY2hpbGRFbGVtZW50OyAgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgTWFzayBmcm9tIFwiLi9tYXNrXCI7XG5cbmltcG9ydCB7IGNvbXBvc2VUcmFuc2Zvcm0gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYW5zZm9ybVwiO1xuaW1wb3J0IHsgZWxlbWVudHNGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXNFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hc2tSZWZlcmVuY2UgPSBtYXNrUmVmZXJlbmNlO1xuICAgIHRoaXMudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgIHRoaXMuZmFjZXRzID0gZmFjZXRzO1xuICAgIHRoaXMubWFza3MgPSBtYXNrcztcbiAgfVxuXG4gIGdldE1hc2tSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza1JlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm07XG4gIH1cblxuICBnZXRGYWNldHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRzO1xuICB9XG5cbiAgZ2V0TWFza3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFza3M7XG4gIH1cblxuICBzZXRGYWNldHMoZmFjZXRzKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gIH1cblxuICBhcHBseU1hc2sobWFza3MsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBpZiAodGhpcy5tYXNrUmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtYXNrID0gbWFza3MuZmluZCgobWFzaykgPT4ge1xuICAgICAgICBjb25zdCByZWZlcmVuY2UgPSBtYXNrLmdldFJlZmVyZW5jZSgpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2UgPT09IHRoaXMubWFza1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsOyAvLy9cblxuICAgICAgaWYgKG1hc2sgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXM7IC8vL1xuXG4gICAgICAgIG1hc2subWFza0VsZW1lbnQoZWxlbWVudCwgbWFyZ2luT2ZFcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IGZhY2V0LmFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcbiAgfVxuXG4gIGNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5jcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikpO1xuICB9XG5cbiAgbWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikge1xuICAgIG1hc2tzID0gWyAuLi5tYXNrcywgLi4udGhpcy5tYXNrcyBdOyAvLy9cblxuICAgIGNvbnN0IGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgdGhpcy5hcHBseVRyYW5zZm9ybSh0aGlzLnRyYW5zZm9ybSk7ICAvLy9cblxuICAgIHRoaXMuYXBwbHlNYXNrKG1hc2tzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgY2hpbGRFbGVtZW50cyA9IHRoaXMuZ2V0Q2hpbGRFbGVtZW50cygpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMsIHNjYWxlID0gbnVsbCwgcG9zaXRpb24gPSBudWxsLCByb3RhdGlvbnMgPSBudWxsLCBtYXNrUmVmZXJlbmNlID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0cmFuc2Zvcm0gPSBjb21wb3NlVHJhbnNmb3JtKHNjYWxlLCBwb3NpdGlvbiwgcm90YXRpb25zKSxcbiAgICAgICAgICBmYWNldHMgPSBbXSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayksXG4gICAgICAgICAgY2FudmFzRWxlbWVudCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIG1hc2tSZWZlcmVuY2UsIHRyYW5zZm9ybSwgZmFjZXRzLCBtYXNrcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBjYW52YXNFbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBmdW5jdGlvbkVsZW1lbnQgPSBDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKEZ1bmN0aW9uQ2FudmFzRWxlbWVudCwgcHJvcGVydGllcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb25FbGVtZW50O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGYWxzZXlFbGVtZW50cyhlbGVtZW50cykge1xuICBlbGVtZW50cyA9IGVsZW1lbnRzLnJlZHVjZSgoZWxlbWVudHMsIGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2VsZW1lbnRcIjtcbmltcG9ydCBGdW5jdGlvbkNhbnZhc0VsZW1lbnQgZnJvbSBcIi4vZWxlbWVudC9jYW52YXMvZnVuY3Rpb25cIjtcblxuaW1wb3J0IHsgRlVOQ1RJT04gfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGZsYXR0ZW4sIGd1YXJhbnRlZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVtb3ZlRmFsc2V5RWxlbWVudHMgfSBmcm9tIFwiLi91dGlsaXRpZXMvZWxlbWVudHNcIjtcblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudChmaXJzdEFyZ3VtZW50LCBwcm9wZXJ0aWVzLCAuLi5jaGlsZEVsZW1lbnRzKSB7XG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0QXJndW1lbnQgPT09IEZVTkNUSU9OKSB7XG4gICAgY29uc3QgZnVuYyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICBjaGlsZEVsZW1lbnRzID0gZ3VhcmFudGVlKGZ1bmMocHJvcGVydGllcykpO1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gRnVuY3Rpb25DYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZWFjdDtcblxuZnVuY3Rpb24gaXNTdWJjbGFzc09mKGFyZ3VtZW50LCBDbGFzcykge1xuICBsZXQgdHlwZU9mID0gZmFsc2U7XG5cbiAgaWYgKGFyZ3VtZW50Lm5hbWUgPT09IENsYXNzLm5hbWUpIHsgLy8vXG4gICAgdHlwZU9mID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBhcmd1bWVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhcmd1bWVudCk7IC8vL1xuXG4gICAgaWYgKGFyZ3VtZW50KSB7XG4gICAgICB0eXBlT2YgPSBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHlwZU9mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfREVQVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuZnVuY3Rpb24gY2xlYXJEZXB0aChkZXB0aCA9IERFRkFVTFRfREVQVEgpIHtcbiAgdGhpcy5jb250ZXh0LmNsZWFyRGVwdGgoZGVwdGgpOyBcbn1cblxuZnVuY3Rpb24gY2xlYXJEZXB0aEJ1ZmZlcigpIHtcbiAgY29uc3QgeyBERVBUSF9CVUZGRVJfQklUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIG1hc2sgPSBERVBUSF9CVUZGRVJfQklUO1xuXG4gIHRoaXMuY29udGV4dC5jbGVhcihtYXNrKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGVwdGhUZXN0aW5nKCkge1xuICBjb25zdCB7IERFUFRIX1RFU1QsIExFUVVBTCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBjYXBhY2l0eSA9IERFUFRIX1RFU1QsXG4gICAgICAgIGRlcHRoQ29tcGFyaXNvbkZ1bmN0aW9uID0gTEVRVUFMO1xuXG4gIHRoaXMuY29udGV4dC5lbmFibGUoY2FwYWNpdHkpO1xuXG4gIHRoaXMuY29udGV4dC5kZXB0aEZ1bmMoZGVwdGhDb21wYXJpc29uRnVuY3Rpb24pO1xufVxuXG5jb25zdCBkZXB0aE1peGlucyA9IHtcbiAgY2xlYXJEZXB0aCxcbiAgY2xlYXJEZXB0aEJ1ZmZlcixcbiAgZW5hYmxlRGVwdGhUZXN0aW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkZXB0aE1peGlucztcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFNIQURFUl9FUlJPUiA9IFwiVW5hYmxlIHRvIGNyZWF0ZSB0aGUgc2hhZGVyLlwiO1xuZXhwb3J0IGNvbnN0IFdFQl9HTF9DT05URVhUX0VSUk9SID0gXCJVbmFibGUgdG8gZ2V0IHRoZSBXZWJHTCBjb250ZXh0LlwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTSEFERVJfRVJST1IgfSBmcm9tIFwiLi4vZXJyb3JzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVNoYWRlcih0eXBlLCBzaGFkZXJTb3VyY2UpIHtcbiAgY29uc3QgeyBDT01QSUxFX1NUQVRVUyB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICBwbmFtZSA9IENPTVBJTEVfU1RBVFVTLFxuICAgICAgICBzaGFkZXIgPSB0aGlzLmNvbnRleHQuY3JlYXRlU2hhZGVyKHR5cGUpO1xuXG4gIHRoaXMuY29udGV4dC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzaGFkZXJTb3VyY2UpO1xuXG4gIHRoaXMuY29udGV4dC5jb21waWxlU2hhZGVyKHNoYWRlcik7XG5cbiAgY29uc3QgY29tcGlsZVN0YXR1cyA9IHRoaXMuY29udGV4dC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBwbmFtZSk7XG5cbiAgaWYgKCFjb21waWxlU3RhdHVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFNIQURFUl9FUlJPUik7XG4gIH1cblxuICByZXR1cm4gc2hhZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBWRVJURVhfU0hBREVSIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHR5cGUgPSBWRVJURVhfU0hBREVSLFxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpO1xuXG4gIHJldHVybiB2ZXJ0ZXhTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyYWdtZW50U2hhZGVyKGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpIHtcbiAgY29uc3QgeyBGUkFHTUVOVF9TSEFERVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdHlwZSA9IEZSQUdNRU5UX1NIQURFUixcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSB0aGlzLmNyZWF0ZVNoYWRlcih0eXBlLCBmcmFnbWVudFNoYWRlclNvdXJjZSk7XG5cbiAgcmV0dXJuIGZyYWdtZW50U2hhZGVyO1xufVxuXG5jb25zdCBzaGFkZXJNaXhpbnMgPSB7XG4gIGNyZWF0ZVNoYWRlcixcbiAgY3JlYXRlVmVydGV4U2hhZGVyLFxuICBjcmVhdGVGcmFnbWVudFNoYWRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hhZGVyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50QnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBFTEVNRU5UX0FSUkFZX0JVRkZFUiwgU1RBVElDX0RSQVcgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVIsXG4gICAgICAgIHVzYWdlID0gU1RBVElDX0RSQVcsXG4gICAgICAgIHVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KGRhdGEpLFxuICAgICAgICBlbGVtZW50QnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgZWxlbWVudEJ1ZmZlcik7XG5cbiAgdGhpcy5jb250ZXh0LmJ1ZmZlckRhdGEodGFyZ2V0LCB1aW50MTZBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBlbGVtZW50QnVmZmVyO1xufVxuXG5mdW5jdGlvbiBiaW5kRWxlbWVudEJ1ZmZlcihlbGVtZW50QnVmZmVyKSB7XG4gIGNvbnN0IHsgRUxFTUVOVF9BUlJBWV9CVUZGRVIgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gRUxFTUVOVF9BUlJBWV9CVUZGRVI7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRCdWZmZXIodGFyZ2V0LCBlbGVtZW50QnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyKGRhdGEpIHtcbiAgY29uc3QgeyBBUlJBWV9CVUZGRVIsIFNUQVRJQ19EUkFXIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgIHRhcmdldCA9IEFSUkFZX0JVRkZFUixcbiAgICAgICAgdXNhZ2UgPSBTVEFUSUNfRFJBVyxcbiAgICAgICAgYnVmZmVyID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlcigpLFxuICAgICAgICBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KGRhdGEpO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQuYnVmZmVyRGF0YSh0YXJnZXQsIGZsb2F0MzJBcnJheSwgdXNhZ2UpO1xuXG4gIHJldHVybiBidWZmZXI7XG59XG5cbmZ1bmN0aW9uIGJpbmRCdWZmZXIoYnVmZmVyLCBhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cykge1xuICBjb25zdCB7IEFSUkFZX0JVRkZFUiwgRkxPQVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgdGFyZ2V0ID0gQVJSQVlfQlVGRkVSLFxuICAgICAgICB0eXBlID0gRkxPQVQsXG4gICAgICAgIG5vcm1hbGl6ZSA9IGZhbHNlLFxuICAgICAgICBzdHJpZGUgPSAwLFxuICAgICAgICBvZmZzZXQgPSAwO1xuXG4gIHRoaXMuY29udGV4dC5iaW5kQnVmZmVyKHRhcmdldCwgYnVmZmVyKTtcblxuICB0aGlzLmNvbnRleHQudmVydGV4QXR0cmliUG9pbnRlcihhdHRyaWJ1dGVMb2NhdGlvbiwgY29tcG9uZW50cywgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldCk7XG5cbiAgdGhpcy5jb250ZXh0LmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGF0dHJpYnV0ZUxvY2F0aW9uKTtcbn1cblxuY29uc3QgYnVmZmVyTWl4aW5zID0ge1xuICBjcmVhdGVFbGVtZW50QnVmZmVyLFxuICBiaW5kRWxlbWVudEJ1ZmZlcixcbiAgY3JlYXRlQnVmZmVyLFxuICBiaW5kQnVmZmVyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBidWZmZXJNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfUiwgREVGQVVMVF9HLCBERUZBVUxUX0IsIERFRkFVTFRfQSB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5mdW5jdGlvbiBjbGVhckNvbG91cihyID0gREVGQVVMVF9SLCBnID0gREVGQVVMVF9HLCBiID0gREVGQVVMVF9CLCBhID0gREVGQVVMVF9BKSB7IHRoaXMuY29udGV4dC5jbGVhckNvbG9yKHIsIGcsIGIsIGEpOyB9XG5cbmZ1bmN0aW9uIGNsZWFyQ29sb3VyQnVmZmVyKCkge1xuICBjb25zdCB7IENPTE9SX0JVRkZFUl9CSVQgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgbWFzayA9IENPTE9SX0JVRkZFUl9CSVQ7XG5cbiAgdGhpcy5jb250ZXh0LmNsZWFyKG1hc2spO1xufVxuXG5jb25zdCBjb2xvdXJNaXhpbnMgPSB7XG4gIGNsZWFyQ29sb3VyLFxuICBjbGVhckNvbG91ckJ1ZmZlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29sb3VyTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBhcHBseU1hdHJpeCh1bmlmb3JtTG9jYXRpb24sIG1hdHJpeCkge1xuICBjb25zdCB0cmFuc3Bvc2UgPSBmYWxzZTsgIC8vL1xuXG4gIHRoaXMuY29udGV4dC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm1Mb2NhdGlvbiwgdHJhbnNwb3NlLCBtYXRyaXgpO1xufVxuXG5jb25zdCBtYXRyaXhNaXhpbnMgPSB7XG4gIGFwcGx5TWF0cml4XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXRyaXhNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQyxcbiAgICAgICAgIE1PWl9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMsXG4gICAgICAgICBXRUJLSVRfRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KSB7XG5cdGNvbnN0IHsgUkdCQSwgTElORUFSLCBVTlNJR05FRF9CWVRFLCBURVhUVVJFMCwgVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1MsIFRFWFRVUkVfV1JBUF9ULCBVTlBBQ0tfRkxJUF9ZX1dFQkdMLCBDTEFNUF9UT19FREdFLCBORUFSRVNULCBSRVBFQVQsIFRFWFRVUkVfTUlOX0ZJTFRFUiB9ID0gdGhpcy5jb250ZXh0LFxuXHRcdFx0XHR0YXJnZXQgPSBURVhUVVJFMCArIGluZGV4LFxuXHRcdFx0XHRsZXZlbCA9IDAsXG5cdFx0XHRcdGludGVybmFsRm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0Zm9ybWF0ID0gUkdCQSxcblx0XHRcdFx0dHlwZSA9IFVOU0lHTkVEX0JZVEUsXG5cdFx0XHRcdHRleHR1cmUgPSB0aGlzLmNvbnRleHQuY3JlYXRlVGV4dHVyZSgpO1xuXG4gIHRoaXMuY29udGV4dC5hY3RpdmVUZXh0dXJlKHRhcmdldCk7XG5cbiAgdGhpcy5jb250ZXh0LmJpbmRUZXh0dXJlKFRFWFRVUkVfMkQsIHRleHR1cmUpO1xuXG4gIHRoaXMuY29udGV4dC5waXhlbFN0b3JlaShVTlBBQ0tfRkxJUF9ZX1dFQkdMLCB0cnVlKTtcblxuICB0aGlzLmNvbnRleHQudGV4SW1hZ2UyRChURVhUVVJFXzJELCBsZXZlbCwgaW50ZXJuYWxGb3JtYXQsIGZvcm1hdCwgdHlwZSwgaW1hZ2UpO1xuXG4gIGlmIChyZXBlYXQpIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgUkVQRUFUKTtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfVCwgUkVQRUFUKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyaShURVhUVVJFXzJELCBURVhUVVJFX1dSQVBfUywgQ0xBTVBfVE9fRURHRSk7XG4gICAgdGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9XUkFQX1QsIENMQU1QX1RPX0VER0UpO1xuICB9XG5cblx0dGhpcy5jb250ZXh0LnRleFBhcmFtZXRlcmkoVEVYVFVSRV8yRCwgVEVYVFVSRV9NSU5fRklMVEVSLCBMSU5FQVIpO1xuXG5cdHJldHVybiB0ZXh0dXJlO1xufVxuXG5mdW5jdGlvbiBlbmFibGVBbmlzb3Ryb3BpY0ZpbHRlcmluZygpIHtcbiAgY29uc3QgZXh0ZW5zaW9uID0gKFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oRVhUX1RFWFRVUkVfRklMVEVSX0FOSVNPVFJPUElDKSB8fFxuICAgIHRoaXMuY29udGV4dC5nZXRFeHRlbnNpb24oTU9aX0VYVF9URVhUVVJFX0ZJTFRFUl9BTklTT1RST1BJQykgfHxcbiAgICB0aGlzLmNvbnRleHQuZ2V0RXh0ZW5zaW9uKFdFQktJVF9FWFRfVEVYVFVSRV9GSUxURVJfQU5JU09UUk9QSUMpXG4gICk7XG5cbiAgaWYgKGV4dGVuc2lvbikge1xuICAgIGNvbnN0IHsgVEVYVFVSRV8yRCB9ID0gdGhpcy5jb250ZXh0LFxuICAgICAgICAgIHsgTUFYX1RFWFRVUkVfTUFYX0FOSVNPVFJPUFlfRVhULCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCB9ID0gZXh0ZW5zaW9uLFxuICAgICAgICAgIG1heGltdW0gPSB0aGlzLmNvbnRleHQuZ2V0UGFyYW1ldGVyKE1BWF9URVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCk7XG5cbiAgICB0aGlzLmNvbnRleHQudGV4UGFyYW1ldGVyZihURVhUVVJFXzJELCBURVhUVVJFX01BWF9BTklTT1RST1BZX0VYVCwgbWF4aW11bSk7XG4gIH1cbn1cblxuY29uc3QgdGV4dHVyZU1peGlucyA9IHtcbiAgY3JlYXRlVGV4dHVyZSxcbiAgZW5hYmxlQW5pc290cm9waWNGaWx0ZXJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRleHR1cmVNaXhpbnM7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xuICBjb25zdCBwcm9ncmFtID0gdGhpcy5jb250ZXh0LmNyZWF0ZVByb2dyYW0oKTtcblxuICB0aGlzLmNvbnRleHQuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcik7XG5cbiAgdGhpcy5jb250ZXh0LmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICB0aGlzLmNvbnRleHQubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuZnVuY3Rpb24gdXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gIHRoaXMuY29udGV4dC51c2VQcm9ncmFtKHByb2dyYW0pO1xufVxuXG5jb25zdCBwcm9ncmFtTWl4aW5zID0ge1xuICBjcmVhdGVQcm9ncmFtLFxuICB1c2VQcm9ncmFtXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9ncmFtTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBlbmFibGVCbGVuZGluZygpIHtcbiAgY29uc3QgeyBCTEVORCwgU1JDX0FMUEhBLCBPTkUgfSA9IHRoaXMuY29udGV4dCxcbiAgICAgICAgY2FwYWNpdHkgPSBCTEVORCxcbiAgICAgICAgc291cmNlRmFjdG9yID0gU1JDX0FMUEhBLFxuICAgICAgICBkZXN0aW5hdGlvbkZhY3RvciA9IE9ORTtcblxuICB0aGlzLmNvbnRleHQuZW5hYmxlKGNhcGFjaXR5KTtcblxuICB0aGlzLmNvbnRleHQuYmxlbmRGdW5jKHNvdXJjZUZhY3RvciwgZGVzdGluYXRpb25GYWN0b3IpO1xufVxuXG5jb25zdCBibGVuZGluZ01peGlucyA9IHtcbiAgZW5hYmxlQmxlbmRpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJsZW5kaW5nTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBnZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBuYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlTG9jYXRpb24ocHJvZ3JhbSwgbmFtZSkge1xuICByZXR1cm4gdGhpcy5jb250ZXh0LmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIG5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUodW5pZm9ybUxvY2F0aW9uLCBpbnRlZ2VyVmFsdWUpIHtcbiAgdGhpcy5jb250ZXh0LnVuaWZvcm0xaSh1bmlmb3JtTG9jYXRpb24sIGludGVnZXJWYWx1ZSk7XG59XG5cbmNvbnN0IGxvY2F0aW9uTWl4aW5zID0ge1xuICBnZXRVbmlmb3JtTG9jYXRpb24sXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9uLFxuICBzZXRVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvY2F0aW9uTWl4aW5zO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZGVwdGhNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2RlcHRoXCI7XG5pbXBvcnQgc2hhZGVyTWl4aW5zIGZyb20gXCIuL21peGlucy9zaGFkZXJcIjtcbmltcG9ydCBidWZmZXJNaXhpbnMgZnJvbSBcIi4vbWl4aW5zL2J1ZmZlclwiO1xuaW1wb3J0IGNvbG91ck1peGlucyBmcm9tIFwiLi9taXhpbnMvY29sb3VyXCI7XG5pbXBvcnQgbWF0cml4TWl4aW5zIGZyb20gXCIuL21peGlucy9tYXRyaXhcIjtcbmltcG9ydCB0ZXh0dXJlTWl4aW5zIGZyb20gXCIuL21peGlucy90ZXh0dXJlXCI7XG5pbXBvcnQgcHJvZ3JhbU1peGlucyBmcm9tIFwiLi9taXhpbnMvcHJvZ3JhbVwiO1xuaW1wb3J0IGJsZW5kaW5nTWl4aW5zIGZyb20gXCIuL21peGlucy9ibGVuZGluZ1wiO1xuaW1wb3J0IGxvY2F0aW9uTWl4aW5zIGZyb20gXCIuL21peGlucy9sb2NhdGlvblwiO1xuXG5pbXBvcnQgeyBXRUJfR0xfQ09OVEVYVF9FUlJPUiB9IGZyb20gXCIuL2Vycm9yc1wiO1xuaW1wb3J0IHsgV0lEVEgsIEhFSUdIVCwgQ0FOVkFTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gQ0FOVkFTKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvbUVsZW1lbnRGcm9tU2VsZWN0b3Ioc2VsZWN0b3IpLFxuICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0RnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCk7XG5cbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb21FbGVtZW50O1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgIHRoaXMuZW5hYmxlRGVwdGhUZXN0aW5nKCk7ICAvLy9cbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LndpZHRoOyB9XG5cbiAgZ2V0SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmhlaWdodDsgfVxuXG4gIGdldENsaWVudFdpZHRoKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudFdpZHRoOyB9XG5cbiAgZ2V0Q2xpZW50SGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LmNsaWVudEhlaWdodDsgfVxuXG4gIHNldFdpZHRoKHdpZHRoKSB7IHRoaXMuZG9tRWxlbWVudC5zZXRBdHRyaWJ1dGUoV0lEVEgsIHdpZHRoKTsgfVxuXG4gIHNldEhlaWdodChoZWlnaHQpIHsgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShIRUlHSFQsIGhlaWdodCk7IH1cblxuICByZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IHggPSAwLFxuICAgICAgICAgIHkgPSAwO1xuXG4gICAgdGhpcy5zZXRXaWR0aCh3aWR0aCk7XG5cbiAgICB0aGlzLnNldEhlaWdodChoZWlnaHQpO1xuXG4gICAgdGhpcy5jb250ZXh0LnZpZXdwb3J0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jbGVhckRlcHRoKCk7XG4gICAgdGhpcy5jbGVhckNvbG91cigpO1xuICAgIHRoaXMuY2xlYXJEZXB0aEJ1ZmZlcigpO1xuICAgIHRoaXMuY2xlYXJDb2xvdXJCdWZmZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihyZW5kZXJlciwgb2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCkge1xuICAgIGNvbnN0IG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSByZW5kZXJlci5nZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcmVuZGVyZXIuZ2V0Um90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uKCksXG4gICAgICAgICAgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHJlbmRlcmVyLmdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTtcblxuICAgIHRoaXMuYXBwbHlNYXRyaXgob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgb2Zmc2V0c01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4KTtcbiAgICB0aGlzLmFwcGx5TWF0cml4KHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChyb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeCk7XG4gICAgdGhpcy5hcHBseU1hdHJpeChwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4KTtcbiAgfVxuXG4gIGRyYXdFbGVtZW50cyhzdGFydCwgZmluaXNoKSB7XG4gICAgY29uc3QgeyBUUklBTkdMRVMsIFVOU0lHTkVEX1NIT1JUIH0gPSB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgbW9kZSA9IFRSSUFOR0xFUyxcbiAgICAgICAgICB0eXBlID0gVU5TSUdORURfU0hPUlQsXG4gICAgICAgICAgY291bnQgPSBmaW5pc2ggLSBzdGFydCxcbiAgICAgICAgICBvZmZzZXQgPSBzdGFydCAqIDI7IC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LmRyYXdFbGVtZW50cyhtb2RlLCBjb3VudCwgdHlwZSwgb2Zmc2V0KVxuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgZGVwdGhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBzaGFkZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBidWZmZXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBjb2xvdXJNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCBtYXRyaXhNaXhpbnMpO1xuT2JqZWN0LmFzc2lnbihDYW52YXMucHJvdG90eXBlLCB0ZXh0dXJlTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgcHJvZ3JhbU1peGlucyk7XG5PYmplY3QuYXNzaWduKENhbnZhcy5wcm90b3R5cGUsIGJsZW5kaW5nTWl4aW5zKTtcbk9iamVjdC5hc3NpZ24oQ2FudmFzLnByb3RvdHlwZSwgbG9jYXRpb25NaXhpbnMpO1xuXG5mdW5jdGlvbiBkb21FbGVtZW50RnJvbVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIGNvbnN0IGRvbUVsZW1lbnQgPSAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpWzBdIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOyAgLy8vXG5cbiAgcmV0dXJuIGRvbUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNvbnRleHRGcm9tRE9NRWxlbWVudChkb21FbGVtZW50KSB7XG4gIGNvbnN0IGNvbnRleHQgPSBkb21FbGVtZW50LmdldENvbnRleHQoXCJ3ZWJnbFwiKTtcblxuICBpZiAoIWNvbnRleHQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoV0VCX0dMX0NPTlRFWFRfRVJST1IpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKSB7XG4gICAgdGhpcy5mYWNldHMgPSBmYWNldHM7XG4gICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICB0aGlzLnJlbmRlcmVyRGF0YSA9IHJlbmRlcmVyRGF0YTtcbiAgICB0aGlzLnJlbmRlcmVyQnVmZmVycyA9IHJlbmRlcmVyQnVmZmVycztcbiAgICB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMgPSB1bmlmb3JtTG9jYXRpb25zO1xuICAgIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zID0gYXR0cmlidXRlTG9jYXRpb25zO1xuICB9XG5cbiAgZ2V0RmFjZXRzKCkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0cztcbiAgfVxuXG4gIGdldFByb2dyYW0oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZ3JhbTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyRGF0YTtcbiAgfVxuICBcbiAgZ2V0UmVuZGVyZXJCdWZmZXJzKCkge1xuICAgIHJldHVybiB0aGlzLnJlbmRlcmVyQnVmZmVycztcbiAgfVxuXG4gIGdldFVuaWZvcm1Mb2NhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucztcbiAgfVxuXG4gIGdldEF0dHJpYnV0ZUxvY2F0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cblxuICBnZXRDb3VudCgpIHsgcmV0dXJuIHRoaXMucmVuZGVyZXJEYXRhLmdldENvdW50KCk7IH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy51bmlmb3JtTG9jYXRpb25zLmdldE9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldE5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0Tm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5nZXRSb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24oKTsgfVxuXG4gIGdldFByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24oKSB7IHJldHVybiB0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuZ2V0UHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpOyB9XG5cbiAgZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpIHsgcmV0dXJuIHRoaXMuYXR0cmlidXRlTG9jYXRpb25zLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkgeyByZXR1cm4gdGhpcy5hdHRyaWJ1dGVMb2NhdGlvbnMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKTsgfVxuXG4gIGFkZEZhY2V0cyhmYWNldHMpIHtcbiAgICBhZGQodGhpcy5mYWNldHMsIGZhY2V0cyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSB7XG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNhbnZhcy5jcmVhdGVWZXJ0ZXhTaGFkZXIodmVydGV4U2hhZGVyU291cmNlKSxcbiAgICAgICAgZnJhZ21lbnRTaGFkZXIgPSBjYW52YXMuY3JlYXRlRnJhZ21lbnRTaGFkZXIoZnJhZ21lbnRTaGFkZXJTb3VyY2UpLFxuICAgICAgICBwcm9ncmFtID0gY2FudmFzLmNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIFxuICByZXR1cm4gcHJvZ3JhbTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmxhdHRlbiwgbWVyZ2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IGFkZCA9IG1lcmdlOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSkge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSA9IHZlcnRleFBvc2l0aW9uc0RhdGE7XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSA9IHZlcnRleE5vcm1hbHNEYXRhO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIGNvbnN0IHZlcnRleEluZGV4ZXNEYXRhTGVuZ3RoID0gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YS5sZW5ndGgsXG4gICAgICAgICAgY291bnQgPSB2ZXJ0ZXhJbmRleGVzRGF0YUxlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uc0RhdGE7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbHNEYXRhO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy52ZXJ0ZXhJbmRleGVzRGF0YTtcbiAgfVxuXG4gIGFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gZmxhdHRlbih2ZXJ0ZXhQb3NpdGlvbnMpO1xuXG4gICAgYWRkKHRoaXMudmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBhZGRWZXJ0ZXhOb3JtYWxzKHZlcnRleE5vcm1hbHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhOb3JtYWxzRGF0YSA9IGZsYXR0ZW4odmVydGV4Tm9ybWFscyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEpO1xuICB9XG5cbiAgYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlc0RhdGEgPSB2ZXJ0ZXhJbmRleGVzOyAgLy8vXG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhJbmRleGVzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKENsYXNzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnNEYXRhID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IFtdLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlckRhdGEgZXh0ZW5kcyBSZW5kZXJlckRhdGEge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4Q29sb3Vyc0RhdGEgPSB2ZXJ0ZXhDb2xvdXJzRGF0YTtcbiAgfVxuICBcbiAgZ2V0VmVydGV4Q29sb3Vyc0RhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3Vyc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhDb2xvdXJzKHZlcnRleENvbG91cnMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IGZsYXR0ZW4odmVydGV4Q29sb3Vycyk7XG5cbiAgICBhZGQodGhpcy52ZXJ0ZXhDb2xvdXJzRGF0YSwgdmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IFtdLFxuICAgICAgICAgIGNvbG91clJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhDb2xvdXJSZW5kZXJlckRhdGEsIHZlcnRleENvbG91cnNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJEYXRhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBub3JtYWxzTWF0cml4TmFtZSA9IFwidU5vcm1hbHNNYXRyaXhcIjtcbmV4cG9ydCBjb25zdCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lID0gXCJhVmVydGV4Tm9ybWFsXCI7XG5cbmNvbnN0IGxpZ2h0aW5nU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtub3JtYWxzTWF0cml4TmFtZX07XG5cbiAgICAgICAgYXR0cmlidXRlIHZlYzMgJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICB2ZWMzIGRpcmVjdGlvbmFsTGlnaHRDb2xvdXIgPSB2ZWMzKDEsIDEsIDEpLFxuICAgICAgICAgICAgIGRpcmVjdGlvbmFsVmVjdG9yID0gbm9ybWFsaXplKHZlYzMoMS4wLCAxLjAsIDEuMCkpO1xuICAgICAgICAgIFxuICAgICAgICB2ZWMzIGNhbGN1bGF0ZUxpZ2h0aW5nKCkge1xuICAgICAgICAgIHZlYzQgdHJhbnNmb3JtZWROb3JtYWwgPSAke25vcm1hbHNNYXRyaXhOYW1lfSAqIHZlYzQoJHt2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lfSwgMS4wKTsgICAgICAgICAgICBcblxuICAgICAgICAgIGZsb2F0IGRpcmVjdGlvbmFsID0gKGRvdCh0cmFuc2Zvcm1lZE5vcm1hbC54eXosIGRpcmVjdGlvbmFsVmVjdG9yKSArIDEuMCkgLyAyLjA7XG4gICAgICAgICAgXG4gICAgICAgICAgdmVjMyBsaWdodGluZyA9IChkaXJlY3Rpb25hbExpZ2h0Q29sb3VyICogZGlyZWN0aW9uYWwpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybiBsaWdodGluZztcbiAgICAgICAgfVxuXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgbGlnaHRpbmdTb3VyY2U7IiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgb2Zmc2V0c01hdHJpeE5hbWUgPSBcInVPZmZzZXRzTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcG9zaXRpb25NYXRyaXhOYW1lID0gXCJ1UG9zaXRpb25NYXRyaXhcIjtcbmV4cG9ydCBjb25zdCByb3RhdGlvbnNNYXRyaXhOYW1lID0gXCJ1Um90YXRpb25zTWF0cml4XCI7XG5leHBvcnQgY29uc3QgcHJvamVjdGlvbk1hdHJpeE5hbWUgPSBcInVQZXJzcGVjdGl2ZU1hdHJpeFwiO1xuZXhwb3J0IGNvbnN0IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZSA9IFwiYVZlcnRleFBvc2l0aW9uXCI7XG5cbmNvbnN0IHBvc2l0aW9uU291cmNlID0gbmV3IFN0cmluZyhgXG4gIFxuICAgICAgICB1bmlmb3JtIG1hdDQgJHtvZmZzZXRzTWF0cml4TmFtZX0sXG4gICAgICAgICAgICAgICAgICAgICAke3JvdGF0aW9uc01hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwb3NpdGlvbk1hdHJpeE5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgJHtwcm9qZWN0aW9uTWF0cml4TmFtZX07XG4gICAgICAgIFxuICAgICAgICBhdHRyaWJ1dGUgdmVjNCAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG5cbiAgICAgICAgdmVjNCBjYWxjdWxhdGVQb3NpdGlvbigpIHtcbiAgICAgICAgICB2ZWM0IHBvc2l0aW9uID0gJHtwcm9qZWN0aW9uTWF0cml4TmFtZX0gKiAke3Bvc2l0aW9uTWF0cml4TmFtZX0gKiAke3JvdGF0aW9uc01hdHJpeE5hbWV9ICogJHtvZmZzZXRzTWF0cml4TmFtZX0gKiAke3ZlcnRleFBvc2l0aW9uQXR0cmlidXRlTmFtZX07XG4gICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvc2l0aW9uU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbGlnaHRpbmdTb3VyY2UgZnJvbSBcIi4uLy4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHBvc2l0aW9uU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGNvbnN0IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgPSBcImFWZXJ0ZXhDb2xvdXJcIlxuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICBcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTtcblxuICAgICAgICAke2xpZ2h0aW5nU291cmNlfVxuICAgICAgXG4gICAgICAgICR7cG9zaXRpb25Tb3VyY2V9XG4gICAgXG4gICAgICAgIHZhcnlpbmcgaGlnaHAgdmVjMyB2TGlnaHRpbmc7XG4gICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGxvd3AgdmVjNCB2Q29sb3VyO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIHZMaWdodGluZyA9IGNhbGN1bGF0ZUxpZ2h0aW5nKCk7XG5cbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IGNhbGN1bGF0ZVBvc2l0aW9uKCk7XG5cbiAgICAgICAgICB2Q29sb3VyID0gJHt2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lfTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcnRleFNoYWRlclNvdXJjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIHZhcnlpbmcgbG93cCB2ZWM0IHZDb2xvdXI7XG4gICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZDb2xvdXIucmdiICogdkxpZ2h0aW5nLCB2Q29sb3VyLmEpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgYCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZyYWdtZW50U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB2ZXJ0ZXhOb3JtYWxDb21wb25lbnRzID0gMyxcbiAgICAgIHZlcnRleFBvc2l0aW9uQ29tcG9uZW50cyA9IDM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IHZlcnRleFBvc2l0aW9uc0J1ZmZlcjtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSB2ZXJ0ZXhOb3JtYWxzQnVmZmVyO1xuICAgIHRoaXMudmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIgPSB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSk7XG4gIH1cblxuICBjcmVhdGVWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleE5vcm1hbHNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHZlcnRleE5vcm1hbHNEYXRhKTtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKHZlcnRleEluZGV4ZXNEYXRhLCBjYW52YXMpIHtcbiAgICB0aGlzLnZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyID0gY2FudmFzLmNyZWF0ZUVsZW1lbnRCdWZmZXIodmVydGV4SW5kZXhlc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleE5vcm1hbENvbXBvbmVudHMpO1xuICB9XG5cbiAgYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25Db21wb25lbnRzKTtcbiAgfVxuXG4gIGJpbmRWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcihjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEVsZW1lbnRCdWZmZXIodGhpcy52ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcik7XG4gIH1cblxuICBjcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhQb3NpdGlvbnNCdWZmZXIodmVydGV4UG9zaXRpb25zRGF0YSwgY2FudmFzKTtcbiAgICB0aGlzLmNyZWF0ZVZlcnRleE5vcm1hbHNCdWZmZXIodmVydGV4Tm9ybWFsc0RhdGEsIGNhbnZhcyk7XG4gICAgdGhpcy5jcmVhdGVWZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlcih2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICB0aGlzLmJpbmRWZXJ0ZXhOb3JtYWxzQnVmZmVyKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleFBvc2l0aW9uc0J1ZmZlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICAgIHRoaXMuYmluZFZlcnRleEluZGV4ZXNFbGVtZW50QnVmZmVyKGNhbnZhcyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoQ2xhc3MsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHZlcnRleFBvc2l0aW9uc0J1ZmZlciA9IG51bGwsIC8vL1xuICAgICAgICAgIHZlcnRleE5vcm1hbHNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciA9IG51bGwsICAvLy9cbiAgICAgICAgICByZW5kZXJlckJ1ZmZlcnMgPSBuZXcgQ2xhc3ModmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiByZW5kZXJlckJ1ZmZlcnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyQnVmZmVycyBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvYnVmZmVyc1wiO1xuXG5jb25zdCB2ZXJ0ZXhDb2xvdXJDb21wb25lbnRzID0gNDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGV4dGVuZHMgUmVuZGVyZXJCdWZmZXJzIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zQnVmZmVyLCB2ZXJ0ZXhOb3JtYWxzQnVmZmVyLCB2ZXJ0ZXhJbmRleGVzRWxlbWVudEJ1ZmZlciwgdmVydGV4Q29sb3Vyc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJzQnVmZmVyID0gdmVydGV4Q29sb3Vyc0J1ZmZlcjtcbiAgfVxuXG4gIGNyZWF0ZVZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEsIGNhbnZhcykge1xuICAgIHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciA9IGNhbnZhcy5jcmVhdGVCdWZmZXIodmVydGV4Q29sb3Vyc0RhdGEpO1xuICB9XG5cbiAgYmluZFZlcnRleENvbG91cnNCdWZmZXIodmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcykge1xuICAgIGNhbnZhcy5iaW5kQnVmZmVyKHRoaXMudmVydGV4Q29sb3Vyc0J1ZmZlciwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckNvbXBvbmVudHMpO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyh2ZXJ0ZXhQb3NpdGlvbnNEYXRhLCB2ZXJ0ZXhOb3JtYWxzRGF0YSwgdmVydGV4SW5kZXhlc0RhdGEsIHZlcnRleENvbG91cnNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVmVydGV4Q29sb3Vyc0J1ZmZlcih2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRWZXJ0ZXhDb2xvdXJzQnVmZmVyKHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHZlcnRleENvbG91cnNCdWZmZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoQ29sb3VyUmVuZGVyZXJCdWZmZXJzLCB2ZXJ0ZXhDb2xvdXJzQnVmZmVyKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vcm1hbHNNYXRyaXhOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuXG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4TmFtZSwgcm90YXRpb25zTWF0cml4TmFtZSwgcG9zaXRpb25NYXRyaXhOYW1lLCBwcm9qZWN0aW9uTWF0cml4TmFtZSB9IGZyb20gXCIuLi9zb3VyY2UvcG9zaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24pIHtcbiAgICB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMubm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gICAgdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uID0gcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uO1xuICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRPZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXROb3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuXG4gIGdldFJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBnZXRQcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgb2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgb2Zmc2V0c01hdHJpeE5hbWUpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIG5vcm1hbHNNYXRyaXhOYW1lKSxcbiAgICAgICAgICBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiA9IGNhbnZhcy5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgcG9zaXRpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHJvdGF0aW9uc01hdHJpeE5hbWUpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHByb2plY3Rpb25NYXRyaXhOYW1lKSxcbiAgICAgICAgICB1bmlmb3JtTG9jYXRpb25zID0gbmV3IENsYXNzKG9mZnNldHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIG5vcm1hbHNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHBvc2l0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCByb3RhdGlvbnNNYXRyaXhVbmlmb3JtTG9jYXRpb24sIHByb2plY3Rpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIHVuaWZvcm1Mb2NhdGlvbnM7ICAgICAgIFxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJVbmlmb3JtTG9jYXRpb25zIGV4dGVuZHMgVW5pZm9ybUxvY2F0aW9ucyB7XG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHsgcmV0dXJuIFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyVW5pZm9ybUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzKTsgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9saWdodGluZ1wiO1xuaW1wb3J0IHsgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uL3NvdXJjZS9wb3NpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRyaWJ1dGVMb2NhdGlvbnMge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbikge1xuICAgIHRoaXMudmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gICAgdGhpcy52ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0oQ2xhc3MsIHByb2dyYW0sIGNhbnZhcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gY2FudmFzLmdldEF0dHJpYnV0ZUxvY2F0aW9uKHByb2dyYW0sIHZlcnRleE5vcm1hbEF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIGF0dHJpYnV0ZUxvY2F0aW9ucyA9IG5ldyBDbGFzcyh2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBhdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH0gIFxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHZlcnRleENvbG91ckF0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24pO1xuXG4gICAgdGhpcy52ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb247XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVOYW1lKSxcbiAgICAgICAgICBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCBwcm9ncmFtLCBjYW52YXMsIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uKTtcblxuICAgIHJldHVybiBjb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbnM7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IENvbG91clJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS9jb2xvdXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL2NvbG91ci92ZXJ0ZXhTaGFkZXJcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlclNvdXJjZSBmcm9tIFwiLi9zb3VyY2UvY29sb3VyL2ZyYWdtZW50U2hhZGVyXCI7XG5pbXBvcnQgQ29sb3VyUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL2NvbG91clwiO1xuaW1wb3J0IENvbG91clVuaWZvcm1Mb2NhdGlvbnMgZnJvbSBcIi4vbG9jYXRpb25zL2NvbG91ci91bmlmb3JtXCI7XG5pbXBvcnQgQ29sb3VyQXR0cmlidXRlTG9jYXRpb25zIGZyb20gXCIuL2xvY2F0aW9ucy9jb2xvdXIvYXR0cmlidXRlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9ncmFtIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmNvbnN0IGFkZCA9IHB1c2g7IC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcbiAgZ2V0VmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbiA9IGF0dHJpYnV0ZUxvY2F0aW9ucy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmV0dXJuIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpLFxuICAgICAgICAgIHZlcnRleEluZGV4ZXMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxzID0gW10sXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zID0gW10sXG4gICAgICAgICAgdmVydGV4Q29sb3VycyA9IFtdO1xuXG4gICAgZmFjZXRzLmZvckVhY2goKGZhY2V0LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY29sb3VyZWRGYWNldCA9IGZhY2V0LCAgLy8vXG4gICAgICAgICAgICBmYWNldFZlcnRleEluZGV4ZXMgPSBmYWNldC5nZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgIGZhY2V0VmVydGV4UG9zaXRpb25zID0gZmFjZXQuZ2V0VmVydGV4UG9zaXRpb25zKCksXG4gICAgICAgICAgICBjb2xvdXJlZEZhY2V0VmVydGV4Q29sb3VycyA9IGNvbG91cmVkRmFjZXQuZ2V0VmVydGV4Q29sb3VycygpO1xuXG4gICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgIGFkZCh2ZXJ0ZXhOb3JtYWxzLCBmYWNldFZlcnRleE5vcm1hbHMpO1xuICAgICAgYWRkKHZlcnRleFBvc2l0aW9ucywgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMpO1xuICAgICAgYWRkKHZlcnRleENvbG91cnMsIGNvbG91cmVkRmFjZXRWZXJ0ZXhDb2xvdXJzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCk7XG5cbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4SW5kZXhlcyh2ZXJ0ZXhJbmRleGVzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Tm9ybWFscyh2ZXJ0ZXhOb3JtYWxzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4Q29sb3Vycyh2ZXJ0ZXhDb2xvdXJzKTtcbiAgICByZW5kZXJlckRhdGEuYWRkVmVydGV4UG9zaXRpb25zKHZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4UG9zaXRpb25zRGF0YSgpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHNEYXRhID0gcmVuZGVyZXJEYXRhLmdldFZlcnRleE5vcm1hbHNEYXRhKCksXG4gICAgICAgICAgdmVydGV4SW5kZXhlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4SW5kZXhlc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhDb2xvdXJzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhDb2xvdXJzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhDb2xvdXJzRGF0YSwgY2FudmFzKTtcbiAgfVxuXG4gIGJpbmRCdWZmZXJzKGNhbnZhcykge1xuICAgIGNvbnN0IHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleENvbG91ckF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhDb2xvdXJBdHRyaWJ1dGVMb2NhdGlvbigpO1xuICAgIFxuICAgIHJlbmRlcmVyQnVmZmVycy5iaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Q29sb3VyQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgY29uc3QgY291bnQgPSB0aGlzLmdldENvdW50KCksXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0odmVydGV4U2hhZGVyU291cmNlLCBmcmFnbWVudFNoYWRlclNvdXJjZSwgY2FudmFzKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckRhdGEgPSBDb2xvdXJSZW5kZXJlckRhdGEuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlckJ1ZmZlcnMgPSBDb2xvdXJSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBjb2xvdXJVbmlmb3JtTG9jYXRpb25zID0gQ29sb3VyVW5pZm9ybUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIGNvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucyA9IENvbG91ckF0dHJpYnV0ZUxvY2F0aW9ucy5mcm9tUHJvZ3JhbShwcm9ncmFtLCBjYW52YXMpLFxuICAgICAgICAgIHJlbmRlcmVyRGF0YSA9IGNvbG91clJlbmRlcmVyRGF0YSwgIC8vL1xuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IGNvbG91clJlbmRlcmVyQnVmZmVycywgIC8vL1xuICAgICAgICAgIHVuaWZvcm1Mb2NhdGlvbnMgPSBjb2xvdXJVbmlmb3JtTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgYXR0cmlidXRlTG9jYXRpb25zID0gY29sb3VyQXR0cmlidXRlTG9jYXRpb25zLCAgLy8vXG4gICAgICAgICAgY29sb3VyUmVuZGVyZXIgPSBuZXcgQ29sb3VyUmVuZGVyZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcbiAgICBcbiAgICByZXR1cm4gY29sb3VyUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGxpZ2h0aW5nU291cmNlIGZyb20gXCIuLi8uLi9zb3VyY2UvbGlnaHRpbmdcIjtcbmltcG9ydCBwb3NpdGlvblNvdXJjZSBmcm9tIFwiLi4vLi4vc291cmNlL3Bvc2l0aW9uXCI7XG5cbmV4cG9ydCBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUgPSBcImFUZXh0dXJlQ29vcmRpbmF0ZVwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBuZXcgU3RyaW5nKGBcbiAgICAgICAgXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWMyICR7dGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lfTtcbiAgICAgICAgXG4gICAgICAgICR7bGlnaHRpbmdTb3VyY2V9XG4gICAgICBcbiAgICAgICAgJHtwb3NpdGlvblNvdXJjZX1cblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICBcbiAgICAgICAgdmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmRpbmF0ZTtcbiAgICAgICAgXG4gICAgICAgIHZvaWQgbWFpbigpIHtcbiAgICAgICAgICB2TGlnaHRpbmcgPSBjYWxjdWxhdGVMaWdodGluZygpO1xuXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBjYWxjdWxhdGVQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICB2VGV4dHVyZUNvb3JkaW5hdGUgPSAke3RleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTmFtZX07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgdmVydGV4U2hhZGVyU291cmNlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVuZGVyZXJEYXRhIGZyb20gXCIuLi8uLi9yZW5kZXJlci9kYXRhXCI7XG5cbmltcG9ydCB7IG1lcmdlLCBmbGF0dGVuIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBtZXJnZTsgIC8vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXJEYXRhIGV4dGVuZHMgUmVuZGVyZXJEYXRhIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKSB7XG4gICAgc3VwZXIodmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhKTtcblxuICAgIHRoaXMudmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSA9IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBnZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGE7XG4gIH1cblxuICBhZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIGNvbnN0IHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSBmbGF0dGVuKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIGFkZCh0aGlzLnZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEsIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkgeyBcbiAgICBjb25zdCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhID0gW10sXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyRGF0YSA9IFJlbmRlcmVyRGF0YS5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZVJlbmRlcmVyRGF0YTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgY29uc3Qgc2FtcGxlck5hbWUgPSBcInVTYW1wbGVyXCI7XG5cbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gbmV3IFN0cmluZyhgXG4gICAgICAgIFxuICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCAke3NhbXBsZXJOYW1lfTtcblxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzMgdkxpZ2h0aW5nO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXJ5aW5nIGhpZ2hwIHZlYzIgdlRleHR1cmVDb29yZGluYXRlO1xuICAgICAgICBcbiAgICAgICAgdm9pZCBtYWluKCkge1xuICAgICAgICAgIGhpZ2hwIHZlYzQgdGV4ZWxDb2xvdXIgPSB0ZXh0dXJlMkQoJHtzYW1wbGVyTmFtZX0sIHZUZXh0dXJlQ29vcmRpbmF0ZSk7XG4gICAgICAgICAgXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh0ZXhlbENvbG91ci5yZ2IgKiB2TGlnaHRpbmcsIHRleGVsQ29sb3VyLmEpOyAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgKTtcblxuZXhwb3J0IGRlZmF1bHQgZnJhZ21lbnRTaGFkZXJTb3VyY2U7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlckJ1ZmZlcnMgZnJvbSBcIi4uLy4uL3JlbmRlcmVyL2J1ZmZlcnNcIjtcblxuY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzID0gMjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZVJlbmRlcmVyQnVmZmVycyBleHRlbmRzIFJlbmRlcmVyQnVmZmVycyB7XG4gIGNvbnN0cnVjdG9yKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIsIHRleHR1cmVDb29yZGluYXRlc0J1ZmZlcikge1xuICAgIHN1cGVyKHZlcnRleFBvc2l0aW9uc0J1ZmZlciwgdmVydGV4Tm9ybWFsc0J1ZmZlciwgdmVydGV4SW5kZXhlc0VsZW1lbnRCdWZmZXIpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXI7XG4gIH1cblxuICBjcmVhdGVUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVzRGF0YSwgY2FudmFzKSB7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBjYW52YXMuY3JlYXRlQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEpO1xuICB9XG5cbiAgYmluZFRleHR1cmVDb29yZGluYXRlc0J1ZmZlcih0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpIHtcbiAgICBjYW52YXMuYmluZEJ1ZmZlcih0aGlzLnRleHR1cmVDb29yZGluYXRlc0J1ZmZlciwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVDb21wb25lbnRzKTtcbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB0ZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpIHtcbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKHZlcnRleFBvc2l0aW9uc0RhdGEsIHZlcnRleE5vcm1hbHNEYXRhLCB2ZXJ0ZXhJbmRleGVzRGF0YSwgY2FudmFzKTtcblxuICAgIHRoaXMuY3JlYXRlVGV4dHVyZUNvb3JkaW5hdGVzQnVmZmVyKHRleHR1cmVDb29yZGluYXRlc0RhdGEsIGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyh2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKSB7XG4gICAgc3VwZXIuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG5cbiAgICB0aGlzLmJpbmRUZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIodGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiwgY2FudmFzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIgPSBudWxsLCAgLy8vXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFJlbmRlcmVyQnVmZmVycy5mcm9tTm90aGluZyhUZXh0dXJlUmVuZGVyZXJCdWZmZXJzLCB0ZXh0dXJlQ29vcmRpbmF0ZXNCdWZmZXIpO1xuICAgIFxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXJCdWZmZXJzO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBVbmlmb3JtTG9jYXRpb25zIGZyb20gXCIuLi8uLi9sb2NhdGlvbnMvdW5pZm9ybVwiO1xuXG5pbXBvcnQgeyBzYW1wbGVyTmFtZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UvdGV4dHVyZS9mcmFnbWVudFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBleHRlbmRzIFVuaWZvcm1Mb2NhdGlvbnMge1xuICBjb25zdHJ1Y3RvcihvZmZzZXRzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBub3JtYWxzTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwb3NpdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcm90YXRpb25zTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBwcm9qZWN0aW9uTWF0cml4VW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uKSB7XG4gICAgc3VwZXIob2Zmc2V0c01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgbm9ybWFsc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcG9zaXRpb25NYXRyaXhVbmlmb3JtTG9jYXRpb24sIHJvdGF0aW9uc01hdHJpeFVuaWZvcm1Mb2NhdGlvbiwgcHJvamVjdGlvbk1hdHJpeFVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uID0gc2FtcGxlclVuaWZvcm1Mb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zYW1wbGVyVW5pZm9ybUxvY2F0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcykge1xuICAgIGNvbnN0IHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSBjYW52YXMuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIHNhbXBsZXJOYW1lKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFVuaWZvcm1Mb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZVVuaWZvcm1Mb2NhdGlvbnMsIHByb2dyYW0sIGNhbnZhcywgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbik7XG4gICAgXG4gICAgcmV0dXJuIHRleHR1cmVVbmlmb3JtTG9jYXRpb25zO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBdHRyaWJ1dGVMb2NhdGlvbnMgZnJvbSBcIi4uLy4uL2xvY2F0aW9ucy9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uL3NvdXJjZS90ZXh0dXJlL3ZlcnRleFNoYWRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zIGV4dGVuZHMgQXR0cmlidXRlTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IodmVydGV4UG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgdmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24pIHtcbiAgICBzdXBlcih2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbik7XG4gICAgXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbjtcbiAgfVxuICBcbiAgZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSB7XG4gICAgY29uc3QgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IGNhbnZhcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbihwcm9ncmFtLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZU5hbWUpLFxuICAgICAgICAgIHRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMgPSBBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0oVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucywgcHJvZ3JhbSwgY2FudmFzLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucztcbiAgfSAgXG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvdmVydGV4U2hhZGVyXCI7XG5pbXBvcnQgVGV4dHVyZVJlbmRlcmVyRGF0YSBmcm9tIFwiLi4vcmVuZGVyZXIvZGF0YS90ZXh0dXJlXCI7XG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSBcIi4vc291cmNlL3RleHR1cmUvZnJhZ21lbnRTaGFkZXJcIjtcbmltcG9ydCBUZXh0dXJlUmVuZGVyZXJCdWZmZXJzIGZyb20gXCIuLi9yZW5kZXJlci9idWZmZXJzL3RleHR1cmVcIjtcbmltcG9ydCBUZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS91bmlmb3JtXCI7XG5pbXBvcnQgVGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyBmcm9tIFwiLi9sb2NhdGlvbnMvdGV4dHVyZS9hdHRyaWJ1dGVcIjtcblxuaW1wb3J0IHsgY3JlYXRlUHJvZ3JhbSB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG4gIGdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKSB7XG4gICAgY29uc3QgYXR0cmlidXRlTG9jYXRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gYXR0cmlidXRlTG9jYXRpb25zLmdldFRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24oKTtcblxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uO1xuICB9XG5cbiAgY3JlYXRlQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpLFxuICAgICAgICAgIHJlbmRlcmVyQnVmZmVycyA9IHRoaXMuZ2V0UmVuZGVyZXJCdWZmZXJzKCksXG4gICAgICAgICAgdmVydGV4UG9zaXRpb25zRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhQb3NpdGlvbnNEYXRhKCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4Tm9ybWFsc0RhdGEoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzRGF0YSA9IHJlbmRlcmVyRGF0YS5nZXRWZXJ0ZXhJbmRleGVzRGF0YSgpLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlc0RhdGEgPSByZW5kZXJlckRhdGEuZ2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVzRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmNyZWF0ZUJ1ZmZlcnModmVydGV4UG9zaXRpb25zRGF0YSwgdmVydGV4Tm9ybWFsc0RhdGEsIHZlcnRleEluZGV4ZXNEYXRhLCB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZXNEYXRhLCBjYW52YXMpO1xuICB9XG5cbiAgYmluZEJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgcmVuZGVyZXJCdWZmZXJzID0gdGhpcy5nZXRSZW5kZXJlckJ1ZmZlcnMoKSxcbiAgICAgICAgICB2ZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKCksXG4gICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbiA9IHRoaXMuZ2V0VGV4dHVyZUNvb3JkaW5hdGVBdHRyaWJ1dGVMb2NhdGlvbigpO1xuXG4gICAgcmVuZGVyZXJCdWZmZXJzLmJpbmRCdWZmZXJzKHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uLCB2ZXJ0ZXhQb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uLCB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uLCBjYW52YXMpO1xuICB9XG5cbiAgdXNlVGV4dHVyZShpbmRleCwgY2FudmFzKSB7XG4gICAgY29uc3QgdW5pZm9ybUxvY2F0aW9ucyA9IHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb24gPSB1bmlmb3JtTG9jYXRpb25zLmdldFNhbXBsZXJVbmlmb3JtTG9jYXRpb24oKSxcbiAgICAgICAgICBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlID0gaW5kZXg7IC8vL1xuXG4gICAgY2FudmFzLnNldFVuaWZvcm1Mb2NhdGlvbkludGVnZXJWYWx1ZShzYW1wbGVyVW5pZm9ybUxvY2F0aW9uLCBzYW1wbGVyVW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhDbGFzcywgY2FudmFzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBmYWNldHMgPSBbXSxcbiAgICAgICAgICBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbSh2ZXJ0ZXhTaGFkZXJTb3VyY2UsIGZyYWdtZW50U2hhZGVyU291cmNlLCBjYW52YXMpLFxuICAgICAgICAgIHRleHR1cmVSZW5kZXJlckRhdGEgPSBUZXh0dXJlUmVuZGVyZXJEYXRhLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgdGV4dHVyZVJlbmRlcmVyQnVmZmVycyA9IFRleHR1cmVSZW5kZXJlckJ1ZmZlcnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB0ZXh0dXJlVW5pZm9ybUxvY2F0aW9ucyA9IFRleHR1cmVVbmlmb3JtTG9jYXRpb25zLmZyb21Qcm9ncmFtKHByb2dyYW0sIGNhbnZhcyksXG4gICAgICAgICAgdGV4dHVyZUF0dHJpYnV0ZUxvY2F0aW9ucyA9IFRleHR1cmVBdHRyaWJ1dGVMb2NhdGlvbnMuZnJvbVByb2dyYW0ocHJvZ3JhbSwgY2FudmFzKSxcbiAgICAgICAgICByZW5kZXJlckRhdGEgPSB0ZXh0dXJlUmVuZGVyZXJEYXRhLCAgLy8vXG4gICAgICAgICAgcmVuZGVyZXJCdWZmZXJzID0gdGV4dHVyZVJlbmRlcmVyQnVmZmVycywgLy8vXG4gICAgICAgICAgdW5pZm9ybUxvY2F0aW9ucyA9IHRleHR1cmVVbmlmb3JtTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICBhdHRyaWJ1dGVMb2NhdGlvbnMgPSB0ZXh0dXJlQXR0cmlidXRlTG9jYXRpb25zLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBuZXcgQ2xhc3MoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgY2FudmFzLmVuYWJsZUFuaXNvdHJvcGljRmlsdGVyaW5nKCk7ICAvLy9cblxuICAgIHJldHVybiB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaXJzdCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY29uc3QgYWRkID0gcHVzaDsgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlc1RleHR1cmVSZW5kZXJlciBleHRlbmRzIFRleHR1cmVSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKSB7XG5cdFx0c3VwZXIoZmFjZXRzLCBwcm9ncmFtLCByZW5kZXJlckRhdGEsIHJlbmRlcmVyQnVmZmVycywgdW5pZm9ybUxvY2F0aW9ucywgYXR0cmlidXRlTG9jYXRpb25zKTtcblxuXHRcdHRoaXMuaW1hZ2VOYW1lcyA9IGltYWdlTmFtZXM7XG5cblx0XHR0aGlzLmZhY2V0c01hcCA9IGZhY2V0c01hcDtcblxuXHRcdHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG5cdH1cblxuXHRhZGRGYWNldHMoZmFjZXRzKSB7XG5cdCAgY29uc3QgdGV4dHVyZWRGYWNldHMgPSBmYWNldHMsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlZEZhY2V0c0xlbmd0aCA9IHRleHR1cmVkRmFjZXRzLmxlbmd0aDtcblxuXHQgIGlmICh0ZXh0dXJlZEZhY2V0c0xlbmd0aCA+IDApIHtcblx0ICAgIGNvbnN0IGZpcnN0VGV4dHVyZWRGYWNldCA9IGZpcnN0KHRleHR1cmVkRmFjZXRzKSxcbiAgICAgICAgICAgIHRleHR1cmVkRmFjZXQgPSBmaXJzdFRleHR1cmVkRmFjZXQsIC8vL1xuICAgICAgICAgICAgaW1hZ2VOYW1lID0gdGV4dHVyZWRGYWNldC5nZXRJbWFnZU5hbWUoKSxcbiAgICAgICAgICAgIGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cblx0ICAgIGFkZChmYWNldHMsIHRleHR1cmVkRmFjZXRzKVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXhlcyA9IFtdLFxuICAgICAgICAgIHZlcnRleE5vcm1hbHMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhQb3NpdGlvbnMgPSBbXSxcbiAgICAgICAgICB2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IFtdO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIHRoaXMuaW1hZ2VOYW1lcy5mb3JFYWNoKChpbWFnZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGZhY2V0cyA9IHRoaXMuZmFjZXRzTWFwW2ltYWdlTmFtZV07XG5cbiAgICAgIGZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhJbmRleGVzID0gZmFjZXQuZ2V0VmVydGV4SW5kZXhlcyhpbmRleCksXG4gICAgICAgICAgICAgIGZhY2V0VmVydGV4Tm9ybWFscyA9IGZhY2V0LmdldFZlcnRleE5vcm1hbHMoKSxcbiAgICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcygpLFxuICAgICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlZEZhY2V0VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7ICAvLy9cblxuICAgICAgICBhZGQodmVydGV4SW5kZXhlcywgZmFjZXRWZXJ0ZXhJbmRleGVzKTtcbiAgICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICAgIGFkZCh2ZXJ0ZXhQb3NpdGlvbnMsIGZhY2V0VmVydGV4UG9zaXRpb25zKTtcbiAgICAgICAgYWRkKHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzLCB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpO1xuXG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgb2Zmc2V0ID0gaW5kZXggKiAzOyAgLy8vXG5cbiAgICAgIHRoaXMub2Zmc2V0cy5wdXNoKG9mZnNldCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgY2FudmFzKSB7XG4gICAgY29uc3QgcHJvZ3JhbSA9IHRoaXMuZ2V0UHJvZ3JhbSgpO1xuXG4gICAgY2FudmFzLnVzZVByb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICB0aGlzLmJpbmRCdWZmZXJzKGNhbnZhcyk7XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXM7ICAvLy9cblxuICAgIGNhbnZhcy5yZW5kZXIocmVuZGVyZXIsIG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuXG4gICAgbGV0IHN0YXJ0LFxuICAgICAgICBmaW5pc2ggPSAwOyAgLy8vXG5cbiAgICB0aGlzLm9mZnNldHMuZm9yRWFjaCgob2Zmc2V0LCBpbmRleCkgPT4ge1xuICAgICAgc3RhcnQgPSBmaW5pc2g7IC8vL1xuXG4gICAgICBmaW5pc2ggPSBvZmZzZXQ7ICAvLy9cblxuICAgICAgdGhpcy51c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpO1xuXG4gICAgICBjYW52YXMuZHJhd0VsZW1lbnRzKHN0YXJ0LCBmaW5pc2gpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcoaW1hZ2VzLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgY2FudmFzKSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IFtdLFxuICAgICAgICAgIGZhY2V0c01hcCA9IHt9O1xuXG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZmFjZXRzID0gW10sXG4gICAgICAgICAgICByZXBlYXQgPSBpbWFnZVRpbGluZywgLy8vXG4gICAgICAgICAgICBpbWFnZU5hbWUgPSBpbWFnZU5hbWVzW2luZGV4XTtcblxuICAgICAgZmFjZXRzTWFwW2ltYWdlTmFtZV0gPSBmYWNldHM7XG5cbiAgICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGltYWdlc1RleHR1cmVSZW5kZXJlciA9IFRleHR1cmVSZW5kZXJlci5mcm9tTm90aGluZyhJbWFnZXNUZXh0dXJlUmVuZGVyZXIsIGNhbnZhcywgaW1hZ2VOYW1lcywgZmFjZXRzTWFwLCBvZmZzZXRzKTtcblxuICAgIHJldHVybiBpbWFnZXNUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHR1cmVSZW5kZXJlciBmcm9tIFwiLi4vLi4vcmVuZGVyZXIvdGV4dHVyZVwiO1xuXG5pbXBvcnQgeyBwdXNoIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5jb25zdCBhZGQgPSBwdXNoOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIgZXh0ZW5kcyBUZXh0dXJlUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihmYWNldHMsIHByb2dyYW0sIHJlbmRlcmVyRGF0YSwgcmVuZGVyZXJCdWZmZXJzLCB1bmlmb3JtTG9jYXRpb25zLCBhdHRyaWJ1dGVMb2NhdGlvbnMsIGltYWdlTWFwSlNPTikge1xuXHRcdHN1cGVyKGZhY2V0cywgcHJvZ3JhbSwgcmVuZGVyZXJEYXRhLCByZW5kZXJlckJ1ZmZlcnMsIHVuaWZvcm1Mb2NhdGlvbnMsIGF0dHJpYnV0ZUxvY2F0aW9ucyk7XG5cblx0XHR0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcblx0fVxuXG4gIGNyZWF0ZUJ1ZmZlcnMoY2FudmFzKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKSxcbiAgICAgICAgICB2ZXJ0ZXhJbmRleGVzID0gW10sXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtdLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9ucyA9IFtdLFxuICAgICAgICAgIHZlcnRleFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gW107XG5cbiAgICBmYWNldHMuZm9yRWFjaCgoZmFjZXQsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCB0ZXh0dXJlZEZhY2V0ID0gZmFjZXQsICAvLy9cbiAgICAgICAgICAgIGZhY2V0VmVydGV4SW5kZXhlcyA9IGZhY2V0LmdldFZlcnRleEluZGV4ZXMoaW5kZXgpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhOb3JtYWxzID0gZmFjZXQuZ2V0VmVydGV4Tm9ybWFscygpLFxuICAgICAgICAgICAgZmFjZXRWZXJ0ZXhQb3NpdGlvbnMgPSBmYWNldC5nZXRWZXJ0ZXhQb3NpdGlvbnMoKSxcbiAgICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZWRGYWNldC5nZXRNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0aGlzLmltYWdlTWFwSlNPTiksXG4gICAgICAgICAgICB0ZXh0dXJlZEZhY2V0VmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlczsgLy8vXG5cbiAgICAgIGFkZCh2ZXJ0ZXhJbmRleGVzLCBmYWNldFZlcnRleEluZGV4ZXMpO1xuICAgICAgYWRkKHZlcnRleE5vcm1hbHMsIGZhY2V0VmVydGV4Tm9ybWFscyk7XG4gICAgICBhZGQodmVydGV4UG9zaXRpb25zLCBmYWNldFZlcnRleFBvc2l0aW9ucyk7XG4gICAgICBhZGQodmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIHRleHR1cmVkRmFjZXRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCByZW5kZXJlckRhdGEgPSB0aGlzLmdldFJlbmRlcmVyRGF0YSgpO1xuXG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleEluZGV4ZXModmVydGV4SW5kZXhlcyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleE5vcm1hbHModmVydGV4Tm9ybWFscyk7XG4gICAgcmVuZGVyZXJEYXRhLmFkZFZlcnRleFBvc2l0aW9ucyh2ZXJ0ZXhQb3NpdGlvbnMpO1xuICAgIHJlbmRlcmVyRGF0YS5hZGRWZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyk7XG5cbiAgICBzdXBlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gIH1cblxuICBiaW5kQnVmZmVycyhjYW52YXMpIHtcbiAgICBjb25zdCByZW5kZXJlckJ1ZmZlcnMgPSB0aGlzLmdldFJlbmRlcmVyQnVmZmVycygpLFxuICAgICAgICAgIHZlcnRleE5vcm1hbEF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRWZXJ0ZXhOb3JtYWxBdHRyaWJ1dGVMb2NhdGlvbigpLFxuICAgICAgICAgIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSB0aGlzLmdldFZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24oKSxcbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uID0gdGhpcy5nZXRUZXh0dXJlQ29vcmRpbmF0ZUF0dHJpYnV0ZUxvY2F0aW9uKCk7XG5cbiAgICByZW5kZXJlckJ1ZmZlcnMuYmluZEJ1ZmZlcnModmVydGV4Tm9ybWFsQXR0cmlidXRlTG9jYXRpb24sIHZlcnRleFBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24sIHRleHR1cmVDb29yZGluYXRlQXR0cmlidXRlTG9jYXRpb24sIGNhbnZhcyk7XG4gIH1cblxuICB1c2VUZXh0dXJlKGluZGV4LCBjYW52YXMpIHtcbiAgICBjb25zdCB1bmlmb3JtTG9jYXRpb25zID0gdGhpcy5nZXRVbmlmb3JtTG9jYXRpb25zKCksXG4gICAgICAgICAgc2FtcGxlclVuaWZvcm1Mb2NhdGlvbiA9IHVuaWZvcm1Mb2NhdGlvbnMuZ2V0U2FtcGxlclVuaWZvcm1Mb2NhdGlvbigpLFxuICAgICAgICAgIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUgPSBpbmRleDsgLy8vXG5cbiAgICBjYW52YXMuc2V0VW5pZm9ybUxvY2F0aW9uSW50ZWdlclZhbHVlKHNhbXBsZXJVbmlmb3JtTG9jYXRpb24sIHNhbXBsZXJVbmlmb3JtTG9jYXRpb25JbnRlZ2VyVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcykge1xuICAgIGNvbnN0IHByb2dyYW0gPSB0aGlzLmdldFByb2dyYW0oKTtcblxuICAgIGNhbnZhcy51c2VQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgdGhpcy5iaW5kQnVmZmVycyhjYW52YXMpO1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzOyAgLy8vXG5cbiAgICBjYW52YXMucmVuZGVyKHJlbmRlcmVyLCBvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KTtcblxuICAgIGNvbnN0IHJlbmRlcmVyRGF0YSA9IHRoaXMuZ2V0UmVuZGVyZXJEYXRhKCksXG4gICAgICAgICAgY291bnQgPSByZW5kZXJlckRhdGEuZ2V0Q291bnQoKSxcbiAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICAgIGZpbmlzaCA9IGNvdW50OyAvLy9cblxuICAgIHRoaXMudXNlVGV4dHVyZShpbmRleCwgY2FudmFzKTtcblxuICAgIGNhbnZhcy5kcmF3RWxlbWVudHMoc3RhcnQsIGZpbmlzaCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKGltYWdlTWFwLCBpbWFnZU1hcEpTT04sIGNhbnZhcykge1xuICAgIGNvbnN0IGltYWdlID0gaW1hZ2VNYXAsIC8vL1xuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcblxuICAgIGNhbnZhcy5jcmVhdGVUZXh0dXJlKGltYWdlLCBpbmRleCwgcmVwZWF0KTtcblxuICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gVGV4dHVyZVJlbmRlcmVyLmZyb21Ob3RoaW5nKEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyLCBjYW52YXMsIGltYWdlTWFwSlNPTik7XG5cbiAgICByZXR1cm4gaW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXI7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hc2sgZnJvbSBcIi4vbWFza1wiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBDb2xvdXJSZW5kZXJlciBmcm9tIFwiLi4vcmVuZGVyZXIvY29sb3VyXCI7XG5pbXBvcnQgSW1hZ2VzVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlc1wiO1xuaW1wb3J0IEltYWdlTWFwVGV4dHVyZVJlbmRlcmVyIGZyb20gXCIuLi9yZW5kZXJlci90ZXh0dXJlL2ltYWdlTWFwXCI7XG5cbmltcG9ydCB7IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFydCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuaW1hZ2VzID0gaW1hZ2VzO1xuICAgIHRoaXMuaW1hZ2VNYXAgPSBpbWFnZU1hcDtcbiAgICB0aGlzLmltYWdlTmFtZXMgPSBpbWFnZU5hbWVzO1xuICAgIHRoaXMuaW1hZ2VUaWxpbmcgPSBpbWFnZVRpbGluZztcbiAgICB0aGlzLmltYWdlTWFwSlNPTiA9IGltYWdlTWFwSlNPTjtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG4gICAgdGhpcy50ZXh0dXJlUmVuZGVyZXIgPSB0ZXh0dXJlUmVuZGVyZXI7XG4gIH1cbiAgXG4gIGluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgY29sb3VyUmVuZGVyZXIgPSBDb2xvdXJSZW5kZXJlci5mcm9tTm90aGluZyhjYW52YXMpLFxuICAgICAgICAgIGNoaWxkRWxlbWVudHMgPSB0aGlzLmdldENoaWxkRWxlbWVudHMoKSxcbiAgICAgICAgICBtYXNrcyA9IGVsZW1lbnRzRnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgTWFzayk7XG5cbiAgICBsZXQgdGV4dHVyZVJlbmRlcmVyID0gbnVsbDtcblxuICAgIGlmICh0aGlzLmltYWdlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgaW1hZ2VzVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VzVGV4dHVyZVJlbmRlcmVyLmZyb21JbWFnZXNJbWFnZU5hbWVzQW5kSW1hZ2VUaWxpbmcodGhpcy5pbWFnZXMsIHRoaXMuaW1hZ2VOYW1lcywgdGhpcy5pbWFnZVRpbGluZywgY2FudmFzKTtcblxuICAgICAgdGV4dHVyZVJlbmRlcmVyID0gaW1hZ2VzVGV4dHVyZVJlbmRlcmVyOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaW1hZ2VNYXAgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGltYWdlTWFwVGV4dHVyZVJlbmRlcmVyID0gSW1hZ2VNYXBUZXh0dXJlUmVuZGVyZXIuZnJvbUltYWdlTWFwQW5kSW1hZ2VNYXBKU09OKHRoaXMuaW1hZ2VNYXAsIHRoaXMuaW1hZ2VNYXBKU09OLCBjYW52YXMpO1xuXG4gICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBpbWFnZU1hcFRleHR1cmVSZW5kZXJlcjsgIC8vL1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQuY3JlYXRlRmFjZXRzKG1hcmdpbk9mRXJyb3IpKTtcblxuICAgIGNoaWxkRWxlbWVudHMuZm9yRWFjaCgoY2hpbGRFbGVtZW50KSA9PiBjaGlsZEVsZW1lbnQubWFza0ZhY2V0cyhtYXNrcywgbWFyZ2luT2ZFcnJvcikpO1xuXG4gICAgY2hpbGRFbGVtZW50cy5mb3JFYWNoKChjaGlsZEVsZW1lbnQpID0+IGNoaWxkRWxlbWVudC5hZGRGYWNldHMoY29sb3VyUmVuZGVyZXIsIHRleHR1cmVSZW5kZXJlcikpO1xuXG4gICAgaWYgKGNvbG91clJlbmRlcmVyICE9PSBudWxsKSB7XG4gICAgICBjb2xvdXJSZW5kZXJlci5jcmVhdGVCdWZmZXJzKGNhbnZhcyk7XG4gICAgfVxuXG4gICAgaWYgKHRleHR1cmVSZW5kZXJlciAhPT0gbnVsbCkge1xuICAgICAgdGV4dHVyZVJlbmRlcmVyLmNyZWF0ZUJ1ZmZlcnMoY2FudmFzKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbG91clJlbmRlcmVyID0gY29sb3VyUmVuZGVyZXI7XG5cbiAgICB0aGlzLnRleHR1cmVSZW5kZXJlciA9IHRleHR1cmVSZW5kZXJlcjtcbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpIHtcbiAgICB0aGlzLmNvbG91clJlbmRlcmVyICYmIHRoaXMuY29sb3VyUmVuZGVyZXIucmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgsIGNhbnZhcyk7ICAvLy9cblxuICAgIHRoaXMudGV4dHVyZVJlbmRlcmVyICYmIHRoaXMudGV4dHVyZVJlbmRlcmVyLnJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4LCBjYW52YXMpOyAgLy8vXG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VzID0gbnVsbCwgaW1hZ2VNYXAgPSBudWxsLCBpbWFnZU5hbWVzID0gbnVsbCwgaW1hZ2VUaWxpbmcgPSBmYWxzZSwgaW1hZ2VNYXBKU09OID0gbnVsbCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjb2xvdXJSZW5kZXJlciA9IG51bGwsICAvLy9cbiAgICAgICAgICB0ZXh0dXJlUmVuZGVyZXIgPSBudWxsLCAvLy9cbiAgICAgICAgICBwYXJ0ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJ0LCBwcm9wZXJ0aWVzLCBpbWFnZXMsIGltYWdlTWFwLCBpbWFnZU5hbWVzLCBpbWFnZVRpbGluZywgaW1hZ2VNYXBKU09OLCBjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKTtcblxuICAgIHJldHVybiBwYXJ0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9aX0ZBUiwgREVGQVVMVF9aX05FQVIsIERFRkFVTFRfRklFTERfT0ZfVklFVyB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuekZhciA9IHpGYXI7XG4gICAgdGhpcy56TmVhciA9IHpOZWFyO1xuICAgIHRoaXMuZmllbGRPZlZpZXcgPSBmaWVsZE9mVmlldztcbiAgfVxuXG4gIGdldFpGYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuekZhcjtcbiAgfVxuXG4gIGdldFpOZWFyKCkge1xuICAgIHJldHVybiB0aGlzLnpOZWFyO1xuICB9XG5cbiAgZ2V0RmllbGRPZlZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmllbGRPZlZpZXc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCB7IGZpZWxkT2ZWaWV3ID0gREVGQVVMVF9GSUVMRF9PRl9WSUVXIH0gPSBwcm9wZXJ0aWVzO1xuXG4gICAgZmllbGRPZlZpZXcgKj0gREVHUkVFU19UT19SQURJQU5TX01VTFRJUExJRVI7IC8vL1xuXG4gICAgY29uc3QgeyB6RmFyID0gREVGQVVMVF9aX0ZBUiwgek5lYXIgPSBERUZBVUxUX1pfTkVBUiB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBjYW1lcmEgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCB6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gY2FtZXJhO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBXSEVFTF9FVkVOVF9UWVBFID0gXCJ3aGVlbFwiO1xuZXhwb3J0IGNvbnN0IEtFWVVQX0VWRU5UX1RZUEUgPSBcImtleXVwXCI7XG5leHBvcnQgY29uc3QgS0VZRE9XTl9FVkVOVF9UWVBFID0gXCJrZXlkb3duXCI7XG5leHBvcnQgY29uc3QgTU9VU0VVUF9FVkVOVF9UWVBFID0gXCJtb3VzZXVwXCI7XG5leHBvcnQgY29uc3QgTU9VU0VET1dOX0VWRU5UX1RZUEUgPSBcIm1vdXNlZG93blwiO1xuZXhwb3J0IGNvbnN0IE1PVVNFTU9WRV9FVkVOVF9UWVBFID0gXCJtb3VzZW1vdmVcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsga2V5Q29kZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEtFWVVQX0VWRU5UX1RZUEUsIEtFWURPV05fRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmNvbnN0IHsgRVNDQVBFX0tFWV9DT0RFLCBTSElGVF9LRVlfQ09ERSB9ID0ga2V5Q29kZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleUV2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKGhhbmRsZXJzLCBzaGlmdEtleURvd24pIHtcbiAgICB0aGlzLmhhbmRsZXJzID0gaGFuZGxlcnM7XG4gICAgdGhpcy5zaGlmdEtleURvd24gPSBzaGlmdEtleURvd247XG4gIH1cblxuICBpc1NoaWZ0S2V5RG93bigpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlmdEtleURvd247XG4gIH1cblxuICBrZXlVcEV2ZW50TGlzdGVuZXIoZXZlbnQpIHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGV2ZW50O1xuXG4gICAgaWYgKGtleUNvZGUgPT09IFNISUZUX0tFWV9DT0RFKSB7XG4gICAgICB0aGlzLnNoaWZ0S2V5RG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIodGhpcy5zaGlmdEtleURvd24pKTtcbiAgICB9XG4gIH1cblxuICBrZXlEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IHsga2V5Q29kZSB9ID0gZXZlbnQ7XG5cbiAgICBpZiAoa2V5Q29kZSA9PT0gU0hJRlRfS0VZX0NPREUpIHtcbiAgICAgIHRoaXMuc2hpZnRLZXlEb3duID0gdHJ1ZTtcblxuICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKHRoaXMuc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgYWRkU2hpZnRLZXlIYW5kbGVyKHNoaWZ0S2V5SGFuZGxlcikge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBzaGlmdEtleUhhbmRsZXI7ICAvLy9cblxuICAgIHRoaXMuaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgfVxuXG4gIGFkZEVzY2FwZUtleURvd25IYW5kbGVyKGVzY2FwZUtleURvd25IYW5kbGVyKSB7XG4gICAgY29uc3QgZG9jdW1lbnRET01FbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyAgLy8vXG5cbiAgICBkb2N1bWVudERPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihLRVlET1dOX0VWRU5UX1RZUEUsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBrZXlDb2RlIH0gPSBldmVudDtcblxuICAgICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRV9LRVlfQ09ERSkge1xuICAgICAgICBlc2NhcGVLZXlEb3duSGFuZGxlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBkb2N1bWVudERPTUVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsICAvLy9cbiAgICAgICAgICBrZXlVcEV2ZW50TGlzdGVuZXIgPSB0aGlzLmtleVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGtleURvd25FdmVudExpc3RlbmVyID0gdGhpcy5rZXlEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgZG9jdW1lbnRET01FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoS0VZVVBfRVZFTlRfVFlQRSwga2V5VXBFdmVudExpc3RlbmVyKTtcblxuICAgIGRvY3VtZW50RE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKEtFWURPV05fRVZFTlRfVFlQRSwga2V5RG93bkV2ZW50TGlzdGVuZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAgc2hpZnRLZXlEb3duID0gZmFsc2UsICAvLy9cbiAgICAgICAgICBrZXlFdmVudHMgPSBuZXcgS2V5RXZlbnRzKGhhbmRsZXJzLCBzaGlmdEtleURvd24pO1xuXG4gICAgcmV0dXJuIGtleUV2ZW50cztcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBXSEVFTF9FVkVOVF9UWVBFLCBNT1VTRVVQX0VWRU5UX1RZUEUsIE1PVVNFRE9XTl9FVkVOVF9UWVBFLCBNT1VTRU1PVkVfRVZFTlRfVFlQRSB9IGZyb20gXCIuLi9ldmVudFR5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdXNlRXZlbnRzIHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnNNYXAsIG1vdXNlRG93bikge1xuICAgIHRoaXMuaGFuZGxlcnNNYXAgPSBoYW5kbGVyc01hcDtcbiAgICB0aGlzLm1vdXNlRG93biA9IG1vdXNlRG93bjtcbiAgfVxuXG4gIHdoZWVsRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YUZyb21FdmVudChldmVudCk7XG5cbiAgICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vdXNlV2hlZWxEZWx0YSkpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlRXZlbnRMaXN0ZW5lcihldmVudCwgZXZlbnRUeXBlKSB7XG4gICAgY29uc3QgaGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwW2V2ZW50VHlwZV0sXG4gICAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IG1vdXNlQ29vcmRpbmF0ZXNGcm9tRXZlbnQoZXZlbnQpO1xuXG4gICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihtb3VzZUNvb3JkaW5hdGVzLCB0aGlzLm1vdXNlRG93bikpO1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIG1vdXNlVXBFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZURvd24gPSBmYWxzZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRVVQX0VWRU5UX1RZUEUpO1xuICB9XG5cblx0bW91c2VEb3duRXZlbnRMaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMubW91c2VEb3duID0gdHJ1ZTtcblxuICAgIHRoaXMubW91c2VFdmVudExpc3RlbmVyKGV2ZW50LCBNT1VTRURPV05fRVZFTlRfVFlQRSk7XG4gIH1cblxuXHRtb3VzZU1vdmVFdmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5tb3VzZUV2ZW50TGlzdGVuZXIoZXZlbnQsIE1PVVNFTU9WRV9FVkVOVF9UWVBFKTtcbiAgfVxuXG4gIGFkZE1vdXNlVXBIYW5kbGVyKG1vdXNlVXBIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VVcEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZVVwSGFuZGxlcnMucHVzaChtb3VzZVVwSGFuZGxlcik7XG4gIH1cblxuICBhZGRNb3VzZURvd25IYW5kbGVyKG1vdXNlRG93bkhhbmRsZXIpIHtcbiAgICBjb25zdCBtb3VzZURvd25IYW5kbGVycyA9IHRoaXMuaGFuZGxlcnNNYXBbIE1PVVNFRE9XTl9FVkVOVF9UWVBFIF07XG5cbiAgICBtb3VzZURvd25IYW5kbGVycy5wdXNoKG1vdXNlRG93bkhhbmRsZXIpO1xuICB9XG5cbiAgYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VNb3ZlSGFuZGxlcnMgPSB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRU1PVkVfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VNb3ZlSGFuZGxlcnMucHVzaChtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZE1vdXNlV2hlZWxIYW5kbGVyKG1vdXNlV2hlZWxIYW5kbGVyKSB7XG4gICAgY29uc3QgbW91c2VXaGVlbEhhbmRsZXJzID0gdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdO1xuXG4gICAgbW91c2VXaGVlbEhhbmRsZXJzLnB1c2gobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICAgIGNvbnN0IGNhbnZhc0RPTUVsZW1lbnQgPSBjYW52YXMuZ2V0RE9NRWxlbWVudCgpLFxuICAgICAgICAgICAgd2hlZWxFdmVudExpc3RlbmVyID0gdGhpcy53aGVlbEV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgIG1vdXNlVXBFdmVudExpc3RlbmVyID0gdGhpcy5tb3VzZVVwRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VEb3duRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VEb3duRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgbW91c2VNb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMubW91c2VNb3ZlRXZlbnRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5oYW5kbGVyc01hcFsgV0hFRUxfRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VVUF9FVkVOVF9UWVBFIF0gPSBbXTtcbiAgICB0aGlzLmhhbmRsZXJzTWFwWyBNT1VTRURPV05fRVZFTlRfVFlQRSBdID0gW107XG4gICAgdGhpcy5oYW5kbGVyc01hcFsgTU9VU0VNT1ZFX0VWRU5UX1RZUEUgXSA9IFtdO1xuXG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFdIRUVMX0VWRU5UX1RZUEUsIHdoZWVsRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFVVBfRVZFTlRfVFlQRSwgbW91c2VVcEV2ZW50TGlzdGVuZXIpO1xuICAgIGNhbnZhc0RPTUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihNT1VTRURPV05fRVZFTlRfVFlQRSwgbW91c2VEb3duRXZlbnRMaXN0ZW5lcik7XG4gICAgY2FudmFzRE9NRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFTU9WRV9FVkVOVF9UWVBFLCBtb3VzZU1vdmVFdmVudExpc3RlbmVyKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBoYW5kbGVyc01hcCA9IHt9LFxuICAgICAgICAgIG1vdXNlRG93biA9IGZhbHNlLCAgLy8vXG5cdFx0XHRcdFx0bW91c2VFdmVudHMgPSBuZXcgTW91c2VFdmVudHMoaGFuZGxlcnNNYXAsIG1vdXNlRG93bik7XG5cbiAgICByZXR1cm4gbW91c2VFdmVudHM7XG4gIH1cbn1cblxubGV0IGNvdW50ID0gMDtcblxuZnVuY3Rpb24gbW91c2VXaGVlbERlbHRhRnJvbUV2ZW50KGV2ZW50KSB7XG4gIGNvbnN0IHsgd2hlZWxEZWx0YSB9ID0gZXZlbnQsXG4gICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCB3aGVlbERlbHRhKSk7IC8vL1xuXG4gIGNvbnNvbGUubG9nKGNvdW50KyspXG5cbiAgcmV0dXJuIG1vdXNlV2hlZWxEZWx0YTtcbn1cblxuZnVuY3Rpb24gbW91c2VDb29yZGluYXRlc0Zyb21FdmVudChldmVudCkge1xuICBjb25zdCB7IHRhcmdldCwgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZlbnQsXG4gICAgICAgIGNhbnZhc0RPTUVsZW1lbnQgPSB0YXJnZXQsICAvLy9cbiAgICAgICAgYm91bmRpbmdDbGllbnRSZWN0ID0gY2FudmFzRE9NRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgeyB0b3AsIGxlZnQgfSA9IGJvdW5kaW5nQ2xpZW50UmVjdCxcbiAgICAgICAgbW91c2VDb29yZGluYXRlcyA9IFtcbiAgICAgICAgICBjbGllbnRYIC0gbGVmdCxcbiAgICAgICAgICB0b3AgLSBjbGllbnRZXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIG1vdXNlQ29vcmRpbmF0ZXM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBLZXlFdmVudHMgZnJvbSBcIi4va2V5RXZlbnRzXCI7XG5pbXBvcnQgTW91c2VFdmVudHMgZnJvbSBcIi4vbW91c2VFdmVudHNcIjtcblxuaW1wb3J0IHsgemVybzIsIHN1YnRyYWN0MiB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlcklucHV0IHtcbiAgY29uc3RydWN0b3IoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcykge1xuICAgIHRoaXMuaGFuZGxlcnMgPSBoYW5kbGVycztcbiAgICB0aGlzLmtleUV2ZW50cyA9IGtleUV2ZW50cztcbiAgICB0aGlzLm1vdXNlRXZlbnRzID0gbW91c2VFdmVudHM7XG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHByZXZpb3VzTW91c2VDb29yZGluYXRlcztcbiAgfVxuXG4gIG1vdXNlTW92ZUhhbmRsZXIobW91c2VDb29yZGluYXRlcywgbW91c2VEb3duLCBjYW52YXMpIHtcbiAgICB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9IHRoaXMubW91c2VDb29yZGluYXRlczsgIC8vL1xuXG4gICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gbW91c2VDb29yZGluYXRlcztcblxuICAgIGlmICh0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb3VzZURvd24pIHtcbiAgICAgIGNvbnN0IG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICAgIHNoaWZ0S2V5RG93biA9IHRoaXMua2V5RXZlbnRzLmlzU2hpZnRLZXlEb3duKCksXG4gICAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzdWJ0cmFjdDIodGhpcy5tb3VzZUNvb3JkaW5hdGVzLCB0aGlzLnByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4gaGFuZGxlcihyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duKSk7XG4gICAgfVxuICB9XG5cbiAgbW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbERlbHRhLCBjYW52YXMpIHtcbiAgICBjb25zdCBzaGlmdEtleURvd24gPSB0aGlzLmtleUV2ZW50cy5pc1NoaWZ0S2V5RG93bigpLFxuICAgICAgICAgIHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCk7XG5cbiAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IGhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bikpO1xuICB9XG5cbiAgYWRkVXNlcklucHV0SGFuZGxlcih1c2VySW5wdXRIYW5kbGVyKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IHVzZXJJbnB1dEhhbmRsZXI7IC8vL1xuXG4gICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICB9XG5cbiAgYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpIHsgdGhpcy5rZXlFdmVudHMuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpOyB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMpIHtcbiAgICBjb25zdCBtb3VzZU1vdmVIYW5kbGVyID0gdGhpcy5tb3VzZU1vdmVIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgbW91c2VXaGVlbEhhbmRsZXIgPSB0aGlzLm1vdXNlV2hlZWxIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLmtleUV2ZW50cy5pbml0aWFsaXNlKCk7XG5cbiAgICB0aGlzLm1vdXNlRXZlbnRzLmluaXRpYWxpc2UoY2FudmFzKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VNb3ZlSGFuZGxlcihtb3VzZU1vdmVIYW5kbGVyKTtcblxuICAgIHRoaXMubW91c2VFdmVudHMuYWRkTW91c2VXaGVlbEhhbmRsZXIobW91c2VXaGVlbEhhbmRsZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGhhbmRsZXJzID0gW10sXG4gICAgICAgICAga2V5RXZlbnRzID0gS2V5RXZlbnRzLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbW91c2VFdmVudHMgPSBNb3VzZUV2ZW50cy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIG1vdXNlQ29vcmRpbmF0ZXMgPSBudWxsLCAgLy8vXG4gICAgICAgICAgcHJldmlvdXNNb3VzZUNvb3JkaW5hdGVzID0gbnVsbCwgIC8vL1xuICAgICAgICAgIHVzZXJJbnB1dCA9IG5ldyBVc2VySW5wdXQoaGFuZGxlcnMsIGtleUV2ZW50cywgbW91c2VFdmVudHMsIG1vdXNlQ29vcmRpbmF0ZXMsIHByZXZpb3VzTW91c2VDb29yZGluYXRlcyk7XG5cbiAgICByZXR1cm4gdXNlcklucHV0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJ0IGZyb20gXCIuLi9lbGVtZW50L3BhcnRcIjtcbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2VsZW1lbnQvY2FtZXJhXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tIFwiLi4vbWlzY2VsbGFuZW91cy91c2VySW5wdXRcIjtcblxuaW1wb3J0IHsgemVybzIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyBERUZBVUxUX01BUkdJTl9PRl9FUlJPUiB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzLCBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHBhcnRzLCBjYW1lcmEsIGNhbnZhcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnBhcnRzID0gcGFydHM7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XG4gIH1cblxuICBlc2NhcGVLZXlEb3duSGFuZGxlcigpIHtcbiAgICB0aGlzLmNhbWVyYS5yZXNldCgpO1xuXG4gICAgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKCk7IC8vL1xuICB9XG5cbiAgd2luZG93UmVzaXplSGFuZGxlcigpIHtcbiAgICBjb25zdCBjbGllbnRXaWR0aCA9IHRoaXMuY2FudmFzLmdldENsaWVudFdpZHRoKCksXG4gICAgICAgICAgY2xpZW50SGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0Q2xpZW50SGVpZ2h0KCksXG4gICAgICAgICAgd2lkdGggPSBjbGllbnRXaWR0aCwgIC8vL1xuICAgICAgICAgIGhlaWdodCA9IGNsaWVudEhlaWdodDtcblxuICAgIHRoaXMuY2FudmFzLnJlc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgIGNvbnN0IHJlbGF0aXZlTW91c2VDb29yZGluYXRlcyA9IHplcm8yKCksIC8vL1xuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YSA9IDAsICAvLy9cbiAgICAgICAgICBzaGlmdEtleURvd24gPSBmYWxzZTsgLy8vXG5cbiAgICB0aGlzLnVzZXJJbnB1dEhhbmRsZXIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIHNoaWZ0S2V5RG93bik7XG4gIH1cblxuICB1c2VySW5wdXRIYW5kbGVyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24pIHtcbiAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5jYW1lcmEudXBkYXRlKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBzaGlmdEtleURvd24sIHRoaXMuY2FudmFzLCByZW5kZXIpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShjYW52YXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB1c2VySW5wdXQgPSBVc2VySW5wdXQuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB1c2VySW5wdXRIYW5kbGVyID0gdGhpcy51c2VySW5wdXRIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgd2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGVzY2FwZUtleURvd25IYW5kbGVyID0gdGhpcy5lc2NhcGVLZXlEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5wYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBwYXJ0LmluaXRpYWxpc2UoY2FudmFzLCBtYXJnaW5PZkVycm9yKSk7XG5cbiAgICB1c2VySW5wdXQuaW5pdGlhbGlzZShjYW52YXMpO1xuXG4gICAgdXNlcklucHV0LmFkZFVzZXJJbnB1dEhhbmRsZXIodXNlcklucHV0SGFuZGxlcik7XG5cbiAgICB1c2VySW5wdXQuYWRkRXNjYXBlS2V5RG93bkhhbmRsZXIoZXNjYXBlS2V5RG93bkhhbmRsZXIpO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gd2luZG93UmVzaXplSGFuZGxlcjtcblxuICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlcigpOyAvLy9cbiAgfVxuXG4gIHJlbmRlcihvZmZzZXRzTWF0cml4LCBub3JtYWxzTWF0cml4LCBwb3NpdGlvbk1hdHJpeCwgcm90YXRpb25zTWF0cml4LCBwcm9qZWN0aW9uTWF0cml4KSB7XG4gICAgdGhpcy5jYW52YXMuY2xlYXIoKTtcblxuICAgIHRoaXMucGFydHMuZm9yRWFjaCgocGFydCkgPT4gcGFydC5yZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCwgdGhpcy5jYW52YXMpKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBjYW52YXMsIGNvbnRleHQsIGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFydHMgPSBlbGVtZW50c0Zyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFBhcnQpLFxuICAgICAgICAgIGNhbWVyYSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBDYW1lcmEpLFxuICAgICAgICAgIHNjZW5lID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhTY2VuZSwgcHJvcGVydGllcywgcGFydHMsIGNhbWVyYSwgY2FudmFzKSxcbiAgICAgICAgICBtYXJnaW5PZkVycm9yID0gREVGQVVMVF9NQVJHSU5fT0ZfRVJST1I7XG5cbiAgICBzY2VuZS5pbml0aWFsaXNlKGNhbnZhcywgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICByZXR1cm4gc2NlbmU7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyB9IGZyb20gXCIuLi91dGlsaXRpZXMvbWF0cml4XCI7XG5pbXBvcnQgeyByZWZsZWN0MywgdHJ1bmNhdGU0LCB0cmFuc2Zvcm00IH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVPZmZzZXRzRnJvbUFuZ2xlc0FuZERpcmVjdGlvbnMoYW5nbGVzLCBkaXJlY3Rpb25zKSB7XG4gIGFuZ2xlcyA9IHJlZmxlY3QzKGFuZ2xlcyk7ICAvLy9cblxuICBjb25zdCByZXZlcnNlT3JkZXIgPSB0cnVlLFxuICAgICAgICByb3RhdGlvbnNNYXRyaXggPSByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzKGFuZ2xlcywgcmV2ZXJzZU9yZGVyKTtcblxuICBsZXQgcmVsYXRpdmVPZmZzZXRzID0gdHJhbnNmb3JtNChkaXJlY3Rpb25zLCByb3RhdGlvbnNNYXRyaXgpO1xuXG4gIHJlbGF0aXZlT2Zmc2V0cyA9IHRydW5jYXRlNChyZWxhdGl2ZU9mZnNldHMpO1xuXG4gIHJldHVybiByZWxhdGl2ZU9mZnNldHM7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZDMsIHNjYWxlMiwgcmVmbGVjdDIgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5pbXBvcnQgeyByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvb2Zmc2V0c1wiO1xuaW1wb3J0IHsgTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiwgUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0cywgbW91c2VXaGVlbERlbHRhTXVsdGlwbGllciwgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzTXVsdGlwbGllcikge1xuICAgIHRoaXMub2Zmc2V0cyA9IG9mZnNldHM7XG4gICAgdGhpcy5tb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gbW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgICB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXIgPSByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyO1xuICB9XG5cbiAgZ2V0T2Zmc2V0cygpIHtcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRzO1xuICB9XG5cbiAgZ2V0RGVsdGFNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKCkge1xuICAgIHJldHVybiB0aGlzLnJlbGF0aXZlTW91c2VDb29yZGluYXRlc011bHRpcGxpZXI7XG4gIH1cblxuICB1cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpIHtcbiAgICBtb3VzZVdoZWVsRGVsdGEgPSBtb3VzZVdoZWVsRGVsdGEgKiB0aGlzLm1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7IC8vL1xuXG4gICAgcmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzID0gc2NhbGUyKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgdGhpcy5yZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTsgLy8vXG5cbiAgICBjb25zdCBzY2FsZWRSZWZsZWN0ZWRSZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSByZWZsZWN0MihzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAxKSksXG4gICAgICAgICAgZGlyZWN0aW9ucyA9IFsgLi4uc2NhbGVkUmVmbGVjdGVkUmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBtb3VzZVdoZWVsRGVsdGEsIDAgXSxcbiAgICAgICAgICByZWxhdGl2ZU9mZnNldHMgPSByZWxhdGl2ZU9mZnNldHNGcm9tQW5nbGVzQW5kRGlyZWN0aW9ucyhhbmdsZXMsIGRpcmVjdGlvbnMsIDEpO1xuXG4gICAgdGhpcy5vZmZzZXRzID0gYWRkMyh0aGlzLm9mZnNldHMsIHJlbGF0aXZlT2Zmc2V0cyk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KSB7XG4gICAgY29uc3Qgb2Zmc2V0cyA9IGluaXRpYWxPZmZzZXRzLCAvLy9cbiAgICAgICAgICBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyID0gTU9VU0VfV0hFRUxfREVMVEFfTVVMVElQTElFUiAqIG1vdXNlV2hlZWxTZW5zaXRpdml0eSxcbiAgICAgICAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyID0gUkVMQVRJVkVfTU9VU0VfQ09PUkRJTkFURVNfTVVMVElQTElFUiAqIG1vdXNlU2Vuc2l0aXZpdHksXG4gICAgICAgICAgcGFuID0gbmV3IFBhbihvZmZzZXRzLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyLCByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXNNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiBwYW47XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQU5HTEVTX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBhZGQzLCBzY2FsZTIsIHRyYW5zZm9ybTMgfSBmcm9tIFwiLi4vbWF0aHMvdmVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbHQge1xuICBjb25zdHJ1Y3RvcihhbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIHRoaXMuYW5nbGVzID0gYW5nbGVzO1xuICAgIHRoaXMuY2xvY2t3aXNlID0gY2xvY2t3aXNlO1xuICB9XG5cbiAgZ2V0QW5nbGVzKCkge1xuICAgIHJldHVybiB0aGlzLmFuZ2xlcztcbiAgfVxuXG4gIGlzQ2xvY2t3aXNlKCkge1xuICAgIHJldHVybiB0aGlzLmNsb2Nrd2lzZTtcbiAgfVxuXG4gIHVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpIHtcbiAgICByZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMgPSBzY2FsZTIocmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCBBTkdMRVNfTVVMVElQTElFUik7IC8vL1xuXG4gICAgY29uc3QgbXVsdGlwbGllciA9IHRoaXMuY2xvY2t3aXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICsxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLTEsXG4gICAgICAgICAgbWF0cml4ID0gW1xuXG4gICAgICAgICAgICAgICAgICAgICAgMCwgK211bHRpcGxpZXIsIDAsXG4gICAgICAgICAgICAtbXVsdGlwbGllciwgICAgICAgICAgIDAsIDAsXG4gICAgICAgICAgICAgICAgICAgICAgMCwgICAgICAgICAgIDAsIDBcblxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVsYXRpdmVBbmdsZXMgPSB0cmFuc2Zvcm0zKFsgLi4ucmVsYXRpdmVNb3VzZUNvb3JkaW5hdGVzLCAwIF0sIG1hdHJpeCk7XG5cbiAgICB0aGlzLmFuZ2xlcyA9IGFkZDModGhpcy5hbmdsZXMsIHJlbGF0aXZlQW5nbGVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5pdGlhbEFuZ2xlcyhpbml0aWFsQW5nbGVzKSB7XG4gICAgY29uc3QgYW5nbGVzID0gWyAuLi5pbml0aWFsQW5nbGVzLCAwIF0sXG4gICAgICAgICAgY2xvY2t3aXNlID0gZmFsc2UsXG4gICAgICAgICAgdGlsdCA9IG5ldyBUaWx0KGFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICAgIHJldHVybiB0aWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Jbml0aWFsQW5nbGVzQW5kQ2xvY2t3aXNlKGluaXRpYWxBbmdsZXMsIGNsb2Nrd2lzZSkge1xuICAgIGNvbnN0IGFuZ2xlcyA9IFsgLi4uaW5pdGlhbEFuZ2xlcywgMCBdLFxuICAgICAgICAgIHRpbHQgPSBuZXcgVGlsdChhbmdsZXMsIGNsb2Nrd2lzZSk7XG5cbiAgICByZXR1cm4gdGlsdDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SlNPTihrZXkpIHtcbiAgbGV0IGpzb24gPSBudWxsO1xuXG4gIGNvbnN0IHZhbHVlID0gZ2V0KGtleSk7XG5cbiAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAganNvbiA9IEpTT04ucGFyc2UodmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGpzb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRKU09OKGtleSwganNvbikge1xuICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGpzb24pO1xuXG4gIHNldChrZXksIHZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUpTT04oa2V5KSB7XG4gIHJlbW92ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBnZXQoa2F5KSB7XG4gIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2F5KSB8fCBudWxsO1xuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0KGtheSwgdmFsdWUpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2F5LCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShrZXkpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4uL2NhbWVyYVwiO1xuXG5pbXBvcnQgeyBzY2FsZTIsIHNjYWxlMyB9IGZyb20gXCIuLi8uLi9tYXRocy92ZWN0b3JcIjtcbmltcG9ydCB7IGdldEpTT04sIHNldEpTT04sIHJlbW92ZUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHsgR0FNSU5HX0NBTUVSQSwgSU5WRVJUX01VTFRJUExJRVIsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgREVGQVVMVF9JTklUSUFMX0FOR0xFUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9QT1NJVElPTixcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tTm90aGluZyxcbiAgICAgICAgIG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4LFxuICAgICAgICAgcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL21hdHJpeFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1pbmdDYW1lcmEgZXh0ZW5kcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcsIHBhbiwgdGlsdCwgcGVyc2lzdCkge1xuICAgIHN1cGVyKHpGYXIsIHpOZWFyLCBmaWVsZE9mVmlldyk7XG5cbiAgICB0aGlzLnBhbiA9IHBhbjtcbiAgICB0aGlzLnRpbHQgPSB0aWx0O1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93biB8fCBtb3VzZVdoZWVsTW92ZWQpIHtcbiAgICAgIGNvbnN0IGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKTtcblxuICAgICAgdGhpcy5wYW4udXBkYXRlT2Zmc2V0cyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgYW5nbGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpO1xuXG4gICAgaWYgKHBlcnNpc3QpIHtcbiAgICAgIGNvbnN0IGtleSA9IEdBTUlOR19DQU1FUkEsICAvLy9cbiAgICAgICAgICAgIGFuZ2xlcyA9IHRoaXMudGlsdC5nZXRBbmdsZXMoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0c1xuICAgICAgICAgICAgfTtcblxuICAgICAgc2V0SlNPTihrZXksIGpzb24pO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldHNNYXRyaXggPSBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMob2Zmc2V0cyksXG4gICAgICAgICAgcG9zaXRpb25NYXRyaXggPSBwb3NpdGlvbk1hdHJpeEZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcm90YXRpb25zTWF0cml4ID0gcm90YXRpb25zTWF0cml4RnJvbUFuZ2xlcyhhbmdsZXMpLFxuICAgICAgICAgIHByb2plY3Rpb25NYXRyaXggPSBwcm9qZWN0aW9uTWF0cml4RnJvbUNhbWVyYUFuZENhbnZhcyhjYW1lcmEsIGNhbnZhcyksXG4gICAgICAgICAgbm9ybWFsc01hdHJpeCA9IG5vcm1hbHNNYXRyaXhGcm9tUm90YXRpb25zTWF0cml4KHJvdGF0aW9uc01hdHJpeCk7XG5cbiAgICByZW5kZXIob2Zmc2V0c01hdHJpeCwgbm9ybWFsc01hdHJpeCwgcG9zaXRpb25NYXRyaXgsIHJvdGF0aW9uc01hdHJpeCwgcHJvamVjdGlvbk1hdHJpeCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgcGVyc2lzdCA9IERFRkFVTFRfUEVSU0lTVCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICBwYW4gPSBwYW5Gcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB0aWx0ID0gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGdhbWluZ0NhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhHYW1pbmdDYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZ2FtaW5nQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0ICB7IGluaXRpYWxQb3NpdGlvbiA9IERFRkFVTFRfSU5JVElBTF9QT1NJVElPTiB9ID0gcHJvcGVydGllcztcblxuICBsZXQgaW5pdGlhbE9mZnNldHMgPSBzY2FsZTMoaW5pdGlhbFBvc2l0aW9uLCBJTlZFUlRfTVVMVElQTElFUik7XG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IG9mZnNldHMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxPZmZzZXRzID0gb2Zmc2V0czsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGFuID0gUGFuLmZyb21Jbml0aWFsT2Zmc2V0c01vdXNlU2Vuc2l0aXZpdHlBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbE9mZnNldHMsIG1vdXNlU2Vuc2l0aXZpdHksIG1vdXNlV2hlZWxTZW5zaXRpdml0eSk7XG5cbiAgcmV0dXJuIHBhbjtcbn1cblxuZnVuY3Rpb24gdGlsdEZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNUIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGxldCAgeyBpbml0aWFsQW5nbGVzID0gREVGQVVMVF9JTklUSUFMX0FOR0xFUyB9ID0gcHJvcGVydGllcztcblxuICBpbml0aWFsQW5nbGVzID0gc2NhbGUyKGluaXRpYWxBbmdsZXMsIERFR1JFRVNfVE9fUkFESUFOU19NVUxUSVBMSUVSKTsgLy8vXG5cbiAgaWYgKHBlcnNpc3QpIHtcbiAgICBjb25zdCBrZXkgPSBHQU1JTkdfQ0FNRVJBLCAgLy8vXG4gICAgICAgICAganNvbiA9IGdldEpTT04oa2V5KTtcblxuICAgIGlmIChqc29uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IGFuZ2xlcyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbEFuZ2xlcyA9IGFuZ2xlczsgLy8vXG4gICAgfVxuICB9XG5cbiAgY29uc3QgY2xvY2t3aXNlID0gdHJ1ZSxcbiAgICAgICAgdGlsdCA9IFRpbHQuZnJvbUluaXRpYWxBbmdsZXNBbmRDbG9ja3dpc2UoaW5pdGlhbEFuZ2xlcywgY2xvY2t3aXNlKTtcblxuICByZXR1cm4gdGlsdDtcbn0iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IE1JTklNVU1fRElTVEFOQ0UsIE1PVVNFX1dIRUVMX0RFTFRBX01VTFRJUExJRVIgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb20ge1xuICBjb25zdHJ1Y3RvcihkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKSB7XG4gICAgdGhpcy5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIHRoaXMubWluaW11bURpc3RhbmNlID0gbWluaW11bURpc3RhbmNlO1xuICAgIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllciA9IG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXI7XG4gIH1cblxuICBnZXREaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXN0YW5jZTtcbiAgfVxuXG4gIGdldE1pbmltdW1EaXN0YW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5taW5pbXVtRGlzdGFuY2U7XG4gIH1cblxuICBnZXREZWx0YU11bHRpcGxpZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjtcbiAgfVxuXG4gIHVwZGF0ZURpc3RhbmNlKG1vdXNlV2hlZWxEZWx0YSkge1xuICAgIG1vdXNlV2hlZWxEZWx0YSA9IG1vdXNlV2hlZWxEZWx0YSAqIHRoaXMubW91c2VXaGVlbERlbHRhTXVsdGlwbGllcjsgLy8vXG5cbiAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZSAtIG1vdXNlV2hlZWxEZWx0YTtcblxuICAgIHRoaXMuZGlzdGFuY2UgPSBNYXRoLm1heCh0aGlzLm1pbmltdW1EaXN0YW5jZSwgdGhpcy5kaXN0YW5jZSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUluaXRpYWxEaXN0YW5jZUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsRGlzdGFuY2UsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSkge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gaW5pdGlhbERpc3RhbmNlLCAvLy9cbiAgICAgICAgICBtaW5pbXVtRGlzdGFuY2UgPSBNSU5JTVVNX0RJU1RBTkNFLFxuICAgICAgICAgIG1vdXNlV2hlZWxEZWx0YU11bHRpcGxpZXIgPSBNT1VTRV9XSEVFTF9ERUxUQV9NVUxUSVBMSUVSICogbW91c2VXaGVlbFNlbnNpdGl2aXR5LFxuICAgICAgICAgIHpvb20gPSBuZXcgWm9vbShkaXN0YW5jZSwgbWluaW11bURpc3RhbmNlLCBtb3VzZVdoZWVsRGVsdGFNdWx0aXBsaWVyKTtcblxuICAgIHJldHVybiB6b29tO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYW4gZnJvbSBcIi4uLy4uL21pc2NlbGxhbmVvdXMvcGFuXCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy90aWx0XCI7XG5pbXBvcnQgWm9vbSBmcm9tIFwiLi4vLi4vbWlzY2VsbGFuZW91cy96b29tXCI7XG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuLi9jYW1lcmFcIjtcblxuaW1wb3J0IHsgc2NhbGUyIH0gZnJvbSBcIi4uLy4uL21hdGhzL3ZlY3RvclwiO1xuaW1wb3J0IHsgZ2V0SlNPTiwgc2V0SlNPTiwgcmVtb3ZlSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvbG9jYWxTdG9yYWdlXCI7XG5pbXBvcnQgeyBERVNJR05fQ0FNRVJBLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfUEVSU0lTVCxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9BTkdMRVMsXG4gICAgICAgICBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyxcbiAgICAgICAgIERFRkFVTFRfSU5JVElBTF9ESVNUQU5DRSxcbiAgICAgICAgIERFRkFVTFRfTU9VU0VfU0VOU0lUSVZJVFksXG4gICAgICAgICBERUZBVUxUX01PVVNFX1dIRUVMX1NFTlNJVElWSVRZIH0gZnJvbSBcIi4uLy4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBvZmZzZXRzTWF0cml4RnJvbU9mZnNldHMsXG4gICAgICAgICByb3RhdGlvbnNNYXRyaXhGcm9tQW5nbGVzLFxuICAgICAgICAgcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UsXG4gICAgICAgICBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeCxcbiAgICAgICAgIHByb2plY3Rpb25NYXRyaXhGcm9tQ2FtZXJhQW5kQ2FudmFzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzaWduQ2FtZXJhIGV4dGVuZHMgQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IoekZhciwgek5lYXIsIGZpZWxkT2ZWaWV3LCBwYW4sIHRpbHQsIHpvb20sIHBlcnNpc3QpIHtcbiAgICBzdXBlcih6RmFyLCB6TmVhciwgZmllbGRPZlZpZXcpO1xuXG4gICAgdGhpcy5wYW4gPSBwYW47XG4gICAgdGhpcy50aWx0ID0gdGlsdDtcbiAgICB0aGlzLnpvb20gPSB6b29tO1xuICAgIHRoaXMucGVyc2lzdCA9IHBlcnNpc3Q7XG4gIH1cblxuICBnZXRQYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMucGFuO1xuICB9XG5cbiAgZ2V0VGlsdCgpIHtcbiAgICByZXR1cm4gdGhpcy50aWx0O1xuICB9XG5cbiAgZ2V0Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy56b29tO1xuICB9XG5cbiAgZG9lc1BlcnNpc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucGVyc2lzdDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkE7ICAvLy9cblxuICAgIHJlbW92ZUpTT04oa2V5KTtcblxuICAgIHRoaXMucGFuID0gcGFuRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnRpbHQgPSB0aWx0RnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgICB0aGlzLnpvb20gPSB6b29tRnJvbVByb3BlcnRpZXModGhpcy5wcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHVwZGF0ZShyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMsIG1vdXNlV2hlZWxEZWx0YSwgc2hpZnRLZXlEb3duLCBjYW52YXMsIHJlbmRlcikge1xuICAgIGNvbnN0IG1vdXNlV2hlZWxNb3ZlZCA9IChtb3VzZVdoZWVsRGVsdGEgIT09IDApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHNoaWZ0S2V5RG93bikge1xuICAgICAgY29uc3QgYW5nbGVzID0gdGhpcy50aWx0LmdldEFuZ2xlcygpO1xuXG4gICAgICB0aGlzLnBhbi51cGRhdGVPZmZzZXRzKHJlbGF0aXZlTW91c2VDb29yZGluYXRlcywgbW91c2VXaGVlbERlbHRhLCBhbmdsZXMpO1xuICAgIH0gZWxzZSBpZiAobW91c2VXaGVlbE1vdmVkKSB7XG4gICAgICB0aGlzLnpvb20udXBkYXRlRGlzdGFuY2UobW91c2VXaGVlbERlbHRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWx0LnVwZGF0ZUFuZ2xlcyhyZWxhdGl2ZU1vdXNlQ29vcmRpbmF0ZXMpO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBhbmdsZXMgPSB0aGlzLnRpbHQuZ2V0QW5nbGVzKCksXG4gICAgICAgICAgcGVyc2lzdCA9IHRoaXMuZG9lc1BlcnNpc3QoKSxcbiAgICAgICAgICBvZmZzZXRzID0gdGhpcy5wYW4uZ2V0T2Zmc2V0cygpLFxuICAgICAgICAgIGRpc3RhbmNlID0gdGhpcy56b29tLmdldERpc3RhbmNlKCk7XG5cbiAgICBpZiAocGVyc2lzdCkge1xuICAgICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGFuZ2xlcyxcbiAgICAgICAgICAgICAgb2Zmc2V0cyxcbiAgICAgICAgICAgICAgZGlzdGFuY2VcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHNldEpTT04oa2V5LCBqc29uKTtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXRzTWF0cml4ID0gb2Zmc2V0c01hdHJpeEZyb21PZmZzZXRzKG9mZnNldHMpLFxuICAgICAgICAgIHBvc2l0aW9uTWF0cml4ID0gcG9zaXRpb25NYXRyaXhGcm9tRGlzdGFuY2UoZGlzdGFuY2UpLFxuICAgICAgICAgIHJvdGF0aW9uc01hdHJpeCA9IHJvdGF0aW9uc01hdHJpeEZyb21BbmdsZXMoYW5nbGVzKSxcbiAgICAgICAgICBwcm9qZWN0aW9uTWF0cml4ID0gcHJvamVjdGlvbk1hdHJpeEZyb21DYW1lcmFBbmRDYW52YXMoY2FtZXJhLCBjYW52YXMpLFxuICAgICAgICAgIG5vcm1hbHNNYXRyaXggPSBub3JtYWxzTWF0cml4RnJvbVJvdGF0aW9uc01hdHJpeChyb3RhdGlvbnNNYXRyaXgpO1xuXG4gICAgcmVuZGVyKG9mZnNldHNNYXRyaXgsIG5vcm1hbHNNYXRyaXgsIHBvc2l0aW9uTWF0cml4LCByb3RhdGlvbnNNYXRyaXgsIHByb2plY3Rpb25NYXRyaXgpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgcGFuID0gcGFuRnJvbVByb3BlcnRpZXMocHJvcGVydGllcyksXG4gICAgICAgICAgdGlsdCA9IHRpbHRGcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSxcbiAgICAgICAgICB6b29tID0gem9vbUZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpLFxuICAgICAgICAgIGRlc2lnbkNhbWVyYSA9IENhbWVyYS5mcm9tUHJvcGVydGllcyhEZXNpZ25DYW1lcmEsIHByb3BlcnRpZXMsIHBhbiwgdGlsdCwgem9vbSwgcGVyc2lzdCk7XG5cbiAgICByZXR1cm4gZGVzaWduQ2FtZXJhO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhbkZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgY29uc3QgeyBwZXJzaXN0ID0gREVGQVVMVF9QRVJTSVNULFxuICAgICAgICAgIG1vdXNlU2Vuc2l0aXZpdHkgPSBERUZBVUxUX01PVVNFX1NFTlNJVElWSVRZLFxuICAgICAgICAgIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbE9mZnNldHMgPSBERUZBVUxUX0lOSVRJQUxfT0ZGU0VUUyB9ID0gcHJvcGVydGllcztcblxuICBpZiAocGVyc2lzdCkge1xuICAgIGNvbnN0IGtleSA9IERFU0lHTl9DQU1FUkEsICAvLy9cbiAgICAgICAgICBqc29uID0gZ2V0SlNPTihrZXkpO1xuXG4gICAgaWYgKGpzb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgb2Zmc2V0cyB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbE9mZnNldHMgPSBvZmZzZXRzOyAvLy9cbiAgICB9XG4gIH1cblxuICBjb25zdCBwYW4gPSBQYW4uZnJvbUluaXRpYWxPZmZzZXRzTW91c2VTZW5zaXRpdml0eUFuZE1vdXNlV2hlZWxTZW5zaXRpdml0eShpbml0aWFsT2Zmc2V0cywgbW91c2VTZW5zaXRpdml0eSwgbW91c2VXaGVlbFNlbnNpdGl2aXR5KTtcblxuICByZXR1cm4gcGFuO1xufVxuXG5mdW5jdGlvbiB0aWx0RnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbEFuZ2xlcyA9IERFRkFVTFRfSU5JVElBTF9BTkdMRVMgfSA9IHByb3BlcnRpZXM7XG5cbiAgaW5pdGlhbEFuZ2xlcyA9IHNjYWxlMihpbml0aWFsQW5nbGVzLCBERUdSRUVTX1RPX1JBRElBTlNfTVVMVElQTElFUik7IC8vL1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBhbmdsZXMgfSA9IGpzb247XG5cbiAgICAgIGluaXRpYWxBbmdsZXMgPSBhbmdsZXM7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRpbHQgPSBUaWx0LmZyb21Jbml0aWFsQW5nbGVzKGluaXRpYWxBbmdsZXMpO1xuXG4gIHJldHVybiB0aWx0O1xufVxuXG5mdW5jdGlvbiB6b29tRnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICBjb25zdCB7IHBlcnNpc3QgPSBERUZBVUxUX1BFUlNJU1QsIG1vdXNlV2hlZWxTZW5zaXRpdml0eSA9IERFRkFVTFRfTU9VU0VfV0hFRUxfU0VOU0lUSVZJVFkgfSA9IHByb3BlcnRpZXM7XG5cbiAgbGV0IHsgaW5pdGlhbERpc3RhbmNlID0gREVGQVVMVF9JTklUSUFMX0RJU1RBTkNFIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIGlmIChwZXJzaXN0KSB7XG4gICAgY29uc3Qga2V5ID0gREVTSUdOX0NBTUVSQSwgIC8vL1xuICAgICAgICAgIGpzb24gPSBnZXRKU09OKGtleSk7XG5cbiAgICBpZiAoanNvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBkaXN0YW5jZSB9ID0ganNvbjtcblxuICAgICAgaW5pdGlhbERpc3RhbmNlID0gZGlzdGFuY2U7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHpvb20gPSBab29tLmZyb21Jbml0aWFsRGlzdGFuY2VBbmRNb3VzZVdoZWVsU2Vuc2l0aXZpdHkoaW5pdGlhbERpc3RhbmNlLCBtb3VzZVdoZWVsU2Vuc2l0aXZpdHkpO1xuXG4gIHJldHVybiB6b29tO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IEFOT05ZTU9VUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfSE9TVCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IGZvckVhY2ggfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWRJbWFnZXMoY2FsbGJhY2ssIGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX18pIHsgLy8vXG4gIGNvbnN0IHsgaG9zdCA9IERFRkFVTFRfSE9TVCwgaW1hZ2VOYW1lcywgaW1hZ2VEaXJlY3RvcnlVUkkgfSA9IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIGltYWdlcyA9IFtdLFxuICAgICAgICBjb250ZXh0ID0ge1xuICAgICAgICAgIGltYWdlc1xuICAgICAgICB9O1xuXG4gIGZvckVhY2goaW1hZ2VOYW1lcywgKGltYWdlTmFtZSwgbmV4dCwgZG9uZSwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHNyYyA9IGAke2hvc3R9JHtpbWFnZURpcmVjdG9yeVVSSX0vJHtpbWFnZU5hbWV9YCxcbiAgICAgICAgICBpbWFnZSA9IG5ldyBJbWFnZSgpLFxuICAgICAgICAgIGNyb3NzT3JpZ2luID0gQU5PTllNT1VTO1xuXG4gIE9iamVjdC5hc3NpZ24oaW1hZ2UsIHtcbiAgICAgIHNyYyxcbiAgICAgIG9ubG9hZCxcbiAgICAgIGNyb3NzT3JpZ2luXG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBvbmxvYWQoKSB7XG4gICAgICBpbWFnZXMucHVzaChpbWFnZSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH0sIGRvbmUsIGNvbnRleHQpO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IGNvbnRleHQ7XG5cbiAgICBjYWxsYmFjayhpbWFnZXMsIGltYWdlTmFtZXMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkSW1hZ2VNYXAoY2FsbGJhY2ssIGNvbmZpZ3VyYXRpb24gPSB3aW5kb3cuX19jb25maWd1cmF0aW9uX18pIHsgLy8vXG4gIGNvbnN0IHsgaG9zdCA9IERFRkFVTFRfSE9TVCwgaW1hZ2VNYXBVUkksIGltYWdlTWFwSlNPTiB9ID0gY29uZmlndXJhdGlvbixcbiAgICAgICAgc3JjID0gYCR7aG9zdH0ke2ltYWdlTWFwVVJJfWAsXG4gICAgICAgIGltYWdlTWFwID0gbmV3IEltYWdlKCksXHQvLy9cbiAgICAgICAgY3Jvc3NPcmlnaW4gPSBBTk9OWU1PVVM7ICAvLy9cblxuICBPYmplY3QuYXNzaWduKGltYWdlTWFwLCB7XG4gICAgc3JjLFxuICAgIG9ubG9hZCxcbiAgICBjcm9zc09yaWdpblxuICB9KTtcblxuICBmdW5jdGlvbiBvbmxvYWQoZXZlbnQpIHtcbiAgICBjYWxsYmFjayhpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHByZWxvYWRJbWFnZXMsXG4gIHByZWxvYWRJbWFnZU1hcFxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub3JtYWxpc2UzLCBzdWJ0cmFjdDMsIGNyb3NzMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsIHtcbiAgY29uc3RydWN0b3IoZXh0ZW50KSB7XG4gICAgdGhpcy5leHRlbnQgPSBleHRlbnQ7XG4gIH1cblxuICBnZXRFeHRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZXh0ZW50O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgY29uc3QgZXh0ZW50ID0gY2xvbmVFeHRlbnQodGhpcy5leHRlbnQpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZlcnRpY2VzKHZlcnRpY2VzKSB7XG4gICAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgICB0aGlyZFZlcnRleCA9IHRoaXJkKHZlcnRpY2VzKSxcbiAgICAgICAgICBmaXJzdFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgICBzZWNvbmRQb3NpdGlvbiA9IHNlY29uZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIHRoaXJkUG9zaXRpb24gPSB0aGlyZFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFBvc2l0aW9uLCBmaXJzdFBvc2l0aW9uKSxcbiAgICAgICAgICBzZWNvbmRFeHRlbnQgPSBzdWJ0cmFjdDModGhpcmRQb3NpdGlvbiwgZmlyc3RQb3NpdGlvbiksXG4gICAgICAgICAgZXh0ZW50ID0gbm9ybWFsaXNlMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpLFxuICAgICAgICAgIG5vcm1hbCA9IG5ldyBOb3JtYWwoZXh0ZW50KTtcblxuICAgIHJldHVybiBub3JtYWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVFeHRlbnQoZXh0ZW50KSB7IHJldHVybiBleHRlbnQuc2xpY2UoKTsgfVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyByb3RhdGVQb3NpdGlvbiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcm90YXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVydGV4IHtcbiAgY29uc3RydWN0b3IocG9zaXRpb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gIH1cblxuICBnZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIHJvdGF0ZShyb3RhdGlvblF1YXRlcm5pb24pIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gcm90YXRlUG9zaXRpb24odGhpcy5wb3NpdGlvbiwgcm90YXRpb25RdWF0ZXJuaW9uKTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKHRyYW5zZm9ybSkge1xuICAgIHRoaXMucG9zaXRpb24gPSB0cmFuc2Zvcm0odGhpcy5wb3NpdGlvbik7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucG9zaXRpb24uc2xpY2UoKSwgLy8vXG4gICAgICAgICAgdmVydGV4ID0gbmV3IFZlcnRleChwb3NpdGlvbik7XG5cbiAgICByZXR1cm4gdmVydGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tQ29vcmRpbmF0ZVR1cGxlKGNvb3JkaW5hdGVUdXBsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gY29vcmRpbmF0ZVR1cGxlLnNsaWNlKCksIC8vL1xuICAgICAgICAgIHZlcnRleCA9IG5ldyBWZXJ0ZXgocG9zaXRpb24pO1xuXG4gICAgcmV0dXJuIHZlcnRleDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHN1YnRyYWN0MywgY3Jvc3MzLCBsZW5ndGgzIH0gZnJvbSBcIi4uL21hdGhzL3ZlY3RvclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVFZGdlcyhlZGdlcykge1xuICBlZGdlcyA9IGVkZ2VzLm1hcCgoZWRnZSkgPT4gZWRnZS5jbG9uZSgpKTtcblxuICByZXR1cm4gZWRnZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZU5vcm1hbChub3JtYWwpIHtcbiAgbm9ybWFsID0gbm9ybWFsLmNsb25lKCk7XG4gIFxuICByZXR1cm4gbm9ybWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcykge1xuICB2ZXJ0aWNlcyA9IHZlcnRpY2VzLm1hcCgodmVydGV4KSA9PiB2ZXJ0ZXguY2xvbmUoKSk7XG5cbiAgcmV0dXJuIHZlcnRpY2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRWRnZXModmVydGljZXMsIEVkZ2UpIHtcbiAgY29uc3QgZWRnZXMgPSB2ZXJ0aWNlcy5tYXAoKHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBzdGFydEluZGV4ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIGVuZEluZGV4ID0gKHN0YXJ0SW5kZXggKyAxKSAlIFZFUlRJQ0VTX0xFTkdUSCxcbiAgICAgICAgICBzdGFydFZlcnRleCA9IHZlcnRpY2VzW3N0YXJ0SW5kZXhdLFxuICAgICAgICAgIGVuZFZlcnRleCA9IHZlcnRpY2VzW2VuZEluZGV4XSxcbiAgICAgICAgICBlZGdlID0gRWRnZS5mcm9tU3RhcnRWZXJ0ZXhBbmRFbmRWZXJ0ZXgoc3RhcnRWZXJ0ZXgsIGVuZFZlcnRleCk7XG5cbiAgICByZXR1cm4gZWRnZTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVkZ2VzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpIHtcbiAgY29uc3Qgbm9ybWFsID0gTm9ybWFsLmZyb21WZXJ0aWNlcyh2ZXJ0aWNlcyk7XG5cbiAgcmV0dXJuIG5vcm1hbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEodmVydGljZXMpIHtcbiAgY29uc3QgZmlyc3RWZXJ0ZXggPSBmaXJzdCh2ZXJ0aWNlcyksXG4gICAgICAgIHNlY29uZFZlcnRleCA9IHNlY29uZCh2ZXJ0aWNlcyksXG4gICAgICAgIHRoaXJkVmVydGV4ID0gdGhpcmQodmVydGljZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0RXh0ZW50ID0gc3VidHJhY3QzKHNlY29uZFZlcnRleFBvc2l0aW9uLCBmaXJzdFZlcnRleFBvc2l0aW9uKSxcbiAgICAgICAgc2Vjb25kRXh0ZW50ID0gc3VidHJhY3QzKHRoaXJkVmVydGV4UG9zaXRpb24sIGZpcnN0VmVydGV4UG9zaXRpb24pLFxuICAgICAgICBhcmVhID0gbGVuZ3RoMyhjcm9zczMoZmlyc3RFeHRlbnQsIHNlY29uZEV4dGVudCkpIC8gMjtcblxuICByZXR1cm4gYXJlYTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZWRnZVwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi9ub3JtYWxcIjtcbmltcG9ydCBWZXJ0ZXggZnJvbSBcIi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHB1c2gsIHBlcm11dGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBWRVJUSUNFU19MRU5HVEggfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9mYWNldFwiO1xuaW1wb3J0IHsgY2FsY3VsYXRlTWlkUG9pbnRQb3NpdGlvbiwgaXNNaWRQb2ludFBvc2l0aW9uVG9PbmVTaWRlT2ZNYXNraW5nRWRnZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL21pZFBvaW50XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVOb25OdWxsSW50ZXJzZWN0aW9ucyxcbiAgICAgICAgIGNhbGN1bGF0ZU51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCxcbiAgICAgICAgIGNhbGN1bGF0ZUludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ufSBmcm9tIFwiLi4vdXRpbGl0aWVzL2ludGVyc2VjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGYWNldCB7XG4gIGNvbnN0cnVjdG9yKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMubm9ybWFsID0gbm9ybWFsO1xuICAgIHRoaXMuZWRnZXMgPSBlZGdlcztcbiAgfVxuXG4gIGdldFZlcnRpY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnZlcnRpY2VzO1xuICB9XG5cbiAgZ2V0Tm9ybWFsKCkge1xuICAgIHJldHVybiB0aGlzLm5vcm1hbDtcbiAgfVxuXG4gIGdldEVkZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLmVkZ2VzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhQb3NpdGlvbnMoKSB7XG4gICAgY29uc3QgdmVydGV4UG9zaXRpb25zID0gdGhpcy52ZXJ0aWNlcy5tYXAoKHZlcnRleCkgPT4gdmVydGV4LmdldFBvc2l0aW9uKCkpO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhQb3NpdGlvbnM7XG4gIH1cbiAgXG4gIGdldFZlcnRleE5vcm1hbHMoKSB7XG4gICAgY29uc3Qgbm9ybWFsRXh0ZW50ID0gdGhpcy5ub3JtYWwuZ2V0RXh0ZW50KCksXG4gICAgICAgICAgdmVydGV4Tm9ybWFsID0gbm9ybWFsRXh0ZW50LCAgLy8vXG4gICAgICAgICAgdmVydGV4Tm9ybWFscyA9IFtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbCxcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICB9XG4gIFxuICBnZXRWZXJ0ZXhJbmRleGVzKGluZGV4KSB7XG4gICAgY29uc3QgdmVydGV4SW5kZXggPSBpbmRleCAqIDMsXG4gICAgICAgICAgdmVydGV4SW5kZXhlcyA9IFtcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMCxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMSxcbiAgICAgICAgICAgIHZlcnRleEluZGV4ICsgMixcbiAgICAgICAgICBdO1xuICAgIFxuICAgIHJldHVybiB2ZXJ0ZXhJbmRleGVzO1xuICB9XG5cbiAgaXNNYXNrZWQobWFza2luZ0ZhY2V0KSB7XG4gICAgY29uc3QgbWFza2luZ0VkZ2VzID0gbWFza2luZ0ZhY2V0LmdldE1hc2tpbmdFZGdlcygpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb24gPSBjYWxjdWxhdGVNaWRQb2ludFBvc2l0aW9uKHRoaXMudmVydGljZXMpLFxuICAgICAgICAgIG1pZFBvaW50UG9zaXRpb25Ub09uZVNpZGVPZk1hc2tpbmdFZGdlcyA9IGlzTWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzKG1pZFBvaW50UG9zaXRpb24sIG1hc2tpbmdFZGdlcyksXG4gICAgICAgICAgbWFza2VkID0gbWlkUG9pbnRQb3NpdGlvblRvT25lU2lkZU9mTWFza2luZ0VkZ2VzOyAgLy8vXG4gICAgXG4gICAgcmV0dXJuIG1hc2tlZDtcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHBlcm11dGUodGhpcy52ZXJ0aWNlcywgcGxhY2VzKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICByb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5yb3RhdGUocm90YXRpb25RdWF0ZXJuaW9uKSk7XG5cbiAgICB0aGlzLm5vcm1hbCA9IGNhbGN1bGF0ZU5vcm1hbCh0aGlzLnZlcnRpY2VzLCBOb3JtYWwpO1xuXG4gICAgdGhpcy5lZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHRoaXMudmVydGljZXMsIEVkZ2UpO1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0odHJhbnNmb3JtKSB7XG4gICAgdGhpcy52ZXJ0aWNlcy5mb3JFYWNoKCh2ZXJ0ZXgpID0+IHZlcnRleC5hcHBseVRyYW5zZm9ybSh0cmFuc2Zvcm0pKTtcblxuICAgIHRoaXMubm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHRoaXMudmVydGljZXMsIE5vcm1hbCk7XG5cbiAgICB0aGlzLmVkZ2VzID0gY2FsY3VsYXRlRWRnZXModGhpcy52ZXJ0aWNlcywgRWRnZSk7XG4gIH1cblxuICBzcGxpdFdpdGhJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCBub25OdWxsSW50ZXJzZWN0aW9ucyA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25zKGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIG5vbk51bGxJbnRlcnNlY3Rpb25zTGVuZ3RoID0gbm9uTnVsbEludGVyc2VjdGlvbnMubGVuZ3RoO1xuXG4gICAgc3dpdGNoIChub25OdWxsSW50ZXJzZWN0aW9uc0xlbmd0aCkge1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgdGhpcy5zcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMSA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoT25lTm9uTnVsbEludGVyc2VjdGlvbihpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMCA6XG4gICAgICAgIHRoaXMuc3BsaXRXaXRoTm9Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIFxuICBzcGxpdFdpdGhUd29Ob25OdWxsSW50ZXJzZWN0aW9ucyhpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKSB7XG4gICAgY29uc3QgbnVsbEludGVyc2VjdGlvbkluZGV4ID0gY2FsY3VsYXRlTnVsbEludGVyc2VjdGlvbkluZGV4KGludGVyc2VjdGlvbnMpLFxuICAgICAgICAgIHBsYWNlcyA9IChWRVJUSUNFU19MRU5HVEggLSBudWxsSW50ZXJzZWN0aW9uSW5kZXgpICUgVkVSVElDRVNfTEVOR1RIO1xuXG4gICAgaW50ZXJzZWN0aW9ucyA9IHBlcm11dGUoaW50ZXJzZWN0aW9ucywgcGxhY2VzKTtcblxuICAgIGludGVyc2VjdGlvbnMgPSBpbnRlcnNlY3Rpb25zLnNsaWNlKDEpOyAvLy9cblxuICAgIHRoaXMucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgY29uc3Qgc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDEsIDIgXSxcbiAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMgPSBbIDIsIDAgXSxcbiAgICAgICAgICBpbmRleFR1cGxlcyA9IFtcblxuICAgICAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgICAgICBbIDMsIDQsIDAgXSxcbiAgICAgICAgICAgIFsgMywgMiwgNCBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE9uZU5vbk51bGxJbnRlcnNlY3Rpb24oaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IG5vbk51bGxJbnRlcnNlY3Rpb25JbmRleCA9IGNhbGN1bGF0ZU5vbk51bGxJbnRlcnNlY3Rpb25JbmRleChpbnRlcnNlY3Rpb25zKSxcbiAgICAgICAgICBwbGFjZXMgPSAoVkVSVElDRVNfTEVOR1RIIC0gbm9uTnVsbEludGVyc2VjdGlvbkluZGV4KSAlIFZFUlRJQ0VTX0xFTkdUSDtcblxuICAgIGludGVyc2VjdGlvbnMgPSBwZXJtdXRlKGludGVyc2VjdGlvbnMsIHBsYWNlcyk7XG5cbiAgICBpbnRlcnNlY3Rpb25zID0gaW50ZXJzZWN0aW9ucy5zbGljZSgwLCAxKTsgIC8vL1xuXG4gICAgdGhpcy5wZXJtdXRlKHBsYWNlcyk7XG5cbiAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMCBdLFxuICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcyA9IFsgMSBdLFxuICAgICAgICAgIGluZGV4VHVwbGVzID0gW1xuXG4gICAgICAgICAgICBbIDAsIDMsIDIgXSxcbiAgICAgICAgICAgIFsgMywgMSwgMiBdLFxuXG4gICAgICAgICAgXTtcblxuICAgIHRoaXMuc3BsaXRXaXRoSW5kZXhUdXBsZXNBbmRJbnRlcnNlY3Rpb25zKHN0YXJ0VmVydGV4UG9zaXRpb25JbmRleGVzLCBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGluZGV4VHVwbGVzLCBpbnRlcnNlY3Rpb25zLCBzbWFsbGVyRmFjZXRzLCBtYXJnaW5PZkVycm9yKTtcbiAgfVxuXG4gIHNwbGl0V2l0aE5vTm9uTnVsbEludGVyc2VjdGlvbnMoaW50ZXJzZWN0aW9ucywgc21hbGxlckZhY2V0cywgbWFyZ2luT2ZFcnJvcikge1xuICAgIGNvbnN0IHNtYWxsZXJGYWNldCA9IHRoaXMuZnJvbVZlcnRpY2VzQW5kTWFyZ2luT2ZFcnJvcih0aGlzLnZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTsgIC8vL1xuXG4gICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gIH1cblxuICBzcGxpdFdpdGhJbmRleFR1cGxlc0FuZEludGVyc2VjdGlvbnMoc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4ZXMsIGVuZFZlcnRleFBvc2l0aW9uSW5kZXhlcywgaW5kZXhUdXBsZXMsIGludGVyc2VjdGlvbnMsIHNtYWxsZXJGYWNldHMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBjb25zdCB2ZXJ0ZXhQb3NpdGlvbnMgPSB0aGlzLmdldFZlcnRleFBvc2l0aW9ucygpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyA9IGludGVyc2VjdGlvbnMubWFwKChpbnRlcnNlY3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXggPSBzdGFydFZlcnRleFBvc2l0aW9uSW5kZXhlc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICBlbmRWZXJ0ZXhQb3NpdGlvbkluZGV4ID0gZW5kVmVydGV4UG9zaXRpb25JbmRleGVzW2luZGV4XSxcbiAgICAgICAgICAgICAgICAgIHN0YXJ0VmVydGV4UG9zaXRpb24gPSB2ZXJ0ZXhQb3NpdGlvbnNbc3RhcnRWZXJ0ZXhQb3NpdGlvbkluZGV4XSxcbiAgICAgICAgICAgICAgICAgIGVuZFZlcnRleFBvc2l0aW9uID0gdmVydGV4UG9zaXRpb25zW2VuZFZlcnRleFBvc2l0aW9uSW5kZXhdLFxuICAgICAgICAgICAgICAgICAgaW50ZXJtZWRpYXRlVmVydGV4UG9zaXRpb24gPSBjYWxjdWxhdGVJbnRlcm1lZGlhdGVWZXJ0ZXhQb3NpdGlvbihzdGFydFZlcnRleFBvc2l0aW9uLCBlbmRWZXJ0ZXhQb3NpdGlvbiwgaW50ZXJzZWN0aW9uKTtcblxuICAgICAgICAgICAgcmV0dXJuIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9uO1xuICAgICAgICAgIH0pO1xuXG4gICAgcHVzaCh2ZXJ0ZXhQb3NpdGlvbnMsIGludGVybWVkaWF0ZVZlcnRleFBvc2l0aW9ucyk7XG5cbiAgICBpbmRleFR1cGxlcy5mb3JFYWNoKChpbmRleFR1cGxlKSA9PiB7XG4gICAgICBjb25zdCBwb3NpdGlvbnMgPSB2ZXJ0ZXhQb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICAgIGluZGV4ZXMgPSBpbmRleFR1cGxlLCAgLy8vXG4gICAgICAgICAgICBmYWNldCA9IHRoaXMsIFxuICAgICAgICAgICAgc21hbGxlckZhY2V0ID0gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcik7XG5cbiAgICAgIGlmIChzbWFsbGVyRmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgc21hbGxlckZhY2V0cy5wdXNoKHNtYWxsZXJGYWNldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc21hbGxlckZhY2V0RnJvbVBvc2l0aW9uc0luZGV4ZXNGYWNldEFuZE1hcmdpbk9mRXJyb3IocG9zaXRpb25zLCBpbmRleGVzLCBmYWNldCwgbWFyZ2luT2ZFcnJvcikge1xuICBjb25zdCB2ZXJ0aWNlcyA9IGluZGV4ZXMubWFwKChpbmRleCkgPT4ge1xuICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHBvc2l0aW9uc1tpbmRleF07XG4gICAgXG4gICAgICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zbGljZSgpOyAvLy9cbiAgICBcbiAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSBWZXJ0ZXguZnJvbVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB2ZXJ0ZXg7XG4gICAgICAgIH0pLFxuICAgICAgICBzbWFsbGVyRmFjZXQgPSBmYWNldC5mcm9tVmVydGljZXNBbmRNYXJnaW5PZkVycm9yKHZlcnRpY2VzLCBtYXJnaW5PZkVycm9yKTtcblxuICByZXR1cm4gc21hbGxlckZhY2V0O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi4vZWRnZVwiO1xuaW1wb3J0IEZhY2V0IGZyb20gXCIuLi9mYWNldFwiO1xuaW1wb3J0IE5vcm1hbCBmcm9tIFwiLi4vbm9ybWFsXCI7XG5pbXBvcnQgVmVydGV4IGZyb20gXCIuLi92ZXJ0ZXhcIjtcblxuaW1wb3J0IHsgaXNBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FwcHJveGltYXRlXCI7XG5pbXBvcnQgeyB2ZXJ0aWNlc0Zyb21Db29yZGluYXRlVHVwbGVzQW5kSW5kZXhUdXBsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdmVydGljZXNcIjtcbmltcG9ydCB7IGNsb25lRWRnZXMsIGNsb25lTm9ybWFsLCBjbG9uZVZlcnRpY2VzLCBjYWxjdWxhdGVBcmVhLCBjYWxjdWxhdGVFZGdlcywgY2FsY3VsYXRlTm9ybWFsIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mYWNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgcmdiYSkge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcbiAgICBcbiAgICB0aGlzLnJnYmEgPSByZ2JhO1xuICB9XG5cbiAgZ2V0VmVydGV4Q29sb3VycygpIHtcbiAgICBjb25zdCB2ZXJ0ZXhDb2xvdXIgPSB0aGlzLnJnYmEsIC8vL1xuICAgICAgICAgIHZlcnRleENvbG91cnMgPSBbXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgICB2ZXJ0ZXhDb2xvdXIsXG4gICAgICAgICAgXTtcbiAgICBcbiAgICByZXR1cm4gdmVydGV4Q29sb3VycztcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgbGV0IHZlcnRpY2VzID0gdGhpcy5nZXRWZXJ0aWNlcygpLFxuICAgICAgICBub3JtYWwgPSB0aGlzLmdldE5vcm1hbCgpLFxuICAgICAgICBlZGdlcyA9IHRoaXMuZ2V0RWRnZXMoKTtcblxuICAgIHZlcnRpY2VzID0gY2xvbmVWZXJ0aWNlcyh2ZXJ0aWNlcyk7XG4gICAgbm9ybWFsID0gY2xvbmVOb3JtYWwobm9ybWFsKTtcbiAgICBlZGdlcyA9IGNsb25lRWRnZXMoZWRnZXMpO1xuXG4gICAgY29uc3QgY29sb3VyZWRGYWNldCA9IG5ldyBDb2xvdXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCB0aGlzLnJnYmEpO1xuXG4gICAgcmV0dXJuIGNvbG91cmVkRmFjZXQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvb3JkaW5hdGVUdXBsZXNJbmRleFR1cGxlQ29sb3VyQW5kTWFyZ2luT2ZFcnJvcihjb29yZGluYXRlVHVwbGVzLCBpbmRleFR1cGxlLCBjb2xvdXIsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgY29sb3VyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCB2ZXJ0aWNlcyA9IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlKGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIFZlcnRleCksXG4gICAgICAgICAgYXJlYSA9IGNhbGN1bGF0ZUFyZWEodmVydGljZXMpLFxuICAgICAgICAgIGFyZWFBcHByb3hpbWF0ZWx5RXF1YWxUb1plcm8gPSBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyhhcmVhLCBtYXJnaW5PZkVycm9yKTtcblxuICAgIGlmICghYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybykge1xuICAgICAgY29uc3Qgbm9ybWFsID0gY2FsY3VsYXRlTm9ybWFsKHZlcnRpY2VzLCBOb3JtYWwpLFxuICAgICAgICAgICAgZWRnZXMgPSBjYWxjdWxhdGVFZGdlcyh2ZXJ0aWNlcywgRWRnZSksXG4gICAgICAgICAgICByZ2JhID0gWyAuLi5jb2xvdXIsIDEgXTsgIC8vL1xuXG4gICAgICBjb2xvdXJlZEZhY2V0ID0gbmV3IENvbG91cmVkRmFjZXQodmVydGljZXMsIG5vcm1hbCwgZWRnZXMsIHJnYmEpO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvdXJlZEZhY2V0O1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDYW52YXNFbGVtZW50IGZyb20gXCIuLi8uLi9lbGVtZW50L2NhbnZhc1wiO1xuaW1wb3J0IENvbG91cmVkRmFjZXQgZnJvbSBcIi4uLy4uL3ByaW1pdGl2ZS9mYWNldC9jb2xvdXJlZFwiO1xuXG5pbXBvcnQgeyBhZGQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbG91cmVkQ2FudmFzRWxlbWVudCBleHRlbmRzIENhbnZhc0VsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5jb2xvdXIgPSBjb2xvdXI7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgICAgZmFjZXRzID0gaW5kZXhUdXBsZXMucmVkdWNlKChmYWNldHMsIGluZGV4VHVwbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLmNvb3JkaW5hdGVzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGNvbG91cmVkRmFjZXQgPSBDb2xvdXJlZEZhY2V0LmZyb21Db29yZGluYXRlVHVwbGVzSW5kZXhUdXBsZUNvbG91ckFuZE1hcmdpbk9mRXJyb3IoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5jb2xvdXIsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSBjb2xvdXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICAgIGlmIChmYWNldCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBhZGQoZmFjZXRzLCBmYWNldCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWNldHM7XG4gICAgICAgICAgfSwgW10pO1xuXG4gICAgdGhpcy5zZXRGYWNldHMoZmFjZXRzKTtcbiAgfVxuXG4gIGFkZEZhY2V0cyhjb2xvdXJSZW5kZXJlciwgdGV4dHVyZVJlbmRlcmVyKSB7XG4gICAgY29uc3QgZmFjZXRzID0gdGhpcy5nZXRGYWNldHMoKTtcblxuICAgIGNvbG91clJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHsgcmV0dXJuIENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoQ2xhc3MsIHByb3BlcnRpZXMsIGNvb3JkaW5hdGVzLCBpbmRleGVzLCBjb2xvdXIsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7IH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcm90YXRlVmVydGljZXMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3ZlcnRpY2VzXCI7XG5pbXBvcnQgeyBpbnZlcnQyLCBpbnZlcnQzIH0gZnJvbSBcIi4uL21hdGhzL21hdHJpeFwiO1xuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCwgdGhpcmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVBcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1YXRlcm5pb25cIjtcbmltcG9ydCB7IGFkZDIsIG11bHRpcGx5MiwgdHJhbnNmb3JtMiwgdHJhbnNmb3JtMyB9IGZyb20gXCIuLi9tYXRocy92ZWN0b3JcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpIHtcbiAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcy5tYXAoKHRleHR1cmVDb29yZGluYXRlVHVwbGUpID0+IHRleHR1cmVDb29yZGluYXRlVHVwbGUuc2xpY2UoKSk7ICAvLy9cblxuICByZXR1cm4gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KSB7XG4gIGNvbnN0IHsgbGVmdCwgYm90dG9tLCB3aWR0aCwgaGVpZ2h0IH0gPSBleHRlbnQsXG4gICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMubWFwKCh0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlKSA9PiBhZGQyKG11bHRpcGx5Mih0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlLCBbIHdpZHRoLCBoZWlnaHQgXSApLCBbIGxlZnQsIGJvdHRvbSBdKSk7IC8vL1xuXG4gIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModmVydGljZXMsIG5vcm1hbCwgcGFyZW50VmVydGljZXMsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSB7XG4gIGNvbnN0IGFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbiA9IGNhbGN1bGF0ZUFyYml0cmFyeVJvdGF0aW9uUXVhdGVybmlvbihub3JtYWwpLFxuICAgICAgICByb3RhdGlvblF1YXRlcm5pb24gPSBhcmJpdHJhcnlSb3RhdGlvblF1YXRlcm5pb247IC8vL1xuXG4gIGNvbnN0IHJvdGF0ZWRWZXJ0aWNlcyA9IHJvdGF0ZVZlcnRpY2VzKHZlcnRpY2VzLCByb3RhdGlvblF1YXRlcm5pb24pO1xuXG4gIHBhcmVudFZlcnRpY2VzID0gcm90YXRlVmVydGljZXMocGFyZW50VmVydGljZXMsIHJvdGF0aW9uUXVhdGVybmlvbik7XG5cbiAgdmVydGljZXMgPSByb3RhdGVkVmVydGljZXM7ICAvLy9cblxuICBjb25zdCBmaXJzdFZlcnRleCA9IGZpcnN0KHZlcnRpY2VzKSxcbiAgICAgICAgc2Vjb25kVmVydGV4ID0gc2Vjb25kKHZlcnRpY2VzKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXggPSB0aGlyZCh2ZXJ0aWNlcyksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4ID0gZmlyc3QocGFyZW50VmVydGljZXMpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXggPSBzZWNvbmQocGFyZW50VmVydGljZXMpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleCA9IHRoaXJkKHBhcmVudFZlcnRpY2VzKSxcbiAgICAgICAgZmlyc3RUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gZmlyc3QodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gc2Vjb25kKHRleHR1cmVDb29yZGluYXRlVHVwbGVzKSxcbiAgICAgICAgdGhpcmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gdGhpcmQodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMpLFxuICAgICAgICBmaXJzdFZlcnRleFBvc2l0aW9uID0gZmlyc3RWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgc2Vjb25kVmVydGV4UG9zaXRpb24gPSBzZWNvbmRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgdGhpcmRWZXJ0ZXhQb3NpdGlvbiA9IHRoaXJkVmVydGV4LmdldFBvc2l0aW9uKCksXG4gICAgICAgIGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb24gPSBmaXJzdFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvbiA9IHNlY29uZFBhcmVudFZlcnRleC5nZXRQb3NpdGlvbigpLFxuICAgICAgICB0aGlyZFBhcmVudFZlcnRleFBvc2l0aW9uID0gdGhpcmRQYXJlbnRWZXJ0ZXguZ2V0UG9zaXRpb24oKSxcbiAgICAgICAgUjF4ID0gZmlyc3RWZXJ0ZXhQb3NpdGlvblswXSwgIC8vL1xuICAgICAgICBSMXkgPSBmaXJzdFZlcnRleFBvc2l0aW9uWzFdLCAgLy8vXG4gICAgICAgIFIyeCA9IHNlY29uZFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUjJ5ID0gc2Vjb25kVmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBSM3ggPSB0aGlyZFZlcnRleFBvc2l0aW9uWzBdLCAgLy8vXG4gICAgICAgIFIzeSA9IHRoaXJkVmVydGV4UG9zaXRpb25bMV0sICAvLy9cbiAgICAgICAgUDF4ID0gZmlyc3RQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAyeCA9IHNlY29uZFBhcmVudFZlcnRleFBvc2l0aW9uWzBdLCAvLy9cbiAgICAgICAgUDN4ID0gdGhpcmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblswXSwgLy8vXG4gICAgICAgIFAxeSA9IGZpcnN0UGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMnkgPSBzZWNvbmRQYXJlbnRWZXJ0ZXhQb3NpdGlvblsxXSwgLy8vXG4gICAgICAgIFAzeSA9IHRoaXJkUGFyZW50VmVydGV4UG9zaXRpb25bMV0sIC8vL1xuICAgICAgICBQMXUgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMF0sIC8vL1xuICAgICAgICBQMXYgPSBmaXJzdFRleHR1cmVDb29yZGluYXRlVHVwbGVbMV0sIC8vL1xuICAgICAgICBQMnUgPSBzZWNvbmRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlWzBdLCAvLy9cbiAgICAgICAgUDJ2ID0gc2Vjb25kVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIFAzdSA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVswXSwgLy8vXG4gICAgICAgIFAzdiA9IHRoaXJkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZVsxXSwgLy8vXG4gICAgICAgIHRleHR1cmVDb29yZGluYXRlc01hdHJpeCA9IGludmVydDMoWyAxLCAxLCAxLCBQMXUsIFAydSwgUDN1LCBQMXYsIFAydiwgUDN2IF0pLFxuICAgICAgICBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnQgPSB0cmFuc2Zvcm0zKFsgUDF4LCBQMngsIFAzeCBdLCB0ZXh0dXJlQ29vcmRpbmF0ZXNNYXRyaXgpLFxuICAgICAgICBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50ID0gdHJhbnNmb3JtMyhbIFAxeSwgUDJ5LCBQM3kgXSwgdGV4dHVyZUNvb3JkaW5hdGVzTWF0cml4KSxcbiAgICAgICAgT3ggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMF0sICAvLy9cbiAgICAgICAgVXggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMV0sICAvLy9cbiAgICAgICAgVnggPSBmaXJzdFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgT3kgPSBzZWNvbmRUcmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzQ29tcG9uZW50WzBdLCAgLy8vXG4gICAgICAgIFV5ID0gc2Vjb25kVHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc0NvbXBvbmVudFsxXSwgIC8vL1xuICAgICAgICBWeSA9IHNlY29uZFRyYW5zZm9ybWVkUGFyZW50VmVydGljZXNDb21wb25lbnRbMl0sICAvLy9cbiAgICAgICAgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCA9IGludmVydDIoWyBVeCwgVXksIFZ4LCBWeSBdKSxcbiAgICAgICAgZmlyc3RBZGp1c3RlZFRleHR1cmVDb29yZGluYXRlID0gdHJhbnNmb3JtMihbIFIxeCAtIE94LCBSMXkgLSBPeSBdLCB0cmFuc2Zvcm1lZFBhcmVudFZlcnRpY2VzTWF0cml4KSxcbiAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSMnggLSBPeCwgUjJ5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIHRoaXJkQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSA9IHRyYW5zZm9ybTIoWyBSM3ggLSBPeCwgUjN5IC0gT3kgXSwgdHJhbnNmb3JtZWRQYXJlbnRWZXJ0aWNlc01hdHJpeCksXG4gICAgICAgIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZSA9IFtcbiAgICAgICAgICBmaXJzdEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgICAgc2Vjb25kQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZSxcbiAgICAgICAgICB0aGlyZEFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGUsXG4gICAgICAgIF07XG5cbiAgcmV0dXJuIGFkanVzdGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZTtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4uL2VkZ2VcIjtcbmltcG9ydCBGYWNldCBmcm9tIFwiLi4vZmFjZXRcIjtcbmltcG9ydCBOb3JtYWwgZnJvbSBcIi4uL25vcm1hbFwiO1xuaW1wb3J0IFZlcnRleCBmcm9tIFwiLi4vdmVydGV4XCI7XG5cbmltcG9ydCB7IHBlcm11dGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0FwcHJveGltYXRlbHlFcXVhbFRvWmVybyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYXBwcm94aW1hdGVcIjtcbmltcG9ydCB7IHZlcnRpY2VzRnJvbUNvb3JkaW5hdGVUdXBsZXNBbmRJbmRleFR1cGxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy92ZXJ0aWNlc1wiO1xuaW1wb3J0IHsgY2xvbmVFZGdlcywgY2xvbmVOb3JtYWwsIGNsb25lVmVydGljZXMsIGNhbGN1bGF0ZUFyZWEsIGNhbGN1bGF0ZUVkZ2VzLCBjYWxjdWxhdGVOb3JtYWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZhY2V0XCI7XG5pbXBvcnQgeyBjbG9uZVRleHR1cmVDb29yZGluYXRlVHVwbGVzLCBjYWxjdWxhdGVNYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdGV4dHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZEZhY2V0IGV4dGVuZHMgRmFjZXQge1xuICBjb25zdHJ1Y3Rvcih2ZXJ0aWNlcywgbm9ybWFsLCBlZGdlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcykge1xuICAgIHN1cGVyKHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzKTtcblxuICAgIHRoaXMuaW1hZ2VOYW1lID0gaW1hZ2VOYW1lO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0SW1hZ2VOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmltYWdlTmFtZTtcbiAgfVxuXG4gIGdldFRleHR1cmVDb29yZGluYXRlVHVwbGVzKCkge1xuICAgIHJldHVybiB0aGlzLnRleHR1cmVDb29yZGluYXRlVHVwbGVzO1xuICB9XG5cbiAgZ2V0TWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMoaW1hZ2VNYXBKU09OKSB7XG4gICAgY29uc3QganNvbiA9IGltYWdlTWFwSlNPTlt0aGlzLmltYWdlTmFtZV0sXG4gICAgICAgICAgZXh0ZW50ID0ganNvbiwgIC8vL1xuICAgICAgICAgIG1hcHBlZFRleHR1cmVDb29yZGluYXRlVHVwbGVzID0gY2FsY3VsYXRlTWFwcGVkVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgZXh0ZW50KTtcblxuICAgIHJldHVybiBtYXBwZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcztcbiAgfVxuXG4gIHBlcm11dGUocGxhY2VzKSB7XG4gICAgc3VwZXIucGVybXV0ZShwbGFjZXMpO1xuXG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IHBlcm11dGUodGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgcGxhY2VzKTtcbiAgfVxuXG4gIGZyb21WZXJ0aWNlc0FuZE1hcmdpbk9mRXJyb3IodmVydGljZXMsIG1hcmdpbk9mRXJyb3IpIHtcbiAgICBsZXQgdGV4dHVyZWRGYWNldCA9IG51bGw7XG5cbiAgICBjb25zdCBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBwYXJlbnRWZXJ0aWNlcyA9IHRoaXMudmVydGljZXMsIC8vL1xuICAgICAgICAgICAgYWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlID0gY2FsY3VsYXRlQWRqdXN0ZWRUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyh2ZXJ0aWNlcywgbm9ybWFsLCBwYXJlbnRWZXJ0aWNlcywgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKSxcbiAgICAgICAgICAgIGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLFxuICAgICAgICAgICAgdGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSBhZGp1c3RlZFRleHR1cmVDb29yZGluYXRlVHVwbGU7ICAvLy9cblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxuXG4gIGNsb25lKCkge1xuICAgIGxldCB2ZXJ0aWNlcyA9IHRoaXMuZ2V0VmVydGljZXMoKSxcbiAgICAgICAgbm9ybWFsID0gdGhpcy5nZXROb3JtYWwoKSxcbiAgICAgICAgZWRnZXMgPSB0aGlzLmdldEVkZ2VzKCk7XG5cbiAgICB2ZXJ0aWNlcyA9IGNsb25lVmVydGljZXModmVydGljZXMpO1xuICAgIG5vcm1hbCA9IGNsb25lTm9ybWFsKG5vcm1hbCk7XG4gICAgZWRnZXMgPSBjbG9uZUVkZ2VzKGVkZ2VzKTtcblxuICAgIGNvbnN0IGltYWdlTmFtZSA9IHRoaXMuaW1hZ2VOYW1lLCAvLy9cbiAgICAgICAgICB0ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyA9IGNsb25lVGV4dHVyZUNvb3JkaW5hdGVUdXBsZXModGhpcy50ZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcyksXG4gICAgICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZEZhY2V0O1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0dXJlQ29vcmRpbmF0ZVR1cGxlc0Nvb3JkaW5hdGVzVHVwbGVzSW5kZXhUdXBsZUltYWdlTmFtZUFuZE1hcmdpbk9mRXJyb3IodGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMsIGNvb3JkaW5hdGVUdXBsZXMsIGluZGV4VHVwbGUsIGltYWdlTmFtZSwgbWFyZ2luT2ZFcnJvcikge1xuICAgIGxldCB0ZXh0dXJlZEZhY2V0ID0gbnVsbDtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gdmVydGljZXNGcm9tQ29vcmRpbmF0ZVR1cGxlc0FuZEluZGV4VHVwbGUoY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgVmVydGV4KSxcbiAgICAgICAgICBhcmVhID0gY2FsY3VsYXRlQXJlYSh2ZXJ0aWNlcyksXG4gICAgICAgICAgYXJlYUFwcHJveGltYXRlbHlFcXVhbFRvWmVybyA9IGlzQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKGFyZWEsIG1hcmdpbk9mRXJyb3IpO1xuXG4gICAgaWYgKCFhcmVhQXBwcm94aW1hdGVseUVxdWFsVG9aZXJvKSB7XG4gICAgICBjb25zdCBub3JtYWwgPSBjYWxjdWxhdGVOb3JtYWwodmVydGljZXMsIE5vcm1hbCksXG4gICAgICAgICAgICBlZGdlcyA9IGNhbGN1bGF0ZUVkZ2VzKHZlcnRpY2VzLCBFZGdlKTtcblxuICAgICAgdGV4dHVyZWRGYWNldCA9IG5ldyBUZXh0dXJlZEZhY2V0KHZlcnRpY2VzLCBub3JtYWwsIGVkZ2VzLCBpbWFnZU5hbWUsIHRleHR1cmVDb29yZGluYXRlVHVwbGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dHVyZWRGYWNldDtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2FudmFzRWxlbWVudCBmcm9tIFwiLi4vLi4vZWxlbWVudC9jYW52YXNcIjtcbmltcG9ydCBUZXh0dXJlZEZhY2V0IGZyb20gXCIuLi8uLi9wcmltaXRpdmUvZmFjZXQvdGV4dHVyZWRcIjtcblxuaW1wb3J0IHsgYWRkIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgZXh0ZW5kcyBDYW52YXNFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWFza1JlZmVyZW5jZSwgdHJhbnNmb3JtLCBmYWNldHMsIG1hc2tzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpIHtcbiAgICBzdXBlcihtYXNrUmVmZXJlbmNlLCB0cmFuc2Zvcm0sIGZhY2V0cywgbWFza3MpO1xuXG4gICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuaW5kZXhlcyA9IGluZGV4ZXM7XG4gICAgdGhpcy5pbWFnZU5hbWUgPSBpbWFnZU5hbWU7XG4gICAgdGhpcy50ZXh0dXJlQ29vcmRpbmF0ZXMgPSB0ZXh0dXJlQ29vcmRpbmF0ZXM7XG4gIH1cblxuICBjcmVhdGVGYWNldHMobWFyZ2luT2ZFcnJvcikge1xuICAgIHN1cGVyLmNyZWF0ZUZhY2V0cyhtYXJnaW5PZkVycm9yKTtcblxuICAgIGNvbnN0IGluZGV4VHVwbGVzID0gdGhpcy5pbmRleGVzLCAgLy8vXG4gICAgICAgIGZhY2V0cyA9IGluZGV4VHVwbGVzLnJlZHVjZSgoZmFjZXRzLCBpbmRleFR1cGxlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVydGV4VGV4dHVyZUNvb3JkaW5hdGVUdXBsZXMgPSB0aGlzLnRleHR1cmVDb29yZGluYXRlc1tpbmRleF0sIC8vL1xuICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZVR1cGxlcyA9IHRoaXMuY29vcmRpbmF0ZXMsIC8vL1xuICAgICAgICAgICAgICAgICAgdGV4dHVyZWRGYWNldCA9IFRleHR1cmVkRmFjZXQuZnJvbVRleHR1cmVDb29yZGluYXRlVHVwbGVzQ29vcmRpbmF0ZXNUdXBsZXNJbmRleFR1cGxlSW1hZ2VOYW1lQW5kTWFyZ2luT2ZFcnJvcih2ZXJ0ZXhUZXh0dXJlQ29vcmRpbmF0ZVR1cGxlcywgY29vcmRpbmF0ZVR1cGxlcywgaW5kZXhUdXBsZSwgdGhpcy5pbWFnZU5hbWUsIG1hcmdpbk9mRXJyb3IpLFxuICAgICAgICAgICAgICAgICAgZmFjZXQgPSB0ZXh0dXJlZEZhY2V0OyAgLy8vXG5cbiAgICAgICAgICBpZiAoZmFjZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGFkZChmYWNldHMsIGZhY2V0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZmFjZXRzO1xuICAgICAgICB9LCBbXSk7XG5cbiAgICB0aGlzLnNldEZhY2V0cyhmYWNldHMpO1xuICB9XG5cbiAgYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpIHtcbiAgICBjb25zdCBmYWNldHMgPSB0aGlzLmdldEZhY2V0cygpO1xuXG4gICAgdGV4dHVyZVJlbmRlcmVyLmFkZEZhY2V0cyhmYWNldHMpO1xuXG4gICAgc3VwZXIuYWRkRmFjZXRzKGNvbG91clJlbmRlcmVyLCB0ZXh0dXJlUmVuZGVyZXIpO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykgeyByZXR1cm4gQ2FudmFzRWxlbWVudC5mcm9tUHJvcGVydGllcyhDbGFzcywgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpOyB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FudmFzIH0gZnJvbSBcIi4vY2FudmFzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1hc2sgfSBmcm9tIFwiLi9lbGVtZW50L21hc2tcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFydCB9IGZyb20gXCIuL2VsZW1lbnQvcGFydFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTY2VuZSB9IGZyb20gXCIuL2VsZW1lbnQvc2NlbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmFcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgR2FtaW5nQ2FtZXJhIH0gZnJvbSBcIi4vZWxlbWVudC9jYW1lcmEvZ2FtaW5nXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERlc2lnbkNhbWVyYSB9IGZyb20gXCIuL2VsZW1lbnQvY2FtZXJhL2Rlc2lnblwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4vZWxlbWVudC9jYW52YXNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcHJlbG9hZFV0aWxpdGllcyB9IGZyb20gXCIuL3V0aWxpdGllcy9wcmVsb2FkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbG91cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL2NvbG91cmVkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnQvY2FudmFzL3RleHR1cmVkXCI7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdmVjdG9yTWF0aHMgfSBmcm9tIFwiLi9tYXRocy92ZWN0b3JcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgbWF0cml4TWF0aHMgfSBmcm9tIFwiLi9tYXRocy9tYXRyaXhcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3QgfSBmcm9tIFwiLi9pbmRleFwiOyAvLy8vXG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIFJlYWN0XG59KTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ29sb3VyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdENvbG91ciA9IFsgMSwgMCwgMCBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xvdXJlZFNxdWFyZSBleHRlbmRzIENvbG91cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gIFx0Y29uc3QgeyBjb2xvdXIgPSBkZWZhdWx0Q29sb3VyIH0gPSBwcm9wZXJ0aWVzLFxuXHRcdFx0ICAgIGNvbG91cmVkU3F1YXJlID0gQ29sb3VyZWRDYW52YXNFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKENvbG91cmVkU3F1YXJlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgY29sb3VyKTtcblxuICBcdHJldHVybiBjb2xvdXJlZFNxdWFyZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vY29sb3VyZWRTcXVhcmVcIjtcblxuY29uc3QgRmFjZSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHsgY29sb3VyIH0gPSBwcm9wZXJ0aWVzO1xuXG4gIHJldHVybiAoXG5cbiAgICA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtjb2xvdXJ9IHBvc2l0aW9uPXtbIC0wLjUsIC0wLjUsICswLjUgXX0gLz5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFjZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEZhY2UgZnJvbSBcIi4vZmFjZVwiO1xuXG5jb25zdCBkZWZhdWx0Q29sb3VyID0gWyAxLCAxLCAwIF07XG5cbmNvbnN0IEN1YmUgPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB7IGNvbG91ciA9IGRlZmF1bHRDb2xvdXIgfSA9IHByb3BlcnRpZXM7XG5cbiAgcmV0dXJuIChbXG5cbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgICAwLCAwIF19IC8+LFxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgKzkwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAgIDAsICs5MCwgMCBdfSAvPixcblxuICAgIDxGYWNlIGNvbG91cj17Y29sb3VyfSByb3RhdGlvbnM9e1sgMTgwLCAgIDAsIDAgXX0gLz4sXG4gICAgPEZhY2UgY29sb3VyPXtjb2xvdXJ9IHJvdGF0aW9ucz17WyAtOTAsICAgMCwgMCBdfSAvPixcbiAgICA8RmFjZSBjb2xvdXI9e2NvbG91cn0gcm90YXRpb25zPXtbICAgMCwgLTkwLCAwIF19IC8+LFxuXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IGN1YmVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30gPlxuICAgICAgPFBhcnQ+XG4gICAgICAgIDxDdWJlIGNvbG91cj17WyAwLCAxLCAwIF19IC8+XG4gICAgICA8L1BhcnQ+XG4gICAgICA8RGVzaWduQ2FtZXJhIHBlcnNpc3QgLz5cbiAgICA8L1NjZW5lPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjdWJlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgVGV4dHVyZWRDYW52YXNFbGVtZW50IH0gZnJvbSBcIi4uLy4uL2luZGV4XCI7IC8vL1xuXG5jb25zdCBjb29yZGluYXRlcyA9IFtcblxuICAgICAgICBbIDAsIDAsIDAgXSxcbiAgICAgICAgWyAxLCAwLCAwIF0sXG4gICAgICAgIFsgMCwgMSwgMCBdLFxuICAgICAgICBbIDEsIDEsIDAgXSxcblxuICAgICAgXSxcbiAgICAgIGluZGV4ZXMgPSBbXG5cbiAgICAgICAgWyAwLCAxLCAzIF0sXG4gICAgICAgIFsgMywgMiwgMCBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwicGxhc3Rlci5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAyLCAwIF0sIFsgMiwgMiBdIF0sXG4gICAgICAgIFsgWyAyLCAyIF0sIFsgMCwgMiBdLCBbIDAsIDAgXSBdLFxuXG4gICAgICBdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0dXJlZFF1YWRyYW5nbGUgZXh0ZW5kcyBUZXh0dXJlZENhbnZhc0VsZW1lbnQge1xuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHsgaW1hZ2VOYW1lID0gZGVmYXVsdEltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzID0gZGVmYXVsdFRleHR1cmVDb29yZGluYXRlcyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB0ZXh0dXJlZFF1YWRyYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRRdWFkcmFuZ2xlLCBwcm9wZXJ0aWVzLCBjb29yZGluYXRlcywgaW5kZXhlcywgaW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMpO1xuXG4gICAgcmV0dXJuIHRleHR1cmVkUXVhZHJhbmdsZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBNYXNrLCBEZXNpZ25DYW1lcmEsIHByZWxvYWRVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuaW1wb3J0IFRleHR1cmVkUXVhZHJhbmdsZSBmcm9tIFwiLi9lbGVtZW50L3RleHR1cmVkUXVhZHJhbmdsZVwiO1xuXG5jb25zdCB7IHByZWxvYWRJbWFnZXMgfSA9IHByZWxvYWRVdGlsaXRpZXM7XG5cbmNvbnN0IHRpbGluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIHByZWxvYWRJbWFnZXMoKGltYWdlcywgaW1hZ2VOYW1lcykgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKSxcbiAgICAgICAgICBjb250ZXh0ID0ge307XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8U2NlbmUgY2FudmFzPXtjYW52YXN9IGNvbnRleHQ9e2NvbnRleHR9ID5cbiAgICAgICAgPFBhcnQgaW1hZ2VzPXtpbWFnZXN9IGltYWdlTmFtZXM9e2ltYWdlTmFtZXN9IGltYWdlVGlsaW5nID5cbiAgICAgICAgICA8TWFzayByZWZlcmVuY2U9XCJtYXNrXCI+XG4gICAgICAgICAgICA8Q29sb3VyZWRTcXVhcmUgc2NhbGU9e1sgMC4yNSwgMC4yNSwgMSBdfSBwb3NpdGlvbj17WyAwLjEyNSwgMC4xMjUsIDAuMTI1IF19IC8+XG4gICAgICAgICAgPC9NYXNrPlxuICAgICAgICAgIDxUZXh0dXJlZFF1YWRyYW5nbGUgcG9zaXRpb249e1sgMCwgMCwgMCBdfSBpbWFnZU5hbWU9XCJmbG9vcmJvYXJkcy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgICAgPFRleHR1cmVkUXVhZHJhbmdsZSBwb3NpdGlvbj17WyAtMC41LCAtMC41LCAtMC41IF19IGltYWdlTmFtZT1cInBhdmluZy5qcGdcIiBtYXNrUmVmZXJlbmNlPVwibWFza1wiIC8+XG4gICAgICAgIDwvUGFydD5cbiAgICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aWxpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBDYW52YXMsIFNjZW5lLCBQYXJ0LCBEZXNpZ25DYW1lcmEgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuXG5pbXBvcnQgQ29sb3VyZWRTcXVhcmUgZnJvbSBcIi4vZWxlbWVudC9jb2xvdXJlZFNxdWFyZVwiO1xuXG5jb25zdCBzaW1wbGVFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgeyBmYWxzZSAmJiA8Q29sb3VyZWRTcXVhcmUgY29sb3VyPXtbIDAsIDAsIDEgXX0gLz4gfVxuICAgICAgPC9QYXJ0PlxuICAgICAgPERlc2lnbkNhbWVyYS8+XG4gICAgPC9TY2VuZT5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2ltcGxlRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgQ2FudmFzLCBTY2VuZSwgTWFzaywgUGFydCwgRGVzaWduQ2FtZXJhIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IEN1YmUgZnJvbSBcIi4vZWxlbWVudC9jdWJlXCI7XG5cbmNvbnN0IG1hc2tpbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBuZXcgQ2FudmFzKCk7XG5cbiAgcmV0dXJuIChcblxuICAgIDxTY2VuZSBjYW52YXM9e2NhbnZhc30+XG4gICAgICA8UGFydD5cbiAgICAgICAgPE1hc2sgcmVmZXJlbmNlPVwicXVhcnRlci1zaXplZC1jdWJlXCI+XG4gICAgICAgICAgPEN1YmUgc2NhbGU9e1sgMS80LCAxLzQsIDEvNCBdfSAvPlxuICAgICAgICA8L01hc2s+XG4gICAgICAgIDxNYXNrIHJlZmVyZW5jZT1cImhhbGYtc2l6ZWQtY3ViZVwiPlxuICAgICAgICAgIDxDdWJlIHNjYWxlPXtbIDEvMiwgMS8yLCAxLzIgXX0gbWFza1JlZmVyZW5jZT1cInF1YXJ0ZXItc2l6ZWQtY3ViZVwiLz5cbiAgICAgICAgPC9NYXNrPlxuICAgICAgICA8Q3ViZSBtYXNrUmVmZXJlbmNlPVwiaGFsZi1zaXplZC1jdWJlXCIgLz5cbiAgICAgIDwvUGFydD5cbiAgICAgIDxEZXNpZ25DYW1lcmEvPlxuICAgIDwvU2NlbmU+XG5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hc2tpbmdFeGFtcGxlO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUZXh0dXJlZENhbnZhc0VsZW1lbnQgfSBmcm9tIFwiLi4vLi4vaW5kZXhcIjsgLy8vXG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gW1xuXG4gICAgICAgIFsgICAwLCAwLCAwIF0sXG4gICAgICAgIFsgICAxLCAwLCAwIF0sXG4gICAgICAgIFsgMC41LCAxLCAwIF0sXG5cbiAgICAgIF0sXG4gICAgICBpbmRleGVzID0gW1xuXG4gICAgICAgIFsgMCwgMSwgMiBdLFxuXG4gICAgICBdLFxuICAgICAgZGVmYXVsdEltYWdlTmFtZSA9IFwic3RyaXBlcy5qcGdcIixcbiAgICAgIGRlZmF1bHRUZXh0dXJlQ29vcmRpbmF0ZXMgPSBbXG5cbiAgICAgICAgWyBbIDAsIDAgXSwgWyAxLCAwIF0sIFsgMC41LCAxIF0gXSxcblxuICAgICAgXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dHVyZWRUcmlhbmdsZSBleHRlbmRzIFRleHR1cmVkQ2FudmFzRWxlbWVudCB7XG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgeyBpbWFnZU5hbWUgPSBkZWZhdWx0SW1hZ2VOYW1lLCB0ZXh0dXJlQ29vcmRpbmF0ZXMgPSBkZWZhdWx0VGV4dHVyZUNvb3JkaW5hdGVzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHRleHR1cmVkVHJpYW5nbGUgPSBUZXh0dXJlZENhbnZhc0VsZW1lbnQuZnJvbVByb3BlcnRpZXMoVGV4dHVyZWRUcmlhbmdsZSwgcHJvcGVydGllcywgY29vcmRpbmF0ZXMsIGluZGV4ZXMsIGltYWdlTmFtZSwgdGV4dHVyZUNvb3JkaW5hdGVzKTtcblxuICAgIHJldHVybiB0ZXh0dXJlZFRyaWFuZ2xlO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0dXJlZFRyaWFuZ2xlIGZyb20gXCIuL3RleHR1cmVkVHJpYW5nbGVcIjtcblxuY29uc3QgU2lkZSA9IChwcm9wZXJ0aWVzKSA9PlxuXG4gIDxUZXh0dXJlZFRyaWFuZ2xlIHNjYWxlPXtbIDEsIDEvTWF0aC5zcXJ0KDIpLCAxIF19IHBvc2l0aW9uPXtbIC0wLjUsIDAsIDAuNSBdfSByb3RhdGlvbnM9e1sgLTQ1LCAwLCAwIF19IC8+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNpZGUgZnJvbSBcIi4vc2lkZVwiO1xuXG5jb25zdCBQeXJhbWlkID0gKHByb3BlcnRpZXMpID0+IFtcblxuICA8U2lkZSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsICA5MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDE4MCwgMCBdfSAvPixcbiAgPFNpZGUgcm90YXRpb25zPXtbIDAsIDI3MCwgMCBdfSAvPixcblxuXTtcblxuZXhwb3J0IGRlZmF1bHQgUHlyYW1pZDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydCwgU2NlbmUsIENhbnZhcywgR2FtaW5nQ2FtZXJhLCBwcmVsb2FkVXRpbGl0aWVzIH0gZnJvbSBcIi4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IFB5cmFtaWQgZnJvbSBcIi4vZWxlbWVudC9weXJhbWlkXCI7XG5cbmNvbnN0IHsgcHJlbG9hZEltYWdlTWFwIH0gPSBwcmVsb2FkVXRpbGl0aWVzO1xuXG5jb25zdCBweXJhbWlkRXhhbXBsZSA9ICgpID0+IHtcbiAgcHJlbG9hZEltYWdlTWFwKChpbWFnZU1hcCwgaW1hZ2VNYXBKU09OKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gbmV3IENhbnZhcygpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPFNjZW5lIGNhbnZhcz17Y2FudmFzfT5cbiAgICAgICAgPFBhcnQgaW1hZ2VNYXA9e2ltYWdlTWFwfSBpbWFnZU1hcEpTT049e2ltYWdlTWFwSlNPTn0+XG4gICAgICAgICAgPFB5cmFtaWQvPlxuICAgICAgICA8L1BhcnQ+XG4gICAgICAgIDxHYW1pbmdDYW1lcmEgbW91c2VTZW5zaXRpdml0eT17MTB9IC8+XG4gICAgICA8L1NjZW5lPlxuXG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBweXJhbWlkRXhhbXBsZTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFwiLi94Z2xcIjtcblxuaW1wb3J0IGN1YmVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvY3ViZVwiO1xuaW1wb3J0IHRpbGluZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS90aWxpbmdcIjtcbmltcG9ydCBzaW1wbGVFeGFtcGxlIGZyb20gXCIuL2V4YW1wbGUvc2ltcGxlXCI7XG5pbXBvcnQgbWFza2luZ0V4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9tYXNraW5nXCI7XG5pbXBvcnQgcHlyYW1pZEV4YW1wbGUgZnJvbSBcIi4vZXhhbXBsZS9weXJhbWlkXCI7XG5cbmNvbnN0IGV4YW1wbGUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKTsgIC8vL1xuXG5zd2l0Y2ggKGV4YW1wbGUpIHtcbiAgY2FzZSBcImN1YmVcIjpcbiAgICBjdWJlRXhhbXBsZSgpO1xuXG4gICAgYnJlYWs7XG5cbiAgY2FzZSBcInRpbGluZ1wiOlxuICAgIHRpbGluZ0V4YW1wbGUoKTtcblxuICAgIGJyZWFrO1xuXG4gIGNhc2UgXCJzaW1wbGVcIjpcbiAgICBzaW1wbGVFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwibWFza2luZ1wiOlxuICAgIG1hc2tpbmdFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcblxuICBjYXNlIFwicHlyYW1pZFwiOlxuICAgIHB5cmFtaWRFeGFtcGxlKCk7XG5cbiAgICBicmVhaztcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7OztBQUFBOzs7Ozs7O0FB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QUFLLEtBQUssS0FBSztVQUN6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7VUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLO1VBRXpCLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSztVQUN6QixLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUs7VUFDekIsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLOzs7eUJBS0gsU0FBUyxTQUFTO0FBQzFDLFlBQU8sS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2YsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBRWIsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2QsS0FBSyxRQUFTLElBQ2YsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRLEtBQ2QsTUFBTSxRQUFRO0FBRXBCLGVBQVE7VUFFTixLQUFNLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBSyxNQUFPO1VBQzFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU87VUFDMUMsS0FBTSxLQUFNLEtBQU0sS0FBSyxNQUFPLEtBQUssTUFBTztVQUMxQyxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU8sS0FBSyxNQUFPO1VBRTFDLEtBQU0sS0FBTSxLQUFNLEtBQU0sS0FBTSxLQUFLLE1BQU87VUFDMUMsS0FBTSxL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
