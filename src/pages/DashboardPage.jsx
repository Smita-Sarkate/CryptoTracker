import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";

function DashboardPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1"
      )
      .then((response) => {
        console.log("response >>>>", response);
        setCoins(response.data);
      })
      .catch((error) => {
        console.log("Errorr>>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <TabsComponent coins={coins} />
    </div>
  );
}

export default DashboardPage;
