import { Formik, Form, Field, ErrorMessage } from "formik";

const formikForm = () => {
  <Formik initialValues={{ name: "", email: "", password: "" }}>
    {() => (
      <Form>
        <Field type="text" name="username" />,
        <Field type="email" name="email" />,
        <Field type="password" name="password" />
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>;
};

export default formikForm;
