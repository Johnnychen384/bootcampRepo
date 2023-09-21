// console.log($);
// console.log('modal practice app.js is linked to this index.html');


$(() => {

    const openModal = () => {
        $('#modal').css('display', "block")
    }

    const closeModal = () => {
        $('#modal').css('display', 'none')
    }

    $('#openModal').on('click', openModal)


    $('#close').on('click', closeModal)

    setTimeout(openModal, 5000)


})