#! bin

sourcePath='/Users/chunmingdeng/program/blog'
targetPath='/Users/chunmingdeng/program/html'
distPath="$sourcePath/docs/.vuepress/dist"

npm install
npm run build
cp -r $distPath $targetPath
mv "$targetPath/dist" "$targetPath/blog"
rm -rf $distPath