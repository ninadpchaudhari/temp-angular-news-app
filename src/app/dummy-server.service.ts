import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyServerService {

  constructor() { }
  dummyFunction(id:string){
    console.log("logging from Service" + id);
  }
  
}
