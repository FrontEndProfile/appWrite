import { Component , OnInit } from '@angular/core';
import { appwriteConfig, appwriteDatabase  } from '../../appwrite';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
  bookData: any = [];

  constructor() {}

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    const promise = appwriteDatabase.listDocuments(
      appwriteConfig.databaseId, // Pass the database ID
      appwriteConfig.collectionId // Pass the collection ID
    );
    promise.then(
      (response) => {
        this.bookData = response.documents; // Assuming 'documents' is the property containing your data
        // Log the beautified JSON response
        console.log(JSON.stringify(this.bookData, null, 2)); // Success
      },
      (error) => {
        console.log(error); // Failure
      }
    );
  }
}
