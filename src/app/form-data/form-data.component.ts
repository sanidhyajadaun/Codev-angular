// form-data.component.ts

import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  parsedData: any[] = [];

  constructor(private registrationDataService: RegistrationService) {}

  ngOnInit(): void {
    this.parsedData = this.registrationDataService.getParsedData();
  }
}
