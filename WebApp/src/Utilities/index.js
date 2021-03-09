import React from "react";
import scrollToComponent from "react-scroll-to-component";

/**
 * Splits a String by a Symbol, removing empty Values.
 * @param {any} str
 * @param {any} char
 */
export function SplitNonEmpty(str, char) {
  const parts = str.split(char);
  const result = [];

  parts.forEach(part => {
    if (!IsNullOrWhitespace(part)) {
      result.push(part);
    }
  });

  return result;
}

/**
 * Fixes AutoFill for a Component
 * @param {React.Component} element
 */
export function FixAutoFill(element) {
  element.componentWillReceiveProps = function(props) {
    if (element.props.value !== props.value) {
      element.props.onChange({target: element});
    }
  };
}

export function ChildrenOfType(element, type) {
  const results = [];

  try {
    const children = element.props.children;
    React.Children.forEach(children, child => {
      if (child.type == type) {
        results.push(child);
      }
    });
  } catch (e) {}

  return results;
}

export function FirstChildOfTypeOrNull(element, type) {
  let result = null;

  try {
    const children = element.props.children;
    React.Children.forEach(children, child => {
      if (child.type == type) {
        result = child;
        return;
      }
    });
  } catch (e) {}

  return result;
}

export function GetUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(window.location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

export function IsNullOrWhitespace(str) {
  return str == null || str.match(/^ *$/) !== null;
}

export function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ValueEquivalent(obj1, obj2) {
  return JSON.stringify(obj1) == JSON.stringify(obj2);
}

export function CreateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function GetFileType(filename) {
  return filename
    .split(".")
    .pop()
    .toLowerCase();
}

export function ValueOrWhitespace(value) {
  if (typeof value == "undefined" || value === null) {
    return "";
  }

  return value;
}

/**
 * Merges the Page Changes with the Changes object.
 * @param {any} src Source object to update
 * @param {any} update Update object to insert into the Source.
 */
export function MergeObjects(src, update) {
  if (!update) return;

  Object.keys(update).forEach(key => {
    src[key] = update[key];
  });
}

/**
 * A Promise that can be cancelled.
 * @param {any} promise
 */
export function CancellationPromise(promise) {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(
      val => (hasCanceled_ ? reject({isCanceled: true}) : resolve(val)),
      error => (hasCanceled_ ? reject({isCanceled: true}) : reject(error))
    );
  });

  return {
    promise: wrappedPromise,
    cancel() {
      hasCanceled_ = true;
    }
  };
}

export function RectContains(rect, x, y) {
  if (!rect) return false;

  return (
    rect.x <= x &&
    x <= rect.x + rect.width &&
    rect.y <= y &&
    y <= rect.y + rect.height
  );
}

export function GetEventCoordinates(event) {
  switch (event.type) {
    case "touchmove":
      const touch = event.touches[0];
      return {x: touch.clientX, y: touch.clientY};

    default:
      return {x: event.clientX, y: event.clientY};
  }
}

export function ScrollToTop() {
  try {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  } catch (e) {}
}

export function ScrollToComponent(ref, options) {
  try {
    scrollToComponent(ref, options);
  } catch (e) {}
}

/**
 * Gets data from the Page from a Meta tag.
 * @param name Name of the content
 * @param value If not null, will set the Meta content.
 * @returns String content if value is null, or void if setting value.
 */
export function Metadata(name, value) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  if (typeof value == "undefined") {
    return el ? el.getAttribute("content") : undefined;
  } else {
    // make meta element if not exists.
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", name);
      document.head.appendChild(el);
    }

    el.setAttribute("content", value);
  }
}

/**
 * Deletes a Metadata tag from the Page.
 * @param {*} name
 */
export function DeleteMetadata(name) {
  let el = document.head.querySelector(`meta[name="${name}"]`);
  el.remove();
}

export function SubStringWords(str, length) {
  const regex = RegExp(`^(.{${length}}[^\s]*).*`);
  return str.replace(regex, "$1");
}

export function collectionHas(a, b) {
  //helper function (see below)
  for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] == b) return true;
  }
  return false;
}

export function findParentBySelector(elm, selector) {
  var all = document.querySelectorAll(selector);
  var cur = elm.parentNode;
  while (cur && !collectionHas(all, cur)) {
    //keep going up until you find a match
    cur = cur.parentNode; //go up
  }
  return cur; //will return null if not found
}
