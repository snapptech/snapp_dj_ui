
import songs from "@/data/songs.json";
import { SongDisplayPic } from "@/lib/components/SongDisplayPic";
import { Avatar } from "@/lib/components/Avatar";
import { useEffect, useState } from "react";


const MySongList = () => {

    const [data, setData] = useState(songs);
    const [input , setInput] = useState('')
    const handleChange = (e:any) => {
        setInput(e.target.value)
    }

    return (
        <main className="px-5 py-2 min-h-screen flex flex-col justify-between">
            <div className="flex flex-row justify-center flex-1 items-center">
                <Avatar image="/images/profile_pic.png" onChange={() => { }} />
            </div>
            <div className="flex flex-row justify-center flex-1 items-center">
                <p className="text-lg text-bold">
                    DJ Nifty <span className="text-base">( NL )</span>
                </p>
            </div>
            <div className="flex flex-row justify-center flex-1 items-center py-10 border-b border-white">
                <h2 className="text-xl text-bold border-r border-white pr-5 py-4" >
                    {/* {(Math.random() * 10).toFixed(2)} */}
                    5,00
                </h2>

                <h2 className="text-xl text-bold border-r border-white pr-5 pl-5 py-4 mx-5">
                    {/* {(Math.random() * 10).toFixed(2)} */}
                    10,00
                </h2>
                <input className="text-xl text-bold pl-5 py-4 w-1/5  bg-light-green" type="text" onChange={handleChange}></input>
             
            </div>

            {data.songs.map((item: any, index) => (
                <div className=" flex py-6 border-b border-white justify-start hover:bg-purple-500" key={index}>
                    <div className="h-16 w-16">
                        <SongDisplayPic image="/images/songdisplaypic.png" />
                    </div>
                    <div className="px-2 py-1">
                        <h4 > {item.title}</h4>
                        <p >{item.artist}</p>
                    </div>

                </div>
            ))}
        </main>
    );
}
export default MySongList;