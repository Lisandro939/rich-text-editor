// src/App.jsx
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles

const MyRichTextEditor = () => {
  const [content, setContent] = useState('');

  const handleChange = (value) => {
    setContent(value);
  };

  useEffect(() => {
    console.log('Content:', content);
  }, [content])

  return (
    <div>
      <h1>Rich Text Editor</h1>
      <ReactQuill value={content} onChange={handleChange} />
      <div>
        <h2>Content:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default MyRichTextEditor;
