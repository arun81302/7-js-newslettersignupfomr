      let input=document.querySelector('input');
      let button=document.querySelector('.firstbtn');
      let firstcontainer=document.querySelector('.nafirst');
      let secondcontainer=document.querySelector('.nasec');
      let form=document.querySelector('form');
      let invalid=document.querySelector('.invalid');
      let dismissbtn=document.querySelector('#dismiss-btn');
      let userid= document.querySelector('#user-email');
      form.addEventListener('submit',function(e){
            e.preventDefault();
            
      })
      button.addEventListener('click',function(){
            const regex = /^[a-zA-Z0-9._%+-]+@company\.[a-z]{2,}$/;
            let value=input.value.trim()

            if(regex.test(value)){
                  firstcontainer.style.display="none";
                  secondcontainer.style.display="block"
                  userid.textContent=value
                  userid.style.fontWeight="bold"
            }
            else{
            invalid.style.display="block";
            input.style.boxShadow="0px 0px 7px 1px hsl(4, 100%, 67%)" 
            }
      })

      dismissbtn.addEventListener('click',function(){
      secondcontainer.style.display="none";
      firstcontainer.style.display="";
      form.reset();                
    invalid.style.display = "none";   
    input.style.boxShadow = "none"; 
      })
