import Navbar from "@/components/custom/Navbar";
import Header from "@/components/header";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const AppLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const customerId = localStorage.getItem("customerId");
    if (!customerId) {
      navigate("/login");
    }
  }, [window.location.pathname]);
  return (
    <>
      <Header />
      <main className="bg-[#FAFAFA] h-full flex">
        <Navbar />
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default AppLayout;
