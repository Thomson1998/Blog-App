import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { Base } from "./Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import * as yup from "yup";
import { useFormik } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";


const userSchemaValidation=yup.object({
  id:yup.string().required("please enter the valid id"),
  name:yup.string().required("please enter the valid name"),
  image:yup.string().url().required("pleade enter the valid image"),
  founder:yup.string().required("pleade enter the valid founder"),
  content:yup.string().required("pleade enter the valid content"),
  year:yup.string().required("pleade enter the valid year"),

})

export function Techedit({tech, setTech}) {

  const {id}=useParams();
  const history=useHistory();

  const selectedUser = tech.find((per)=>per.id===id)

  const{values,handleSubmit,handleBlur, handleChange,touched,errors}=useFormik({
    initialValues:{
        id : selectedUser.id,
        name : selectedUser.name,
        image: selectedUser.image,
        founder: selectedUser.founder,
        content: selectedUser.content,
        year: selectedUser.year,
      },
      validationSchema: userSchemaValidation,
        onSubmit : (techNew)=>{
          console.log(techNew)
          edittechNew(techNew)
        }
        
       
  })
  const edittechNew=(techNew)=>{
    const editIndex=tech.findIndex((per)=>per.id===id)
    tech[editIndex]=techNew;
    setTech([...tech])
     history.push("/technology")
  }


  return (
    <Base title={"Technology"}>
    <Form className='addnew' onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput"label="id" className="mb" >
        <Form.Control type="text" placeholder="id" name="id" value={values.id} onBlur={handleBlur} onChange={handleChange}
        />
      </FloatingLabel>
      {touched.id && errors.id ? <p style={{ color: "red" }}>{errors.id}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="name" className="mb">
        <Form.Control type="text" placeholder="name" name="name" value={values.name} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.name && errors.name ? <p style={{ color: "red" }}>{errors.name}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="image" className="mb">
        <Form.Control type="text" placeholder="image" name="image"value={values.image} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>      
        {touched.image && errors.image ? <p style={{ color: "red" }}>{errors.image}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="Founder" className="mb">
        <Form.Control type="text" placeholder="Founder"name="founder" value={values.founder} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.founder && errors.founder ? <p style={{ color: "red" }}>{errors.founder}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="content" className="mb">
        <Form.Control type="text" placeholder="content" name="content" value={values.content} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.content && errors.content ? <p style={{ color: "red" }}>{errors.content}</p>:""}

      <FloatingLabel controlId="floatingPassword" label="year" className="mb">
        <Form.Control type="text" placeholder="year" name="year" value={values.year} onBlur={handleBlur} onChange={handleChange}/>
      </FloatingLabel>
      {touched.year && errors.year ? <p style={{ color: "red" }}>{errors.year}</p>:""}

      <Button
          type="submit"
        >Add</Button>
      </Form>

      </Base>
  );
}
