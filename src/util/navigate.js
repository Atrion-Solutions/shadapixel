import { useNavigate } from "react-router-dom";

export const useNavigateAndScroll = () => {
  const navigate = useNavigate();

  const navigateAndScroll = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return navigateAndScroll;
};
