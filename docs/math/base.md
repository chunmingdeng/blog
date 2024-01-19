# 基础数学知识

## 公式类
- 累加



## vector

1. dot product(点积，内积)
    > the $\theta$ is angle of $\vec a$ and $\vec b$  
    >>点积的结果是一个数值    

$$
\vec a \cdot \vec b = |\vec a|\cdot|\vec b|\cdot\cos\theta \\
\vec a = (x_1,y_1,z_1); \vec b = (x_2,y_2,x_2); \\
\vec a\cdot \vec b = x_1 \cdot x_2 + y_1 \cdot y_2 + z_1 \cdot z_2;
$$

2. cross product(叉积，注意严格不叫外积，外积是张量)
    > the $\theta$ is angle of $\vec a$ and $\vec b$  
    >>叉积的结果是一个向量，和两个向量垂直，且叉积的模等于两个向量组成的四边形的面积  
     
    > 如何记忆    
    >>1. 抛开当前计算维（比如计算i，就只保留以j,k）；
    >>2. 剩下两维组成一个2x2的矩阵了，左对角的积 - 右对角的积 就是当前计算维的结果；
    >>3. j维的结果取负；    
    注：「左对角的积」就是2x2矩阵里，左上和右下两个元素的乘积

$$
|\vec a \times \vec b| = |\vec a|\cdot|\vec b|\cdot\sin\theta  \\
\vec a \times \vec b = \begin{bmatrix} i&j&k\\ x_1&y_1&z_1\\ x_2&y_2&z_2\\   \end{bmatrix} \\
= (y_1 \cdot z_2 - y_2 \cdot z_1) \cdot i + (x_1 \cdot z_2 - x_2 \cdot z_1) \cdot j + (x_1 \cdot y_2 - x_2 \cdot y_1) \cdot k 
$$
