function convertHTML(str) {
    var map = [
        {symbol: '&', charCode: 38, entity: '&amp;' },
        {symbol: '<', charCode: 60, entity: '&lt;'},
        {symbol: '>', charCode: 62, entity: '&gt;'},
        {symbol: "'", charCode: 39, entity: '&apos;'},
        {symbol: '"', charCode: 34, entity: '&quot;'}
    ];
        //有更简洁的循环，尝试使用map()方法
    for (var i = 0; i < map.length; i++) {
        var regex = new RegExp(String.fromCharCode(map[i].charCode), 'g');
        str = str.replace(regex, map[i].entity);
    }
    return str;
}