import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi location thay đổi
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
