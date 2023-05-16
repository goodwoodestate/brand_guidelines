// Data Set
var guidelineData = {
	events: {
		type: "object",
		values: {
		0: {
			DropDownOption: "Festival of Speed",
			imageURL:
			"https://static.goodwood.com/globalassets/motorsport/fos/logo/festival-of-speed-logo.svg?width=80&quality=80",
			pdfALink: "#",
		},
		1: {
			DropDownOption: "Members Meeting",
			imageURL:
			"https://ticketing.goodwood.com/Assets/HTML/Images/logos/grrc-color-logo.svg?width=80&quality=80",
			urlAppliedFilter: "#",
		},
		2: {
			DropDownOption: "Goodwood Revival",
			imageURL:
			"https://static.goodwood.com/globalassets/revival-logo.png?quality=80",
			pdfALink: "#",
		},
		3: {
			DropDownOption: "Qatar Goodwood",
			imageURL:
			"https://www.goodwood.com/globalassets/press/horseracing/qgf-logo---red-outline.png?quality=80",
			urlAppliedFilter: "#",
		},
		4: {
			DropDownOption: "Goodwoof",
			imageURL:
			"https://static.goodwood.com/globalassets/goodwoof/goodwoof-mars-petcare-logo.png?quality=80",
			pdfALink: "#",
		},
		5: {
			DropDownOption: "Goodwood Racecourse",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/racecourse/racecourse.png?quality=80",
			urlAppliedFilter: "#",
		},
		},
	},
	estate: {
		type: "object",
		values: {
            0: {
                DropDownOption: "Core",
                imageURL:
                "https://www.goodwood.com/globalassets/email/talent/goodwood-estate-logo-2x.png",
                pdfALink: "https://static.goodwood.com/globalassets/brand/guidelines/brand-guidelines-goodwood-core-brand.pdf",
            },
            1: {
                DropDownOption: "The Kennels",
                imageURL:
                "https://ticketing.goodwood.com/Assets/HTML/Images/logos/the-kennels-logo.svg",
                urlAppliedFilter: "#",
				pdfALink: "https://static.goodwood.com/globalassets/brand/guidelines/brand-guidelines-goodwood-the-kennels.pdf",

            },
		},
	},
	EntertainingHospitality: {
		type: "object",
		values: {
            0: {
                DropDownOption: "Goodwoof",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=80&quality=80",
                pdfALink: "#",
            },
            1: {
                DropDownOption: "Goodwood Racecourse",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=80&quality=80",
                urlAppliedFilter: "#",
            },
		},
	},
	};


// Gets the elements that we are going to be injecting data
let cardContainer = document.getElementById("outerCardContainer");
let currentData = guidelineData.events.values;

// Lazy loader method
function onPageLoad() {
  displayedLogic(currentData);
}


// Renders out basic html cards with tailwind classes, loops over objects within the current data array
function displayedLogic(currentData) {
  let injectContainer = document.getElementById("outerCardContainer");
  let html = "";
  for (let i = 0; i < Object.keys(currentData).length; i++) {
    html += `
      <a class="cursor-pointer" src="${currentData[i].pdfALink}" rel="nofollow">
        <div class="guideline-cards">
          <div class="outerCardImageContainer">
            <img id="innerCardImage" class="w-48 p-4" src="${currentData[i].imageURL}">
          </div>
          <div class="w-full">
            <p class="inner-card__text" id="innerCardText">${currentData[i].DropDownOption}</p>
          </div>
        </div>
      </a>
    `;
  }
  injectContainer.innerHTML = html;
}

// Added event listeners for each button adn changes data set and passes and reruns content function
document.getElementById("eventBtn").addEventListener("click", function () {
  currentData = guidelineData.events.values;
  displayedLogic(currentData);
});

// Added event listeners for each button adn changes data set and passes and reruns content function
document.getElementById("hospitalityBtn").addEventListener("click", function () {
  currentData = guidelineData.EntertainingHospitality.values;
  displayedLogic(currentData);
});

// Added event listeners for each button adn changes data set and passes and reruns content function
document.getElementById("estateBtn").addEventListener("click", function () {
  currentData = guidelineData.estate.values;
  displayedLogic(currentData);
});


const tabBtns = document.querySelectorAll(".outertabContainer a");

// Add event listener to each tab button
tabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click", () => {
	// Remove active class from all tab buttons
	tabBtns.forEach(btn => {
	  btn.classList.remove("active-tab");
	});

	// Add active class to clicked tab button
	tabBtn.classList.add("active-tab");
  });
});

// Runs when the page loads in to ensure that all code above styles and data sets are preloaded
onPageLoad();