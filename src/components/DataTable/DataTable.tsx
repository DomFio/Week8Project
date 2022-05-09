import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import{
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material";
import { SkateForm } from '../../components'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 280 },
  {
    field: 'bearings',
    headerName: 'Bearings',
    width: 220,
    editable: true,
  },
  {
    field: 'deck_brand',
    headerName: 'Deck Brand',
    width: 220,
    editable: true,
  },
  {
    field: 'grip_tape',
    headerName: 'Grip Tape',
    width: 220,
    editable: true,
  },
  {
    field: 'hardware',
    headerName: 'hardware',
    width: 220,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'price',
    width: 220,
    editable: true,
  },
  {
    field: 'trucks',
    headerName: 'Trucks',
    width: 220,
    editable: true,
  },
  {
    field: 'wheels',
    headerName: 'Wheels',
    width: 220,
    editable: true,
  },
];

interface gridData{
  data:{
    id?:string;
    name?:string;
  }
}

export const DataTable = () => {
    let {skateData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () =>{
      setOpen(true);
    }
    let handleClose = () =>{
      setOpen(false);
    }

    let deleteData = async () =>{
      await serverCalls.delete(`${gridData[0]}`)
      getData();
    }

    console.log(gridData)

    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Completes In Inventory</h2>
        <DataGrid
          rows={skateData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={newSelectionModel => {setData(newSelectionModel)}}
          {...skateData}
        />
        <Button onClick={handleOpen} color='primary'>Update</Button>
        <Button onClick={deleteData} color='warning'>Delete</Button>
        {/* Dialog popup */}
        <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
          <DialogTitle id='form-dialog-title'>Update A Complete</DialogTitle>
          <DialogContent>
            <DialogContentText>Updating Skate ID: {gridData[0]}</DialogContentText>
            <SkateForm id={`${gridData[0]}`} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }