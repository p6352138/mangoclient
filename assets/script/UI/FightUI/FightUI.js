var UIBase = require('UIBase')
var combatmgr = require('CombatMgr')
var dataCenter = require('DataCenter')
var datamgr = require('DataMgr')



cc.Class({
    extends : UIBase,
    properties: {
        cards : cc.Label,
        DiscardPile : cc.Label,
        ExhaustedPile :cc.Label,
        mp:cc.Label, 
        mpSpire : cc.Sprite,
        mp_fill:cc.Node,
        thew:cc.Label,
        thewSpire:cc.Sprite,
        thew_fill:cc.Node,
        HandsCardRoot : cc.Node,
        //CardsLayout : cc.Layout,
        _HandsCards : [],
        input : cc.Component,
        time:cc.Label,
        min_time:2,
        sec_time:60,   
        lineDot:cc.Node,
        lineDotSrc : cc.Component,
        action_time: 15,
        clockwise: false, // 是否为顺时针
        reverse: false, 
        play_onload: true, // 是否在加载
        delta_angle: 3,
        userName:cc.Label,
        playerHpBar:cc.ProgressBar,
        barLabel:cc.Label,
        headImg:cc.Sprite,
        heroIcon:cc.SpriteAtlas,
    },
    onLoad () {
        var self = this;   
        var resIndex = 0;
        for(var i=0;i<10;i++)
        {
            cc.loader.loadRes('UI/fightUI/Card', function(errorMessage, loadedResource){
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                if( !( loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                let item = cc.instantiate(loadedResource);
                resIndex ++ ;
                self.HandsCardRoot.addChild(item);
                self._HandsCards.push(item.getComponent('CardItem'));
               
                if(resIndex == 10)
                {
                    cc.loader.release('UI/fightUI/Card'); 
                }
            });   
        } 
        self.initData();
 
     },
     initData(){
         this.userName.string = dataCenter.userName;
         if(dataCenter.userName==="于小雪"){
            this.headImg.spriteFrame = this.heroIcon.getSpriteFrame('yuxiaoxue');
         }
         else{
            this.headImg.spriteFrame = this.heroIcon.getSpriteFrame('chenjingchou');
         }
        this.mp_fill.active = false;
        this.thew_fill.active = false;
        this.barLabel.string = combatmgr.getSelf().Hp + '/'+  combatmgr.getSelf().MaxHp;
     },
     updateBarLabel(HP,MaxHp){
        this.barLabel.string = HP.toString() +'/' + MaxHp.toString();
     },

    layout() {
        var num =  combatmgr.getSelf().handsPile.length;
        this.angle_set = [];
        var count = num / 2;
        var angle = 90 + count * this.delta_angle;
        if (num % 2 == 0) {
            angle -= (this.delta_angle * 0.5);
        }
        for(var i = 0; i < num; i ++) {
            this.angle_set.push(angle);
            //cc.log(angle);
            angle -= this.delta_angle;
        }

        for(var i = 0; i < num; i ++) {
            //var item = this.HandsCardRoot.children[i];
            var x,y,rotation;
            var itemCom = this._HandsCards[i];
            var r = (this.angle_set[i] / 180) * Math.PI;
           if(count < 3){
            x = -(count - 0.5) * 100 + i * 100;

           }
           else{
            x = -(count - 0.5) * 80 + i * 80;
           }
         //   x = -(count - 0.5) * 80 + i * 80;
          
           if(i < count){
                if(i<=0){
                    y = -(num-1)*count -15;
                }
                else{
                    y = this._HandsCards[i-1].y + 5*((count+1)-i);
                } 
            }

           if(i >= count){
               if( i == count ){
                   y = count*(count) - 15;
               }
               else{
                   y = this._HandsCards[i-1].y -5*(i + 1 - count);
               }
           }
            rotation = 360 - this.angle_set[i] + 90;
            //cc.log(360 - this.angle_set[i]);
            //cc.log(x + '#' + y);
            itemCom.change(x,y,rotation);
        }
    },

    loadCircle() {
        this.now_time = 1;
        this.is_running = false;
        if (this.play_onload) {
            this.start_clock_action(this.action_time);
        } 
    },
    start_clock_action: function(action_time) {
        if (action_time <= 0) {
            return;
        }
        this.action_time = action_time;
        this.now_time = 1;
        this.is_running = true;
    },  
    start () {
        var self = this;
        self.userName.string = dataCenter.userName;
        self.schedule(self.callback, 1);
        self.loadCircle();  
        },
       
    
    update (dt) {
        // if (!this.is_running) {
        //     return;
        // }
        // this.now_time += dt * 10;
        // var per = this.now_time / this.action_time;//百分比
        // this.mpSpire.fillRange = per;
        // this.thewSpire.fillRange = per;
        // if(per >0.6){
        //     this.is_running = false;
        // }    
      
    },
  
   
    callback () {
        this.sec_time--;
        if(this.sec_time == 0){
            this.min_time -= 1;
            this.sec_time = 59;
        }
        if(this.min_time >=0){
            if(this.sec_time < 10 && this.sec_time !=0){
                this.time.string ="" + this.min_time + ":0"  + "" + this.sec_time;
            }
            else{
                this.time.string ="" + this.min_time + ":"  + "" + this.sec_time; 
            }  
        }
        if(this.min_time < 0){
            this.unschedule(this.callback);
            this.min_time = 0;
            this.sec_time = 0;
            this.time.string ="" + this.min_time + ":0"  + "" + this.sec_time; 
        }
           },//定时器
    OnFresh : function(data){
        //.mp data.inHands
        this.ShowHandCards();
        this.DiscardPile.string = data.discardsNum.toString();
    },
    onFreshCardsNum(num){
        this.cards.string = num.toString();
    },
    onFreshMp(mp){
        if(mp<10){
            this.mp.string = " "+mp + "/10";
        }
        else{
            this.mp.string = mp + "/10";
        }
      
        this.mpSpire.fillRange = mp / 10;  
        if(mp/10==1){
            this.mp_fill.active = true;
        }
        else{
            this.mp_fill.active = false;
        }
    },
    onFreshThew(thew){
        this.thew.string = thew + "/10";
        this.thewSpire.fillRange = thew /10;
        if(thew/10==1){
            cc.log("fill------thew");
            this.thew_fill.active = true;
        }
        else{
           this.thew_fill.active = false;
        }
    },
    
    showNum(mp,disCard,thew){
        this.onFreshMp(mp);
        this.DiscardPile.string = disCard;  
       this.onFreshThew(thew);
    },
    
    ShowHandCards : function(){
        var player = combatmgr.getSelf();
        this.layout();

        //for(var i=0;i<player.handsPile.length;i++)
        for(var i=0;i<10;i++)
        {
            if(i < player.handsPile.length)
            {
                var pile = player.handsPile[i].id;
               
                var data = datamgr.card[pile];
                this._HandsCards[i].initData(i,data.CardName,data.CardQuality,data.CardImage,data.CardDescription,data.CardType,data.CastThew,data.CastMP);
              //  this._HandsCards[i].initData(i,data.CardName,data.CardQuality,data.CardImage,data.CardAttributes,data.CardType,data.CastThew);
                this._HandsCards[i].show();
              //  this._HandsCards[i].initData(player.handsPile[i].skillName,player.handsPile[i].spriteName,i);
                //cc.log('%s cur',i.toString(),' name :',player.handsPile[i].skillName);
            }
            else{
                this._HandsCards[i].hide();
            }
        }
    },
    UseCard : function(index){
        this._HandsCards[index].hide();
    },
    FreshHp : function(){
        var player = combatmgr.getSelf();
        this.playerHpBar.progress = player.Hp / player.MaxHp;
    }
});
