$(() => {

    const triangleFunc = (rows) => {
        for(let i = 1; i <= rows; i++){
            $('<div>').addClass('row').attr('id', 'container' + i).appendTo('body')
            for(let j = 1; j <= i; j++){
                const $triangle = $('<div>').addClass('triangle')
                $('#container' + i).append($triangle)
            }
        }
    }

    triangleFunc(16)

})