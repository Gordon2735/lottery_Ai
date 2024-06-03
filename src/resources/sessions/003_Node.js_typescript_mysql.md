# Node.js Typescript with MySQL example

[Last modified: July 12, 2023](https://www.bezkoder.com/node-js-typescript-mysql/) [bezkoder](https://www.bezkoder.com/author/bezkoder/) [Node.js](https://www.bezkoder.com/category/node-js/), [Typescript](https://www.bezkoder.com/category/typescript/)

In this tutorial, I will show you step by step to implement CRUD operations in Node.js Typescript with [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) example using **mysql2**.

You should install [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) in your machine first. The installation instructions can be found at [Official MySQL installation manual](https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/).

Working with following front-end:  
– [Angular 8](https://www.bezkoder.com/angular-crud-app/) / [Angular 10](https://www.bezkoder.com/angular-10-crud-app/) / [Angular 11](https://www.bezkoder.com/angular-11-crud-app/) / [Angular 12](https://www.bezkoder.com/angular-12-crud-app/) / [Angular 13](https://www.bezkoder.com/angular-13-crud-example/) / [Angular 14](https://www.bezkoder.com/angular-14-crud-example/) / [Angular 15](https://www.bezkoder.com/angular-15-crud-example/) / [Angular 16](https://www.bezkoder.com/angular-16-crud-example/)  
– [Vue 2 Typescript](https://www.bezkoder.com/vue-typescript-crud/) / [Vue 3 Typescript](https://www.bezkoder.com/vue-3-typescript-axios/)  
– [React Typescript Component](https://www.bezkoder.com/react-typescript-axios/) / [React Typescript Hooks](https://www.bezkoder.com/react-typescript-api-call/)

Related Posts:  
– [Express Typescript example](https://www.bezkoder.com/express-typescript-example/)  
– [Typescript ORM with MySQL example](https://www.bezkoder.com/typescript-orm-mysql/)  
– [Node.js: Upload/Import Excel file data into MySQL Database](https://www.bezkoder.com/node-js-upload-excel-file-database/)  
– [Node.js: Upload CSV file data into MySQL Database](https://www.bezkoder.com/node-js-upload-csv-file-database/)  
– Security: [Node.js – JWT Authentication & Authorization example](https://www.bezkoder.com/node-js-jwt-authentication-mysql/)  
Deployment:  
– [Deploying/Hosting Node.js app on Heroku with MySQL database](https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)  
– [Dockerize Node.js Express and MySQL example](https://www.bezkoder.com/docker-compose-nodejs-mysql/)

Contents \[[hide](https://www.bezkoder.com/node-js-typescript-mysql/#)\]

-   [Typescript](https://www.bezkoder.com/node-js-typescript-mysql/#Typescript)
-   [mysql2](https://www.bezkoder.com/node-js-typescript-mysql/#mysql2)
-   [Import Typescript and mysql2](https://www.bezkoder.com/node-js-typescript-mysql/#Import_Typescript_and_mysql2)
-   [Create MySQL table](https://www.bezkoder.com/node-js-typescript-mysql/#Create_MySQL_table)
-   [Configure & Connect to MySQL database](https://www.bezkoder.com/node-js-typescript-mysql/#Configure_038_Connect_to_MySQL_database)
-   [Define the Model](https://www.bezkoder.com/node-js-typescript-mysql/#Define_the_Model)
-   [Create the Repository](https://www.bezkoder.com/node-js-typescript-mysql/#Create_the_Repository)
    -   [Create new object](https://www.bezkoder.com/node-js-typescript-mysql/#Create_new_object)
    -   [Retrieve objects (with conditions)](https://www.bezkoder.com/node-js-typescript-mysql/#Retrieve_objects_with_conditions)
    -   [Retrieve object by Id](https://www.bezkoder.com/node-js-typescript-mysql/#Retrieve_object_by_Id)
    -   [Update an object](https://www.bezkoder.com/node-js-typescript-mysql/#Update_an_object)
    -   [Delete an object](https://www.bezkoder.com/node-js-typescript-mysql/#Delete_an_object)
    -   [Delete all objects](https://www.bezkoder.com/node-js-typescript-mysql/#Delete_all_objects)
-   [Create the Controller and Routes](https://www.bezkoder.com/node-js-typescript-mysql/#Create_the_Controller_and_Routes)
-   [Run and Check](https://www.bezkoder.com/node-js-typescript-mysql/#Run_and_Check)
-   [Conclusion](https://www.bezkoder.com/node-js-typescript-mysql/#Conclusion)
-   [Further Reading](https://www.bezkoder.com/node-js-typescript-mysql/#Further_Reading)
-   [Source code](https://www.bezkoder.com/node-js-typescript-mysql/#Source_code)

## Typescript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. However, TypeScript adds static typing and other features to JavaScript to enhance its development experience and help catch errors at compile-time rather than runtime.

Here are some key features and concepts of TypeScript:

-   **Static Typing**: TypeScript introduces static typing, allowing you to explicitly declare the types of variables, function parameters, and return types. This helps catch type-related errors during development and provides better code documentation and editor support.
-   **Type Inference**: TypeScript has a powerful type inference system that can automatically infer the types of variables based on their initial values. This reduces the need for explicit type annotations while still providing the benefits of static typing.
-   **Interfaces**: TypeScript supports the definition of interfaces, which are used to define contracts for object structures. Interfaces specify the names and types of properties or methods that an object must have to conform to the interface.
-   **Classes**: TypeScript introduces classes, allowing you to use object-oriented programming concepts such as inheritance, encapsulation, and polymorphism. Classes in TypeScript can have properties, methods, constructors, and support for access modifiers like public, private, and protected.
-   **Modules**: TypeScript provides a module system that helps organize and encapsulate code into reusable units. Modules allow you to define public and private members and provide a way to structure larger applications.
-   **Generics**: TypeScript supports generics, which enable the creation of reusable components that can work with different types. Generics allow you to write code that is more flexible and type-safe by parameterizing types and functions.
-   **Decorators**: TypeScript supports decorators, which are a way to add metadata or modify the behavior of classes, methods, or properties at design time. Decorators are heavily used in frameworks like Angular for features like dependency injection, component declaration, and more.
-   **Tooling and Integration**: TypeScript integrates well with modern development tools and workflows. It provides excellent editor support with features like autocompletion, type checking, and refactoring. TypeScript code is transpiled to JavaScript, allowing it to run in any JavaScript environment.

## mysql2

[mysql2](https://www.npmjs.com/package/mysql2) is a Node.js library that provides a fast and efficient way to connect and interact with [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) databases. It is a successor to the original [mysql](https://www.npmjs.com/package/mysql) library and offers several improvements in terms of performance and features.

Here are some key features and benefits of using **mysql2**:

(adsbygoogle = window.adsbygoogle || \[\]).push({});

-   **Performance**: fast and efficient. It supports streaming result sets, which allows for handling large result sets with lower memory consumption. It also provides improved performance through prepared statements, connection pooling, and support for multiple statements in a single query.
-   **Promises and Async/Await Support**: allows you to work with the library using modern JavaScript syntax. It provides a promise-based API, making it easier to write asynchronous code using promises or utilizing the async/await syntax for more readable and concise code.
-   **Connection Pooling**: offers built-in connection pooling functionality, allowing you to reuse database connections instead of creating new connections for each request. Connection pooling helps improve performance by reducing the overhead of establishing a new connection every time.
-   **Prepared Statements**: enabling you to execute parameterized queries. Prepared statements offer performance benefits by allowing the database server to optimize query execution and help prevent SQL injection attacks by properly escaping input values.
-   **Support for Multiple Statements**: allows you to execute multiple SQL statements in a single query, separated by semicolons. This feature can be useful when you need to perform multiple related operations in a single database round trip, reducing the overall latency.
-   **Support for Named Placeholders**: supports named placeholders in addition to the traditional question mark placeholders. Named placeholders provide more readability and clarity when working with complex queries by allowing you to bind values using their names instead of relying on the order.
-   **SSL/TLS Support**: supports SSL/TLS encryption for secure connections to the [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) database server. It provides options for configuring SSL/TLS certificates and keys to establish encrypted connections, ensuring data privacy and security.

## Import Typescript and mysql2

We need to install necessary modules: `typescript`, `ts-node`, `@types/node` and `mysql2`.

Run the command:

```
npm install typescript ts-node @types/node --save-dev
npm install mysql2
```

## Create MySQL table

Before connecting Node.js Application with [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#), we need a table first.  
So run the SQL script below to create `tutorials` table:

```sql
CREATE TABLE IF NOT EXISTS `tutorials` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published boolean DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

## Configure & Connect to MySQL database

We’re gonna have a separate folder for configuration. Let’s create **config** folder in the **src** folder, then create _db.config.ts_ file inside that _config_ folder with content like this:

```ts
export default {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '123456',
    DB: 'testdb'
};
```

Now create a database connection that uses configuration above.  
The file for connection is _index.ts_, we put it in **src**/**db** folder:

```ts
import mysql from 'mysql2';
import dbConfig from '../config/db.config';

export default mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});
```

## Define the Model

In **models** folder, create a file called **tutorial.model.ts**. We’re gonna define `Tutorial` interface that extends `RowDataPacket` type (from the **mysql** npm package) here:

This is the content inside _tutorial.model.ts_:

```ts
import { RowDataPacket } from 'mysql2';

export default interface Tutorial extends RowDataPacket {
    id?: number;
    title?: string;
    description?: string;
    published?: boolean;
}
```

`Tutorial` model is simple, it contains fields: `id`, `title`, `description` & `published`.

(adsbygoogle = window.adsbygoogle || \[\]).push({});

## Create the Repository

Inside **srx**/**repositories** folder, let’s create _tutorial.repository.ts_ with these CRUD functions:

-   save
-   retrieveAll
-   retrieveById
-   update
-   delete
-   deleteAll

```ts
import connection from "../db";
import Tutorial from "../models/tutorial.model";

interface ITutorialRepository {
  save(tutorial: Tutorial): Promise<Tutorial>;
  retrieveAll(searchParams: {title: string, published: boolean}): Promise<Tutorial[]>;
  retrieveById(tutorialId: number): Promise<Tutorial | undefined>;
  update(tutorial: Tutorial): Promise<number>;
  delete(tutorialId: number): Promise<number>;
  deleteAll(): Promise<number>;
}

class TutorialRepository implements ITutorialRepository { }

  retrieveAll(searchParams: {title?: string, published?: boolean}): Promise<Tutorial[]> { }

  retrieveById(tutorialId: number): Promise<Tutorial> { }

  update(tutorial: Tutorial): Promise<number> { }

  delete(tutorialId: number): Promise<number> { }

  deleteAll(): Promise<number> { }
}

export default new TutorialRepository();
```

Let’s implement each CRUD operation.

### Create new object

```ts
import { OkPacket } from "mysql2";

save(tutorial: Tutorial): Promise<Tutorial> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "INSERT INTO tutorials (title, description, published) VALUES(?,?,?)",
      [tutorial.title, tutorial.description, tutorial.published ? tutorial.published : false],
      (err, res) => {
        if (err) reject(err);
        else
          this.retrieveById(res.insertId)
            .then((tutorial) => resolve(tutorial!))
            .catch(reject);
      }
    );
  });
}
```

### Retrieve objects (with conditions)

```ts
retrieveAll(searchParams: {title?: string, published?: boolean}): Promise<Tutorial[]> {
  let query: string = "SELECT * FROM tutorials";
  let condition: string = "";

  if (searchParams?.published)
    condition += "published = TRUE"

  if (searchParams?.title)
    condition += `LOWER(title) LIKE '%${searchParams.title}%'`

  if (condition.length)
    query += " WHERE " + condition;

  return new Promise((resolve, reject) => {
    connection.query<Tutorial[]>(query, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });
}
```

### Retrieve object by Id

```ts
retrieveById(tutorialId: number): Promise<Tutorial> {
  return new Promise((resolve, reject) => {
    connection.query<Tutorial[]>(
      "SELECT * FROM tutorials WHERE id = ?",
      [tutorialId],
      (err, res) => {
        if (err) reject(err);
        else resolve(res?.[0]);
      }
    );
  });
}
```

### Update an object

```ts
import { OkPacket } from "mysql2";

update(tutorial: Tutorial): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
      [tutorial.title, tutorial.description, tutorial.published, tutorial.id],
      (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      }
    );
  });
}
```

### Delete an object

```ts
import { OkPacket } from "mysql2";

delete(tutorialId: number): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "DELETE FROM tutorials WHERE id = ?",
      [tutorialId],
      (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      }
    );
  });
}
```

### Delete all objects

```ts
import { OkPacket } from "mysql2";

deleteAll(): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>("DELETE FROM tutorials", (err, res) => {
      if (err) reject(err);
      else resolve(res.affectedRows);
    });
  });
}
```

## Create the Controller and Routes

Inside **src**/**controllers** folder, we create _tutorial.controller.ts_ with these CRUD functions:

-   create
-   findAll
-   findOne
-   update
-   delete
-   deleteAll
-   findAllPublished

![node-js-typescript-mysql-example-controller](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-controller.png)

![node-js-typescript-mysql-example-controller](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-controller.png)

(adsbygoogle = window.adsbygoogle || \[\]).push({});

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will response by setting up the routes.

These are our routes:

-   `/api/tutorials`: GET, POST, DELETE
-   `/api/tutorials/:id`: GET, PUT, DELETE
-   `/api/tutorials/published`: GET

Inside _src/routes_ folder, create _index.ts_ file.

```ts
import { Application } from 'express';
import tutorialRoutes from './tutorial.routes';

export default class Routes {
    constructor(app: Application) {
        app.use('/api/tutorials', tutorialRoutes);
    }
}
```

We import `TutorialRoutes` for handling HTTP Requests with `/api/tutorials` endpoint.  
The _tutorial.routes.ts_ will look like this:

![node-js-typescript-mysql-example-routes](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-routes.png)

![node-js-typescript-mysql-example-routes](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-routes.png)

So this is our project structure:

![node-js-typescript-mysql-example-project](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-project.png)

![node-js-typescript-mysql-example-project](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-project.png)

For more details about implementing the Controller and Routes, kindly visit:  
[Express Typescript example](https://www.bezkoder.com/express-typescript-example/)

## Run and Check

First you need to run the SQL script below to create `tutorials` table:

```sql
CREATE TABLE IF NOT EXISTS `tutorials` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published boolean DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

Run the Node.js Typescript [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) Rest APIs with command:  
`npm run start`

Using Postman, we’re gonna test all the APIs above.

– Create a new Tutorial: POST `http://localhost:8080/api/tutorials`

![node-js-typescript-mysql-example-crud-create](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-create.png)

![node-js-typescript-mysql-example-crud-create](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-create.png)

After creating some new Tutorials, you can check [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) table:

![node-js-typescript-mysql-example-database](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-database.png)

![node-js-typescript-mysql-example-database](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-database.png)

– Retrieve all Tutorials: GET `http://localhost:8080/api/tutorials`

![node-js-typescript-mysql-example-crud-retrieve](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-retrieve.png)

![node-js-typescript-mysql-example-crud-retrieve](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-retrieve.png)

– Retrieve a single Tutorial by id: GET `http://localhost:8080/api/tutorials/[id]`

![node-js-typescript-mysql-example-crud-retrieve-one](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-retrieve-one.png)

![node-js-typescript-mysql-example-crud-retrieve-one](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-retrieve-one.png)

– Update a Tutorial: PUT `http://localhost:8080/api/tutorials/[id]`

![node-js-typescript-mysql-example-crud-update](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-update.png)

![node-js-typescript-mysql-example-crud-update](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-update.png)

Check `tutorials` table after some rows were updated:

![node-js-typescript-mysql-example-table](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-table.png)

![node-js-typescript-mysql-example-table](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-table.png)

– Find all Tutorials which title contains ‘sql’: GET `http://localhost:8080/api/tutorials?title=sql`

![node-js-typescript-mysql-example-query](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-query.png)

![node-js-typescript-mysql-example-query](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-query.png)

– Find all published Tutorials: GET `http://localhost:8080/api/tutorials/published`

![node-js-typescript-mysql-example-filter](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-filter.png)

![node-js-typescript-mysql-example-filter](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-filter.png)

– Delete a Tutorial: DELETE `http://localhost:8080/api/tutorials/[id]`

![node-js-typescript-mysql-example-crud-delete](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-delete.png)

![node-js-typescript-mysql-example-crud-delete](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-delete.png)

Tutorial with id=4 was removed from `tutorials` table.

![node-js-typescript-mysql-example-crud-database](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-database.png)

![node-js-typescript-mysql-example-crud-database](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-database.png)

– Delete all Tutorials: DELETE `http://localhost:8080/api/tutorials`

![node-js-typescript-mysql-example-crud-delete-all](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-delete-all.png)

![node-js-typescript-mysql-example-crud-delete-all](https://www.bezkoder.com/wp-content/uploads/node-js-typescript-mysql-example-crud-delete-all.png)

Now there are no rows in `tutorials` table.

You can use the [Simple HTTP Client using Axios](https://www.bezkoder.com/axios-request/) to check it.

![axios-request-example-get-post-put-delete](https://www.bezkoder.com/wp-content/uploads/2021/07/axios-request-example-get-post-put-delete.png)

![axios-request-example-get-post-put-delete](https://www.bezkoder.com/wp-content/uploads/2021/07/axios-request-example-get-post-put-delete.png)

Or: [Simple HTTP Client using Fetch API](https://www.bezkoder.com/javascript-fetch/)

## Conclusion

Today, we’ve learned how to implement Node.js Typescript with [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) database using mysql2. We also know way to add configuration for MySQL database, create Model, write a controller and define routes for handling all CRUD operations with Express Typescript Rest API.

Happy learning! See you again.

## Further Reading

-   [Express.js Routing](http://expressjs.com/en/guide/routing.html)
-   [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express)
-   [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2)

Upload Tutorial data from file to [ MySQL](https://www.bezkoder.com/node-js-typescript-mysql/#) database table:

-   [Node.js: Upload Excel file data into MySQL Database](https://www.bezkoder.com/node-js-upload-excel-file-database/)
-   [Node.js: Upload CSV file data into MySQL Database](https://www.bezkoder.com/node-js-upload-csv-file-database/)

Fullstack CRUD Application:  
– [Vue.js + Node.js + Express + MySQL example](https://www.bezkoder.com/vue-js-node-js-express-mysql-crud-example/)  
– [Vue.js + Node.js + Express + MongoDB example](https://www.bezkoder.com/vue-node-express-mongodb-mevn-crud/)  
– [Angular 8 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-node-express-mysql/)  
– [Angular 10 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-10-node-js-express-mysql/)  
– [Angular 11 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-11-node-js-express-mysql/)  
– [Angular 12 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-12-node-js-express-mysql/)  
– [Angular 13 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-13-node-js-express-mysql/)  
– [Angular 14 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-14-node-js-express-mysql/)  
– [Angular 15 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-15-node-js-express-mysql/)  
– [Angular 16 + Node.js Express + MySQL example](https://www.bezkoder.com/angular-16-node-js-express-mysql/)  
– [React + Node.js + Express + MySQL example](https://www.bezkoder.com/react-node-express-mysql/)  
– [React Redux + Node.js Express + MySQL example](https://www.bezkoder.com/react-redux-mysql-crud/)

File Upload Rest API:  
– [Node.js Express File Upload Rest API example using Multer](https://www.bezkoder.com/node-js-express-file-upload/)  
– [Google Cloud Storage with Node.js: File Upload example](https://www.bezkoder.com/google-cloud-storage-nodejs-upload-file/)  
– [Upload/store images in MySQL using Node.js, Express & Multer](https://www.bezkoder.com/node-js-upload-image-mysql/)

Deployment:  
– [Deploying/Hosting Node.js app on Heroku with MySQL database](https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/)  
– [Dockerize Node.js Express and MySQL example – Docker Compose](https://www.bezkoder.com/docker-compose-nodejs-mysql/)

## Source code

You can find the complete source code for this example on [Github](https://github.com/bezkoder/node-js-typescript-mysql-rest-api).

With Sequelize ORM: [Typescript ORM with MySQL example](https://www.bezkoder.com/typescript-orm-mysql/)

If you want to add Comments for each Tutorial. It is the One-to-Many Association, there is a tutorial for that Relationship: [Sequelize Associations: One-to-Many example – Node.js, MySQL](https://www.bezkoder.com/sequelize-associate-one-to-many/)

Or you can add Tags for each Tutorial and add Tutorials to Tag (Many-to-Many Relationship):  
[Sequelize Many-to-Many Association example with Node.js & MySQL](https://www.bezkoder.com/sequelize-associate-many-to-many/)
