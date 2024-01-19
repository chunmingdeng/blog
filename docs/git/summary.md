# summary

## reset command
- git reset \<commit-hash\>
  > 回滚到`commit-hash`所在的那次提交，并将之后的所有提交都提取到工作区（未add状态）

- git reset --soft \<commit-hash\> 
  > 回滚到`commit-hash`所在的那次提交，并将之后的所有提交都提取到暂存区（已add状态）

- git reset --hard \<commit-hash\>
  > 回滚到`commit-hash`所在的那次提交，并将之后的所有提交都放弃


git reset 无或者--soft的时候，工作区的内容会被保留；
1. 无参数的情况下，工作区的内容会和commit-hash之后的内容一起放到工作区（暂时不考虑冲突问题）
2. --soft的情况下，工作区的内容还会在工作区，commit-hash之后的内容会放到暂存区互不影响
3. --hard的情况下，工作区的内容会被放弃，commit-hash之后的内容也会被放弃