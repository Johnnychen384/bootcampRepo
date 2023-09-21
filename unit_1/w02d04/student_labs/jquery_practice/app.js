$(() => {
    // create body variable
    const $body = $('body')

    // create top and bottom div
    const $topContainer = $('<div>').attr('id', 'top-container')
    const $bottomContainer = $('<div>').attr('id', 'bottom-container')

    // create h1 and divs for top elem
    const $topH1 = $('<h1>').text('Trois couleurs: rouge, blanc, et blue')
    const $topDiv1 = $('<div>').addClass('couleur')
    const $topDiv2 = $('<div>').addClass('couleur')
    const $topDiv3 = $('<div>').addClass('couleur')

    // create h1, img container, img elem for bottom elem
    const $botH1 = $('<h1>').text('Lumpy Space Princess')
    const $bottomImgContainer = $('<div>').attr('id', 'img-container')
    const $bottomImg = $('<img>').attr('src', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg')

    // add to body elem
    $body.append($topContainer)
    $body.append($bottomContainer)
    
    // add elems to topContainer
    $topContainer.append($topH1)
    $topContainer.append($topDiv1.addClass('red'))
    $topContainer.append($topDiv2.addClass('white'))
    $topContainer.append($topDiv3.addClass('blue'))

    // add elemes to bottomContainer
    $bottomContainer.append($botH1)
    $bottomContainer.append($bottomImgContainer.append($bottomImg))

    // changing names of topContainer h1
    $topH1.text('Three colors: red, white, and blue')

    // changing middle and last squre color using CSS jquery method
    $topDiv2.css('background-color', "black")
    $topDiv3.css('background-color', "orange")

    // reverse the containers
    $body.prepend($bottomContainer)

    // changing img and h1
    $botH1.text('The Ice King')
    $bottomImg.attr('src', "https://upload.wikimedia.org/wikipedia/en/7/78/Ice_King.png")

    // remove 
    $body.empty()

    // add para on empty
    const $para = $('<p>').text('the ice king waz here')
    $body.append($para)


    // bonus bonus
    $para.on('mouseenter', () => {
        $para.css({
            "font-size": "2em",
            "background-color": "red",
            "color": "green"
        })
    })

    $para.on('mouseleave', () => {
        $para.css({
            "font-size": "0.5em",
            "background-color": "white",
            "color": "black"
        })
    })
})

