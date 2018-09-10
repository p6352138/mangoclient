/**********
 *        匹配协议
 *        matchType: "PVE_2",  匹配类型
 *        dgId:1        Dungeon id
 *           
 */

function matchProto(matchType, matchNum, dgId) {
    this.head = "connector.matchHandler.match";
    this.data = new matchData(matchType, matchNum, dgId);
}

function matchData(matchType, matchNum, dgId){
    this.matchType = matchType;
    this.matchNum = matchNum;
    this.dgId = dgId;
}

module.exports = matchProto;