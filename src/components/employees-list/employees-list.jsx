import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

class EmployeesList extends Component {
    render() {
        const { data, onDelete, onToggleProp } = this.props;
        const elements = data.map((item) => {
            const { id, ...itemProps } = item;
            return (
                <EmployeesListItem
                    key={id}
                    {...itemProps}
                    // {...item} вариант кода JS строчкой выше
                    onDelete={() => onDelete(id)}
                    onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                    // получаем наш дата атрибут data-toggle
                />
            );
        });
        return <ul className="app-list list-group">{elements}</ul>;
    }
}

export default EmployeesList;
