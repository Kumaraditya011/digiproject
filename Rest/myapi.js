var express = require('express');
var router = express.Router();
var UserCollection = require('../Model/mymodel');


router.post('/adduser', (req, res) => {
    // var uc = new UserCollection({
    // Name: req.body.Name,
    // Address: req.body.Address,
    // Email: req.body.Email,
    // Password: req.body.Password,
    var uc = new UserCollection(req.body);
    uc.save();
    res.status(201).send(uc);

});
// uc.save((err, data)=>{
//     if(err)
//     res.status(500).json({ errmsg: err});
//     res.status(200).json({ userdata: data});
// });

router.get('/viewuser', (req, res) => {
    UserCollection.find({}, (err, data) => {
        res.json({ data });
    });
});


router.delete('/deleteuser/:id', (req, res)=>{
    UserCollection.findByIdAndDelete({_id: req.params.id},
        (err, data) => {
            res.json({ data});
        });
});

router.put('/updateuser', (req, res) => {
UserCollection.findById(req.body._id, (err, data) => {
    data.Name = req.body.Name;
    data.Address = req.body.Address;
    data.Email = req.body.Email;
    data.save();
    res.status(201).send(data);

});
});

module.exports = router;