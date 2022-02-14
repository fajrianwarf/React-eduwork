import useForm from "./useForm"
import validateForm from "./validateForm"
import './form.css'

export default function FormAction() {
    const { values, handleChange, handleSubmit, errors } = useForm(validateForm);

    return(
        <form className='row w-50 mt-6 mx-auto' onSubmit={handleSubmit}>
            <div className="col col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={values.firstName}
                    onChange={handleChange}
                />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div className="col col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="lastName"
                    placeholder="Enter your last name" 
                    value={values.lastName}
                    onChange={handleChange}
                />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div className="col-12 mb-3">
                <label className="form-label">Username</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="username"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                />
                {errors.username && <p>{errors.username}</p>}
            </div>
            <div className="col-12 mb-3">
                <label className="form-label">Email</label>
                <input 
                    type="text" 
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="col-12 mb-3">
                <label className="form-label">Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    name="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange} 
                />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="col-12 mb-3">
                <label className="form-label">Confirm Password</label>
                <input 
                    type="password" 
                    className="form-control"
                    name="password2"  
                    placeholder="Confirm your password"
                    value={values.password2}
                    onChange={handleChange} 
                />
                {errors.password2 && <p>{errors.password2}</p>}
            </div>
            <button className='btn btn-primary col-12' type='submit'>Submit</button>
        </form>
    )
}