# ResumeUploader

A web application that lets users upload their resumes online. Currently users can sign up, log in, upload, and view their resume. Users can only store one file and whenever they upload another it overwrites the previous file. The Home page should display 3 of the most recent resumes, but that feature is not yet finished. 

The frontend of the app is made with React from scratch without using the create-react-app, Bootstrap, and CSS and stores persistent memory on an Express (NodeJs) server that reads and write to an in-memory datastore using NeDB, which is equivalent to a MongoDB collection.

## Quick Start
The web app can be accessed at https://resume-project-3fb75.firebaseapp.com/

If you want to run the development build, clone the Github repository and run `npm start` in the root project directory.

## Status
The app can be accessed and used on the firebaseapp domain. I am currently implementing the Home page feature of displaying 3 of the newest resumes from other users. In the future, I also plan to add an option that lets you save resumes you saw that interest you.
