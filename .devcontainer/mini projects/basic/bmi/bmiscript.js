const form=document.querySelector('form')

form.addEventListener("submit",function (e) {
    e.preventDefault();
    const h=parseInt(document.querySelector("#high").value)
    const w=parseInt(document.querySelector("#weigh").value)
    const result=document.querySelector('#result')
     if(h==='' || h<0 || isNaN(h)){
        result.innerHTML=`please enter valid details`;
    }
     else if(w==='' || w<0 || isNaN(w)){
        result.innerHTML=`please enter valid details`;
    }else{
        result.innerHTML=w/((h*h)/10000)
    }
    
})