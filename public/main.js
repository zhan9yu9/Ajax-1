const request = new XMLHttpRequest()

getCSS.onclick = () =>{
    request.open('GET','/style.css');
    request,onload = () =>{
        console.log('成功了')
    };
    request.onerror = () =>{
        console .logo('失败了')
    };
    request.send();
}
