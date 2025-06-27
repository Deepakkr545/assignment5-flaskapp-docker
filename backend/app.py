from flask import Flask, request

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.form
    name = data.get('name')
    email = data.get('email')
    return f"Received: Name={name}, Email={email}"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
