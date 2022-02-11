export default function validateForm(values) {
    //initializing new empty object for errors that can always be change later
    let errors = {};

    //firstname validation
    if(!values.firstName.trim()){
        errors.firstName = 'First name is required';
    }

    //lastname validation
    if(!values.lastName.trim()){
        errors.lastName = 'Last name is required';
    }

    //username validation
    if(!values.username.trim()){
        errors.username = 'Username is required';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.password) {
        errors.password = 'Password is required'
    } else if (values.password.length < 7) {
        errors.password = 'Password needs to be 7 characters or more'
    }

    if(!values.password2){
        errors.password2 = 'Password is required'
    }else if(values.password2 !== values.password) {
        errors.password2 = 'Password do not match' 
    }

    return errors;
}