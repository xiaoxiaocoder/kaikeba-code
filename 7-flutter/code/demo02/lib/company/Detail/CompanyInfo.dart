import 'package:demo02/company/FirmModel.dart';
import 'package:flutter/material.dart';

class CompanyInfo extends StatelessWidget {
  final FirmModel _model;

  CompanyInfo(this._model);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(10),
      child: Card(
        elevation: 0,
        child: Row(children: [
          Padding(
            padding: EdgeInsets.fromLTRB(15, 10, 15, 0),
            child: Image.network(_model.logo, width: 50, height: 50,),
          ),
          new Expanded(
                child: new Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisSize: MainAxisSize.min,
                    children: <Widget>[
                  new Container(
                    child: new Text(
                      _model.name,
                      textAlign: TextAlign.left,
                      style: TextStyle(fontSize: 15.0),
                    ),
                    margin: const EdgeInsets.only(top: 10.0, bottom: 5.0),
                  ),
                  new Padding(
                    padding: const EdgeInsets.only(
                        top: 5.0, left: 0.0, right: 5.0, bottom: 5.0),
                    child: new Text(
                      _model.location,
                      style: TextStyle(fontSize: 13.0, color: Colors.grey),
                    ),
                  ),
                  new Padding(
                      padding: const EdgeInsets.only(
                          top: 5.0, left: 0.0, right: 5.0, bottom: 5.0),
                      child: new Text(
                        _model.type +
                            ' | ' +
                            _model.size +
                            ' | ' +
                            _model.employee,
                        style: TextStyle(fontSize: 13.0, color: Colors.grey),
                      ))
                ]))
        ],),
      ),
    );
  }
}

