import React from 'react';


function Toolbar () {
    return (
        <div>

        <div className='toolbarWrapper'>
             <video src='https://res.cloudinary.com/zzulugirl/video/upload/v1631998537/csaintro_zuddgi.mp4' loop autoPlay muted style={{
            height: '50vh',
            width: '100%',
            objectFit: 'cover',
            marginTop: '-5%'
    
        }} />
        </div>
    
       
        </div>
    )
}

export default Toolbar;