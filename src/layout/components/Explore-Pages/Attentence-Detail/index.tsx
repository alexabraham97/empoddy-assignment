import "./index.scss";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Pagination, Stack } from "@mui/material";
function AttendanceHistory() {
  const attendanceData = [
    {
      date: "March 08, 2023",
      checkIn: "08:53",
      checkOut: "17:15",
      status: "On Time",
    },
    {
      date: "March 07, 2023",
      checkIn: "08:27",
      checkOut: "17:09",
      status: "Late",
    },
    { date: "March 06, 2023", checkIn: "-", checkOut: "-", status: "Absent" },
    {
      date: "March 05, 2023",
      checkIn: "08:55",
      checkOut: "17:10",
      status: "On Time",
    },
    {
      date: "March 04, 2023",
      checkIn: "08:58",
      checkOut: "17:06",
      status: "On Time",
    },
    {
      date: "March 03, 2023",
      checkIn: "08:40",
      checkOut: "17:02",
      status: "Late",
    },
  ];

  return (
    <div className="container-fluid attendance-history-card">
      <div className="row navbar">
        <div className="col-8 detail_employee">
          <h1>
            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "30px",
                backgroundColor: "#59fed5",
                borderRadius: "15px",
                flexShrink: 0,
              }}
            ></span>{" "}
            Attendance History
          </h1>
        </div>
        <div className="col-4 button_cols_attentence">
          <div>
            <button className="btn btn_light">
              <GridViewIcon />
            </button>
            <button className="btn btn_light">
              <ViewHeadlineIcon />
            </button>
            <button className="btn btn_light">
              <SwapVertIcon />
              Sort
            </button>
            <button className="btn btn_light">
              <FilterAltIcon />
              Filter
            </button>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingTop: "2%" }}>
        {attendanceData.map((item, index) => (
          <div
            className="col-4 attendance_list"
            style={{
              paddingLeft: "2%",
              paddingRight: "2%",
              paddingBottom: "1%",
            }}
          >
            <div key={index} className="row attentence_card_col">
              <div className="row attendance_item">
                <div className="col-9">
                  <p className="attentence_date">
                    <AccessTimeIcon style={{ marginRight: "8px" }} />

                    {item.date}
                  </p>
                </div>
                <div className="col-3 attentence_status">
                  <h1
                    className={`badge ${
                      item.status === "On Time"
                        ? "badge-success"
                        : item.status === "Late"
                        ? "badge-warning"
                        : "badge-danger"
                    }`}
                  >
                    {item.status}
                  </h1>
                </div>
              </div>
              <div className="row">
                <div className="col-6 check_in_out">
                  <h1>Check In Time</h1>
                  <p>{item.checkIn}</p>
                </div>
                <div className="col-6 check_in_out">
                  <h1>Check Out Time</h1>
                  <p>{item.checkOut}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row" style={{ paddingTop: "2%" }}>
        <div className="col-3"></div>
        <div className="col-6 pagination_row d-flex justify-content-center align-items-center">
          <Stack>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              className="page-link "
            />
          </Stack>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default AttendanceHistory;
