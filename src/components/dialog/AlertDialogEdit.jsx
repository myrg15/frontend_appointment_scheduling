import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  deleteTreatment,
  getAllTreatments,
  updateTreatment,
} from "../../services/apiCalls";
import { Box, TextField } from "@mui/material";

export default function AlertDialogEdit({ open, setOpen, treatmentToEdit }) {
  const handleClose = () => {
    setOpen(false);
  };

  const {
    name_treatment = "",
    description = "",
    duration_treatment = "",
    img_url = "",
  } = treatmentToEdit || {};

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name_treatment: e.target.name_treatment.value,
      description: e.target.description.value,
      duration_treatment: e.target.duration_treatment.value,
      img_url: e.target.img_url.value,
    };

    try {
      const response = await updateTreatment(treatmentToEdit.id, data);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit treatment"}</DialogTitle>
        <DialogContent>
          <Box
            sx={{ pt: "10px" }}
            onSubmit={onSubmit}
            component="form"
            display="flex"
            flexDirection="column"
            gap="15px"
            width="300px"
          >
            <TextField
              id="outlined-basic"
              name="name_treatment"
              label="Name"
              variant="outlined"
              defaultValue={name_treatment}
            />
            <TextField
              id="outlined-basic"
              name="duration_treatment"
              label="Duration"
              variant="outlined"
              defaultValue={duration_treatment}
            />
            <TextField
              id="outlined-basic"
              name="img_url"
              label="Image"
              variant="outlined"
              defaultValue={img_url}
            />
            <TextField
              id="outlined-basic"
              name="description"
              label="Description"
              variant="outlined"
              defaultValue={description}
            />
            <DialogActions>
              <Button
                onClick={handleClose}
                style={{ backgroundColor: "black", color: "goldenrod" }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                autoFocus
                style={{ backgroundColor: "black", color: "goldenrod" }}
              >
                Save
              </Button>
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
