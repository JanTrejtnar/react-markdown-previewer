export default function MarkdownInput({
  value,
  onChange
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="markdown-input">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Type your markdown here..."
        rows={10}
        cols={50}
      />
    </div>
  );
}
