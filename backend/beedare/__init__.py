from flask import Flask
from backend.beedare.main.controllers import main
from backend.beedare.admin.controllers import admin

app = Flask(__name__)

app.register_blueprint(main, url_prefix='/')
app.register_blueprint(admin, url_prefix='/admin')