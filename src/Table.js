import React from 'react';

export const Table = ({ schema, data, onDelete }) => {
    const renderTable = React.useCallback((schemaItem) => {
        return (<td key={schemaItem.column}>{schemaItem.column}</td>)
    }, []);
    const renderData = React.useCallback((dataItem, index) => {
        const handleDelete = () => onDelete(index);
        return (
            <tr key={`table-col-${index}`}>
                {schema.map(item => (
                    <td key={`td-${index}-${item.column}`}>
                        {item.value(dataItem)}
                    </td>
                ))}
                <td><button onClick={handleDelete}>X</button></td>
            </tr>
        )
    }, [schema, onDelete])
    return (
        <table border="1">
            <thead>
                <tr>
                    {schema.map(renderTable)}
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {data.map(renderData)}
            </tbody>
        </table>
    )
}