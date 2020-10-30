import 'dart:convert';
import 'dart:io';

import 'package:flutter/material.dart';
import 'FirmModel.dart';
import 'FirmItem.dart';
import 'package:http/http.dart' as http;

class Management extends StatefulWidget {
  Management({Key key}) : super(key: key);

  @override
  _ManagementState createState() => _ManagementState();
}

class _ManagementState extends State<Management> {

  List<FirmModel> _dataList = [];
  ScrollController _scrollController = ScrollController();
  final String url = 'http://m.app.haosou.com/index/getData?type=1&page=1';

  @override
  void initState() { 
    super.initState();
    httpFetchData();

    // 初始化时候， 添加滚动监听器
    _scrollController.addListener(() {
      // 滚动到最底部
      if(_scrollController.position.pixels == _scrollController.position.maxScrollExtent) {
        print('滚到最底部了');
      }
    });
  }

  ///flutter 原生请求
  fetchData() async{
    HttpClient httpClient = new HttpClient();
    HttpClientRequest request = await httpClient.getUrl(Uri.parse(url));
    HttpClientResponse response = await request.close();
    var data = await response.transform(utf8.decoder).join();
    print(data);
    httpClient.close();
  }

  httpFetchData() async {
    var response = await http.get(url);
    var data = response.body;
    var json = jsonDecode(data);
    setState(() {
      _dataList = FirmModel.fromMapData(json);
    });
  }

  Widget _buildContent() {
    if(_dataList.isEmpty) {
      return new Center(child: CircularProgressIndicator());
    } 

    return RefreshIndicator(
      child: ListView.builder(
        controller: _scrollController,
        itemCount: _dataList.length,
        itemBuilder: (context, index) {
          // return Text(_dataList[index].name);
          return InkWell(
            child: FirmItem(_dataList[index]),
            onTap: () {
             
            },
          );
        },
      ),
      onRefresh: _onRefresh,
    );
  }

  Future<void> _onRefresh() async{
    await Future.delayed(Duration(seconds: 2), () {
        print('onRefresh');
    });
  }
  @override
  Widget build(BuildContext context) {
    return  Scaffold(
      appBar: AppBar(
        title: Text('Management'),
      ),
      // body: Center(child: Text('Management')),
      body: _buildContent(),
    );
  }
}

