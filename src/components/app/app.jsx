import { Component } from "react";

import AppInfo from "/src/components/app-info/app-info";
import SearchPanel from "/src/components/search-panel/search-panel";
import AppFilter from "/src/components/app-filter/app-filter";
import EmployeesList from "/src/components/employees-list/employees-list";
import EmployeesAddForm from "/src/components/employees-add-form/employees-add-form";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Alex", salary: 80, increase: true, id: 1 },
                { name: "Alexoid", salary: 90, increase: true, id: 2 },
                { name: "Oleg", salary: 100, increase: false, id: 3 },
            ],
        };
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            // const newArr = [...before, ...after];
            // Иной вариант решения выше

            return {
                data: data.filter(item => item.id !== id)
            };
        })
    }

    render() {
        const { data } = this.state;
        return (
            <>
                <div className="app">
                    <AppInfo />

                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>

                    <EmployeesList data={data} onDelete={this.deleteItem} />
                    <EmployeesAddForm />
                </div>
            </>
        );
    }
}

export default App;
