            const btn=document.querySelector('.talk')
                    const content=document.getElementById('cont')
                     
                    const greeting=['Hello Im Portfolio Website of Mr. Atul Jha']
                    const weather=[
                        'Its bit hot outside'
                    ]
                    const intro=['Atul Jha is currently a student pursuing Bachelors from Chandigarh University']
                    const resume=['Opening Resume']
                    const projects=['Currently I does not have very attractive projects but I am exploring my knowledge and soon will develop a better project']
                     
                    const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
                    const recognition = new SpeechRecognition()
                    recognition.onstart=()=>{
                    console.log(' voice is activated ')
                    }
                    recognition.onresult=(event)=>{
                    const current=event.resultIndex
                    const transcript=  event.results[current][0].transcript
                     content.innerHTML= transcript
                    readOutLoud(transcript)
                    }
                    btn.addEventListener('click',()=>{
                        recognition.start()
                    })
                    function readOutLoud(message){
                        const speech= new SpeechSynthesisUtterance()
                        speech.text='shhhh '
                        
                        if(message.includes('how are you')||message.includes('hello')){
                            const finalText =greeting[Math.floor(Math.random()*greeting.length)]
                              speech.text=finalText
                          }
                        speech.volume=1
                        speech.rate=1
                        if(message.includes('what is current weather')||message.includes('what is weather')){
                            const finalText =weather[Math.floor(Math.random()*weather.length)]
                              speech.text=finalText
                          }
                        speech.volume=1
                        speech.rate=1

                        if(message.includes('who is Atul')||message.includes('about him')){
                            const finalText =intro[Math.floor(Math.random()*intro.length)]
                              speech.text=finalText
                          }
                        speech.volume=1
                        speech.rate=1

                        if(message.includes('resume')||message.includes('resume of atul')){
                            window.open("https://atul240202.github.io/pdf/Resume.pdf");
                            const finalText =resume[Math.floor(Math.random()*resume.length)]
                              speech.text=finalText

                          }
                        speech.volume=1
                        speech.rate=1

                        if(message.includes('projects')||message.includes('show me projects')||message.includes('project')){
                            const finalText =projects[Math.floor(Math.random()*projects.length)]
                              speech.text=finalText
                            location.href = "#work"
                          }
                        speech.volume=1
                        speech.rate=1

                        window.speechSynthesis.speak(speech)
                    
                    }
