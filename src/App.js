import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Categories } from "./Categories";
import { Home } from "./Home";

import { Sports } from "./Sports";
import { sportdata } from "./sportdata";
import { Sportview } from "./Sportview";
import { Sportedit } from "./Sportedit";
import { Sportadd } from "./Sportadd";


import { Technology } from "./Technology";
import { technologydata } from "./technologydata";
import { Techview } from "./Techview";
import { Techadd } from "./Techadd";
import { Techedit } from "./Techedit";

import { traveldata } from "./traveldata";
import { Travelview } from "./Travelview";
import { Traveladd } from "./Traveladd";
import { Traveledit } from "./Traveledit";
import { Travel } from "./Travel";


function App() {
  const[sport,setSport]=useState(sportdata);
  const[tech,setTech]=useState(technologydata);
  const[travel,setTravel]=useState(traveldata);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
          </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="/sport">
          <Sports sport={sport} setSport={setSport}/>
        </Route>
        <Route path="/technology">
          <Technology tech={tech} setTech={setTech} />
        </Route>
        <Route path="/travel">
          <Travel travel={travel} setTravel={setTravel}/>
        </Route>





        <Route path="/travelview/:id">
        <Travelview travel={travel} setTravel={setTravel}/>
        </Route>
        <Route path="/traveledit/:id">
        <Traveledit travel={travel} setTravel={setTravel}/>
        </Route>
        <Route path="/traveladd">
        <Traveladd travel={travel} setTravel={setTravel}/>
        </Route>


        <Route path="/techadd">
        <Techadd tech={tech} setTech={setTech} />
        </Route>
        <Route path="/techview/:id">
        <Techview tech={tech} setTech={setTech} />
        </Route>
        <Route path="/techedit/:id">
        <Techedit tech={tech} setTech={setTech} />
        </Route>


        <Route path="/sportadd">
        <Sportadd sport={sport} setSport={setSport}/>
        </Route>
        <Route path="/sportedit/:id">
        <Sportedit sport={sport} setSport={setSport}/>
        </Route>
        <Route path="/sportview/:id">
        <Sportview sport={sport} setSport={setSport}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;




