import { Component } from '@angular/core';
import { User } from '../Interfaces/user';
import { EnrollmentService } from '../Services/enrollment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  teams = ['Tech Team','Marketing Team','HR Team'];
  types = ['Full-time','Part-time','Intern'];
  submitted = false;
  userModel = new User('','',null,'default','','');
  errorMsg = '';

  teamHasError:boolean = false;
  validateTeam(value:any){
    if(value=='default'){
      this.teamHasError = true;
    }else{
      this.teamHasError = false;
    }
  }

  employmentTypeHasError: boolean = false;

  validateEmploymentType(value: any) {
    if (value === 'default') {
      this.employmentTypeHasError = true;
    } else {
      this.employmentTypeHasError = false;
    }
  }

  employeetimingHasError: boolean = true;
  employeetimingUntouched: boolean = true;

  constructor(private _enrollmentService: EnrollmentService) {}

  validateEmployeeTiming(value: any) {
    this.employeetimingUntouched = false;
    if (!value) {
      this.employeetimingHasError = true;
    } else {
      this.employeetimingHasError = false;
    }
  }

  onSubmit(userForm:any){
    console.log(userForm);
    // this.submitted=true;
    // this._enrollmentService.enroll(this.userModel)
    // .subscribe(
    //   data => console.log('Success!',data),
    //   error => this.errorMsg = error.statusText
    // );
  }

}
