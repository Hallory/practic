import React from 'react';
import writeXlsxFile from 'write-excel-file';
import { Table } from './Table'
import { Inputs } from './Inputs'
import logo from './logo.svg';
import './App.css';
import readXlsxFile from 'read-excel-file'

const defaultObjects = [
  // Object #1
  {
    id: 11,
    room: 115,
    responsible: 'Shevchenko'
  },
  // Object #2
  {
    id: 12,
    room: 115,
    responsible: 'Shevchenko'
  },
]

const schema = [
  {
    column: 'ID',
    type: Number,
    value: item => item.id
  },
  {
    column: 'Room',
    type: Number,
    value: item => item.room
  },
  {
    column: 'Responsible',
    type: String,
    value: item => item.responsible
  }
]

const readSchema = {
  ID: {
    prop: 'id',
    type: Number
  },
  Room: {
    prop: 'room',
    type: Number
  },
  Responsible: {
    prop: 'responsible',
    type: String
  }
}

function App() {
  const [objects, setObjects] = React.useState(() => {
    const rawData = localStorage.getItem('data');
    if(rawData) {
      const data = JSON.parse(rawData);
      if(Array.isArray(data)) {
        return data;
      }
    }
    return defaultObjects;
  });
  const click = React.useCallback(() => {
    writeXlsxFile(objects, {
      schema,
      fileName: 'file.xlsx'
    })
  }, [objects]);
  const updateLocally = React.useCallback((data) => {
    localStorage.setItem('data', JSON.stringify(data));
  }, []);
  const handleAdd = React.useCallback((item) => {
    setObjects(items => [...items, item]);
  }, []);
  const handleDelete = React.useCallback((index) => {
    setObjects(items => items.filter((_, i) => i !== index))
  }, []);
  React.useEffect(() => {
    updateLocally(objects);
  }, [objects, updateLocally]);
  const handleUpload = React.useCallback((event) => {
    readXlsxFile(event.target.files[0], {schema: readSchema}).then(({rows}) => {
      const newState = rows.map(item => {
        return {
          id: item.id || '',
          room: item.room || '',
          responsible: item.responsible || ''
        }
      })
      setObjects(newState);
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" accept=".xlsx" placeholder="Upload .xlsx file" onChange={handleUpload} />
        <Inputs onAdd={handleAdd} />
        <Table data={objects} schema={schema} onDelete={handleDelete}/>
        <button onClick={click}>click</button>
      </header>
    </div>
  );
}

export default App;
