import React from 'react';
import './Sidebar.css'

function Sidebar () {
	return (

	
<div class="container">
  <div id="hamburgerBtn">&#9776</div>
  <nav id="sideMenu">
    <div class="nav-brand">
      <p> Commission <strong>Staff</strong> Association</p>
      <img src="https://res.cloudinary.com/zzulugirl/image/upload/v1632655625/IMG-20210819-WA0012_adobespark_zhdez3.png" style={{
		  Height: "250%",
		  width: "200px"
	}}
	  />
    </div>
    <ul class="nav-items" style={{
      marginTop: '-10%'
    }}>
      <li>Library</li>
      <li>Events</li>
      <li>Campaign</li>
    </ul>
    </nav>
  
</div>
	) 
}

export default Sidebar;