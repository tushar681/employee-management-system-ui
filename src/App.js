import logo from './logo.svg';
import './App.css';
import EmployeeDepartmentView from './employeeDepartmentView';
import EmployeeComponent from './EmployeeComponent';
import DepartmentComponent from './DepartmentComponent';

function App() {
  return (
    <div className="App">
      <EmployeeComponent/>
      <DepartmentComponent/>
    </div>
  );
}

export default App;
