//
// Auto Generated Code
//

// Generate From Buff.xlsx
module.exports = {
	2: {
		ID: 2,
		BuffName: '护甲',
		Description: '增加80点护甲，持续15秒',
		Type: 'addArm',
		Logic: {arm:80},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff1',
		Effect: ''
	},
	1002: {
		ID: 1002,
		BuffName: '护甲',
		Description: '增加15点护甲，持续15秒',
		Type: 'addArm',
		Logic: {arm:15},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff2',
		Effect: ''
	},
	1004: {
		ID: 1004,
		BuffName: '剑灵乱舞',
		Description: '每使用1张卡牌，对随机一个敌方单位造成20点伤害',
		Type: 'useCardListener',
		Logic: {num:1,cardType:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 1104,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	1005: {
		ID: 1005,
		BuffName: '横剑摆渡',
		Description: '每使用5张攻击牌，则抽取1张牌',
		Type: 'useCardListener',
		Logic: {num:5,cardType:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 1105,
		IsHide: 0,
		Image: 'buff1',
		Effect: ''
	},
	1011: {
		ID: 1011,
		BuffName: '冻伤',
		Description: '每秒受到6点伤害，持续5秒',
		Type: 'dot',
		Logic: {dmg:6,count:5,time:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff2',
		Effect: ''
	},
	1015: {
		ID: 1015,
		BuffName: '纳灵诀',
		Description: '敌人每受到15次来自陈靖仇的伤害，陈靖仇获得1点灵力',
		Type: 'damageListener',
		Logic: {dmgCount:15},
		Stack: 0,
		StackLimit: 0,
		SkillID: 1105,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	1017: {
		ID: 1017,
		BuffName: '纳灵诀',
		Description: '敌人每次受到伤害，2%概率增加一张乌雪刃卡牌',
		Type: 'damageListener',
		Logic: {dmgCount:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 1107,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	1018: {
		ID: 1018,
		BuffName: '冰灵劲',
		Description: '每秒恢复1点灵力，持续5秒',
		Type: 'getMP',
		Logic: {getMP:1,count:5,time:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff2',
		Effect: ''
	},
	4004: {
		ID: 4004,
		BuffName: '万物复苏',
		Description: '每秒恢复80点生命，持续4秒',
		Type: 'heal',
		Logic: {heal:80,count:4,time:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff2',
		Effect: ''
	},
	4005: {
		ID: 4005,
		BuffName: '女娲体质',
		Description: '受到单次超过150点伤害的攻击，则抽1张卡牌',
		Type: 'onDamageListener',
		Logic: {onDmg:150},
		Stack: 0,
		StackLimit: 0,
		SkillID: 4105,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	4007: {
		ID: 4007,
		BuffName: '地灵庇护',
		Description: '如果有友方死亡，把自身一半的血量给予对方，此效果存在10秒消失',
		Type: 'dieListener',
		Logic: {target:"friend",count:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 4107,
		IsHide: 0,
		Image: 'buff1',
		Effect: ''
	},
	4008: {
		ID: 4008,
		BuffName: '女娲转世',
		Description: '每使用5张技能卡牌，为自己恢复2点灵力',
		Type: 'useCardListener',
		Logic: {num:5,cardType:2},
		Stack: 0,
		StackLimit: 0,
		SkillID: 4108,
		IsHide: 0,
		Image: 'buff2',
		Effect: ''
	},
	4010: {
		ID: 4010,
		BuffName: '陨石',
		Description: '增加50%受到的伤害',
		Type: 'modProp',
		Logic: {vulnerable:0.5},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	4011: {
		ID: 4011,
		BuffName: '朱雀之印',
		Description: '于小雪的攻击，对拥有朱雀之印的目标造成共鸣伤害，每层朱雀之印增加5点伤害，持续15秒',
		Type: 'fireMark',
		Logic: {fireDmg:5},
		Stack: 1,
		StackLimit: 99,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	4014: {
		ID: 4014,
		BuffName: '火焰外衣',
		Description: '每3秒对1个随机敌人造成20点伤害',
		Type: 'timeListener',
		Logic: {time:3},
		Stack: 0,
		StackLimit: 0,
		SkillID: 4114,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	4015: {
		ID: 4015,
		BuffName: '烈焰共鸣',
		Description: '每当抽取1张攻击卡牌，对1个随机敌人施加1层朱雀之印',
		Type: 'drawCardListener',
		Logic: {num:1,cardType:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 4115,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	100002: {
		ID: 100002,
		BuffName: '猛击',
		Description: '增加40%受到的伤害',
		Type: 'modProp',
		Logic: {vulnerable:0.4},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
	100003: {
		ID: 100003,
		BuffName: '巨浪',
		Description: '无法获取灵力，持续5秒',
		Type: 'recoverMpRate',
		Logic: {rate:0},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff1',
		Effect: ''
	},
	100005: {
		ID: 100005,
		BuffName: '幻象',
		Description: '增加400%受到的伤害',
		Type: 'modProp',
		Logic: {vulnerable:4},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 1,
		Image: '',
		Effect: ''
	},
	100105: {
		ID: 100105,
		BuffName: '模型缩小',
		Description: '',
		Type: 'modPropPct',
		Logic: {scale:0.6},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 1,
		Image: '',
		Effect: ''
	},
	100102: {
		ID: 100102,
		BuffName: '鳄鱼撕咬',
		Description: '每秒受到30点伤害，持续5秒',
		Type: 'dot',
		Logic: {dmg:30,count:5,time:1},
		Stack: 0,
		StackLimit: 0,
		SkillID: 0,
		IsHide: 0,
		Image: 'buff3',
		Effect: ''
	},
};
