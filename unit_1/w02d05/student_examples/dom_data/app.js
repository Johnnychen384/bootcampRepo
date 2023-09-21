const data = [
    { name: "Megatron", address: "Cybertron" },
    { name: "Some guy", address: "Some street" },
    { name: "Grace Hopper", address: "Arlington, Virginia" },
    { name: "Ching Shih", address: "The High Seas" },
    { name: "Slimer", address: "The Library" },
    { name: "Umbra", address: "The Void" },
    { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
    { name: "Matt Huntington", address: "Remote" },
    { name: "Ronald McDonald", address: "Casa del McDonalds" },
    { name: "Jem", address: "Starlight Music" }
];

const populateData = () => {
    for(let elem of data){
        // console.log(elem)
    
        const $info = $('<div>').addClass('info-container')
        $info.appendTo('body')
        $('<div>').addClass('name').text(`${elem.name}`).appendTo($info)
        $('<div>').addClass('address').text(`${elem.address}`).appendTo($info)
        $('<button>').addClass('remove').text('remove').appendTo($info)
    }
}

const addData = (name, address) => {
    data.push({name: name, address: address})
    console.log(data)
    $('body').empty();
    populateData()
}

const removeData = (names) => {
    const arr = data.filter(elem => {
        if(elem.name !== names) return elem
    })
    console.log(arr)
    data.push(...arr)
    // $('.info-container').remove()
    $('body').empty();
    populateData()
    
}


$(() => {
  
    populateData()

    $('#submit').on('click', () => {
        addData($('#name').val(), $('#address').val())
    })

    $('.remove').on('click', (e) => {
        const target = e.currentTarget
        const sib = $(target).siblings()
        console.log($(sib).eq(0).text())

        removeData($(sib).eq(0).text())
        populateData()
    })
})