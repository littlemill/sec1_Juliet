import React, { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import { Box, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { MyDisabledFullWidthButton } from "../component/MyButton";
import { TextField } from "@material-ui/core";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import UploadIcon from "../component/UploadIcon";
import { MyHeader, MyTitle } from "../component/MyTitle";
import ConfirmModal from "../component/ConfirmModal";
import backend from "../ip";
const Profile = ({ user, updateUser }) => {
  const [change, setChange] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    phone_number: user.phone_number,
    email: user.email,
    // card_holder_name: user.card_holder_name,
    // card_number: user.card_number ? '************' + user.card_number.substr(12, 4) : null,
    // card_code: user.card_code ? '***' : null,
    // card_expiry_date: user.card_expiry_date,
    photo: user.photo,
  });

  const update = async () => {
    try {
      const { id } = user;
      const {
        firstname,
        lastname,
        phone_number,
        email,
        photo,
        // card_holder_name,
        // card_number,
        // card_code,
        // card_expiry_date
      } = form;
      const response = await axios.post(backend + "/user/", {
        id,
        firstname,
        lastname,
        phone_number,
        email,
        photo,
        // card_holder_name,
        // card_number,
        // card_code,
        // card_expiry_date
      });
      const { success, error, message } = response.data;
      if (success) {
        setChange(false);
        setError("");
        updateUser({
          firstname,
          lastname,
          phone_number,
          email,
          photo,
          // card_holder_name,
          // card_number,
          // card_code,
          // card_expiry_date
        });
      } else {
        setError(message);
      }
    } catch (e) {
      console.log(e);
      setError("Invalid data, please check your input again");
    }
  };
  return (
    <div>
      <MyHeader>Profile</MyHeader>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ marginBottom: "40px" }}
      >
        <div
          style={{ display: "flex", marginLeft: "18px", marginRight: "24px" }}
        >
          <img
            src={form.photo}
            height={100}
            width={100}
            style={{ borderRadius: "100%" }}
          />
          <UploadIcon
            setPhoto={(e) => {
              setForm({ ...form, photo: e });
              setChange(true);
            }}
          />
        </div>
        <MyTitle>{user.username}</MyTitle>
      </Grid>
      <Box
        style={{
          backgroundColor: "#F8F8F8",
          marginBottom: "40px",
          alignSelf: "center",
          padding: "8px 24px 24px 24px",
        }}
      >
        <MyTitle>Personal Info</MyTitle>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="First Name"
            value={form.firstname}
            onChange={(e) => {
              setForm({ ...form, firstname: e.target.value });
              setChange(!!e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Last Name"
            value={form.lastname}
            onChange={(e) => {
              setForm({ ...form, lastname: e.target.value });
              setChange(!!e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <MailIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Email"
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              setChange(!!e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PhoneIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Telephone No."
            value={form.phone_number}
            onChange={(e) => {
              setForm({ ...form, phone_number: e.target.value });
              setChange(!!e.target.value);
            }}
          />
        </div>
      </Box>
      {/* <Box
        style={{
          backgroundColor: "#F8F8F8",
          marginBottom: "40px",
          alignSelf: "center",
          padding: "8px 24px 24px 24px"
        }}
      >
        <MyTitle>Credit Card Info</MyTitle>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <PersonIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Cardholder Name"
            value={form.card_holder_name}
            onChange={e => {
              setForm({ ...form, card_holder_name: e.target.value });
              setChange(
                e.target.value && e.target.value !== user.card_holder_name
              );
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <CreditCardIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Card Number"
            value={form.card_number}
            onChange={e => {
              setForm({ ...form, card_number: e.target.value });
              setChange(e.target.value && e.target.value !== user.card_number);
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <CalendarTodayIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Expiry date(ex. 02/2020)"
            value={form.card_expiry_date}
            onChange={e => {
              setForm({ ...form, card_expiry_date: e.target.value });
              setChange(
                e.target.value && e.target.value !== user.card_expiry_date
              );
            }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <LockIcon />
          <TextField
            style={{ marginLeft: "8px" }}
            fullWidth
            placeholder="Security Code"
            value={form.card_code}
            onChange={e => {
              setForm({ ...form, card_code: e.target.value });
              setChange(e.target.value && e.target.value !== user.card_code);
            }}
          />
        </div>
      </Box> */}
      <Switch>
        {!change && (
          <MyDisabledFullWidthButton
            style={{ margin: "10px 0" }}
            disabled={true}
          >
            Save
          </MyDisabledFullWidthButton>
        )}
        {change && (
          <ConfirmModal
            onConfirm={update}
            btn="1"
            action="Save"
            message="Are you sure you want to save ?"
            confirm="OK"
            cancel="Cancel"
          />
        )}
      </Switch>
      {error !== "" && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
};
export default withRouter(Profile);
