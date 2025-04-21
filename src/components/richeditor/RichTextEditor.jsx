'use client';

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import 'quill/dist/quill.snow.css';

const RichTextEditor = forwardRef((_, ref) => {
  const editorContainerRef = useRef(null);
  const quillInstance = useRef(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (editorContainerRef.current && !isInitialized.current) {
      isInitialized.current = true;
      editorContainerRef.current.innerHTML = '';
      const editor = document.createElement('div');
      editorContainerRef.current.appendChild(editor);

      import('quill').then((QuillModule) => {
        const Quill = QuillModule.default;

        quillInstance.current = new Quill(editor, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, 3, false] }],
              ['bold', 'italic', 'underline', 'strike'],
              [{ list: 'ordered' }, { list: 'bullet' }],
              [{ color: [] }, { background: [] }],
              ['link', 'image'],
              ['clean'],
            ],
          },
          placeholder: 'Write something...',
        });

        quillInstance.current.on('text-change', () => {
          if (ref && typeof ref.current?.onTextChange === 'function') {
            ref.current.onTextChange();
          }
        });
      });
    }

    return () => {
      if (quillInstance.current) {
        quillInstance.current = null;
        isInitialized.current = false;
        if (editorContainerRef.current) {
          editorContainerRef.current.innerHTML = '';
        }
      }
    };
  }, []);

  useImperativeHandle(ref, () => ({
    getContent: () => quillInstance.current?.root.innerHTML || '',
    getText: () => quillInstance.current?.getText() || '',
    setContent: (html) => {
      quillInstance.current?.clipboard.dangerouslyPasteHTML(html);
    },
    clearContent: () => {
      quillInstance.current?.setContents([{ insert: '\n' }]);
    },
    onTextChange: () => {},
  }));

  return (
    <div className="overflow-ellipsis">
      <div
        ref={editorContainerRef}
        className="h-[415px] bg-white [&_.ql-container]:border-none
        [&_.ql-editor]:border-none [&_.ql-editor]:shadow-none"
      />
    </div>
  );
});

RichTextEditor.displayName = 'RichTextEditor';
export default RichTextEditor;
