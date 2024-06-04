document.addEventListener('DOMContentLoaded', () => {

    canvas = document.getElementById('c')
    if (!canvas.getContext) {
        throw new Error('Brak f. "GetContext"!')
    }
    c = canvas.getContext('2d')


    // c.fillRect(x,y,w,h)
    // c.strokeRect(x,y,w,h)
    // c.clearRect(x,y,w,h)
    c.fillStyle = '#444'
    c.fillRect(50,50,100,100)
    c.strokeStyle = '#a00'
    c.strokeRect(50,200,100,100)
    c.clearRect(70,70,60,60)

    // c.lineTo(x,y)
    // c.moveTo(x,y)
    c.beginPath()
    c.moveTo(200,200)
    c.lineTo(250,330)
    c.lineTo(350,250)
    c.stroke()
    c.fill()
    c.closePath()

    c.beginPath()
    c.moveTo(100,210)
    c.lineTo(140,290)
    c.lineTo(60,290)
    c.closePath()
    c.strokeStyle = '#0a0'
    c.stroke()

    // c.arc(x,y,r,s,e,*c)
    c.beginPath()
    c.moveTo(200,100)
    c.arc(200,100,25,0,Math.PI*0.5)
    c.fill()
    
    c.moveTo(275,100)
    c.arc(275,100,25,0,Math.PI)
    c.fill()
    
    c.moveTo(350,100)
    c.arc(350,100,25,0,Math.PI*1.5)
    c.fill()
    
    c.moveTo(425,100)
    c.arc(425,100,25,0,Math.PI*2)
    c.fill()
    
    c.stroke()
    c.closePath()

    // c.fillText('text',x,y)
    c.font = '28px Courier'
    c.fillText('Fill Text',400,200)
    c.strokeText('Stroke Text',400,300)
    
})