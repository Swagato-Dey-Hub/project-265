from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Load saved pipeline (preprocessor + model)
model = joblib.load("iLoan.pkl")

# Feature order must match training
feature_names = [
    "Gender", "Married", "Dependents", "Education",
    "Self_Employed", "Property_Area",
    "ApplicantIncome", "CoapplicantIncome", "LoanAmount",
    "Loan_Amount_Term", "Credit_History"
]

app = Flask(__name__)

@app.route("/")
def home():
    return {"message": "Loan Prediction API is running!"}

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON request
        data = request.get_json()

        # Convert to DataFrame with column names
        # input_df = pd.DataFrame([data], columns=feature_names)
        input_df = pd.DataFrame([data])
        input_df = input_df.reindex(columns=feature_names)

        # Predict using pipeline
        prediction = model.predict(input_df)[0]

        return jsonify({
            "loan_status": "Approved" if prediction == 1 else "Rejected"
        })

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)                          
