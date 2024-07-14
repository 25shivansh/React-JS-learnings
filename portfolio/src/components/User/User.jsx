import React from "react";
import { useParams } from "react-router-dom";
function user(){
    const {userid}=useParams()
    return(
        <div>USER: {userid}</div>
    )
}
export default user