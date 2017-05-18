module.exports = router => {
    const path = require('path');

    router.get('/shop/', (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));
    router.get('/shop/:pageIndex', (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));
    router.get('/shop/category/:category/:pageIndex', (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));
    router.get('/shop/category/:category', (req, res) => res.sendfile(path.resolve(__dirname, "../../", "build/index.html")));
}