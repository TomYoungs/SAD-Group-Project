# Welcome to the release build of our SAD Group project

# Video Demo
[https://www.youtube.com/watch?v=Xi-CA_hOuCM](https://www.youtube.com/watch?v=Xi-CA_hOuCM "https://www.youtube.com/watch?v=Xi-CA_hOuCM")

This video runs through how to setup the project otherwise written version is below
# Repository
https://github.com/TomYoungs/SAD-Group-Project

This is a link to our GitHub repository for our project from here you can download the project if you so wished

-----

_There are 3 Stages to launching the project._

# Backend

## Navigating to the Backend

The first step in running the Backend involves navigating to the Backend folder in cmd

## Installing Dependencies

While in the Backend run the command `npm install`

## Connecting to our database or any database

In the submission files you should see a .env file, place this in the Backend folder.

## Launching the Backend

When you are finished downloading and installing all the dependencies run the command `npm run dev` to launch the Backend. The Backend will now be running and able to accept and handle API requests  

# Frontend

## Navigating to the Frontend

The first step in running the Frontend involves navigating to the Frontend folder in cmd

## Installing Dependencies

While in the Frontend run the command `npm install`

## Launching the Frontend

When you are finished downloading and installing all the dependencies run the command `npm start` to launch the Frontend. This should cause a window to open in your browser this is the login page for the project.


# The Database

## How to repopulate our database with test data

Navigate to the Backend folder in cmd. Then connect to the database with mogosh with the command:

`mongosh "mongodb+srv://dev:jM53gfP2feN5rAWG@sadcluster.ieqbvxw.mongodb.net/AttendanceSystem"`

Once you see the acceptance message that reads you have connected to the cluster and specifically the right database run the command load("ScriptToPopulate.mjs")
if it responds with true than the database has been filed with test data that fit our described user stories.
