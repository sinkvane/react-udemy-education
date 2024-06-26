import { Component } from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends Component {
    state = {
        name: "",
        salary: "",
    };

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 2 || !this.state.salary) return;
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: "",
            salary: "",
        });
    };

    render() {
        const { name, salary } = this.state;
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit} className="add-form d-flex">
                    <input
                        onChange={this.onValueChange}
                        name="name"
                        value={name}
                        // Благодаря данному атрибуту мы сделали управляемый компонент(элемент), благодаря которому State синхронизирован с UI
                        type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                    />
                    <input onChange={this.onValueChange} name="salary" value={salary} type="number" className="form-control new-post-label" placeholder="З/П в $?" />

                    <button type="submit" className="btn btn-outline-light">
                        Добавить
                    </button>
                </form>
            </div>
        );
    }
}

export default EmployeesAddForm;
