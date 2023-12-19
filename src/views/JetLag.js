import React, { useState, useEffect, useRef } from 'react';
import { useGlobalState } from './GlobalStateContext.js';


function JetLag(props) {
  const { globalVariable } = useGlobalState();

  return (
    <div>
      <p>qdfqdfq</p>
    </div>
  )
}
export default JetLag;