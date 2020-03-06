const demoController = require('../controllers/demo.controller')
exports.init = (router)=>{
    router.get('/demo-get', demoController.demoGet)
}