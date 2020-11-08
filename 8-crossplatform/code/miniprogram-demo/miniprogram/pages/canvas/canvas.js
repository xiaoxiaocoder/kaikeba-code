// miniprogram/pages/canvers.js


// const image = require('../../images/code-cloud-callback-config.png')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canvas: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initCanvas();
    // this.generateQRCode()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  initCanvas() {
    const query = wx.createSelectorQuery();
    query.select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(res => {

        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const dpr = wx.getSystemInfoSync().pixelRatio;
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, 300, 300)

        this.generateQRCode(ctx, canvas)
      })
  },
  generateQRCode(ctx, canvas) {
    wx.cloud.callFunction({
      name: 'getqrcode',
      data: {
        scene: 'a=1'
      },
      success: res => {
        console.log('callFunction success', res);

        let image = canvas.createImage();
        image.src = "data:image/jpg;base64," + wx.arrayBufferToBase64(res.result.buffer);

        image.onload = res => {
          console.log(res)
          ctx.drawImage(image, 0, 0, 100, 100);
          this.canvas = canvas;
        }
      },
      fail: err => {
        console.log('callFunction fail', err)
      },
      complete: (val) => {
        console.log('callFunction complete', val)
      }
    })
  },
  setSavePhotosAlbumPermission: () => {
    wx.openSetting({
      success(settingdata) {
        console.log("settingdata", settingdata)
        // scope. address /invoice / invoiceTitle / writePhotosAlbum
        const saveAlbumpermission = settingdata.authSetting['scope.writePhotosAlbum'];
        wx.showModal({
          content: saveAlbumpermission ? '获取权限成功,再次点击图片即~可保存' : '获取权限失败，将无法保存到相册哦~',
          showCancel: false,
        })
      },
      fail(failData) {
        console.log("failData", failData)
      },
      complete(finishData) {
        console.log("finishData", finishData)
      }
    })
  },
  // 暗号： talk is cheap
  saveToPhotosAlbum() {
    wx.canvasToTempFilePath({
      canvas: this.canvas,
      success: res => {
        console.log('canvasToTempFilePath', res)
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            wx.showModal({
              content: 'save successfully!',
            })
          },
          fail(res) {
            wx.showToast({
              title: '请先点击获取保存到相册权限按钮',
              icon: 'none'
            })
          }
        })
      }
    })
  }
})