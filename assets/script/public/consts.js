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

    MatchCode: {
      OK: 1,
      IN_QUEUE: 2,
    }
}