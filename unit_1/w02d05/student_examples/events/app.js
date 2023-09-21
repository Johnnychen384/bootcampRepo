const addText =() => {
    $('body').append('It seems as if it has been clicked!')
}

$(() => {
  
    const $btn = $('#btn')
    console.log($btn)
    $btn.on('click', addText)
    


})
