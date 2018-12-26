/*
* author: wancheng
* date: 2018-12-26
* desc:
*/

module.exports = api => {
    return (options, ...params) => {
        return new Promise((resolve, reject) => {
            api(Object.assign({}, options, { success: resolve, fail: reject }), ...params)
        })
    }
};
