

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

    var cb = req.query.callback
    if(cb){
        res.send(cb + '('+ JSON.stringify(data) +')')
    }else{
        res.send(data)
    }
})