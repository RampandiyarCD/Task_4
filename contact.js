const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const ctn = document.getElementById('ctn');
const email = document.getElementById('email');
const loc = document.getElementById('loc');
const fname_err = document.getElementById('fname_err');
const lname_err = document.getElementById('lname_err');
const ctn_err = document.getElementById('ctn_err');
const email_err = document.getElementById('email_err');
const loc_err = document.getElementById('loc_err');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    let isValid=true;


    if(fname.value.trim()==''){
        fname_err.style.display='block';
        fname_err.textContent='Please Enter Your First Name'
        isValid=false
    }
    else if(!/^[A-Z a-z]+$/.test(fname.value)){
        fname_err.style.display='block';
        fname_err.textContent='Please Enter Only Alphabets'
        isValid=false
    }
    else{
        fname_err.style.display='none';
    }
    if(lname.value.trim()==''){
        lname_err.style.display='block';
        lname_err.textContent='Please Enter Your Last Name'
        isValid=false
    }
    else if(!/^[A-Z a-z]+$/.test(lname.value)){
        lname_err.style.display='block';
        lname_err.textContent='Please Enter Only Alphabets'
        isValid=false
    }
    else{
        lname_err.style.display='none';
    }
    if(ctn.value.trim()==''){
        ctn_err.style.display='block';
        ctn_err.textContent='Please Enter Your Contact Info'
        isValid=false
    }
    else if(!/^[0-9]{10}$/.test(ctn.value)){
        ctn_err.style.display='block';
        ctn_err.textContent='Please Enter Only Numbers'
        isValid=false
    }
    else{
        ctn_err.style.display='none';
    }


    if(email.value.trim()==''){
        email_err.style.display='block';
        email_err.textContent='Please Enter Your Email'
        isValid=false
    }
    else{
        email_err.style.display='none';
    }

    if(loc.value.trim()==''){
        loc_err.style.display='block';
        loc_err.textContent='Please Enter Your Location'
        isValid=false
    }
    else{
        loc_err.style.display='none';
    }
    
    if (isValid){
        alert("Login")
    }

})
fname.addEventListener('input', function(){
    if(fname.value.trim()==''){
        fname_err.style.display='block';
        fname_err.textContent='Please Enter Your First Name'
        isValid=false
    }
    else if(!/^[A-Z a-z]+$/.test(fname.value)){
        fname_err.style.display='block';
        fname_err.textContent='Please Enter Only Alphabets'
        isValid=false
    }
    else{
        fname_err.style.display='none';
    }
})

lname.addEventListener('input', function(){
    if(lname.value.trim()==''){
        lname_err.style.display='block';
        lname_err.textContent='Please Enter Your Last Name'
        isValid=false
    }
    else if(!/^[A-Z a-z]+$/.test(fname.value)){
        fname_err.style.display='block';
        fname_err.textContent='Please Enter Only Alphabets'
        isValid=false
    }
    else{
        fname_err.style.display='none';
    }
})

ctn.addEventListener('input', function(){
    if(ctn.value.trim()==''){
        ctn_err.style.display='block';
        ctn_err.textContent='Please Enter Your Contact Info'
        isValid=false
    }
    else if(!/^[0-9]{10}$/.test(ctn.value)){
        ctn_err.style.display='block';
        ctn_err.textContent='Please Enter Only Numbers'
        isValid=false
    }
    else{
        ctn_err.style.display='none';
    }
})

email.addEventListener('input', function(){
        if(email.value.trim()==''){
        email_err.style.display='block';
        email_err.textContent='Please Enter Your Email'
        isValid=false
    }

    else{
        email_err.style.display='none';
    }
})

loc.addEventListener('input',function(){
        if(loc.value.trim()==''){
        loc_err.style.display='block';
        loc_err.textContent='Please Enter Your Location'
        isValid=false
    }
    else{
        loc_err.style.display='none';
    }
})