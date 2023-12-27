import React, { useEffect, useState } from "react";
import { getAllAppointments } from "../../services/apiCalls";
import { Box, Card, Typography } from "@mui/material";
//import ModalEdiAlltAppointment from "../../components/modal/ModalEditAllAppointment";
//he insertado modalEditAllAppointment en el import de arriba falta ajustar los cambios
const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const getAppointments = async () => {
      const response = await getAllAppointments();
      setAppointments(response);
    };
    getAppointments();
  }, []);

  console.log("appointments", appointments);

  return (
    <Box display="flex" gap="15px" p="10px">
      <ModalEditAllAppointment />
      {appointments?.map((appointment) => (
        <Card
          key={appointment.id}
          sx={{ display: "flex", flexDirection: "column", width: "300px" }}
        >
          <Typography variant="h6">
            Name : {appointment.user.name} {appointment.user.last_name}
          </Typography>
          <Typography>
            Treatment :{" "}
            {appointment.treatments.map(
              (treatment) => treatment.name_treatment
            )}
          </Typography>
          <Typography>
            Date : {new Date(appointment.date).toLocaleDateString()}
          </Typography>
          <Typography>Time : {appointment.time}</Typography>
        </Card>
      ))}
    </Box>
  );
};

export default Appointments;
