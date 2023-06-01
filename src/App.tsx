import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import mainRouter from "./mainRouter/mainRouter";
function App() {

  const { userData } = useSelector((state: any) => state.user);

  console.log("userData123", userData);


 

  return (
    <div>
      <RouterProvider router={mainRouter} />
    </div>
  );
}

export default App;
