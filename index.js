var COMMON = require('./layer/common.js');

var ZDEFS = {
    CMD_STATUS: COMMON.CMD_STATUS,
    BEACON_MAX_DEPTH: 0x0F,
    DEF_NWK_RADIUS: 2 * (ZDEFS.BEACON_MAX_DEPTH),
    AF_DEFAULT_RADIUS: ZDEFS.DEF_NWK_RADIUS,
    CONFIG: {
        'ZDO_MGMT_MAX_NWKDISC_ITEMS': 5,
        'ZDO_MGMT_MAX_RTG_ITEMS': 10,
        'ZDO_MGMT_MAX_BIND_ITEMS': 3,
        'ZDO_MGMT_MAX_LQI_ITEMS': 2,
        'ZDO_MGMT_MAX_LQI_FRAG_NOSECURE_ITEMS': 3,
        'NWK_MAX_DEVICE_LIST': 20,
        'NWK_MAX_DEVICES': ZDEFS.CONFIG.NWK_MAX_DEVICE_LIST + 1     // One extra space for parent
    },
    AF: require('./layer/af.js'),
    DBG: require('./layer/dbg.js'),
    MAC: require('./layer/mac.js'),
    SAPI: require('./layer/sapi.js'),
    SYS: require('./layer/sys.js'),
    UTIL: require('./layer/util.js'),
    ZDO: require('./layer/zdo.js')
};

module.exports = ZDEFS;