import Home from "./Home";
import Explore from "./Explore";
import Activity from "./Activity";
import NoResult from "./NoResult";
import Contact from "./Contact";


const routes = [
  { path: '/', component: <Home/>},
  { path: '/explore', component: <Explore />},
  { path: '/activity', component: <Activity />},
  { path: '/no-result', component: <NoResult />},
  { path: '/contact', component: <Contact />},
]

export default routes;