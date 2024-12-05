from flask import Flask, Response, jsonify, request
from flask_cors import CORS
import time
import sys

app = Flask(__name__)

CORS(app)


@app.route('/stream')
def stream():
    def event_stream():
        while True:
            yield "f data: Server messge at {time.time()}\n\n"
            sys.stdout.flush()
            time.sleep(5)
    return Response(event_stream(), mimetype="text/event-stream")

@app.route('/')
def home():
    return jsonify(success=True)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")