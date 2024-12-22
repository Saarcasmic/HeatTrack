# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app, resources={
    r"/*": {
        "origins": ["http://localhost:3000"],
        "methods": ["GET", "POST", "PUT", "DELETE"],
        "allow_headers": ["Content-Type"]
    }
})

def generate_sample_data():
    campaigns = [
        {"id": "1", "name": "Summer Sale 2024"},
        {"id": "2", "name": "Spring Collection"},
        {"id": "3", "name": "New User Promo"},
        {"id": "4", "name": "Black Friday Deals"},
        {"id": "5", "name": "Holiday Sale 2024"}
    ]
    
    campaign_data = {"campaigns": []}
    
    for campaign in campaigns:
        # Initialize 7x24 matrices for each metric
        clicks = [[0] * 24 for _ in range(7)]
        impressions = [[0] * 24 for _ in range(7)]
        ctr = [[0] * 24 for _ in range(7)]
        
        # Fill matrices with random data
        for day in range(7):
            for hour in range(24):
                clicks[day][hour] = round(random.random() * 1000)
                impressions[day][hour] = clicks[day][hour] * round(random.random() * 10 + 10)
                ctr[day][hour] = round(clicks[day][hour] / impressions[day][hour], 3) if impressions[day][hour] > 0 else 0
        
        campaign_data["campaigns"].append({
            "campaignId": campaign["id"],
            "name": campaign["name"],
            "metrics": {
                "clicks": clicks,
                "impressions": impressions,
                "ctr": ctr
            }
        })
    
    return campaign_data

@app.route('/data', methods=['GET'])
def get_data():
    """
    GET endpoint to retrieve sample campaign data.
    """
    return jsonify(generate_sample_data())


@app.route('/data', methods=['POST'])
def post_data():
    """
    POST endpoint to accept new campaign data.
    """
    if not request.is_json:
        return jsonify({"error": "Request must be in JSON format"}), 400

    try:
        new_data = request.get_json()
        # Validate the required fields
        if not all(key in new_data for key in ["campaignId", "name"]):
            return jsonify({"error": "Missing required fields"}), 400

        # Generate metrics data for the new campaign
        clicks = [[round(random.random() * 1000) for _ in range(24)] for _ in range(7)]
        impressions = [[clicks[day][hour] * round(random.random() * 10 + 10) 
                    for hour in range(24)] for day in range(7)]
        ctr = [[round(clicks[day][hour] / impressions[day][hour], 3) if impressions[day][hour] > 0 else 0
                for hour in range(24)] for day in range(7)]

        campaign_data = {
            "campaignId": new_data["campaignId"],
            "name": new_data["name"],
            "metrics": {
                "clicks": clicks,
                "impressions": impressions,
                "ctr": ctr
            }
        }

        return jsonify(campaign_data), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    app.run(debug=True)
