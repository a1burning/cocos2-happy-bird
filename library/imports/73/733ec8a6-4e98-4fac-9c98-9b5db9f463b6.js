"use strict";
cc._RF.push(module, '733ecimTphPrJyYm1259GO2', 'BgControl');
// script/BgControl.ts

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
var BirdControl_1 = require("./BirdControl");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BgControl = /** @class */ (function (_super) {
    __extends(BgControl, _super);
    function BgControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 速度
        _this.speed = 4;
        // 宽度
        _this.width = 288;
        // 小鸟控制器，通过属性的方式将小鸟的节点传进来，这样小鸟的组件也会过来
        _this.bird = null;
        return _this;
    }
    BgControl.prototype.start = function () {
        var _this = this;
        // 点击背景监听
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bg = _a[_i];
            // 给每一个组件都用鼠标进行监听
            bg.on(cc.Node.EventType.MOUSE_DOWN, function () {
                // 调用小鸟脚本中的fly方法
                _this.bird.fly();
            });
        }
    };
    BgControl.prototype.update = function (dt) {
        // 获取两个背景的子节点进行移动
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var bg = _a[_i];
            // 每秒往左边移动4像素
            bg.x -= this.speed * dt;
            // 如果一个背景超出屏幕，就移动到另一个背景的右边
            if (bg.x <= -this.width) {
                bg.x += this.width * 2;
            }
        }
    };
    __decorate([
        property
    ], BgControl.prototype, "speed", void 0);
    __decorate([
        property
    ], BgControl.prototype, "width", void 0);
    __decorate([
        property(BirdControl_1.default)
    ], BgControl.prototype, "bird", void 0);
    BgControl = __decorate([
        ccclass
    ], BgControl);
    return BgControl;
}(cc.Component));
exports.default = BgControl;

cc._RF.pop();