// Lottery Ai SERVER FILE

'use strict';

import getConfig from '../../config/config.js';
import { Application } from 'express';
import { connection } from '../models/databases/userDB.js';
import http from 'http';
import App from '../app.js';
import { AddressInfo } from 'node:net';
import { SessionData } from '../@types/interfaces/interfaces.js';
import createUserTable from '../models/Schemas/userModel.js';

const config: {
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
} = await getConfig();

const PORT: string | number = config.port || 9080;
const HOST: string = config.host;
const serverUrl: string = config.serverUrl;

// Logic to start SERVER
const app: Promise<Application> = App(config);
const server: http.Server<
    typeof http.IncomingMessage,
    typeof http.ServerResponse
> = http.createServer(await app);

await turnOnListener();
createUserTable();

async function turnOnListener(): Promise<void> {
    try {
        server.on('error', onError);
        server.listen(PORT, () => {
            console.info(
                `
					MySQL Sandbox Server is Listening at ${serverUrl}
				`
            );
        });
        onListening();
    } catch (error: unknown) {
        console.error(`Error in the turnOnListenerFunc() Function: ${error}`);
    }
}

function onError(error: unknown) {
    if ((error as NodeJS.ErrnoException).syscall !== 'listen') {
        throw error;
    }
    const bind = typeof PORT === 'string' ? `Pipe  ${PORT} ` : `Port ${PORT}`;

    // handle specific listen errors with friendly messages
    switch ((error as NodeJS.ErrnoException).code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
        // falls through
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
        // falls through
        default:
            throw error;
    }
}

async function onListening(): Promise<void> {
    try {
        console.info(` onListening started on Port ${PORT}`);

        setTimeout(() => {
            const server_address: string | AddressInfo | null =
                server.address();
            if (server_address && typeof server_address !== 'string') {
                console.info(
                    `
						server_address: ${config.host}:${server_address.port}
					`
                );
            } else {
                console.log(
                    `server_address: ${config.host}:${
                        server_address as string | AddressInfo | null
                    }`
                );
            }

            if (server_address) {
                const bind =
                    typeof server_address === 'string'
                        ? `pipe ${config.host}`
                        : `port ${server_address.port}`;

                console.info(
                    `
						Application Name: ${config.applicationName}
							listening on ${bind}
					`
                );
            } else {
                console.error(
                    `
						Server address is null @ host: ${HOST}.
							Ensure the server is started and listening.
					`
                );
            }
        }, 300);
    } catch (error: unknown) {
        console.error(`Error in the onListening() Function: ${error}`);
    }
}

export { connection as default };
