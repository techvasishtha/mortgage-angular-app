import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/User';
import { MortgageInfo } from '../../models/MortgageInfo';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  uri = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) { }

  /**
   *  User Registration API
   */
  userRegistration(user: User) {
    
    console.log(user);
   return  this.httpClient.post(`${this.uri}/register`, user)
      //  .subscribe(res => console.log('Done'));
  }
  /**
   *  User Login API
   */
  userLogin(user: User) {
    console.log(user);
    return this.httpClient.post(`${this.uri}/login`, user)
       // .subscribe(res => console.log('Done'+res));
  }

  /**
   *  Mortgage Submission API
   */
  submitMortgageForm(mortgageInfo: MortgageInfo) {
    console.log(mortgageInfo);
    this.httpClient.post(`${this.uri}/apply-mortgage`, mortgageInfo)
        .subscribe(res => console.log('Done'));
  }
}
