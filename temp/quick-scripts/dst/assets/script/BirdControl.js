
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BirdControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmlyZENvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEYsK0NBQTBDO0FBQ3BDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBbUNDO1FBakNHLHFDQUFxQztRQUVyQyxXQUFLLEdBQWlCLElBQUksQ0FBQztRQUczQixTQUFHLEdBQVcsRUFBRSxDQUFDOztRQTJCakIsaUJBQWlCO0lBQ3JCLENBQUM7SUExQkcsNEJBQU0sR0FBTjtRQUNJLFNBQVM7UUFDVCxFQUFFLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUNuRCxDQUFDO0lBRUQsMkJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxLQUFLO0lBQ0wseUJBQUcsR0FBSDtRQUNJLGtCQUFrQjtRQUNsQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDSCxPQUFPO1lBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtJQUNMLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQzs4Q0FDSTtJQUczQjtRQURDLFFBQVE7NENBQ1E7SUFQQSxXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBbUMvQjtJQUFELGtCQUFDO0NBbkNELEFBbUNDLENBbkN3QyxFQUFFLENBQUMsU0FBUyxHQW1DcEQ7a0JBbkNvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBTY29yZUNvbnRyb2wgZnJvbSAnLi9TY29yZUNvbnRyb2wnO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCaXJkQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyDlsI/puJ/mjqfliLblmajvvIzpgJrov4flsZ7mgKfnmoTmlrnlvI/lsIblsI/puJ/nmoToioLngrnkvKDov5vmnaXvvIzov5nmoLflsI/puJ/nmoTnu4Tku7bkuZ/kvJrov4fmnaVcbiAgICBAcHJvcGVydHkoU2NvcmVDb250cm9sKVxuICAgIHNjb3JlOiBTY29yZUNvbnRyb2wgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5XG4gICAgbnVtOiBudW1iZXIgPSAxMDtcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vIOW8gOWQr+eJqeeQhuezu+e7n1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIOmjnue/lFxuICAgIGZseSgpIHtcbiAgICAgICAgLy8g6I635Y+W5b2T5YmN5Yia5L2T77yM57uZ5LiA5Liq57q/5oCn55qE6YCf5bqmXG4gICAgICAgIC8vIGNjLnYyKDAsIDE1MCkg5piv57q15Z2Q5qCH5pyJ6YCf5bqmXG4gICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAxNDApO1xuICAgIH1cblxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XG4gICAgICAgIGlmIChvdGhlci50YWcgPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmUuYWRkKHRoaXMubnVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOa4uOaIj+e7k+adn1xuICAgICAgICAgICAgdGhpcy5zY29yZS5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19