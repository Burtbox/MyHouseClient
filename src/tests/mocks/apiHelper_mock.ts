import { readFile } from 'fs';

const apiCall = (method: string, endpoint: string, token: string, body?: object, urlParams?: string) => new Promise((resolve, reject) => {
    // Load user json data from a file in de subfolder for mock data
    readFile(`./src/api/__mockData__/${method}_${endpoint}.json`, 'utf8', (err, data) => {
        if (err) reject(err);
        // Parse the data as JSON and put in the key entity (just like the request library does)
        resolve({ entity: JSON.parse(data) });
    });
});

export default apiCall;
