
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/BgControl');
require('./assets/script/BirdControl');
require('./assets/script/PipeControl');
require('./assets/script/ScoreControl');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ScoreControl.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea8e3EbiIZAda/e8SLbmn1m', 'ScoreControl');
// script/ScoreControl.ts

"use strict";
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
// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScoreControl = /** @class */ (function (_super) {
    __extends(ScoreControl, _super);
    function ScoreControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.width = 288;
        return _this;
    }
    ScoreControl.prototype.add = function (num) {
        this.label.string = (parseInt(this.label.string) + num).toString();
    };
    ScoreControl.prototype.stop = function () {
        // 移动到画面中间，并修改字体大小为50
        this.node.setPosition(this.width / 2, 250);
        this.label.fontSize = 60;
    };
    __decorate([
        property(cc.Label)
    ], ScoreControl.prototype, "label", void 0);
    __decorate([
        property
    ], ScoreControl.prototype, "width", void 0);
    ScoreControl = __decorate([
        ccclass
    ], ScoreControl);
    return ScoreControl;
}(cc.Component));
exports.default = ScoreControl;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHQvU2NvcmVDb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQiw0RUFBNEU7QUFDNUUsbUJBQW1CO0FBQ25CLHNGQUFzRjtBQUN0Riw4QkFBOEI7QUFDOUIsc0ZBQXNGO0FBQ2hGLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBZ0JDO1FBZEcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQVcsR0FBRyxDQUFDOztJQVd4QixDQUFDO0lBVEcsMEJBQUcsR0FBSCxVQUFLLEdBQVc7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCwyQkFBSSxHQUFKO1FBQ0kscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBYkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDSTtJQUd2QjtRQURDLFFBQVE7K0NBQ1c7SUFMSCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBZ0JoQztJQUFELG1CQUFDO0NBaEJELEFBZ0JDLENBaEJ5QyxFQUFFLENBQUMsU0FBUyxHQWdCckQ7a0JBaEJvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci8yLjQvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlQ29udHJvbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHlcbiAgICB3aWR0aDogbnVtYmVyID0gMjg4O1xuXG4gICAgYWRkIChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IChwYXJzZUludCh0aGlzLmxhYmVsLnN0cmluZykgKyBudW0pLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgc3RvcCAoKSB7XG4gICAgICAgIC8vIOenu+WKqOWIsOeUu+mdouS4remXtO+8jOW5tuS/ruaUueWtl+S9k+Wkp+Wwj+S4ujUwXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLndpZHRoIC8gMiwgMjUwKTtcbiAgICAgICAgdGhpcy5sYWJlbC5mb250U2l6ZSA9IDYwO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
