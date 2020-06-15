import os
from os import environ
import flask
from flask import Flask, flash, request, redirect, url_for, send_from_directory, render_template
from flask import render_template
from datetime import time
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploads/'
ALLOWED_EXTENSION = {'csv'}

app = flask.Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSION

@app.route('/pages/upload_csv')
def run_app():
    return flask.render_template("index.html")


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':

        if 'file' not in request.files:
            flash('Nie znaleziono pliku o rozszerzeniu csv w zapytaniu POST')
            return redirect(request.url)
        file = request.files['file']

        if file.filename == '':
            flash('Nie wybrano zadnego pliku')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return render_template("index.html", message="Zaimportowano dane!")
            # return redirect(url_for(uploaded_file(filename)))
    return render_template("index.html", message="Upload")


if __name__ == '__main__':
    app.run()

app.run(debug=True)