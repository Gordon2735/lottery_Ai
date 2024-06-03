<!-- Lottery Ai Installation Notes -->

<header style="display: inline-flex; justify-items: center;  ">
  <img src="../../../public/images/lotteryAi_logo_TRANS-STEAM-LIGHT.png"
    style="position: relative; display: inline-flex; width: 160px; rotate: 347deg; filter: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.763));"  />

  <h1 style="margin: 4em auto 1em 1.25em; position: relative; display: inline-flex; align-text: center; font-family: 'Chango', sans-serif; font-size: 2rem; font-weight: 400; filter: drop-shadow(0.7rem 0.7rem 1.7rem hsla(0, 0%, 0%, 0.963)); ">
    Lottery Ai<sup style="margin: 1em 0em 0em 0em; font-family: sans-serif; font-size: 0.8rem;">™️</sup>
  <h1>
</header>

#

-   **Team Webelistics**™️ LLC | _Internet Application Development_
-   Gordon R. Mullen Jr | _Lead Engineer_
-   Date: **2024/01/13** | _Start of Development_

#

<br />
<br />

# **Lottery Ai Installation Notes**

<br />

### **Initial Problem with NPM Dependencies**

-   Versions of Packages Matter

    1.  MySql, the npm mysql2 must be version ^3.6.5
    2.  Session, the npm express-mysql-session must be ^3.0.0

-   Differing NPM Package Versions

    1. If any other versions for these npm packages are used
       the following error will occur:
        - GET / 500 21.962 ms - 3015
          Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
          at Sequence.\_packetToError (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\sequences\Sequence.js:47:14)
          at Handshake.ErrorPacket (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\sequences\Handshake.js:123:18)
          at Protocol.\_parsePacket (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Protocol.js:291:23)
          at Parser.\_parsePacket (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Parser.js:433:10)
          at Parser.write (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Parser.js:43:10)
          at Protocol.write (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Protocol.js:38:16)
          at Socket.<anonymous> (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\Connection.js:88:28)
          at Socket.<anonymous> (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\Connection.js:526:10)
          at Socket.emit (node:events:514:28)
          at addChunk (node:internal/streams/readable:545:12)
          at Protocol.\_enqueue (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Protocol.js:144:48)
          at Protocol.handshake (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\protocol\Protocol.js:51:23)
          at PoolConnection.connect (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\node_modules\mysql\lib\Connection.js:116:18)
          at Pool.getConnection (C:\Users\gordo\Desktop\Team_Webelistics_LLC\lottery_Ai\

-   ## The current package.json looks like this(updates to this will follow):
    ```json
    {
        "name": "lottery_ai",
        "version": "1.0.0",
        "author": "Gordon R Mullen Jr <webelistics@gmail.com>",
        "description": "Teaming with Ai to discover the right numbers to win it big playing the South Carolina Lottery.",
        "main": "./dist/src/bin/server.js",
        "type": "module",
        "scripts": {
            "test": "node --test ./dist/src/utility/**tests** && ./dist/src/utility/**tests**/general_tests",
            "start": "npm run dev",
            "dev": "nodemon ./src/bin/server.js",
            "lint": "eslint . --fix"
        },
        "license": "MIT",
        "devDependencies": {
            "@types/bcryptjs": "^2.4.6",
            "@types/cookie-parser": "^1.4.6",
            "@types/cors": "^2.8.17",
            "@types/express": "^4.17.21",
            "@types/express-mysql-session": "^3.0.3",
            "@types/express-session": "^1.17.10",
            "@types/jest": "^29.5.11",
            "@types/morgan": "^1.9.9",
            "@types/node": "^20.10.7",
            "@types/supertest": "^6.0.2",
            "@types/uuid": "^9.0.7",
            "@typescript-eslint/eslint-plugin": "^6.18.0",
            "@typescript-eslint/parser": "^6.18.0",
            "eslint": "^8.56.0",
            "eslint-config-prettier": "^9.1.0",
            "eslint-plugin-import": "^2.29.1",
            "eslint-plugin-prettier": "^5.1.2",
            "jest": "^29.7.0",
            "nodemon": "^3.0.2",
            "prettier": "^3.1.1",
            "ts-jest": "^29.1.1",
            "typescript": "^5.3.3"
        },
        "dependencies": {
            "bcryptjs": "^2.4.3",
            "chart.js": "^4.4.3",
            "cookie-parser": "^1.4.6",
            "cors": "^2.8.5",
            "dotenv": "^16.3.1",
            "express": "^4.18.2",
            "express-favicon": "^2.0.4",
            "express-handlebars": "^7.1.2",
            "express-mysql-session": "^3.0.0",
            "express-session": "^1.17.3",
            "moment": "^2.30.1",
            "morgan": "^1.10.0",
            "mysql2": "^3.6.5",
            "openai": "^4.24.7",
            "puppeteer": "^22.7.1",
            "simple-statistics": "^7.8.3",
            "test": "^3.3.0",
            "uuidv4": "^6.2.13"
        }
    }
    ```
