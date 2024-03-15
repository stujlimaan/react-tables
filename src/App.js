import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import ColumnOrder from './components/ColumnOrder';
import RowSelection from './components/RowSelection';
import RowSelect from "./components/RowSelect.js";

console.log(process.env.REACT_APP_ABC)
console.log(process.env)

function App() {
  
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable/> */}
      {/* <PaginationTable/> */}
      {/* <ColumnOrder/> */}
      {/* <RowSelection/> */}
      <RowSelect/>
    </div>
  );
}

export default App;
