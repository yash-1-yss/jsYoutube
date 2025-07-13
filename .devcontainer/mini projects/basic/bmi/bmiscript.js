const form=document.querySelector('form')

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const h=parseInt(document.querySelector("#high").value)
    const w=parseInt(document.querySelector("#weigh").value)
    const result=document.querySelector('#result')
    if(h!='' && w!=''){
        result.innerHTML=w/((h*h)/10000)
   
    }else{
        result.innerHTML="please enter valid details"
    }
    
})