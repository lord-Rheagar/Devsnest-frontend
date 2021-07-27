
import { useState } from "react";
import "./styles.css";
   

  

 function AddItem ({addItem}) {
  const [name, setName] = useState("");
  const [calorie, setCalorie] = useState("");
  

  const handleSubmit=(event)=>{
    
    addItem({name, calorie});
    setName("")
    setCalorie("")
    event.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}>
      <div className="App">
      <label>
       
        <div className="left">
        <input
          type="text"
          value={name}
          name="item"
          placeholder="Item Name"
          onChange={(e) => setName(e.target.value)}
        />
        </div>
      </label>

      <label>
      
        <div className="right">
        <input
          type="number"
          value={calorie}
          name="calorie"
          placeholder="Calorie Amount"
          min="1"
          max="1000"
          onChange={(e) => setCalorie(e.target.value)}
        />
        </div>
      </label>
      
      

      </div>
      <button className="button">Add Items</button>
      
    </form>
  );
}

function RenderItem({updateItem, removeItem, item, index}){
  const [isEdit, setEdit]= useState(false)

  return (
    <div>
      {
        isEdit ?(
          <input 
          type="text"
          name="name"
          required value={item.name}
          onChange={e=>updateItem(index, {
            name: e.target.value
          })}
          />
        ):(
          <h5>{item.name}</h5>
        )
      }

{
        isEdit ?(
          <input 
          type="number"
          name="calorie"
          required value={item.calorie}
          onChange={e=>updateItem(index, {
            calorie: e.target.value
          })}
          />
        ):(
          <p>You have consumed {item.calorie} calories</p>
        )
      }

      <button onClick={()=>removeItem(index)}>Delete </button>

      <button
		
						onClick={() => setEdit(!isEdit)}>
						{isEdit ? 'Done' : 'Edit'}
					</button>

    </div>
  )

}

export default function App(){
    const [items, setItems]=useState([])

    const addItem= item =>{
      setItems([...items, item])
    }

    const updateItem = (index, newItem)=>{
      setItems(
        items.map((item, i)=>(i===index)? {...item, ...newItem} : item)
      )
    }

    const removeItem = index=>{
      setItems(items.filter((item, i)=> i!==index))
    }

    return(
      <div>
          <AddItem addItem={addItem}/>

         
         {
				items.map((item, index) => (
					<RenderItem
						item={item}
						key={index}
						index={index}
						updateItem={updateItem}
						removeItem={removeItem}
					/>
				))
			
        }

        </div>
    )
}
