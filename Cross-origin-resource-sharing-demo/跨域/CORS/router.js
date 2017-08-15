

app.get('/getNews',function(req,res){
    var news = [
        "eydhxnbcvhfdsjkaqwerigvjcc",
        "qpalsdkfjncxmzajshdfgdhsjs",
        "dsfrtghtbhntirnvcmiecnivnv",
        "edcnbeucfhvyrvberyisdazsda",
        "zbvtrfgdstvrbvgftiurvgbhut",
        "pqowieuryhfncxmskjdfhfjdjs",
        "fdswqscefrevbfrbfdsgfgfgdg",
        "mnbvcdfxcvgbhjkioopoiuhbgv",
        "ewurewhdchhxhismqmhduzkuws",
        "sajdkasjdklasdjlksajdksdad"
    ]
    var data = []
    for(var i=0;i<3;i++){
        var index = parseInt(Math.random()*news.length)
        data.push(news[index])
        news.splice(index,1)
    }

    res.header("Access-Control-Allow-Origin","http://frankietang.com:8080")
    //res.header("Access-Control-Allow-Origin","*")//简单粗暴的方法
    res.send(data)
})