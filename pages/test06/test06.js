Page({ 
  getPhoneNumber: function(e) { 
      console.log(e.detail.errMsg) 
      console.log(e.detail.iv) 
      console.log(e.detail.encryptedData) 
  } 
})