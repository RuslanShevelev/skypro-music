import { Navigate } from "react-router-dom";
import Layout from "../../pages/layout/Layout";

 function ProtectedRoute({  redirectPath = "skypro-music/login", isAllowed }) {
  // console.log(isAllowed);

  if (!isAllowed) {

    return  <Navigate to={redirectPath} replace />;
  }

  return  <Layout />;
}

export default ProtectedRoute