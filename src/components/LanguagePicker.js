import React, {Component} from 'react'
import classnames from 'classnames';
import {
	  UncontrolledDropdown,
	  DropdownToggle,
	  DropdownMenu,
	  DropdownItem,
} from 'reactstrap';
import Translate from "../lang/Translate";

class LanguagePicker extends Component {
	
	constructor(props) {
		super(props);

	    this.state = {
	    	imgs: {
	    	        en: {
	    	        	src:  "http://www.goatrails.dawman.info/img/lang/English.png",
	    	        	alt: "en"
	    	        	},
	    	        es: {
	    	        	src: "http://www.goatrails.dawman.info/img/lang/Espa\u00f1ol.png",
		    	        alt: "es"
	    	          },
	    	        ca: {
	    	        	src: "http://www.goatrails.dawman.info/img/lang/Catala.png",
		    	        alt: "ca" 
	    	          },
		    	    fr: {
	    	        	src: "http://www.goatrails.dawman.info/img/lang/Fran\u00e7ais.png",
		    	        alt: "fr" 	       
		    	       }
	    	}
	    };
	}
    
    render(){
        const {changeLanguage} = this.props;
        const {preferredLocale} = this.props;
        const {imgs} = this.state;
        console.log(preferredLocale)
        return (
        	<UncontrolledDropdown setActiveFromChild>
	            <DropdownToggle tag="a" className="btn btn-link text-light dropdown-toggle text-decoration-none" caret>
	            <img className="mr-2 mt-n1 rounded-circle shadow-sm" alt={preferredLocale}  src={imgs[preferredLocale]["src"]}  width="20px"/>
	            <span className='d-inline d-md-none text-uppercase'>
	            <Translate string={'langCode'}/>      </span>
	    		<span className='d-none d-md-inline'>
	    		<Translate string={'lang'}/>      	</span>
	            </DropdownToggle>
	            <DropdownMenu className="dropdown-menu-right">
	              <DropdownItem id="ca" onClick={changeLanguage} tag="button" href="#" className={classnames({ 'bg-light': preferredLocale === 'ca' }, 'btn btn-link')}><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="CA" src="http://www.goatrails.dawman.info/img/lang/Catala.png" width="20px"/>Catala</DropdownItem>
	              <DropdownItem id="en" onClick={changeLanguage} tag="button" href="#" className={classnames({ 'bg-light': preferredLocale === 'en' }, 'btn btn-link')}><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="EN" src="http://www.goatrails.dawman.info/img/lang/English.png" width="20px"/>English</DropdownItem>
	              <DropdownItem id="es" onClick={changeLanguage} tag="button" href="#" className={classnames({ 'bg-light': preferredLocale === 'es' }, 'btn btn-link')}><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="ES" src="http://www.goatrails.dawman.info/img/lang/Español.png" width="20px"/>Español</DropdownItem>
	              <DropdownItem id="fr" onClick={changeLanguage} tag="button" href="#" className={classnames({ 'bg-light': preferredLocale === 'fr' }, 'btn btn-link')}><img className="mr-2 mt-n1 rounded-circle shadow-sm" alt="FR" src="http://www.goatrails.dawman.info/img/lang/Français.png" width="20px"/>Français</DropdownItem>
	            </DropdownMenu>
	        </UncontrolledDropdown>
        )
    }
}

export default LanguagePicker;