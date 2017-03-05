import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GooglePlus } from 'ionic-native';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }

googleLogin(){
    GooglePlus.login({'webClientId':'686225003621-2mepq7viuugltg3p8rpbui3jdj9ok6vb.apps.googleusercontent.com'}).then( (response) => {
        var provider = firebase.auth.GoogleAuthProvider.credential(response.idToken);
           console.log(response);
           console.log(provider);

      })
      .catch((error)=>{
        console.log(error);
      })

}



}
