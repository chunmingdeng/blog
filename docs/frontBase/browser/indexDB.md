# IndexedDB 学习文档

## 1. 基础概念

### 1.1 什么是 IndexedDB

IndexedDB 是浏览器内置的**客户端 NoSQL 数据库**，用于在用户浏览器中存储大量结构化数据。

| 特性 | 说明 |
|------|------|
| 存储容量 | 通常 10-50GB（取决于浏览器和磁盘空间） |
| 数据类型 | 支持 JS 对象、Blob、ArrayBuffer 等 |
| 查询方式 | 支持索引查询、范围查询、游标遍历 |
| 事务支持 | 支持 ACID 事务 |
| 异步 API | 所有操作都是异步的，不阻塞主线程 |

### 1.2 核心概念

| 概念 | 说明 | 类比关系型数据库 |
|------|------|------------------|
| Database | 数据库实例 | 数据库 |
| Object Store | 对象存储空间 | 表 |
| Index | 索引 | 索引 |
| Transaction | 事务 | 事务 |
| Key | 主键 | PRIMARY KEY |
| Record | 记录 | 行 |

---

## 2. idb 库

### 2.1 为什么使用 idb

原生 IndexedDB API 使用回调嵌套，代码难以维护。`idb` 是一个轻量级 Promise 封装库，让 IndexedDB 使用更简洁。

```bash
npm install idb
```

### 2.2 本项目版本

```json
"idb": "^8.0.2"
```

### 2.3 导入方式

```typescript
import { openDB, DBSchema, IDBPDatabase } from 'idb';
```

---

## 3. 常用 API

### 3.1 打开数据库

```typescript
import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface MyDB extends DBSchema {
  users: {
    key: string;
    value: { name: string; age: number };
    indexes: { 'by-age': number };
  };
}

const db = await openDB<MyDB>('my-database', 1, {
  upgrade(db) {
    const store = db.createObjectStore('users', { keyPath: 'id' });
    store.createIndex('by-age', 'age');
  }
});
```

**参数说明：**

| 参数 | 说明 |
|------|------|
| `'my-database'` | 数据库名称 |
| `1` | 版本号（数字，递增） |
| `upgrade` | 升级回调，首次创建或版本升级时执行 |

### 3.2 创建对象存储空间

```typescript
// 单字段主键
const store = db.createObjectStore('users', { keyPath: 'id' });

// 复合主键
const store = db.createObjectStore('records', {
  keyPath: ['userId', 'tenantId', 'filterPeriod']
});

// 自增主键（无需 keyPath）
const store = db.createObjectStore('logs', { autoIncrement: true });

// 无主键（需手动指定 key）
const store = db.createObjectStore('temp', {});
```

### 3.3 创建索引

```typescript
// 单字段索引
store.createIndex('by-name', 'name');

// 复合索引
store.createIndex('by-user-tenant', ['userId', 'tenantId']);

// 唯一索引
store.createIndex('by-email', 'email', { unique: true });
```

### 3.4 增删改查操作

#### 插入/更新（put）

```typescript
// 插入或更新单条记录
await db.put('users', { id: '1', name: '张三', age: 25 });

// 指定 key 插入
await db.put('users', { name: '李四', age: 30 }, '2');
```

#### 查询（get）

```typescript
// 按主键查询单条
const user = await db.get('users', '1');

// 按主键查询多条
const users = await db.getAll('users', ['1', '2', '3']);
```

#### 按索引查询

```typescript
// 按索引查询单条
const user = await db.getFromIndex('users', 'by-age', 25);

// 按索引查询所有匹配
const users = await db.getAllFromIndex('users', 'by-age', 25);

// 范围查询
const users = await db.getAllFromIndex('users', 'by-age', IDBKeyRange.bound(20, 30));

// 只查键值
const keys = await db.getAllKeysFromIndex('users', 'by-age', 25);
```

#### 删除（delete）

```typescript
// 按主键删除
await db.delete('users', '1');

// 清空存储空间
await db.clear('users');
```

#### 游标遍历

```typescript
const tx = db.transaction('users', 'readonly');
const store = tx.objectStore('users');

// 遍历所有记录
let cursor = await store.openCursor();
while (cursor) {
  console.log(cursor.key, cursor.value);
  cursor = await cursor.continue();
}

// 按索引遍历
let cursor = await store.index('by-age').openCursor();
```

### 3.5 事务操作

```typescript
// 只读事务
const tx = db.transaction('users', 'readonly');
const users = await tx.store.getAll();
await tx.done;

// 读写事务
const tx = db.transaction('users', 'readwrite');
await tx.store.put({ id: '1', name: '张三', age: 25 });
await tx.store.delete('2');
await tx.done; // 提交事务

// 多对象存储事务
const tx = db.transaction(['users', 'logs'], 'readwrite');
await tx.objectStore('users').put(user);
await tx.objectStore('logs').put(log);
await tx.done;
```

