import React, { useReducer } from 'react';
import { fHandlerRed, errorRed } from './reducers';

import DragDropSelect from '../components/DragDropSelect';

const ShowFiles = () => {
  const [ err, errDispatch ] = useReducer(errorRed, { showError: '', error: '' });
  const [ fileHandler, fileHandlerDispatch ] = useReducer(fHandlerRed, {
    fileList: [],
  });

  const fileInArray = (file, fileArray) => {
    let fileExists = false;

    fileArray.forEach(f => {
      if (f.name === file.name) fileExists = true;
    });

    return fileExists;
  };

  const sanitizeFiles = files =>
    files
      .map(file => {
        const { name } = file;
        switch (true) {
        case !name:
          return {};
        case file && file.size >= 1024 * 1024 * 20:
          errDispatch({
            type: 'SET_ERROR_MSG',
            showError: true,
            error: `Size: ${file.size}. Allowed: 20MB.`,
          });
          return {};
        case fileInArray(file, fileHandler.fileList):
          errDispatch({
            type: 'SET_ERROR_MSG',
            showError: true,
            error: 'File is already uploaded',
          });
          return {};
        default:
          return file;
        }
      })
      .filter(file => file.name !== undefined);

  const handleDroppedFiles = files => {
    fileHandlerDispatch({ type: 'STACK_FILES', files: sanitizeFiles(files) });
  };

  return (
    <div>
      {err.showError && (
        <p className="error-box" data-testid="error-msg">
          {err.error}
        </p>
      )}

      <DragDropSelect
        RDDBDragDropHandler={handleDroppedFiles}
        RDDBFileBrowserHandler={handleDroppedFiles}
        RDDBAcceptFileTypes={'application/pdf'}
        RDDBFileBrowserDivClass={'upload-box-frame'}
        RDDBDisplayTextClass={'display-text'}
        RDDBAcceptMultiple={true}
      />

      {fileHandler.fileList.map(file => {
        return <p key={file.name}>{file.name}</p>;
      })}
    </div>
  );
};

export default ShowFiles;
