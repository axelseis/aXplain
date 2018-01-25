


export function getMousePosition(ev) {
    ev = ev || window.event;

    const propsHandler = ev.touches ? ev.touches[0] : ev;
    const targetEl = ev.currentTarget || ev.target;

    var pageX = propsHandler.pageX;
    var pageY = propsHandler.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
        left: pageX,
        top: (pageY - getOffset(targetEl.parentNode).top)
    };
}

export function getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
        top: rect.top + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft,
        width: rect.width,
        height: rect.height
    }
}

export function getDOMElementIndex(el) {
    return Array.prototype.indexOf.call(el.parentNode.children, el);
}


export const eventMap = {};

(function () {
    var eventReplacement = {
        "mousedown": ["touchstart mousedown", "mousedown"],
        "mouseup": ["touchend mouseup", "mouseup"],
        "click": ["touchstart click", "click"],
        "mousemove": ["touchmove mousemove", "mousemove"]
    };


    for (let i in eventReplacement) {
        if (typeof window["on" + eventReplacement[i][0]] == "object") {
            eventMap[i] = eventReplacement[i][0];
        }
        else {
            eventMap[i] = eventReplacement[i][1];
        };
    };
})();