"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
let MathController = class MathController {
    constructor() { }
    getAll(data) {
        return (data || []).reduce((a, b) => a + b);
    }
};
__decorate([
    microservices_1.MessagePattern({ cmd: 'sum' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Number)
], MathController.prototype, "getAll", null);
MathController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [])
], MathController);
exports.MathController = MathController;
//# sourceMappingURL=math.controller.js.map