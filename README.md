# Lysabild
A Node.js project for experimentation with javascript unit testing

Using Rising Stack tutorial on unit testing in node.js :  https://blog.risingstack.com/node-hero-node-js-unit-testing-tutorial/


#How to run
    npm install
    npm test
    
# Possible problems
If not running on Windows modify package.json

     "test-unit": "set NODE_ENV=test:* & mocha --require co-mocha lib/*.spec.js"
     
to

    "test-unit": "NODE_ENV=test mocha --require co-mocha lib/*.spec.js"

   
