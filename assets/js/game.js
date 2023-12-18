function handleFormSubmit() {
    // 获取表单元素
    var metroLine = document.getElementById("metro-line").value;//捷運線
    var foodType = document.getElementById("food-type").value;//類型
    var flavor = document.getElementById("flavor").value;//口味
    var price = document.getElementById("price-range").value;//價格
    var people = document.getElementById("dining-number").value;//人數
    var distance = document.getElementById("distance").value;//距離
    var answer = '1';
    var mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.738318377972!2d121.45552867177595!3d25.009006339304232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9cab6d91907%3A0x5bdf253a6e7b1186!2z6YKj6KOh55qE5ZKW5ZWh5bqX!5e0!3m2!1szh-TW!2stw!4v1702717629432!5m2!1szh-TW!2stw";

    

    if (metroLine === 'blue') { //Blue
        if(foodType === 'breakfast') {
            if (flavor === 'tw') {
                if(price==='cheap'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0054326782765!2d121.54224770000002!3d25.033889700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd4869e38cd%3A0x6d4bc259297dce89!2zTmlIYW8gQ2FmZSBIb3RlbCDkvaDlpb3lkpbllaHml4XppKg!5e0!3m2!1szh-TW!2stw!4v1701616323376!5m2!1szh-TW!2stw" 
                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2452862664436!2d121.5450825!3d25.025748600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2c29a642f9%3A0x8937c526d80c95d3!2z5ZKM5bmz6aOf5YWJIOaXqeWNiOmkkCBDb2ZmZWUmQnJ1bmNo!5e0!3m2!1szh-TW!2stw!4v1701614981504!5m2!1szh-TW!2stw" 
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
                        }
                    }
    
                }else if(price==='one'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.3429918074926!2d121.52766563585952!3d25.028803796782427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a984bdde4e53%3A0x8ddf8006486053b2!2zRGF5bGlnaHTlhYnlkIjnrrHlrZAg5p2x6ZaA5bqX!5e0!3m2!1szh-TW!2stw!4v1701570594800!5m2!1szh-TW!2stw" 
                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
                        }else{//15min

                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
                        }
                    }
                }else if(price==='three'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.989997951478!2d121.52839000000003!3d25.034413500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982873b0c97%3A0x45987fd71754807!2sLabu%20Cafe!5e0!3m2!1szh-TW!2stw!4v1701608431756!5m2!1szh-TW!2stw"
                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6679538278186!2d121.51616039999999!3d25.04534020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98ab23013e1%3A0x1c8ec0e9b5506a9d!2zYmVzdOe-qXBhc3Rh6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1701430033959!5m2!1szh-TW!2stw"
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.989997951478!2d121.52839000000003!3d25.034413500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982873b0c97%3A0x45987fd71754807!2sLabu%20Cafe!5e0!3m2!1szh-TW!2stw!4v1701608431756!5m2!1szh-TW!2stw"
                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6679538278186!2d121.51616039999999!3d25.04534020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98ab23013e1%3A0x1c8ec0e9b5506a9d!2zYmVzdOe-qXBhc3Rh6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1701430033959!5m2!1szh-TW!2stw"
                        }
                    }
                }else if(price==='five'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
                        }else{//15min

                        }
                    }
                }else if(price==='seven'){
                    if(people==='small'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.989997951478!2d121.52839000000003!3d25.034413500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982873b0c97%3A0x45987fd71754807!2sLabu%20Cafe!5e0!3m2!1szh-TW!2stw!4v1701608431756!5m2!1szh-TW!2stw"
                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){

                        }else{//15min
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
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
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.3429918074926!2d121.52766563585952!3d25.028803796782427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a984bdde4e53%3A0x8ddf8006486053b2!2zRGF5bGlnaHTlhYnlkIjnrrHlrZAg5p2x6ZaA5bqX!5e0!3m2!1szh-TW!2stw!4v1701570594800!5m2!1szh-TW!2stw" 
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
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
                        }else{//15min

                        }
                    }else if(people==='mediumn'){
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
                        }
                    }else{//large
                        if(distance==='5min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
                        }else if(distance==='10min'){
                            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
                        }else{//15min
mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
                        }
                    }
                }
            }else if (flavor === 'usa') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
            } else if (flavor === 'kor') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.3429918074926!2d121.52766563585952!3d25.028803796782427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a984bdde4e53%3A0x8ddf8006486053b2!2zRGF5bGlnaHTlhYnlkIjnrrHlrZAg5p2x6ZaA5bqX!5e0!3m2!1szh-TW!2stw!4v1701570594800!5m2!1szh-TW!2stw" 
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6679538278186!2d121.51616039999999!3d25.04534020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98ab23013e1%3A0x1c8ec0e9b5506a9d!2zYmVzdOe-qXBhc3Rh6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1701430033959!5m2!1szh-TW!2stw"
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
            }else { // nonr
                
            }
        }else if (foodType === 'brunch') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6679538278186!2d121.51616039999999!3d25.04534020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98ab23013e1%3A0x1c8ec0e9b5506a9d!2zYmVzdOe-qXBhc3Rh6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1701430033959!5m2!1szh-TW!2stw"
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                
            }else if (flavor === 'tai') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
            }else { // nonr
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
            }
        }else if (foodType === 'lunch') {
            if (flavor === 'tw') {
        
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0054326782765!2d121.54224770000002!3d25.033889700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd4869e38cd%3A0x6d4bc259297dce89!2zTmlIYW8gQ2FmZSBIb3RlbCDkvaDlpb3lkpbllaHml4XppKg!5e0!3m2!1szh-TW!2stw!4v1701616323376!5m2!1szh-TW!2stw" 
 
            }else if (flavor === 'tai') {
                
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.0054326782765!2d121.54224770000002!3d25.033889700000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd4869e38cd%3A0x6d4bc259297dce89!2zTmlIYW8gQ2FmZSBIb3RlbCDkvaDlpb3lkpbllaHml4XppKg!5e0!3m2!1szh-TW!2stw!4v1701616323376!5m2!1szh-TW!2stw" 

            }else { // nonr
                
            }
        }else if (foodType === 'dinner') {
            if (flavor === 'tw') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
            }else if (flavor === 'usa') {
                
            } else if (flavor === 'kor') {
                mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6679538278186!2d121.51616039999999!3d25.04534020000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98ab23013e1%3A0x1c8ec0e9b5506a9d!2zYmVzdOe-qXBhc3Rh6aOf5aCC!5e0!3m2!1szh-TW!2stw!4v1701430033959!5m2!1szh-TW!2stw"

            }else if (flavor === 'tai') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.3429918074926!2d121.52766563585952!3d25.028803796782427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a984bdde4e53%3A0x8ddf8006486053b2!2zRGF5bGlnaHTlhYnlkIjnrrHlrZAg5p2x6ZaA5bqX!5e0!3m2!1szh-TW!2stw!4v1701570594800!5m2!1szh-TW!2stw" 
            }else { // nonr
                
            }
        }else if (foodType === 'cafe') {
            if (flavor === 'tw') {
        mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.485955091509!2d121.52163630000001!3d25.051513300000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96ec662c391%3A0x912bf60aca221f22!2z56aP5aSn6JK46aSD6aSo!5e0!3m2!1szh-TW!2stw!4v1701622142213!5m2!1szh-TW!2stw" 
            }else if (flavor === 'usa') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2452862664436!2d121.5450825!3d25.025748600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2c29a642f9%3A0x8937c526d80c95d3!2z5ZKM5bmz6aOf5YWJIOaXqeWNiOmkkCBDb2ZmZWUmQnJ1bmNo!5e0!3m2!1szh-TW!2stw!4v1701614981504!5m2!1szh-TW!2stw" 
            } else if (flavor === 'kor') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
            }else if (flavor === 'jap') {
                
            }else if (flavor === 'other') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
            }else if (flavor === 'tai') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.059817202813!2d121.52928679999998!3d25.032044000000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9824d44bc89%3A0x5589f3f9bd97939c!2zUmljZSBDYWZlIOadk-aWh-Wtlw!5e0!3m2!1szh-TW!2stw!4v1701607582355!5m2!1szh-TW!2stw" 
  
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2452862664436!2d121.5450825!3d25.025748600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2c29a642f9%3A0x8937c526d80c95d3!2z5ZKM5bmz6aOf5YWJIOaXqeWNiOmkkCBDb2ZmZWUmQnJ1bmNo!5e0!3m2!1szh-TW!2stw!4v1701614981504!5m2!1szh-TW!2stw" 
            }else { // nonr
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
            }
        }else{ //snacks
            if (flavor === 'tw') {
        mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
            }else if (flavor === 'usa') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
            } else if (flavor === 'kor') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2452862664436!2d121.5450825!3d25.025748600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2c29a642f9%3A0x8937c526d80c95d3!2z5ZKM5bmz6aOf5YWJIOaXqeWNiOmkkCBDb2ZmZWUmQnJ1bmNo!5e0!3m2!1szh-TW!2stw!4v1701614981504!5m2!1szh-TW!2stw" 
            }else if (flavor === 'jap') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
            }else if (flavor === 'other') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
            }else if (flavor === 'tai') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2148.3429918074926!2d121.52766563585952!3d25.028803796782427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a984bdde4e53%3A0x8ddf8006486053b2!2zRGF5bGlnaHTlhYnlkIjnrrHlrZAg5p2x6ZaA5bqX!5e0!3m2!1szh-TW!2stw!4v1701570594800!5m2!1szh-TW!2stw" 
            }else if (flavor === 'french') {
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
            }else { // nonr
                mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
            }
        }



        
    } else if (metroLine === 'orange') { // 如果 metroLine 是 'orange'
        mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.1369383203505!2d121.53174569999999!3d25.063347399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a959824ff5c1%3A0x4b107149e69ec514!2z5Zac5aSa5aOr5pep6aSQ5bqX!5e0!3m2!1szh-TW!2stw!4v1701610280445!5m2!1szh-TW!2stw" 
    } else if (metroLine === 'red') {    // 如果 metroLine 是 'red'
        if(distance==='5min'){
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14461.330340730305!2d121.51414266981374!3d25.022784888913797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99034740ab3%3A0xb15b21b98619225c!2zTWlTVEEgSG91c2Ug54SX54Ok5bqX772c5bqX5LyR5bCH5YWs5ZGK5pa8RkLkuIo!5e0!3m2!1szh-TW!2stw!4v1702721072630!5m2!1szh-TW!2stw"
        }else if(distance==='10min'){
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.989997951478!2d121.52839000000003!3d25.034413500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a982873b0c97%3A0x45987fd71754807!2sLabu%20Cafe!5e0!3m2!1szh-TW!2stw!4v1701608431756!5m2!1szh-TW!2stw"
        }else{//15min
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14458.2123145094!2d121.509745271079!3d25.049236744895197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96e76e163cb%3A0x92410330a8d40161!2z5Zau55y855qu5Y-M55y855qu5pep6aSQ6LyV6aOfMuW6lw!5e0!3m2!1szh-TW!2stw!4v1701427814147!5m2!1szh-TW!2stw"
    
        }


        } else if (metroLine === 'brown') {  // 如果 metroLine 是 'brown'
        if (flavor === 'tw') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.715037179985!2d121.54001047647922!3d25.043742977810073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba6c71c55db%3A0x5aaac4a5e0f3d72e!2z5ZCQ5Y-45b6I6YeN6KaBLUhFQVZZ4oCiVE9BU1Qt!5e0!3m2!1szh-TW!2stw!4v1701450286180!5m2!1szh-TW!2stw"
        }else if (flavor === 'usa') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
        } else if (flavor === 'kor') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2452862664436!2d121.5450825!3d25.025748600000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2c29a642f9%3A0x8937c526d80c95d3!2z5ZKM5bmz6aOf5YWJIOaXqeWNiOmkkCBDb2ZmZWUmQnJ1bmNo!5e0!3m2!1szh-TW!2stw!4v1701614981504!5m2!1szh-TW!2stw" 
        }else if (flavor === 'jap') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.715037179985!2d121.54001047647922!3d25.043742977810073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba6c71c55db%3A0x5aaac4a5e0f3d72e!2z5ZCQ5Y-45b6I6YeN6KaBLUhFQVZZ4oCiVE9BU1Qt!5e0!3m2!1szh-TW!2stw!4v1701450286180!5m2!1szh-TW!2stw"
        }else if (flavor === 'other') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
        }else if (flavor === 'tai') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.751296489138!2d121.53721377647906!3d25.04251287781078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abd78201c579%3A0xe5eb00aaaa00114f!2z6auY5a625ra86bq1!5e0!3m2!1szh-TW!2stw!4v1701450112394!5m2!1szh-TW!2stw"
        }else if (flavor === 'french') {
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.715037179985!2d121.54001047647922!3d25.043742977810073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aba6c71c55db%3A0x5aaac4a5e0f3d72e!2z5ZCQ5Y-45b6I6YeN6KaBLUhFQVZZ4oCiVE9BU1Qt!5e0!3m2!1szh-TW!2stw!4v1701450286180!5m2!1szh-TW!2stw"
        }else { // nonr
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.573477266148!2d121.46171737177633!3d25.014605139079002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a98734afd777%3A0xa982d28d77adb9e5!2z5aSn6Ziq546L5bCHLeadv-api-eSsOeQg-W6lw!5e0!3m2!1szh-TW!2stw!4v1702717942922!5m2!1szh-TW!2stw" 
        }
    } else if (metroLine === 'green') {  // 如果 metroLine 是 'green'
        if (foodType === 'cafe'){
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.485955091509!2d121.52163630000001!3d25.051513300000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96ec662c391%3A0x912bf60aca221f22!2z56aP5aSn6JK46aSD6aSo!5e0!3m2!1szh-TW!2stw!4v1701622142213!5m2!1szh-TW!2stw" 
        
        }else{
            mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.333335813627!2d121.52618490000003!3d25.05668880000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a95d5780b257%3A0xd0fbc6aa6084dd39!2z5rKS5LqLJyfml6nkuosnJ-WdkA!5e0!3m2!1szh-TW!2stw!4v1701621596030!5m2!1szh-TW!2stw" 
        }
        } else {  // 如果 metroLine 不是 'blue' 也不是 'red'
        mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.258656482581!2d121.52008119999996!3d25.05922090000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a96bd6f4e66d%3A0x56b8b56b6602e129!2z5p6c5piC55Sc5ZOBaWxsdW1pbsOp!5e0!3m2!1szh-TW!2stw!4v1701622847301!5m2!1szh-TW!2stw" 
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