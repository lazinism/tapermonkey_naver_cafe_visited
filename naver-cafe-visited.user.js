// ==UserScript==
// @name         카페회색
// @namespace    http://nokduro.com/
// @version      2023-12-20
// @description  글자색회색
// @author       귀챠니즘
// @match        https://cafe.naver.com/nokduro*
// @match        https://cafe.naver.com/MyCafeIntro.nhn*
// @match        https://cafe.naver.com/ArticleList.nhn*
// @match        https://cafe.naver.com/ca-fe/cafes/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=naver.com
// @run-at document-start
// ==/UserScript==
document.head.innerHTML+=`<style>a.article:visited,a.tit:visited,a.m-tcol-c:visited{color:#ccc !important;}</style>`;
