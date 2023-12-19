import React, { useState, useEffect, useRef } from 'react';
import { useGlobalState } from './GlobalStateContext.js';


function Articulation(props) {
  const { globalVariable } = useGlobalState();

  return (
    <div>
      <p>artizfr</p>
    </div>
  )
}
export default Articulation;