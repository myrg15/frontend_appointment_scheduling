import React, { useEffect, useState } from "react";
import { getAllTreatments } from "../../services/apiCalls";
import { Box, Button, Card, Chip, Typography } from "@mui/material";

const Home = () => {
  const TOKEN = localStorage.getItem("token");
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      const response = await getAllTreatments();
      setTreatments(response);
    };

    fetchTreatments();
  }, []);

  console.log(treatments);

  return (
    <Box display="flex" gap="10px" p="10px">
      {treatments.map((treatment) => {
        return (
          <Card sx={{ width: "250px", height: "300px", display: "flex" }}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="align-items"
            >
              <Box height="150px" position="relative">
                <Box
                  width="100%"
                  height="100%"
                  bgcolor="#00000073"
                  position="absolute"
                >
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
