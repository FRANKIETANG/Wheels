function setRouter(app){ 
 var router = app; 

/**
 * 当 http://localhost:8080/getFriends 的GET请求到来时被下面匹配到进行处理
 * 通过req.query获取请求的参数对象 
 * 通过 req.send发送响应
 */
router.get('/loadmore', function(req, res) {
	var start = req.query.start // 通过 req.query获取请求参数
	var len = req.query.len
  
  //根据请求参数mock数据
  var data = []
  for(var i=0;i<len;i++){
    data.push('内容'+(parseInt(start)+i))
  }
  res.send({"data":data,"status":1})
})


}
 module.exports.setRouter = setRouter