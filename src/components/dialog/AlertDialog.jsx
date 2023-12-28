import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteTreatment, getAllTreatments } from "../../services/apiCalls";

export default function AlertDialog({ open, setOpen, treatment }) {
  const handleClose = () => {
    setOpen(false);
  };

  console.log(treatment);

  const deleteTreatmentAction = async () => {
    console.log(treatmentToDelete);
    try {
      const response = await deleteTreatment(treatmentToDelete); //await espera a que la funcion deleteTreatment que esta en axion de apicall se conecte al backend
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
        <DialogTitle id="alert-dialog-title">{"Delete treatment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are sure you want to eliminate the treatment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Exit</Button>
          <Button onClick={deleteTreatmentAction} autoFo cus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
