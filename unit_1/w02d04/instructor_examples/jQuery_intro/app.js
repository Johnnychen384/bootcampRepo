$(() => {
  //create the elem and store it, will not be in DOM yet.
  let $div = $('<div>').addClass('meat')
  let $foodDiv = $('<div>').addClass('vegetable')
  let $h3 = $('<h3>').text('Ostrich').text('Pumpkin').attr('id', 'testing')
  let $vegetableH3 = $('<h3>')
  let $cheeseImg = $('<img>').attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')

  //hey jquery grab the body and append our $div to the body (add it to the end of the container)
  
  $div.append($h3)
  $foodDiv.append($vegetableH3)
  $('body').append($div)
  // $('body').append($foodDiv)

  
  // console.log($divs)
  // $divs.hide(10000)

  const $meat = $('.meat')
  // console.log($meat)
  // $meat.remove()
  
  $('body').prepend($cheeseImg);

  let $divs = $('div')
  $divs.eq(2).children().eq(0).text('Kohlrabi')
  $divs.eq(2).empty()
  let $newVeg = $('<h3>').text('Zuchinni')
  $divs.eq(2).append($newVeg)

})
