import React , {useState, useEffect}from 'react' 
import Navigation from '../components/Navigation'
import Timer from '../components/Timer' 
import About from '../components/About' 

export default function index() {

  const [pomodoro, setPomodoro] = useState(25) 
  const [shortBreak, setShortBreak] = useState(5) 
  const [longBreak, setLongBreak] = useState(10) 
  const [seconds, setSeconds] = useState(0)
  const [stage, setStage ] = useState(0)
  const [consumedSecond , setConsumedSecond] = useState(0) 
  const [ticking, setTicking] = useState(false) 

  const switchStage = (index) => { 
    const isYes = consumedSecond && stage !== index
          ? confirm("Are you sure you want to switch stage?") 
          : false ;
    if(isYes){ 
      reset()
      setStage(index) 
    } else if (!consumedSecond){ 
      setStage(index) 

    }
  }

  const  getTickingTime = (time) => {
         const timeStage = {
            0: pomodoro, 
            1: shortBreak,
            2: longBreak,
         }
         return timeStage[stage]
  }

  const updateMinute = () => { 
        const updateStage = {
            0: setPomodoro, 
            1: setShortBreak,
            2: setLongBreak,
         }
         return updateStage[stage]
  }

    const reset = () => { 
      setConsumedSecond(0)
      setTicking(false) 
      setSeconds(0) 
      setPomodoro(25)
      setShortBreak(5)
      setLongBreak(10) 
    }



  const clockTicking = () => {
    const minutes = getTickingTime(); 
    const setMinutes = updateMinute();

    if (minutes === 0 && seconds === 0) { 
      reset()
    }else if ( seconds === 0){
      setMinutes((minute) => minute - 1); 
      setSeconds(59);
    }else{ 
      setSeconds((second) => second - 1); 
    }
  }

  useEffect(() => {
    window.onbeforeunload = () => {
      return consumedSecond ? "show warning" : null; 
    };
    const  timer = setInterval(() => {
      if (ticking) {
        setConsumedSecond((value) => value + 1)
        clockTicking(); 
      }
    },1000); 

    return () => { 
      clearInterval(timer)
    }
  }, [seconds, pomodoro, shortBreak, longBreak, ticking]) 

  return(
     <div className="bg-gray-900 min-h-screen font-inter">
    <div className='max-w-2xl min-h-screen mx-auto'>
        <Navigation />  
        <Timer 
          stage={stage} 
          switchStage={switchStage}
          getTickingTime={getTickingTime}
          seconds={seconds} 
          ticking={ticking} 
          setTicking={setTicking} 
        />
        <About />
    </div>
  </div>
  )
}
