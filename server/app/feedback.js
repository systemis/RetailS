module.exports = (router) => {
    var feedbackDM = require('../models/database-feedback.js');

    router.post('/send-feedback', (req, res) => {
        const feedback = req.body;

        console.log(feedback);

        feedbackDM.newFeedBack(feedback, rs => {
            res.send(rs);
        })

        return ;
    })
}