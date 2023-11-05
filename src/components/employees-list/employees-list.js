import React from 'react';
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css"
function EmployeesList({data,onDelete,onPropToggle}) {
    const elements=data.map(item => {
        const {id,...itemprops}=item
         return <EmployeesListItem key={id}
                                   {...itemprops}
                                   onDelete={()=>onDelete(id)}
                                   onPropToggle={(e)=>onPropToggle(id,e.currentTarget.getAttribute('data-toggle'))}/>
    })
    return (
        <ul className="app-list list-group employees-list">
            {elements}
        </ul>
    );
}

export default EmployeesList;