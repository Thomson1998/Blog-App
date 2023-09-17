import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
export function Base({title,children}){
    const history=useHistory();

    return(
        <div>
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>history.push('/')}>Home </Button>
          <Button color="inherit" onClick={()=>history.push('/categories')}>Categories</Button>
           
        </Toolbar>
      </AppBar>
    </Box>      

    <div className='title'>{title}</div>
    <div className='chidren'>{children}</div>

        </div>
    )

}