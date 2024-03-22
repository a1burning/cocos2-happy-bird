// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import BirdControl from './BirdControl';
const {ccclass, property} = cc._decorator;

@ccclass
export default class BgControl extends cc.Component {
    // 速度
    @property
    speed: number = 4;

    // 宽度
    @property
    width: number = 288;

    // 小鸟控制器，通过属性的方式将小鸟的节点传进来，这样小鸟的组件也会过来
    @property(BirdControl)
    bird: BirdControl = null;

    start() {
        // 点击背景监听
        for(let bg of this.node.children) {
            // 给每一个组件都用鼠标进行监听
            bg.on(cc.Node.EventType.MOUSE_DOWN, () => {
                // 调用小鸟脚本中的fly方法
                this.bird.fly();
            });
        }
    }

    update (dt) {
        // 获取两个背景的子节点进行移动
        for (let bg of this.node.children) {
            // 每秒往左边移动4像素
            bg.x -= this.speed * dt;
            // 如果一个背景超出屏幕，就移动到另一个背景的右边
            if (bg.x <= -this.width) {
                bg.x += this.width * 2;
            }
        }
    }
}
