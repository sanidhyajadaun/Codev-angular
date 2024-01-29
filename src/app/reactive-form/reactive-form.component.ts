// import { Component, OnInit } from '@angular/core';
// import { FormBuilder,FormGroup,Validators, FormArray } from '@angular/forms';
// import { forbiddenNameValidator } from '../shared/user-name.validator';
// import { PasswordValidator } from '../shared/password.validator';
// import { RegistrationService } from '../registration.service';


// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit
// {
  
//   registrationForm!: FormGroup;
//   errorMsg = '';
//   get userName(){
//     return this.registrationForm.get('userName');
//   }

//   get email(){
//     return this.registrationForm.get('email');
//   }

//   get alternateEmails(){
//     return this.registrationForm.get('alternateEmails') as FormArray;
//   }

//   addAlternateEmail(){
//     this.alternateEmails.push(this.fb.control(''));
//   }

//   constructor(private fb: FormBuilder,private _registrationService: RegistrationService){}
//   ngOnInit() {
//     this.registrationForm = this.fb.group({
//       userName : ['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
//       email:[''],
//       password : [''],
//       confirmPassword : [''],
//       address : this.fb.group
//       ({
//         city : [''],
//         state : [''],
//         postalCode : ['']
//       }),
//       subscribe: [false],
//       alternateEmails : this.fb.array([])
//     },{validator:PasswordValidator});
//     this.registrationForm.get('subscribe')?.valueChanges
//     .subscribe(checkedValue => {
//       const email = this.registrationForm.get('email');
//       if(checkedValue){
//         email?.setValidators(Validators.required);
//       }else {
//         email?.clearValidators();
//       }
//       email?.updateValueAndValidity();
//     })
//   }

  
//   // registrationForm = new FormGroup({
//   //   userName : new FormControl(''),
//   //   password : new FormControl(''),
//   //   confirmPassword : new FormControl(''),
//   //   address : new FormGroup({
//   //     city : new FormControl(''),
//   //     state : new FormControl(''),
//   //     postalCode : new FormControl('')
//   //   })
//   // });

//   loadApiData(){
//     this.registrationForm.patchValue({
//       userName : '',
//       password : '',
//       confirmPassword : '',
      
//     });
//   }

//   onSubmit(){
//     console.log(this.registrationForm.value);
//     this._registrationService.register(this.registrationForm.value)
//     .subscribe(
//       response => console.log('Success!',response),
//       error => console.error('Error!',error)
//     );
//   }
// }

// // address :{
// //   city : 'Agra',
// //   state : 'UP',
// //   postalCode : '206245' 
// // }


// reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMsg = '';

  get userName() {
    return this.registrationForm.get('userName');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }

  // Inside ReactiveFormComponent class
  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.registrationForm.patchValue({
      profileImage: file
    });
}


  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    // Load data from local storage and populate the form
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.registrationForm.patchValue(parsedData);
    }

    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      subscribe: [false],
      alternateEmails: this.fb.array([]),
      profileImage:[null]
    }, { validator: PasswordValidator });

    this.registrationForm.get('subscribe')?.valueChanges
      .subscribe(checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     userName: '',
  //     password: '',
  //     confirmPassword: '',
  //   });
  // }

  onSubmit() {
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
      .subscribe(
        response => {
          console.log('Success!', response);
          localStorage.setItem('registrationData', JSON.stringify(this.registrationForm.value));
          // Clear local storage after successful registration
          //localStorage.removeItem('registrationData');
        },
        error => console.error('Error!', error)
      );
  }
}
