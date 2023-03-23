"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = (0, _express["default"])();
server.listen(3001, function () {
  console.log("your application run : http://localhost:3001");
});