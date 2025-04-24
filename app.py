from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL
import random
import json
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'quiz_db'

mysql = MySQL(app)

# Initialize database tables
def init_db():
    cur = mysql.connection.cursor()
    
    # Create users table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            streak INT DEFAULT 0,
            total_quizzes INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Create categories table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS categories (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            icon VARCHAR(50) NOT NULL
        )
    ''')
    
    # Create questions table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS questions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            category_id INT,
            question TEXT NOT NULL,
            options JSON NOT NULL,
            correct_answer INT NOT NULL,
            difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
            FOREIGN KEY (category_id) REFERENCES categories(id)
        )
    ''')
    
    # Create quiz_results table
    cur.execute('''
        CREATE TABLE IF NOT EXISTS quiz_results (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            category_id INT,
            score INT NOT NULL,
            difficulty VARCHAR(10) NOT NULL,
            time_taken INT NOT NULL,
            completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (category_id) REFERENCES categories(id)
        )
    ''')
    
    # Insert sample categories if they don't exist
    cur.execute("SELECT COUNT(*) FROM categories")
    if cur.fetchone()[0] == 0:
        categories = [
            ('Sustainable Development Goals', 'fa-globe-americas'),
            ('Carbon Footprint & Daily Habits', 'fa-cloud'),
            ('Eco-Friendly Practices', 'fa-leaf'),
            ('Climate Change Facts', 'fa-temperature-high'),
            ('Sustainable Living & Green Tech', 'fa-solar-panel'),
            ('Water, Energy, and Waste Management', 'fa-tint'),
            ('True or False Myths', 'fa-question-circle')
        ]
        cur.executemany(
            "INSERT INTO categories (name, icon) VALUES (%s, %s)",
            categories
        )
    
    mysql.connection.commit()
    cur.close()

# Initialize database when app starts
with app.app_context():
    init_db()

# Routes
@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    cur = mysql.connection.cursor()
    
    try:
        cur.execute(
            "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
            (data['username'], data['email'], data['password'])
        )
        mysql.connection.commit()
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    cur = mysql.connection.cursor()
    
    cur.execute(
        "SELECT id, username, streak, total_quizzes FROM users WHERE email = %s AND password = %s",
        (data['email'], data['password'])
    )
    user = cur.fetchone()
    cur.close()
    
    if user:
        return jsonify({
            "id": user[0],
            "username": user[1],
            "streak": user[2],
            "total_quizzes": user[3]
        })
    return jsonify({"error": "Invalid credentials"}), 401

@app.route('/api/categories', methods=['GET'])
def get_categories():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM categories")
    categories = cur.fetchall()
    cur.close()
    
    return jsonify([{
        "id": cat[0],
        "name": cat[1],
        "icon": cat[2]
    } for cat in categories])

@app.route('/api/questions/<category_id>', methods=['GET'])
def get_questions(category_id):
    difficulty = request.args.get('difficulty', 'easy')
    cur = mysql.connection.cursor()
    
    cur.execute(
        "SELECT * FROM questions WHERE category_id = %s AND difficulty = %s",
        (category_id, difficulty)
    )
    questions = cur.fetchall()
    cur.close()
    
    # Shuffle questions and return 20
    random.shuffle(questions)
    return jsonify([{
        "id": q[0],
        "question": q[2],
        "options": json.loads(q[3]),
        "correct": q[4]
    } for q in questions[:20]])

