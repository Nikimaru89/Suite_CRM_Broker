import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon  from '@mui/icons-material/DeleteForever';
import './index.css';

const formatBytes = (b) => {
  const units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
  let l = 0
  let n = b

  while (n >= 1024) {
    n /= 1024
    l += 1
  }

  return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)}${units[l]}`
}

const FileTile = ({ file, onRemove }) => {
  const { name, size, type, lastModified, percent } = file;
  return (
    <div className="file-tile">
      <span style={{ width: '100%' }} >{file.name} </span>
      <IconButton aria-label="delete" onClick={() => onRemove(file)}>
        <DeleteForeverIcon sx={{color:'red'}}/>
      </IconButton>
    </div>
  );
};

export default FileTile;