import React from "react";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';

function Grid({ coin }) {
  return (
    <div className={`hover:border hover:border-2 ${coin.price_change_percentage_24h > 0 ? "hover:border-green" : "hover:border-red"} transform transition-transform duration-500 hover:scale-[1.03] w-[300px] h-[300px] border-darkgray bg-darkgray flex flex-col pl-8 pt-7 rounded-2xl`}>
      <div className="flex gap-5">
        <img className="h-[3rem] w-[3rem]" src={coin.image} />
        <div>
          <p className="text-lg font-bold uppercase">{coin.symbol}</p>
          <p className="text-sm font-light text-gray ">{coin.name}</p>
        </div>
      </div>

      {coin.price_change_percentage_24h > 0 ? (
        <div className="flex mt-8 gap-4 ">
            <div className="flex justify-center font-medium px-4 py-1 w-[6rem] border-[2.3px] border-green text-green rounded-full hover:bg-green hover:text-white ">
            {"+" + coin.price_change_percentage_24h.toFixed(2) + "%"}
            </div>
            <div className="px-1.5 py-1 rounded-full border-[2.3px] border-green hover:bg-green text-green  hover:text-white">
                <TrendingUpRoundedIcon/>
            </div>
        </div>
      ) : (
        <div className="flex mt-8 gap-4">
            <div className=" flex justify-center font-medium px-4 py-1 w-[6rem] border-[2.3px] border-red text-red rounded-full hover:bg-red hover:text-white">
            {coin.price_change_percentage_24h.toFixed(2) + "%"}
            </div>
            <div className="px-1.5 py-1 rounded-full border-[2.3px] border-red hover:bg-red text-red hover:text-white">
                <TrendingDownRoundedIcon/>
            </div>
        </div>
      )}

      <div className={`mt-4 ${coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"} font-medium`}>{"$" + coin.current_price.toFixed(2)}</div>

      <div className="text-xs mt-4">
        <div className="flex gap-2">
          <div className="font-semibold">{"Total Volume: "}</div>
          <div>{coin.total_volume.toLocaleString()}</div>
        </div>
        <div className="flex gap-2 mt-2">
          <div className="font-semibold">{"Total Marketcap: "}</div>
          <div>{"$" + coin.market_cap.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
