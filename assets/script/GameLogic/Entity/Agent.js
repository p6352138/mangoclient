/**
 *      角色实体类
 *      by pwh         
 */

var loadRes = require('LoadRes')
var constant = require('constants')

 var Agent = function(path,pos,teamid,hp,loadok){
    this.go = null;
    this.hpbar = null;

    loadRes.load(path,(data)=>{
        this.go = cc.instantiate(data);
        this.go.parent = cc.find('Canvas/pool'); 
        this.go.position = cc.v2(pos.pos.x,pos.pos.y);
        this.go.scaleX = teamid == constant.Team.own ? constant.Team.enemy : -1;
        loadok();
    })

    loadRes.load('UI/hero/hpBar',(data)=>{
        this.hpbar = cc.instantiate(data).getComponent('hpBar');
        this.hpbar.node.parent = cc.find('Canvas/pool'); 
        this.hpbar.node.position = cc.v2(pos.pos.x,pos.pos.y+270);
        this.hpbar.freshen(hp,hp);
    })
 }

 module.exports = Agent;