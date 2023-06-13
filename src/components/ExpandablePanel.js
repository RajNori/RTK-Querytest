import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";


function ExpandablePanel({ header, children }) {
 const [expanded, setExpanded] = useState(false);
 const handleClick = () => setExpanded(!expanded);
 return(<div className='m-2 border rounded font-light bg-slate-100 text-base'>
        <div className='flex p-2 justify-between items-center cursor-pointer'>
            <div className='flex flex-row jsutify-between'>{header}</div>
            <div onClick={handleClick}>
            {expanded ? <GoChevronDown /> : <GoChevronLeft />}
            </div>
        </div>
        {expanded && <div className="p-2 border-t">{children}</div>}
    </div>)
}
export default ExpandablePanel;
