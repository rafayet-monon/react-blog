import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { stateToHTML } from "draft-js-export-html";

const EditorComponent = (props) => {
  const editorState = props.editorState;
  const [description, setDescription] = useState(editorState);
  const setEditorState = (editorState) => {
    setDescription(editorState);
    console.log(editorState.getCurrentContent().getPlainText());
    props.onChange(
      "plainDetails",
      editorState.getCurrentContent().getPlainText()
    );
    props.onChange("details", stateToHTML(editorState.getCurrentContent()));
  };

  return (
    <Editor
      wrapperClassName="editor-wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="editor-toolbar-class"
      editorState={description}
      onEditorStateChange={setEditorState}
    />
  );
};

export default EditorComponent;
