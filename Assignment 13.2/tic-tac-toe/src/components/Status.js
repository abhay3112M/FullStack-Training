import React from 'react';

const Status=(props)=>{
    return (
            <div className="status">
                {props.message}{props.next}
            </div>
        );
            
}


export default Status;