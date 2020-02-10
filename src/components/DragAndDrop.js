import React from 'react';
import propTypes from 'prop-types';

const DragAndDrop = props => {
  const { info, children, dispatch, insideDragArea, fileDropHandler } = props;

  const handleDragEnter = e => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: 'SET_DROPPED', dropped: false });
    dispatch({
      type: 'SET_NESTING_COUNT',
      nestingCount: info.nestingCount + 1,
    });
  };

  const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: 'SET_INSIDE_DRAG_AREA', insideDragArea: false });
    dispatch({
      type: 'SET_NESTING_COUNT',
      nestingCount: info.nestingCount - 1,
    });
    if (info.nestingCount > 0) return;
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'copy';
    dispatch({ type: 'SET_INSIDE_DRAG_AREA', insideDragArea: true });
  };

  const handleDrop = e => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files) {
      fileDropHandler([ ...e.dataTransfer.files ]);
      e.dataTransfer.clearData();
      dispatch({ type: 'SET_NESTING_COUNT', nestingCount: 0 });
    }
    dispatch({ type: 'RESET' });
  };

  return (
    <div
      className={
        insideDragArea ? 'drag-drop-zone inside-drag-area' : 'drag-drop-zone'
      }
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleDragOver(e)}
      onDragEnter={e => handleDragEnter(e)}
      onDragLeave={e => handleDragLeave(e)}
    >
      {children}
    </div>
  );
};

DragAndDrop.propTypes = {
  info: propTypes.object,
  dispatch: propTypes.func,
  children: propTypes.object,
  insideDragArea: propTypes.bool,
  fileDropHandler: propTypes.func,
};

export default DragAndDrop;
