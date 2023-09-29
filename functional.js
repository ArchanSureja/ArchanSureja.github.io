// handling the copying of password on click event of copy btn 

function copyPassword()
{
    let password=document.querySelector('#password_text').innerHTML;
    navigator.clipboard.writeText(password);
    alert('password copied to your clipboard');
}

// handling slider and calculating it's width  
function slideChange()
{
    let slide=document.querySelector('#slide');
    let len=document.querySelector('#password_length');
    len.innerHTML=slide.value;
    rgw();
}
// changinh the length with buttons 
function inc_len()
{
     let slide=document.querySelector('#slide');
     slide.value++;
     let len=document.querySelector('#password_length');
     len.innerHTML=slide.value;
     rgw();
     
}
function dec_len()
{
    let slide=document.querySelector('#slide');
    slide.value--;
    let len=document.querySelector('#password_length');
    len.innerHTML=slide.value;
    rgw();
}
//toggle password visibility 
function show()
{
    if(passwordVisible==false)
    {
        passwordVisible=true;
        document.querySelector('#password_text').type='text';
    }
    else
    {
        passwordVisible=false;
        document.querySelector('#password_text').type='password';
    }
}