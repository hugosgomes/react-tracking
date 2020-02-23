import React, { Fragment } from 'react';

function TrackingEvents({ events }){
    console.log(events);
    if(!events || events.length === 0) return null;
    return(
        <Fragment>
            <h1 className="list-group">Tracking Events</h1>
            <ul>
                {events.map(item => {
                    return (<li key={item.descricao} className="list-group-item">
                                <span>{item.data} {item.hora}</span>
                                <span>{item.descricao}</span>
                                <span>{item.cidade}/{item.uf}</span>
                            </li>)
                })}
            </ul>
        </Fragment>
    );
}

export default TrackingEvents;