import { useState ,useEffect } from "react";

export function useFetch(url){
    const [post , setposts] = useState({});

   async function getdetails(){
      const response = await fetch(url);
      const json = await response.json();
      setposts(json)
    }

    useEffect(()=>{
        getdetails()
    }, [url])

    return {post};
}