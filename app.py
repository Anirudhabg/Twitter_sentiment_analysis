from flask import Flask, request, jsonify
import joblib
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/analyze": {"origins": "chrome-extension://ehaainabljaoeigcahkijiikgdeflbek"}})

# Load the model and vectorizer
model = joblib.load('models/sentiment_model.pkl')
tfidf = joblib.load('models/tfidf_vectorizer.pkl')

# Function for basic text preprocessing
def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'\b\d+\b', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    text = data['text']
    preprocessed_text = preprocess_text(text)
    X_new = tfidf.transform([preprocessed_text])
    prediction = model.predict(X_new)[0]
    sentiment = { -1: 'Negative', 0: 'Neutral', 1: 'Positive' }.get(prediction, 'Unknown')
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)
