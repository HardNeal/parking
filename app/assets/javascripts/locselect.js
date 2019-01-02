"use strict";

// Notice: it works on Edge but there is an error in the console due to L.36
// I have not found a good fix yet.

var selectList = document.getElementsByTagName("select");
var maxHeight = 150; // Max height of the dropdown menu

var currentlyOpened = false;
var currentlySelectedOptions = [];

(Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}),
  false;

var _loop = function _loop(i) {
  var select = selectList[i];
  currentlySelectedOptions.push(false);

  // Build fake select

  selectWrapper = document.createElement("div");

  selectWrapper.className = "select_wrapper";

  var selectBox = document.createElement("div");
  selectBox.className = "select_box";
  selectBox.innerHTML = "<p>" + select[select.selectedIndex].text + "</p>";

  var selectButton = document.createElement("button");
  selectButton.innerHTML =
    "<span class='angle_down'></span>";
  selectBox.appendChild(selectButton);

  var selectOptions = document.createElement("ul");
  selectOptions.style.maxHeight = maxHeight + "px";

  // Build options

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (
      var _iterator = Array.from(select.options)[Symbol.iterator](), _step;
      !(_iteratorNormalCompletion = (_step = _iterator.next()).done);
      _iteratorNormalCompletion = true
    ) {
      var options = _step.value;

      var optionItem = document.createElement("li");
      optionItem.innerHTML = options.text;

      if (options.selected) {
        optionItem.className = "active";
        currentlySelectedOptions[i] = optionItem;
      }

      selectOptions.appendChild(optionItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  selectBox.appendChild(selectOptions);
  selectWrapper.appendChild(selectBox);

  selectWrapper.appendAfter(select);
  selectWrapper.appendChild(select);

  // Select an option

  itemsList = selectOptions.getElementsByTagName("li");

  var _loop2 = function _loop2(y) {
    var item = itemsList[y];

    item.addEventListener("click", function(event) {
      select.selectedIndex = y;
      selectBox.getElementsByTagName("p")[0].innerHTML =
        select[select.selectedIndex].text;

      currentlySelectedOptions[i].classList.remove("active");
      currentlySelectedOptions[i] = item;
      currentlySelectedOptions[i].classList.add("active");
      closeSelect(selectBox);
    });
  };

  for (var y = 0; y < itemsList.length; y++) {
    _loop2(y);
  }

  // Open/Close select

  selectBox.addEventListener("click", function(event) {
    event.stopPropagation();

    if (this.classList.contains("active")) {
      closeSelect(this);
      currentlyOpened = false;
    } else {
      if (currentlyOpened) closeSelect(currentlyOpened);

      setPosition(this); // Set position up or down

      this.classList.add("active");
      currentlyOpened = this;
    }
  });

  selectOptions.addEventListener("click", function(event) {
    event.stopPropagation();
  });
};

for (var i = 0; i < selectList.length; i++) {
  var selectWrapper;
  var itemsList;

  _loop(i);
}

// Close opened select if the user click out of it

document.addEventListener("click", function(event) {
  if (currentlyOpened) {
    closeSelect(currentlyOpened);
  }
});

// Close select action

function closeSelect(target) {
  target.classList.remove("active");
}

// Set options div position (up or down)

function setPosition(target) {
  var space = window.innerHeight - target.getBoundingClientRect().bottom - 10;

  // This part is not perfect by it works...

  if (space < maxHeight) {
    target.classList.add("up");
  } else if (target.classList.contains("up")) {
    target.classList.remove("up");
  }
}

window.addEventListener(
  "resize",
  function() {
    currentlyOpened ? setPosition(currentlyOpened) : null;
  },
  true
);