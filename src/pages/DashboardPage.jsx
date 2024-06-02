import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header/header";
import TabsComponent from "../components/Dashboard/Tabs/TabsComponent";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search.jsx";
import PaginationControlled from "../components/Dashboard/Pagination/Pagination.jsx";


function DashboardPage() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginationCoins, setPaginationCoins] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const contentSize = 10;
  
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  useEffect(()=>{
    const start = (page-1)*contentSize;
    const end = page*contentSize;

    console.log(page, start, end);

    setPaginationCoins(coins.slice(start,end));
  }, [page]);

  const onSearchChange = (e) => {
    setSearch(e.target.value)
  };

  var filteredCoins = paginationCoins.filter(
    (item) => 
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // (page-1)*10 - page*10  -> [10 - 20)

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1"
      )
      .then((response) => {
        console.log("response >>>>", response);
        setCoins(response.data);
        setTotalPages(Math.ceil(coins.length / contentSize));
        console.log("total pages is", totalPages);
      })
      .catch((error) => {
        console.log("Errorr>>>>", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={filteredCoins} />
      <PaginationControlled page={page} totalPages={totalPages} handlePageChange={handlePageChange}/>
    </div>
  );
}

export default DashboardPage;
