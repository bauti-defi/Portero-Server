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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const admin_panel_service_1 = require("./admin.panel.service");
const barrio_registration_dto_1 = require("./barrio.registration.dto");
const barrio_login_dto_1 = require("./barrio.login.dto");
let AdminPanelController = class AdminPanelController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async register(registerDTO) {
        return await this.adminService.register(registerDTO);
    }
    async authenticate(logInDTO) {
        return false;
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [barrio_registration_dto_1.BarrioRegistrationDTO]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "register", null);
__decorate([
    common_1.Post('authenticate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [barrio_login_dto_1.BarrioLogInDTO]),
    __metadata("design:returntype", Promise)
], AdminPanelController.prototype, "authenticate", null);
AdminPanelController = __decorate([
    common_1.Controller('admin'),
    __metadata("design:paramtypes", [admin_panel_service_1.AdminPanelService])
], AdminPanelController);
exports.AdminPanelController = AdminPanelController;
//# sourceMappingURL=admin.panel.controller.js.map