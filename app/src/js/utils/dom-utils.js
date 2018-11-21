export const screenSize = () => {
    let w = window,
        d = document,
        documentElement = d.documentElement,
        body = d.querySelector("body"),
        width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
        height =
            w.innerHeight || documentElement.clientHeight || body.clientHeight;

    return { width, height };
};
export const getElementSize = elem => {
    if (elem) {
        let width = document.getElementById(elem).offsetWidth || elem.innerWidth || elem.clientWidth,
            height = document.getElementById(elem).offsetHeight || elem.innerHeight || elem.clientHeight;

        return { width, height };
    }
};

export const scrollToTop = (scroll_duration = 800) => {
    let time_interval = 15;
    let scroll_step = -window.scrollY / (scroll_duration / time_interval);

    let scroll_interval = setInterval(() => {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scroll_step);
        } else clearInterval(scroll_interval);
    }, time_interval);
};

export const fireClick = node => {
    if (document.createEvent) {
        const evt = document.createEvent("MouseEvents");
        evt.initEvent("click", true, false);
        node.dispatchEvent(evt);
    } else if (document.createEventObject) {
        node.fireEvent("onclick");
    } else if (typeof node.onclick === "function") {
        node.onclick();
    }
};
