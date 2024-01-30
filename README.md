# Codev

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Features by Component:
### Reactive Form Component:
#### Registration Form:

- Username validation with custom directive for forbidden names and minimum length.
- Email validation with pattern matching.
- Password and Confirm Password validation using a custom validator.
- Phone number validation with custom directive allowing only numeric input.
- OTP input with dynamic control creation.
- Address details with City, State, and Postal Code.
- Subscription checkbox for promotional offers.
- File upload for Profile Image.
- Form-wide validation for matching passwords.

#### Form Validation:

- Custom validation for minimum username length and forbidden names.
- Dynamic phone number validation with length check.

### Local Storage Handling:

- Loading data from local storage to populate the form (commented out in the code).

### Template-Based Form Component:
#### News API:

- Fetching news articles from a News API.
- Displaying news articles in the template.

#### Test API:

- Interaction with a test API (connectivity to localhost server).
- Displaying API data in the template.

### Shared Directive:
#### Allownumbersonly Directive:
- Allowing only numeric input in specified form fields (Phone Number).
#### Allowtextonly Directive:
- Allowing only text input in specified form fields (Username).
#### digitsonly Directive:
- Allowing only digit input in OTP field.
#### otp-focus Directive:
- Fowardung and backwarding of OTP boxes.
- 
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
