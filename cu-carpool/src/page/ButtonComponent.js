import React from "react";
import {
  MyButton,
  MyWhiteButton,
  MyFullWidthButton,
  MyDisabledFullWidthButton
} from "../component/MyButton";
import { MyHeader, MyTitle } from "../component/MyTitle";
import Button from "@material-ui/core/Button";
import MyModal from '../component/MyModal';

class ButtonComponent extends React.Component {
  render() {
    return (
      <div>
        <MyHeader> Hi </MyHeader>
        <MyTitle> Hi </MyTitle>
        <MyButton>MyButton</MyButton>
        <div style={{ margin: "10px" }} />
        <MyButton disabled>MyButton</MyButton>
        <div style={{ margin: "10px" }} />
        <MyWhiteButton>MyButton</MyWhiteButton>
        <div style={{ margin: "10px" }} />
        <MyWhiteButton disabled>MyButton</MyWhiteButton>
        <div style={{ margin: "10px" }} />
        <MyFullWidthButton>MyFullWidthButton</MyFullWidthButton>
        <div style={{ margin: "10px" }} />
        <MyFullWidthButton disabled>MyFullWidthButton</MyFullWidthButton>
        <div style={{ margin: "10px" }} />
        <MyDisabledFullWidthButton disabled>
          MyDisabledFullWidthButton
        </MyDisabledFullWidthButton>
        <div style={{ margin: "10px" }} />
        <MyModal />
        <Button color="secondary">OK</Button>
        <Button style={{ color: "#BDBDBD" }}>Cancel</Button>
      </div>
    );
  }
}

export default ButtonComponent;
