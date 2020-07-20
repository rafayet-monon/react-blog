import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditorComponent = () => (
  <Editor
    wrapperClassName="editor-wrapper-class"
    editorClassName="editor-class"
    toolbarClassName="editor-toolbar-class"
    name="yoyo"
  />
);

export default EditorComponent;
