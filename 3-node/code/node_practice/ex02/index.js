module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)

        // 暗号： 排序
        function dispatch(i) {
            // ##BEGIN## 代码已加密
            const fn = middlewares[i]
            if (!fn) {
                return args => args;
            }
            return fn(() => dispatch(i+1))
            // ##END##
        }
    }
}
