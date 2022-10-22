import React from 'react';
import './index.css';

const FileInput = ({ onFiles }) => {

  return (<label className="file-input">
    {"Drag file or click to select"}
    <input
      type="file"
      style={{ display: 'none' }}
      multiple
      onChange={async e => {
        const target = e.target
        onFiles(e)
        target.value = null
      }}
    />
  </label>);
};

export default FileInput;