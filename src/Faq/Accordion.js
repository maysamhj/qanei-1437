import React from 'react';
import {accordion1} from "./../SVGIcons"

export default function Accordion ({open, header, body}){
    const myAccordion = React.createRef();
    
    const [accordionHeight, setAccordionHeight] = React.useState();

    React.useEffect(()=>{
        const defaultHeight = open ? myAccordion.current.scrollHeight : 40;
        setAccordionHeight(defaultHeight);
    }, []);

    const AcordionHeightHandler = ()=> {
        accordionHeight === 40 ? setAccordionHeight(myAccordion.current.scrollHeight) : setAccordionHeight(40);
    }
    return (
            <div ref={myAccordion} className="accordion" style={{height: accordionHeight}}>
                <div onClick={AcordionHeightHandler}>
                    <button classNّame={(accordionHeight > 40 ? "button-rotate" : "")}>{accordion1} </button>
                    <p>{header}</p>
                </div>
                <p>{body}</p>
               
                
            </div>
 );
}