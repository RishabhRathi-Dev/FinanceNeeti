from jmetal.core.solution import FloatSolution
from jmetal.algorithm.multiobjective.nsgaii import NSGAII
from jmetal.operator.crossover import SBXCrossover
from jmetal.operator.mutation import PolynomialMutation
from jmetal.core.problem import FloatProblem
from jmetal.util.termination_criterion import StoppingByEvaluations
import numpy as np
import json
from random import uniform

positions = {
    'Salary' : 0,
    'Rent' : 1,
    'Petrol/Diesel' : 2,
    'Public Transport' : 3,
    'Groceries' : 4,
    'Leisure' : 5,
    'Personal' : 6,
    'Savings': 7
}

class FinancialOptimizationProblem(FloatProblem):
    """
    This class extends the FloatProblem to define the custom problem for financial optimization based on passed parameters.

    Multi-Objective Nature of the problem is simplified for the better runtime with weights
    """
    def __init__(self, weights, parameter_ranges):
        super(FinancialOptimizationProblem, self).__init__()

        self.weights = weights
        self.parameter_ranges = parameter_ranges

        self.number_of_variables = len(parameter_ranges["min"])
        self.number_of_objectives = len(weights)
        self.number_of_constraints = 0  # Assuming no constraints for simplicity

        self.obj_directions = [self.MINIMIZE] * self.number_of_objectives
        self.obj_labels = ['Objective_' + str(i) for i in range(self.number_of_objectives)]

        self.lower_bound = parameter_ranges["min"]
        self.upper_bound = parameter_ranges["max"]

    def create_solution(self) -> FloatSolution:
        new_solution = FloatSolution(
            self.lower_bound,
            self.upper_bound,
            self.number_of_objectives,
            self.number_of_constraints
        )

        # Initialize decision variables randomly within the specified bounds
        new_solution.variables = [uniform(lb, ub) for lb, ub in zip(self.lower_bound, self.upper_bound)]

        return new_solution

    def evaluate(self, solution: FloatSolution) -> FloatSolution:
        # Get decision variables from the solution
        decision_variables = solution.variables

        # Check if decision_variables and weights have the same length
        if len(decision_variables) != len(self.weights):
            raise ValueError("Lengths of decision variables and weights do not match")

        # Filter out empty sublists
        valid_variables = [x for x in decision_variables if isinstance(x, (int, float))]

        # Calculate the weighted sum for each objective separately
        weighted_sums = sum(float(x) * float(w) for x, w in zip(valid_variables, self.weights))

        # Set the objective values in the solution
        for i in range(self.number_of_objectives):
            solution.objectives[i] = weighted_sums

        return solution


    def name(self) -> str:
        return "FinancialOptimizationProblem"

    def number_of_constraints(self) -> int:
        return self.number_of_constraints

    def number_of_objectives(self) -> int:
        return self.number_of_objectives

def create_parameter_ranges(parameter, category):
    """
    This function is for internal use.
    Its function is to take in the supplied parameter and create parameter ranges for optimiser algorithm used based on the parameter file which is populated with
    results from collected data

    Notes:
    parameter_ranges control if algorithm can even find a solution so here are few tips 
    if a parameter is wanted to increase then their weights are positive and there min is the current value and max of category
    if a parameter is compromised then their weights are negative and there max is current and min is 0 or min of category

    :params:
    parameter : Dictionary with keys can be compromised and increase with respective parameter in values
    category : System defined category in which user's salary comes under

    """
    parameter_ranges = {
        "min": [0 for i in range(len(positions.keys()))],
        "max": [0 for i in range(len(positions.keys()))]
    }


    json_file_path = './data/data.json'

    # Read JSON data from the file
    with open(json_file_path, 'r') as file:
        json_data = file.read()

    # Parse JSON data
    parsed_data = json.loads(json_data)

    for category_data in parsed_data:
        if category_data['Category'] == category:
            print(f"\nCategory: {category_data['Category']}")
            for key, value in category_data.items():
                print(f"{key}: {value}")

                # If maximizing then min should be max of min or what we already have and max should be greater and when minimizing then max should be current value and min should be nearly global min

                if 'Rent' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Rent']] = parameter['Rent'][0] * 1.5 if parameter['Rent'][1] else value
                elif 'Rent' in key and '_min' in key:
                    parameter_ranges['min'][positions['Rent']] = min(value, parameter['Rent'][0]) if parameter['Rent'][1] else value 

                elif 'Petrol' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Petrol/Diesel']] = parameter['Petrol/Diesel'][0] * 1.5 if parameter['Petrol/Diesel'][1] else value
                elif 'Petrol' in key and '_min' in key:
                    parameter_ranges['min'][positions['Petrol/Diesel']] = min(value, parameter['Petrol/Diesel'][0]) if parameter['Petrol/Diesel'][1] else value

                elif 'Public Transport' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Public Transport']] = parameter['Public Transport'][0] * 1.5 if parameter['Public Transport'][1] else value
                elif 'Public Transport' in key and '_min' in key:
                    parameter_ranges['min'][positions['Public Transport']] = min(value, parameter['Public Transport'][0]) if parameter['Public Transport'][1] else value

                elif 'Groceries' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Groceries']] = parameter['Groceries'][0] * 1.5 if parameter['Groceries'][1] else value
                elif 'Groceries' in key and '_min' in key:
                    parameter_ranges['min'][positions['Groceries']] = min(value, parameter['Groceries'][0]) if parameter['Groceries'][1] else value

                elif 'Leisure' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Leisure']] = parameter['Leisure'][0] * 1.5 if parameter['Leisure'][1] else value
                elif 'Leisure' in key and '_min' in key:
                    parameter_ranges['min'][positions['Leisure']] = min(value, parameter['Leisure'][0]) if parameter['Leisure'][1] else value

                elif 'Personal' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Personal']] = parameter['Personal'][0] * 1.5 if parameter['Personal'][1] else value
                elif 'Personal' in key and '_min' in key:
                    parameter_ranges['min'][positions['Personal']] = min(value, parameter['Personal'][0]) if parameter['Personal'][1] else value

                elif 'save monthly' in key and '_min' not in key:
                    parameter_ranges['max'][positions['Savings']] = parameter['Savings'][0] * 1.5 if parameter['Savings'][1] else value
                elif 'save monthly' in key and '_min' in key:
                    parameter_ranges['min'][positions['Savings']] = min(value, parameter['Savings'][0]) if parameter['Savings'][1] else value

            else :
                break
        else :
            print("Categories not Matching; Checking Next !!!")

    print(parameter_ranges)

    for k, v in parameter.items():
        if v[1] == 0 : 
            parameter_ranges['max'][positions[k]] = v[0]
            parameter_ranges['min'][positions[k]] = v[0]

    print(parameter_ranges)

    return parameter_ranges

