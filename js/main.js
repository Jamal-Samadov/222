

function SendRequest(){
     fetch('users.json')
    .then(response => response.json())
    .then(data => {
        let items = ''
        data.forEach(user => {
            items += `
            <div class="col-lg-4 col-6 col-sm-6">
                 <div id="top" class="card">
                   <img class="card-img-top" src="${user.Image}" alt="Card image cap">
                 <div class="card-body">
                      <h5 class="card-title">${user.Name} ${user.Surname}</h5>
                      <p class="card-text">${user.Job}</p>
                      <p class="card-text">${user.Salary} AZN</p>
                      <p class="card-text">${user.Country} / ${user.City}</p>
                   </div>
               </div>
            </div>
            `
        });
        document.getElementById('list').innerHTML = items

    })
    .catch(error => {console.log(error)});
}
SendRequest()

