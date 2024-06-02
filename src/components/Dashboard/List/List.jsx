import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import convertNumbers from '../../../functions/convertNumbers'


function List({coin}) {

    return (
        <div className='rounded-2xl justify-center hover:bg-darkgray grid grid-cols-4 md:grid-cols-5 my-2 sm:my-0 max-sm:mx-1 max-md:mx-4 max-sm:p-1 mx-12 p-6 gap-4 md:gap-16 lg:gap-24'>

            
            <div className="flex items-center gap-3 md:gap-5 lg:gap-10">
                <Tooltip title="Logo">
                    <img className="h-[1.75rem] w-[1.75rem] md:h-[2.5rem] md:w-[2.5rem] lg:h-[3rem] lg:w-[3rem]" src={coin.image} />
                </Tooltip>
                <div className='flex flex-col'>
                    <Tooltip title="Symbol">
                        <p className="text-xl font-bold uppercase max-lg:text-base max-sm:text-xs">{coin.symbol}</p>
                    </Tooltip>
                    <Tooltip title="Name">
                        <p className="text-sm font-light text-gray max-sm:text-[0.65rem] max-sm:text-white">{coin.name}</p>
                    </Tooltip>
                </div>
            </div>

            
            

            <Tooltip title="Price Change">
                <div className='flex items-center'>
                    {coin.price_change_percentage_24h > 0 ? (
                        <div className="flex gap-4 ">
                            <div className="flex justify-center font-medium px-4 py-1 w-[4rem] md:w-[6rem] border-[2.3px] border-green text-green rounded-full hover:bg-green hover:text-white max-lg:text-sm max-sm:text-xs ">
                            {"+" + coin.price_change_percentage_24h.toFixed(2) + "%"}
                            </div>
                            <div className="px-1.5 py-1 rounded-full border-[2.3px] border-green hover:bg-green text-green  hover:text-white hidden md:block ">
                                <TrendingUpRoundedIcon/>
                            </div>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <div className=" flex justify-center font-medium px-4 py-1 w-[4rem] md:w-[6rem] border-[2.3px] border-red text-red rounded-full hover:bg-red hover:text-white max-lg:text-sm max-sm:text-xs">
                            {coin.price_change_percentage_24h.toFixed(2) + "%"}
                            </div>
                            <div className="px-1.5 py-1 rounded-full border-[2.3px] border-red hover:bg-red text-red hover:text-white max-md:hidden ">
                                <TrendingDownRoundedIcon/>
                            </div>
                        </div>
                    )}
                </div>
            </Tooltip>
            
            <Tooltip title="Current Price">
                <div className={`${coin.price_change_percentage_24h > 0 ? "text-green" : "text-red"} text-lg font-semibold flex items-center max-lg:text-sm max-sm:text-xs`}>{"$" + coin.current_price.toLocaleString()}</div>
            </Tooltip>
            

            <Tooltip title="Total Volume">
                <div className="flex gap-2 items-center text-lg max-lg:text-sm max-sm:text-xs">
                    <div>{window.innerWidth <= 640 ? convertNumbers(coin.total_volume) : coin.total_volume.toLocaleString()}</div>
                </div>
            </Tooltip>
            
            <Tooltip title="Market Cap">
                <div className="flex gap-2 items-center text-lg max-md:hidden max-lg:text-sm">
                    <div>{"$" + coin.market_cap.toLocaleString()}</div>
                </div>
            </Tooltip>
        </div>
    )
}

export default List
