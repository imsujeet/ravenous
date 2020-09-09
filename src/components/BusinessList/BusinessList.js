import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        if(this.props.businesses.length > 0){
            return (
            
                <div className="BusinessList">
                    
                    {this.props.businesses.map(business => {
                        return <Business business = {business} key = {business.id}/>;
                    })}
                    
                </div>
            )

        }else {
            return (
            <div className="BusinessList">
                <h2>Search something!!</h2>
                <br />
                <p>Try setting the serach location to any US city.</p>
            </div>);
        }
        
    }
}

export default BusinessList;