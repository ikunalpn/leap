import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes, Route
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import BNS from "./pages/BNS.jsx"
import About from "./pages/About.jsx";
import BNSInfo from "./pages/BNSInfo.jsx";
import Query from "./pages/Query.jsx";
// import DocumentSumm from "./pages/DocumentSumm.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="bns" element={<BNS />} />
      <Route path="about" element={<About />} />
      <Route path="bns-info" element={<BNSInfo />} />
      <Route path="query" element={<Query />} />
      {/* <Route path="document-summ" element={<DocumentSumm />} /> */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
