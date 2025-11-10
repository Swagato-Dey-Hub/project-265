import React from "react";

function About() {
  return (
    <>
      <div className="h-full w-3/6 font-semibold flex flex-col gap-5 p-5">
       <p> What the app does (e.g., predicts loan eligibility based on input data).</p>
        <p>Technologies used (React, Python backend, ML model, etc.).</p>
         <p>Purpose (e.g., educational, demo, prototype, production).</p> 
         <p>Example: "This Loan Prediction App helps users determine their loan eligibility based on
         criteria like income, employment status, and credit history.
         Built with React and powered by a machine learning model, it provides quick
         predictions based on input data."</p>
         <p>How It Works Explain the workflow (user inputs data → ML model processes → result shown). Optional: a
         visual or flowchart.</p>
         <p>Disclaimer (Important if app uses predictions) Make it clear if the app is for educational/demo purposes.
         Mention that it's not financial advice or a replacement for a bank's loan process.
         Example: "Note: This tool is intended for demonstration purposes only
         and should not be considered financial advice."</p>
         <p>The Team / Creator Info (Optional) Short bio of developer(s), contact links, GitHub, LinkedIn.</p>
         <p>Open Source / Privacy (if applicable) Link to GitHub repo or privacy policy if you collect user data.</p>
      </div>
    </>
  );
}

export default About;
