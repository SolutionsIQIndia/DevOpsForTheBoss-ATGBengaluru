//Ubuntu Users

The commands to install MongoDB, NodeJS, Jenkins, Protractor and Git in Ubuntu are in "Ubuntu Installation.docx" File.  

//Check installed software version

mongod --version
node --version
npm --version
protractor --version

Ubuntu Users

//Clone Application

git clone https://github.com/SolutionsIQIndia/ATGBengaluru-DevOpsForTheBoss.git

//Change the directory to ATGBengaluru-DevOpsForTheBoss

cd ATGBengaluru-DevOpsForTheBoss

//specify path to start mongoose server by editing mongoServer.sh

vim mongoServer.sh
mongod -dbpath <YOUR Path>/ATGBengaluru-DevOpsForTheBoss/db/data

//Start the mongoose server by running the script

sh mongoServer.sh

//Open new terminal and Inside your project folder run

mongo < insertData.sh

//Start node server 

node server

//Check application is up and running in browser using

localhost:3000

//To run Protractor test

cd test
protractor conf.js

Windows Users

// Clone Application

git clone https://github.com/SolutionsIQIndia/ATGBengaluru-DevOpsForTheBoss.git

//Change the directory to ATGBengaluru-DevOpsForTheBoss

cd ATGBengaluru-DevOpsForTheBoss

// Create a directory called db 

mkdir db 

cd db

mkdir data

//Start Mongoose Server InSide the Application

mongod -dbpath <Your Path>/db/data

//In new terminal, inside Application, Insert data to DB

mongo < insertData.sh

//To Start node server

node server.js

//Check application is up and running in browser using

localhost:3000

//To run Protractor test

cd test
protractor conf.js
