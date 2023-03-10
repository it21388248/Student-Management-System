import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class NavBar extends Component{
  
  render(){

   
    return(

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"style={{color: "red"}}>Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
           
            </li>
            <Link to ="/" class="nav-link">Posts</Link>
            
          </ul>
        </div>
      </nav>
      
    )
    
  }

}

