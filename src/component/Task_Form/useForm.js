import { useState } from 'react';

const useForm = (validate) => {
    //setting the initial value of form using useState
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        password2: ''
    });
    
    const [errors, setErrors] = useState({});

    //for handling the changes whenever the form change
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    //to prevent refreshing page after submitting the form
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validate(values);
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            showSuccess(errors)
        }
    }

    const showSuccess = () => {
        alert(`
            You submitted data :
            First name : ${values.firstName}
            Last name : ${values.lastName}
            Username : ${values.username}
            Email : ${values.email}
            Password : ${values.password}
        `);
    }
        
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setErrors(validate(values));
    // };
        
    // useEffect(() => {
    //         if(Object.keys(errors).length === 0) {
    //             alert(`
    //                 You submitted data :
    //                 First name : ${values.firstName}
    //                 Last name : ${values.lastName}
    //                 Username : ${values.username}
    //                 Email : ${values.email}
    //                 Password : ${values.password}
    //             `);
    //         }
    //     }, [errors]
    // )

    return {values, errors, handleChange, handleSubmit};
}

export default useForm;