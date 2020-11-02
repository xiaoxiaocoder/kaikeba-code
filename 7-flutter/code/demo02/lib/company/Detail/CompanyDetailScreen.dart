import 'package:demo02/Application.dart';
import 'package:demo02/company/Detail/CompanyInfo.dart';
import 'package:demo02/company/Detail/DotsIndicator.dart';
import 'package:demo02/company/FirmModel.dart';
import 'package:flutter/material.dart';
// import 'package:shared_preferences/shared_preferences.dart';

class CompanyDetailScreen extends StatefulWidget {
  final FirmModel _model;

  CompanyDetailScreen(this._model);

  @override
  _CompanyDetailScreenState createState() => _CompanyDetailScreenState();
}

class _CompanyDetailScreenState extends State<CompanyDetailScreen>
    with TickerProviderStateMixin {
  // 存储小量数据
  // final Future<SharedPreferences> _preferences = SharedPreferences.getInstance();
  List<Widget> _imagesPages = [];
  List<String> _urls = [
    'https://img.bosszhipin.com/beijin/mcs/chatphoto/20170725/861159df793857d6cb984b52db4d4c9c.jpg',
    'https://img2.bosszhipin.com/mcs/chatphoto/20151215/a79ac724c2da2a66575dab35384d2d75532b24d64bc38c29402b4a6629fcefd6_s.jpg',
    'https://img.bosszhipin.com/beijin/mcs/chatphoto/20180207/c15c2fc01c7407b98faf4002e682676b.jpg'
  ];
  List<Tab> _tabs = [];
  TabController _tabController;
  VoidCallback onTapAction;
  int _tabActiveIndex = 0;
  String companyTabContent = '';
  final double _bannerHeight = 256.0;
  @override
  void initState() {
    super.initState();

    _urls.forEach((String url) {
      _imagesPages.add(Container(
        color: Colors.black,
        child: ConstrainedBox(
          constraints: BoxConstraints.expand(),
          child: Image.network(
            url,
            height: _bannerHeight,
            fit: BoxFit.cover,
          ),
        ),
      ));
    });

    _tabs = [
      Tab(
        text: '公司概况',
      ),
      Tab(text: '热招职位')
    ];
    _tabController = TabController(length: _tabs.length, vsync: this);
    // companyTabContent = widget._model.inc + lorem;
    onTapAction = () {
      setState(() {
        _tabActiveIndex = _tabController.index;
        // if (_tabActiveIndex == 0){
        //   companyTabContent = widget._model.inc;
        // } else {
        //   companyTabContent = widget._model.hot;
        // }
        // companyTabContent += lorem;
      });
    };
    _tabController.addListener(onTapAction);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   title: Text('Detail'),
      // ),
      // body: Text('test'),
      body: Stack(
        children: [
          SingleChildScrollView(
              child: Column(
            children: [
              SizedBox.fromSize(
                  size: Size.fromHeight(_bannerHeight),
                  child: IndicatorViewPager(pages: _imagesPages)),
              Container(
                  color: Colors.white,
                  child: Column(children: [
                    CompanyInfo(widget._model),
                    Divider(),
                    TabBar(
                      tabs: _tabs,
                      controller: _tabController,
                      labelColor: Colors.black,
                      labelStyle: TextStyle(fontSize: 16),
                      indicatorSize: TabBarIndicatorSize.tab,
                      indicatorWeight: 3,
                      indicatorColor: Colors.cyan,
                    )
                  ])),
              IndexedStack(
                index: _tabActiveIndex,
                children: [
                  Text(widget._model.inc + lorem),
                  // Text(widget._model.hot + lorem)
                  RichText(
                    text: new TextSpan(children: <TextSpan>[
                      TextSpan(
                          text: '敬请期待',
                          style:
                              TextStyle(fontSize: 16.0, color: Colors.black)),
                      TextSpan(
                          text: '敬请期待',
                          style:
                              TextStyle(fontSize: 26.0, color: Colors.black)),
                      TextSpan(
                          text: '敬请期待',
                          style: TextStyle(fontSize: 16.0, color: Colors.red)),
                    ]),
                  )
                ],
              ),
              // Text(companyTabContent)
            ],
          )),
          Positioned(
              // top: Application.screenHeight,
              top: 40,
              left: 10,
              child: BackButton(
                color: Colors.white,
              ))
        ],
      ),
    );
  }
}

// // 存储小量数据
// final Future<SharedPreferences> _preferences =
//     SharedPreferences.getInstance();
// String text = '';
// @override
// void initState() {
//   // TODO: implement initState
//   super.initState();
//   saveData();
//   getData();
// }
// void saveData() async {
//   final SharedPreferences instance = await _preferences;
//   instance.setString('testKey', 'store data');
// }

// void getData() async {
//   final SharedPreferences instance = await _preferences;
//   String data = instance.getString('testKey');
//   text = data;
//   print(data);
// }

const String lorem =
    '''\nLorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit in aut, tempore mollitia minus, debitis animi, ratione nihil adipisci corrupti officia incidunt provident. Animi exercitationem veritatis suscipit maxime optio.''';
