import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CommonService } from '../../services/common/common.service';
import { MortgageInfo } from '../../models/MortgageInfo';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.scss']
})
export class MortgageFormComponent implements OnInit {

  mortgageForm: FormGroup;
  mortgageInfo: MortgageInfo = new MortgageInfo();
  firstTimeBuyerOption: string;
  primaryResidencyOption: string;
  options: string[] = ['Yes', 'No'];


  constructor(private fb: FormBuilder, private router: Router, private commonService: CommonService) {
    this.createForm();
  }

  createForm() {
    this.mortgageForm = this.fb.group({
      isFirstTimeBuyer: [],
      isItPrimaryResidency: [],
      employerName: ['', Validators.required ],
      jobTitle: ['', Validators.required ],
      yearsOfService: ['', Validators.required ],
      salary: ['', Validators.required ],
      addressLine1: ['', Validators.required ],
      addressLine2: ['', Validators.required ],
      city: ['', Validators.required ],
      province: ['', Validators.required ],
      country: ['', Validators.required ],
      purchasePrice: ['', Validators.required ],
      downPayment: ['', Validators.required ],
      mortgageAmount: ['', Validators.required ],
      closingDate: ['', Validators.required ]
    });
  }
  goToSubmitForm() {
    console.log(this.mortgageForm);
   this.mortgageInfo = this.mortgageForm.value;
   this.commonService.submitMortgageForm(this.mortgageInfo);
  }
  goToCancel() {
    
  }
  ngOnInit() {
  }


}
