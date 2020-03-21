import React from "react";

const TransactionBox = ({ data }) => {
  return (
    <div>
      {data.map((x, index) => (
        <div
          style={{
            display: "flex",
            border: "1px solid #BDBDBD",
            padding: "8px 16px",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "6px"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 16 }}>{x.type}</div>
            <div style={{ fontSize: 14, color: "#BDBDBD" }}>
              {x.created_time}
            </div>
          </div>
          <div style={{ fontSize: 20 }}>{x.amount} ฿</div>
        </div>
      ))}
    </div>
  );
};
export default TransactionBox;