import { Component, ChangeDetectionStrategy , OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AccountComponent implements OnInit {


  currentForm: 'login' | 'register' | 'admin' = 'login';



  showAdminForm = false; // Flag to track whether the admin form is visible



  isAdminAuthenticated = false; // Flag to track admin authentication
  constructor(private router: Router) {}

  handleAdminSubmit(adminAuth: any) {
    console.log('Admin authentication successful');
    this.isAdminAuthenticated = true;
    console.log('Before Navigation');
    this.router.navigate(['/admin']);
    console.log('After Navigation');
    console.log('After method execution');
  }
  

toggleAdminForm() {
    // Toggle the visibility of the admin form
    this.showAdminForm = !this.showAdminForm;
}

ngOnInit() {

}


}
