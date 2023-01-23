from flask_app import app
from flask_app.controllers import main



# @app.route('/', defaults={'pizza': ''})
# @app.route('/<path:pizza>')
# def catch_all(pizza):
#     return 'Invalid URL.'


if __name__=="__main__":
    app.run(debug=True)