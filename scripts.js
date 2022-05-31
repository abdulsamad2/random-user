const btn = document.querySelector(".btn");

const html = `
 <li class=""><span class="first">Name:</span> Kenneth J. Scott</li>
          <li class="">
            <span class="first">Date of Birth :</span> January 6, 1984
          </li>
          <li class="">
            <span class="first">address:</span> 1286 Patterson Street Houston,
            TX 77074
          </li>
          <li>
            <span class="first">Geo coordinates :</span> 29.744412, -95.479993
          </li>
          <li class="="><span class="first">Phone:</span> 0858-8792987</li>
          <li><span class="first">Email: </span>KennethJScott@rhyta.com</li>
        </ul>

`;

const renderData = function (data) {};
const getData = function () {
  fetch("https://randomuser.me/api/")
    .then((res) => {
      if (!res.ok) throw new Error("Something went wrong");
      return res.json();
    })
    .then((data) => {
      console.log(...data.results);
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getData();
});
