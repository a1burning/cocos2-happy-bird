"use strict";
cc._RF.push(module, '5862chivaVOuKFly2U2kuVF', 'BirdControl');
// script/BirdControl.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScoreControl_1 = require("./ScoreControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BirdControl = /** @class */ (function (_super) {
    __extends(BirdControl, _super);
    function BirdControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 小鸟控制器，通过属性的方式将小鸟的节点传进来，这样小鸟的组件也会过来
        _this.score = null;
        _this.num = 10;
        return _this;
        // update (dt) {}
    }
    BirdControl.prototype.onLoad = function () {
        // 开启物理系统
        cc.director.getPhysicsManager().enabled = true;
    };
    BirdControl.prototype.start = function () {
    };
    // 飞翔
    BirdControl.prototype.fly = function () {
        // 获取当前刚体，给一个线性的速度
        // cc.v2(0, 150) 是纵坐标有速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 140);
    };
    BirdControl.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag === 1) {
            this.score.add(this.num);
        }
        else {
            // 游戏结束
            this.score.stop();
        }
    };
    __decorate([
        property(ScoreControl_1.default)
    ], BirdControl.prototype, "score", void 0);
    __decorate([
        property
    ], BirdControl.prototype, "num", void 0);
    BirdControl = __decorate([
        ccclass
    ], BirdControl);
    return BirdControl;
}(cc.Component));
exports.default = BirdControl;

cc._RF.pop();