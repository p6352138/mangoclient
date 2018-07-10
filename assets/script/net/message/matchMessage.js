var combatMgr = require('CombatMgr')
var gameLogic = require('GameLogic')

var fight = {
    _uimgr : null,

    init : function(){
        this._uimgr = cc.find('Canvas').getComponent('UIMgr');
        var that = this;
        pomelo.on('onBeginSelect', function (data){
            cc.log('匹配成功, 开始选英雄', data.teamInfo);
            
            var ui = that._uimgr.getCurMainUI();
            ui.showSelect();
        });
    
        pomelo.on('onSelectHeroNotify', function (data){
            cc.log('%s选择英雄:%s', data.uid, data.heroid);
        });
    
        pomelo.on('onConfirmHeroNotify', function (data){
            cc.log('%s确认英雄:%s', data.uid, data.heroid);
        });
    
        pomelo.on('onEnterLoadCD', function (data){
            cc.log('加载前倒计时:',data);
            var ui = that._uimgr.getCurMainUI();
            ui.selectScr.beginLoadCD();
        });
    
        pomelo.on('onStartLoad', function(data){
            cc.log('开始加载战斗：', data.teamInfo, data.myInfo);
            
            combatMgr.initCombat(data);
        });
    
        pomelo.on('onFightBegin', function(data){
            cc.log('战斗开始 ',data);

            var ui = that._uimgr.getCurMainUI();
            ui.ShowHandCards();
            gameLogic.init();
        });
    
        pomelo.on('onUseCard', function(data){
            cc.log('使用卡牌：', data);

            //data.mp
            //data.inHands
            //data.discardsNum
            var ui = that._uimgr.getCurMainUI();
            ui.ShowHandCards();
        });
    
        pomelo.on('onFightAttriUpdate', function(data){
            //cc.log('属性更新：',data );

            //combatMgr.getSelf();
        });

        pomelo.on('onDrawCard', function(data){
            cc.log('抽牌', data);
            
            var ui = that._uimgr.getCurMainUI();
            ui.onFreshCardsNum(data.cardsNum);
            combatMgr.getSelf().onDrawPile(data.inHands);
            ui.ShowHandCards();
        });
    
        pomelo.on('onMpRecover', function(data){
            //cc.log('灵力恢复', data);
            
        });
    
    },
    OnFreshPile : function(data)
    {
       
    }

}

module.exports = fight;