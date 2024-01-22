let currentPage = 0;
// const for form pages
const pages = document.getElementsByClassName("page");

function formPage(page) {
  // const elements for easy access
  const pageNumber = document.getElementById("pageNumber");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  // hide previous page button if on first page
  if (page == 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "inline";
  }
  // Change button on last page
  if (page + 1 == pages.length) {
    nextButton.innerHTML = "Senden";
  } else {
    nextButton.innerHTML = "Weiter";
  }
  // Update page number
  pageNumber.innerHTML = `${currentPage + 1}/${pages.length}`;
  highlightIndicator(page);
}

function nextFormPage(page) {
  // Hide and show page
  pages[currentPage].style.display = "none";
  currentPage = currentPage + page;
  if (currentPage + 1 > pages.length) {
    document.getElementById("multipageform").submit();
  } else {
    pages[currentPage].style.display = "block";
    formPage(currentPage);
  }
}

function appendIndicator() {
  const box = document.getElementById("indicatorBox");
  const indicator = document.createElement("div");
  indicator.className = "pageIndicator";
  box.appendChild(indicator);
}

// Call function to init
for (let index = 0; index < pages.length; index++) {
  appendIndicator();
}

function highlightIndicator(page) {
  let indicatorList = document.getElementsByClassName("pageIndicator");
  for (let index = 0; index < indicatorList.length; index++) {
    if (index == page) {
      indicatorList[index].classList.add("active");
    } else {
      indicatorList[index].classList.remove("active");
    }
  }
}

for (let index = 0; index < pages.length; index++) {
  if (index == currentPage) {
    pages[index].style.display = "block";
  } else {
    pages[index].style.display = "none";
  }
}

formPage(0);
