import React, { Component } from 'react';
import './App.css';
import Buttons from './screens/Buttons';
import Typography from './screens/Typography';
import Inputs from './screens/Inputs';
import SampleForm from './screens/SampleForm';
import Breadcrumbs from './screens/Breadcrumbs';
import Cards from './screens/Cards';
import Layout from './layout/Layout';
import GlobalStyle from './globalstyle/GlobalStyle';
import Router from './router/Router';
import Table from './components/table/Table';
import TableCom from './screens/Table';
import NewAdmission from './screens/student/admission/NewAdmission';


function App() {
  return (
    <div className="App">
      <Router />
    </div>
    // <TableCom />
    // <NewAdmission />
  );
}
export default App;

// export default class App extends Component {
//   state = {
//     data: []
//   }

//   componentDidMount() {
//     fetch('http://localhost:4000/getAllAttendance')
//     .then(res => res.json())
//     .then(json => {
//       this.setState({ data: json})
//     })
//   }

//   render(){
//     console.log(this.state)

//     return(
//       <Table data={this.state.data} />
//     )
//   }
// }