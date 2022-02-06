from flask import Flask, request

from functions.matrix import python_matrix
from functions.latency import python_latency
from functions.filesystem import python_filesystem
from functions.factors import python_factors

app = Flask(__name__)

@app.route('/matrix')
def matrix():
    return python_matrix(request)

@app.route('/latency')
def latency():
    return python_latency(request)

@app.route('/filesystem')
def filesystem():
    return python_filesystem(request)

@app.route('/factors')
def factors():
    return python_factors(request)

app.run(host="0.0.0.0", port = 2000, debug = False)