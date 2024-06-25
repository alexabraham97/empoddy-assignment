import "./index.scss";
import EmployeeDetail from "./Employee-Detail";
import AttendanceHistory from "./Attentence-Detail";
import "bootstrap/dist/css/bootstrap.min.css";
function EmployeePortal() {
  return (
    <div className="container-fluid employee_portal_page">
      <EmployeeDetail />
      <AttendanceHistory />
    </div>
  );
}
export default EmployeePortal;
