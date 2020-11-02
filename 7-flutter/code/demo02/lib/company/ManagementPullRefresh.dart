import 'dart:convert';

import 'package:demo02/provider/company_list.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';
import 'FirmModel.dart';
import 'FirmItem.dart';
import 'package:http/http.dart' as http;

// class ManagementPullRefresh extends StatefulWidget {
//   ManagementPullRefresh({Key key}) : super(key: key);

//   @override
//   _ManagementPullRefreshState createState() => _ManagementPullRefreshState();
// }

// class _ManagementPullRefreshState extends State<ManagementPullRefresh> {
//   List<FirmModel> _dataList = [];

//   RefreshController _refreshController =
//       RefreshController(initialRefresh: false);
//   int _currentPageIndex = 1;
//   final String url = 'http://m.app.haosou.com/index/getData?type=1&page=';

//   @override
//   void initState() {
//     super.initState();
//     initListData();
//   }

//   initListData() async {
//     try {
//       var listData = await fetPageData(_currentPageIndex);
//       setState(() {
//         _dataList = listData;
//       });
//       return 1;
//     } catch (err) {
//       return 0;
//     }
//   }

//   fetPageData(int pageIndex) async {
//     var response = await http.get(url + pageIndex.toString());
//     var data = response.body;
//     var json = jsonDecode(data);
//     return FirmModel.fromMapData(json);
//   }

//   Widget _buildContent() {
//     if (_dataList.isEmpty) {
//       return new Center(child: CircularProgressIndicator());
//     }

//     return SmartRefresher(
//       controller: _refreshController,
//       enablePullDown: true,
//       enablePullUp: true,
//       header: ClassicHeader(
//         refreshingText: '加载中...',
//         idleText: '下拉刷新',
//         completeText: '加载完成',
//         failedText: '数据刷新异常',
//         releaseText: '放开刷新',
//       ),
//       footer: ClassicFooter(
//         idleText: '加载更多数据',
//         loadingText: '玩命加载中...',
//         failedText: '数据刷新异常',
//         noDataText: '没有更多数据啦～～',
//       ),
//       onRefresh: _onRefresh,
//       onLoading: _onLoading,
//       child: ListView.builder(
//         itemCount: _dataList.length,
//         itemBuilder: (context, index) {
//           // return Text(_dataList[index].name);
//           return InkWell(
//             child: FirmItem(_dataList[index]),
//             onTap: () {},
//           );
//         },
//       ),
//     );
//   }

//   // 下拉刷新
//   _onRefresh() async {
//     _currentPageIndex = 1;
//     var res = await initListData();
//     if (res == 1) {
//       _refreshController.refreshCompleted();
//     } else {
//       _refreshController.refreshFailed();
//     }
//   }
//   // 上拉加载
//   _onLoading() async {
//     try {
//       List<FirmModel> listData = await fetPageData(_currentPageIndex + 1);
//       // 加载完成有数据
//       if (listData.isNotEmpty) {
//         setState(() {
//           _dataList.addAll(listData);
//           _refreshController.loadComplete();
//           _currentPageIndex++;
//         });
//       } else {
//         // 下一页数据为空
//         _refreshController.loadNoData();
//       }
//     } catch(err) {
//         _refreshController.loadFailed();
//     }
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Management'),
//       ),
//       // body: Center(child: Text('Management')),
//       body: _buildContent(),
//     );
//   }
// }

class ManagementPullRefresh extends StatefulWidget {
  ManagementPullRefresh({Key key}) : super(key: key);

  @override
  _ManagementPullRefreshState createState() => _ManagementPullRefreshState();
}

// 暗号： 江湖再见
class _ManagementPullRefreshState extends State<ManagementPullRefresh> {
  RefreshController _refreshController =
      RefreshController(initialRefresh: false);
  @override
  void initState() {
    super.initState();
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    provider.initListData();
  }

  Widget _buildContent() {
    return Consumer<CompanyListProvider>(builder: (context, provider, _) {
      return IndexedStack(
        index: provider.showValue,
        children: [
          Center(child: CircularProgressIndicator()),
          SmartRefresher(
            controller: _refreshController,
            enablePullDown: true,
            enablePullUp: true,
            header: ClassicHeader(
              refreshingText: '加载中...',
              idleText: '下拉刷新',
              completeText: '加载完成',
              failedText: '数据刷新异常',
              releaseText: '放开刷新',
            ),
            footer: ClassicFooter(
              idleText: '加载更多数据',
              loadingText: '玩命加载中...',
              failedText: '数据刷新异常',
              noDataText: '没有更多数据啦～～',
            ),
            onRefresh: _onRefresh,
            onLoading: _onLoading,
            child: ListView.builder(
              itemCount: provider.companyList.length,
              itemBuilder: (context, index) {
                var model = provider.companyList[index];
                return InkWell(
                  child: FirmItem(model),
                  onTap: () {},
                );
              },
            ),
          )
        ],
      );
    });
  }

  // // 下拉刷新
  _onRefresh() async {
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    var res = await provider.initListData();
    if (res == 1) {
      _refreshController.refreshCompleted();
    } else {
      _refreshController.refreshFailed();
    }
  }

  // // 上拉加载
  _onLoading() async {
    CompanyListProvider provider =
        Provider.of<CompanyListProvider>(context, listen: false);
    var listData = await provider.loadMoreData();
    if (listData.isNotEmpty) {
      _refreshController.loadComplete();
    } else {
      // 下一页数据为空
      _refreshController.loadNoData();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Management'),
      ),
      // body: Center(child: Text('Management')),
      body: _buildContent(),
    );
  }
}
