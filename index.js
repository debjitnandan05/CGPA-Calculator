var cgpa= document.getElementById('cgpa');
let per= document.getElementById('per');
cgpa.addEventListener('input',function(){
    var cgp = this.value;

    if(cgp<=10 && cgp>0.76)
          {
             let p = (cgp-.76)*10;
             if(!Number.isInteger(p))
                per.value=p.toFixed(2);
          }

    else if(cgp>=0 && cgp<=0.76){
            
            per.value =0;
          }  
          
          else{
              cgpa.value = 0;
              alert(" CGPA value must be between 0 and 10");
              per.value =0;
          }  
});


per.addEventListener('input',function(){
    let p=this.value;

    if(p<=92.4 && p>0){
        let c=(p/10)+0.76;
        if(!Number.isInteger(c))
        cgpa.value=c.toFixed(2);
    }

    else if(p>92.4 && p<=100){
        cgpa.value=10;
    }

    else if(p==0){
        cgpa.value=0;
    }


    else{
        cgpa.value = 0;
        alert(" Percentage value must be between 0 and 100");
        per.value =0;
    }

});