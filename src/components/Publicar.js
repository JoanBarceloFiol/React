import React, { useState, Component } from 'react';
import { 
	TabContent, 
	TabPane, 
	Nav, 
	NavItem, 
	NavLink, 
	Card,
	CardHeader, 
	CardBody, 
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
	} from 'reactstrap';
import classnames from 'classnames';
import Translate from "../lang/Translate";
import axios from "axios";

class Publicar extends Component{
	img = null;

    constructor(props) {
        super(props);
        this.state = {
        	activeTab: '1',
            text: null,
            img: null,
            display: null
        };

        this.changeText = this.changeText.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.sentPublication = this.sentPublication.bind(this);
        this.displayImg = this.displayImg.bind(this);
    }

    changeTab(tab){
            if (this.state.activeTab !== tab) {
                this.setState({
                    activeTab: tab
                });
            }
    }

    changeText(event){
        this.setState({text: event.target.value});
    }

    onChangeHandler(event){
        this.setState({img: event.target.files[0]});
        this.displayImg(event);
    }

    sentPublication(){
        const querystring = require('querystring');
        const text = this.state.text;
        const user = localStorage.getItem('myData').split(',')[0];

        axios.post(`http://www.goatrails.dawman.info/api/publicatio`,  querystring.stringify({text, user}))
            .then(
                (response) => {
                    const img = new FormData();
                    img.append('img', this.state.img);

                    console.log(`http://www.goatrails.dawman.info/api/publicatio/${response.data[0]}/img`);

                    axios.post(`http://www.goatrails.dawman.info/api/publicatio/${response.data[0]}/img`, img)
                        .then(
                            this.props.callback
                        );
                },
                (error) => { console.log(error) }
            );
    }

    displayImg(e){
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                display: reader.result
            });
        }

        reader.readAsDataURL(file)
    }


  render() {

        console.log(this.state.display);

      return (
        <Card ClassName="gedf-card">
          <CardHeader>
          <Nav tabs className="card-header-tabs">
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {this.changeTab('1')}}
              >
              <Translate string={'publication'}/>
              </NavLink>
            </NavItem>
            <NavItem className="cursor-pointer">
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {this.changeTab('2')}}
              >
              <Translate string={'images'}/>
              </NavLink>
            </NavItem>
          </Nav>
          </CardHeader>
          <CardBody>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
            <div className="form-group">
            <label className="sr-only" for="message">Compartir</label>
            <textarea onChange={this.changeText} className="form-control" id="message" rows="3" placeholder={<Translate string={'whatAreYouThinking'}/>}/>
            </div>
            </TabPane>
            <TabPane tabId="2">
                <div className="form-group">
                <div className="custom-file">
                <input onChange={this.onChangeHandler} type="file" className="form-control-file" id="customFile"/>
                <label className="custom-file-label" for="customFile"><Translate string={'uploadImage'}/></label>
                </div>
                    {(this.state.display !== null) ? (<img src={this.state.display} className="img-thumbnail"/>) : null }
                </div>
                <div className="py-4"></div>
            </TabPane>
          </TabContent>
            <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
                <button onClick={this.sentPublication} type="submit" className="btn btn-primary"><Translate string={'share'}/></button>
            </div>

            <UncontrolledDropdown>
            <DropdownToggle tag="a" caret className="btn btn-link text-decoration-none text-old-primary bg-white border-0">
            <i className="fa fa-globe"></i>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem><i className="fa fa-globe"></i> <Translate string={'public'}/></DropdownItem>
              <DropdownItem><i className="fas fa-user-lock"></i> <Translate string={'private'}/></DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>

            </div>
          </CardBody>
        </Card>
      );
  }
}

export default Publicar;