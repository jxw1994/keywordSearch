var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var path = require('path')

var express = require('express')
// var app = new (require('express'))()
var app = express()
var port = 3000
var compiler = webpack(config)
// var bodyParser = require('body-parser')
// app.use(bodyParser);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

//express 加载静态资源
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
// app.use(express.static(path.join(__dirname, '/css')));
// app.use(express.static(path.join(__dirname, '/images')));

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/pages/index.html')
})
 
app.get("/add", function(req, res) {
  res.sendFile(__dirname + '/pages/add.html')
})

app.get("/login", function(req, res) {
  res.sendFile(__dirname + '/pages/login.html')
})

app.get("/selectInfo", function(req, res) {
  res.sendFile(__dirname + '/pages/selectInfo.html')
})

app.get("/sort", function(req, res) {
  res.sendFile(__dirname + '/pages/sort.html')
})

app.get("/addTask", function(req, res) {
  res.sendFile(__dirname + '/pages/addTask.html')
})

app.get("/addTask/3", function(req, res) {
  res.sendFile(__dirname + '/pages/addTask.html')
})
app.get("/addTask/2", function(req, res) {
  res.sendFile(__dirname + '/pages/addTask2.html')
})

app.post("/login", function(req, res) {
  // console.log(req.body.userName);  
  //判断一下用户名和密码
  //express怎么接值和传值
  res.send({status:"1",data:{"userName":"admin","department":"二科室"}})
  //res.send({status:"0",msg:"用户名或密码错"})
  // res.send({status:"-1",msg:"用户名不存在"})
})

app.post("/selectInfo", function(req, res) {
  res.send({data:["计算机应用","模式识别与智能系统","计算机应用／生物医学信息技术","精密仪器、光电检测","测量技术及仪器","仪器科学与技术","生物医学仪器及工程","金属材料（塑料）加工","金属材料成型","材料科学与工程","铸造合金及熔炼","机械制造及自动化","机械电子工程","机械电子工程／生物医学工程","光电子技术","光电子技术、光物理","检测技术及自动化装置","控制理论与控制工程"]})
})

app.post("/sort", function(req, res) {
  // res.send({data:["tom ","arrimy ","jerry ","kk "]})
  res.send({data:[["tom",18,2],["bruto",20,4],["jerry",19,1],["add",16,3],]})
})

app.get("/task/*", function(req, res) {
  res.send({"inspectionUnit":"112213","source":"三科","leaderNum":"1","bacteria":"1","executionTime":"123123131","groupList":[{"num":"1","category":"生产组"},{"num":"12","category":"质量组"}]})
})

app.get("/dq/task/d3/*", function(req, res){
  res.send({"inspectionUnit":"哈尔滨制药六厂2","source":"三科","leaderNum":"1","state":"变更中","bacteria":"1","executionTime":"2016-01-01 09:30:00","groupList":[{"num":"1","category":"生产组"},{"num":"1","category":"质量组"}]});
})

app.get("/dq/task/d2/*", function(req, res){
  res.send({"inspectionUnit":"哈尔滨制药六厂","source":"三科","leaderNum":"1","state":"变更中","bacteria":"1","executionTime":"2016-01-01 09:30:00","groupList":[{"num":"1","category":"生产组","categoryTwo":"categoryTwo测试"},{"num":"1","category":"质量组","categoryTwo":"categoryTwo测试"}]});
})

app.get("/dq/view/d3/*", function(req, res){
  res.sendFile(__dirname + '/pages/dq/viewTask3.html')
})

app.get("/dq/view/d2/*", function(req, res){
  res.sendFile(__dirname + '/pages/dq/viewTask2.html')
})
app.get("/dq/view/*", function(req, res){
  res.sendFile(__dirname + '/pages/dq/viewTask2.html')
})
app.get(["/experts/*","/experts"], function(req, res) {
  res.send([
    {
        "age": "41",
        "bacteria": "0",
        "category": "生产组",
        "createTime": "2016-09-28 15:19:11",
        "degree": "本科",
        "expertsId": 160,
        "gender": "女",
        "leader": "0",
        "name": "杨静伟",
        "phone": "13936294487",
        "school": "中药学",
        "source": "三科",
        "state":"待确认",
        "title": "副科长/副主任药师",
        "work": "黑龙江省药品审评认证中心    注册科"
    },
    {
        "age": "42",
        "bacteria": "0",
        "category": "生产组",
        "createTime": "2016-09-28 15:19:11",
        "degree": "",
        "expertsId": 145,
        "gender": "男",
        "leader": "0",
        "name": "孙祥",
        "phone": "13846022567",
        "school": "黑龙江中医药大学 中药学",
        "source": "三科",
        "state":"待确认",
        "title": "副局长",
        "work": "密山市食品药品监督管理局"
    },
    {
        "age": "46",
        "bacteria": "0",
        "category": "生产组",
        "createTime": "2016-09-28 15:19:11",
        "degree": "学士",
        "expertsId": 181,
        "gender": "男",
        "leader": "0",
        "name": "钱军",
        "phone": "0452-5968937 13704821979",
        "school": "黑龙江中医学院中药系",
        "source": "三科",
        "state":"待确认",
        "title": "科员/主管药师",
        "work": "齐齐哈尔市食品药品监督管理局药品安全监管科"
    }
])
})

