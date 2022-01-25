(function(){
    let url = 'http://www.wishbud.cn/api/yxAppVersion/app-url'
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        $('#android').attr('href',data.androidUrl)
        $('#ios').attr('href',data.iosUrl)
    })
})()