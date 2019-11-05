import React from 'react';
import './ComicsItem.scss';

class ComicsItem extends React.Component{
    render(){
        const {thumbnail, name,description} = this.props.comic;
        const imgSrc = `${thumbnail.path}/portrait_incredible.${thumbnail.extension}`;
        return(
            <div className="ComicsItem">
            <h2 className="ComicsItem-title">{name}</h2>
                <img src={imgSrc} className="ComicsItem-photo"/>
                <p className="ComicsItem-description">{description}</p>
            </div>
        );
    }
}

export default ComicsItem;