import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './ProfilPhoto.css';

function ProfilPhoto() {
      return ( <div>
            <h1> Hello Guys </h1> 
            <div className = "ProfilPhoto" >
            <Avatar className = "avatar"
            alt = "Chokri Hamza"
            src = "./images/Avatar.jpg" / >
            <img src = "./images/avatar.jpg"
            alt = "chokri hamza"
            className = "AvatarImage" / >
            </div> 
            </div>

      );
}


export default ProfilPhoto;