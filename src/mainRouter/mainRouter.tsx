import { createBrowserRouter } from "react-router-dom";
import MainComponent from "../MainComponent/MainComponent";
import Dashboard from "../components/Admin/Dashboard/Dashboard";
import DoctorList from "../components/Admin/DoctorsList/DoctorsList";
import PatientList from "../components/Admin/PatientsList/PatinetsList";
import Login from "../components/Auth/Login";

 const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: '/admin',
      element: <MainComponent />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
        },
        {
          path: "/admin/doctor",
          element: <DoctorList />,
        },
        {
          path: "/admin/patient",
          element: <PatientList />,
        },
      ],
    }
  ]);

  export default mainRouter;