import  toast  from "react-hot-toast";

// VALIDATE REGISTER FORM
export async function registerValidation(values){
    const errors=usernameVerify({},values)
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors;
}

// VALIDATE LOGIN PAGE USERNAME
export async function usernameValidate(values){
    const errors=usernameVerify({},values)

    return errors;
}

// VALIDATE PASSWORD
export async function passwordValidate(values){
    const errors= passwordVerify({},values);

    return errors;
}

// VALIDATE RESET PASSWORD
export async function resetPasswordValidation(values){
    const errors= passwordVerify({},values);
    if(values.password !== values.confirm_pwd){
        errors.exist= toast.error("Password didn't match")

    }
    return errors;
}

// PROFILE VALIDATION
export async function profileValidation(values){
    const errors= emailVerify({},values)
    return errors;
}




/* -----------------------------------------------------------*/

//VALIDATE USER NAME
function usernameVerify(error={},values){
    if(!values.username){
        error.message=toast.error("Username is Required")
    }else if(values.username.includes(' ')){
        error.message=toast.error("Invalid Username")
    }
    return error;
}


//PASSWORD VERIFY
function passwordVerify(error={},values){
    
    const specialChars= /[`@#$%&*()-+_=\:",.;?<>]/;

    if(!values.password){
        error.password=toast.error("Password is Required")
    }else if(values.password.includes(' ')){
        error.password= toast.error("Password can't be empty")
    }else if(values.password.length<5){
        error.password= toast.error("Password length is too short")
    }else if(!specialChars.test(values.password)){
        error.password= toast.error("Password must contain a special character")
    }
    return error;
}

// VALIDATE EMAIL
function emailVerify(error={},values){
    if(!values.email){
        error.email=toast.error("Email is required")
    }else if(values.email.includes(' ')){
        error.email= toast.error("Email can't be empty")
    }else if(!/[`@#$%&*()-+_=\:",.;?<>]/.test(values.email)){
        error.email=toast.error("Invalid Email")
    }
    return error;

}