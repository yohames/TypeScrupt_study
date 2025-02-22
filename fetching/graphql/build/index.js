"use strict";
const url = "https://countries.trevorblades.com";
const continentSelect = window.document.getElementById("continent-select");
const countriesList = window.document.getElementById("countries-list");
continentSelect === null || continentSelect === void 0 ? void 0 : continentSelect.addEventListener("change", (e) => {
    const selectElement = e.target;
    fetchCountries(selectElement.value);
});
queryFetch(`{
            continents{
                code
                name
            }
        }`).then((data) => {
    console.log("data", data.data);
    data.data.continents.forEach((e) => {
        const option = document.createElement("option");
        option.value = e.code;
        option.textContent = e.name;
        continentSelect === null || continentSelect === void 0 ? void 0 : continentSelect.appendChild(option);
    });
});
const fetchCountries = function (code) {
    queryFetch(`query getCountries($code: ID!){
    continent(code: $code){
        countries{
            name
        }
    }
}`, { code }).then((data) => {
        const ul = document.createElement("ul");
        data.data.continent.countries.forEach((e) => {
            const li = document.createElement("li");
            li.textContent = e.name;
            ul.appendChild(li);
        });
        countriesList.replaceChildren();
        countriesList === null || countriesList === void 0 ? void 0 : countriesList.appendChild(ul);
    });
};
function queryFetch(query, variables) {
    return fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query,
            variables,
        }),
    }).then((res) => res.json());
}
