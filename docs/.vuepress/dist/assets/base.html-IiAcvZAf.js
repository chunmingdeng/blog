import{_ as e,o as c,c as t,f as o}from"./app-5uqBhi11.js";const a={},d=o('<h1 id="基础数学知识" tabindex="-1"><a class="header-anchor" href="#基础数学知识" aria-hidden="true">#</a> 基础数学知识</h1><h2 id="公式类" tabindex="-1"><a class="header-anchor" href="#公式类" aria-hidden="true">#</a> 公式类</h2><ul><li>累加</li></ul><h2 id="vector" tabindex="-1"><a class="header-anchor" href="#vector" aria-hidden="true">#</a> vector</h2><ol><li>dot product(点积，内积) <blockquote><p>the $\\theta$ is angle of $\\vec a$ and $\\vec b$</p><blockquote><p>点积的结果是一个数值</p></blockquote></blockquote></li></ol><p>$$ \\vec a \\cdot \\vec b = |\\vec a|\\cdot|\\vec b|\\cdot\\cos\\theta \\ \\vec a = (x_1,y_1,z_1); \\vec b = (x_2,y_2,x_2); \\ \\vec a\\cdot \\vec b = x_1 \\cdot x_2 + y_1 \\cdot y_2 + z_1 \\cdot z_2; $$</p><ol start="2"><li><p>cross product(叉积，注意严格不叫外积，外积是张量)</p><blockquote><p>the $\\theta$ is angle of $\\vec a$ and $\\vec b$</p><blockquote><p>叉积的结果是一个向量，和两个向量垂直，且叉积的模等于两个向量组成的四边形的面积</p></blockquote></blockquote><blockquote><p>如何记忆</p><blockquote><ol><li>抛开当前计算维（比如计算i，就只保留以j,k）；</li><li>剩下两维组成一个2x2的矩阵了，左对角的积 - 右对角的积 就是当前计算维的结果；</li><li>j维的结果取负；<br> 注：「左对角的积」就是2x2矩阵里，左上和右下两个元素的乘积</li></ol></blockquote></blockquote></li></ol><p>$$ |\\vec a \\times \\vec b| = |\\vec a|\\cdot|\\vec b|\\cdot\\sin\\theta \\ \\vec a \\times \\vec b = \\begin{bmatrix} i&amp;j&amp;k\\ x_1&amp;y_1&amp;z_1\\ x_2&amp;y_2&amp;z_2\\ \\end{bmatrix} \\ = (y_1 \\cdot z_2 - y_2 \\cdot z_1) \\cdot i + (x_1 \\cdot z_2 - x_2 \\cdot z_1) \\cdot j + (x_1 \\cdot y_2 - x_2 \\cdot y_1) \\cdot k $$</p>',8),l=[d];function _(i,r){return c(),t("div",null,l)}const b=e(a,[["render",_],["__file","base.html.vue"]]);export{b as default};