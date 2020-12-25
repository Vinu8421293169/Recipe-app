import { Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Recipe from "./Recipe";

export default function ListItems({data}) {
    const history=useHistory();
  return (

        <Grid container spacing={3} className="container">
        {data.results.map((item) => (
          <Grid item key={item.title} xs={12} sm={6} md={6} lg={4} xl={3}>
            <Recipe onClick={()=>{history.push(`/recipe/${item.id}`)}} key={item.title} item={item} />
            </Grid>
          ))}
        </Grid>
  );
}
