import { Component, EventEmitter, Output } from '@angular/core';
import { AdminAuthService } from '../admin-auth.service';


@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent {
  adminAuth: any = { username: '', password: '' };
  @Output() adminSubmit = new EventEmitter<any>();

  constructor(private adminAuthService: AdminAuthService) {}


  submitForm() {
    // Check admin authentication using the service
    if (this.adminAuthService.authenticate(this.adminAuth.username, this.adminAuth.password)) {
      // Send adminAuth data to the parent component (AccountComponent)
      console.log('Emitting adminSubmit event:', this.adminAuth);
      this.adminSubmit.emit(this.adminAuth);
      console.log('Correct admin credentials');
    } else {
      console.log('Invalid admin credentials');
      // Handle invalid credentials as needed
    }
  }

  
  
}
