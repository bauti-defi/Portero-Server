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
const typeorm_1 = require("@nestjs/typeorm");
const barrio_invite_entity_1 = require("./barrio.invite.entity");
const typeorm_2 = require("typeorm");
const mins_till_exp = 2;
let InviteService = class InviteService {
    constructor(barrioInviteRepo) {
        this.barrioInviteRepo = barrioInviteRepo;
    }
    async createBarrioInvite(barrio_id) {
        return await this.barrioInviteRepo.query(create_barrio_invite_query(barrio_id))
            .then(parse_create_barrio_query);
    }
};
InviteService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(barrio_invite_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InviteService);
exports.default = InviteService;
function parse_create_barrio_query(response) {
    return response[0].create_barrio_invite;
}
function create_barrio_invite_query(barrio_id) {
    return `SELECT create_barrio_invite('${barrio_id}');`;
}
//# sourceMappingURL=invite.service.js.map