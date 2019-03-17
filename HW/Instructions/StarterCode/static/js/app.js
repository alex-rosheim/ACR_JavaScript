// from data.js
var tableData = data;

// YOUR CODE HERE!

function renderTable(xyz) {
    document.getElementsByTagName('tbody')[0].innerHTML = '';
    xyz.forEach((element) => {
        let newTr = d3.select('tbody').append('tr');
        Object.entries(element).forEach(([key, value]) => {
            newTr.append('td').text(value);
        })
    })
}

renderTable(tableData)

let filterButton = document.getElementById('filter-btn-all')
filterButton.addEventListener('click', (x) => {
    dateInput = document.getElementById('datetime').value
    dateFilter = document.getElementById('datetime').id
    if (dateInput != '') {
        filteredData = tableData.filter(x => {
            return x[`${dateFilter}`] == `${dateInput}`
        })
        console.log(dateFilter)
        renderTable(filteredData)
    } else {
        filteredData = tableData
    }

    cityInput = document.getElementById('city').value
    cityFilter = document.getElementById('city').id
    if (cityInput != '') {
        filteredData = filteredData.filter(x => {
            return x[`${cityFilter}`] == `${cityInput}`
        })
        console.log(cityFilter)
        renderTable(filteredData)
    }

    stateInput = document.getElementById('state').value
    stateFilter = document.getElementById('state').id
    if (stateInput != '') {
        filteredData = filteredData.filter(x => {
            return x[`${stateFilter}`] == `${stateInput}`
        })
        console.log(stateFilter)
        renderTable(filteredData)
    }

    countryInput = document.getElementById('country').value
    countryFilter = document.getElementById('country').id
    if (countryInput != '') {
        filteredData = filteredData.filter(x => {
            return x[`${countryFilter}`] == `${countryInput}`
        })
        console.log(countryFilter)
        renderTable(filteredData)
    }

    shapeInput = document.getElementById('shape').value
    shapeFilter = document.getElementById('shape').id
    if (shapeInput != '') {
        filteredData = filteredData.filter(x => {
            return x[`${shapeFilter}`] == `${shapeInput}`
        })
        console.log(shapeFilter)
        renderTable(filteredData)
    }
})

let resetButton = document.getElementById('filter-btn-reset')
resetButton.addEventListener('click', (x) => {
    console.log('reset button')
    renderTable(tableData)
})