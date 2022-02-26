import { useNavigate } from "react-router-dom";


export const CustomizeNavigate = (url: string) =>{
  const navigate = useNavigate();
  return navigate(url);
} 