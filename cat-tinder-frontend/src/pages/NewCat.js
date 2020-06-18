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
    console.log(form)
  }

  return(
    <>
      <div className="header-buttons">
        <a className="link" href="/"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>Back to Home</Button></a>
        <a className="link" href="/cats"><Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold"}}>See Other Cats</Button></a>
        <Button style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button>
      </div>
      <h4 className="subtitle">Sign up to be part of the hotties.</h4>
      <Form className="form-wrapper">
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
          <Label htmlFor="enjoys" id="enjoys">Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              value={ form.enjoys }
              onChange={ handleChange }
            />
        </FormGroup>
        <Button
          style={{backgroundColor: "#e6410e", border:"0px", fontWeight: "bold", marginBottom: "80px"}}
          onClick = { handleSubmit }
          id="submit"
        >Create Profile</Button>
      </Form>
    </>
  )
}

export default NewCat
