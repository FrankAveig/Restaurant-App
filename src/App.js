import RestaurantRouter from './routers/RestaurantRouter'
import React, { useState } from "react";
import { AuthProvider } from "./context/authContext";

const App = () => {


  return (
    <>
    <AuthProvider>
     <RestaurantRouter/>
    </AuthProvider>
    </>
  )
}

export default App