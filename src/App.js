import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import Editor from "./pages/EditorPage";
const App = () => {
  return (
    <>
      <Route path="/" component={Editor} />
    </>
  );
};

export default App;

