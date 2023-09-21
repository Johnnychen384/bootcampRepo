const express = require('express')
const app = express()


// allows us to access and use files inside the public folder. AKA CSS file
app.use(express.static('public'))

// array for pastWorks page
const pastWork = [
    {
      type: 'stairs',
      location: '123 fake ave.',
      profit: 3000  
    },
    {
        type: 'flooring',
        location: '321 fake ave.',
        profit: 6000  
      },
      {
        type: 'cabinets',
        location: '567 fake ave.',
        profit: 8000  
      }
]

// array for staff page
const staff = [
    {
        name: 'Johnny',
        postion: 'Owner',
        salary: 100000
    },
    {
        name: 'Taylor',
        postion: 'Co-owner',
        salary: 100000
        
    },
    {
        name: 'Tim',
        postion: 'Carpenter',
        salary: 50000
        
    },
    {
        name: 'Jim',
        postion: 'Carpenter',
        salary: 50000
        
    },
]

// array for links page
const socials = [
    {
        icon: "fab fa-facebook-square",
        site: 'www.facebook.com'
    },
    {
        icon: "fab fa-instagram",
        site: 'www.instagram.com'
    },
    {
        icon: "fab fa-twitter",
        site: 'www.twitter.com'
    }
]

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/history', (req, res) => {
    res.render('companyHistory.ejs')
})

app.get('/past-work', (req, res) => {
    res.render('PastWork.ejs', {pastWork: pastWork})
})

app.get('/staff', (req, res) => {
    res.render('StaffPage.ejs', {staff: staff})
})

app.get('/contact', (req, res) => {
    res.render('ContactPage.ejs')
})

app.post('/contact', (req, res) => {
    res.render('successPage.ejs')
})

app.get('/links', (req, res) => {
    res.render('LinksPage.ejs', {social: socials})
})




app.listen(3000)