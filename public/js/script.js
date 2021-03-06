const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message1.textContent = 'loading...'
    message2.textContent = ''

    if (search.value) {
        const url = '/weather?address=' + encodeURIComponent(search.value)
        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    message1.textContent = data.error
                } else {
                    message1.textContent = data.location
                    message2.textContent = data.forecastData
                }
            })
        })
    } else {
        message1.textContent = 'Set location!'
    }
})