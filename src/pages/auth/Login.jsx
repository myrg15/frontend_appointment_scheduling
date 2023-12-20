import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/apiCalls";

const Login = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      await loginUser(data);
      navigate("/dashboard");
    } catch (err) {}
  };

  return (
    <Box
      display="flex"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        display="flex"
        flexDirection="column"
        gap="15px"
        width="300px"
      >
        {message && <Alert severity="success">{message}</Alert>}
        <Typography variant="h5">Login</Typography>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
        />

        <Stack direction="row" spacing="15px" justifyContent="flex-end">
          <Button
            type="button"
            onClick={() => navigate("/register")}
            fullWidth
            variant="outlined"
          >
            Register
          </Button>
          {!message && (
            <Button fullWidth type="submit" variant="contained">
              Login
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
