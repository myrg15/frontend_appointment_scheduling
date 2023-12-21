import React, { useEffect, useState } from "react";
import { getAllTreatments } from "../../services/apiCalls";
import { Box, Button, Card, Chip, Tooltip, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import AlertDialog from "../../components/dialog/AlertDialog";

const Home = () => {
  const TOKEN = localStorage.getItem("token");
  const ROLE = localStorage.getItem("role");
  const [treatments, setTreatments] = useState([]);
  const [open, setOpen] = useState(false);
  const [treatmentToDelete, setTreatmentToDelete] = useState(null);

  const handleClickOpen = (treatmentId) => {
    setTreatmentToDelete(treatmentId); // Guarda el ID del tratamiento que se quiere eliminar
    setOpen(true); // Abre el diálogo
  };

  const handleClose = () => {
    setTreatmentToDelete(null); // Limpia el tratamiento a eliminar
    setOpen(false); // Cierra el diálogo
  };

  useEffect(() => {
    const fetchTreatments = async () => {
      const response = await getAllTreatments();
      setTreatments(response);
    };

    fetchTreatments();
  }, []);

  return (
    <Box display="flex" gap="10px" p="10px">
      <AlertDialog open={open} setOpen={setOpen} />
      {treatments.map((treatment) => {
        return (
          <Card sx={{ width: "250px", height: "300px", display: "flex" }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="align-items"
              width="100%"
            >
              <Box height="150px" position="relative">
                <Box
                  width="100%"
                  height="100%"
                  bgcolor="#00000073"
                  position="absolute"
                >
                  {ROLE === "admin" && (
                    <Box
                      p="5px"
                      display="flex"
                      flexDirection="column"
                      gap="5px"
                    >
                      <Tooltip
                        sx={{ cursor: "pointer" }}
                        title="Delete"
                        placement="right"
                        onClick={() => handleClickOpen(treatment.id)}
                      >
                        <Box
                          width="30px"
                          height="30px"
                          borderRadius="50%"
                          bgcolor="red"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Icon icon="fluent:delete-24-regular" color="white" />
                        </Box>
                      </Tooltip>
                      <Tooltip
                        sx={{ cursor: "pointer" }}
                        title="Edit"
                        placement="right"
                      >
                        <Box
                          width="30px"
                          height="30px"
                          borderRadius="50%"
                          bgcolor="#388e3c"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Icon icon="basil:edit-outline" color="white" />
                        </Box>
                      </Tooltip>
                    </Box>
                  )}
                  <Box
                    position="absolute"
                    p="1"
                    right="0"
                    bottom="0"
                    m="10px"
                    zIndex={10}
                  >
                    <Chip
                      label={treatment.duration_treatment}
                      color="primary"
                    />
                  </Box>
                </Box>
                <Box
                  component="img"
                  src={treatment.img_url}
                  width="100%"
                  height="150px"
                  sx={{ objectFit: "cover" }}
                />
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                p="8px 5px"
                height="100%"
                justifyContent="space-between"
              >
                <Typography variant="body1" fontWeight={550}>
                  {treatment.name_treatment}
                </Typography>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    "-webkit-line-clamp": 3,
                    "-webkit-box-orient": "vertical",
                  }}
                  variant="body2"
                  height="60px"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {treatment.description}
                </Typography>
                <Button variant="contained" color="primary">
                  Reserve
                </Button>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};

export default Home;
