import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import info from './recipeInfo';

function RecipeDetails(props) {
    const [data,setData]=useState("");
    const id=props.match.params.id;
    
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=96df8140774f4347aea3aa509401ae80`).then(res=>{
            setData(res.data);
            console.log("fetched");
        }).catch(err=>console.log(err.message));
    }, []);
    
    return (<div className="container center">
        {data?<><h3>{data.title}</h3>
        <img src={data.image} className="top-adjust round"></img>
        <p className="top-adjust" dangerouslySetInnerHTML={{__html:data.summary}}></p></>:<div>Loading...</div>}
    </div>);
}

export default React.memo(RecipeDetails);