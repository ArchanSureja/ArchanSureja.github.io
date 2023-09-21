// varriables //
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var specialchar="!@#$%^&*()";

// variables to deal with requirments //
var useLowercase;
var useUppercase;
var useNumber;
var useSpecialChar;
var desired_length;
var img;

// main variables 
var password;
var strength;

// ------------------- password generation part ------------------------------////

function RandomPasswordGenerater(desired_length,useUppercase,useLowercase,useNumber,useSpecialChar)
{
      let char_pool="";  // char_pool is possible alphabets,symbols,numbers in password 
      // this if blocks used to create and modify char_pool based on user requirments
      if(useUppercase)
      {
        char_pool+=uppercase;
      }
      if(useLowercase)
      {
        char_pool+=lowercase;
      }
      if(useNumber)
      {
        char_pool+=numbers;
      }
      if(useSpecialChar)
      {
        char_pool+=specialchar;
      }
    //  console.log(char_pool);  // debugging and testing 

    // two condition handling

    // 1. user has not selected any requirments 
    if(char_pool.length==0)
    {
        alert('please select at least one set of characters to be used in password');
    }

    // 2. minimum possible length with given requirments is greater than the desired length means desired password length is too small to met all requirments with given desired length
      
        // calculating minimum possible length 
          min_possible_length=(useUppercase ? 1:0) + (useLowercase ? 1:0) + (useNumber ? 1:0) + (useSpecialChar ? 1:0);

        if(min_possible_length > desired_length)
        {
            alert('your character set requirments and desired length is conflicting');
        }
    let password='';
    for(let i=0;i<desired_length;i++)
    {
      
        const time=new Date().getTime();
        const random_index= (Math.random()*1000000000 + time) % char_pool.length;
        password+=char_pool.charAt(random_index);
    }
    return password;
}



// --------------------- password strength cheking part ------------------- //

function checkStrength(password)
{
    let p=password;
    let strength=0;
    let hasLower=false,hasNumber=false,hasUpper=false,hasSpeacialchar=false;


    for(let i=0;i<p.length;i++)
    {
        if(uppercase.includes(p[i]))
        {
          hasUpper=true;
        }
        if(lowercase.includes(p[i]))
        {
          hasLower=true;
        }
        if(numbers.includes(p[i]))
        {
          hasNumber=true;
        }
        if(specialchar.includes(p[i]))
        {
          hasSpeacialchar=true;
        }
    }
    if(p.length>8)
    {
      strength++;
    }
    if(p.length>12)
    {
      strength++;
    }
    if(hasUpper)
    {
      strength++;
    }
    if(hasLower)
    {
      strength++;
    }
    if(hasNumber)
    {
      strength++;
    }
    if(hasSpeacialchar)
    {
      strength++;
    }


    // classifiaction of password
    if (strength <= 2) {
        return "Very Weak";
    } else if (strength === 3) {
        return "Weak";
    } else if (strength === 4) {
        return "Good";
    } else if (strength === 5) {
        return "Strong";
    } else {
        return "Very Strong";
    }
}


// ----------------- function for reading requirments of user -------------- // 
function readRequirments()
{
     useLowercase=document.querySelector('#lowercase').checked;
     useUppercase=document.querySelector('#uppercase').checked;
     useNumber=document.querySelector('#numbers').checked;
     useSpecialChar=document.querySelector('#specialchar').checked;
     desired_length=document.querySelector('#password_length').innerHTML;
     img=document.querySelector('#img');
} 
// --------------- function to generate password and strength ----------- //
function generate()
{
    password=RandomPasswordGenerater(desired_length,useUppercase,useLowercase,useNumber,useSpecialChar);
    strength=checkStrength(password);
}

// --------- function to write password and it's strength on web page ------------ // 
function writeTOwebpage()
{
    // fetching the html tags where to write  password and it's strength
    let password_tag=document.querySelector('#password_text');
    let strength_tag=document.querySelector('#quaulity_badge');
    // writing into web page usinf innerHTML 
    password_tag.innerHTML=password;
    if(strength=="Very Weak")
    {
        strength_tag.style.backgroundColor="#f5203e";
        img.src='imgs/very_weak.png';

    }
    if(strength=="Weak")
    {
      strength_tag.style.backgroundColor="#f5203e";
      img.src='imgs/weak.png';
    }
    if(strength=="Good")
    {
      strength_tag.style.backgroundColor="#f1c80b";
      img.src='imgs/good.png';
    }
    if(strength=="Strong")
    {
      strength_tag.style.backgroundColor="#43ed9c";
      img.src='imgs/strong.png';
    }
    if(strength=="Very Strong")
    {
      strength_tag.style.backgroundColor="#0070f6";
      img.src='imgs/very_strong.png';
    }
    strength_tag.innerHTML=strength;
}

//------- one complete function for reading,generating and writing ---------- //
function rgw()
{
   readRequirments();
   generate();
   writeTOwebpage();
}

 