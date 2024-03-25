import AppInfo from "/src/components/app-info/app-info";
import SearchPanel from "/src/components/search-panel/search-panel";
import AppFilter from "/src/components/app-filter/app-filter";
import EmployeesList from "/src/components/employees-list/employees-list";
import EmployeesAddForm from "/src/components/employees-add-form/employees-add-form";
import "./app.css";


function App() {
    return (
        <>
            <div className="app">
                <AppInfo />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployeesList />
                <EmployeesAddForm />
            </div>
        </>
    );
}

export default App;