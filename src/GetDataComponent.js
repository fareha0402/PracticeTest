import React from "react";
import JsonData from "./data.json";
function GetDataComponent() {
  const [list,setDataList] = React.useState([]);
  React.useEffect(()=>{
    setDataList(JsonData.data);
      // return () => console.log("unmounting")
  },[])
  const backgroundStyle= {
  backgroundImage:"url(img/avengers-infinity-war.jpg)",
  backgroundSize:"cover",
  backgroundPosition:"center",
  backgroundRepeat:"noRepeat",
  ':hover': {
    background: "black",
  },
  height:"768px"
}

  const tableStyle ={
      width:"100%",
      borderCollapse:"collapse",
      textAlign:"center",
      color: "#fff",
  }
  const thtdStyle ={
    border: "1px solid #fff",
    padding:"10px",
    background: "cadetblue",
    opacity: ".8",
    fontWeight: "700",
    color: "black",

}
const thStyle={
    backgroundColor: "#E6E6E6",
    color: "black",
}
  return (
      <div style={backgroundStyle}>
    <div style={{display:"flex",flexDirection:"column"}}>
      <h2 style={{color:"#fff",alignSelf:"center"}}>List of Avengers</h2>
      <table style={tableStyle} >
          <thead>
          <tr>
              <th style={thStyle} >Name</th>
              <th style={thStyle}>Alternative name</th>
              <th style={thStyle}>Team</th>
            </tr>
            </thead>
      {list.map((avenger, index) => (
          <tbody key={avenger.name}>
              <tr data-index={index}>  
                <td style={thtdStyle}>{avenger.name}</td> 
                <td style={thtdStyle} >{avenger.alt}</td> 
                <td style={thtdStyle}>{avenger.team}</td>  
                </tr>
                </tbody>  
            ))}  
            </table>
    </div>
    </div>
  );
}
export default GetDataComponent;
