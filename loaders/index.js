const expressLoader = require('./express')
const routerLoader = require('./router.middleware')

module.exports.init = async ({ expressApp }) => {
  await expressLoader.init({ app: expressApp })
  await routerLoader.init({ app: expressApp })
  console.log('Express Intialized')
}
