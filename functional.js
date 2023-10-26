// handling the copying of password on click event of copy btn 

function copyPassword()
{
    let password=document.querySelector('#password_text').value;
    // console.log(password);
    navigator.clipboard.writeText(password);
    alert('password copied to your clipboard and your prefrences are saved');

    // saving the user prefrences to local storage 
    const user_pref={
        length : parseInt(desired_length),
        use_Lowercase : useLowercase,
        use_Uppercase : useUppercase,
        use_Numbers : useNumber,
        use_SpecialChar : useSpecialChar,
        img_src : img.src
    }
    localStorage.setItem('user_pre',JSON.stringify(user_pref));

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
function show_hide_toggle()
{
    let icon=document.querySelector('#show_hide_icon');
    if(passwordVisible==false)
    {
        passwordVisible=true;
        icon.src='imgs/show.png';
        document.querySelector('#password_text').type='text';

    }
    else
    {
        passwordVisible=false;
        icon.src='imgs/hide.png';
        document.querySelector('#password_text').type='password';
    }
}
