import React from "react";
import { MyHeader } from "../component/MyTitle";
import TripBox from "../component/TripBox";
import EmptyBox from "../component/EmptyBox";
import axios from "axios";

class MyTrip extends React.Component {
  // constructor() {
  //   super(this.props);
  // }
  state = { list: [] };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    const response = await axios.get(
      "http://localhost:4000/driver/mytrip?userId=" + this.props.user.id
    );
    const { success, trip } = response.data;
    console.log(response.data);
    if (success) {
      this.setState({ list: trip });
    }
  };

  render() {
    return (
      <div>
        <MyHeader style={{ marginBottom: "30px" }}>My Trip</MyHeader>
        <EmptyBox data={this.state.list} />
        {this.state.list.map((trip, index) => (
          <TripBox key={index} data={trip} />
        ))}
      </div>
    );
  }
}

export default MyTrip;
