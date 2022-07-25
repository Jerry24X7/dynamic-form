import './DynamicForm.css'

const DynamicForm = ({jsonSchema}) => {

    return (
        <form>
            {
                jsonSchema.fields.map((item,index)=>{
                    return item.type == "dropdown" ? 
                            <div key={item.key} className="input-container">
                                <label>{item.label}</label>
                            <select>
                                {item.items.map((item)=>{
                                    return <option value={item.value}>{item.text}</option>
                                })}
                            </select>
                            </div> :
                            <div key={item.key} className="input-container">
                            <label>{item.label}</label>
                                <input required={item.isRequired} type={item.type} readOnly={item.isReadonly}/>
                           </div> 
                })
            }
        </form>
    )
}

export default DynamicForm;