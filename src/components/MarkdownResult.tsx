export default function MarkdownResult({ markdown }: { markdown: string}) {
  return (
    <div className="markdown-result">
      <div
        className="markdown-preview"
        dangerouslySetInnerHTML={{ __html: markdown }}
      />
    </div>
  );
}