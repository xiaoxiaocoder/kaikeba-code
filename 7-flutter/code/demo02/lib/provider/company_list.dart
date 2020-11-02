import 'package:demo02/company/FirmModel.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
// 暗号： 江湖再见
class CompanyListProvider with ChangeNotifier {
  List<FirmModel> _companyList = new List();
  int _currentPage = 1;
  int _showValue = 0;

  // 获取list数据
  List<FirmModel> get companyList => _companyList;

  // 获取获取页数
  int get currentPage => _currentPage;

  // 获取显示状态
  int get showValue => _showValue;
  final String url = 'http://m.app.haosou.com/index/getData?type=1&page=';

  set companyList(List<FirmModel> companyList) {
    _companyList = companyList;
    notifyListeners();
  }


  initListData() async {
    try {
      var listData = await fetPageData(_currentPage);
      _companyList = listData;
      notifyListeners();
      return 1;
    } catch (err) {
      return 0;
    }
  }

  fetPageData(int pageIndex) async {
    var response = await http.get(url + pageIndex.toString());
    var data = response.body;
    var json = jsonDecode(data);
    _showValue = 1;
    return FirmModel.fromMapData(json);
  }

  // 上拉加载
  loadMoreData() async {
    try {
      List<FirmModel> listData = await fetPageData(_currentPage + 1);
      // 加载完成有数据
      if (listData.isNotEmpty) {
        _companyList.addAll(listData);
        _currentPage++;
        notifyListeners();
        return listData;
      } else {
        // 下一页数据为空
        return [];
      }
    } catch (err) {
       return null;
    }
  }
}
