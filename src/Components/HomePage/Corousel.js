import React from 'react';


function Corousel(props) {


  return (
    <>
    <div className="corousel">
      <div className="corouselContainer">
        
          <div className="corouselImgContainer">
            <img className="corouselImg" src={props.source} alt="futurenselife3"/>
          </div>

          <div className="corouselContent">
            <div><h1 className="corouselHeading">{props.heading}</h1></div>
            <div><h5 className="corouselSubHeading">{props.subHeading}</h5></div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Corousel