# E-Commerce
 

This project demonstrating the development of an e-commerce website built using the MERN (MongoDB, Express, React, Node.js) stack. 


## HOW TO RUN 


#### 1. Change in  Environment Variable 

Add the connection string of your database in  ".env" .

```
MONGO_URI="mongodb://<your-IP:PORT>/<database-name>"

```
 NOTE: Start Mangodb with: sudo systemctl start mongod


#### 2.  Install Dependencies (BACKEND )

Navigate to the project directory and install the necessary dependencies for both backend and frontend.

```
npm install

```

#### 3. Install Dependencies (Frontend)

```
cd frontend
npm install

```

#### 4. Populate the dababase


```
# to add 
npm run data:import

# if need some change , then destroy first then import.
npm run data:destroy

```
NOTE:  You can destroy and import  data while keeping the server on . 


##  Common  Assumption 

- The payment function wouldn't work .
- **BACKEND REQUIRENMENT** - It would only work on port "5000" , so if another process is using that port than  you to eliminate in order to run it. 
 -  sudo lsof -i :5000
 - sudo kill -9 <pid>

## How Q5 is integrated 
 - The advertisement is called externally and displayed in the carousel feature using a promise call.
- The product catalog articles are implemented through an external function. By running npm run data:import, items are loaded from data/product.js, which is an external JSON file.
