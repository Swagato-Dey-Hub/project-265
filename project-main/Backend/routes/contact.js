const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');



// post route to handle contact form submissions
router.post('/', async (req, res) => {
    // res.send('Hello Contact!');
    // I just have to get the data from frontend and save the data in the database.
    // And also I have to show user that the contact from is submitted successfully.
        try{
        let contact = new Contact();
        contact.name = req.body.name;
        contact.email = req.body.email;
        contact.phoneno = req.body.phoneno;
        contact.message = req.body.message;
        const document = await contact.save();
        console.log(document);
        res.json({document});
    }
    catch (err) {
        res.send(err);
        console.log(err);
    };
});   



module.exports = router;