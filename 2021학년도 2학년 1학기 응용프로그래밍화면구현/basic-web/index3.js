const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const url = require("url");
const PORT = 65535;

function templateHTML(title, list, body) {
  title = title ? `WEB1 - ${title}` : "WEB1";
  return `<!doctype html>
  <html>
  <head>
    <title>${title}</title>
    <meta charset="utf-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  </head>
  <body>
    <h1><a href="index.html">WEB</a></h1>
    ${list}
    <p>${body}</p>
  </body>
  </html>
`
}

const templatelist = (filelist) => {
  let list = "<ol>";
  for (let i = 0; i < filelist.length; i++)
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
  list += "</ol>";
  return list;
}

const app = http.createServer((req, res) => {
  const _url = req.url;
  const queryData = url.parse(_url, 1).query;
  const title = queryData.id;
  const pathname = url.parse(_url, true).pathname;
  if (pathname === "/" || pathname === "/index.html") {
    fs.readFile(`./data/${queryData.id}`, "utf-8", (err, description) => {
      fs.readdir("./data", (err, filelist) => {
        const list = templatelist(filelist);
        if (title)
          var template = templateHTML(title, list,
            `<h2>${title || "환영합니다."}</h2>
            <p>${description || "홈페이지 입니다."}</p> 
            <a href="/update?id=${title}"><input type="button" value="글 수정"></a> 
            <form action="/delete_process" method="POST"> 
              <input type="hidden" name="id" value="${title}"> 
              <input type="submit" value="글 삭제" onclick="return(confirm('정말로 삭제하시겠습니까?'))"> 
            </form>`);
        else
          var template = templateHTML(title, list,
            `<h2>${title || "환영합니다."}</h2>
            <p>${description || "홈페이지 입니다."}</p> 
            <a href="/create"><input type="button" value="글 작성"></a>`);
        res.writeHead(200);
        res.end(template);
      })
    });
  }
  else if (pathname === "/create") {
    fs.readdir("./data", (err, filelist) => {
      const title = "create";
      const list = templatelist(filelist);
      const template = templateHTML(title, list, `
      <form action="http://localhost:${PORT}/create_process" method="post">
        <p><input type="text" name="title"></p>
        <p><textarea name="description"></textarea></p>
        <input type="submit" value="작성">
      </form>`);
      res.writeHead(200);
      res.end(template);
    })
  }
  else if (pathname === "/create_process") {
    var body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      fs.writeFile(`./data/${title}`, description, "utf-8", (err) => {
        res.writeHead(302, { Location: `/?id=${title}` });
        res.end("create_process");
      });
    });
  }
  else if (pathname === "/update") {
    fs.readdir("./data", (err, filelist) => {
      fs.readFile(`./data/${queryData.id}`, "utf-8", (err, description) => {
        const title = queryData.id;
        const list = templatelist(filelist);
        const template = templateHTML(title, list, `
        <form action="http://localhost:${PORT}/update_process" method="post">
        <input type="hidden" name="id" value="${title}">
          <p><input type="text" name="title" value=${title}></p>
          <p><textarea name="description">${description}</textarea></p>
          <input type="submit" value="수정">
        </form>`);
        res.writeHead(200);
        res.end(template);
      });
    })
  }
  else if (pathname === "/update_process") {
    var body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const post = qs.parse(body);
      const title = post.title;
      const description = post.description;
      const id = post.id;
      fs.rename(`./data/${id}`, `./data/${title}`, (err) => {
        fs.writeFile(`./data/${title}`, description, "utf-8", (err) => {
          res.writeHead(302, { Location: `/?id=${title}` });
          res.end("update_process");
        });
      });
    });
  }
  else if (pathname === "/delete_process") {
    var body = "";
    req.on("data", (data) => {
      body += data;
    });
    req.on("end", () => {
      const post = qs.parse(body);
      const id = post.id;
      fs.unlink(`./data/${id}`, (err) => {
        res.writeHead(302, { Location: `/` });
        res.end("delete_process");
      });
    });
  }
  else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

app.listen(PORT, () => {
  console.log("start");
});