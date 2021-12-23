import React from 'react';

export const Inputs = ({ onAdd }) => {
    const [values, setValues] = React.useState({id:'', room:'', responsible:''});
    const handleChange = React.useCallback((e) => {
        setValues(curr => ({...curr, [e.target.name]: e.target.value}))
    }, []);
    const handleAdd = React.useCallback(() => {
        onAdd({ id: Number(values.id), room: Number(values.room), responsible: values.responsible })
    }, [onAdd, values]);
    return (
        <div>
            <input type="number" value={values.id} name="id" onChange={handleChange}/>
            <input type="number" value={values.room} name="room" onChange={handleChange}/>
            <input value={values.responsible} name="responsible" onChange={handleChange}/>
            <button onClick={handleAdd}>Add a new Row</button>
        </div>
    )
}