import React from "react";
import {connect} from "react-redux";
import * as ProfileActions from "../store/actions/profile.actions";
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Profile extends React.Component{

  constructor(){
    super();
    this.toggleProfilePhoto = this.toggleProfilePhoto.bind(this);
    this.state = {
     emails: ['ivn.vulovic@gmail.com', 'ivan@vulovic.xyz']
    }
  }

  componentDidMount(){
    this.props.loadProfilePhoto(this.props.profile.email || this.state.emails[0]);
  }

  toggleProfilePhoto(){
    let position = this.state.emails.indexOf(this.props.profile.email);
    this.props.toggleProfilePhoto(position === 0 ? this.state.emails[1] : this.state.emails[0]);
  }

  render(){
    return (
      <div>
       <div className={"mat-ui-card"}>
         <Card>
           <CardMedia>
             <img src={this.props.profile.photo} alt="Hola Hola"/>
           </CardMedia>
           <CardTitle title="Ivan Vulovic" subtitle="JavaScript Developer" />
           <CardText>
             {this.props.profile.email}
           </CardText>
           <CardActions>
             <FlatButton onClick={this.toggleProfilePhoto} label="Let's Play!" />
           </CardActions>
         </Card>
       </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    profile: state.profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadProfilePhoto: (email) => dispatch(ProfileActions.loadProfilePhoto(email)),
    toggleProfilePhoto: (email) => dispatch(ProfileActions.toggleProfilePhoto(email)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);