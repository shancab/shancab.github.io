from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/averagegrade', methods=['POST'])
def average_grade():
    data = request.get_json()
    total_grades = sum(data['grades'])
    average = total_grades / len(data['grades'])
    return jsonify({"average": average})

if __name__ == '__main__':
    app.run(debug=True)
