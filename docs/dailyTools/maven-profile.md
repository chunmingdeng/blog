# Maven Profile 配置：IDEA 勾选 vs .mvn/maven.config

同一个 Maven 项目，在 IDEA 里勾选 Profile 就能跑，换成 VS Code 却要新建 `.mvn/maven.config` 写 `-P` 参数——两边最终都是在给 Maven 传 `-P sit,k8stest` 这样的参数，区别只在于「状态记在哪、由谁传给 mvn」。

## 对比

|  | IDEA 勾选 | .mvn/maven.config |
| --- | --- | --- |
| 谁实现的 | IDEA 自己的 Maven 集成 | Maven 本身的特性（≥3.3.1） |
| 存在哪 | `.idea/misc.xml` 的 `MavenProjectsManager.enabledProfiles` | 项目根目录 `.mvn/maven.config` |
| 谁能生效 | 只有 IDEA 认识 | 任何执行 mvn 的工具：VS Code、终端、CI、同事的机器 |
| 能否共享 | `.idea/` 通常被 gitignore，只在本机 | 可以提交进 git，全组生效 |

## 为什么会有这个差异

- IDEA 是"全家桶"式的 IDE，Maven 导入、构建都由它自己完成。勾选的状态是 IDEA 的私有配置，它跑 Maven 时自己把这些 profile 拼进命令行——所以界面上勾一下就够了。
- VS Code 走的是调用命令行 `mvn` 的路线，它没有（也不需要）自己的一层 profile 状态。`.mvn/maven.config` 是 Maven 启动时自动读取的"随身参数文件"，里面每行/每段会被当成命令行参数，所以写进去后谁来执行 `mvn` 都带上了。

换句话说：不是"VS Code 必须建这个文件"，而是用 VS Code 时只能靠 Maven 原生配置；IDEA 勾选则是 IDE 私有状态，命令行和别的工具都看不见。

## 实用提醒

1. `.mvn/maven.config` 内容示例（建议不带空格，兼容以后升级 Maven 3.9+ 的解析规则）：

   ```
   -Psit,k8stest,-dev
   ```

2. maven.config 还能写 IDEA 勾选表达不了的东西，比如 `-DskipTests`、或 `-P -dev` 显式停用默认激活的 dev profile。

3. 反过来，如果本机只用 IDEA，勾选就足够了。

4. IDEA 勾选后 `.idea/misc.xml` 不会立刻落盘（内存态 + 延迟保存），要等 Maven reload 或重启才会写回文件；不要手改这个文件，容易被 IDEA 内存里的旧值覆盖。
