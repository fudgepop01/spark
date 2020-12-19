"use strict";
var _a;
exports.__esModule = true;
var _index_1 = require("./ASM_opcodes/_index");
var mainOpcodes = "";
var simplifiedOpcodes = "";
for (var _i = 0, _b = Object.values(_index_1["default"]); _i < _b.length; _i++) {
    var opcode = _b[_i];
    if (opcode.simple) {
        console.log((_a = opcode.simple) === null || _a === void 0 ? void 0 : _a.map(function (c) { return c.name; }));
    }
}
