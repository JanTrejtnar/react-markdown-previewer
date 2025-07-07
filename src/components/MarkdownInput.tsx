import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import MarkdownResult from './MarkdownResult.tsx';


export default function MarkdownInput() {
    const defaultInput = "# Hello\n\nThis is *Markdown*!\n\n- Item 1\n- Item 2\n- Item 3";

    const [input, setInput] = useState<string>(defaultInput);
    const [markdown, setMarkdown] = useState<string>('');

    const handleChange = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInput(event.target.value);

        // Convert markdown to HTML and sanitize it
        updatePreview(event.target.value);
    };

    const updatePreview = async (rawMarkdown: string) => {
        const html = await marked(rawMarkdown); // Await the Promise
        const safeHtml: string = DOMPurify.sanitize(html);
        setMarkdown(safeHtml);
    }

    useEffect(() => {
        updatePreview(defaultInput);
    }, []);

    return (
        <div className="markdown-input">
            <textarea
                value={input}
                onChange={handleChange}
                placeholder="Type your markdown here..."
                rows={10}
                cols={50}
            />
            <MarkdownResult markdown={markdown} />
        </div>
    );
}