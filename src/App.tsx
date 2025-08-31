import './App.css';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
// components
import MarkdownInput from './components/MarkdownInput.tsx';
import MarkdownResult from './components/MarkdownResult.tsx'; 

function App() {

  const defaultInput = "# Hello\n\nThis is *Markdown*!\n\n- Item 1\n- Item 2\n- Item 3\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n }\n}\n```";
  const [input, setInput] = useState(defaultInput);
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const convertMarkdown = async () => {
      const html = await marked(input);
      const safeHtml = DOMPurify.sanitize(html);
      setMarkdown(safeHtml);
    }
    
    convertMarkdown();
  }, [input]); //spust vždy, když se změní input

  return (
    <div className='app'>
      <h1>Markdown Previewer</h1>
      <div className='editor-container'>
        <MarkdownInput value={input} onChange={setInput}/>
        <MarkdownResult markdown={markdown}/>
      </div>
    </div>
  )
}

export default App
