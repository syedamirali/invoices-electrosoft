var promise=()=>(new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Promise............");
    },4000);
}));



function hello(){
    return "Hello World";
};

async function hello1(){
    console.log("Before==============");
    promise().then((fdsf)=>{
        console.log(fdsf);
    });
    console.log("After===============")
};

hello1();