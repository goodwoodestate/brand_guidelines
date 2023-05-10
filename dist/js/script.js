var guidelineData = {
	events: {
		type: "object",
		values: {
		0: {
			DropDownOption: "Festival of Speed",
			imageURL:
			"https://static.goodwood.com/globalassets/motorsport/fos/logo/festival-of-speed-logo.svg?width=800&quality=80",
			pdfALink: "#",
		},
		1: {
			DropDownOption: "Members Meeting",
			imageURL:
			"https://ticketing.goodwood.com/Assets/HTML/Images/logos/grrc-color-logo.svg?width=800&quality=80",
			urlAppliedFilter: "#",
		},
		2: {
			DropDownOption: "Goodwood Revival",
			imageURL:
			"https://static.goodwood.com/globalassets/revival-logo.png?width=800&quality=80",
			pdfALink: "#",
		},
		3: {
			DropDownOption: "Qatar Goodwood",
			imageURL:
			"https://www.goodwood.com/globalassets/press/horseracing/qgf-logo---red-outline.png?width=800&quality=80",
			urlAppliedFilter: "#",
		},
		4: {
			DropDownOption: "Goodwoof",
			imageURL:
			"https://static.goodwood.com/globalassets/goodwoof/goodwoof-mars-petcare-logo.png?width=800&quality=80",
			pdfALink: "#",
		},
		5: {
			DropDownOption: "Goodwood Racecourse",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/racecourse/racecourse.png",
			urlAppliedFilter: "#",
		},
		},
	},
	estate: {
		type: "object",
		values: {
            0: {
                DropDownOption: "Goodwoof",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=800&quality=80",
                pdfALink: "#",
            },
            1: {
                DropDownOption: "Goodwood Racecourse",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=800&quality=80",
                urlAppliedFilter: "#",
            },
		},
	},
	EntertainingHospitality: {
		type: "object",
		values: {
            0: {
                DropDownOption: "Goodwoof",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=800&quality=80",
                pdfALink: "#",
            },
            1: {
                DropDownOption: "Goodwood Racecourse",
                imageURL:
                "https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=800&quality=80",
                urlAppliedFilter: "#",
            },
		},
	},
	};


// Gets the elements that we are going to be injecting data
let cardContainer = document.getElementById("outerCardContainer");
let currentData = guidelineData.events.values;

function onPageLoad() {
  displayedLogic(currentData);
}

function displayedLogic(data) {
  let injectContainer = document.getElementById("outerCardContainer");
  let html = "";
  for (let i = 0; i < Object.keys(data).length; i++) {
    html += `
      <a>
        <div class="guideline-cards">
          <div class="outerCardImageContainer">
            <img id="innerCardImage" class="w-48 p-4" src="${data[i].imageURL}">
          </div>
          <div class="w-full">
            <p class="inner-card__text" id="innerCardText">${data[i].DropDownOption}</p>
          </div>
        </div>
      </a>
    `;
  }
  injectContainer.innerHTML = html;
}

onPageLoad();

document.getElementById("eventBtn").addEventListener("click", function () {
  currentData = guidelineData.events.values;
  displayedLogic(currentData);
});

document.getElementById("hospitalityBtn").addEventListener("click", function () {
  currentData = guidelineData.EntertainingHospitality.values;
  displayedLogic(currentData);
});

document.getElementById("estateBtn").addEventListener("click", function () {
  currentData = guidelineData.estate.values;
  displayedLogic(currentData);
});
