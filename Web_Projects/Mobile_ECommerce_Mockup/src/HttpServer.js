var url  = require("url"),
     fs=require("fs"),
     http=require("http"),
     path = require("path");
http.createServer(function (req, res) {
	
    var pathname=__dirname+url.parse(req.url).pathname;  //获取到服务器响应的绝对地址  (当前文件在本地文件的地址)
    if (path.extname(pathname)=="") {    //path.extname 判断是否存在扩展名，不存在就加 /  ，以作判断 
        pathname+="/";    //C:\Users\Administrator\Desktop\个人简历和作品\努比亚首页模仿(响应式)\src//
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";   //C:\Users\Administrator\Desktop\个人简历和作品\努比亚首页模仿(响应式)\src//index.html
    }
	if(fs.existsSync(pathname)){   //fs.existsSync 判断是否在该文件路径 ,存在返回true;
		switch(path.extname(pathname)){  //获取扩展名,并判断扩展名
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
            }

            fs.readFile(pathname,function (err,data){
                res.end(data);
            });
	}else {
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("<h1>404 Not Found</h1>");
       }
}).listen(8080, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8080/");