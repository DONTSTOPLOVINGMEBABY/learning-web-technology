import React from "react";
import rehypeRaw from "rehype-raw";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const markdownSource = `
# header

* list
* items

\`\`\`js
export default function BlogPostsSort({ query, options, onSort }: BlogPostsSortProps) {
  return (
    <TextField select size="small" value={query} onChange={(e) => onSort(e.target.value)}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}

console.log('hi')

\`\`\`
`;

export default function App() {
  return (
    <Markdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
      {markdownSource}
    </Markdown>
  );
}
