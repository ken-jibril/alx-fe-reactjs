import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Define validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required
    .required("Username is required")
      .min(3, "Username must be at least 3 characters"),
    email: Yup.string().required
    .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string().required
    .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    console.log("Form data:", values);
    alert("✅ Form submitted successfully!");
    resetForm();
    setSubmitting(false);
  };

  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", fontSize: "0.9rem" }}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "0.9rem" }}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "0.9rem" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
