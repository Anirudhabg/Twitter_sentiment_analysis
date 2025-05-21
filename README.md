---

# 🎯 SentimentScope: Real-Time Twitter Sentiment Analysis via Chrome Extension

**SentimentScope** is a powerful project that performs **real-time sentiment analysis** on Twitter content using machine learning techniques. It features a user-friendly **Chrome extension** that integrates directly with the Twitter interface and a robust **Flask backend** to classify tweets as **positive**, **negative**, or **neutral**.

---

## 🚀 Features

* 🔍 Analyze sentiments of tweets in real-time
* 🧠 Machine learning model trained on Twitter-specific data
* 🧩 Chrome extension for seamless Twitter integration
* 🌐 Flask backend API for processing and serving predictions
* 📊 Clear visualization and interpretation of sentiments

---

## 🧠 Technologies Used

* **Python**, **Flask**
* **Scikit-learn**, **NLTK**, **Pandas**
* **Jupyter Notebook**
* **JavaScript**, **HTML5**, **CSS3** (Chrome Extension)
* **Chrome Extensions API**

---

## 📁 Project Structure

```plaintext
Twitter_sentiment_analysis/
│
├── Dataset/                        # Contains the training/testing dataset
├── extensions/                    # Chrome extension files
│   ├── icons/                     # Extension icons
│   ├── models/                    # Saved model files for client use
│   ├── manifest.json              # Extension configuration
│   ├── background.js              # Background logic
│   ├── content.js                 # Content script for Twitter page
│   ├── popup.html                 # UI for the popup
│   └── popup.js                   # Logic for the popup
│
├── models/                        # Trained ML models (server-side)
├── twitter_sentiment_analysis_training.ipynb  # Jupyter notebook for training
├── app.py                         # Flask backend
├── requirements.txt               # Project dependencies
└── README.md                      # Project documentation
```

---

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Anirudhabg/Twitter_sentiment_analysis.git
cd Twitter_sentiment_analysis
```

### 2️⃣ Install Backend Dependencies

Ensure you have Python installed, then run:

```bash
pip install -r requirements.txt
```

---

## 💻 Running the Project

### ✅ Start the Flask Backend

```bash
python app.py
```

> The backend will be available at: [http://localhost:5000](http://localhost:5000)

---

### 🧩 Setup the Chrome Extension

1. Open Chrome and go to `chrome://extensions`.
2. Enable **Developer Mode** (top-right corner).
3. Click **Load unpacked** and select the `extensions/` directory.
4. Visit [Twitter](https://twitter.com).
5. Select any tweet, right-click on it, and choose **"Analyze Sentiment"**.
6. Click the extension icon to view the sentiment result.

#### 📸 Screenshots

| Analyze via Right Click                                                                                                                   | Analyze via Extension                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| ![Analyze Sentiment](https://github.com/Anirudhabg/Twitter_sentiment_analysis/blob/5f3d83c54b2205ee3ba7bc11c32373979a3de3ae/Images/1.png) | ![Extension Icon](https://github.com/Anirudhabg/Twitter_sentiment_analysis/blob/5f3d83c54b2205ee3ba7bc11c32373979a3de3ae/Images/2.png) |

---

## 📌 Contributing

Contributions are welcome! Feel free to fork the repo and submit a pull request.

1. Fork this repository
2. Create a branch: `git checkout -b feature/feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature/feature-name`
5. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

For any queries, reach out via [Email](mailto:anirudhabg@gmail.com) or connect via [GitHub](https://github.com/Anirudhabg).

---

> Crafted by Anirudha B G Somayaji
