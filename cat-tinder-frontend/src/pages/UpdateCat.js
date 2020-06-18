import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../App.css'

const UpdateCat = props => {
  const [form, setForm] = useState({
      name: props.name,
      age: props.age,
      enjoys: props.enjoys
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
    console.log(form)
  }

  return(
    <>
      <div className="header-buttons">
        <a className="link" href={`/${props.id}`}><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Back to Profile</Button></a>
        <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Home</Button></a>
        <a style={{textDecoration:"none"}} href="/messages"><Button style={{backgroundColor: "rgb(237,53,53)", border:"0px", fontWeight: "500", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button></a>
      </div>
      <h4 className="subtitle">Edit your profile.</h4>
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
          <Label htmlFor="enjoys" id="enjoys">What do you like to do?</Label>
            <Input
              type="text"
              name="enjoys"
              value={ form.enjoys }
              onChange={ handleChange }
            />
        </FormGroup>
        <Button
          style={{backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500", marginBottom: "80px"}}
          onClick = { handleSubmit }
          id="submit"
        >Update Profile</Button>
      </Form>
    </>
  )
}

export default UpdateCat
