import React from 'react';
import './Search.scss';
import IcoMoon from 'react-icomoon';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:''};
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch (evt){
        evt.preventDefault();
        this.props.search(this.state.term);

    }
    render(){
        return(
            <div className="Search">
              <form className="Search__form" onSubmit={(evt) => this.handleSearch(evt)}>          
                <input type="text"
                value={this.state.term} 
                onChange={(evt) => this.setState({term:evt.target.value})}
                className="Search__field" placeholder="search for comic Characters"
                />
                <button className="Search__btn" >
                    <IcoMoon icon="search"/>
                </button>
            </form>  
            </div>
        );
    }
}

export default Search;