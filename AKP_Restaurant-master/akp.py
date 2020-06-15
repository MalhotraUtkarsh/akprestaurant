from flask import Flask, render_template ,  request ,flash , url_for, redirect
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime ,date
from flask_mail import Mail

app = Flask(__name__)
app.config.update(
    MAIL_SERVER ="smtp.gmail.com" ,
    MAIL_PORT = "465",
    MAIL_USE_SSL = True,
    MAIL_USERNAME = "ArTechDevelopers007@gmail.com" ,
    MAIL_PASSWORD = "ArTechDevelopers007@@@@"

)
mail = Mail(app)
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:@localhost/akp"
db = SQLAlchemy(app)
app.secret_key = '_5#y2L"F4Q8z\n\xec]/'

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    number = db.Column(db.String(12),  nullable=False)
    email = db.Column(db.String(30),  nullable=False)
    msg = db.Column(db.String(180),  nullable=False)
    datetime = db.Column(db.String(20), nullable = True)

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    number = db.Column(db.String(12),  nullable=False)
    email = db.Column(db.String(30),  nullable=False)
    date = db.Column(db.String(12), nullable=False)
    time = db.Column(db.String(6),  nullable=False)
    party = db.Column(db.String(6),  nullable=False)
    msg = db.Column(db.String(180),  nullable=False)
    datetime = db.Column(db.String(20), nullable = True)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/contact", methods =['GET','POST'] )
def contact():
    if (request.method == 'GET'):
        return render_template("index.html")
    else:
         name = request.form.get('name')
         number = request.form.get('number')
         email = request.form.get('email')
         msg = request.form.get('msg')

         name_check = name.replace(' ','')
         if name_check.isalpha() != True:
             flash(u'Your Name is Invalid', 'error')
             return redirect(url_for('index'))
         elif number.isdigit() != True  or len(number) != 10 :
             flash(u'Your Number is Invalid', 'error')
             return redirect(url_for('index'))
         elif len(msg) == 0:
             flash(u'Your Message is Invalid', 'error')
             return redirect(url_for('index'))
         elif email.find('@') == -1 or email.find('.com') == -1:
             flash(u'Your EMAIL is Invalid', 'error')
             return redirect(url_for('index'))
        

         mail.send_message('NEW VISITOR ON YOUR WEBSITE', sender = "ArTechDevelopers007@gmail.com" , recipients = ["malhotrautkarsh123@gmail.com", "2001tushargupta@gmail.com"] ,
         body = name + ' ' +'tried to contact you by filling this form' + ' ' + 'Here is the details of your customer' + '\n '+ 'Name => ' + ' '+ name + '\n '+ 'Number => ' + ' '+ number + '\n '+ 'EMAIL => ' + ' '+ email + '\n ' + 'Message => ' + ' '+ msg + '\n ') 
         entry = Contact(name = name ,number = number , email = email , msg = msg, datetime = datetime.now())
         db.session.add(entry)
         db.session.commit()
         flash('Your Message has been sent to AKP Resturant', 'success')
         return render_template("index.html")

@app.route("/reserve", methods =['GET','POST'] )
def reserve():
    if (request.method == 'GET'):
        return render_template("index.html")
    else:
         
         name = request.form.get('name')
         number = request.form.get('number')
         email = request.form.get('email')
         msg = request.form.get('msg')
         datet = request.form.get('date')
         time = request.form.get('time')
         party = request.form.get('party')

         #VALIDATION OF FORM 
         name_check = name.replace(' ','')
         date_check = str(date.today())
         print(date_check)
         datet_test = datet.replace('-',"")
         print(datet_test)
         date_final = date_check.replace('-','')
         print(date_final)
         time_check = int(time)
         if name_check.isalpha() != True:
             flash(u'Your Name is Invalid', 'error')
             return redirect(url_for('index'))
         elif number.isdigit() != True  or len(number) != 10 :
             flash(u'Your Number is Invalid', 'error')
             return redirect(url_for('index'))
         elif len(msg) == 0:
             flash(u'Your Message is Invalid', 'error')
             return redirect(url_for('index'))
         elif email.find('@') == -1 or email.find('.com') == -1:
             flash(u'Your EMAIL is Invalid', 'error')
             return redirect(url_for('index'))
         elif datet_test < date_final:
             flash('Your DATE is Invalid')
             return redirect(url_for('index'))
         elif time.isdigit() != True or time_check < 1 or time_check > 24:
             flash("Your time is invalid")
             return redirect(url_for('index'))
         elif party.isalpha() != True:
             flash("Your party is invalid")
             return redirect(url_for('index'))



         mail.send_message('A RESERVATION ENQUIRY FOR YOUR RESTAURANT', sender = "ArTechDevelopers007@gmail.com" , recipients = ["malhotrautkarsh123@gmail.com", "2001tushargupta@gmail.com"] ,
         body = name + ' ' +'tried to contact you by filling this form' + ' ' + 'Here is the details of your customer' + '\n '+ 'Name => ' + ' '+ name + '\n '+ 'Number => ' + ' '+ number + '\n '+ 'EMAIL => ' + ' '+ email + '\n ' + 'Message => ' + ' '+ msg + '\n ' + 'Date => ' + ' '+ datet + '\n ' + 'Time => ' + ' '+ time + '\n ' + 'Party => ' + ' '+ party + '\n ') 

         entry = Reservation(name = name ,number = number , email = email , msg = msg, datetime = datetime.now(), date = datet , time = time , party = party)
         db.session.add(entry)
         db.session.commit()
         

         return render_template("index.html")


app.run()