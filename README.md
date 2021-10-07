# <u>DAW Project 2021:</u>

Full-stack web app made for the final degree project using React, Tailwind CSS, Express, MongoDB and Nodemailer (with some handlebars - HBS).

### <u>Description:</u>

SPA made during my studies at [IlernaFP](https://www.ilerna.es/es) (Ilerna Online).
It uses [React](https://reactjs.org/) to manipulate the DOM and update it each time a change is detected.

The styling has been made using [TailwindCSS](https://tailwindcss.com/), it's a (mobile first) CSS framework. Thanks to the breakpoints (sm, md, lg, xl, 2xl) that Tailwind offers, I made the web fully responsive, much faster than with SCSS/CSS.

Everything on the app has been made using [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript).

The newsletter has been made using [Nodemailer](https://nodemailer.com/about/), a nodeJS module used to send mail. In my case I used some HBS dynamic templates to send as HTML emails.

### <u>How to test/execute the app?:</u>

Use the command **`npm i`** or **`yarn add`** to install all the necessary node modules.
Then you should use your MongoDB GUI (or shell) of preference, in my case it's MongoDB Compass. Here you have to create a DB named **`proyectoDAW2021`** and 3 collections inside the new DB:
- **`newsletter`**
- **`people`**
- **`products`**

Once you create the 3 collections, you have to import the data inside them. The JSON files are located inside the db folder, you have to import the corresponding JSON file, the newsletter.json file in the newsletter collection, etc..

Then, you must create a .env file in the root of the project. Inside this file you should type your [DB URL](https://docs.mongodb.com/manual/reference/connection-string/) key using the following format:

**`DB_URL=YOUR_MONGODB_CONNECTION_STRING\proyectoDAW2021`**

**`NOTE:`** in case you want to use or test the mail function you will have to create 3 new keys inside the .env and fill them with your mail provider and account info:
- **`EMAIL_HOST=EMAIL_HOST(IT'S MOST LIKELY A DOMAIN)`**
- **`EMAIL_USER=YOUR_EMAIL_USERNAME(INCLUDING THE @ PART)`**
- **`EMAIL_PASSWORD=YOUR_EMAIL_PASSWORD`**

Once you have completed the previous steps you can execute the following command in the root folder:

**`yarn start`** or **`npm start`**

This command runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) once you execute the command to view it in the browser. (It usually opens a new tab automatically in your default browser when you use the command).

### <u>Preview (desktop view):</u>

##### **_Presentation component:_**

![Photo can't be loaded.](https://i.imgur.com/waWAizJ.png)

##### **_Products component:_**

![Photo can't be loaded.](https://i.imgur.com/E1YVvjI.png)

##### **_People component:_**

![Photo can't be loaded.](https://i.imgur.com/3a0F7SQ.png)

##### **_Newsletter component:_**

![Photo can't be loaded.](https://i.imgur.com/QT9dAJO.png)

### <u>More Info:</u>

<small>This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).</small>
