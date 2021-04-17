 const buttons = document.querySelectorAll('button');
const screen = document.getElementById('inp');// this is for catching the input box
 for(let button of buttons)
 {
     button.addEventListener('click',function(e)
     {
       let buttonText = e.target.innerText;

    
    if(buttonText=='X')
    {
        screen.value+="*";
    }

    else if(buttonText=='C')
    {
        screen.value="";
    }
    else if (buttonText== '=')
    { 
        try{
        screen.value=eval(screen.value);
        }
        catch(e)
        {
            screen.value = "Invalid Arguments";

        }
    }
    else{
             screen.value+= buttonText;
    }
     })
 } 