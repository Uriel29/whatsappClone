const firebase = require('firebase');
require('firebase/firestore');


export class Firebase{

   constructor(){
      this._config = {
            apiKey: "AIzaSyBfO1WlQq_gh4e14mCCAO13wxbIgZHvOfQ",
            authDomain: "whatsapp-clone-6bd30.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-6bd30.firebaseio.com",
            projectId: "whatsapp-clone-6bd30",
            storageBucket: "whatsapp-clone-6bd30.appspot.com",
            messagingSenderId: "738511614685",
            appId: "1:738511614685:web:a3c9b1284ea3ab617f2134"

      };

      this.init();
   }

   init(){
      if(!window._initializedFirebase){

         // Initialize Firebase
         firebase.initializeApp(this._config);
       

         firebase.firestore().settings({});

         window._initializedFirebase = true;

      };
      
   };

   static db(){

      return firebase.firestore();
   };

   static dh(){

      return firebase.storage();
   };

   initAuth(){

      return new Promise((s,f) => {

         let provider = new firebase.auth.GoogleAuthProvider();

         firebase.auth().signInWithPopup(provider)
         .then(result => { 

            let token = result.credential.accessToken;
            let user = result.user;

            s({
               user,
               token
            });

           


         }).catch(err => f(err));

      });

   };
   
}