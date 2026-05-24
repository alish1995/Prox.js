# Prox.js

A lightweight and powerful proxy library for JavaScript/TypeScript applications.

## 📦 Installation

```bash
npm install prox.js
```

## 🚀 Quick Start

```typescript
import ProxyHandler from 'prox.js';

// Create a simple object
const user = { name: 'John', age: 25 };

// Create a proxy with custom handlers
const proxyUser = ProxyHandler.create(user);

// Use it like a normal object
console.log(proxyUser.name); // 'John'
```

## 📚 Features

- ✨ Simple and lightweight
- 🔧 Easy to use API
- 📘 TypeScript support
- 🎯 Flexible proxy handlers
- 🧪 Well tested

## 📖 Documentation

For more information, visit the [documentation](./docs).

## 📝 License

MIT License - feel free to use this in your projects!
