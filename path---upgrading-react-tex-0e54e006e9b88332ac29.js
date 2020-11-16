webpackJsonp([0x77cb64bf5cc2],{386:function(e,t){e.exports={data:{markdownRemark:{html:'<h2>Context</h2>\n<p>This is about packages version update for a repo that I sometimes maintain.You can check it out <a href="https://github.com/dhruv004/React-Tex/">here</a>.\nAnd I wanted to share what changed in 2 years from 2018 to 2020.I hope still relevant by the time this is read.</p>\n<h2>Dependencies update</h2>\n<p>React and Katex had no breaking changes.This was the easiest to do.Just updating version along with some doc update. </p>\n<h2>Dev dependencies update</h2>\n<p>Some changes were made to babel,the main thing I realized after this long was that babel changed namespace from <code class="language-text">babel</code> to <code class="language-text">@babel</code>.</p>\n<p><strong>Changing presets:</strong> These are basically babel plugins that help defining.You can read more about the official presets <a href="https://babeljs.io/docs/en/presets">here</a></p>\n<table>\n<thead>\n<tr>\n<th align="left">Before</th>\n<th align="left">After</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left"><code class="language-text">babel-preset-es2015</code></td>\n<td align="left"><code class="language-text">@babel/preset-env</code></td>\n</tr>\n<tr>\n<td align="left"><code class="language-text">babel-preset-react</code></td>\n<td align="left"><code class="language-text">@babel/preset-react</code></td>\n</tr>\n</tbody>\n</table>\n<p>This then need to reflect in the <code class="language-text">.babelrc</code> file</p>\n<div class="gatsby-highlight" data-language="diff"><pre class="language-diff"><code class="language-diff">{\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span>  "presets": ["es2015", "react", "airbnb"]\n</span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span>  "presets": ["@babel/preset-env", "@babel/preset-react", "airbnb"]\n</span>}</code></pre></div>\n<br/>\n<p>⚠ <strong>Deprecated</strong> <code class="language-text">babel-preset-stage-0</code>. Since babel has decide to stop supporting it.You can read more about it <a href="https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets">here</a></p>\n<h2>Tests update</h2>\n<p>Changed <code class="language-text">babel-register</code> to <code class="language-text">@babel/register</code>,This requires a change in the test script.Which will now be</p>\n<div class="gatsby-highlight" data-language="diff"><pre class="language-diff"><code class="language-diff">{\n<span class="token deleted-sign deleted"><span class="token prefix deleted">-</span>  "test": "mocha tests/.transpile.js tests/.setup.js tests/**/*.spec.js"\n</span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span>  "test": "mocha --require @babel/register tests/.setup.js tests/**/*.spec.js"\n</span>}</code></pre></div>\n<p>Also deleted the <code class="language-text">transpile.js</code> since that is no longer needed</p>\n<h2>Learnings</h2>\n<p>We should keep things updated, since it also increases confidence in the package.<br/>\nMight be a good rule to revisit dependencies half yearly.😅</p>\n<p>You can check out the change commit <a href="https://github.com/dhruv004/React-Tex/commit/3e7e16fe9f103c5c3638c9f13d079911097887df">here</a> </p>',frontmatter:{title:"Updating dependencies for React-Tex"}}},pathContext:{slug:"/upgradingReactTex/"}}}});
//# sourceMappingURL=path---upgrading-react-tex-0e54e006e9b88332ac29.js.map