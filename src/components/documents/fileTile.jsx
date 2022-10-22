import React from 'react';
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
  const { name } = file;
  return (
    <div className="file-tile">
      <span style={{ width: '100%' }} >{name} </span>
      <div style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`
      }} >
        <select>
          <option>png</option>
          <option>doc</option>
          <option>jpeg</option>
        </select>
        <span className="remove-icon" onClick={() => onRemove(file)} >
        </span>
      </div>
    </div>
  );
};

export default FileTile;