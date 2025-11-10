const express = require('express');
const router = express.Router();
// Axios for making HTTP requests
const axios = require('axios');
const e = require('express');

// post route to get loanstatus
router.post('/', async (req, res) => {
    // res.send('Hello World!');

    try {
        const userData = req.body;
        console.log(userData);

        //Ensure noo missing value is sent to Python model
        // Ensure no missing values or wrong types
    const requiredFields = [
      "Gender",
      "Married",
      "Dependents",
      "Education",
      "Self_Employed",
      "Property_Area",
      "ApplicantIncome",
      "CoapplicantIncome",
      "LoanAmount",
      "Loan_Amount_Term",
      "Credit_History",
    ];

    // Validate
    for (const field of requiredFields) {
      if (
        userData[field] === undefined ||
        userData[field] === null ||
        userData[field] === ""
      ) {
        return res.status(400).json({
          success: false,
          message: `Missing or invalid field: ${field}`,
        });
      }
    }

        // Send data to Python model API
        const response = await axios.post('http://127.0.0.1:8000/predict', userData);

        // Get prediction result
        const prediction = response.data;

        res.json({
            success: true,
            message: 'Loan status predicted successfully!',
            user_input: userData,
            result: prediction
        });
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).json({
            success: false,
            message: "Error loading Python API",
            error: error.message
        });
    }
})

module.exports = router;