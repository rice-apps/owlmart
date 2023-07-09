# OSA Owl-mart project

Owl Mart is a web application designed to facilitate buying and selling among Rice University students. It resembles a shopping app and allows students to sell various products such as furniture, clothing, accessories, etc. The main features include a scrollable grid of items, each displayed in a card format with product information, and a favorites page where users can view and manage their favorite items. The project will be implemented using JavaScript and the React framework for the frontend, and MongoDB for storing the item data.

# Developer Guide
Follow these steps to get started on developing:

## Prerequisites
Please install the latest NodeJS version. 

## Installation
To clone OwlMart, create a new directory to store the code, and CD into the directory from your terminal. Enter the following command to clone the directory:

`git clone https://github.com/rice-apps/owlmart.git`

In order to run the backend and frontend correctly, you should start the backend first.
`
cd server
npm install
npm start
`
Then, in another terminal window, do the same for the frontend.
`
cd client
npm install
npm start
`
Now, you will be able to view the app in your browser under localhost:3001

In the future, you can skil the npm install when starting the app.

## Setting Environment Variables
Owlmart uses one config.js file to set environment variables for local testing, and another config.js file for server testing. Please contact the Team Leads for access to these files.

# Contributing
In order to contribute to Carpool V3, you must make all of your edits on your own development branch. To do so, create a new branch from your command line:

`git checkout -b my-new-branch`
From here, all your changes should be pushed to this branch, and not master.

When you are done working on your feature, submit a pull request through GitHub, which must be approved by a Team Lead before it is merged with master.

# Best Coding Practices
We want to keep our code as clean as possible, so it's important to follow these best development practices before submitting your PR!
- Don't leave commented-out code in your files.
-  Make sure there are no warnings when React compiles after running npm start
-  Make sure there are no warnings in the JavaScript development console
-  Add comments to your files describing what each function does
-  When creating a PR, make sure you describe what the PR does, and how a Team Lead should review and test it!







