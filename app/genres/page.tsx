import React from "react";

export default function GenresPage() {
  return (
    //example 4 -
    <div className="flex flex-col min-h-screen justify-center items-center p-6 gap-6">
      <h1 className="text-primary font-bold text-4xl">
        This is my first h1 heading
      </h1>

      <div className="flex gap-6">
        <div className="bg-primary w-40 h-30 text-center text-xs">
          {" "}
          Background Primary color
        </div>

        <div className="border-primary w-40 h-30 border-4">Border Primary</div>

        <div className="outline-primary outline-4 w-40 h-30">
          {" "}
          Outline Primary
        </div>

        <div className="bg-secondary w-40 h-30">
          {" "}
          back ground secondary colour
        </div>

<div className="w-40 h-40 relative border border-primary text-center">
<h1 className="text-primary font-bold text-lg "> RGBA </h1>
<div className="bg-secondary absolute w-20 h-20 top-0"></div>

</div>



      </div>
    </div>
  );

  return (
    //example 3 - grid layout
    <div className="flex min-h-screen justify-center items-center bg-amber-200 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="w-30 h-40 rounded bg-red-500"> div 1</div>
        <div className="w-30 h-40 rounded bg-green-500"> div 2</div>
        <div className="w-30 h-40 rounded bg-blue-500"> div 3</div>
        <div className="w-30 h-40 rounded bg-purple-500"> div 4</div>
        <div className="w-30 h-40 rounded bg-yellow-500"> div 5</div>
        <div className="w-30 h-40 rounded bg-orange-500"> div 6</div>
        <div className="w-30 h-40 rounded bg-cyan-500"> div 7</div>
        <div className="w-30 h-40 rounded bg-pink-500"> div 8</div>
      </div>
    </div>
  );

  return (
    //examople 01 - flex box
    <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen   ">
      <div className="h-20 w-30 p-6 bg-green-200 rounded text-center ">
        Div 1
      </div>
      <div className="h-20 w-40 bg-blue-500 p-6 rounded text-center">Div 2</div>
      <div className="h-20 w-40 bg-red-500 p-6 rounded text-center">Div 3</div>
      <div className="h-20 w-40 bg- bg-purple-500 p-6 rounded text-center">
        Div 4
      </div>
    </div>
  );

  return (
    //example 02 flex-1
    <div className="flex flex-col md:flex-row bg-purple-300 min-h-screen   ">
      <div className="flex-1  bg-green-400 p-6 rounded text-center">
        {" "}
        div 1{" "}
      </div>
      <div className="flex-3  bg-blue-400 p-6 rounded text-center"> div 2 </div>
      <div className="flex-1  bg-red-400 p-6 rounded text-center"> div 3</div>
      <div className="flex-2  bg-orange-400 p-6 rounded text-center">
        {" "}
        div 4{" "}
      </div>
    </div>
  );
}
