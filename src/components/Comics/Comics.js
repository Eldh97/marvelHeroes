import React from 'react';
import './Comics.scss';
import ComicsItem from './ComicsItem/ComicsItem';
class Comics extends React.Component{
    render(){
        const renderedComics = this.props.comics.map((comic) =>{
            return <ComicsItem key ={comic.id} comic = {comic}/>
        });
        return(
           
            <div className="Comics">{renderedComics}</div>
        );
    }
}

export default Comics;