# Auth0 Simple Registration Sample
This sample shows you how to collect additional data from the user after they sign up for an account.

#Running the example
In order to run the example you need to have npm and nodejs installed.

You also need to set the ClientSecret, ClientId and Domain for your Auth0 app as enviroment variables with the following names respectively: `AUTH0_CLIENT_SECRET`, `AUTH0_CLIENT_ID`, `AUTH0_DOMAIN`, and 'AUTH0_API_KEY'.

To generate an Auth0 API key go here: https://auth0.com/docs/apiv2
You need to grant the Update:users permission for the key.

For that, if you just create a file named `.env` in the directory and set the values like the following, the app will just work:

````bash
# .env file
AUTH0_CLIENT_SECRET=myCoolSecret
AUTH0_CLIENT_ID=myCoolClientId
AUTH0_DOMAIN=myCoolDomain
AUTH0_API_KEY=myapikey
````

Once you've set those 4 enviroment variables, just run `node server.js` and try calling [http://localhost:3000/](http://localhost:3000/)
