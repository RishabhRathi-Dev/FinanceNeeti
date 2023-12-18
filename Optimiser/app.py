import json
from flask import Flask,jsonify,request
import optimiser as op

app = Flask(__name__)

about = {
    "Needs" : """ required_fields =['Salary',
                            'Rent',
                            'Petrol/Diesel',
                            'Public Transport',
                            'Groceries',
                            'Leisure',
                            'Personal',
                            'Savings'
                            
                            With [Int, Int] where first int is value and second int is status of minimize (-1), maximize (1) or neutral (0)
                             """
}

@app.route('/api', methods=['GET'])
def get_data():
    return jsonify(about)

received_data = []

@app.route('/api/optimise', methods=['POST'])
def post_data():
    try:
        # Get the JSON data from the request
        data = request.get_json()

        # Check if all required fields are present
        required_fields = ['Salary',
                            'Rent',
                            'Petrol/Diesel',
                            'Public Transport',
                            'Groceries',
                            'Leisure',
                            'Personal',
                            'Savings']

        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing field: {field}"}), 400

        result, success = op.optimise(data['Salary'][0], data)
        
        if success:
            response = {
                'result': result,
                'message': 'Calculation complete'
            }
        else :
            response = {
                'result': result,
                'message': 'Solution not found'
            }

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == '__main__':
    app.run()