// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        dmg : cc.Label,
        speed : 1000,
        _alpha : 255,
        _uimgr : null
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        this._alpha -= dt*this.speed;
        this.node.opacity  = this._alpha;

        if(this._alpha <= 0)
        {
            this._uimgr.collectDmg(this.node);
            this.node.active = false;
        }
    },

    init(combatUnit,dmg,uimgr){
        this.dmg.string = dmg.toString();
        this._uimgr = uimgr;
        this.node.position = cc.v2(combatUnit.agent.go.position.x + 10,combatUnit.agent.go.position.y + 200);

    }
});
