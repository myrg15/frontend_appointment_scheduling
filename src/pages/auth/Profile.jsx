import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/apiCalls";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";

export const Profile = () => {
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      phone_number: e.target.phone_number.value,
      address: e.target.address.value,
    };
    try {
      await getProfile(data);
      navigate("/");
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
        color={"black"}
      >
        <Typography variant="h5">Profile</Typography>
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
        />
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
          sx={{ "& label": { color: "black" } }}
        />
        <Stack direction="row" spacing="15px" justifyContent="flex-end">
          <Button
            type="button"
            onClick={() => navigate("/")}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: "black", color: "goldenrod" }}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{ backgroundColor: "black", color: "goldenrod" }}
          >
            Save
          </Button>
        </Stack>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Profile;
