import { useEffect, useRef, useState } from 'react';

const Timer = ({ alwaysRun, isRuning, setStopGame, questionNumber }) => {
  const [stopwatch, setStopWatch] = useState(40);
  const timer = useRef();

  useEffect(() => {


    if (stopwatch === 0) {
      setStopGame(true) //vaxt bitdi
    }

    if (!isRuning) {
      timer.current = setInterval(() => {
        setStopWatch(prev => prev - 1)
      }, 1000)

    } else {


      if (alwaysRun.current) {
        timer.current = setInterval(() => {
          setStopWatch(prev => prev - 1)
        }, 1000)
      } else {

        clearInterval(timer.current);
        alwaysRun.current = !alwaysRun.current;
      }
    }


    return () => clearInterval(timer.current);
  }, [alwaysRun, isRuning, setStopGame, stopwatch]);


  useEffect(() => {
    setStopWatch(40)
  }, [questionNumber])
  return stopwatch;
}

export default Timer