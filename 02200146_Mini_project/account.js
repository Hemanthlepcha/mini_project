const firebaseConfig = {
    apiKey: "AIzaSyDWOYO-J_gWIDmzRfVSlqZJ3tXhRz2efmw",
    authDomain: "miniproject-9fba2.firebaseapp.com",
    databaseURL: "https://miniproject-9fba2-default-rtdb.firebaseio.com",
    projectId: "miniproject-9fba2",
    storageBucket: "miniproject-9fba2.appspot.com",
    messagingSenderId: "457971449015",
    appId: "1:457971449015:web:5018698b32efd4d899a132",
    measurementId: "G-YD7RDZZ46P"
  };
  //initialize the firebase
  firebase.initializeApp(firebaseConfig);

  // reference the database

  var reviewassetDB =firebase.database().ref('register')
  document.getElementById("register").addEventListener('submit',submitform)


  function submitform(e){ 
    e.preventDefault();
    var name = getElementVal('name');
    var password = getElementVal('password');

    savemessages(name, password);

    //alert(getElementVal(''))
    document.querySelector('.alert').style.display='block';




    console.log(name , password);
  }
  const savemessages= (name, password) =>{
    var newregisterform = reviewassetDB.push(); 

    newregisterform.set({
      name: name, 
      password: password,
    })
  }


  const getElementVal =(id) => {
    return document.getElementById(id).value;
  }

