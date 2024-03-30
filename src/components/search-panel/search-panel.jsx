import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
    state = {
        term: "",
    };

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    };

    render() {
        const { onUpdateSearch } = this.props;
        return <input type="text" value={this.state.term} onChange={this.onUpdateSearch} className="form-control search-input" placeholder="Найти сотрудника" />;
    }
}

export default SearchPanel;
