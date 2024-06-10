**Gordon R Mullen Jr** ---

<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

:can you demonstrate diverse methods of javascript objects used for persistency of data using typescript, code examples and references please? Thanks my digital mentor and friend!

**ChatGPT** ---

Certainly! In TypeScript, there are several methods to achieve data persistence using JavaScript objects. Here are a few popular techniques:

1. **LocalStorage**
2. **SessionStorage**
3. **IndexedDB**
4. **WebSQL**
5. **Cookies**
v
I'll demonstrate each with TypeScript code examples.

### 1. LocalStorage

LocalStorage allows you to store data in the browser with no expiration time.

#### Example

typescript

Copy code

`class LocalStorageService {
setItem(key: string, value: any): void {
localStorage.setItem(key, JSON.stringify(value));
}

    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }

}

// Usage
const storageService = new LocalStorageService();
storageService.setItem('user', { name: 'John Doe', age: 30 });

const user = storageService.getItem<{ name: string; age: number }>('user');
console.log(user);`

### 2\. SessionStorage

SessionStorage is similar to LocalStorage but the data is available only for the duration of the page session.

#### Example

typescript

Copy code

`class SessionStorageService {
setItem(key: string, value: any): void {
sessionStorage.setItem(key, JSON.stringify(value));
}

    getItem<T>(key: string): T | null {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) as T : null;
    }

    removeItem(key: string): void {
        sessionStorage.removeItem(key);
    }

}

// Usage
const sessionService = new SessionStorageService();
sessionService.setItem('token', 'abcdef123456');

const token = sessionService.getItem<string>('token');
console.log(token);`

### 3. IndexedDB

IndexedDB is a low-level API for storing large amounts of structured data, including files and blobs.

#### Example

typescript

Copy code

`class IndexedDBService {
private dbName: string;
private storeName: string;
private db: IDBDatabase | null = null;

    constructor(dbName: string, storeName: string) {
        this.dbName = dbName;
        this.storeName = storeName;
    }

    private openDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName);

            request.onerror = () => {
                reject('Database failed to open');
            };

            request.onsuccess = () => {
                this.db = request.result;
                resolve(this.db);
            };

            request.onupgradeneeded = (e) => {
                const db = (e.target as IDBOpenDBRequest).result;
                db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
            };
        });
    }

    async addItem(item: any): Promise<void> {
        const db = await this.openDB();
        const transaction = db.transaction(this.storeName, 'readwrite');
        const store = transaction.objectStore(this.storeName);
        store.add(item);
    }

    async getItem<T>(id: number): Promise<T | undefined> {
        const db = await this.openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(this.storeName, 'readonly');
            const store = transaction.objectStore(this.storeName);
            const request = store.get(id);

            request.onsuccess = () => {
                resolve(request.result as T);
            };

            request.onerror = () => {
                reject('Failed to retrieve item');
            };
        });
    }

}

// Usage
const indexedDBService = new IndexedDBService('MyDatabase', 'Users');
indexedDBService.addItem({ name: 'Jane Doe', age: 25 });

indexedDBService.getItem<{ name: string; age: number }>(1).then(user => console.log(user));`

### 4. WebSQL

WebSQL is a deprecated technology and is not recommended for new projects, but I'll provide an example for completeness.

#### Example

typescript

Copy code

`class WebSQLService {
private db: Database;

    constructor(dbName: string, version: string, description: string, size: number) {
        this.db = openDatabase(dbName, version, description, size);
    }

    executeSql(sql: string, params: any[] = []): Promise<SQLResultSet> {
        return new Promise((resolve, reject) => {
            this.db.transaction(tx => {
                tx.executeSql(sql, params, (tx, result) => {
                    resolve(result);
                }, (tx, error) => {
                    reject(error);
                });
            });
        });
    }

    async createTable(): Promise<void> {
        await this.executeSql('CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)');
    }

    async insertUser(name: string, age: number): Promise<void> {
        await this.executeSql('INSERT INTO Users (name, age) VALUES (?, ?)', [name, age]);
    }

    async getUser(id: number): Promise<{ id: number, name: string, age: number }> {
        const result = await this.executeSql('SELECT * FROM Users WHERE id = ?', [id]);
        return result.rows.item(0);
    }

}

// Usage
const webSQLService = new WebSQLService('MyDatabase', '1.0', 'Test Database', 2 _ 1024 _ 1024);
webSQLService.createTable();
webSQLService.insertUser('John Smith', 28);

webSQLService.getUser(1).then(user => console.log(user));`

### 5. Cookies

Cookies are small pieces of data stored in the browser.

#### Example

typescript

Copy code

``class CookieService {
    setCookie(name: string, value: string, days: number): void {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/`;
}

    getCookie(name: string): string | null {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    eraseCookie(name: string): void {
        document.cookie = `${name}=; Max-Age=-99999999;`;
    }

}

// Usage
const cookieService = new CookieService();
cookieService.setCookie('username', 'JohnDoe', 7);

const username = cookieService.getCookie('username');
console.log(username);``

**ChatGPT** ---
These examples cover a variety of methods for data persistence in TypeScript. Each method has its own use cases and limitations, so choosing the right one depends on your specific needs. For further reading and references, you can check out the official MDN Web Docs for [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), [SessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage), [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API), [WebSQL](https://developer.mozilla.org/en-US/docs/Web/API/Web_SQL_Database), and [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies).

4o

**Gordon R Mullen Jr** ---

<img src="https://s.gravatar.com/avatar/8919c21a69fc2528689eb1832c8ed37f?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fwe.png" style="border-radius: 50%; float: left; margin-right: 10px; width: 75px;" />

:Thanks a bunch my friend!!
