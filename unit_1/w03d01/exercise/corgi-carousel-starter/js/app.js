// console.log("corgi carousel connected to app.js!");
$(() => {
    let currentImgIndex = 0
    let numOfImages = $('.carousel-images').children().length - 1


    const changeImageNext = () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex < numOfImages)currentImgIndex++
        else currentImgIndex = 0

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    }

    const changeImagePrev = () => {
        $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')

        if(currentImgIndex > 0)currentImgIndex--
        else currentImgIndex = numOfImages

        $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
    }


    $('.next').on('click', () => {
        changeImageNext()
    })


    $('.previous').on('click', () => {
        changeImagePrev()
    })




});
