from flask import Flask request, session redirect, url_for

app = Flask(__name__)

#Signout route
@app.route('/signout', methods = ['POST'])


def logout():
    session.pop('username', None)
    return redirect(url_for('UserHome'))

if __name__ == __main__
app.run()