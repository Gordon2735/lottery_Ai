// Lottery Ai @type Interfaces

//  Remember to use the I prefix for interfaces

'use strict';

import { type RowDataPacket } from 'mysql2';
import { type SessionData } from 'express-session';

interface IUser extends RowDataPacket {
    id: number;
    username: string;
    password: string;
    admin: boolean;
    email: string;
    avatar: string;
    role: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;
}

interface Session {
    data: SessionData;
    views: number;
    session_id: Session & Partial<SessionData>;
    name: string;
    author: string;
}

interface IConfig {
    applicationName: string;
    name: string;
    author: string;
    port: string | number;
    host: string;
    mysql: {
        options: {
            host: string;
            port: number;
            database: string;
            user: string;
            password: string;
            waitForConnections: true;
            queueLimit: 10;
        };
    };
    readonly serverUrl: string;
    client: object;
    user: {
        options: {
            id: string;
            username: string;
            email: string;
            password: string;
        };
    };
}
export type { IUser, Session, IConfig, SessionData };
