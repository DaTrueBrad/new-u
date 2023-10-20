# MVP
## Description
New U is a mobile application workout tracker. THis is a redo of my student capstone, redone not only with my extra year or knowledge, but in react native, somethng entirely new. This will be my first full-stack react native project.

The server portion of this project is private, as it contains secrets and methods that would reveal the backend structure of the app. For security, I cannot make it public.

## Features
- Create an Account
- Create new workouts
- Track workouts, PR's and bodyweight goals

# Tracker
<input type="checkbox"  /> Next step is on the homescreen dashboard, we need to make an axios call to get all the exercises  from all programs where userId matches the loggedIn user. This iwll be used for selecting what a user wants to track from THEIR history. This also means we will need an additional model built that will be a list of what each user wants to track on their dashboard.
<input type="checkbox"  /> If we want the user to track different pieces of information, then we will need to also give them the ability to track weight. Weight is a large poriton of exercise, so an additional table for weight history would be good. data flow woul look like this: as a user updates thier weight, it will drop a new row into the weight_history table, as well as replace their weight in their profile. 