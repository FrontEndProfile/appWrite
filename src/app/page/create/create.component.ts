import { Component, OnInit } from '@angular/core';
import { appwriteConfig, appwriteDatabase } from '../../appwrite'; // Replace with the actual path
import { ID } from 'appwrite'; // Import Appwrite's ID module

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent implements OnInit {
  book = { name: '', info: '', rating: 0 };
  constructor() {}

  ngOnInit() {
    // this.fetchData();
  }

  addBook() {
    // Use Appwrite's ID.unique() to generate a unique identifier
    const documentId = ID.unique();

    // Match the attributes in your book object with Appwrite's expected attributes
    const appwriteBook = {
      book_rating: this.book.rating,
      book_name: this.book.name,
      book_info: this.book.info,
    };

    console.log('Local Data:', appwriteBook); // Log the data locally

    const promise = appwriteDatabase.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      documentId,
      appwriteBook
    );

    promise.then(
      (response) => {
        console.log('Appwrite Success:', response);

        // Optionally, you can reset the form after successful submission
        // Reset the form after successful submission
        this.book = { name: '', info: '', rating: 0 };
      },
      (error) => {
        console.log('Appwrite Failure:', error);
      }
    );
  }
}
