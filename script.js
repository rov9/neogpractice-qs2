inputUser=document.querySelector("#input");
btnSubmit=document.querySelector("#btncheck");
outputMsg=document.querySelector("#output");


function isMyBirthday()
{
    var bdayStr=inputUser.value;
    if(bdayStr=='')
    {
        outputMsg.innerText="Select a Date";
    } 

    else{
    if(bdayStr !== '')
      {
      var listOfDate = bdayStr.split('-');
      var date={day:Number(listOfDate[2]),
                month:Number(listOfDate[1]),
                year:Number(listOfDate[0])};

        if(date.day==4 && date.month==6 && date.year==1998)
      {
       outputMsg.innerText="Thanks,Correcto! turu friend 🙂";
        //console.log(outputMsg.innerText="Thanks friend,correcto");
      }
      else{
        outputMsg.innerText="Cheeeee!You dont know my b'day 😅";      
      }
      }
    }
      
}



btnSubmit.addEventListener("click",isMyBirthday);

