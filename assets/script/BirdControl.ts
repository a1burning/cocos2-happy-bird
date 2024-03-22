// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

import ScoreControl from './ScoreControl';
const {ccclass, property} = cc._decorator;

@ccclass
export default class BirdControl extends cc.Component {

    // 小鸟控制器，通过属性的方式将小鸟的节点传进来，这样小鸟的组件也会过来
    @property(ScoreControl)
    score: ScoreControl = null;

    @property
    num: number = 10;

    onLoad () {
        // 开启物理系统
        cc.director.getPhysicsManager().enabled = true;
    }

    start () {

    }

    // 飞翔
    fly() {
        // 获取当前刚体，给一个线性的速度
        // cc.v2(0, 150) 是纵坐标有速度
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 140);
    }

    onBeginContact(contact, self, other) {
        if (other.tag === 1) {
            this.score.add(this.num);
        } else {
            // 游戏结束
            this.score.stop();
        }
    }

    // update (dt) {}
}
