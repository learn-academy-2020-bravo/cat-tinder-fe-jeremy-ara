import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { Link, Redirect  } from 'react-router-dom'
import '../App.css'

const UpdateCat = props => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [form, setForm] = useState({
      name: props.cat.name,
      age: props.cat.age,
      enjoys: props.cat.enjoys,
      image_path: props.cat.image_path
  })

  const handleChange = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const updateCat = (catInfo) => {
    return fetch(`http://localhost:3000/cats/${props.cat.id}`, {
      body: JSON.stringify(catInfo),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => {
      if (response.ok) setSuccess(true)
      else if (!response.ok) setError(true)
      else return response.json()
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    updateCat(form)
    console.log("form:",form)
  }

  return(
    <>
      <div className="header-buttons">
        <a className="link" href={`/cats/${props.cat.id}`}><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Back to Profile</Button></a>
        <a className="link" href="/"><Button style={{background: "rgb(237,53,53)", border:"0px", fontWeight: "500"}}>Home</Button></a>
        <a style={{textDecoration:"none"}} href="/messages"><Button style={{backgroundColor: "rgb(237,53,53)", border:"0px", fontWeight: "500", fontSize: "25px", padding: "5px", display:"flex", alignItems: "center", justifyContent: "center", width:"36px", height:"36px", margin:"0 0 0 20px"}}><span role="img" aria-label="message-cat">💌</span></Button></a>
      </div>
      <h4 className="subtitle">Edit your profile.</h4>

      {error && <h4 className="error-message">Please fill out the form correctly.</h4>}

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
          <Label htmlFor="enjoys" id="enjoys">What do you like to do? (at least 10 characters)</Label>
            <Input
              type="text"
              name="enjoys"
              value={ form.enjoys }
              onChange={ handleChange }
            />
          <Label htmlFor="image_path" id="image_path">Image URL</Label>
            <Input
              type="text"
              name="image_path"
              value={ form.image_path }
              onChange={ handleChange }
            />
        </FormGroup>

        <Link to={`/cats/${props.cat.id}`} >
          <Button
            style={{backgroundColor:"white",border:"1px solid rgb(237,53,53)", color:"rgb(237,53,53)",fontWeight: "500", marginBottom: "80px"}}
            onClick = { handleSubmit }
            id="submit"
          >Update Profile</Button>
          { success && <Redirect to={`/cats/${props.cat.id}`}/> }
        </Link>
      </Form>
    </>
  )
}

export default UpdateCat
