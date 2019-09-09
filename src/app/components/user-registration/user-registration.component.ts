import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common/common.service';
import { User } from '../../models/User';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  user: User = new User();
  constructor(private fb: FormBuilder, private router: Router, 
    private commonService: CommonService,private snackBar: MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required ],
      lastName: ['', Validators.required ],
      dateOfBirth: ['', Validators.required ],
      emailAddress: ['', Validators.required ],
      password: ['', Validators.required ],
      address: ['', Validators.nullValidator ],
      cellPhoneNumber: ['', Validators.nullValidator ]
      
    });
  }
  goToLogin() {
    this.router.navigate(['/login']);
  }
  doSaveUser() {
   console.log(this.registrationForm);
   this.user = this.registrationForm.value;
  // this.commonService.userRegistration(this.user);

   this.commonService.userRegistration(this.user).subscribe(res => {
    if(res) {
      this.openSnackBar("User Registered");
    }  
   }); 
  }

  openSnackBar(message: string) {
    this.snackBar.open(message,'', {
      duration: 2000,
    });
  }
  ngOnInit() {
  }

}
