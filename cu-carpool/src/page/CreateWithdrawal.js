import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { MyHeaderWithArrow } from "../component/MyTitle";
import { TextField } from "@material-ui/core";
import { MyFullWidthButton } from "../component/MyButton";


const CreateWithdrawal = () => {
    const [form, setForm] = useState({
        account_number: "",
        account_name: "",
        bank_name: "",
        amount: ""
      });
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState({
        card_number: false,
        card_holder_name: false,
        card_expiry_date: false,
        card_code: false
      });
    return (
        <div style ={{display:"flex",flexDirection: "column" ,height: "80vh",justifyContent: "space-between"}}>
          <form autoComplete="off">
          <div style ={{display:"flex",flexDirection: "column" }}>
          <MyHeaderWithArrow goto="/wallet" >Withdrawal Request</MyHeaderWithArrow>
              <TextField
                fullWidth
                required
                label="Bank Account Number"
                value={form.account_number}
                error={error.account_number}
                onChange={e => {
                  setForm({ ...form, bank_account_number: e.target.value });
                  setErrorMessage('')
                }}
              />
              <TextField
                fullWidth
                required
                label="Account Holder Name"
                style={{ marginTop: 15 }}
                value={form.account_name}
                error={error.account_name}
                onChange={e => {
                  setForm({ ...form, account_name: e.target.value });
                  setErrorMessage('')
                }}
              />
                <TextField
                fullWidth
                required
                label="Bank Name"
                style={{ marginTop: 15 }}
                value={form.bank_name}
                error={error.bank_name}
                onChange={e => {
                  setForm({ ...form, bank_name: e.target.value });
                  setErrorMessage('')
                }}
              />
              <TextField
                fullWidth
                required
                label="Amount"
                style={{ marginTop: 15 }}
                value={form.amount}
                error={error.amount}
                onChange={e => {
                  setForm({ ...form, account_name: e.target.value });
                  setErrorMessage('')
                }}
              />
              {error !== "" &&
                <div style={{ marginTop: 20, color: "red" }}>{errorMessage}</div>
              }
            </div>
            </form>
          <div >
            <MyFullWidthButton>Request</MyFullWidthButton>
          </div>
        </div>
      )
}
export default withRouter(CreateWithdrawal);
