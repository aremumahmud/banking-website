// import '../css/loader.css'
import logo from '../assets/logo.png'
import { useEffect, useRef } from 'react';

function Loader({Link, color}) {

  return (
    <div className="loader" style={{background:'#00040f'}}>
      <div className="logo"><img src={logo} alt="" /></div>
      <div className="newtons-cradle">
        <div style={color?{background:color}:{}} className="newtons-cradle__dot"></div>
        <div style={color?{background:color}:{}} className="newtons-cradle__dot"></div>
        <div style={color?{background:color}:{}} className="newtons-cradle__dot"></div>
        <div style={color?{background:color}:{}} className="newtons-cradle__dot"></div>
      </div>
    
    </div>
  );
}

export default Loader;
