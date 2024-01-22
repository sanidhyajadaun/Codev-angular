import { VariableBinding } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  template: `
    <h2> {{"Hello " + parentData}} </h2>
  `,
  // styleUrls: ['./test.component.css']
  styles: []
})

export class TestComponent {

  @Input() public parentData: any;

  //public colors = ["red","blue","green","white"];

}



// Class binding 
// <h2 class="text-success"> This is class binding </h2>
//     <h2 [class]="successClass"> This is another way of class binding </h2>
//     <h2 class="text-special" [class]="successClass"> Class Attribute and Binding property</h2>
//     <h2 [class.text-danger]="hasError"> This is class binding </h2>
//     <h2 [ngClass]="messageClass">This is messageClass directive ngclass is used!</h2>

// style binding
// <h2 [style.color]="hasError? 'red':'green'">Style Binding</h2>
//     <h2 [style.color]="highlightColor"> Style Binding 2</h2>
//     <h2 [ngStyle]="titleStyle">Here ngstyle is used!</h2>

// event Binding
// <button (click)="onClick($event)">Expecto Patronum 1</button>
//     <button (click)="greeting='Welcome Mr Snape'">Expecto Patronum 2</button>
//     <br>
//     {{greeting}}

// .text-success{
//   color:green;
// }
// .text-danger{
//   color:red;
// }
// .text-special{
//   font-style: italic;
// }
// `


// Template Reference Variable 
// <h2>
//       Welcome {{name}}!
//     </h2>
//     <input #myInput type="text">
//     <button (click)="logMessage(myInput.value)">Log</button>

// Two way Binding
// <input [(ngModel)]="name" type="text">
//     {{name}}


// ngif block with condition and elseblock
// <h2 *ngIf = "displayName; else elseBlock ">
//       Usage of *ngIf
//     </h2>
//     <ng-template #elseBlock>
//       <h2>
//         Name is hidden 
//       </h2>
//     </ng-template>


// ngif directive with thenblock and elseblock
// <div *ngIf="displayName; then thenblock;else elseblock"></div>

//   <ng-template #thenblock>
//     <h2>ThenBlock is executed</h2>
//   </ng-template>

//   <ng-template #elseblock>
//     <h2>Else Block is exececuted</h2>
//   <ng-template>'



// export class
// public name = "";
//   displayName= true;
  // public myId = "testId";
  // public isDisabled = true;
  // public successClass="text-success";
  // public hasError = false;
  // public isSpecial = true;
  // public highlightColor = "orange";
  // public messageClass = {
  //   "text-succeess": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }
  // public titleStyle = {
  //   color: "blue",
  //   fontStyle:"italic"
  // }

  // public greeting = "";  

  // onClick(event:any){
  //   console.log(event);
  //   this.greeting = 'He is half blood prince'; 
  // }

  // logMessage(value:any){
  //   console.log(value); 

  // }



// ngSwitch
// public color="white";
// <div [ngSwitch]="color">
//       <div *ngSwitchCase=" 'red' "> You picked red colour</div>
//       <div *ngSwitchCase=" 'blue' "> You picked blue colour</div>
//       <div *ngSwitchCase=" 'green' "> You picked green colour</div>
//       <div *ngSwitchDefault> Pick again!!! </div>
//     </div>


// <div *ngFor="let color of colors; first as i">
//       <h2>{{i}} {{color}}</h2>
//     </div>