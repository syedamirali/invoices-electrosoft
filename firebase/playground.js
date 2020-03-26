import fb from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAXG2-3QE8DQrh2G6NCIrJuUm86tN7enGg",
    authDomain: "invoices-6630d.firebaseapp.com",
    databaseURL: "https://invoices-6630d.firebaseio.com",
    projectId: "invoices-6630d",
    storageBucket: "invoices-6630d.appspot.com",
    messagingSenderId: "50639962533",
    appId: "1:50639962533:web:d6d47dfcf198c550afa84c",
    measurementId: "G-M8VP8N961T"
  };

fb.initializeApp(firebaseConfig);

var demoStateObject2={
    clientName:"Syed Faizan Ali",
    clientPhone:"0304-5094429",
    clientEmail:"allisyedamir2018@gmail.com",
    amount:"565490",
    date:"2000-2-23",
    time:"11:09:23"
};

//insert invoices: pushing data to the invoices array 
//fb.database().ref("invoices").push(demoStateObject2).getKey();

//defining database reference
const database=fb.database().ref("invoices");

//fb.database().goOffline();
//database.update({"name":"fahad"});
// database.child("name").remove().then(()=>{
//   console.log("Removed Successfully");
//})

// database.on("value",(snapshot)=>{
//   snapshot.forEach((item)=>{
//       database.child(item.key).remove();
//   })
// });


database.push(demoStateObject2).then((snapshot)=>{
  console.log(snapshot.key);
});

// database.set(demoStateObject2).then(()=>{
//   console.log("Added Successfully");
// })

// database.child("-M3KkZvHP0wc5st1Qb--").remove().then(()=>{
//   console.log("Removed Successfuly")
// })

//fb.database().goOnline();