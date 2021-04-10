export const defaultPrefix = '__kitty_app'

class LocalStorage {
  constructor() {
    this.prefix = defaultPrefix;
  }

  get(key) {
    if (!key) {
      return null;
    }
    const value = localStorage.getItem(`${this.prefix}_${key}`);

    if (typeof value === 'string') {
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    }
    return null;
  }

  set(key = '', value) {
    if (!key || !value) {
      return null;
    }

    const prefixedKey = `${this.prefix}_${key}`;

    localStorage.setItem(prefixedKey, JSON.stringify(value));
    return value;
  }
}

export default new LocalStorage();
