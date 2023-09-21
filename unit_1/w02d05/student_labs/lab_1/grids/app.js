const redSquare = () => {
    return {
        "background-color": "red",
        "height": "75px",
        "width": "75px",
        "display": "inline-block"
    }
}

const blackSquare = () => {
    return {
        "background-color": "black",
        "height": "75px",
        "width": "75px",
        "display": "inline-block"
    }
}





$(() => {
    const generateSquares = () => {
        
        for(let j = 1; j <= 8; j++){
            if(j % 2 !== 0){
                for(let i = 1; i <= 8; i++){
                    const $square = $('<div>').addClass('square')
                    
                    if(i % 2 !== 0) {
                        $($square).css(redSquare())
                    }
                    else {
                        $($square).css(blackSquare())
                    }
                    $('#container').append($square)
                }
            } else {
                for(let i = 1; i <= 8; i++){
                    const $square = $('<div>').addClass('square')
                    
                    if(i % 2 === 0) {
                        $($square).css(redSquare())
                    }
                    else {
                        $($square).css(blackSquare())
                    }
                    $('#container').append($square)
                }
            }
        }
        
    }

    generateSquares()



})