app.get("/experts/1", function(req, res) {
  res.send(
    {
        "age": "2",
        "bacteria": "0",
        "category": "生产组",
        "createTime": "2016-09-31 15:19:11",
        "degree": "本科XXX",
        "expertsId": 160,
        "gender": "女",
        "leader": "0",
        "name": "XXX",
        "phone": "13936294487",
        "school": "中药学",
        "source": "三科",
        "title": "副科长/副主任药师",
        "work": "黑龙江省药品审评认证中心XXX   注册科"
    }
  )
})

app.get("/expert", function(req, res) {
  res.sendFile(__dirname + '/pages/expertsGen.html');
})

app.get(["/user/edit/*"], function(req, res) {
  res.sendFile(__dirname + '/pages/edit.html')
})

app.get(["/user/*"], function(req, res) {
  res.send({"name":"黄颂凯","gender":"女","age":"10","school":"无","degree":"无","work":"凯盈科技","title":"工程师","phone":"110","bacteria":1,"category":"临床","categoryTwo":"妇科、乳腺","remarks":"无","source":"二科"})
})


app.get(["/edit/*","/edit"], function(req, res) {
  res.sendFile(__dirname + '/pages/editTask3.html')
})

app.get("/page", function(req, res) {
  res.sendFile(__dirname + '/pages/page.html')
})

app.get("/shop/id/*", function(req, res) {
  res.send({"shopInfoId":"500dba0a-64a0-47b4-a5a8-c3e77b0eacb3","shopName":"搜索","seq":10,"shopAddress":"shopAddress","shopTel":"1300000000","isSend":"1","imgUrl":"imgUrl","gpsX":1.0000,"gpsY":1.0000,"createUserName":"userName","createTime":"2016-09-02 08:55:12","createUserId":"createUserId","avgRate":5.00})
})
app.get("/shop/list/*", function(req, res) {
  var page = {"pageSize":15,"totalPage":1,"currentPage":1,"data":[{"taskId":1,"inspectionUnit":"哈尔滨市修正药业","leaderId":"","bacteria":"0","executionTime":"2016-10-10 00:00:00","state":"1","source":"三科","createUser":"admin","createTime":"2016-10-12 15:24:01"},{"taskId":7,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 15:22:03"},{"taskId":6,"inspectionUnit":"123","executionTime":"2001-02-06 00:00:00","state":"变更中","source":"三科","createTime":"2016-10-12 11:22:33"},{"taskId":5,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 11:15:14"},{"taskId":2,"inspectionUnit":"1","leaderId":"1","executionTime":"2016-10-10 00:00:00","state":"1","source":"1","createUser":"1","createTime":"2016-10-10 16:02:50"}]};
  res.send(page)
})

app.get("/dq/list", function(req, res) {
  res.sendFile(__dirname + '/pages/DqList.html')
})

app.get("/dq/list/*", function(req, res) {
  var page = {"pageSize":15,"totalPage":1,"currentPage":1,"data":[{"taskId":1,"inspectionUnit":"哈尔滨市修正药业","leaderId":"","bacteria":"0","executionTime":"2016-10-10 00:00:00","state":"1","source":"三科","createUser":"admin","createTime":"2016-10-12 15:24:01"},{"taskId":7,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 15:22:03"},{"taskId":6,"inspectionUnit":"123","executionTime":"2001-02-06 00:00:00","state":"变更中","source":"二科","createTime":"2016-10-12 11:22:33"},{"taskId":5,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 11:15:14"},{"taskId":2,"inspectionUnit":"1","leaderId":"1","executionTime":"2016-10-10 00:00:00","state":"1","source":"1","createUser":"1","createTime":"2016-10-10 16:02:50"}]};
  res.send(page)
})


app.get("/d3/task/list", function(req, res) {
  res.sendFile(__dirname + '/pages/page.html')
})

