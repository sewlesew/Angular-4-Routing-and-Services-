
import {EventEmitter} from '@angular/core';
export class DbService {
  jsonData:Object[];
  public l;
  public push:EventEmitter<Object>=new EventEmitter();

  constructor() { 
   this.jsonData=[{id:"1",name:"Asaad saad", email:'asaad@mum.edu'},
   {id:"2",name:"Sewlesew Meseganaw", email:'smeseganaw@mum.edu'},
   {id:"3",name:"John M.", email:'john@mum.edu'},
   {id:"4",name:"Rafael Y.", email:'Rafael@mum.edu'},
   {id:"5",name:"Nathan M.", email:'Nathan@mum.edu'},
   {id:"6",name:"Goody J.", email:'Goody@mum.edu'},
   {id:"7",name:"Kachael U.", email:'Kachael@mum.edu'},
   {id:"8",name:"Fredrick K.", email:'Fredrick@mum.edu'}
   
   ];    
   
}
// another way of doing it using observables
// pushData(value){
  
//   for(let item of this.jsonData){    
//          if(item['id']==value){   
//            console.log(item['id']+item['name']);      
//                  this.l=item;
//                 //  break;
//          }
//        }

//  this.push.emit(this.l);
// }
  getData(){
    return this.jsonData;
  }

// another way of doing it using observables
// Description(idnum):Object{  
       
//        return this.l;   
// }


}
