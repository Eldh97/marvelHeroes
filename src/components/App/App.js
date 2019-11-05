import React from 'react';
import './App.scss';
import marvel from '../../apis/marvel';
import Search from '../SearchBar/Search';
import Comics from '../Comics/Comics';
import IcoMoon from 'react-icomoon';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comics : [],
            loader:null
        }      
        this.search = this.search.bind(this);
    }
    componentDidMount(){

    }
    async search(term){
        const key = '7c6df78a920c00a4a1ff0479896184be';
        const response = await marvel.get(`/characters?nameStartsWith=${term}&apikey=${key}`);

        this.setState({comics: response.data.data.results});
    }
    render(){
        return(
            <div className="App">
                <Search search = {this.search}/>
                <Comics comics = {this.state.comics}/>
            </div>
        );
    }              

}


export default App;