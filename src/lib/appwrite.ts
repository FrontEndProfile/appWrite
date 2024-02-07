import { Client, Account , Databases, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c336ec85c93deea7a4'); // Replace with your project ID

export const account = new Account(client);
const databases = new Databases(client);


const promise = databases.createDocument(
    '65c33c17a1c8d3d51504',
    '65c33c367e68080a43e2',
    ID.unique(),
    { "title": "Hamlet" }
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});


export { ID } from 'appwrite';
