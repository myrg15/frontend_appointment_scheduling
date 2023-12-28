import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { createTreatment } from "../services/apiCalls";

const CreateTreatments = () => {
  const [isCreateSuccess, setIsCreateSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const promise = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });

    const data = {
      //review_Id: e.target.review_Id.value,
      name_treatment: e.target.name_treatment.value,
      description: e.target.description.value,
      duration_treatment: e.target.duration_treatment.value,
      img_url: e.target.img_url.value,
      //status: e.target.status.value,
    };

    try {
      await createTreatment(data);
      setIsCreateSuccess(true);
      setIsLoading(false);
      setTimeout(() => {
        setIsCreateSuccess(false);
      }, 3000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      width="100%"
      height="100%"
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignContent="center"
        gap="15px"
        width="300px"
      >
        {isCreateSuccess && (
          <Alert severity="success">Create treatment success</Alert>
        )}
        <TextField
          id="outlined-basic"
          name="name_treatment"
          label="Name"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="description"
          label="Description"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="duration_treatment"
          label="Duration"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          name="img_url"
          label="Image URL"
          variant="outlined"
        />
        <Button type="submit" variant="contained" disabled={isLoading}>
          {isLoading ? "Cargando..." : "Create Treatment"}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateTreatments;
