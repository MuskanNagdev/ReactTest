import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'
import GetFormData from "./getFormData"


const initialValues={
    name: '',
    email: ''
}
const onSubmit=values => {
    console.log('submited')
}

const validate = values =>{
  //values.name and values.email

  let errors = {}
  if(!values.name){
    errors.name="name required"
  }
  else if(!values.email){
    errors.email="email required"
  }
  console.log(errors)
  return errors
}

const validationSchema = Yup.object({
  name:Yup.string().required("Fill kr re"),
  email:Yup.string().email('phnji hanr').required("Fill kr re")
  
})

function Form({Submit}) {
  const [data, setData]=useState({ name:'', email:'' })

  //three things done by formik
  //Managing the form state
  //handling form submission
  //validation and error message
  const Formik =useFormik({
    //ES6 object literals
    initialValues,
    onSubmit,
    validationSchema
    // validate,
  })

  //console.log('Visited Fields', Formik.touched)

  // const SubmitData =(e)=>{
  //     e.preventDefault()
  //     console.log("data submited")
  // }

  // const handleChange =(e)=>{
  //     //synthsized event with spre
  //     setData({...data, [e.target.name]:e.target.value})
  // }

  return (
    <div>
        <form onSubmit={Formik.handleSubmit}>
          <div className="form-control">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={Formik.values.name}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              />
            </label> 
            {Formik.touched.name && Formik.errors.name ? <div>{Formik.errors.name}</div> : null}
          </div>
          <div className="form-control">

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={Formik.values.email}
                onBlur={Formik.handleBlur}
                onChange={Formik.handleChange}
              
              />
            </label>
            {Formik.touched.email && Formik.errors.email ? <div>{Formik.errors.email}</div> : null}
          </div>
          
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default Form