<!-- How to store Session in MySQL Database using express-mysql-session -->

# **How to store Session in MySQL Database using express-mysql-session**

[![How to store Session in MySQL Database using express-mysql-session](../../../public/images/img_temp/011_medium.png)](https://darifnemma.medium.com/how-to-store-session-in-mysql-database-using-express-mysql-session-ae2f67ef833e)
[![Visual Studio Code](../../../public/images/img_temp/vscode-logo.png)](https://code.visualstudio.com/docs)

# How to store Session in MySQL Database using express-mysql-session

[

![Darif Nemma](https://miro.medium.com/v2/resize:fill:88:88/1*gxSHBNZhqA80I1T0YWhF6Q.png)

](https://darifnemma.medium.com/?source=post_page-----ae2f67ef833e--------------------------------)

[Darif Nemma](https://darifnemma.medium.com/?source=post_page-----ae2f67ef833e--------------------------------)

![](https://miro.medium.com/v2/resize:fit:630/1*DMdzsAEidyZYA3i_ayPuiw.png)

We use sessions to allow the server to maintain the state across many page requests and keep users logged in. So when they revisit a website, they don’t have to put their credentials in again.

A session creates a unique ID per user recorded on the user’s browser as a cookie and stores some information on that user in the server. Whenever that user makes a request, the server will match a user with the proper session data.

In this article, we will look at sessions and give you a nice and simple way to store them in MySQL database using express-mysql-session.

# Why storing sessions in a Database?

Sessions work by assigning to each visitor a unique identifier. When you save data into the session, the session will store this information into a specific file on the server. The unique identifier is also stored as a cookie on your computer. One problem you may encounter with storing sessions in a file system on the server is using a shared hosting plan. In this case, if the server is not configured correctly, it would be possible for someone to get access to your Sessions.

To avoid the potential problem of an attacker using JavaScript to modify a cookie that affects session data, you can store the session data in a database that you create. Then, the session data is passed back and forth between the application and that database. This way, only someone with access to the database could change the session data.

Storing Sessions in a database is easy, and there are no adverse effects for your users. It may also be advantageous if you need to expand your application to multiple servers in different regions.

# Easy way to store session in MySQL Database using express-mysql-session

Express-mysql-session is a MySQL session store for express.js, and it is mainly used to upload session data to the MySQL database. This module creates a database table to save session data, but if you are using an older version of MySQL than MySQL 5.5.3, create your sessions table before initializing the MySQLStore. Click [HERE](https://devdotcode.com/how-to-create-mysql-database/) if you need help on how to create MySQL database and tables with node.js.

This npm module is always used with an express-session middleware as a store. Here is how it is implemented:

The first thing we need to install express-session:

```bash
npm install --save express-session
```

Then install express-mysql-session and add it to your application’s package.json file.

```bash
npm install --save express-mysql-session
```

When we are done installing, we will import the two modules. Then we are going to set this up in our start server as middleware for express. If you want to know more details about our start server, go ahead and check this article: [Complete Guide to Build a RESTful API with Node.js and Express](https://devdotcode.com/complete-guide-to-build-a-restful-api-with-node-js-and-express/).

Now we have the express-mysql-session installed, we can import it and add it by creating a new store, and we can pass any options we want or just use the default one.

```javascript
const mysqlStore = require('express-mysql-session')(session);
const sessionStore = new mysqlStore(options);
```

This store will internally create a MySQL [connection pool](https://devdotcode.com/connection-pooling-vs-single-connection/) that handles the connection to the database. The pool consists of 1 connection by default, but you can override this using the **connectionLimit** option. To know more about these options, go here [pool options](https://github.com/mysqljs/mysql#pool-options). These options will be passed to the constructor of the MySQL connection pool.

**server.js**

```javascript
const express = require('express');
require('dotenv').config();

const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());

const mysqlStore = require('express-mysql-session')(session);

const PORT = process.env.APP_PORT;
const IN_PROD = process.env.NODE_ENV === 'production';
const TWO_HOURS = 1000 * 60 * 60 * 2;

const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
};
const sessionStore = new mysqlStore(options);
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(
    session({
        name: process.env.SESS_NAME,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        secret: process.env.SESS_SECRET,
        cookie: {
            maxAge: TWO_HOURS,
            sameSite: true,
            secure: IN_PROD
        }
    })
);
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
```

The sessions database table should be automatically created using default options, which means setting the **createDatabaseTable** option to **TRUE**. If the table is not created for whatever reason, you can use the following schema to create it.

```sql
CREATE TABLE IF NOT EXISTS 'sessions' (
 'session_id' varchar(128) COLLATE utf8mb4_bin NOT NULL,
 'expires' int(11) unsigned NOT NULL,
 'data' mediumtext COLLATE utf8mb4_bin,
 PRIMARY KEY ('session_id')
) ENGINE=InnoDB
```

For a custom database table schema, you have to set the **createDatabaseTable** option to **FALSE**. So the session store does not automatically create a sessions table, and then you use the **schema** option to provide the custom table and column names to the session store.

For example:

```javascript
const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: FALSE,
    schema: {
        tableName: 'custom_sessions_table_name',
        columnNames: {
            session_id: 'custom_session_id',
            expires: 'custom_expires_column_name',
            data: 'custom_data_column_name'
        }
    }
};
```

Remember to save all the environment variables related to your app in your .env file, so you will load and use them later. It is a good practice.

**.env**

```env
APP_PORT = 3000DB_PORT = 3306
DB_HOST = localhost
DB_USER = root
DB_PASS = yourpassword
MYSQL_DB = yourdatabasenameSESS_LIFETIME = TWO_HOURS
NODE_ENV = 'development'
SESS_NAME = 'enter_the_session_name'
SESS_SECRET = 'yoursecret'
```

# Setting up the express-session object

```javascript
app.use(
    session({
        name: process.env.SESS_NAME,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        secret: process.env.SESS_SECRET,
        cookie: {
            httpOnly: true,
            maxAge: TWO_HOURS,
            sameSite: true,
            secure: IN_PROD
        }
    })
);
```

The first thing to do is to specify the **name**; we call it here **‘enter_the_session_name’** . The default one is just called ID, and the reason you want to give it a name is just to make it different, so people don t know right away just from the cookie name you are using this library.

secondly, we need a **session secret** for secret; for it, we can go ahead and say the secret will be something like this

```javascript
SESS_SECRET = 'dfr324567u6uhbfgfgh8iijmn';
```

And probably you want to peek a better secret, and it is better to keep it in your environment Variables file. Then we will get it from the environment file instead of just having the secret in **server.js** because it is not a good idea (practice) to have your secrets in your source code.

Next is **resave**: we turn this off; what this does is if you get a session, so let’s say someone has an id and the cookie id and they contact your site or hit your server and make a request. I mean, you don t want to resave their session every single time, you can turn that on, but we are just going to keep it off because we only really need to store it once and then just update it if we want to; we don’t need to save every time.

**saveUninitialized:** what this means is we don t store anything about the user, or we don t create a cookie for the user until we actually store some data on them.

Next is the setting for **cookies**: **httponly** is very important and what this means is JavaScript cannot access your cookie, which is essential for security.

The **secure** is for HTTPS so that it will send the cookie over HTTPS. This setting is crucial for production, and you should run HTTPS for production, so this shouldn’t be a problem.

secure: process.env.NODE_ENV === "production",

To check whether we are production if we are, we turn it on, and if we are not running HTTPS in development, we turn it off.

The last thing is the **maxAge**: this is just how long you want the cookie to persist and last. Two hours is what we have right now, and you might change this to a considerable number, like a year or something later.

The last step is to add express-mysql-session as one of the options to our session object. Then automatically, it will start storing the data in MySQL database instead; by default, it stores the session data just in memory, so when you start the server, everything refreshes.

store: sessionStore,

These are all the settings that you need for your session object.

# Practical example

For this example, we have our data stored in a MySQL database named “db” with one table named “User”. We used the following schema to create a User table:

**Note:** If you want to see a complete version of the authentication system implemented here and how to hash a password and add validate request middleware to the routes, read this article: [How to Build a Complete API for User Login and Authentication using MySQL and Node.js.](https://devdotcode.com/how-to-build-an-api-for-user-login-and-authentication-using-mysql-and-nodejs/)

**Table:** **User**

**Columns:**

![](https://miro.medium.com/v2/resize:fit:630/1*JAd9MXd2ju7gwjEoGSBwPQ.png)

If you want to know how to create a database using node.js check here: [How to create MySQL database using node.js](https://devdotcode.com/how-to-create-mysql-database/).

We assume that you have your API boilerplate ready to start. If not, you can check [here](https://devdotcode.com/complete-guide-to-build-a-restful-api-with-node-js-and-express/) how to do it. Inside **the project** folder, create a new file **db.js** where you will set up your connection to the database and write your queries after installing and importing mysql module by adding this line of code to **db.js**:

const mysql =require(‘mysql’)

In this example, we are using a connection pool to connect our database. If you want to know more about connection pooling and how it works, you can check this article: [Why is Connection Pooling better than Single Connection?](https://devdotcode.com/connection-pooling-vs-single-connection/).

Once the **db.js** file is created, we are ready to write our queries. For that, you will write all these queries as methods of the **db** object in your **db.js**. For more details, check:

[Complete Guide to Build a RESTful API with Node.js and Express](https://devdotcode.com/complete-guide-to-build-a-restful-api-with-node-js-and-express/).

[How to interact with MySQL database using async/await promises in node.js ?](https://devdotcode.com/interact-with-mysql-database-using-async-await-promises-in-node-js/)

**db.js**

```javascript
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

let db = {};
db.getUser = (id) => {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM User WHERE id= ?', [id], (error, user) => {
            if (error) {
                return reject(error);
            }
            return resolve(user);
        });
    });
};

db.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'SELECT * FROM User WHERE email = ?',
            [email],
            (error, users) => {
                if (error) {
                    return reject(error);
                }
                return resolve(users[0]);
            }
        );
    });
};

db.insertUser = (firstName, lastName, email, password) => {
    return new Promise((resolve, reject) => {
        pool.query(
            'INSERT INTO User (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
            [firstName, lastName, email, password],
            (error, result) => {
                if (error) {
                    return reject(error);
                }

                return resolve(result.insertId);
            }
        );
    });
};
module.exports = db;
```

**.env**

```env
APP_PORT = 3000
DB_PORT = 3306
DB_HOST = localhost
DB_USER = root
DB_PASS = 'enter your database password'
MYSQL_DB = db
SESS_LIFETIME = TWO_HOURS
NODE_ENV = 'production' /change it to development if you are in development environment
SESS_NAME = 'enter_the_session_name'
SESS_SECRET = 'yoursecret'
```

We used promises instead of callback functions in our queries because it makes coding easier when using async/await to write our routes. For more details about async/await functions and promises, go here: [How to interact with MySQL database using async/await promises in node.js ?](https://devdotcode.com/interact-with-mysql-database-using-async-await-promises-in-node-js/)

The last step is to add our routes to your **server.js** using HTTP methods. First, you need to pull in the **db** object from **db.js** by adding this line of code to your **server.js**:

```javascript
const db = require(`db.js`);
```

In the following code, we will add some HTML for simple frontend interfaces inside our routes, which will help us test our example code from the browser.

**server.js**

```javascript
const express = require('express');
require('dotenv').config();

const session = require('express-session');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const db = require('./db');
const mysqlStore = require('express-mysql-session')(session);
const PORT = process.env.APP_PORT;
const IN_PROD = process.env.NODE_ENV === 'production';
const TWO_HOURS = 1000 * 60 _ 60 * 2;

const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
}


const pool = mysql.createPool(options);
const sessionStore = new mysqlStore(options, pool);
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: TWO_HOURS,
        sameSite: true,
        secure: IN_PROD
    }
}))
```

```javascript
app.get('/', (req, res) => {
    const { userId } = req.session;
    console.log(userId);
    res.send(
        `<h1> Welcome!</h1>${
            userId
                ? `<a href = '/home'> Home </a><form method='post' action='/logout'><button>Logout<button><form>`
                : `<a href = '/login'> Login </a><a href = '/register'> Register </a>`
        }`
    );
});

app.get('/home', async (req, res) => {
    const { userId } = req.session;
    if (userId) {
        try {
            const user = await db.getUser(userId);
            console.log(user);
            req.user = user;
            res.send(
                `<h1>Home</h1><a href='/'>Main</a><ul><li>Name: ${user[0].first_name} </li><li>Email:${user[0].email} </li></ul>`
            );
        } catch (e) {
            console.log(e);
            res.sendStatus(404);
        }
    }
});
```

```javascript
app.get('/login', (req, res) => {
    res.send(`
        <h1>Login</h1>
        <form method='post' action='/login'>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='password' required/>
        <input type='submit' />
        </form>
        <a href='/register'>Register</a>
    `);
});
```

```javascript
app.get('/register', (req, res) => {
    res.send(`
        <h1>Register</h1>
        <form method='post' action='/Register'>
        <input type='text' name='firstName' placeholder='First Name' required />
        <input type='text' name='lastName' placeholder='Last Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='password' required/>
        <input type='submit' />
        </form>
        <a href='/login'>Login</a>
    `);
});

app.post('/login', async (req, res, next) => {
    try {
        const email = req.body.email;
        let password = req.body.password;
        user = await db.getUserByEmail(email);

        if (!user) {
            return res.send({
                message: 'Invalid email'
            });
        }
        if (user.password !== password) {
            return res.send({
                message: 'Invalid  password'
            });
        }

        req.session.userId = user.id;
        return res.redirect('/home');
    } catch (e) {
        console.log(e);
    }
});

app.post('/register', async (req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        let password = req.body.password;

        if (!firstName || !lastName || !email || !password) {
            return res.sendStatus(400);
        }

        const user = await db
            .insertUser(firstName, lastName, email, password)
            .then((insertId) => {
                return db.getUser(insertId);
            });

        req.session.userId = user.id;
        return res.redirect('/register');
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/home');
        }
        sessionStore.close();
        res.clearCookie(process.env.SESS_NAME);
        res.redirect('/login');
    });
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
```

Now all you have to do is start your server, then open your browser: [http://localhost:3000/](http://localhost:3000/)

![](https://miro.medium.com/v2/resize:fit:630/0*NCAISAM9VDamvRiA.png)

Click on register Then enter your informations for registration:

![](https://miro.medium.com/v2/resize:fit:630/0*nC62eQf4R3-V6UzR.png)

To start a session, you can click on Login and enter your email and password. A session will be stored in the sessions table with a specific expiration date.

![](https://miro.medium.com/v2/resize:fit:630/0*pVx2GScIjV03ykHh.png)

![](https://miro.medium.com/v2/resize:fit:630/0*9YKpOpmdEXd_Zgq2.png)

And Voila, a session table is created automatically in your database.

![](https://miro.medium.com/v2/resize:fit:630/0*a1Z9CXdpjY-lj2jv.png)

To destroy the session, all you have to do is click on **Main** and then **logout**, the session is immediately deleted from the session table.

![](https://miro.medium.com/v2/resize:fit:630/0*GRouEn4F5zRBLE5v.png)

![](https://miro.medium.com/v2/resize:fit:630/0*wtt7YfZkhP2bLAzi.png)

# How to store session in MySQL database with an existing MySQL connection?

To pass in an existing MySQL database connection pool, all you have to do is to import mysql in your **server.js** file by adding this line of code:

const mysql = require('mysql');

Then create your connection pool using the following code:

const pool = mysql.createPool(options);

Now your **server.js** will look like this:

server.js

```javascript
const express= require('express');
require("dotenv").config();
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./db');
const mysql = require('mysql');
const app=express();
const cors=require("cors");app.use(cors());
const mysqlStore = require('express-mysql-session')(session);
const PORT = process.env.APP_PORT;
const IN_PROD = process.env.NODE_ENV === 'production'
const TWO_HOURS = 1000 * 60 _ 60 * 2

const options = {
    connectionLimit: 10,
    password: process.env.DB_PASS,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    createDatabaseTable: true
}

const pool = mysql.createPool(options);
const sessionStore = new mysqlStore(options);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())

app.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    secret: process.env.SESS_SECRET,
    cookie: {
    maxAge: TWO_HOURS,
    sameSite: true,
    secure: IN_PROD
    }
}))

app.get('/', (req, res) => {
    const { userId } = req.session
    console.log(userId);

    res.send(`
        <h1> Welcome!</h1>${
            userId
            ? `<a href = '/home'> Home </a><form method='post' action='/logout'><button>Logout</button></form>`
            : `<a href = '/login'> Login </a><a href = '/register'> Register </a>`
            }
    `)

})

app.get('/home',  async(req,res) => {
    const {userId} = req.session

    if  (userId) {
        try {
            const user = await db.getUser(userId);
            console.log(user)
            req.user = user;
            res.send(`
                <h1>Home</h1>
                <a href='/'>Main</a>
                <ul>
                    <li> Name: ${user[0].first_name} </li>
                    <li> Email:${user[0].email} </li>
                </ul>
            `)
        } catch(e) {
            console.log(e);
            res.sendStatus(404);
        }
    }
})
```

```javascript
app.get('/login', (req, res) => {
    res.send(`
 <h1>Login</h1>
 <form method='post' action='/login'>
 <input type='email' name='email' placeholder='Email' required />
 <input type='password' name='password' placeholder='password' required/>
 <input type='submit' />
 </form>
 <a href='/register'>Register</a>
`);
});

app.get('/register', (req, res) => {
    res.send(`
        <h1>Register</h1>
        <form method='post' action='/Register'>
        <input type='text' name='firstName' placeholder='First Name' required />
        <input type='text' name='lastName' placeholder='Last Name' required />
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='password' required/>
        <input type='submit' />
        </form>
        <a href='/login'>Login</a>
 `);
});

app.post('/login', async (req, res, next) => {
    try {
        const email = req.body.email;
        let password = req.body.password;
        user = await db.getUserByEmail(email);

        if (!user) {
            return res.send({
                message: 'Invalid email'
            });
        }
        if (user.password !== password) {
            return res.send({
                message: 'Invalid  password'
            });
        }

        req.session.userId = user.id;
        return res.redirect('/home');
    } catch (e) {
        console.log(e);
    }
});

app.post('/register', async (req, res, next) => {
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        let password = req.body.password;
        if (!firstName || !lastName || !email || !password) {
            return res.sendStatus(400);
        }
        const user = await db
            .insertUser(firstName, lastName, email, password)
            .then((insertId) => {
                return db.getUser(insertId);
            });
        req.session.userId = user.id;
        return res.redirect('/register');
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/home');
        }
        sessionStore.close();
        res.clearCookie(process.env.SESS_NAME);
        res.redirect('/login');
    });
});
app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
```

# Conclusion

And there you have, a nice and simple way to store express Sessions in a MySQL database. Hopefully, this was a good introduction to the concept and a practical example so you can see it in action. If you want to see a complete version of the authentication system implemented in our example and how to hash a password and add validate request middleware to the routes, read this article: [How to Build a Complete API for User Login and Authentication using MySQL and Node.js.](https://devdotcode.com/how-to-build-an-api-for-user-login-and-authentication-using-mysql-and-nodejs/)

# You might also like:

[How to interact with MySQL database using async/await promises in node.js ?](https://devdotcode.com/interact-with-mysql-database-using-async-await-promises-in-node-js/)

[How to Build a Complete API for User Login and Authentication using MySQL and Node.js.](https://devdotcode.com/how-to-build-an-api-for-user-login-and-authentication-using-mysql-and-nodejs/)

[How to Manage Session in Nodejs using Redis Store.](https://devdotcode.com/how-to-manage-session-in-nodejs-using-redis-store/)

[Node.js + Redis — Complete API for Authentication, Registration and User Management.](https://devdotcode.com/node-js-redis-complete-api-for-authentication-registration-and-user-management/)

[Why is Connection Pooling better than Single Connection?](https://devdotcode.com/connection-pooling-vs-single-connection/).

[How to create MySQL database using node.js](https://devdotcode.com/how-to-create-mysql-database/).

[Complete Guide to Build a RESTful API with Node.js and Express](https://devdotcode.com/complete-guide-to-build-a-restful-api-with-node-js-and-express/).

[

MySQL

](https://medium.com/tag/mysql?source=post_page-----ae2f67ef833e---------------mysql-----------------)

[

Nodejs

](https://medium.com/tag/nodejs?source=post_page-----ae2f67ef833e---------------nodejs-----------------)

[

Database

](https://medium.com/tag/database?source=post_page-----ae2f67ef833e---------------database-----------------)

[

Mysql Database

](https://medium.com/tag/mysql-database-server?source=post_page-----ae2f67ef833e---------------mysql_database_server-----------------)
