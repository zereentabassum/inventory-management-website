import {useState, useEffect} from "react";

const useItems = () =>{
    const [items, setItems] = useState([]);

    useEffect(()=>{
        fetch('https://obscure-thicket-87348.herokuapp.com/item')
        .then(res=> res.json())
        .then(data=> setItems(data));
    } ,[])

return [items, setItems];
}

export default useItems;