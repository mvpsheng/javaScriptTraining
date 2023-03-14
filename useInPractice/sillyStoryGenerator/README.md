## Silly Story Generator
故事生成器项目主要用到的技术是JS的字符串的内置方法。
替换 replace()

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