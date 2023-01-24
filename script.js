const buttons= document.getElementsByClassName('button');
const inputfield= document.getElementById('number-input');
const infopara=document.getElementById('info');

for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click',(event)=>{
        infopara.style.display='none';
        let inputtext='';
        switch(event.target.innerHTML){
            case 'C':
                break;
            case '=':
                try{
                    inputtext=eval(inputfield.value);
                }catch(e){
                    inputtext='';
                    info.innerHTML='Invalid operation';
                }
                break;
            case 'B':
                inputfield.value=slice(0,inputfield.value.length-1);
                break;
            default:
                inputtext=`${inputfield.value}${event.target.innerHTML}`;
        }
        inputfield.value=inputtext;
    });
}