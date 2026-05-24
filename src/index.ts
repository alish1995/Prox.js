/**
 * Prox.js - A lightweight proxy library
 */

export class ProxyHandler {
  /**
   * Create a new proxy with custom handlers
   */
  static create<T extends object>(target: T, handlers?: ProxyHandler): T {
    return new Proxy(target, handlers || {});
  }

  /**
   * Get handler for proxy
   */
  get?(target: any, prop: string | symbol, receiver: any): any {
    return Reflect.get(target, prop, receiver);
  }

  /**
   * Set handler for proxy
   */
  set?(target: any, prop: string | symbol, value: any, receiver: any): boolean {
    return Reflect.set(target, prop, value, receiver);
  }

  /**
   * Has handler for proxy
   */
  has?(target: any, prop: string | symbol): boolean {
    return Reflect.has(target, prop);
  }

  /**
   * Delete handler for proxy
   */
  deleteProperty?(target: any, prop: string | symbol): boolean {
    return Reflect.deleteProperty(target, prop);
  }
}

export default ProxyHandler;
