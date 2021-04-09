export const defaultPrefix = '__kitty_app'

class LocalStorage {
  constructor() {
    this.prefix = defaultPrefix;
  }

  get(key) {
    if (!key) {
      return null;
    }
    return localStorage.getItem(`${this.prefix}_${key}`)
  }

  // TODO: сохранять объекты и массивы
  set(key = '', value) {
    if (!key || !value) {
      return null;
    }

    const prefixedKey = `${this.prefix}_${key}`;

    localStorage.setItem(prefixedKey, value);
    return value;
  }
}

export default new LocalStorage();
