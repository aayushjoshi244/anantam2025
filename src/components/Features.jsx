import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { GiLaurelsTrophy } from "react-icons/gi";
import data from "../json/home.json";
import "./Features.css";

const Home = () => {
  const targetDate = new Date(Date.UTC(2025, 1, 21, 9, 0, 0)); // February 21, 2025, 9:00 AM UTC

  // Countdown logic
  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Counter animation
  const [count, setCount] = useState(0);
  const targetCount = data.regsiterations;
  const duration = 3000;

  useEffect(() => {
    const animateCounter = () => {
      const incrementPerFrame = targetCount / (duration / 16);
      let currentCount = 0;

      const updateCount = () => {
        currentCount += incrementPerFrame;
        if (currentCount >= targetCount) {
          clearInterval(interval);
          setCount(targetCount);
        } else {
          setCount(Math.floor(currentCount));
        }
      };

      const interval = setInterval(updateCount, 16);

      setTimeout(() => {
        clearInterval(interval);
        setCount(targetCount);
      }, duration);
    };

    animateCounter();
    return () => {
      setCount((prevCount) =>
        prevCount >= targetCount ? targetCount : prevCount
      );
    };
  }, [targetCount, duration]);

  return (
    <div className="mb-40 bg-black">
      <div className="flex h-[800px] w-full flex-col items-center justify-center rounded-lg bg-black">
        <div className="  grid h-full w-full grid-cols-2 md:grid-cols-5 md:grid-rows-9 gap-4 bg-black mt-[100px]">
          {/* Background section */}
          <div className="col-span-2 animate-fadeInLeft md:col-span-4 row-span-6 relative rounded-3xl bg-cover bg-center flex flex-col pl-6 justify-end pb-12 bg-[url('/img/maen.png')] before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:rounded-3xl h-[500px] w-[1000px] ml-[120px]">
            <div className="relative z-10 w-full">
              <div className="font-bold mt-10 md:mt-4 text-white text-start text-4xl sm:text-5xl lg:text-6xl [text-shadow:_0_4px_8px_#000000]">
                ANANTAM:
              </div>
              <div className="font-bold mt-2 sm:mt-4 text-start text-white text-4xl sm:text-5xl lg:text-6xl [text-shadow:_0_4px_8px_#000000]">
                The TechFest U needed
              </div>
              <div className="flex justify-start">
                <Button
                  className="mt-4 text-xl sm:text-2xl h-12 w-32 md:h-14 md:w-48 rounded-xl text-black font-bold bg-[#f2be22] hover:text-white"
                  onClick={() =>
                    window.open("https://code-kshetra-2.devfolio.co/", "_blank")
                  }
                >
                  Register
                </Button>
              </div>
            </div>
          </div>

          {/* Logo section */}
          <div className="col-span-2 animate-fadeInLeft md:col-span-1 row-start-1 row-span-1 md:row-span-2 flex justify-center z-20">
            <img
              src="/img/logo1.png"
              alt="Logo"
              className="h-24 md:h-28 w-auto mr-[100px] mt-[5px]"
            />
          </div>

          {/* Prize pool section */}
          <div className="brokey col-span-1 row-span-2 animate-fadeInDown rounded-3xl bg-secondary p-4 z-20 h-[150px] w-[290px]">
            <div className="font-bebas text-[#f2be22] text-4xl sm:text-5xl font-bold justify-center items-center ml-[50px]">
              PRIZE POOL
            </div>
            <div className="mt-4 ml-[80px] sm:mt-2 text-white text-xl sm:text-xl font-bold">
              ₹ 1,00,000
            </div>
            <div className="text-white text-4xl sm:text-3xl mt-2 flex justify-center between-768-900:invisible">
              <GiLaurelsTrophy />
            </div>
          </div>

          {/* Location section */}
          <div className="shw col-span-1 row-span-2 animate-fadeInUp rounded-3xl bg-secondary p-2 z-20 h-[150px] w-[290px] mr-[40px] mt-[15px]">
            <div className="ml-[70px] font-bold text-[#f2be22] mt-[8px] text-4xl sm:text-5xl font-bebas between-768-900:text-3xl">
              LOCATION
            </div>
            <div className="font-bold mt-1 text-white text-md sm:text-l between-768-900:text-base ml-[6px] text-center">
              BK Birla Institute of <br/>Engineering & Technology,
              <br /> Pilani, Rajasthan
            </div>
          </div>

          {/* Registrations section */}
          <div className="col-span-2 md:col-span-2 min-w-1024:col-span-2 animate-fadeInDown row-span-3 md:row-span-2 rounded-3xl bg-secondary z-20 w-[450px] ml-[140px]">
            <div className="text-[#f2be22] mt-5 text-center text-5xl font-bold font-bebas">
              REGISTRATIONS
            </div>
            {/* <div className="font-bold md:hidden lg:block text-4xl my-2 sm:text-8xl lg:text-8xl lg:mt-2 text-white">
              {Math.floor(count)} +
            </div>
            <div className="font-bold hidden md:block lg:hidden text-6xl mt-2 sm:text-8xl text-white">
              {Math.floor(count)} +
            </div> */}
            <div className="font-bold text-5xl ml-[100px] mb-2 text-white min-w-1024:text-7xl">
              {Math.floor(count)} +
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="col-span-2 md:col-span-3 min-w-1024:col-span-3 row-span-3 md:row-span-2 animate-fadeInUp rounded-3xl bg-secondary z-20 w-[830px]">
            <div className="text-white flex flex-col justify-center items-center mt-1 mb-2">
              <div className="text-[#f2be22] mb-1 mt-2 text-center text-5xl font-bold font-bebas between-400-768:text-3xl">
                TIME LEFT
              </div>
              <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Days */}
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl between-768-900:p-3">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.days).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Days</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                {/* Hours */}
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl between-768-900:p-3">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Hours</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                {/* Minutes */}
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl between-768-900:p-3">
                  <p className="lg:text-3xl md:text-2xl sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </p>
                  <p className="text-xs sm:text-base">Minutes</p>
                </div>
                <div className="lg:text-6xl md:text-3xl sm:text-2xl text-4xl font-bold mb-2">
                  :
                </div>

                {/* Seconds */}
                <div className="text-center bg-background/30 p-2 sm:p-4 rounded-xl between-768-900:p-3">
                  <p className="lg:text-3xl md:text-2xl text-[#f2be22] sm:text-2xl text-4xl font-bold">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-[#f2be22] sm:text-base">Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
