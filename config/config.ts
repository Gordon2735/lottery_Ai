'use strict';

import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import fs from 'fs';
import type {
    IConfig,
    SessionData
} from '../src/@types/interfaces/interfaces.js';

// Load environment variables from .env file
dotenv.config({
    path: './config/.env'
});

const openAi: OpenAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

console.log('OpenAi API: ', process.env.OPENAI_API_KEY);

declare module 'express-session' {
    interface Session {
        data: SessionData;
        views: number;
        session_id: Session & Partial<SessionData>;
        name: string | undefined;
        author: string;
        user_id: string;
        username: string;
        cookie: Cookie;
    }
}

const pkg: IConfig = JSON.parse(fs.readFileSync('package.json', 'utf8'));

async function getConfig(): Promise<{
    applicationName: string;
    port: string | number;
    host: string;
    session_key: string;
    mysql: {
        options: {
            host: string;
            port: number;
            database: string;
            user: string;
            password: string;
            waitForConnections: boolean;
            queueLimit: number;
            insecureAuth: boolean;
        };
    };
    sessions: {
        session_id: string;
        name: string | undefined;
        author: string;
        expires: number;
        user_id: string;
        secretkey: string;
        username: string;
        data: SessionData;
        cookie: object;
        createDatabaseTable: boolean;
    };
    readonly serverUrl: string;
    client: unknown;
    user: {
        options: {
            id: string;
            username: string;
            email: string;
            password: string;
        };
    };
}> {
    // Return configuration object
    return {
        applicationName: pkg.name,
        port: process.env.PORT || 9080,
        host: process.env.HOST || '127.0.0.1',
        session_key: process.env.SESSION_KEY!,
        mysql: {
            options: {
                host: process.env.HOST || '',
                // port: 3306,
                port: 33060,
                database: 'lottery_mysql_db',
                user: 'gordon_lottery',
                password: 'jOhn338@',
                waitForConnections: true,
                queueLimit: 10,
                insecureAuth: true
            }
        },
        sessions: {
            session_id: '',
            name: '',
            author: '',
            expires: 0,
            user_id: '',
            secretkey: `${process.env.SESSION_KEY}`,
            username: '',
            data: {
                cookie: { originalMaxAge: 0 }
            },
            cookie: {},
            createDatabaseTable: false
        },
        get serverUrl(): string {
            return `http://${process.env.HOST}:${process.env.PORT}`;
        },
        client: null,
        user: {
            options: {
                id: '',
                username: '',
                email: '',
                password: ''
            }
        }
    };
}

export { getConfig as default, openAi };
