import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import SortingTable from './components/SortingTable';
import FilteringTable from './components/FilteringTable';
import PaginationTable from './components/PaginationTable';
import ColumnOrder from './components/ColumnOrder';
import RowSelection from './components/RowSelection';

function App() {
  return (
    <div className="App">
      {/* <BasicTable/> */}
      {/* <SortingTable/> */}
      {/* <FilteringTable/> */}
      {/* <PaginationTable/> */}
      {/* <ColumnOrder/> */}
      <RowSelection/>
    </div>
  );
}

export default App;
