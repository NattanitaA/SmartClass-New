import React, { useState, useEffect } from "react"
// import ReactTable from "react-table-6"
// import "react-table-6/react-table.css"
// import "./App"
import axios from "axios"
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button';
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import SaveAlt from "@material-ui/icons/SaveAlt";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Add from "@material-ui/icons/Add";
import Check from "@material-ui/icons/Check";
import FilterList from "@material-ui/icons/FilterList";
import Remove from "@material-ui/icons/Remove";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";

const Table = () => {
  // let columns = []
  const [data, setData] = useState();
  const columns = [
    { title: "ID", field: "row_id" },
    { title: "Name", field: "name" },
    { title: "Student_ID", field: "student_id" },
    { title: "Email", field: "email" },
    { title: "Present", field: "present" },
    { title: "Late", field: 'late' },
    { title: "Absence", field: "absence" },
    { title: "Day", field: "day" },
    
  ]
  
  const fetchData = () => {
    axios.get('http://3.1.195.21:4406/getAllIOT').then(res => setData(res.data)).catch(err => console.log('err : ', err))
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  // const [color,setColor] = useState('primary');
  // const [btndisabled,SetBtnDisabled] = useState(false);
  // customMe(() => {
  //   SetBtnDisabled(true);
  // })

  
//   let columns = []
//   let headers = Object.keys(data[0]);
//   headers.forEach(header => {
//     columns.push({
//       Header: header,
//       accessor: header
//     })
//   });

// renderTableHeader = () => {
//     return Object.keys(data[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
//   }

//   if(data){
//     data.map((obj,index) => {
//       console.log('obj :',index , obj)
//       // console.log(Object.keys(obj))
//       columns = Object.keys(obj)
//     })
//   }
  
//   console.log('data:' , data)
//   console.log('col : ',columns)


  // console.log('all obj : ',Object.keys(data))
  // let firstRow = data[0]
  // for (let key in firstRow) {
  //   columns.push({ Header: key, accessor: key })
  // }


  return (
    // <>
    // <ReactTable
    //   className="-striped -highlight"
    //   data={data}
    //   columns={columns}
    //   defaultPageSize={100}
    // />
    // </>
    <div className="Table">
        {/* <h1 align="center">Choose Course</h1>
        < Button 
        color = 'orange'
        variant ='contained'
        size = 'large'
        disabled = {btnDisabled}
        onClick={()=>customMe()}
        ></Button> */}
        {/* <h4 align='center'>Material Table</h4> */}
        <MaterialTable
        icons={{ 
            Check: Check,
            DetailPanel: ChevronRight,
            Delete: DeleteOutline,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ThirdStateCheck: Remove,
            Add: Add,
            SortArrow: ArrowDownward,
            Clear: Clear,
            Edit: Edit,
            ViewColumn: ViewColumn
        }}
        title="Internet Of Things Attendance Data"
        data={data}
        columns={columns}
        options={{
            headerStyle: {
                backgroundColor: 'lightgray',
                color: 'black'
            },
            search: true,
            exportButton: true,
            filtering: true
          }}
        />
    </div>
  )
}

export default Table