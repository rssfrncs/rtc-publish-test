"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNano = void 0;
const nano_1 = require("nano");
class MyNano extends nano_1.Nano {
    constructor() {
        super(...arguments);
        this.test = 2;
    }
}
exports.MyNano = MyNano;
