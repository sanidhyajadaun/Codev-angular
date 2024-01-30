// reactive-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../Services/registration.service';
import { AllownumbersonlyDirective } from '../Directives/allownumbersonly.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  providers: [AllownumbersonlyDirective]
})
export class ReactiveFormComponent implements OnInit {
  registrationForm!: FormGroup;
  errorMsg = '';
  otpDigits = Array.from({ length: 4 });

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
    // Set the file name to a separate form control
    // this.registrationForm.get('profileImage')?.setValue(file.name);
    this.registrationForm.patchValue({
      profileImage: file
    });
}


  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    
    this.registrationForm = this.fb.group({
      userName: ['',[Validators.required, Validators.minLength(3), forbiddenNameValidator]],
      email: [''],
      password: [''],
      confirmPassword: [''],
      phoneNumber: ['', [Validators.maxLength(10), this.phoneNumberValidator()]],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: ['']
      }),
      subscribe: [false],
      alternateEmails: this.fb.array([]),
      profileImage:[null]
    }, { validator: PasswordValidator });

    // Initialize OTP controls
    for (let i = 1; i <= 4; i++) {
      this.registrationForm.addControl(`otp${i}`, this.fb.control(''));
    }

    // Load data from local storage and populate the form
    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      //this.registrationForm.patchValue(parsedData);
    }

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

  phoneNumberValidator() {
    return (control: any) => {
      const phoneNumber = control.value;
      if (phoneNumber && phoneNumber.length !== 10) {
        return { 'invalidPhoneNumber': true };
      }
      return null;
    };
  }

  // loadApiData() {
  //   this.registrationForm.patchValue({
  //     userName: '',
  //     password: '',
  //     confirmPassword: '',
  //   });
  // }

  onSubmit() {
    const otpValue = this.getOtpValue(); // Get OTP value from form controls
    this.registrationForm.patchValue({ otp: otpValue }); // Update the form with the OTP value


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

  getOtpValue(): string {
    const otpArray = this.otpDigits.map((_, index) => this.registrationForm.get(`otp${index + 1}`)!.value);
    return otpArray.join('');
  }
  
}
