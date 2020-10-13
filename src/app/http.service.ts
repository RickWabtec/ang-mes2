import { Injectable } from '@angular/core';
import * as Parse from 'parse';

@Injectable()

export class HttpService {

  constructor() { 
    Parse.initialize("UdSMZYRtshsMn4XfbCQCGUgTUMM5VzuKYDRUl52x","G4A00bZUVCzKGgTQRZEcx8hjAhAvPNgnVJnXrARk"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'
  }

  myMethod() {
    const MyFirstClass = Parse.Object.extend("MyFirstClass");
    const myFirstClass = new MyFirstClass();

    myFirstClass.set("name", "I'm able to save objects!");
    myFirstClass.save()
    .then((object) => {
      // Success
      alert('New object created with objectId: ' + object.id);
    }, (error) => {
      // Save fails
      alert('Failed to create new object, with error code: ' + error.message);
    });

    return console.log('hey man!');
  }

}