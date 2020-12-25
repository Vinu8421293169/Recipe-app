import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./App.css";
import Navbar from "./Navbar";
import ListItems from "./ListItems";
import { Redirect, Route, Switch } from "react-router-dom";
import RecipeDetails from "./RecipeDetails";
import recipeData from './recipeData';

function App() {
  const [search, setSearch] = useState("");
  const [totalPosts,setTotalPosts]=useState(recipeData.totalResults);
  const [currentPage,setCurrentPage]=useState(0);


  const [data, setData] = useState(recipeData);


  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&maxFat=25&number=6&maxCarbs=100&maxProtein=100&maxCalories=100&apiKey=96df8140774f4347aea3aa509401ae80&offset=${currentPage*6}`
      )
      .then((res) => {
         setData(res.data);
        setTotalPosts(res.data.totalResults);
        console.log("fetched");
        console.log(res.data.offset);
      }).catch(err=>{setData(err);
      console.log(err)});
  }, [search,currentPage]);

  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }


  return (
    <div className="column">

    <Navbar onSearch={setSearch} />

    <Switch>
      <Route path="/recipes">
      <ListItems currentPage={currentPage} data={data}/>
      </Route>
      <Route exact path="/recipe/:id" component={RecipeDetails}/>
      <Redirect to="/recipes"/>
    </Switch>

    <div className="paginator">
    <Pagination
          activePage={currentPage+1}
          itemsCountPerPage={6}
          totalItemsCount={totalPosts}
          pageRangeDisplayed={5}
          onChange={(pageNumber)=>{handlePageChange(pageNumber-1)}}
          itemClass="page-item"
          linkClass="page-link"
        />
    </div>
    </div>
  );
}

export default React.memo(App);