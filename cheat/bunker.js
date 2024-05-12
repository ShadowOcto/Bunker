// ==UserScript==
// @name         Bunker
// @namespace    https://osas.solutions
// @version      1
// @description  Cheat for Krunker.io
// @author       Bunker Development
// @match        *://https://krunker.io/*
// @run-at      document-start
// ==/UserScript==

(function() {
    window.addEventListener('load', () => {
        console.log('%cBunker Loaded.', 'font-size: 30px');

        const customStyles = document.createElement("link");
        customStyles.setAttribute("rel", "stylesheet");
        customStyles.setAttribute("href", "https://shadowocto.github.io/Bunker/cheat/bunker.css");
        document.body.appendChild(customStyles);

        const watermarkElement = document.createElement("div");
        watermarkElement.classList.add("watermark");
        watermarkElement.setAttribute("id", "watermark");
        document.body.appendChild(watermarkElement);

        const watermarkText = document.createElement("span");
        watermarkText.classList.add("watermark-text");
        watermarkText.appendChild(document.createTextNode('Bunker v0.1 (Very Real Cheat)'));
        watermarkElement.appendChild(watermarkText);
    });
})();
