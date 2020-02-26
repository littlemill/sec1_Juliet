import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { MyButton } from "./MyButton";
import { Link, Divider, Paper, Typography } from "@material-ui/core/";
import { MyTitle, MyLink } from "../component/MyTitle";
import MapData from "./MapData";
import moment from "moment";

const TripBoxHis = ({ history, data }) => {
  const {
    trip_id,
    start_datetime,
    status,
    plate_license,
    car_brand,
    price,
    departure_latitude,
    departure_longtitude,
    destination_latitude,
    destination_longtitude,
    owner_firstname,
    departure_detail,
    destination_detail,
    departure_province,
    destination_province
  } = data;
  const datetime = moment(start_datetime).format("MMMM Do YYYY h:mm a");

  return (
    <Paper
      square
      variant="outlined"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        borderColor: "#BDBDBD"
      }}
    >
      <Paper
        square
        elevation={0}
        style={{
          padding: 3,
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#C78899"
        }}
      >
        <MyTitle
          style={{
            fontSize: "20px",
            color: "#FFFFFF",
            marginLeft: "6px"
          }}
        >
          {datetime}
        </MyTitle>
      </Paper>

      <Paper
        square
        elevation={0}
        style={{
          padding: 12,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column"
        }}
      >
        <MyTitle
          style={{
            color: "#C78899",
            marginBottom: "8px"
          }}
        >
          Status: {status}
        </MyTitle>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column"
            }}
          >
            <div style={{ marginBottom: 6 }}>Driver: {owner_firstname}</div>
            <div style={{ marginBottom: 6 }}>Car brand: {car_brand}</div>
            <div style={{ marginBottom: 6 }}>
              License plate: {plate_license}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                fontSize: 20,
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: 6
              }}
            >
              {price} ฿
            </div>
            <MyLink
              style={{ marginBottom: 6 }}
              goto={"/trip-history/" + toString(trip_id) + "/member"}
            >
              see trip member
            </MyLink>
            <MyLink
              style={{ marginBottom: 6 }}
              goto={"/trip/" + toString(trip_id) + "/detail"}
            >
              see trip detail
            </MyLink>
          </div>
        </div>

        <div style={{ marginBottom: 6 }}>
          Pick up: {departure_detail}
          <div style={{ fontSize: 14, color: "#BDBDBD" }}>
            ({departure_province})
          </div>
        </div>
        <MapData
          fixed
          longitude={departure_longtitude}
          latitude={departure_latitude}
        />
        <div style={{ marginBottom: 6, marginTop: 6 }}>
          Destination: {destination_detail}
          <div style={{ fontSize: 14, color: "#BDBDBD" }}>
            ({destination_province})
          </div>
        </div>
        <MapData
          fixed
          longitude={destination_longtitude}
          latitude={destination_latitude}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "12px"
          }}
        >
          <MyButton>Cancel</MyButton>
          <MyButton>Payment</MyButton>
          <MyButton>Review</MyButton>
        </div>
      </Paper>
    </Paper>
  );
};

export default withRouter(TripBoxHis);