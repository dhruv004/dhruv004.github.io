webpackJsonp([0x8f62686f6464],{572:function(e,t){e.exports={data:{markdownRemark:{html:'<p>This blog makes uses a script file to upload a csv file data from a node expressjs application.</p>\n<p>Start by creating a node app with express. This is what our index.js file would look like.</p>\n<pre><code>"use strict"\n\nconst express = require(\'express\')\nconst app = express()\n\napp.get(\'/\', (req, res) => res.send(\'Hello World!\'))\n\napp.listen(3000, () => console.log(\'Example app listening on port 3000!\'))\n</code></pre>\n<p>We will use the <a href="http://c2fo.github.io/fast-csv">fast-csv</a> library</p>\n<blockquote>\n<p><code>npm install fast-csv –-save</code></p>\n</blockquote>\n<p>After this let us add a new route to our index.js file.</p>\n<pre><code>//other requires\nconst csv = require("fast-csv")\n\napp.post(\'/readCSV\', (req, res) => {\n    var csvData = {};\n    var CSV_STRING = req.body;\n    csv\n    .fromString(CSV_STRING, {\n        headers: ["count", "value"],\n        ignoreEmpty: true\n    })\n    .on("data", function(data){\n        csvData[data.value] = data\n    })\n    .on("end", function(){\n        console.log(csvData);\n        //make call to database\n        res.send(\'Done\');\n    })\n});\n</code></pre>\n<p>To get csv data in req.body we will use the <a href="https://github.com/expressjs/body-parser">body-parser</a> package </p>\n<blockquote>\n<p><code>npm install body-parser –save</code></p>\n</blockquote>\n<p>Now to use body parser add the text body parser.</p>\n<pre><code>const express = require(\'express\')\nconst bodyParser = require(\'body-parser\')\nconst csv = require("fast-csv")\n\nconst app = express()\napp.use(bodyParser.text())  \n</code></pre>\n<p>Now to make the import faster lets create a script that will post the csv file to the server. Create a file name importCSV.sh. This is how the shell script will look like.</p>\n<p><img src="https://user-images.githubusercontent.com/17777371/38450796-a74a445a-3a41-11e8-8246-53e233b95efd.png" alt="image"></p>\n<p>Now since the script and the csv file belong in the same directory, I did not have to alter path. But you can provide your own path to the csv file in the –data-binary property.\nTo run this</p>\n<ul>\n<li>Start the server with node index.js</li>\n<li>Open the git bash terminal and run importCSV.sh\nThis is how the request and response will look like</li>\n</ul>\n<p><img src="https://user-images.githubusercontent.com/17777371/38450798-bc461014-3a41-11e8-9bf5-4368dee9fb5c.png" alt="image"></p>\n<p><img src="https://user-images.githubusercontent.com/17777371/38450810-d6f90f7e-3a41-11e8-8dcd-3d6bb10f832d.png" alt="image"></p>\n<p>You can find the code <a href="https://github.com/dhruv004/nodeUploadCsv">here</a></p>',frontmatter:{title:"Upload CSV file using node"}}},pathContext:{slug:"/nodeUploadCsv/"}}}});
//# sourceMappingURL=path---node-upload-csv-265789510506e4e86217.js.map