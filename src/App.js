import logo from './logo.svg';
import './App.css';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; 
import { useState } from 'react';

function App() {
  const [value, setValue] = useState();

  console.log(value);
  return (
<>
<SunEditor
setContents={value}
onChange={setValue}
setOptions={{
  buttonList: [
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock"],
    [
      "bold",
      "underline",
      "italic",
      "strike",
      "subscript",
      "superscript"
    ],
    ["fontColor", "hiliteColor"],
    ["align", "list", "lineHeight"],
    ["outdent", "indent"],

    ["table", "horizontalRule", "link", "image", "video", "audio"],

    ["preview", "print", "codeView"],
    ["removeFormat"],

  ], 
  defaultTag: "div",
  minHeight: "300px",
  showPathLabel: false,
  formats:  [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
  ],

}}
/>
</>
  );
}

export default App;
