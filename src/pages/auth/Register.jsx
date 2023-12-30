import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { createUser } from "../../services/apiCalls";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      last_name: e.target.last_name.value,
      phone_number: e.target.phone_number.value,
      address: e.target.address.value,
      email: e.target.email.value,
      password: e.target.password.value,
      status: "active",
    };

    try {
      const response = await createUser(data);
      setMessage("successfully registered user");
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {}
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
      >
        {message && <Alert severity="success">{message}</Alert>}

        <Typography variant="h5">Register</Typography>
        <Stack direction="row" spacing="15px">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            name="last_name"
          />
        </Stack>
        <Stack direction="row" spacing="15px">
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phone_number"
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            name="address"
          />
        </Stack>
        <Stack direction="row" spacing="15px">
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
        </Stack>
        <Stack direction="row" spacing="15px" justifyContent="flex-end">
          <Button
            type="button"
            onClick={() => navigate("/login")}
            fullWidth
            variant="outlined"
          >
            Login
          </Button>
          {!message && (
            <Button fullWidth type="submit" variant="contained">
              Register
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
