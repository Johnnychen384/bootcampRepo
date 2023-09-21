$(() => {
    // everytime something is typed into input trigger callback
    $('body').keyup((e) => {
        // stores value of what is currently in input(in lowercase)
        let currentValue = e.target.value.toLowerCase()
        // stores length of the string thats currently typed into input
        let lengthOfSearch = currentValue.length
        // get all the pokemon html elements in root that is being displayed
        const arr = $('#pokemonContainer').children()

        // loop through all html elements
        for(let pokemon of arr){
            
            // store all classes of a single html element in array using regex?
            const array = $(pokemon).attr('class').split(/\s+/)

            // get the last class name which is the pokemon name and turn it into an array
            let pokemonArr = array[6].split('')

            // make a new array that contains the same amount of elements as lengthOfSearch which is what is currently in the input
            let checkArr = pokemonArr.slice(0, lengthOfSearch)

            // // compare the string of currentVale to checkArr as a string
            if(checkArr.join('') !== currentValue){
                $(pokemon).addClass('d-none')
            } else {
                $(pokemon).removeClass('d-none')
            }
        }
    })
})