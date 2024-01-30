import { Component } from '@angular/core';
import { TestapiService } from '../Services/testapi.service';
import { BreakingBadQuote } from '../Interfaces/testapi';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrls: ['./testapi.component.css']
})
export class TestapiComponent {
  quotes: BreakingBadQuote[]=[];

  constructor(private testApiService: TestapiService){}

  ngOnInit():void{
    this.loadQuotes();
  }

  loadQuotes(){
    this.testApiService.getQuotes().subscribe(
      (data) => {this.quotes=data;},
      (error) => {console.log('Error fetching quotes',error);}
    )
  }
}
