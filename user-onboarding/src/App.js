import './App.css';
import axios from 'axios'
import Form from './conponents/Form'
import User from './conponents/User'

import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import formSchema from './validation/formSchema'


const initialFormValues = {
  username: '',
  email: '',
  password: '',
 
  TermsOfService: false,
}
const initialFormErrors = {
  username: '',
  email: '',
}

const initialUsers = []
const initialDisabled = true

function App() {

  const [users, setUsers] = useState(initialUsers)          // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  const postNewUsers = newUser => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      TermsOfService: formValues.TermsOfService,
    
    }
    postNewUsers(newUser)
  }
  useEffect(()=>{
    console.log(users)
  },[users])
  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <div className='form'>
        <Form 
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </div>
      
    <div className='users'>
      {
          users.map((user, i) => {
            return (
              <User key={i} details={user} />
            )
          })
      }
    </div>
    
    </div>
  );
}

export default App;
