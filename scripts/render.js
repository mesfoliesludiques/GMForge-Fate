$('body').append('<link rel="stylesheet" href="css/charsheet.css" type="text/css" />');

HTML_TEMPLATE_CACHE = {};

loadTemplate = function(path) {
    if ( path in HTML_TEMPLATE_CACHE ) return HTML_TEMPLATE_CACHE[path];
    let html = $.get({
        url: path,
        dataType: 'html',
        async: false
    }).responseText;
    HTML_TEMPLATE_CACHE[path] = html;
    return html;
}

sync.render("FATE_charsheet", function(obj, app, scope) {
    let html = loadTemplate("html/charsheet.html");
    let renderedhtml = sync.render("ui_processUI")(obj, app, {display : html});
    return renderedhtml;
});
