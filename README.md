# ionic2-googleplus-login (Android and IOS)
This example is Signin using Cordova Plugin Googleplus.

## Working Code
To run the above tested and ready code please clone the repository and use the following commands in your project root folder.

```
npm install 
ionic platform add android (or ios)
ionic build android (or ios)
ionic run android (or ios)
```

## Step by Step Working Example

###Requirements
* Ionic 2
* cordova plugin googleplus (https://ionicframework.com/docs/v2/native/google-plus)

### Installing cordova plugin googleplus Into Your Project
From the root of your, execute the following:

ionic plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid (REVERSED_CLIENT_ID needed only for IOS)

### iOS
To get your iOS REVERSED_CLIENT_ID, generate a configuration file (https://developers.google.com/mobile/add?platform=ios&cntapi=signin). This GoogleService-Info.plist file contains the REVERSED_CLIENT_ID you'll need during installation. This value is only needed for iOS.

The REVERSED_CLIENT_ID is also known as the "iOS URL Scheme" on the Developer's Console.

### Android
To configure Android, generate a configuration file here (https://developers.google.com/mobile/add?platform=android&cntapi=signin). Once Google Sign-In is enabled Google will automatically create necessary credentials in Developer Console. There is no need to add the generated google-services.json file into your cordova project.

Make sure you execute the keytool steps as explained here (https://developers.google.com/android/guides/client-auth) or authentication will fail.

#### IMPORTANT:
The step above, about keytool, show 2 types of certificate fingerprints, the Release and the Debug, when generating the configuration
file, it's better to use the Debug certificate fingerprint, after that, you have to go on Google Credentials Manager (https://console.developers.google.com/apis/credentials), and manually 
create a credential for OAuth2 client with your Release certificate fingerprint. This is necessary to your application work on both
Development and Production releases.
Ensure that you are using the correct alias name while generating the fingerprint.
```
$ keytool -exportcert -keystore <path-to-debug-or-production-keystore> -list -v -alias <alias-name>
```
Login on Android will use the accounts signed in on the user's device.

### Web Client Id
If you want to get an idToken or serverAuthCode back from the Sign In Process, you will need to pass the client ID for your project's
web application. This can be found on your project's API credentials page on the Google Developer's Console (https://console.developers.google.com/).

#### Installation
cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid (myreversedclientid known as iOS URL scheme)
#### IMPORTANT:
1.Please note that myreversedclientid is a place holder for the reversed clientId you find in your iOS configuration file. Do not surround this value with quotes. (iOS only Applications)
2.If you are building a hybrid application (iOS and Android), or an Android application, you have to replace myreversedclientid with the reverse value of Client ID in your Release credential generated on step 3, on Google Developer's Console, this will be: "com.googleusercontent.apps.uniqueId", without quotes.

##Usage

### Home Component
```
import { GooglePlus } from 'ionic-native';

googleLogin(){
      GooglePlus.login({'webClientId':'client id of the web app/server side'}).then( (response) => {
            var provider = firebase.auth.GoogleAuthProvider.credential(response.idToken);
               console.log(response);
               console.log(provider);

          })
          .catch((error)=>{
            console.log(error);
          });
  }
```

### Home html
```
<button (click)="googleLogin()" </button>
```

### Resources

* Ionic 2 - http://www.ionicframework.com

* Angular 2 - https://www.angular.io

* Ionic2 Native - https://ionicframework.com/docs/v2/native/














