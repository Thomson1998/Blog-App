import { Base } from "./Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom/cjs/react-router-dom";


const userSchemaValidation = yup.object({
  id: yup.string().required("Enter a valid ID"),
  name: yup.string().required("Please fill in your name..."),
  image: yup.string().url().required("Enter a valid image"),
  sport: yup.string().required("please enter the sport name"),
  content: yup.string().required("Please enter a valid content"),
  year: yup.string().required("Please enter the year").min(4,"It is not a valid year")
})

export function Sportedit({sport, setSport}) {


  const { id } = useParams();

  const history = useHistory();

  const selectedUser = sport.find((per) => per.id === id);
console.log("selectedUser",selectedUser);

  const { values, handleChange, handleSubmit,handleBlur, errors,touched } = useFormik({
    initialValues: {
      id:selectedUser.id,
      name: selectedUser.name,
      image: selectedUser.image,
      sport: selectedUser.sport,
      content: selectedUser.content,
      year: selectedUser.year,
    },
    validationSchema: userSchemaValidation,
    onSubmit: (sportNew) => {
      console.log(sportNew)
      editsportNew(sportNew)
    }
  });

  const editsportNew = (sportNew) => {
    const editIndex = sport.findIndex((per) => per.id === id);
    console.log(editIndex);
    sport[editIndex] = sportNew;
     setSport([...sport])
    history.push('/sport')
  }


  return (
    <Base title={"Sports"}>

      <Form className='addnew' onSubmit={handleSubmit}>


        <FloatingLabel controlId="floatingInput" label="ID" className="mb">
          <Form.Control type="text" placeholder="Id" name="id" value={values.id} onBlur={handleBlur}

            onChange={handleChange} />
        </FloatingLabel>
        {touched.id && errors.id ? <p style={{ color: "red" }}>{errors.id}</p>:""}
        <FloatingLabel controlId="floatingPassword" label="Name" className="mb">
          <Form.Control type="text" placeholder="Name" name="name" value={values.name} onBlur={handleBlur}

            onChange={handleChange} />
        </FloatingLabel>
        {touched.name && errors.name ? <p style={{ color: "red" }}>{errors.name}</p>:""}

        <FloatingLabel controlId="floatingPassword" label="Image" className="mb">
          <Form.Control type="text" placeholder="image" name="image" value={values.image} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.image && errors.image ? <p style={{ color: "red" }}>{errors.image}</p>:""}


        <FloatingLabel controlId="floatingPassword" label="Sport" className="mb">
          <Form.Control type="text" placeholder="Sport" name="sport" value={values.sport} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.sport && errors.sport ? <p style={{ color: "red" }}>{errors.sport}</p>:""}


        <FloatingLabel controlId="floatingPassword" label="Content" className="mb">
          <Form.Control type="text" placeholder="Content" name="content" value={values.content} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.content && errors.content ? <p style={{ color: "red" }}>{errors.content}</p>:""}

        <FloatingLabel controlId="floatingPassword" label="Year" className="mb">
          <Form.Control type="number" placeholder="Year" name="year" value={values.year} onBlur={handleBlur}
            onChange={handleChange} />
        </FloatingLabel>

        {touched.year && errors.year ? <p style={{ color: "red" }}>{errors.year}</p>:""}

        <Button
          type="submit"
        >Add</Button>
      </Form>

    </Base>
  );
}
