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
exports.UserPOJO = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let UserPOJO = class UserPOJO extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        type: sequelize_1.STRING,
        references: 'user_id'
    }),
    __metadata("design:type", String)
], UserPOJO.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'username'
    }),
    __metadata("design:type", String)
], UserPOJO.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'email'
    }),
    __metadata("design:type", String)
], UserPOJO.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.STRING,
        references: 'password'
    }),
    __metadata("design:type", String)
], UserPOJO.prototype, "password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'birth_date'
    }),
    __metadata("design:type", Date)
], UserPOJO.prototype, "birth_date", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        references: 'phone_number'
    }),
    __metadata("design:type", Number)
], UserPOJO.prototype, "phone_number", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.INTEGER,
        references: 'deposit'
    }),
    __metadata("design:type", Number)
], UserPOJO.prototype, "deposit", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'createdAt'
    }),
    __metadata("design:type", Date)
], UserPOJO.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DATE,
        references: 'updatedAt'
    }),
    __metadata("design:type", Date)
], UserPOJO.prototype, "updatedAt", void 0);
UserPOJO = __decorate([
    (0, sequelize_typescript_1.Table)({
        freezeTableName: true,
        tableName: 'users',
        schema: 'hackaton'
    })
], UserPOJO);
exports.UserPOJO = UserPOJO;
