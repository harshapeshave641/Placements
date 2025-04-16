from flask import Flask,render_template,request,jsonify,make_response
from pymongo import MongoClient
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity,unset_jwt_cookies,verify_jwt_in_request
from bson import ObjectId
from bson.regex import Regex
import re
import jwt
from functools import wraps

import certifi
ca = certifi.where()



app=Flask(__name__)
CORS(app)
# client = MongoClient("mongodb+srv://harshapeshave13:usersample@cluster0.kdqr3xq.mongodb.net/?retryWrites=true&w=majority&ssl=true&appName=Cluster0",tlsCAFile=ca)
# client=MongoClient("mongodb://localhost:27017")
client=MongoClient("mongodb+srv://hp641:lenovo@cluster0.7472t9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db=client.get_database('db')
login_manager=LoginManager(app)
company=db['company']
admin=db['admin']
bcrypt=Bcrypt(app)
app.config['JWT_SECRET_KEY'] = "12he32dv32dggo2dd2dv2v"
jwt=JWTManager(app)

@app.route('/',methods=['GET'])
def index():
    data = { 
        "Modules" :2, 
        "Subject" : "Company/Admin", 
        } 
  
    return jsonify(data) 


@app.route('/add/company',methods=["GET","POST"])
@jwt_required()
def add():
    if request.method=="POST":
        data=request.json
        name=data['Company name']
        drive=data['Drive mode']
        job=data['Jobs']
        password=data['Password']
        hash_password=bcrypt.generate_password_hash(password).decode('utf-8')
       
        print(hash_password)
        user_dict={
            "Company name":name,
            "Drive mode":drive,
            "Jobs":job,
            "Password":hash_password
        }
        print(user_dict)
        db.company.insert_one(user_dict)
        return jsonify({"status": "Data inserted successfully"})
    
from flask import request, jsonify
from functools import wraps
import jwt

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('Authorization')

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['12he32dv32dggo2dd2dv2v'])
        except:
            return jsonify({'message': 'Token is invalid!'}), 401

        return f(*args, **kwargs)

    return decorated


from flask import jsonify

@jwt_required()
@app.route('/login/company', methods=["POST"])
def login():
    if request.method == "POST":
        try:
            data = request.json
            email = data.get('email')
            password = data.get('password')
            print(email,password)
            if not email or not password:
                return jsonify({"message": "Missing credentials"}), 400

            company = db.company.find_one({"email": email})

            if not company:
                return jsonify({"status": "Company not found"}), 404

            if bcrypt.check_password_hash(company['password'], password):
                token = create_access_token(identity=str(company["_id"]))
                return jsonify({"message": f"Logged in as {email}", "token": token}), 200
            else:
                return jsonify({"message": "Invalid credentials"}), 401

        except Exception as e:
            return jsonify({"message": "Error", "error_message": str(e)}), 500
    
    if request.method=="OPTIONS":
        response = make_response('Login successful')
        response.headers['Access-Control-Allow-Origin'] = 'http://localhost:5173'
        response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response



@app.route('/create/Admin',methods=['POST'])  
# @jwt_required() 
# @admin_required  
def admin():
    if request.method=="POST":
        data=request.json
        name=data["Admin name"]
        password=data["Password"]
        confirm=data['Confirm']

        if not name or not password or not confirm:
            return jsonify({"status":"Missing fields"})
        hash=bcrypt.generate_password_hash(password).decode('utf-8')
        db.admin.insert_one(
            {
                "Admin name":name,
                "Password":hash
            }
        )
        return jsonify({"status":"Admin created"})

def check(a,b):
    company=db.company.find_one({"_id":ObjectId(a)})  
    if not company:
        return jsonify({"status":"Company not found"})
    student=db.users.find_one({"_id":ObjectId(b)})
    if not student:
        return jsonify({"status":"Student not found"})
    