app.get("/d3/task/list/*", function(req, res) {
  var page = {"pageSize":15,"totalPage":1,"currentPage":1,"data":[{"taskId":1,"inspectionUnit":"哈尔滨市修正药业","leaderId":"","bacteria":"0","executionTime":"2016-10-10 00:00:00","state":"1","source":"三科","createUser":"admin","createTime":"2016-10-12 15:24:01"},{"taskId":7,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 15:22:03"},{"taskId":6,"inspectionUnit":"123","executionTime":"2001-02-06 00:00:00","state":"变更中","source":"三科","createTime":"2016-10-12 11:22:33"},{"taskId":5,"inspectionUnit":"123","state":"变更中","source":"sanke","createTime":"2016-10-12 11:15:14"},{"taskId":2,"inspectionUnit":"1","leaderId":"1","executionTime":"2016-10-10 00:00:00","state":"1","source":"1","createUser":"1","createTime":"2016-10-10 16:02:50"}]};
  res.send(page)
})
app.get("/d3/task/experts/*", function(req, res) {
  res.send([
    {
        "age": "46",
        "bacteria": "0",
        "category": "检查组长",
        "createTime": "2016-10-17 14:44:52",
        "degree": "硕士",
        "expertsId": 298,
        "gender": "男",
        "leader": "1",
        "name": "弓起君",
        "phone": "0451-88349386 13945188661",
        "school": "黑龙江中医学院中药学",
        "source": "三科",
        "title": "副处长/调研员",
        "work": "省食品药品监督管理局药品流通监管处"
    },{
        "age": "46",
        "bacteria": "0",
        "category": "生产组",
        "createTime": "2016-09-28 15:19:11",
        "degree": "学士",
        "expertsId": 181,
        "gender": "男",
        "leader": "0",
        "name": "钱军",
        "phone": "0452-5968937 13704821979",
        "school": "黑龙江中医学院中药系",
        "source": "三科",
        "title": "科员/主管药师",
        "work": "齐齐哈尔市食品药品监督管理局药品安全监管科"
    }])
})

app.get("/d2/task/experts/*", function(req, res) {
  res.send([{"expertsId":1056,"name":"王晓丽","gender":"女","age":"","school":"沈阳药科大学  药学（专升本）","degree":"","work":"七台河市食品药品监督局      生产监管科","title":"科长/主管药师","phone":"15846406239   0464-8285198","remarks":"","leader":"","bacteria":"no","category":"监管人员","categoryTwo":"化药","source":"二科","createTime":"2016-10-24 18:37:09"},{"expertsId":1141,"name":"钱军","gender":"男","age":"","school":"黑龙江中医学院中药系佳木","degree":"","work":"齐齐哈尔市食品药品监督管理局药品安全监管科","title":"副科长/主管药师","phone":"0452-5968937 13704821979   0452-2798503","remarks":"","leader":"","bacteria":"no","category":"监管人员","categoryTwo":"中药","source":"二科","createTime":"2016-10-24 18:37:10"},{"expertsId":1199,"name":"张玉宝","gender":"男","age":"","school":"哈尔滨医科大学临床医学","degree":"","work":"哈医大附属肿瘤医院肝胆胰脾外科主任","title":"主任医师","phone":"13936588077","remarks":"","leader":"","bacteria":"no","category":"临床库","categoryTwo":"消化科","source":"二科","createTime":"2016-10-24 18:37:11"},{"expertsId":1333,"name":"姜连阁","gender":"男","age":"","school":"北京医科大学 物化学","degree":"","work":"黑龙江省食品药品检验检测所 食品室","title":"室主任/主任药师","phone":"13796672653   0451-87302512","remarks":"","leader":"1","bacteria":"no","category":"组长库","categoryTwo":"氧气","source":"二科","createTime":"2016-10-24 18:37:13"},{"expertsId":1337,"name":"夏敏莉","gender":"女","age":"","school":"黑龙江商学院 中药制药","degree":"","work":"黑龙江省食品药品审核查验中心审验二科","title":"副科长","phone":"15045696487   0451-51995463","remarks":"","leader":"1","bacteria":"no","category":"组长库","categoryTwo":"氧气","source":"二科","createTime":"2016-10-24 18:37:13"}])
})

app.get(["/d3/task/edit/*","/edit"], function(req, res) {
  res.sendFile(__dirname + '/pages/editTask.html')
})

app.get("/d3/*", function(req, res){
  res.send({"inspectionUnit":"哈尔滨制药六厂","source":"三科","leaderNum":"1","state":"变更中","bacteria":"1","executionTime":"2016-01-01 09:30:00","groupList":[{"num":"1","category":"生产组"},{"num":"1","category":"质量组"}]});
})

app.get(["/d2/task/edit/*","/edit"], function(req, res) {
  res.sendFile(__dirname + '/pages/editTask2.html')
})

app.get("/d2/*", function(req, res){
  res.send({"inspectionUnit":"哈尔滨制药六厂","source":"三科","leaderNum":"1","state":"变更中","bacteria":"1","executionTime":"2016-01-01 09:30:00","groupList":[{"num":"1","category":"生产组", "categoryTwo":"categoryTwo测试"},{"num":"1","category":"质量组"}]});
})


app.delete(["/d3/*"], function(req, res) {
  res.send({
    "message": "取消成功",
    "status": 1
  })
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
