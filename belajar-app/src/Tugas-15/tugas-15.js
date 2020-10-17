import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Tugas9 from '../Tugas-9/tugas-9'
import Tugas10 from '../Tugas-10/tugas-10'
import Tugas11 from '../Tugas-11/tugas-11'
import Tugas12 from '../Tugas-12/tugas-12'
import Tugas13 from '../Tugas-13/tugas-13'
import Tugas14 from '../Tugas-14/tugas-14'
import Navbar from "./navbar";

const Tugas15 = () => {
    return (
        <Router>    
            <Navbar />
            <Switch>
              <Route exact path="/" component={Tugas9} />
              <Route exact path="/tugas-10" component={Tugas10} />
              <Route exact path="/tugas-11" component={Tugas11} />
              <Route exact path="/tugas-12" component={Tugas12} />
              <Route exact path="/tugas-13" component={Tugas13} />
              <Route exact path="/tugas-14" component={Tugas14} />
            </Switch>
        </Router>
      );
}

export default Tugas15;