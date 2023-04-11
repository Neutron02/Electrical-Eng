import React, { useState } from 'react';
import './C_Code.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';


const vscodeDarkPlus = {
    'code[class*="language-"]': {
      color: '#D4D4D4',
      background: 'none',
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontSize: '1em',
      lineHeight: '1.5em',
      whiteSpace: 'pre',
      textAlign: 'left',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5em',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
    },
    'pre[class*="language-"]': {
      color: '#D4D4D4',
      background: '#1E1E1E',
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      fontSize: '1em',
      lineHeight: '1.5em',
      whiteSpace: 'pre',
      textAlign: 'left',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      wordWrap: 'normal',
      lineHeight: '1.5em',
      MozTabSize: '4',
      OTabSize: '4',
      tabSize: '4',
      WebkitHyphens: 'none',
      MozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',
      padding: '1em',
      margin: '.5em 0',
      overflow: 'auto',
      borderRadius: '0.3em',
    },
    ':not(pre) > code[class*="language-"]': {
      background: '#1E1E1E',
      padding: '.1em',
      borderRadius: '.3em',
    },
    comment: { color: '#6A9955' },
    prolog: { color: '#6A9955' },
    doctype: { color: '#6A9955' },
    cdata: { color: '#6A9955' },
    punctuation: { color: '#D4D4D4' },
    namespace: { opacity: '0.7' },
    tag: { color: '#569CD6' },
    operator: { color: '#D4D4D4' },
    number: { color: '#B5CEA8' },
    property: { color: '#3DC9B0' },
    function: { color: '#DCDCAA' },
    string: { color: '#CE9178' },
    regex: { color: '#9A5334' },
    atrule: { color: '#C586C0' },
    keyword: { color: '#569CD6' },
    variable: { color: '#9CDCFE' },
    constant: { color: '#4EC9B0' },
    symbol: { color: '#4EC9B0' },
    selector: { color: '#C586C0' },
    'attr-name': { color: '#9CDCFE' },
    'attr-value': { color: '#CE9178' },
    entity: { color: '#569CD6' },
    url: { color: '#9CDCFE' },
    'class-name': { color: '#4EC9B0' },
    'maybe-class-name': { color: '#4EC9B0' },
    'builtin-name': { color: '#DCDCAA' },
    type: { color: '#DCDCAA' },
    'function-name': { color: '#DCDCAA' },
    'function-variable': { color: '#DCDCAA' },
    storage: { color: '#3F6E74' },
    boolean: { color: '#569CD6' },
    control: { color: '#C586C0' },
    directive: { color: '#C586C0' },
    unit: { color: '#B4B4B4' },
    statement: { color: '#C586C0' },
    regexp: { color: '#9A5334' },
    atrule: { color: '#C586C0' },
    url: { color: '#9CDCFE' },
    keyword: { color: '#569CD6' },
    'module-name': { color: '#DCDCAA' },
    'instance-name': { color: '#DCDCAA' },
    'module-reference': { color: '#DCDCAA' },
    'line-numbers-rows': { background: '#1E1E1E' },
    'line-numbers-rows > span': { color: '#2B91AF' },
    'line-highlight': { background: 'rgba(193, 222, 241, 0.2)' },
  };
  
  
  
  // In your CCodeSection component
//   <SyntaxHighlighter language="c" style={customStyle}>
//     {codeString}
//   </SyntaxHighlighter>
  
const Code = (props) => {
  const codeString = props.code ? props.code : `int main()`;

  return (
    <div className="c-code-section">
      <h2 className="section-title">{props.title}</h2>
      <SyntaxHighlighter language="c" style={vscodeDarkPlus}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
