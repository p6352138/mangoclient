var effectListen = require('EffectListen')
var utility = require('utility')
var spawnSummoned = require('SpawnSummoned')
const constant = require('constants')

cc.Class({
    extends: effectListen,

    properties: {
        thisZIndex: 0,
        _thisValue : [],
        _left : 0,
        _right : 0,
    },

    start () {
        var temp = new Array();
        temp[4] = 0;
        temp[5] = -20;
        temp[6] = -35;
        temp[7] = -40;
        temp[8] = -55;
        this._thisValue[4] = temp;
        temp = new Array();
        temp[4] = 20;
        temp[5] =  0;
        temp[6] = -20;
        temp[7] = -35;
        temp[8] = -40;
        this._thisValue[5] = temp;
        temp = new Array();
        temp[4] =  35;
        temp[5] =  20;
        temp[6] =   0;
        temp[7] = -20;
        temp[8] = -35;
        this._thisValue[6] = temp;
        temp = new Array();
        temp[4] =  40;
        temp[5] =  35;
        temp[6] =  20;
        temp[7] =   0;
        temp[8] = -20;
        this._thisValue[7] = temp;
        temp = new Array();
        temp[4] =  55;
        temp[5] =  40;
        temp[6] =  35;
        temp[7] =  20;
        temp[8] =   0;
        this._thisValue[8] = temp;
        
        this._SwordRatation = this.getComponent('SwordRatation');

        //this.node.zIndex = this.thisZIndex;
        //cc.log('showSword showSword');
    },

    update (dt) {

    },
    showSword(){
        this._active = true;

        var seed = Math.seed;
        Math.seed = seed - 7;
        var left = Math.seededRandomInt(4, 8);
        Math.seed = seed - 13;
        var right = Math.seededRandomInt(4, 8);
        //var left = utility.RandomSeedInt(5,8);
        //var right = utility.RandomSeedInt(5,8);

        var src = this.getComponent('ShaderUtilsForWsword');
        src.setValue(left/10,right/10);
        var temp = this._thisValue[left];
        var angle = temp[right];
        this.node.rotation = angle;

        this._left = left;
        this._right = right;
        
        //cc.log('left ... ',this._left,' right =',this._right);
    },
    showCollect(callback){
        this.callback = callback;
        if(this._SwordRatation != null)
        {
            this._SwordRatation.show();
        }

        //cc.log('showCollect');
    },
    onFinish(){
        this._super();

        if(this.callback != undefined)
            this.callback();

        //cc.log('showSword onFinish');
    }
});
