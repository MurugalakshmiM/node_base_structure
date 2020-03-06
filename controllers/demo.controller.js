exports.demoGet = async (req, res) => {
    // try{
    //     return res.success(res, {name: 'muruga'})
    // }catch(err) {
    //     return res.error(res, 400, 'error')
    // }
    res.status(400).send('error')
}