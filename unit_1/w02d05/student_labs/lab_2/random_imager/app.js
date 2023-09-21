const urls = [
    'https://static-cse.canva.com/blob/945517/1600w-QZiqeDqC-q4.jpg',
    'https://static-cse.canva.com/blob/945511/1600w-yO8qYt6SRX8.jpg',
    'https://www.bu.edu/files/2020/12/leadin-GUY-oakImage-1602708707115-blog480.jpg',
    'https://www.rd.com/wp-content/uploads/2021/08/fall-memes-ft-1.jpg',
    'https://cdn.acidcow.com/pics/20211003/1633271900_i4igegifen.jpg',
    'https://assets.vogue.com/photos/58913e0123f9887c0e0dfcc5/master/w_2560%2Cc_limit/00-holding2.jpg'
]

const addRandomImg = (url) => {
    const $randomImg = $('<div>').addClass('square').css({
        'background-image' : `url(${url})`,
        'color': 'white',
        'text-align': 'center',
        'cursor': 'pointer'
    }).appendTo(".container")

    $randomImg.on('click', (e) => {
        removeImg(e)
    })
}

const randomIndex = () => {
    return Math.floor(Math.random() * 6)
}

const removeImg = (e) => {
    e.target.remove()
}

const addToUrls = () => {
    const url = $('#newUrl').val()
    urls.push(url)
}


$(() => {
    const $randomSquare = $('<div>').addClass('square').css({
        'background-color' : 'grey',
        'color': 'white',
        'text-align': 'center',
        'cursor': 'pointer'
    }).text('ADD RANDOM IMAGE')

    $('.container').append($randomSquare)


    $randomSquare.on('click', () => {
        const index = randomIndex()
        const url = urls[index]
        addRandomImg(url)
    })

    $('#submit').on('click', addToUrls)

})