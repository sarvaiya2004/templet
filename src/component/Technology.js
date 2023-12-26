import React from 'react'
import './technology.css'
import A from './images/icons8-react-native-144.png';
import B from './images/icons8-angularjs-144.png';
import C from './images/icons8-javascript-144.png';
import D from './images/icons8-nodejs-144.png';
import E from './images/icons8-typescript-144.png';
import F from './images/icons8-figma-144.png';
import G from './images/icons8-amazon-web-services-144.png';
import H from './images/icons8-firebase-144.png';
import I from './images/icons8-mysql-logo-144.png';
import J from './images/icons8-postgresql-144.png';


const Technology = () => {
  return (
 <div>
       
            
            <h3 className='title'>
            ________ TECHNOLOGY________
             </h3>
 <div className='techno'>
    <div className="container">
<div className="col">
<img src={A} />

  </div>
  <div className="col">
<img src={B} />

  </div>
  <div className="col">
<img src={C} />

  </div>
  <div className="col">
<img src={D} />

  </div>
  <div className="col">
<img src={E} />

  </div>
  
    </div>
  
    </div>
    <div className="container">
<div className="col">
<img src={F} />

  </div>
  <div className="col">
<img src={G} />

  </div>
  <div className="col">
<img src={H} />

  </div>
  <div className="col">
<img src={I} />

  </div>
  <div className="col">
<img src={J} />

  </div>
  
    </div>
    </div>
  )

}

export default Technology