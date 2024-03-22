// Learn TypeScript:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/2.4/manual/en/scripting/life-cycle-callbacks.html
const {ccclass, property} = cc._decorator;

@ccclass
export default class ScoreControl extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property
    width: number = 288;

    add (num: number) {
        this.label.string = (parseInt(this.label.string) + num).toString();
    }

    stop () {
        // 移动到画面中间，并修改字体大小为50
        this.node.setPosition(this.width / 2, 250);
        this.label.fontSize = 60;
    }
}