@app.route('/post', methods=["POST"])
@jwt_required()
def add_job():
    data = request.json
    print("++++++++++++++")
    print(data)
    required_fields = ['jobTitle', 'companyName', 'driveMode', 'studentCount', 'salaryLPA', 'tech', 'eligibilityCGPA', 'eligibilityAmcat', 'eligibilityBack', 'branches','applicationDeadline','jobDescription']
    print(required_fields)
    if not all(field in data['formData'] for field in required_fields):
        print("Inside if")
        return jsonify({"status": "Missing required fields"}), 400
    print(data['formData']['companyName'])
    current_id=get_jwt_identity()
    # c = db.company.find_one({"companyName": data['formData']['companyName']})
    c=db.company.find_one({"_id":ObjectId(current_id)})
    #c = db.company.find_one({"companyName": "Sample Company"})
    print(c)
    if not c:
        return jsonify({"status": "Company not found"}), 404

    elig = {
        "CGPA": data['formData']['eligibilityCGPA'],
        "Amcat": data['formData']['eligibilityAmcat'],
        "Back": data['formData']['eligibilityBack']
    }

    job_name = data['formData']['jobTitle']
    print(job_name)
    if job_name in c['jobs']:
        return jsonify({"status": "Job with the same name already exists"}), 400
    
    c['jobs'][job_name] = {
        'Student_count': data['formData']['studentCount'],
        'Salary(LPA)': data['formData']['salaryLPA'],
        'Tech': data['formData']['tech'],
        'Eligibility': elig,
        'Branches': data['formData']['branches']
    }

    company_id = c["_id"]
    db.company.update_one({"_id": ObjectId(company_id)}, {"$set": {"jobs": c['jobs']}})
    print("After update")
    return jsonify({"status": "Job added successfully"}), 201





                   

        



@app.route('/login/Admin',methods=['POST'])
def login_admin():
    if request.method=="POST":
        data=request.json
        name=data["name"]
        password=data['password']
        if not name or not password:
            return jsonify({"status":"Missing fields"})
        sample=db.admin.find_one({"Admin name":name})
        if sample and bcrypt.check_password_hash(sample["Password"],password):
            token=create_access_token(identity=str(sample["_id"]))
            return jsonify({"status":f"Logged in as {name}",
                            "token":token})
        else:
            return jsonify({"status":"Credentials do not match"})

@app.route('/studs', methods=['GET'])
# @jwt_required()
def stud():
    if request.method == "GET":
        c = db.users.find({}, {"_id": 0, "MIS_ID": 1})  # Exclude _id field and include only MIS_ID field
        mis_ids = [student["MIS_ID"] for student in c]  # Extract MIS_ID from each student
        return jsonify({
            "Message": "Success",
            "Students": mis_ids
        })

@app.route('/register-company', methods=['POST'])
def register_company():
    data = request.json
    company_name = data.get('name')
    username = data.get('username')
    drive = data.get('drive')
    email = data.get('email')
    password = data.get('password')
    confirm = data.get('confirm')

    if not all([company_name, username, drive, email, password, confirm]):
        return jsonify({'message': 'All parameters are required'}), 400

    if db.company.find_one({'username': username}):
        return jsonify({'message': 'Username already exists'}), 400

    # Check if the email already exists
    if db.company.find_one({'email': email}):
        return jsonify({'message': 'Email already exists'}), 400

    # Check if password and confirm fields match
    if password != confirm:
        return jsonify({'message': 'Password and confirm fields do not match'}), 400

    # Hash the password
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Create an empty jobs dictionary
    jobs = {}

    # Insert the new company into the database
    company = {
        'companyName': company_name,
        'username': username,
        'drive': drive,
        'email': email,
        'password': hashed_password,  # Storing the hashed password as string
        'jobs': jobs
    }
    db.company.insert_one(company)

    return jsonify({'message': 'Company registered successfully'}), 201
