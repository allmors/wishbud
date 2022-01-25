(function(){
    let url = 'http://106.52.45.55:8008/api/yxAppVersion/app-url'
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data)
        $('#android').attr('href',data.androidUrl)
        $('#ios').attr('href',data.iosUrl)
    })
})()