// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  
$(() => {
// creates variable for body tag-----------------------------------------
const $body = $('body')


// create div elem with id of container-----------------------------------------
const $container = $('<div>').attr('id', 'container')
// console.log($container)
$body.append($container)

// create h1 elem -----------------------------------------
const $h1 = $('<h1>')
// console.log($h1)
$h1.text('Hogwarts')
$container.append($h1)


// h2 elem with name -----------------------------------------
const $myName = $('<h2>').text('Johnny')
$container.append($myName)

// h3 elem with house -----------------------------------------
const $myHouse = $('<h3>').text('Gryffindor')
$container.append($myHouse)

// h4 elem with pet name -----------------------------------------
const $myPet = $('<h4>').addClass('werewolf').text('Mr.fluffy')
$container.append($myPet)

// h4 elem for wand -----------------------------------------
const $myWand = $('<h4>').text('Holly Wand with Unicorn Hair Core')
$container.append($myWand)

// ul li elem -------------------------------------------------------
const $ul = $('<ul>').attr('storage', 'trunk')
const $butter1 = $('<li>').text('butter beer')
const $butter2 = $('<li>').text('butter beer')
const $cloak = $('<li>').text('invisibility cloak').addClass('secret')
const $map = $('<li>').text('magic map').addClass('secret')
const $time = $('<li>').text('time turner').addClass('secret')
const $leash = $('<li>').text('leash').addClass('werewolf')
const $beans = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans.')
// add ul and li to container
$ul.append($butter1, $butter2, $cloak, $map, $time, $leash, $beans)
$container.append($ul)



// make table ---------------------------------------------------------
// table 
const $table = $('<table>')

// tablehead
const $tr1 = $('<tr>')
const $tr2 = $('<tr>')
const $tr3 = $('<tr>')
const $tr4 = $('<tr>')
const $tr5 = $('<tr>')
const $tr6 = $('<tr>')
const $tr7 = $('<tr>')
const $tr8 = $('<tr>')

// header for classes
const $headTh2 = $('<th>').addClass('title').text('Classes')
// rows of class
const $headTr8 = $('<td>').addClass('class').text('Herbology, Divination')
const $headTr9 = $('<td>').text('History of Magic, Charms')
const $headTr10 = $('<td>').text('Potions, Transfiguration')
const $headTr11 = $('<td>').text('Defense Against the Dark Arts, Quidditch practice')
const $headTr12 = $('<td>').text('Divination, Potions')
const $headTr13 = $('<td>').text('rest')
const $headTr14 = $('<td>').text('rest')


// header for days
const $headTh1 = $('<th>').attr('id', 'title1').addClass('title').text('Day')
// rows of days
const $headTr1 = $('<td>').addClass('title').text('Monday')
const $headTr2 = $('<td>').addClass('title').text('Tuesday')
const $headTr3 = $('<td>').addClass('title').text('Wednesday')
const $headTr4 = $('<td>').addClass('title').text('Thursday')
const $headTr5 = $('<td>').addClass('title').text('Friday')
const $headTr6 = $('<td>').addClass('title').text('Saturday')
const $headTr7 = $('<td>').addClass('title').text('Sunday')



// create h5 elemn --------------------------------------------------
const $spring2017 = $('<h5>').text('Spring 2017')

// appends tablehead and body
$container.append($spring2017, $table)
$table.append($tr1, $tr2, $tr3, $tr4, $tr5, $tr6, $tr7, $tr8)

$tr1.append($headTh1, $headTh2)
$tr2.append($headTr1, $headTr8)
$tr3.append($headTr2, $headTr9)
$tr4.append($headTr3, $headTr10)
$tr5.append($headTr4, $headTr11)
$tr6.append($headTr5, $headTr12)
$tr7.append($headTr6, $headTr13)
$tr8.append($headTr7, $headTr14)


// break wand --------------------------------------------------
$myWand.remove()


// remove beer --------------------------------------------------
$butter1.remove()
$butter2.remove()


// add new wand & changing color -------------------------------------------------------------
$myWand.text('Holy Wand with Phoenix Feather').addClass('myWand').css('color', 'indigo')
$myPet.append($myWand)


// remove pet and add it back ------------------------------------
$myPet.remove()
$ul.append($myPet)
$myPet.remove()
$myHouse.append($myPet)


// hide all class secret----------------------------------------------
$('.secret').hide(2000).delay(1000)

// show all belowings -----------------------------------------------
$('.secret').show(4000)

// add class cabbage to leash --------------------------------------
$leash.addClass('cabbage')

// remove cabbage ----------------------------------------------------
$leash.removeClass('cabbage')

// update to fall 2018 ---------------------------------------------
$spring2017.text('Fall 2018')

// add butter -----------------------------------------------------
$ul.prepend($butter1)

// remove trunk add chest ----------------------------------------------
$ul.removeAttr('storage')
$ul.attr('storage', 'chest')


// my own css -----------------------------------------

// when the wand text is moused over img appears ------------------
const $wandImg = $('<img>').attr('src', 'https://i.etsystatic.com/36384481/r/il/9e1aab/4110972472/il_fullxfull.4110972472_sxhb.jpg')

$myWand.on('mouseenter', () => {
    $myWand.append($wandImg)
    $wandImg.hide()
    $wandImg.show(1000)
})

$myWand.on('mouseleave', () => {
    $wandImg.hide(3000).delay(1000)
    // $wandImg.remove()
})

// change body background ---------------------------------------
$body.css('background', 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)')


// shadow on table -=--------------------------------------------------
$table.css({
    "box-shadow":"1.5em 1.5em 3em"
})

// animations --------------------------------------------------------
$(() => {
    $container.hide()
    $table.hide()

    $container.show(3000)
    $table.show().delay(3000)
    $table.animate({opacity: '1', width: "60%", height: "20%"}, 4500)
    
    // $table.animate({width: "60%", height: "20%"}, 500)
    // cant get table to rotate on load
    // $table.animate({transform: "rotate(360deg)"}, "slow")


})







})



