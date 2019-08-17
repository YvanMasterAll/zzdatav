
// 获取模板
function getTable() {
    return $.ajax({
        url: 'chart_table_t.template',
        type: 'get',
        dataType: 'text'
    })
}

getTable().then(function(table) {
    $.getJSON('sales.json', (json) => { // 获取数据
        let top = json['2018']['top']
        // 构造表头
        let thead = '<thead><tr><th>省份</th><th>品牌</th><th>价格</th></tr></thead>'
        // 构造表体
        let tbody = '<tbody>'
        for (k in top) {
            tbody += '<tr>'
            tbody += '<td>' + k + '</td>'
            tbody += '<td>' + top[k]['type'] + '</td>'
            tbody += '<td>' + top[k]['price'] + '</td>'
            tbody += '</tr>'
        }
        tbody += '</tbody>'
        // 构造html代码
        table = table.replace('{thead}', thead)
        table = table.replace('{tbody}', tbody)
        // 将构造好的html代码加入到页面
        $('#chart-table-t').append($(table))
        // 计算行高
        console.log($('#chart-table-t')[0].offsetHeight)
        // '.tbl-content' consumed little space for vertical scrollbar, scrollbar width depend on browser/os/platfrom. Here calculate the scollbar width .
        $(window).resize(function() {
            var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width()
            $('.tbl-header').css({ 'padding-right': scrollWidth })
        })
    })
})

