import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { CommonService } from '../../services/common/common.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

  loginForm: FormGroup;
  user: User = new User();
  constructor(private fb: FormBuilder, private router: Router,
    private commonService: CommonService) {
    this.createForm();
  }

  /**
   *  Generating reactive form for Login
   */
  createForm() {
    this.loginForm = this.fb.group({
      emailAddress: ['', Validators.required ],
      password: ['', Validators.required ]
      
    });
  }
  /**
   *  Navigating to Registration Screen
   */
  goToRegistration() {
    this.router.navigate(['/registration']);
  }
  /**
   *  Navigating to Mortgage form screen after user verfied 
   */
  goToMortgageForm() {
    console.log(this.loginForm);
    this.user = this.loginForm.value;
    this.commonService.userLogin(this.user).subscribe(res => {
      if(res) {
        this.router.navigate(['/mortgage-form']);
      }
      
    }   
       
    );
    
  }
  ngOnInit() {
  }
  
  call(){}
}
