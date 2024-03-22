
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/PipeControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f3c5wAMPFDF6wDv0c4j1Ql', 'PipeControl');
// script/PipeControl.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PipeControl = /** @class */ (function (_super) {
    __extends(PipeControl, _super);
    function PipeControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 50;
        _this.width = 288;
        return _this;
    }
    PipeControl.prototype.update = function (dt) {
        // 两个管道进行移动
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var pipe = _a[_i];
            pipe.x -= this.speed * dt;
            if (pipe.x <= -this.width) {
                pipe.x += this.width * 2;
                // 默认的高度是0 - 158的高度随机数
                pipe.y = Math.random() * 158;
            }
        }
    };
    __decorate([
        property
    ], PipeControl.prototype, "speed", void 0);
    __decorate([
        property
    ], PipeControl.prototype, "width", void 0);
    PipeControl = __decorate([
        ccclass
    ], PipeControl);
    return PipeControl;
}(cc.Component));
exports.default = PipeControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvUGlwZUNvbnRyb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEYsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFBckQ7UUFBQSxxRUFtQkM7UUFoQkcsV0FBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixXQUFLLEdBQVcsR0FBRyxDQUFDOztJQWF4QixDQUFDO0lBWEcsNEJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixXQUFXO1FBQ1gsS0FBZ0IsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFoQyxJQUFJLElBQUksU0FBQTtZQUNSLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDMUIsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDdkIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDekIsc0JBQXNCO2dCQUN0QixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDaEM7U0FDSjtJQUNMLENBQUM7SUFmRDtRQURDLFFBQVE7OENBQ1U7SUFHbkI7UUFEQyxRQUFROzhDQUNXO0lBTkgsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW1CL0I7SUFBRCxrQkFBQztDQW5CRCxBQW1CQyxDQW5Cd0MsRUFBRSxDQUFDLFNBQVMsR0FtQnBEO2tCQW5Cb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvMi40L21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpcGVDb250cm9sIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHNwZWVkOiBudW1iZXIgPSA1MDtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHdpZHRoOiBudW1iZXIgPSAyODg7XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIC8vIOS4pOS4queuoemBk+i/m+ihjOenu+WKqFxuICAgICAgICBmb3IobGV0IHBpcGUgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBwaXBlLnggLT0gdGhpcy5zcGVlZCAqIGR0O1xuICAgICAgICAgICAgaWYgKHBpcGUueCA8PSAtdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIHBpcGUueCArPSB0aGlzLndpZHRoICogMjtcbiAgICAgICAgICAgICAgICAvLyDpu5jorqTnmoTpq5jluqbmmK8wIC0gMTU455qE6auY5bqm6ZqP5py65pWwXG4gICAgICAgICAgICAgICAgcGlwZS55ID0gTWF0aC5yYW5kb20oKSAqIDE1ODtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==