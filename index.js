const blockedSites = [
  'chegg.com',
  'chegg.org',
  'bartleby.com',
];

// generate blocked site string
let blockedSitesString = '';

function google(query) {
  window.location.href = `https://www.google.com/search?q=${query} ${blockedSitesString}`;
}

// check for "search" query in url
if (window.location.search.includes('search')) {
  // get the query
  var query = window.location.search.split('=')[1];
  // get the search results
  google(query);
};

const searchBar = document.querySelector('#search-bar');
const searchButton = document.querySelector('#search-button');

// * Search

blockedSites.forEach((site) => {
  blockedSitesString += `-site:${site} `;
});

// on search button click or enter key press, search google for the query
searchButton.addEventListener('click', () => {
  if (searchBar.value.replace(/\s/g, '').length > 0) {
    google(searchBar.value);
  };
});

// enter
searchBar.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (searchBar.value.replace(/\s/g, '').length > 0) {
      google(searchBar.value);
    };
  };
});

// generate sample AP Chemestry questions
const sampleQueries = [
  'CH₃OH is soluble in H₂O. In C₅H₁₂, this solute would be...',
  'Calculate the Molarity of 25g of FeCl₃₅ in a 100ml solution of H₂O...',
  'What are the IMFs present between C₃H₁₂ and C₃H₁₂O?',
  'What is the atomic number of the element that has the most protons?',
  'Given the formula C₃H₁₂O, what is the molecular weight?',
  'Is KI soluble in H₂O?',
]

// animate queries being typed into search bar one letter at a time, then deleted one letter at a time
function typeQuery(query) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < query.length) {
      searchBar.placeholder += query[i];
      i++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        const deleteInterval = setInterval(() => {
          if (searchBar.placeholder.length > 0) {
          searchBar.placeholder = searchBar.placeholder.slice(0, -1);
          } else {
            clearInterval(deleteInterval);
            setTimeout(() => {
              typeQuery(sampleQueries[Math.floor(Math.random() * sampleQueries.length)]);
            }, Math.floor((Math.random() * 1000) + 500));
          };
        }, 30);
      }, Math.floor((Math.random() * 2000) + 1000));
    };
  }, 100);
};

typeQuery(sampleQueries[Math.floor(Math.random() * sampleQueries.length)]);