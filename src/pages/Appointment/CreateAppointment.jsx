import {
  Modal,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
//import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { createAppointment } from "../../services/apiCalls";

export const CreateAppointment = ({
  open,
  setOpen,
  dataEdit,
  isEdit = false,
}) => {
  const navigate = useNavigate();
  const [selectDate, setSelectDate] = useState(new Date());
  const [selectHour, setSelectHour] = useState(dataEdit?.time);
  const [selectUser, setSelectUser] = useState(dataEdit?.user);
  const [selectTreatment, setSelectTreatment] = useState([]);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [isCreateApointment, setIsCreateAppointment] = useState(true);

  useEffect(() => {
    if (isEdit && dataEdit?.date) {
      setSelectDate(new Date(dataEdit?.date)?.toISOString()?.split("T")?.[0]);
      setSelectHour(dataEdit?.time);
      setSelectUser(dataEdit?.user);
      setSelectTreatment(dataEdit?.treatment);
      setStatus(dataEdit?.status);
    }
  }, [dataEdit]);

  //console.log("dataEdit", dataEdit);

  const handleCreateAppointment = async () => {
    const data = {
      date: selectDate,
      time: selectHour,
      user: selectUser,
      treatment: selectTreatment,
      status: status,
    };
    try {
      await createAppointment(data);
      setMessage("Appointment created successfully");
      setIsCreateAppointment(true);
      navigate("/login");
    } catch (error) {
      console.error("Error creating appointment:", error);
      setMessage("Error creating appointment");
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box>
        <Typography variant="h5">Create Appointment</Typography>
        <FormControl fullWidth>
          <InputLabel>Date</InputLabel>
          <Select
            value={selectDate}
            onChange={(e) => setSelectDate(e.target.value)}
          >
            {/* Date */}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Hour</InputLabel>
          <Select
            value={selectHour}
            onChange={(e) => setSelectHour(e.target.value)}
          >
            {/* Hour */}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>User</InputLabel>
          <Select
            value={selectUser}
            onChange={(e) => setSelectUser(e.target.value)}
          >
            {/* User */}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Treatment</InputLabel>
          <Select
            value={selectTreatment}
            onChange={(e) => setSelectTreatment(e.target.value)}
          >
            {/*Treatment */}
          </Select>
        </FormControl>
        <Button
          onClick={handleCreateAppointment}
          variant="contained"
          color="primary"
        >
          Create Appointment
        </Button>
      </Box>
    </Modal>
  );
};
export default CreateAppointment;
