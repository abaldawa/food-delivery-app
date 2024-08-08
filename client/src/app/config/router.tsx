/**
 * @author Abhijit Baldawa
 */

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Welcome } from "../modules/user/containers/welcome/welcome";
import { DEFAULT_USER_ID } from "./constants";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="welcome">
        <Route path=":userId" element={<Welcome />} />
      </Route>
      <Route
        path="*"
        element={<Navigate replace to={`/welcome/${DEFAULT_USER_ID}`} />}
      />
    </Routes>
  </BrowserRouter>
);

export { Router };
