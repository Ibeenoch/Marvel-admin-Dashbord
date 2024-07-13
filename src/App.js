import { AreaChart, Area, XAxis, YAxis, CartesianAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },

 
]);

const App = () => {
  return (
    <div>
       <RouterProvider router={router} />

    </div>
  )
}

export default App
