// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class PipeControl extends cc.Component {

    @property
    speed: number = 50;

    @property
    width: number = 288;

    update (dt) {
        // 两个管道进行移动
        for(let pipe of this.node.children) {
            pipe.x -= this.speed * dt;
            if (pipe.x <= -this.width) {
                pipe.x += this.width * 2;
                // 默认的高度是0 - 158的高度随机数
                pipe.y = Math.random() * 158;
            }
        }
    }
}
