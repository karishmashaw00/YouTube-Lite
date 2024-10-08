import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/appSlice';

const buttonList = [ "Live" ,"ABP News", "NDTV", "India Today", "Zee News", "Aaj Tak", "News 18", "India TV News", "BBC", "NewsX", "CNN", "Republic TV", "IBN7", "News Nation", "Times Now", "24 News", "NBC News", "Sky News", "24 News", "ABC7 News"]


const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  
  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
 // console.log(active);

  return (
    <div className='flex w-full overflow-x-scroll no-scrollbar my-1 md:mx-2 '>
      {
        buttonList.map((buttonName, index) => {
          return (
            <div key={index}>
              <button onClick={() => { videoByTag(buttonName) }} className={`${active === buttonName ? "bg-slate-900 text-white" : "bg-gray-100"} w-fit font-medium mx-1 cursor-pointer px-2 py-1  mb-2 rounded-lg`}><span className="whitespace-nowrap">{buttonName}</span></button>
            </div>
          )
        })
      }

    </div>
  )
}

export default ButtonList