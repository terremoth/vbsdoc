document.addEventListener("DOMContentLoaded", _ => {

    document.querySelector(".hamburguer-menu-icon").addEventListener("click", evt => {
        let navUl = document.querySelector("#navbar ul");
        let nav = document.querySelector("#navbar");
        if (navUl.style.display === "block") {
            navUl.style.display = "none";
            nav.style.position = "unset";
        } else {
            navUl.style.display = "block";
            nav.style.position = "fixed";
        }
    });

    // window.resizeEventTimeout = 0;
    function chooseIfCloseMenuForMobile() {
        let navUl = document.querySelector("#navbar ul");
        let nav = document.querySelector("#navbar");

        if (window.innerWidth >= 600) {
            navUl.style.display = "block";
            nav.style.position = "unset";
        } else {
            navUl.style.display = "none";
            nav.style.position = "unset";
        }
    }

    window.addEventListener("resize", _ => {

        // clearTimeout(resizeEventTimeout);

        // window.resizeEventTimeout = setTimeout(function() {
        chooseIfCloseMenuForMobile();
        // }, 250);

    });

    document.querySelectorAll(".nav-link").forEach(el => {
        el.addEventListener("click", chooseIfCloseMenuForMobile);
    });

});

///*
document.querySelectorAll('code').forEach((codeBlock, i) => {
    // Captura o código e remove indentação comum
    const lines = codeBlock.textContent.split('\n');
    while (lines.length && lines[0].trim() === '') lines.shift();
    while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();

    let minIndent = null;
    for (const line of lines) {
        const match = line.match(/^(\s*)\S/);
        if (match) {
            const indentLen = match[1].length;
            minIndent = minIndent === null ? indentLen : Math.min(minIndent, indentLen);
        }
    }

    const cleaned = minIndent > 0
        ? lines.map(line => line.slice(minIndent)).join('\n')
        : lines.join('\n');

    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    wrapper.style.marginBottom = '1em';

    const button = document.createElement('button');
    button.textContent = 'Copy';
    button.style.position = 'absolute';
    button.style.top = '5px';
    button.style.right = '5px';
    button.style.zIndex = '10';
    button.style.padding = '4px 8px';
    button.style.fontSize = '12px';
    button.style.cursor = 'pointer';

    const textarea = document.createElement('textarea');
    textarea.value = cleaned;

    codeBlock.parentNode.replaceChild(wrapper, codeBlock);
    wrapper.appendChild(button);
    wrapper.appendChild(textarea);

    const cm = CodeMirror.fromTextArea(textarea, {
        mode: "vb",
        theme: "dracula",
        lineNumbers: true,
        readOnly: true,
        viewportMargin: Infinity
    });


    button.addEventListener('click', () => {
        navigator.clipboard.writeText(cm.getValue()).then(() => {
            const original = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => button.textContent = original, 1500);
        });
    });
});

//*/