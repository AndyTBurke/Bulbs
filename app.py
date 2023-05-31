from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/counter")
def counter():
    return render_template("counter.html")

@app.route("/decode")
def decode():
    return render_template("binary_to_text.html")

if __name__ == '__main__':
    app.run(debug=True)

