(function(){
    let url = 'http://192.168.0.202:8008/api/yxAppVersion/app-url'
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        $('#android').attr('href',data.androidUrl)
        $('#ios').attr('href',data.iosUrl)
    })
})()