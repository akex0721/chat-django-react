# Overview

This is a simple chat application. There is only one chat room, any user can
participate and when they join they are assigned a random name.

The backend API is implemented in Python, Django with Django Rest Framework.
The frontend is implemented in JavaScript, React and Redux.


# Setup

## Django

1. Create a Python 3 virtual env:

        $ python3 -m venv env

1. Activate the virtual env:

        $ . env/bin/activate

1. Install Python requirements:

        (env) $ pip install -r requirements.txt
        Collecting django<2.1,>=2.0 (from -r requirements.txt (line 1))
          ...
        Collecting django-cors-headers<2.2,>=2.1 (from -r requirements.txt (line 2))
          ...
        Collecting djangorestframework<3.8,>=3.7 (from -r requirements.txt (line 3))
          ...
        Collecting pytz (from django<2.1,>=2.0->-r requirements.txt (line 1))
          ...
        Installing collected packages: pytz, django, django-cors-headers, djangorestframework
        Successfully installed django-2.0.1 django-cors-headers-2.1.0 djangorestframework-3.7.7 pytz-2017.3

1. Initialize the database:

        (env) $ ./manage.py migrate
        Operations to perform:
          Apply all migrations: chat
        Running migrations:
          Applying chat.0001_initial... OK


## React

1. Install dependencies:

        $ cd frontend
        frontend$ npm install


# Starting the servers

* Start Django:

        (env) $ ./manage.py runserver
        Performing system checks...

        System check identified no issues (0 silenced).
        ...
        Django version 2.0.1, using settings 'chat.settings'
        Starting development server at http://127.0.0.1:8000/
        Quit the server with CONTROL-C.

* Start React:

        frontend$ npm start
        Compiled successfully!

        You can now view frontend in the browser.

          Local:            http://localhost:3000/
          On Your Network:  http://...:3000/

        Note that the development build is not optimized.
        To create a production build, use npm run build.

The Django API will now be listening on port 8000, and the React frontend on
port 3000. If you access the frontend, you can now start messaging!
