import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Loader from "../loader/Loader";

const SharedLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Header />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default SharedLayout;
