webpackJsonp([42752261279356],{577:function(e,n){e.exports={data:{markdownRemark:{html:'<h2>Install</h2>\n<pre><code class="language-sh">$ npm install --save react-tex\n</code></pre>\n<h2>Using</h2>\n<p>1.In your component</p>\n<pre><code class="language-js">import {Tex} from \'react-tex\';\n\nclass TexWrapper extends Component{\n  render(){\n    let latexString = "\\int_{a}^{b} f(x)dx = F(b) - F(a)";\n    return(\n      &#x3C;div>\n        &#x3C;Tex texContent={latexString}/>\n      &#x3C;/div>\n    )\n  }\n}\n</code></pre>\n<p>Output:<img src="https://cloud.githubusercontent.com/assets/17777371/24044786/bd8233ce-0b42-11e7-9a48-4abf6d90ed0e.png" alt="tex"></p>\n<p>Available props for Tex are:</p>\n<ul>\n<li><code>texContent</code>: <code>string</code>. Latex string . (default: <code></code>)</li>\n</ul>\n<p>For Inline component wrap the latex string in between $$</p>\n<pre><code class="language-js">import {InlineTex} from \'react-tex\';\n\nclass InlineTexWrapper extends Component{\n  render(){\n    let latexString = "This is inline $$\\int_{a}^{b} f(x)dx = F(b) - F(a)$$ latex string";\n    return(\n      &#x3C;div>\n        &#x3C;InlineTex texContent={latexString}/>\n      &#x3C;/div>\n    )\n  }\n}\n</code></pre>\n<p>Output:<img src="https://cloud.githubusercontent.com/assets/17777371/24044794/c554ccf6-0b42-11e7-8b06-9718fb0d19d3.png" alt="inlinetex"></p>\n<p>Available props for InlineTex are:</p>\n<ul>\n<li>\n<p><code>texContent</code>: <code>string</code>. Latex string . (default: <code></code>)</p>\n</li>\n<li>\n<p><code>texSeperator</code>: <code>string</code>. Latex string seperator using regex . (default: <code>${2}</code>)</p>\n</li>\n<li>\n<p>Include Katex CSS in your html</p>\n</li>\n</ul>\n<pre><code class="language-html">&#x3C;html>\n    &#x3C;head>\n        &#x3C;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css">\n    &#x3C;/head>\n&#x3C;/html>\n</code></pre>',frontmatter:{title:"React-Tex"}}},pathContext:{slug:"/reactTex/"}}}});
//# sourceMappingURL=path---react-tex-0dbb3841d7976899e3da.js.map