@app.route('/register/company', methods=['POST'])
def register():
    if request.method == 'POST':
        data = request.json

    
    if not all(data.get(field) for field in ['Company name', 'Drive mode', 'Jobs_dict']):
      return jsonify({"status": "Missing fields"}), 400

   
    jobs_dict = data.get('Jobs_dict')

    
    for job_title, job_data in jobs_dict.items():
      if not all(job_data.get(field) for field in ['Student_count', 'Salary(LPA)', 'Tech', 'Eligibility', 'Branches']):
        return jsonify({"status": "Missing fields in job details for: {}".format(job_title)}), 400

     
      eligibility = job_data.get('Eligibility')
      if not all(eligibility.get(field) for field in ['CGPA', 'Amcat', 'Back']):
        return jsonify({"status": "Missing fields in eligibility for: {}".format(job_title)}), 400


    password = data.get('Password')
    confirm_pass = data.get('confirm')

    if not password or password != confirm_pass:
        return jsonify({"status": "Password fields not matching or missing"}), 400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

        
    existing_company = db.company.find_one({"Company name": data.get('Company name')})
    if existing_company:
        return jsonify({"status": "Company already exists"}), 409

    db.company.insert_one({
        "Company name": data.get('Company name'),
        "Drive mode": data.get('Drive mode'),
        "Jobs": data.get('Jobs_dict'),
        "Password": hashed_password
    })

    return jsonify({"status": "Company registered successfully"}), 201





@app.route('/delete/company', methods=['DELETE'])
@jwt_required()
def delete_company():
    if request.method == 'DELETE':
        try:
            current_user_id = get_jwt_identity()
            print("ID=",current_user_id)
            current_user = db.company.find_one({"_id": ObjectId(current_user_id)})
            
            if current_user is None:
                return jsonify({"status": "User not found"}), 404

            data = request.json
            name = current_user['Company name']
            password = data.get('Password')
            confirm = data.get('Confirm')
            
            if not password or not confirm:
                return jsonify({"status": "Password fields missing"}), 400

            sample = db.company.find_one({"_id": ObjectId(current_user_id)})
            if sample and bcrypt.check_password_hash(sample["Password"], password) and bcrypt.check_password_hash(sample["Password"], confirm):
                db.company.delete_one({"Company name": name})
                return jsonify({"status": f"{name} deleted successfully"})
            else:
                return jsonify({"status": "Password does not match"}), 401

        except Exception as e:
            return jsonify({"status": f"Error occurred: {str(e)}"}), 500

from urllib.parse import unquote

@app.route('/delete/<string:jobTitle>',methods=['DELETE'])
@jwt_required()
def dojo(jobTitle):
    if request.method=="DELETE":
        id=get_jwt_identity()
        decoded_job_title = unquote(jobTitle)
        modified_job_title = decoded_job_title.replace('%20', ' ')
        c=db.company.find_one({"_id":ObjectId(id)})
        if c:
            for i in c['jobs']:
                if i==modified_job_title:
                    d=c['jobs']

                    del d[modified_job_title]
                    
                    db.company.update_one({"_id": ObjectId(id)}, {"$set": {"jobs": d}})

                    return jsonify({"message":"Deleletd successfully"})
                
        




 
@app.route('/update/company', methods=['PUT'])
@jwt_required()
def update():
    if request.method == 'PUT':
        current_user_id=get_jwt_identity()
        current_user=db.company.find_one({"_id":ObjectId(current_user_id)})
        if current_user:
            data=request.json
            name=data['Company name']
            drive=data['Drive mode']
            jobs=data['Jobs']

        db.company.update_one({"_id": ObjectId(current_user_id)}, {"$set": {
            "Company name":name,
            "Drive mode": drive,
            "Jobs": jobs
        }})
        return jsonify({"status": "Data successfully updated"})

# @app.route('/studis',methods=['GET'])
# @jwt_required()
# def disp():
#     if request.method=='GET':
#         c=db.company_applications.find()
        

@app.route('/companies', methods=['GET'])
@jwt_required()
def give():
    if request.method == 'GET':
        companies = list(db.company.find())
        for company in companies:
            company['_id'] = str(company['_id'])
        return jsonify(companies)
    
