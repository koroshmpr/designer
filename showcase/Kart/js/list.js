const rTable = document.getElementById('row-table');
let i, j;
let list = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (result) { return result.json() })
    .then(function (result2) {
        for (j = 0; j < result2.length; j++) { list.push(result2[j]) };
        for (i = 0; i < list.length; i++) {
            let td = document.createElement('td');
            let tr = document.createElement('tr');
            td.classList.add('primary', 'p-1');
            td.innerText = list[i].name;
            tr.append(td);
            let td2 = document.createElement('td'); td2.classList.add('primary', 'p-1');
            td2.innerText = list[i].website; tr.append(td2);
            let td4 = document.createElement('td');
            td4.classList.add('primary', 'p-1');
            td4.innerText = list[i].company.name; tr.append(td4);
            rTable.append(tr)
        }
    })