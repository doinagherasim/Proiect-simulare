import React from "react";


function ReactProps (props) {
    return (<div>
<h5>{props.name}</h5>
<h2>{props.title}</h2>
<ul>
    {Array.isArray(props.items) && 
        props.items.map ((element, index) => 
        <li key={index}>{element}</li>
        )
    }
    </ul>
</div>
    )
};

export default ReactProps;