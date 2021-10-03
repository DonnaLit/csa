import React, { useState } from 'react';
import Title from './Others/Title';
import Forms from './Others/Forms';
import Files from './Others/Files';
import Modal from './Others/Modal';

function library() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <Forms />
      <Files setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default library;