@app.route('/api/submit-quiz', methods=['POST'])
def submit_quiz():
    data = request.json
    cur = mysql.connection.cursor()
    
    try:
        # Update user stats
        cur.execute(
            "UPDATE users SET total_quizzes = total_quizzes + 1, streak = streak + 1 WHERE id = %s",
            (data['user_id'],)
        )
        
        # Save quiz result
        cur.execute(
            """INSERT INTO quiz_results 
               (user_id, category_id, score, difficulty, time_taken) 
               VALUES (%s, %s, %s, %s, %s)""",
            (data['user_id'], data['category_id'], data['score'], 
             data['difficulty'], data['time_taken'])
        )
        
        mysql.connection.commit()
        return jsonify({"message": "Quiz submitted successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()

@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    category_id = request.args.get('category_id')
    cur = mysql.connection.cursor()
    
    query = """
        SELECT u.username, qr.score, qr.difficulty, qr.completed_at
        FROM quiz_results qr
        JOIN users u ON qr.user_id = u.id
    """
    
    if category_id:
        query += " WHERE qr.category_id = %s"
        cur.execute(query, (category_id,))
    else:
        cur.execute(query)
    
    results = cur.fetchall()
    cur.close()
    
    return jsonify([{
        "username": r[0],
        "score": r[1],
        "difficulty": r[2],
        "completed_at": r[3].strftime("%Y-%m-%d %H:%M:%S")
    } for r in results])

@app.route('/api/user/badges', methods=['GET'])
def get_user_badges():
    user_id = request.args.get('user_id')
    cur = mysql.connection.cursor()
    
    cur.execute(
        "SELECT badge_type, earned_at FROM badges WHERE user_id = %s",
        (user_id,)
    )
    badges = cur.fetchall()
    cur.close()
    
    return jsonify([{
        "type": b[0],
        "earned_at": b[1].strftime("%Y-%m-%d %H:%M:%S")
    } for b in badges])

@app.route('/api/user/progress', methods=['GET'])
def get_user_progress():
    user_id = request.args.get('user_id')
    cur = mysql.connection.cursor()
    
    # Get user stats
    cur.execute(
        "SELECT streak, total_quizzes FROM users WHERE id = %s",
        (user_id,)
    )
    stats = cur.fetchone()
    
    if not stats:
        return jsonify({"error": "User not found"}), 404
    
    # Get recent quiz results
    cur.execute(
        """SELECT category_id, score, difficulty, completed_at 
           FROM quiz_results 
           WHERE user_id = %s 
           ORDER BY completed_at DESC 
           LIMIT 5""",
        (user_id,)
    )
    recent_quizzes = cur.fetchall()
    
    cur.close()
    
    return jsonify({
        "streak": stats[0],
        "total_quizzes": stats[1],
        "recent_quizzes": [{
            "category_id": q[0],
            "score": q[1],
            "difficulty": q[2],
            "completed_at": q[3].strftime("%Y-%m-%d %H:%M:%S")
        } for q in recent_quizzes]
    })

@app.route('/api/badges/check', methods=['POST'])
def check_badges():
    data = request.json
    user_id = data['user_id']
    cur = mysql.connection.cursor()
    
    try:
        # Get user stats
        cur.execute(
            "SELECT streak, total_quizzes FROM users WHERE id = %s",
            (user_id,)
        )
        stats = cur.fetchone()
        
        if not stats:
            return jsonify({"error": "User not found"}), 404
        
        streak, total_quizzes = stats
        
        # Check for new badges
        new_badges = []
        
        # Check quiz completion badges
        if total_quizzes >= 100 and not check_badge_exists(cur, user_id, 'legend'):
            new_badges.append('legend')
        elif total_quizzes >= 50 and not check_badge_exists(cur, user_id, 'expert'):
            new_badges.append('expert')
        elif total_quizzes >= 25 and not check_badge_exists(cur, user_id, 'advanced'):
            new_badges.append('advanced')
        elif total_quizzes >= 10 and not check_badge_exists(cur, user_id, 'intermediate'):
            new_badges.append('intermediate')
        elif total_quizzes >= 1 and not check_badge_exists(cur, user_id, 'beginner'):
            new_badges.append('beginner')
        
        # Check streak badges
        if streak >= 30 and not check_badge_exists(cur, user_id, 'streak30'):
            new_badges.append('streak30')
        elif streak >= 7 and not check_badge_exists(cur, user_id, 'streak7'):
            new_badges.append('streak7')
        elif streak >= 3 and not check_badge_exists(cur, user_id, 'streak3'):
            new_badges.append('streak3')
        
        # Award new badges
        for badge_type in new_badges:
            cur.execute(
                "INSERT INTO badges (user_id, badge_type) VALUES (%s, %s)",
                (user_id, badge_type)
            )
        
        mysql.connection.commit()
        return jsonify({"new_badges": new_badges})
        
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()

def check_badge_exists(cur, user_id, badge_type):
    cur.execute(
        "SELECT COUNT(*) FROM badges WHERE user_id = %s AND badge_type = %s",
        (user_id, badge_type)
    )
    return cur.fetchone()[0] > 0

@app.route('/api/questions/add', methods=['POST'])
def add_question():
    data = request.json
    cur = mysql.connection.cursor()
    
    try:
        cur.execute(
            """INSERT INTO questions 
               (category_id, question, options, correct_answer, difficulty) 
               VALUES (%s, %s, %s, %s, %s)""",
            (data['category_id'], data['question'], 
             json.dumps(data['options']), data['correct_answer'], 
             data['difficulty'])
        )
        mysql.connection.commit()
        return jsonify({"message": "Question added successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400
    finally:
        cur.close()

if __name__ == '__main__':
    app.run(debug=True) 