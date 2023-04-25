import { useEffect, useState } from "react";
import React from "react";
import QueryTable from "./QueryTable";
import axios from "axios";

const Query1 = () => {
  const response = [
    { name: "Dhokla", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name: "Cupcake", calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function getQuery1Data() {
    axios({
      method: "GET",
      url: "/user/lowerIncomeAndLuxryCar",
    })
      .then((response) => {
        const res = response.data;
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }

  const sample = () => {
    console.log("chal rhaqa hai raj bhai");
  };
  useEffect(() => {
    getQuery1Data();
    sample();
  }, []);

  return (
    <div>
      <br />
      <div>
        <div style={{ margin: "10% 16% 10% 16%" }}>
          {data.length > 0 ? (
            <QueryTable data={data} />
          ) : (
            <QueryTable data={[]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Query1;
