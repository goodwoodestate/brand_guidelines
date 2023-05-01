var guidelineData = {
	events: {
		type: "object",
		values: {
		0: {
			DropDownOption: "Festival of Speed",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=800&quality=80",
			pdfALink: "#",
		},
		1: {
			DropDownOption: "Members Meeting",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=800&quality=80",
			urlAppliedFilter: "#",
		},
		2: {
			DropDownOption: "Goodwood Revival",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=800&quality=80",
			pdfALink: "#",
		},
		3: {
			DropDownOption: "Qatar Goodwood",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=800&quality=80",
			urlAppliedFilter: "#",
		},
		4: {
			DropDownOption: "Goodwoof",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/2019/fixtures/op-sat/qgf_18_chrisison_0161.jpg?width=800&quality=80",
			pdfALink: "#",
		},
		5: {
			DropDownOption: "Goodwood Racecourse",
			imageURL:
			"https://static.goodwood.com/globalassets/horseracing/openingsaturday_17_jaysonfong_146.jpg?width=800&quality=80",
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
function onPageLoad() {
    displayedLogic();
}


function displayedLogic() {
    let data = guidelineData.events.values;
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        console.log("hello")
        console.log(data[i])
    }
}
onPageLoad();

// select the container where the HTML will be added
const container = document.querySelector('#container');

// loop over the events data
for (let i = 0; i < guidelineData.events.values.length; i++) {
    // create a new HTML element
    const div = document.createElement('div');
    div.classList.add('sm:w-78', 'sm:h-86', 'border-1', 'border-[#131313]');

    // create a new image element and set its source to the imageURL
    const img = document.createElement('img');
    img.id = 'innerCardImage';
    img.src = guidelineData.events.values[i].imageURL;
    div.appendChild(img);

    // create a new paragraph element and set its text to the DropdownOption
    const p = document.createElement('p');
    p.id = 'innerCardText';
    p.innerText = guidelineData.events.values[i].DropDownOption;
    div.appendChild(p);

    // add the new HTML element to the container
    container.appendChild(div);
}