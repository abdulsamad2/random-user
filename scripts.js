const btn = document.querySelector(".btn");
const container = document.querySelector(".section-data");

const renderData = function (results) {
  const html = `
  <img
          src="${results.picture.large}"
          alt=""
          class="img"
        />
   <div class="container">
  <ul class="od-list">
 <li class=""><span class="first">Name:</span>${results.name.title}:${results.name.first} ${results.name.last}</li>
          <li class="">
            <span class="first">Date of Birth :</span> ${results.dob.date}
          </li>
          <li class="">
            <span class="first">address:</span> ${results.location.street.number} ${results.location.street.name} ${results.location.city}, ${results.location.state} , ${results.location.country}
          </li>
          <li>
            <span class="first">Geo coordinates :</span> ${results.location.coordinates.latitude} , ${results.location.coordinates.longitude} 
          </li>
          <li class="="><span class="first">Phone:</span> ${results.phone}</li>
          <li><span class="first">Email: </span>${results.email}</li>
        </ul>
 </ul>
 </div>
`;
  container.innerHTML = html;
};
const getData = function () {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (!res.ok) throw new Error("Something went wrong");
      return res.json();
    })
    .then((data) => {
      const results = data.results[0];
      renderData(results);
    })
    .catch((err) => alert(err));
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getData();
});
