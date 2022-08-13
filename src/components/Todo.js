import React from 'react'
import TodoItem from './Todoitem'



class Todo extends React.Component{
    state={
        elements:[
            {id:'3435345',isCompleted:false,title:'Make dinner'},
            {id:'343hgf45',isCompleted:false,title:'Pay bills'}
        ],
        inputValue:''
    }

    markCompleted(id){
        const index=this.state.elements.findIndex(x => x.id ===id)
        const newElements=this.state.elements
        newElements[index].isCompleted=true
        
        this.setState({elements: newElements})
    }
    
    addItem() {
        //dodawanie
        const item={
            id:Math.random(),
            title:this.state.inputValue
        }
        const newElements=[item, ...this.state.elements]
        this.setState({elements:newElements})
        
    }

    inputHandler(event){
        const newValue=event.target.value
        this.setState({inputValue:newValue})
    }

    render() {
        const elements=this.state.elements.map(e=> {
            return <TodoItem element={e} markClicked ={this.markCompleted.bind(this)}/>
        })


        return (
            <div>
              <p>Todo app</p> 
              <input typu="text" value= {this.state.inputValue} onChange={this.inputHandler.bind.this}/>
              <button onClick={this.addItem.bind(this)}>Add to the list</button> 
             <p>{elements}</p> 
            </div>
        )
    }
}
export default Todo;