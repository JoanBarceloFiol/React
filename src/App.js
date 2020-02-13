import React, { Component } from "react";
import { LocaleContext } from "./lang/LocaleContext.js";
import Menu from "./components/Menu.js";
import Footer from "./components/Footer.js";

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
         <Menu changeLanguage={this.changeLanguage} />
         <Footer /> 
       </LocaleContext.Provider>
     );
   }
}

export default App;