def create_weights(parameter):
    """
    This function is for internal use.
    Its usage is to take parameter and category to generate correct weights based normalisation i.e. sums upto 1 to each side
    
    Notes:
    parameter_ranges control if algorithm can even find a solution so here are few tips 
    if a parameter is wanted to increase then their weights are positive and there min is the current value and max of category
    if a parameter is compromised then their weights are negative and there max is current and min is 0 or min of category

    :params:
    parameter : Dictionary with keys can be compromised and increase with respective parameter in values
    category : System defined category in which user's salary comes under

    """

    weights = [0 for i in range(len(positions.keys()))]
    p_count = 0
    n_count = 0

    for k, v in parameter.items():
        if v[1] == 1:
            weights[positions[k]] = 1
            p_count += 1
        elif v[1] == -1:
            weights[positions[k]] = -1
            n_count += 1

    for i in range(len(weights)):
        if weights[i] == -1:
            weights[i] /= n_count
        elif weights[i] == 1:
            weights[i] /= p_count

    return weights

def decorate_result(arr):
    """
    This function standardises the result output
    """

    positions_copy = positions.copy()
    for k, v in positions_copy.items():
        positions_copy[k] = arr[v]

    #print(positions_copy)

    return positions_copy



def optimise(salary, parameter):
    """
    This function takes required weights, parameter and target to initialize and run NSGAII algorithm.

    Parameter : {Salary : [Int, Int], Rent : [Int, Int], Petrol/Diesel : [Int, Int], Public Transport : [Int, Int], Groceries : [Int, Int], Leisure : [Int, Int], Stocks : [Int, Int], Personal : [Int, Int], Savings : [Int, Int]}

    Inner List : [Value, -1 | 0 | 1] where -1 is compromise, 0 is neutral, 1 is increase

    Note: Salary must always be neutral

    params:
    weights : Salary of the user
    parameter : Dictionary with keys can be compromised and increase with respective parameter in values
    """

    category = ''

    # Getting category based on salary
    if salary <= 300000/12:
        category = 'Below 3,00,000'
    elif salary <= 600000/12:
        category = '3,00,000 - 6,00,000'
    elif salary <= 1000000/12:
        category = '6,00,000 - 10,00,000'
    elif salary <= 1500000/12:
        category = '10,00,000 - 15,00,000'
    else:
        category = 'Above 15,00,000'

    parameter_ranges = create_parameter_ranges(parameter, category)
    
    # Specify weights and parameter ranges
    weights = create_weights(parameter)

    # Instantiate the FinancialOptimizationProblem class
    financial_problem = FinancialOptimizationProblem(weights, parameter_ranges)

    # Configure the optimization algorithm (NSGA-II)
    algorithm = NSGAII(
        problem=financial_problem,
        population_size=3000,
        offspring_population_size=200,
        crossover=SBXCrossover(probability=0.9, distribution_index=20),
        mutation=PolynomialMutation(probability=1.0 / financial_problem.number_of_variables, distribution_index=20),
        termination_criterion=StoppingByEvaluations(max_evaluations=2000)
    )

    # Run the optimization
    algorithm.run()

    # Get the results
    solutions = algorithm.get_result()

    condition_satisfied_solutions = [solution.variables for solution in solutions if salary - 3000 <= sum(solution.variables) - salary <= salary + 1000]

    if condition_satisfied_solutions:
        # Calculate the element-wise average
        average_solution = np.mean(condition_satisfied_solutions, axis=0)
        # Convert to a list of non-scientific notation strings
        average_solution = [f"{val:.2f}" for val in average_solution]
    
        print("Element-wise Average of Solutions:", average_solution)

        res = decorate_result(average_solution)
        return res, True

    else:
        print("No solutions satisfy the condition.")
        res = [i[0] for i in parameter.values()]
        res = decorate_result(res)
        return res, False
