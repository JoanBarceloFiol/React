import React, { Component } from "react";
import { LocaleContext } from "./LocaleContext.js";

import lang from "./lang.json";

class Translate extends Component {
  
  constructor(props) {
    super(props);

    // Defineix els fitxers json de idiomes
    this.state = {
      langs: lang
    };
  }

  // Renderitza la paraula a traduir amb l'idioma corresponent
  render() {
      const {langs} = this.state 
      const {string} = this.props
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }

}

export default Translate;