import { useState, useEffect } from 'react';
import {Box} from '@mui/system';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DepartmentsComponent from './DepartmentsComponent';

interface Department{
  department: string;
  sub_departments: string[];
}
const Ddata:Department[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

interface Post {
  userId: number;
//   id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User Id',
    width: 150,
    editable: false,
  },
  {
    field: 'title',
    headerName: 'Title',
    type: 'string',
    width: 400,
    editable: false,
  },
  {
    field: 'body',
    headerName: 'Body',
    type: 'string',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 1000
  },
];

function SecondPage() {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data: Post[]) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Rest of the component code to display the data in a table using MUI Data Grid
  // (Refer to the MUI Data Grid documentation for implementation)
  return (
    <div className='secondPage'>
        <h1 className='heading'>Welcome to Second Page</h1>
        <div className='table'>
          <header>Data</header>
          <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                  pagination: {
                      paginationModel: {
                      pageSize: 5,
                      },
                  },
              }}
              pageSizeOptions={[5]}
              checkboxSelection
              disableRowSelectionOnClick
          />
          </Box>
        </div>
        <div className='departm table'>
          <header>Departments</header>
          <DepartmentsComponent data= {Ddata}/>
        </div>
    </div>
  )
}

export default SecondPage;
