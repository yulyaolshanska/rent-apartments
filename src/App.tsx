import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import Loader from "./components/loader/Loader";

const SharedLayout = lazy(() => import("./components/layout/Layout"));
const Home = lazy(() => import("./pages/home/HomePage"));
const AddRentalAd = lazy(() => import("./pages/addRentalAd/AddentalAdPage"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/add" element={<AddRentalAd />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
