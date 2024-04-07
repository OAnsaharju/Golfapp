import React, { useState, useEffect } from "react";

const StatsList = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/stats");
        const data = await response.json();
        setStats(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetchin data", error);
      }
    };
    fetchData();
  }, []);

  return <div className="stat-list-container"></div>;
};

export default StatsList;
