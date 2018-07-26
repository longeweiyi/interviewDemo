const Mock = require('mockjs')

Mock.mock('./api/technology', () => {
    return require('../api/technology.json')
})

Mock.mock('./api/advertising', () => {
    return require('../api/advertising.json')
})

Mock.mock('./api/design', () => {
    return require('../api/design.json')
})

Mock.mock('./api/product', () => {
    return require('../api/product.json')
})