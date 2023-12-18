# Internal API for Optimiser

Requirements are in requirements.txt

* pip

        pip install -r requirements.txt

## 1. Run app.py
This will start the api at port 5000 of localhost.

## 2. Use Post and load json in format

Category : [Value : Int, Status : Int]

Status should be :

    0 : Neutral
    1 : Maximise
    -1 : Minimise

Note: Salary should always be neutral

Example

    {
    "Salary": [
        100000,
        0
    ],
    "Rent": [
        20000,
        0
    ],
    "Petrol/Diesel": [
        5000,
        -1
    ],
    "Public Transport": [
        2000,
        -1
    ],
    "Groceries": [
        3000,
        -1
    ],
    "Leisure": [
        2000,
        1
    ],
    "Personal": [
        8000,
        1
    ],
    "Savings": [
        60000,
        -1
    ]
    }

## 3. Result
Result will have message and value output.

* If calculation got result

        {
        "message": "Calculation complete",
        "result": {
            "Groceries": "3799.59",
            "Leisure": "2505.13",
            "Personal": "7833.29",
            "Petrol/Diesel": "3616.05",
            "Public Transport": "2493.36",
            "Rent": "20000.00",
            "Salary": "100000.00",
            "Savings": "58751.73"
        }
        }


* If calculation didn't find result

        {
        "message": "Solution not found",
        "result": {
            "Groceries": 30000,
            "Leisure": 1000,
            "Personal": 8000,
            "Petrol/Diesel": 20000,
            "Public Transport": 20000,
            "Rent": 20000,
            "Salary": 200000,
            "Savings": 0
        }
        }