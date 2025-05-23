import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const customerId = localStorage.getItem("customerId");
    if (!customerId) {
      navigate("/login");
    } else {
      navigate("/DocumentGeneration?storeCode=aspiresys-ai-xstore-docGen");
    }
  }, [location.pathname, navigate]);

  return null;
};

export default Home;