---

## 4. Range 查询

```typescript
// 等于
IDBKeyRange.equal(value)

// 大于
IDBKeyRange.lowerBound(value)

// 小于
IDBKeyRange.upperBound(value)

// 区间
IDBKeyRange.bound(lower, upper)

// 排除边界
IDBKeyRange.bound(lower, upper, true, true) // 左开右开
```

示例：

```typescript
// 查询 age 在 20-30 之间的用户
const range = IDBKeyRange.bound(20, 30);
const users = await db.getAllFromIndex('users', 'by-age', range);

// 查询 age > 25 的用户
const range = IDBKeyRange.lowerBound(25, true);
const users = await db.getAllFromIndex('users', 'by-age', range);
```

---

## 5. 本项目示例

### 5.1 数据库结构

```typescript
// src/app/services/db.service.ts

interface RecordSchema {
  userId: string;
  tenantId: string;
  filterPeriod: string;
  timestamp: number;
  data: any;
}

interface MyDBSchema extends DBSchema {
  records: {
    key: [string, string, string];  // 复合主键
    value: RecordSchema;
    indexes: {
      'by-user': string;
      'by-tenantId': string;
      'by-period': string;
      'by-timestamp': number;
      'by-user-tenantId': [string, string];
    };
  };
}
```

### 5.2 核心方法

| 方法 | 功能 | 说明 |
|------|------|------|
| `upsertRecord` | 插入/更新记录 | 超过 100 条自动清理旧数据 |
| `getCurrentRecords` | 查询当前用户记录 | 按用户+租户+日期查询 |
| `deleteHistory` | 删除单条记录 | - |
| `clearHistory` | 清空所有记录 | - |

---

## 6. 最佳实践

### 6.1 版本管理

```typescript
const db = await openDB('my-db', 2, {
  upgrade(db, oldVersion, newVersion) {
    if (oldVersion < 1) {
      // 版本 1 的初始化
    }
    if (oldVersion < 2) {
      // 版本 2 的升级
    }
  }
});
```

### 6.2 索引设计原则

- 对频繁查询的字段建立索引
- 避免过度索引（占用存储空间）
- 复合索引的字段顺序要匹配查询模式

### 6.3 数据清理策略

```typescript
// 定期清理旧数据
const tx = db.transaction('records', 'readwrite');
const records = await tx.store.index('by-timestamp').getAll();

if (records.length > MAX_RECORDS) {
  const toDelete = records
    .sort((a, b) => a.timestamp - b.timestamp)
    .slice(0, records.length - MAX_RECORDS);
  
  await Promise.all(
    toDelete.map(r => tx.store.delete([r.userId, r.tenantId, r.filterPeriod]))
  );
}
```

### 6.4 错误处理

```typescript
try {
  const db = await openDB('my-db', 1);
  // 操作数据库
} catch (error) {
  console.error('IndexedDB 操作失败:', error);
  // 降级处理
}
```

---

## 7. 存储限制

| 浏览器 | 默认限制 | 说明 |
|--------|----------|------|
| Chrome | 可用磁盘 80% | 超过弹窗确认，通常上限 10-15GB |
| Firefox | 可用磁盘 50% | 超过弹窗确认 |
| Safari | 1GB | 超过后静默失败 |

### 查看存储使用情况

```javascript
navigator.storage.estimate().then(estimate => {
  console.log('配额:', estimate.quota, '字节');
  console.log('已用:', estimate.usage, '字节');
  console.log('使用率:', (estimate.usage / estimate.quota * 100).toFixed(2) + '%');
});
```

---

## 8. 常见问题

### Q1: 数据库升级时如何迁移数据？

```typescript
upgrade(db, oldVersion, newVersion) {
  if (oldVersion < 2) {
    const tx = db.transaction('users', 'readwrite');
    const store = tx.objectStore('users');
    
    // 迁移旧数据
    let cursor = await store.openCursor();
    while (cursor) {
      const updated = { ...cursor.value, newField: 'default' };
      await cursor.update(updated);
      cursor = await cursor.continue();
    }
  }
}
```

### Q2: 如何在多 Tab 间同步数据？

使用 `Storage` 事件或 `BroadcastChannel`：

```typescript
// Tab A 写入数据后
localStorage.setItem('db-sync', Date.now());

// Tab B 监听
window.addEventListener('storage', (e) => {
  if (e.key === 'db-sync') {
    // 重新加载数据
  }
});
```

### Q3: 如何调试 IndexedDB？

Chrome DevTools → Application → IndexedDB → 选择数据库

---

## 9. 参考资料

- [MDN IndexedDB 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API)
- [idb GitHub](https://github.com/jakearchibald/idb)
- [Jake Archibald 的 IndexedDB 教程](https://web.dev/articles/indexeddb)
