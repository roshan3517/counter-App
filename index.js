const countValue=document.querySelector('#counter');

const increment = () =>{
   //get the value from UI
   let value=parseInt(countValue.innerText);
   //update the valuev
   value=value+1;
   countValue.innerText=value;
};

const decrement = () =>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the valuev
    value=value-1;
    countValue.innerText=value;
};