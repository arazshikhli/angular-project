import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  licenseCheck=false
   form!:FormGroup
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      surname:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.email,
      Validators.required,
        Validators.minLength(5)
      ]),
      password:new FormControl(null,
        [
          Validators.required,
          Validators.minLength(8)
        ]),

      dateOfBirth:new FormControl(null,Validators.required)

    })
  }
  submit() {
     if(this.form.valid){
       console.log(this.form)
       const formData={...this.form.value}
       console.log(formData)
     }
  }

  goToLicense() {
    this.router.navigate(['/license']);
  }
}
