
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/BgControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvQmdDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsNEVBQTRFO0FBQzVFLG1CQUFtQjtBQUNuQixzRkFBc0Y7QUFDdEYsOEJBQThCO0FBQzlCLHNGQUFzRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRGLDZDQUF3QztBQUNsQyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1DQztRQWxDRyxLQUFLO1FBRUwsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUVsQixLQUFLO1FBRUwsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUVwQixxQ0FBcUM7UUFFckMsVUFBSSxHQUFnQixJQUFJLENBQUM7O0lBd0I3QixDQUFDO0lBdEJHLHlCQUFLLEdBQUw7UUFBQSxpQkFTQztRQVJHLFNBQVM7UUFDVCxLQUFjLFVBQWtCLEVBQWxCLEtBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBOUIsSUFBSSxFQUFFLFNBQUE7WUFDTixpQkFBaUI7WUFDakIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUU7Z0JBQ2hDLGdCQUFnQjtnQkFDaEIsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELDBCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04saUJBQWlCO1FBQ2pCLEtBQWUsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUE5QixJQUFJLEVBQUUsU0FBQTtZQUNQLGFBQWE7WUFDYixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLDBCQUEwQjtZQUMxQixJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQzFCO1NBQ0o7SUFDTCxDQUFDO0lBL0JEO1FBREMsUUFBUTs0Q0FDUztJQUlsQjtRQURDLFFBQVE7NENBQ1c7SUFJcEI7UUFEQyxRQUFRLENBQUMscUJBQVcsQ0FBQzsyQ0FDRztJQVhSLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FtQzdCO0lBQUQsZ0JBQUM7Q0FuQ0QsQUFtQ0MsQ0FuQ3NDLEVBQUUsQ0FBQyxTQUFTLEdBbUNsRDtrQkFuQ29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yLzIuNC9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IEJpcmRDb250cm9sIGZyb20gJy4vQmlyZENvbnRyb2wnO1xuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZ0NvbnRyb2wgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIOmAn+W6plxuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSA0O1xuXG4gICAgLy8g5a695bqmXG4gICAgQHByb3BlcnR5XG4gICAgd2lkdGg6IG51bWJlciA9IDI4ODtcblxuICAgIC8vIOWwj+m4n+aOp+WItuWZqO+8jOmAmui/h+WxnuaAp+eahOaWueW8j+WwhuWwj+m4n+eahOiKgueCueS8oOi/m+adpe+8jOi/meagt+Wwj+m4n+eahOe7hOS7tuS5n+S8mui/h+adpVxuICAgIEBwcm9wZXJ0eShCaXJkQ29udHJvbClcbiAgICBiaXJkOiBCaXJkQ29udHJvbCA9IG51bGw7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8g54K55Ye76IOM5pmv55uR5ZCsXG4gICAgICAgIGZvcihsZXQgYmcgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAvLyDnu5nmr4/kuIDkuKrnu4Tku7bpg73nlKjpvKDmoIfov5vooYznm5HlkKxcbiAgICAgICAgICAgIGJnLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0RPV04sICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDosIPnlKjlsI/puJ/ohJrmnKzkuK3nmoRmbHnmlrnms5VcbiAgICAgICAgICAgICAgICB0aGlzLmJpcmQuZmx5KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g6I635Y+W5Lik5Liq6IOM5pmv55qE5a2Q6IqC54K56L+b6KGM56e75YqoXG4gICAgICAgIGZvciAobGV0IGJnIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgLy8g5q+P56eS5b6A5bem6L6556e75YqoNOWDj+e0oFxuICAgICAgICAgICAgYmcueCAtPSB0aGlzLnNwZWVkICogZHQ7XG4gICAgICAgICAgICAvLyDlpoLmnpzkuIDkuKrog4zmma/otoXlh7rlsY/luZXvvIzlsLHnp7vliqjliLDlj6bkuIDkuKrog4zmma/nmoTlj7PovrlcbiAgICAgICAgICAgIGlmIChiZy54IDw9IC10aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgYmcueCArPSB0aGlzLndpZHRoICogMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==