import React, { Component } from "react";
import { LocaleContext } from "./lang/LocaleContext.js";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home/Home";
import Social from "./components/Social/Social";
import Courses from "./components/Courses/Courses";
import Routes from "./components/Routes/Routes";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import RoutePage from "./components/Route/RoutePage";
import User from "./components/User/User";
import MyRoutes from "./components/MyRoutes/MyRoutes";
import MyCourses from "./components/MyCourses/MyCourses";
import CreateRoute from "./components/CreateRoute/CreateRoute";


class App extends Component {
  
  constructor(props) {
     super(props);
     const data = localStorage.getItem('myData').split(',');
      console.log(data);

      // Idioma per defecte
     this.state = {
         preferredLocale: "es",
         login: (Number.isInteger(parseInt(data[0])))
     };

     this.reloadPage = this.reloadPage.bind(this);
  }

  // Canvia l'idioma de visualització
  changeLanguage = ({ currentTarget: { id } }) => {
     this.setState({
         preferredLocale: id,
     });
  };

  reloadPage(){
      const data = localStorage.getItem('myData').split(',');
      this.setState({login: (Number.isInteger(parseInt(data[0])))})
  }
   
  // Renderitza la App amb el context associat (idioma seleccionat).
  render() {
     return (
       <LocaleContext.Provider value={this.state.preferredLocale}>
         <BrowserRouter>
             <Menu changeLanguage={this.changeLanguage} preferredLocale={this.state.preferredLocale} login={this.state.login}/>
               <main className="container-fluid m-main">
                   <Switch>
                       <Route path="/" exact component={Home} />
                       <Route path="/routes" component={Routes} />
                       <Route path="/courses" component={Courses} />
                       <Route path="/social" component={Social} />
                       <Route path="/login" component={() => <Login callback={this.reloadPage.bind(this)} />}/>
                       <Route path="/register" component={Register} />
                       <Route path="/route/:handle" component={RoutePage} />
                       <Route path="/user/:handle" component={User} />
                       <Route path="/my-routes" component={MyRoutes} />
                       <Route path="/my-courses" component={MyCourses} />
                       <Route path="/create-route" component={CreateRoute} />
                  </Switch>
               </main>
             <Footer />
         </BrowserRouter>
       </LocaleContext.Provider>
     );
   }
}

export default App;
