import React from "react"
export default function InputComponent ({type, placeholder, value, readonly}){
    return(
        <div 
            className="form-fields input-primary" 
            style={{
                flexDirection: type==="textarea" ? "column" : "row",
                alignItems: type==="textarea" ? "unset" : "center",
            }}>
            <div>{placeholder}</div>
            <div>
                {
                    type==="select" ? 
                        <select readOnly={readonly} className="input-inner-section">
                        {value.map((item, index)=>(
                            <option key={index}>{item}</option> 
                        ))}
                        </select>
                    : 
                        type==="textarea" ? 
                            <textarea readOnly={readonly} className="input-inner-section textarea"></textarea>
                            :
                            <input readOnly={readonly} value={value} type={type} className="input-inner-section"/> 
                }
            </div>
        </div>
         

    );
}