import React, { useState, useEffect, useRef } from 'react';
import { useGlobalState } from './GlobalStateContext.js';


function AntiStress(props) {
  const { globalVariable } = useGlobalState();

  return (
    <div>
      <p>AntiStress</p>
    </div>
  )
}
export default AntiStress;