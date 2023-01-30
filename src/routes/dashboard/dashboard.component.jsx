import { Outlet } from "react-router-dom";
import Navigation from "../navigation/navigation.component";

const DashboardLayout = () => (
  <>
    <Navigation />
    <main>
      <Outlet />
    </main>
  </>
);

export default DashboardLayout;
