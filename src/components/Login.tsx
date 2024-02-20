import { Box, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTheme } from "@mui/material/styles";
import colors from "@src/styles/colors";

const confirmFormSchema = Yup.object().shape({
  user: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function Login({ error }: { error: string }) {
  const handleLogin = async (values: { user: string; password: string }) => {
    console.log("Login data:", values);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        width: "100%",
      }}
    >
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
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                marginTop: "20px",
                width: "100%",
              }}
            >
              <Field
                name="user"
                type="text"
                label="Usuario"
                as={TextField}
                fullWidth
                variant="standard"
                error={error}
                sx={{
                  width: {
                    xs: "250px",
                    sm: "250px",
                    md: "450px",
                    lg: "450px",
                    xl: "450px",
                  },
                  borderBottom: `1px solid ${colors.primary}!important`,
                  paddingBottom: theme.spacings.xs,
                }}
              />
              <Field
                name="password"
                type="password"
                label="Contraseña"
                as={TextField}
                fullWidth
                variant="standard"
                error={error}
                sx={{
                  width: {
                    xs: "250px",
                    sm: "250px",
                    md: "450px",
                    lg: "450px",
                    xl: "450px",
                  },
                  borderBottom: `1px solid ${colors.primary}!important`,
                  paddingBottom: theme.spacings.xs,
                }}
              />
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                disabled={isSubmitting}
                sx={{
                  borderRadius: "32px",
                  backgroundColor: colors.secondary,
                  border: `1px solid ${colors.primary}!important`,
                  padding: "16px 32px!important",
                  color: `${colors.primary}!important`,
                  marginBottom: {
                    xs: "64px",
                    sm: "64px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  },
                }}
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
