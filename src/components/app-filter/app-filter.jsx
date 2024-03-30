import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
    render() {
        const { filter, onFilterSelect } = this.props;

        const buttonsData = [
            { name: "all", label: "Все сотрудники" },
            { name: "rise", label: "На повышение" },
            { name: "moreThan1000", label: "З/П больше 1000$" },
        ];

        const buttons = buttonsData.map(({ name, label }) => {
            const active = this.filter === name;
            const clazz = active ? "btn-light" : "btn-outline-light";

            return (
                <button type="button" onClick={() => onFilterSelect(name)} className={`btn + ${clazz}`} key={name}>
                    {label}
                </button>
            );
        });

        return <div className="btn-group">{buttons}</div>;
    }
}

export default AppFilter;
