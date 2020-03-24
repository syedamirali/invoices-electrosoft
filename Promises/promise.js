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
    var res=await promise();
    console.log(res);
    console.log("After===============")
};

hello1();