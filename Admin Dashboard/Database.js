const firebaseConfig = {
    apiKey: "AIzaSyB65xsJlwqbS3s3RcouG_RVT46WyAsBaOQ",
    authDomain: "logs-a2382.firebaseapp.com",
    databaseURL: "https://logs-a2382-default-rtdb.firebaseio.com",
    projectId: "logs-a2382",
    storageBucket: "logs-a2382.appspot.com",
    messagingSenderId: "468832078094",
    appId: "1:468832078094:web:4eab5dedafcd1228b3af5f",
    measurementId: "G-ZQPSXB3S0V"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref('SignUpForm')
document.getElementById('SignUpForm').addEventListener('submit',submitform)

function submitform(e)
{
    e.preventDefault();

    var username = getElementVal('u_name');
    var email = getElementVal('u_mail');
    var password = getElementVal('u_pwd');
    

    saveMessages(username,email,password);
}

const saveMessages =(username,email,password) => {
    var newSignUp = contactFormDB.push();
    newSignUp.set({
        nm: username,
        emailId: email,
        pass: password,
    })
};
const getElementVal =(id) =>
{
    return document.getElementById(id).value;
}