from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/principal')
def principal():
    return render_template('index.html')

@app.route('/tablas')
def tablas():
    return render_template('tablas.html')

@app.route('/graficos')
def graficos():
    return render_template('graficos.html')

if __name__ == '__main__':
    app.run(debug=True)