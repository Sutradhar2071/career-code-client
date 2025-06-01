import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import Register from '../pages/register/Register';
import SignIn from '../pages/register/SignIn';
import JobDetails from '../pages/JobDetails';
import PrivateRoute from '../route/PrivateRoute';
import JobApply from '../pages/Home/JobApply';
import MyApplications from '../myApplications/MyApplications';
import AddJob from '../pages/Addjob/AddJob';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/register', element: <Register /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/jobs/:id', element: <JobDetails />, loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`) },
      { path: '/jobApply/:id', element: <PrivateRoute><JobApply></JobApply></PrivateRoute> },
      { path: '/myApplications', element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute> },
      { path: '/addJob', element: <PrivateRoute><AddJob></AddJob></PrivateRoute> },
      { path: '/myPostedJobs', element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute> },
    ],
  },
]);

export default router;
