import { Component, OnInit , Input } from '@angular/core';
import { appwriteConfig, appwriteDatabase } from '../../appwrite'; // Replace with the actual path
import { ID } from 'appwrite';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  books: any[] = [];
  selectedBook: any = {};

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const promise = appwriteDatabase.listDocuments(appwriteConfig.databaseId, appwriteConfig.collectionId);

    promise.then(
      (response) => {
        this.books = response.documents;
      },
      (error) => {
        console.log('Appwrite Fetch Failure:', error);
      }
    );
  }

  updateBook(book: any) {
    // Set the selectedBook to the clicked book for update
    this.selectedBook = { ...book };

    // Log the selectedBook to the console for debugging
    console.log('Selected Book:', this.selectedBook);
  }

  deleteBook(bookId: string) {
    const promise = appwriteDatabase.deleteDocument(appwriteConfig.databaseId, appwriteConfig.collectionId, bookId);

    promise.then(
      (response) => {
        console.log('Appwrite Delete Success:', response);

        // Optionally, you can refresh the list after deleting a book
        this.fetchData();
      },
      (error) => {
        console.log('Appwrite Delete Failure:', error);
      }
    );
  }

  showUpdateForm(book: any) {
    // Set the selectedBook to the clicked book for update
    this.selectedBook = { ...book };
  }

  submitUpdate() {
    // Check if selectedBook is not empty before updating
    if (!this.selectedBook || !this.selectedBook.$id) {
      console.log('Selected Book is empty. Aborting update.');
      return;
    }

    // Remove any Appwrite-specific properties before updating
    const { $id, $createdAt, $updatedAt, $permissions, $databaseId, $collectionId, ...updateData } = this.selectedBook;

    // Use Appwrite's method to update a document
    const promise = appwriteDatabase.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collectionId,
      this.selectedBook.$id,
      updateData  // Send only the properties you want to update
    );

    promise.then(
      (response) => {
        console.log('Appwrite Update Success:', response);

        // Optionally, you can refresh the list after updating a book
        this.fetchData();
        this.selectedBook = {}; // Clear the selectedBook after updating
      },
      (error) => {
        console.log('Appwrite Update Failure:', error);
      }
    );
  }
  
}
