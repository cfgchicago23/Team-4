from flask import Flask, jsonify
app = Flask(__name__)

# list to store comments
comments = [] 

@app.route('/add_comment', methods=['POST'])
def add_comment():

data = request.get_json()
comment_text = data.get('comment_text')

if comment_text:
    comments.append(comment_text)
    return jsonify({'message': 'Comment added successfully'}), 201
else:
    return jsonify({'error': 'Comment text is required'}), 400

@app.route('/get_comments', methods=['GET'])
def get_comments():

return jsonify({'comments': comments})
