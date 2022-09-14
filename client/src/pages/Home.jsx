import React, { Fragment } from "react";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

function Home() {
  return (
    <Fragment>
      <Header />
      <div className="call_text"><p>Find Your Dream Place.</p></div>
      <div className="homeSearch">
        <Search />
      </div>
    </Fragment>
  );
}

export default Home;
