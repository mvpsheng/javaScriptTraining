## Silly Story Generator
故事生成器项目主要用到的技术是JS的字符串和数组的内置方法。

## 字符串
字符串即对象
字符串常用方法：

* 字符串长度
``` javascript
    const browserType = 'mozilla';
    browserType.length;
```

* 检索具体的字符
``` javascript
    browserType[0];
```

* 检测是否包含字串
``` javascript
    browserType.includes('zilla')

    // 开头
    browserType.startsWith('zilla')
    // 结尾
    browserType.endsWith('zilla')
```

* 检索具体的字符
``` javascript
    browserType[0];
```

* 找到字串的位置
``` javascript
    browserType.indexOf('zi');
```

* 截取字串
``` javascript
    browserType.slice(1, 4);
    // 左闭右开 取1，不取4
```

* 转换大小写
``` javascript
    browserType.toLowerCase();
    browserType.toUpperCase();
```

* 部分替换
``` javascript
    browserType.replace('moz','van')
```

## 数组

* 数组创建
``` javascript
    const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    // 一个数组中可以同时存储多种数据类型，字符串、数字、对象、其他数组。
    const random = ['tree', 795, [0, 1, 2]];
```

* 数组长度
``` javascript
    shopping.length
```

* 访问和修改数组元素
``` javascript
    console.log(shopping[0]);
    // 修改
    shopping[0] = 'tahini';

    // 二维数组的元素访问
    const random = ['tree', 795, [0, 1, 2]];
    random[2][2];
```

* 寻找元素位置
``` javascript
    const birds = ['Parrot', 'Falcon', 'Owl'];
    console.log(birds.indexOf('Owl'));   //  2
    // 不存在数组中的话返回 -1
    console.log(birds.indexOf('Rabbit')); // -1
```

* 添加元素
``` javascript
    // 该函数返回添加后的数组长度
    shopping.push('beef');

    // 添加在数组前面
    const cities = ['Manchester', 'Liverpool'];
    cities.unshift('Edinburgh');
    console.log(cities);     // [ "Edinburgh", "Manchester", "Liverpool" ]

```

* 删除元素
``` javascript
    const cities = ['Manchester', 'Liverpool'];

    const removedCity = cities.pop();
    console.log(removedCity);   // "Liverpool"
    // 删除元素，返回删除的元素

    //shift删除第一个元素 
    cities = ['Manchester', 'Liverpool'];
    cities.shift();
    console.log(cities);     // [ "Liverpool" ]

    // splice 利用元素的位置，开删除，第二个参数表示要删除的个数
    cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
    const index = cities.indexOf('Liverpool');
    if (index !== -1) {
    cities.splice(index, 1);
    }
    console.log(cities);     // [ "Manchester", "Edinburgh", "Carlisle" ]

```

* 遍历数组
``` javascript
    const birds = ['Parrot', 'Falcon', 'Owl'];

    for (const bird of birds) {
    console.log(bird);
    }

    // map方法，将数组的元素进行某种操作
    function double(number) {
        return number * 2;
    }
    const numbers = [5, 2, 7, 6];
    const doubled = numbers.map(double);
    console.log(doubled);  // [ 10, 4, 14, 12 ]


    // filter 通过某种条件过滤元素
    function isLong(city) {
        return city.length > 8;
    }
    const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
    const longer = cities.filter(isLong);
    console.log(longer);  // [ "Liverpool", "Edinburgh" ]

```

* 字符串与数组的转换
``` javascript
    const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    //  split 转化为数组，通过一些标志来切分元素
    const cities = data.split(',');
    cities;

    // 给数组加上一些表示 来连接数组成字符串
    const commaSeparated = cities.join(',');
    commaSeparated;

    // tostring方法也可以转化为字符串，但是元素之间连接的只会是逗号 
    const dogNames = ['Rocket','Flash','Bella','Slugger'];
    dogNames.toString(); // Rocket,Flash,Bella,Slugger

```
