import React from 'react'
import Card from './Card'

const Form = (props) =>{

    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props


    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
    
        const { name, value, checked, type } = evt.target
  
        const val = type ==='checkbox' ? checked : value

        change(name, val)
     }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <Card className='form-group submit'>
                <h2>Add a User</h2>

                <label>Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>

                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='email'
                    />
                </label>

                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>

                <label>Accept Terms of Service
                    <input 
                        type='checkbox'
                        name='TermsOfService'
                        onChange={onChange}
                        checked={values.TermsOfService}
                    />
                </label>
                <button disabled={disabled}>submit</button>
            </Card>
        </form>
    )
}

export default Form;