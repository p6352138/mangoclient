// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var gamelogic = require('GameLogic')

cc.Class({
    extends: cc.Component,

    properties: {
        _index : 0,
        _initdata : false,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(cc.find('Canvas/ui/FightUI/targetTips') != null)
        {
            this.initUI();
            this._initdata = true;
        }

        this.spine = this.getComponent(cc.Sprite);
    },

    start () {

    },

    update (dt) {
        if(!this._initdata)
        {
            if(cc.find('Canvas/ui/FightUI/targetTips') != null)
            {
                this.initUI();
                this._initdata = true;
            }
        }
    },
    init(index){
        this._index = index;
    },
    initUI(){
        gamelogic.init();
        var mgr = cc.find('Canvas/ui/FightUI/targetTips').getComponent('InputMgr');
        var that = this;
        this.node.on('mouseup', function ( event ) {
            mgr.selelctTarget(that._index);
        });
        this.node.on('touchstart',function(event){
            mgr.selelctTarget(that._index);
            cc.log('target touchstart');
        });
        this.node.on('touchmove',function(event){
            mgr.selelctTarget(that._index);
            cc.log('target touchmove');
        });
        this.node.on('touchend',function(event){
            mgr.selelctTarget(that._index);
            cc.log('target touchend');
        });
        this.node.on('touchcancel',function(event){
            mgr.selelctTarget(that._index);
            cc.log('target touchcancel');
        });
    }

});
