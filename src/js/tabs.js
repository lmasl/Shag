export default class {
  constructor(tabSelector, activeClass, cb) {
    this.selector = tabSelector;
    this.menuElements = document.querySelectorAll(this.selector);
    this.activeClass = activeClass;
    this.callback = cb;
    this.bindAll();
  }

  bindAll() {
    for (let max = this.menuElements.length-1; max >= 0; --max) {
      this.menuElements[max].addEventListener('click', this.change.bind(this), false);
    }
  }

  clear() {
    this.menuElements.forEach((el) => el.classList.remove(this.activeClass));
  }

  change(e) {
    this.clear();
    let tabIndex = Array.from(this.menuElements).indexOf(e.currentTarget);
    e.currentTarget.classList.add(this.activeClass);
    typeof this.callback === 'function' && this.callback(e.currentTarget, tabIndex);
  }
}
