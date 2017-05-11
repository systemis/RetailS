module.exports = router => {
    const path = require('path');
    router.get('/public/upload/productimage/:filename', (req, res) => {
        console.log(req.params.filename);
        res.sendfile(path.resolve(__dirname, "..", "public/upload/productimage/" + req.params.filename));
    })
}