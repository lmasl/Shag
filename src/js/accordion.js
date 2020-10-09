class Accordion {
  constructor({
    itemSelector,
    buttonSelector,
    contentSelector,
    displayNoneClass,
    showClass,
    cb,
  }) {
    this.itemSelector = itemSelector;
    this.buttonSelector = buttonSelector;
    this.contentSelector = contentSelector;
    this.displayNoneClass = displayNoneClass;
    this.menuElements = document.querySelectorAll(this.buttonSelector);
    this.contentItems = document.querySelectorAll(this.contentSelector);
    this.showClass = showClass;
    this.callback = cb;
    this.bindAll();
  }

  bindAll() {
    for (let max = this.menuElements.length - 1; max >= 0; max -= 1) {
      this.menuElements[max].addEventListener('click', this.change.bind(this), false);
    }
  }

  hide(content) {
    content.classList.remove(this.showClass);
    content.addEventListener('transitionend', () => {
      if (!content.classList.contains(this.showClass)) {
        content.classList.add('hidden');
      }
    }, {
      capture: false,
      once: true,
      passive: false,
    });
  }

  show(content) {
    content.classList.remove('hidden');
    setTimeout(() => {
      content.classList.add(this.showClass);
    }, 20);
  }

  clear() {
    console.log(this.contentItems);
    this.contentItems.forEach(this.hide.bind(this));
  }

  change({ target }) {
    const accordionItem = target.closest(this.itemSelector);
    const content = accordionItem.querySelector(this.contentSelector);
    const isShown = content.classList.contains(this.showClass);

    if (isShown) {
      this.hide(content);
    } else {
      this.clear();
      this.show(content);
    }

    // const parent = currentTarget.parentElement;
    // const content = parent.nextElementSibling;

    console.log('content', content);
    // this.clear();
    // let tabIndex = Array.from(this.menuElements).indexOf(e.currentTarget);
    // e.currentTarget.classList.add(this.showContentClass);
    // typeof this.callback === 'function' && this.callback(e, tabIndex);
  }
}

export default Accordion;
//
// var acc = document.getElementsByClassName("accordion");
// var i;
//
// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
