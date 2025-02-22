const url = "https://countries.trevorblades.com";

const continentSelect = window.document.getElementById(
  "continent-select"
) as HTMLSelectElement;
const countriesList = window.document.getElementById(
  "countries-list"
) as HTMLElement;

continentSelect?.addEventListener("change", (e) => {
  const selectElement = e.target as HTMLSelectElement;
  fetchCountries(selectElement.value);
});

queryFetch(`{
            continents{
                code
                name
            }
        }`).then((data) => {
  console.log("data", data.data);
  data.data.continents.forEach((e: { name: string; code: string }) => {
    const option = document.createElement("option");
    option.value = e.code;
    option.textContent = e.name;
    continentSelect?.appendChild(option);
  });
});

const fetchCountries = function (code: string) {
  queryFetch(
    `query getCountries($code: ID!){
    continent(code: $code){
        countries{
            name
        }
    }
}`,
    { code }
  ).then((data) => {
    const ul = document.createElement("ul") as HTMLElement;
    data.data.continent.countries.forEach((e: { name: string }) => {
      const li = document.createElement("li");
      li.textContent = e.name;
      ul.appendChild(li);
    });
    countriesList.replaceChildren();
    countriesList?.appendChild(ul);
  });
};

interface GraphQLRequestVariables {
  [key: string]: any;
}

interface GraphQLResponse<T> {
  data: T;
}

function queryFetch(
  query: string,
  variables?: GraphQLRequestVariables
): Promise<GraphQLResponse<any>> {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query,
      variables,
    }),
  }).then((res) => res.json());
}
