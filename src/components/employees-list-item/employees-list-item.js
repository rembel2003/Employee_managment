import React, {Component} from 'react';
import "./employees-list-item.css"
const EmployeesListItem =(props)=>{
        const {name,salary,like,increase,onDelete,onPropToggle}=props
        let classNamesIncrese='list-group-item d-flex justify-content-between '
        if(like){
            classNamesIncrese +=' like'
        }
        if(increase){
            classNamesIncrese +=' increase'
        }

        return (
            <li className={classNamesIncrese}>
                <span className='list-group-item-label'
                onClick={onPropToggle}
                      data-toggle="like">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={`${salary}$`}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                            className="btn-cookie btn-sm"
                            data-toggle="increase"
                    onClick={onPropToggle}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm"
                    onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i  className="fas fa-star"></i>
                </div>
            </li>
        )
    }

export default EmployeesListItem;