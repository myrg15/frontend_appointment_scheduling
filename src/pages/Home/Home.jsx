import React, { useEffect, useState } from "react";
import { getAllTreatments } from "../../services/apiCalls";

const Home = () => {
  const [treatments, setTreatments] = useState([]);

  useEffect(() => {
    const fetchTreatments = async () => {
      const response = await getAllTreatments();
      setTreatments(response);
    };

    fetchTreatments();
  }, []);

  console.log(treatments);

  return <div>Treatments</div>;
};

export default Home;
