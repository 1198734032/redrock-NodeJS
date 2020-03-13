let http = require('http')

let url = require('url')

let fs = require('fs')

http.
    createServer(function (req, res) {
        var parseobj = url.parse(req.url, true)
        var pathname = parseobj.pathname;
        if (pathname === '/') {
            fs.readFile('./work1.html', function (err, data) {
                if (err) {
                    return res.end('404')
                }

                fs.readdir("./", function (err, files) {
                    if (err) {
                        res.end("404")
                    }
                    let content = ''
                    files.forEach(function (item) {
                        content += `
                        <p><a href="./${item}">${item}</a></p>`
                    })
    
                    data=data.toString()
                    data=data.replace('...',content)
                    res.end(data)
                })  
            })
        }

        else {
            fs.readFile('./'+pathname,function(err,data){
                if(err){
                    return res.end("404")
                }
                res.end(data)
            })
        }
    })



    .listen(3000, function () {
        console.log("running...")
    })