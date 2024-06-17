import React, { useState, useEffect, useRef } from "react";
function stopWatch() {
  let [isRunning, setIsRunning] = useState(false);
  let [elapsedTime, setElapsedTime] = useState();
  const intervalIdRef = useRef(0);
  const startTimeRef = useRef(0);
}
export default stopWatch;
