import React from 'react'
import Fab from '@material-ui/core/Fab';
function Address() {
    return (
        <div>
        <Fab color="primary" aria-label="add"></Fab>
        <Fab color="secondary" aria-label="edit"></Fab>
        <Fab variant="extended">KARIM SOLIMAN AVENUE</Fab>
        <Fab disabled aria-label="like"></Fab>
      </div>
    );
}

export default Address;
