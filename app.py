from flask import Flask, render_template, request, jsonify
from datetime import datetime

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    with open('client.log', 'a+') as f:
        f.write(f'{request.remote_addr}, {datetime.now()}\n')
        f.seek(0)
        count = len(f.readlines())
    return jsonify({'count': count})


if __name__ == '__main__':
    app.run(debug=True)