import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const formikForm = () => {
  <Formik
    initialValues={{ name: "", email: "", password: "" }}
    validationSchema={validationSchema}
  >
    {() => (
      <Form>
        <Field type="text" name="username" />,
        <ErrorMessage name="name" component="div" />
        <Field type="email" name="email" />,
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>;
};

export default formikForm;
