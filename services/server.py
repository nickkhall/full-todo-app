from flask import Flask, render_template, url_for
import pymongo

from config import *
from requests import Requests
from pymongo import MongoClient
import SimpleHTTPServer
import SocketServer

app = Flask(__name__, template_folder="templates")
#app.config.from_object('config')
#data = PyMongo(app, config_prefix='MONGO'
#requests = Requests(mongo=data)

# Route all these to the public
@app.route("/")
def entry_point():
    return 'hello'

if __name__ == '__main__':
    app.run(port=3030, debug=True)

port = 3030

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", port), Handler)

print('Serving on port:', port)
httpd.serve_forever()
