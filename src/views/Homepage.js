import React, { useState, useEffect, useRef } from 'react';
import { useGlobalState } from './GlobalStateContext.js';


function Homepage(props) {
  const { globalVariable } = useGlobalState();

  return (
    <div>
      <p>accueil</p>
    </div>
  )
}
export default Homepage;