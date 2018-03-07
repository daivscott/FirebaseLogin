// Initialize Firebase
var config = {
    apiKey: "AIzaSyB9XxjJY71tIGgvfPHu6DtM8CwCXVPLJHM",
    authDomain: "loginproject-d76ae.firebaseapp.com",
    databaseURL: "https://loginproject-d76ae.firebaseio.com",
    projectId: "loginproject-d76ae",
    storageBucket: "loginproject-d76ae.appspot.com",
    messagingSenderId: "253817108391"
};
firebase.initializeApp(config);


// FirebaseUI config.
var uiConfig = {
    signInSuccessUrl: '#loggedin-page',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.

        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Terms of service url.
    tosUrl: '<your-tos-url>'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);