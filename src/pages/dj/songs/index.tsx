
import songs from "@/data/songs.json";
import { useEffect, useState } from "react";


const MySongList = () => {

    const [data, setData] = useState(songs);

    return (
        <ul>
            {data.songs.map((item: any) => (
                <><h4 key={item.title}> </h4><p>{item.artist}</p></>
            ))}
        </ul>
    );
}
export default MySongList;