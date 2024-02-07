import { Client, Account , Databases, ID } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65c336ec85c93deea7a4'); // Replace with your project ID

export const account = new Account(client);
const databases = new Databases(client);


// const promise = databases.createDocument(
//     '65c33c17a1c8d3d51504',
//     '65c33c367e68080a43e2',
//     ID.unique(),
//     { "book_name": "Hamlet", "book_rating": 4.5 }
// );

const promise = databases.listDocuments('65c33c17a1c8d3d51504', '65c33c367e68080a43e2');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});

export { ID } from 'appwrite';
