import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const NewCat = props => {
  const [form, setForm] = useState({
      name: '',
      age: '',
      enjoys: ''
  })

  const handleChange = e => {
    setForm({
        //take all the existing form data and,...
        ...form,
        //...add new data to the end as it is typed
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setForm({
      name: '',
      age: '',
      enjoys: ''
    })
  }

  return(
    <>
      <Link to="/">Back to Home</Link>
      <Form>
        <FormGroup>
          <Label htmlFor="name" id="name">Name</Label>
            <Input
              type="text"
              name="name"
              value={ form.name }
              onChange={ handleChange }
            />
          <Label htmlFor="age" id="age">Age</Label>
            <Input
              type="text"
              name="age"
              value={ form.age }
              onChange={ handleChange }
            />
          <Label htmlFor="enjoys" id="name">What Do You Enjoy?</Label>
            <Input
              type="text"
              name="enjoys"
              value={ form.enjoys }
              onChange={ handleChange }
            />
        </FormGroup>
        <Button
          onClick = { handleSubmit }
        >Create Profile</Button>
      </Form>
    </>
  )
}

export default NewCat
