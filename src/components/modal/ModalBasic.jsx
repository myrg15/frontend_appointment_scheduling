import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 3,
};

export default function ModalBasic({ openModal, setOpenModal, idTreatment }) {
  const handleClose = () => setOpenModal(false);

  const [date, setDate] = React.useState(new Date());
  const [hour, setHour] = React.useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      treatment_Ids: [idTreatment],
      date,
      time: hour,
    };

    console.log(data);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h6">Appointment</Typography>
        <Box
          component="form"
          display="flex"
          flexDirection="column"
          gap="15px"
          p="15px 0"
          onSubmit={onSubmit}
        >
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            type="time"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
          />
          <Box display="flex" justifyContent="flex-end" gap="10px">
            <Button variant="outlined" onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="success">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
