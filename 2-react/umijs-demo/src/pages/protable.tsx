import React, { useState, useEffect, useRef, useMemo } from 'react';
import ProTable, { ActionType } from '@ant-design/pro-table';
import Axios from 'axios'

// 暗号: 中非
export default () => {
  const [data, setData] = useState<Array<{[key: string]: any}>>([])
  const [searchParams, setParams] = useState<{[key: string]: any}>({})
  const ref = useRef<ActionType>();
  useEffect(() => {
    Axios.get('https://randomuser.me/api/?seed=foobar&results=50&inc=name,dob,location,email&noinfo')
    .then(res => {
      const tbData = res.data.results;
      setData(tbData);
      ref.current?.reloadAndRest()
    })
  }, [])

  let listData = useMemo(() => {
    let _data = [...data]
    Object.keys(searchParams).forEach(key => {
      const searchVal = searchParams[key]
      if (key === 'dob') {
        _data = _data.filter(item => item.dob.age == searchVal)
      }
    })
    return _data
  }, [searchParams, data])
  return (
    <>
      <ProTable
        actionRef={ref}
        onSubmit={params => setParams(params)}
        columns={[
          {
            title: '姓名',
            dataIndex: 'name',
            renderText: (text) => {
              return Object.values(text).join(' ')
            },
            width: 150,
          },
          {
            title: '年龄',
            dataIndex: 'dob',
            renderText: ({age}) => {
              return age
            },
            width: 150,
          },
          {
            title: '住址',
            dataIndex: 'location',
            renderText: ({country, state, city}) => {
              return `${city} ${state} ${country}`
            },
            width: 150,
          },
          {
            title: '邮箱',
            width: 120,
            dataIndex: 'email'
          },
        ]}
        request={() => Promise.resolve({ total: listData.length, data: listData, success: true})
        }
        options={false}
        rowKey="key"
      />
    </>
  )
};

/*
TODO: fix

devScripts.js:5836 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Body`. See https://fb.me/react-warning-keys for more information.
    in BodyRow (created by Body)
    in Body (created by Table)
    in table (created by Table)
    in div (created by Table)
    in div (created by Table)
    in Unknown
    in Unknown (created by Table)
    in div (created by Table)
    in Table (created by Table)
    in div (created by Context.Consumer)
    in div (created by Context.Consumer)
    in Spin (created by Table)
    in div (created by Table)
    in Table (created by ProTable)
    in div (created by Card)
    in div (created by Card)
    in Card (created by ProTable)
    in div (created by ProTable)
    in LocaleProvider (created by Context.Consumer)
    in SizeContextProvider (created by Context.Consumer)
    in LocaleReceiver (created by ConfigProvider)
    in ConfigProvider (created by ProTable)
    in ProTable (created by Context.Consumer)
    in ErrorBoundary (created by Context.Consumer)
    in Provider (created by ProviderWarp)
    in ProviderWarp (at protable.tsx:31)
    in Unknown (created by Context.Consumer)
    in Route (created by Context.Consumer)
    in Switch (created by Context.Consumer)
    in div (at layouts/index.js:12)
    in index (created by Context.Consumer)
    in Route (created by Context.Consumer)
    in Switch (created by Context.Consumer)
    in WithExceptionOpChildren (created by BasicLayout)
    in ErrorBoundary (created by BasicLayout)
    in main (created by Basic)
    in Basic (created by Context.Consumer)
    in Content (created by WrapContent)
    in WrapContent (created by BasicLayout)
    in section (created by Context.Consumer)
    in BasicLayout (created by Context.Consumer)
    in Layout (created by BasicLayout)
    in section (created by Context.Consumer)
    in BasicLayout (created by Context.Consumer)
    in Layout (created by BasicLayout)
    in div (created by BasicLayout)
    in Provider (created by BasicLayout)
    in BasicLayout (created by BasicLayout)
    in BasicLayout
    in Unknown (created by Context.Consumer)
    in Route (created by RouterComponent)
    in Switch (created by RouterComponent)
    in Router (created by RouterComponent)
    in RouterComponent
    in Unknown
    in Unknown


*/
