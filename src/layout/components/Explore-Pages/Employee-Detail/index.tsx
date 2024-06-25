import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Avatar, Card, Icon } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
function EmployeeDetail() {
  return (
    <div className="container-fluid employee-detail-card mb-4">
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
            Detail Employee
          </h1>
        </div>
        <div className="col-4 button_cols">
          <select className="form-control">
            <option>This Year</option>
            <option>Last Year</option>
          </select>
          <div>
            <button className="btn_download">
              <SystemUpdateAltIcon /> Download Info
            </button>
          </div>
        </div>
      </div>
      <div className="row card-body">
        <div className="col-2 d-flex align-items-center mb-4">
          <Avatar
            src="profile-pic-url"
            className="rounded-circle mr-3"
            alt="N"
            style={{ width: "92px", height: "92px" }}
          />
        </div>
        <div className="col-8">
          <div className="row dg_name">
            <h1>Natashia Khaleira</h1>
          </div>
          <div className="d-flex justify-content-between">
            <div className="dg_details">
              <h1 className="details_head">Role</h1>
              <p className="details_para">Head of UX Design</p>
            </div>
            <div className="dg_details">
              <h1 className="details_head">Phone Number</h1>
              <p className="details_para">(+62) 812 3456-7890</p>
            </div>
            <div className="dg_details">
              <h1 className="details_head">Email Adress</h1>
              <p className="details_para">natasiakhaleira@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-3 card_cols">
          <div className="row checkin_card card_css">
            <div className="col-3">
              <div className="sytm_img">
                <SystemUpdateAltIcon />
              </div>
            </div>
            <div className="col-9">
              <h1>309</h1>

              <p>Total Attendance</p>
            </div>
          </div>
        </div>

        <div className="col-3 card_cols">
          <div className="row checkin_card card_css">
            <div className="col-3">
              <div className="sytm_img">
                <SystemUpdateAltIcon />
              </div>
            </div>
            <div className="col-9">
              <h1>08:46</h1>
              <p>Avg Check In Time</p>
            </div>
          </div>
        </div>
        <div className="col-3 card_cols">
          <div className="row checkin_card card_css">
            <div className="col-3">
              <div className="sytm_img">
                <SystemUpdateAltIcon />
              </div>
            </div>
            <div className="col-9 ">
              <h1>17:04</h1>
              <p>Avg Check Out Time </p>
            </div>
          </div>
        </div>
        <div className="col-3 card_cols">
          <div className="row checkin_card card_css">
            <div className="col-3">
              <div className="sytm_img">
                <SystemUpdateAltIcon />
              </div>
            </div>
            <div className="col-9">
              <h1>Role Model</h1>
              <p>Employee Predicate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetail;