@app.route('/companies/search', methods=['GET'])
# @jwt_required()
def search():
    company_name = request.args.get('name')

    if not company_name:
        return jsonify({"status": "Error", "message": "Company name is missing"}), 400

    regex_pattern = f".*{re.escape(company_name)}.*"
    regex = Regex(regex_pattern, "i") 
 
    companies = list(db.company.find({"Company name": regex}))

    
    for company in companies:
        company['_id'] = str(company['_id'])
    
    if not companies:
        return jsonify({"status": "Error", "message": "Company not found"}), 404

    return jsonify({"status": "Success", "data": companies}), 200


@app.route('/update/password',methods=['PUT'])
@jwt_required()
def up():
    if request.method=='PUT':
        data=request.json
        n=data['New Password']
        c=data['Confirm']
        
        if n!=c:
            return jsonify({"status":"Fields not matching"})
        else:
            current_user_id=get_jwt_identity()
            
            h=bcrypt.generate_password_hash(n).decode('utf-8')
            if db.company.find_one({"_id":ObjectId(current_user_id)}):
                current_user=db.company.find_one({"_id":ObjectId(current_user_id)})
                if bcrypt.check_password_hash(current_user["Password"],h):
                    return jsonify({"status":"Do not use previous passwords"})
                db.company.update_one({"_id":ObjectId(current_user_id)},{
                    "$set":{
                        "Password":h
                    }
                })
                
            else:
                try:
                    print("vyyyyyyyyyyyyyyyyyyyyycervrecrerev",current_user_id)
                    current_user=db.admin.find_one({"_id":ObjectId(current_user_id)})
                    if bcrypt.check_password_hash(current_user["Password"],h):
                        return jsonify({"status":"Do not use previous passwords"})
                    db.admin.update_one({"_id":ObjectId(current_user_id)},{
                        "$set":{
                            "Password":h
                        }
                    })
                except Exception as e:
                    return jsonify({"Status":f'Error{e}'})
            return jsonify({"staus":"Password updated"})    




@app.route('/single/<string:company_id>',methods=["GET"])
@jwt_required()
def show(company_id):
    if request.method=="GET":
        print(company_id)
        current_user_id=company_id
        current_user=db.company.find_one({"_id":ObjectId(current_user_id)})
        if current_user:
            current_user['_id'] = str(current_user['_id'])
            user_info = {
                "Company_name": current_user.get("companyName"),
                "Drive_mode": current_user.get("drive"),
                "Jobs":current_user.get("jobs")
            }
            return jsonify({
                "status":"success",
                "Userinfo":user_info,
                "token":current_user_id
            })
        else:
            return jsonify({"status":"Login required"})

@app.route('/single1',methods=["GET"])
@jwt_required()
def show1():
    if request.method=="GET":
        company_id=get_jwt_identity()
        print(company_id)
        current_user_id=company_id
        current_user=db.company.find_one({"_id":ObjectId(current_user_id)})
        if current_user:
            current_user['_id'] = str(current_user['_id'])
            user_info = {
                "Company_name": current_user.get("companyName"),
                "Drive_mode": current_user.get("drive"),
                "Jobs":current_user.get("jobs")
            }
            return jsonify({
                "status":"success",
                "Userinfo":user_info,
                "token":current_user_id
            })
        else:
            return jsonify({"status":"Login required"})

@app.route('/name',methods=["GET"])
@jwt_required()
def name():
    if request.method=="GET":
        id=get_jwt_identity()
        c=db.company.find_one({"_id":ObjectId(id)})
        return jsonify({"name":c["companyName"]})
@app.route('/logout', methods=['POST'])
@jwt_required()
def logout():
    if request.method == 'POST':
        try:
            res = make_response(jsonify({"status": "Logged out successfully"}))
            unset_jwt_cookies(res)
            return res, 200

        except Exception as e:
            return jsonify({"status": f"Error occurred: {str(e)}"}), 500


