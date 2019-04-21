from flask import Flask, render_template,jsonify, make_response, request
from flask_mysqldb import MySQL

# Inicialización
app = Flask(__name__)

# Mysql Connection
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'tesis'
mysql = MySQL(app)

#Uso en python anyware
#app.config['MYSQL_HOST'] = 'keviin.mysql.pythonanywhere-services.com'
#app.config['MYSQL_USER'] = 'keviin'
#app.config['MYSQL_PASSWORD'] = 'naruto29'
#app.config['MYSQL_DB'] = 'keviin$tesis'
#mysql = MySQL(app)

@app.route('/')
def default():
    return render_template('inicio.html')

@app.route('/Inicio')
def inicio():
    return render_template('inicio.html')

@app.route('/Introducción')
def Introduccion():
    return render_template('Introducción.html')

@app.route('/Problemática')
def Problematica():
    return render_template('Problemática.html')

@app.route('/MarcoLógico')
def MarcoLogico():
    return render_template('MarcoLógico.html')

@app.route('/TipoDeInvestigación')
def TipoDeInvestigacion():
    return render_template('TipoDeInvestigación.html')

@app.route('/PoblaciónMuestra')
def PoblacionMuestra():
    return render_template('PoblaciónMuestra.html')

@app.route('/GráficosEstadísticos')
def GraficosEstadisticos():
    return render_template('GráficosEstadísticos.html')

@app.route('/TablaDeEncuestas')
def TablaDeEncuestas():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM encuestas')
    datos = cur.fetchall()
    cur.close()
    return render_template('TablaDeEncuestas.html', encuestas=datos)

@app.route('/Metodología')
def Metodologia():
    return render_template('Metodología.html')

@app.route('/TablaDeVariables')
def TablaDeVariables():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM factores')
    datos = cur.fetchall()
    cur.close()
    return render_template('TablaDeVariables.html', factores=datos)

@app.route('/Resultados')
def Resultados():
    return render_template('Resultados.html')

@app.route('/Bibliografía')
def Bibliografia():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM bibliografias')
    datos = cur.fetchall()
    cur.close()
    return render_template('Bibliografía.html', bibliografias=datos)

@app.route('/Simulacion')
def Simulacion():
    return render_template('Simulacion.html')

@app.route('/obtenerRelaciones', methods=['GET'])
def obtenerRelaciones():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM relaciones where idmodelo=1')
    datos = cur.fetchall()
    cur.close()
    payload = []
    content = {}
    for result in datos:
        peso=result[3]
        if peso == "Indeterminado" :
            peso=result[3]
        else:
            peso=float(result[3])
        print(peso)
        content = {'factor': result[1], 'relacion': result[2], 'peso:': peso,'escala' : result[4],'tipo' : result[5]}
        payload.append(content)
        content = {}
    return jsonify(payload)

if __name__ == '__main__':
    app.run(debug=True)
