import {
  Box,
  TextField,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const confirmFormSchema = Yup.object().shape({
  user: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login({ error }: { error: string }) {
  const handleLogin = async (values: { user: string; password: string }) => {
    console.log("Login data:", values);
  };
  return (
    <Box className="w-full flex justify-center mt-5">
      <Formik
        initialValues={{ user: "", password: "" }}
        validationSchema={confirmFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className="relative flex flex-col items-center gap-6 p-0 mt-5 w-full">
              <Field
                name="user"
                type="text"
                label="Usuario"
                as={TextField}
                fullWidth
                variant="standard"
                error={error}
                className="w-[250px] md:w-[450px]"
              />
              <Field
                name="password"
                type="password"
                label="Contraseña"
                as={TextField}
                fullWidth
                variant="standard"
                error={error}
                className="w-[250px] md:w-[450px]"
                color="primary"
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
                className="rounded-md bg-secondary-1 text-primary-1 self-center border-solid border border-primary-1"
              >
                Entrar
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}
