const charge_id=document.getElementById("charge_id");
const charge_url=document.getElementById("charge_url");
const copy_id=document.getElementById("copy_id")
const copy_url=document.getElementById("copy_url")




copy_url.addEventListener('click',()=>{
    
    navigator.clipboard.writeText(charge_url.innerText);      

    const copy1=document.getElementById("copy-1");
   copy1.classList.add("v");
    setTimeout(()=>{
       copy1.classList.remove('v');
       
}, 700);
    
})


copy_id.addEventListener('click',()=>{
    navigator.clipboard.writeText(charge_id.innerText); 
    
    
    const copy2=document.getElementById("copy-2");
   copy2.classList.add("v");
    setTimeout(()=>{
       copy2.classList.remove('v');
       
}, 700);
    
})
