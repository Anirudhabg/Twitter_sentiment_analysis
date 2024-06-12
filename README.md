# Twitter Sentiment Analysis

Twitter Sentiment Analysis is a project that performs sentiment analysis on Twitter data using machine learning techniques. It includes a Flask backend for serving the sentiment analysis model and a Chrome extension for analyzing sentiment directly from Twitter.

## Introduction

This project aims to analyze the sentiment of tweets posted on Twitter. It leverages machine learning models trained on labeled Twitter data to classify tweets as positive, negative, or neutral. The sentiment analysis model is served through a Flask backend, allowing users to submit text for analysis. Additionally, a Chrome extension is provided for convenient sentiment analysis directly from the Twitter website.

## Project Structure

- `Dataset/`: Contains the dataset used for training and testing.
- `extensions/`: Contains the Chrome extension files, including icons, models folder, manifest.json, background.js, content.js, popup.html, and popup.js.
- `models/`: Contains the trained machine learning models.
- `twitter_sentiment_analysis_training.ipynb`: Jupyter Notebook containing the training code for the sentiment analysis model.
- `app.py`: Flask backend for serving the sentiment analysis model.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Anirudhabg/Twitter_sentiment_analysis.git
   ```

2. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

### Flask Backend

1. Start the Flask backend:

   ```bash
   python app.py
   ```

2. The backend will start running at `http://localhost:5000`.

### Chrome Extension

1. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the `extensions` folder from the cloned repository.

2. Use the extension:
   - Navigate to Twitter and select a tweet.
   - Right Click and click on "Analyze Sentiment".
   - Next click on the extension icon to analyze the sentiment of the selected tweet.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
