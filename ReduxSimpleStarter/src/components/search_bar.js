
// youtube 
import React, {Component} from 'react'; // tuong duong const Component = React.Component;
//15. Class-based component
// should start with functional Component, 
// then if need add funcionality then refactor it to class component
class SearchBar extends Component {
//17. Introducing State
// state is a plain JS object use to record and react to events
// when state change, componet re-render and force all its chilrend re-render as well
constructor(props){
    //
    super(props);
    
    //
    this.state = { term: '' };
}
  // 16. handling user events  
    render() {
        return (
        <div className="search-bar">
        <input 
        //controlled components
        value={this.state.term}
        onChange=
        {event => this.onInputChange(event.target.value)} />
        
        // 18. More on state: when state change, re-render...
        // this.state.term = event.target.value - bad, never do that
        {/* this.setState({ term: event.target.value})} /> */}
        {/* just use to reference, DON'T: this.state.term = '4' */}
        {/* Value of the input: {this.state.term} */}
        
        </div>
    );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    // //on[name of Input/Element][name of event]
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
    // then onChange={this.onInputChange} eual to onChange = {(event) => console.log(event.target.value)}

};

export default SearchBar;