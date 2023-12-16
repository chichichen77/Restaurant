function handleFormSubmit() {
    // 获取表单元素
    var metroLine = document.getElementById("metro-line").value;//捷運線
    var foodType = document.getElementById("food-type").value;//類型
    var flavor = document.getElementById("flavor").value;//口味
    var price = document.getElementById("price-range").value;//價格
    var people = document.getElementById("dining-number").value;//人數
    var distance = document.getElementById("distance").value;//距離
    var answer = '1';
    var mapUrl = 'https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=PlaceName';

    

    if (metroLine === 'blue') { //Blue
        if(foodType === 'breakfast') {
            if (flavor === 'tw') {
                if(price==='cheap'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
    
                }else if(price==='one'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }else if(price==='three'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }else if(price==='five'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }else if(price==='seven'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }else if(price==='thousand'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }else{
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min

                        }
                    }
                }
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }else if (foodType === 'brunch') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }else if (foodType === 'lunch') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }else if (foodType === 'dinner') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }else if (foodType === 'cafe') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }else{ //snacks
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                
            }else { // nonr
                
            }
        }



        
    } else if (metroLine === 'orange') { // 如果 metroLine 是 'orange'
        
    } else if (metroLine === 'red') {    // 如果 metroLine 是 'red'
        
    } else if (metroLine === 'brown') {  // 如果 metroLine 是 'brown'
        
    } else if (metroLine === 'green') {  // 如果 metroLine 是 'green'
        
    } else {  // 如果 metroLine 不是 'blue' 也不是 'red'
        
    }

    // 創建顯示結果的字符串
    var resultString = "您選擇的捷運線是：" + metroLine + "\n";
    resultString += "您選擇的美食類型是：" + foodType + "\n";
    resultString += "您選擇的美食口味是：" + flavor + "\n";
    resultString += "您選擇的用餐價格是：" + price + "\n";
    resultString += "您選擇的用餐人數是：" + people + "\n";
    resultString += "您選擇的可接受距離是：" + distance + "\n";
    // ... 添加其他表單數據到結果字符串

    // 顯示結果
    alert(resultString);


    // console.log('Selected Metro Line:', metroLine);
    // console.log('Selected Food Type:', foodType);
    // 其他操作...

    // 防止表单实际提交（如果不需要发送到服务器）
    googleMap.src = mapUrl;

    // 显示地图容器
    mapContainer.style.display = 'block';

    return false;
}

// 如果您想在页面加载时添加额外的逻辑，可以使用window.onload
window.onload = function() {
    // 初始化代码或事件绑定
};