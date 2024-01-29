import { VariableBinding } from '@angular/compiler';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  template: `
    <br>
    <button (click)="onClick()" class="button-styles">View Basic Functionality Usage</button>
    <button (click)="onPress()" class="button-styles" style="margin-left: 10px;">Manipulate DOM</button>
    <button (click)="interactComponent()" class="button-styles" style="margin-left: 10px;">Component Interaction</button>

    <div *ngIf="componentInteraction && comTime % 2!==0 && !clicked && !showInput">
      <h3 style="margin-left: 10px;"> {{"" + name}} </h3>
      <input [(ngModel)]="userData" [placeholder]="userInput" class="input-placeholder"/>
      <button (click)="fireEvent()" class="submit-button" style="margin-left: 10px;">Send Data</button>
    </div>

    <div *ngIf="showInput && domTime % 2 !== 0 && !clicked && !componentInteraction">
      <input [(ngModel)]="userColor" [placeholder]="inputPlaceholder" class="input-placeholder"/>
      <button (click)="manipulateDOM(userColor)" class="submit-button" style="margin-left: 10px;">Submit</button>
      <h3 [ngStyle]="dynamicStyles" *ngIf="dynamicStyles" style="margin-left: 10px;">Dynamic Styles Applied!</h3>
    </div>

    <div class="container" *ngIf="clicked && funcTime % 2 !== 0 && !showInput && !componentInteraction">
      <h3 class="text-success"> This is class binding </h3>
      <h3 [class]="successClass"> This is another way of class binding </h3>
      <h3 class="text-special" [class]="successClass"> Class Attribute and Binding property</h3>
      <h3 [class.text-danger]="hasError"> This is class binding with conditional Checking! </h3>
      <h3 [ngClass]="messageClass">This is messageClass directive ngclass is used!</h3>
      <h3 [style.color]="hasError ? 'red' : 'green'">Style Binding conditional Checking!</h3>
      <h3 [style.color]="highlightColor"> Style Binding 2</h3>
      <h3 [ngStyle]="titleStyle">Here ngstyle is used!</h3>
      ngif block with condition and elseblock
    </div>

    
  `,
  styles: [`
    .text-success {
      color: blue;
    }

    .text-danger {
      color: red;
    }

    .text-special {
      font-style: italic;
    }

    .styles {
      margin-top: 10px; /* You can adjust the value as needed */
    }

    .container {
      margin-left: 30px; /* Adjust the margin as needed */
    }
    
    .button-styles {
      margin-left: 5px;
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .button-styles:hover {
      background-color: #45a049;
    }

    .submit-button {
      background-color: #3498db; /* Choose a color that goes well with green */
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
    }
    
    .submit-button:hover {
      background-color: #2980b9; /* Adjust the hover color as needed */
    }

    .input-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .input-placeholder {
      margin-left: 10px;
      padding: 8px 16px;
      margin-top: 10px; /* Adjust the margin-top as needed */
      padding: 8px;
      border: 1px solid #ccc; /* Adjust border color as needed */
      border-radius: 4px;
      width: 200px; /* Adjust the width as needed */
    }
  `],
})


export class TestComponent {
  @Input('parentData') public name: any;

  public clicked: boolean = false;
  public funcTime = 0;
  public domTime = 0;
  public comTime = 0;
  displayName = true;

  public successClass = 'text-success';
  public hasError = false;
  public highlightColor = 'orange';
  public messageClass = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.displayName,
  };

  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic',
  };

  onClick() {
    this.clicked = true;
    this.showInput = false;
    this.componentInteraction = false;
    this.funcTime++;
  }

  public userColor: string = '';
  public inputPlaceholder: string = 'Enter color';
  public showInput: boolean = false;
  onPress() {
    this.showInput = true;
    this.clicked = false;
    this.componentInteraction = false;
    this.domTime++;
  }

  public dynamicStyles: any = {};

  manipulateDOM(color: string) {
    // Example of dynamically changing styles
    this.dynamicStyles = {
      color: color,
      fontSize: '20px',
      // add more styles as needed
    };
  }

  @Output() public childEvent = new EventEmitter();
  public userData: string = '';
  public userInput: string = 'Enter data';
  public componentInteraction: boolean = false;
  interactComponent(){
    this.componentInteraction = true;
    this.clicked = false;
    this.showInput = false;
    this.comTime++;
  }

  fireEvent(){
    this.childEvent.emit(this.userData);
  }

}


// Template Reference Variable 
// <h3>
//       Welcome {{name}}!
//     </h3>
//     <input #myInput type="text">
//     <button (click)="logMessage(myInput.value)">Log</button>

// Two way Binding
// <input [(ngModel)]="name" type="text">
//     {{name}}


// ngif directive with thenblock and elseblock
// <div *ngIf="displayName; then thenblock;else elseblock"></div>

//   <ng-template #thenblock>
//     <h3>ThenBlock is executed</h3>
//   </ng-template>

//   <ng-template #elseblock>
//     <h3>Else Block is exececuted</h3>
//   <ng-template>'

// ngSwitch
// public color="white";
// <div [ngSwitch]="color">
//       <div *ngSwitchCase=" 'red' "> You picked red colour</div>
//       <div *ngSwitchCase=" 'blue' "> You picked blue colour</div>
//       <div *ngSwitchCase=" 'green' "> You picked green colour</div>
//       <div *ngSwitchDefault> Pick again!!! </div>
//     </div>


// <div *ngFor="let color of colors; first as i">
//       <h3>{{i}} {{color}}</h3>
//     </div>