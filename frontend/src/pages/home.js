import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:flex   mx-auto md:mt-20 mb-10 justify-between items-center">
        <div className="m-8 flex flex-col text-center justify-center items-center flex-grow-0 md:w-2/4 ">
          <h1 className="md:text-5xl text-4xl  p-4 text-white font-raleway">
            Welcome to the official site of Poikainpelit
          </h1>
          <p className="text-white md:text-2xl text-center font-raleway ">
            Poikainpelit is not only a golf-competition, it's where the
            gladiators come to see if they are up to the task in winning the
            coveted Poikainpelit tropy. Many have failed and each year there can
            be only one champion whose name will be carved to the plaque among
            heroes of the past. On this site you can view content from the past
            competitions, check important statistics and randomize the groups
            for the upcoming battle!
          </p>
        </div>
        <div className="m-8 flex-grow-0 md:w-2/4">
          <div className="flex justify-center items-center">
            <img
              src="/home.jpg"
              alt=""
              className="rounded-lg object cover md:max-h-60% "
            />
          </div>
        </div>
      </div>
      <div className=" md:w-[80%] w-[90%] mb-5"></div>
    </div>
  );
}

export default Home;
