# Django Channels Example


This is a simple example of how to use [Django Channels](http://channels.readthedocs.org/en/latest/).
It's a simple real-time chat app.
You can create chat rooms and all in the same room can chat in real-time using WebSockets.

Currently this project is using sqlite for the database and the channel layer in memory.

## Instructions

To run this app locally, you'll need Python 3.

Install requirements `pip install -r requirements.txt`

Migrate the database `python manage.py migrate`

Run the project `python manage.py runserver`

>Based on [Heroku Channels Example](https://github.com/jacobian/channels-example)
