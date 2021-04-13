let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response)
            console.log(request.response)
            // const object = JSON.parse(request.response)
            // console.log(object)
            const bool = JSON.parse(request.response)
            console.log(typeof bool)
            console.log(bool)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            // console.log(request.responseXML)
            console.log(text.trim())  //trim去掉回车 
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html");
    request.onload = () => {
        // 创建div标签
        const div = document.createElement("div")
        // 填写div内容
        div.innerHTML = request.response
        // 插入到body
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        // 创建script标签
        const script = document.createElement('script')
        // 填写script内容
        script.innerHTML = request.response
        //插入body
        document.body.appendChild(script)
    }
    request.onerror = () => { }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')  // readyState = 1
    // request.onload = () => {
    //     console.log('request.response')
    //     console.log(request.response)
    // console.log('加载成功')
    request.onreadystatechange = () => {
        console.log(request.readyState);
        // 下载完成，成功2xx 失败4xx 5xx
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 创建style标签
                const style = document.createElement('style')
                //填写style内容
                style.innerHTML = request.response
                //插入head
                document.head.appendChild(style)
            } else {
                alert("加载CSS失败")
            }
            // request.onerror = () => {
            //     console.log('加载失败')
            // }
        }
    }
    request.send() // readyState = 2
}