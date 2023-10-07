from flask import Flask, request, render_template, redirect, url_for, session

app = Flask(__name__)

app.secret_key = '1002' 

# Sample user data (replace with a database)
users = {
    'user1': {'password': 'password1'},
    'user2': {'password': 'password2'},
}

# Login route
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        if username in users and password == users[username]['password']:
            session['username'] = username
            return redirect(url_for('members'))
        else:
            return 'Login failed. Please try again.'

    return render_template('login.html')

# Members route (requires login)
@app.route('/members')
def members():
    if 'username' in session:
        return f'Welcome, {session["username"]}!'
    else:
        return redirect(url_for('login'))

# Logout route
@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('login'))

