const crypto = require('crypto')
module.exports.createToken = token => {
    // 暗号： 贪心算法
    const ary = token.split('.')
    if (ary.length !== 3) {
        return
    }
    return {
        getExp: () => {
            // ##BEGIN## 代码已加密
            var str = new Buffer(ary[1], 'base64').toString()
            return JSON.parse(str).exp
            // ##END##
        },

        verify: key => {
            const hmac = crypto.createHmac('SHA256', key).update(ary[0]+ '.' +  ary[1]).digest('base64');
            return hmac === ary[2] + '='
            
        }
    }
}
