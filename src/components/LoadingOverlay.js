import React from "react";
import "./LoadingOverlay.css"

export default function LoadingOverlay(props){
    return (<>
        { props.Loading ? (<>
            <div className="screen">
                <div className="load">
                    
                </div>
            </div>
        </>):('')}
    </>)
}