from collections import defaultdict
from datetime import datetime
@app.route('/analytics', methods=['GET'])
def job_analytics():
    if request.method == "GET":
        try:
            companies_cursor = db.company.find()
            companies = list(companies_cursor)  # Convert cursor to list
            
            analytics_data = {
                'total_companies': len(companies),
                'total_jobs': 0,
                'jobs_per_company': [],
                'salary_distribution': defaultdict(int),
                'tech_stack_distribution': defaultdict(int),
                'eligibility_stats': {
                    'cgpa': {'min': float('inf'), 'max': 0, 'avg': 0},
                    'amcat': {'min': float('inf'), 'max': 0, 'avg': 0}
                },
                'recent_jobs': []
            }

            total_cgpa = 0
            total_amcat = 0
            cgpa_count = 0
            amcat_count = 0

            for company in companies:
                jobs = company.get('jobs', {})
                num_jobs = len(jobs)
                analytics_data['total_jobs'] += num_jobs

                # Jobs per company
                analytics_data['jobs_per_company'].append({
                    'company_id': str(company['_id']),
                    'company_name': company.get('companyName', 'N/A'),
                    'job_count': num_jobs
                })

                for job_name, job_data in jobs.items():
                    # Salary Distribution
                    try:
                        salary = float(job_data.get('Salary(LPA)', 0) or 0)
                    except ValueError:
                        salary = 0
                    salary_range = f"{int(salary//5)*5}-{int(salary//5)*5+5}"
                    analytics_data['salary_distribution'][salary_range] += 1

                    # Tech Stack
                    techs = job_data.get('Tech', [])
                    if isinstance(techs, str):
                        techs = [techs]
                    for tech in techs:
                        analytics_data['tech_stack_distribution'][tech] += 1

                    # Eligibility
                    eligibility = job_data.get('Eligibility', {})
                    try:
                        cgpa = float(eligibility.get('CGPA', 0) or 0)
                    except ValueError:
                        cgpa = 0
                    if cgpa > 0:
                        analytics_data['eligibility_stats']['cgpa']['min'] = min(
                            analytics_data['eligibility_stats']['cgpa']['min'], cgpa)
                        analytics_data['eligibility_stats']['cgpa']['max'] = max(
                            analytics_data['eligibility_stats']['cgpa']['max'], cgpa)
                        total_cgpa += cgpa
                        cgpa_count += 1

                    try:
                        amcat = float(eligibility.get('Amcat', 0) or 0)
                    except ValueError:
                        amcat = 0
                    if amcat > 0:
                        analytics_data['eligibility_stats']['amcat']['min'] = min(
                            analytics_data['eligibility_stats']['amcat']['min'], amcat)
                        analytics_data['eligibility_stats']['amcat']['max'] = max(
                            analytics_data['eligibility_stats']['amcat']['max'], amcat)
                        total_amcat += amcat
                        amcat_count += 1

                    # Recent Jobs
                    if 'posted_date' in job_data:
                        posted_date = job_data['posted_date']
                        if isinstance(posted_date, str):
                            try:
                                posted_date = datetime.fromisoformat(posted_date)
                            except ValueError:
                                posted_date = None
                        if posted_date and (datetime.now() - posted_date).days <= 30:
                            analytics_data['recent_jobs'].append({
                                'company': company.get('companyName', 'N/A'),
                                'job_title': job_name,
                                'posted_date': posted_date.isoformat(),
                                'salary': salary
                            })

            # Averages
            if cgpa_count > 0:
                analytics_data['eligibility_stats']['cgpa']['avg'] = round(total_cgpa / cgpa_count, 2)
            if amcat_count > 0:
                analytics_data['eligibility_stats']['amcat']['avg'] = round(total_amcat / amcat_count, 2)

            # Cleanups
            analytics_data['jobs_per_company'].sort(key=lambda x: x['job_count'], reverse=True)
            analytics_data['salary_distribution'] = dict(analytics_data['salary_distribution'])
            analytics_data['tech_stack_distribution'] = dict(analytics_data['tech_stack_distribution'])

            return jsonify({
                'status': 'success',
                'data': analytics_data
            })

        except Exception as e:
            return jsonify({
                'status': 'error',
                'message': str(e)
            }), 500

if __name__=="__main__":
    app.run(debug=True)    


    


    
    

    
