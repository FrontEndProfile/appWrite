import { Component, OnInit } from '@angular/core';
import { appwriteConfig, appwriteDatabase  } from './appwrite'; // Replace with the actual path
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  // bookData: any = [];

  // constructor() {}

  ngOnInit() {
    // this.fetchData();
  }
  // fetchData() {
  //   const promise = appwriteDatabase.listDocuments(
  //     appwriteConfig.databaseId, // Pass the database ID
  //     appwriteConfig.collectionId // Pass the collection ID
  //   );
  //   promise.then(
  //     (response) => {
  //       this.bookData = response.documents; // Assuming 'documents' is the property containing your data
  //       // Log the beautified JSON response
  //       console.log(JSON.stringify(this.bookData, null, 2)); // Success
  //     },
  //     (error) => {
  //       console.log(error); // Failure
  //     }
  //   );
  // }


}
