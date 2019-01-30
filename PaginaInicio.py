from flask import Flask, render_template
from flask_mysqldb import MySQL

# Inicialización
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tesis'
mysql = MySQL(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/principal')
def principal():
    return render_template('index.html')


@app.route('/tablas')
def tablas():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM encuestas')
    datos = cur.fetchall()
    cur.close()
    return render_template('tablas.html', encuestas = datos)


@app.route('/graficos')
def graficos():
    return render_template('graficos.html')


if __name__ == '__main__':
    app.run(debug=True)
