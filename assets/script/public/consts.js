/**
 * Date: 2018/6/11
 * Author: liuguolai
 * Description: 常量文件
 */
module.exports = {
    Code: {
        OK: 1,
        FAIL: 0
    },

    Login: {
        OK: 200,
        FAIL: 500
    },

    APP_ID: "wx7c329421cad774dc",
    APP_SECRET: "fa4649c58a61940a2b8497f640795a8d",

    CheckInResult: {
        SUCCESS: 0,  // 成功
        ALREADY_ONLINE: 1,  // 已经在线
    },

    // 匹配类型
    MatchType: {
        PVE_1: "PVE_1",  // 单人PVE
        PVE_2: "PVE_2",
        PVE_3: "PVE_3",
        PVP: "PVP"
    },

    // 匹配错误码
    MatchCode: {
        OK: 1,
        IN_QUEUE: 2,
    },

    // 选择英雄错误码
    SelectHeroCode: {
        OK: 1,
        BE_SELECEED: 2,  // 已被选
        NOT_EXIST: 3,  // 没有该英雄
        ALREADY_CONFIRMED: 4  // 已经确认了
    },

    // 战斗常量
    Fight: {
        CARDS_IN_HAND_MAX: 10,  // 手牌上限
        MP_MAX: 10,  // 灵力上限
    },

    // 战斗错误码
    FightCode: {
        OK: 1,
        PLAY_CARD_INFO_ERR: -1,  // 卡牌信息错误
        MP_NOT_ENOUGH: -2,  // 灵力不足
    },

    // 卡牌属性定义
    CardAttri: {
        NORMAL_CARD: 1,  // 非消耗
        CONSUME_CARD: 2, // 消耗卡牌
        PERMANENT_CONSUME_CARD: 3,  // 永久消耗卡牌
        INHERENT_CARD: 4,  // 固有
    },

    // 数据更新原因
    FightUpdateReason: {
        drawCard: "drawCard",
        useCard: "useCard"
    }
}