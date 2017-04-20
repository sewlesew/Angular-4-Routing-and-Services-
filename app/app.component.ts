import { Component } from '@angular/core';
import {DbService} from './db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.active { color:#fff; background-color:lightgray; border-radius:32px; padding: 5px 10px;}'+   
    ' .outter{ width:60%; margin:0 auto;background-color:lightgray;height:500px}'],
    providers:[DbService]
})
export class AppComponent {  
}
