import React, { Component } from "react";
import { LocaleContext } from "./lang/LocaleContext.js";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home";
import Social from "./components/Social";
import Courses from "./components/Courses";
import Routes from "./components/Routes";
import Login from "./components/Login";
import Register from "./components/Register";


class App extends Component {
  
  constructor(props) {
     super(props);

     // Idioma per defecte 
     this.state = {
       preferredLocale: "es"
     };
  }

  // Canvia l'idioma de visualització
  changeLanguage = ({ currentTarget: { id } }) => {
     this.setState({
       preferredLocale: id
     });
  };
   
  // Renderitza la App amb el context associat (idioma seleccionat).
  render() {
     return (
       <LocaleContext.Provider value={this.state.preferredLocale}>
         <BrowserRouter>
             <Menu changeLanguage={this.changeLanguage} preferredLocale={this.state.preferredLocale}/>
               <main className="container-fluid m-main">
                   <Switch>
                       <Route path="/" exact component={Home} />
                       <Route path="/routes" component={Routes} />
                       <Route path="/courses" component={Courses} />
                       <Route path="/social" component={Social} />
                       <Route path="/login" component={Login} />
                       <Route path="/register" component={Register} />
                   </Switch>
               </main>
             <Footer />
         </BrowserRouter>
       </LocaleContext.Provider>
     );
   }
}

export default App;
