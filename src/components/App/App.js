import './App.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import  "../search-panel/search-panel.css";
import EmployeesList from "../employees-list/employees-list";
import AppFilter from "../app-filter/app-filter";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state={
            data:[{name:'Sania A.',salary:800,like:false,increase:false,id:1},
                {name:'Maria D.',salary:1800,like:false,increase:false,id:2},
                {name:'Egor F.',salary:8000,like:false,increase:false,id:3}],
            term:''
        }
       this.maxId = 4
    }
    onDelete=(id)=>{
        this.setState(({data})=>
            ({
                data:data.filter(item=>item.id !== id)
            }))
    }
    onInput=(name,salary)=>{
        const newItem = {
            name,
            salary,
            id:this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [ ...data, newItem]
            return {
                data:newArr
            }
        })
    }
    onPropToggle=(id,prop)=>{
        this.setState(({data})=>({
                data:data.map(item => {
                    if(id===item.id){
                        return {...item,[prop]:!item[prop]}
                    }
                    return item
                })
        }))
    }
    onSearch = (items,term)=>{
        if(term.length===0){
            return items
        }

        return  items.filter(item => {
           return  item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch=(term)=>{
        this.setState({term})
}

    render() { const  users=this.state.data.length
                const  increases=this.state.data.filter(item=>item.increase).length
                const visibleData=this.onSearch(this.state.data,this.state.term)

        return (
            <div className="App">
                <AppInfo users={users} increases={increases}/>
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter/>
                </div>
                <EmployeesList data={visibleData} onDelete={this.onDelete} onPropToggle={this.onPropToggle}/>
                <EmployeesAddForm onInput={this.onInput}/>
            </div>
        );
    }
    }



export default App;
