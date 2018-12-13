const html = 
    `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
    `<a href='/bar' Class="bar">Bar</a>\n` +
    `<a href="/baz">Baz</a>\n` +
    `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;


function santizeATag(aTag) {
    // 태그에서 원하는 부분을 추출
    const parts = aTag.match(/<a\s+(.*?)>(.*?)<\/a>/i);
    // parts[1]은 여는 <a> 태그에 들어있는 속성
    // parts[2]는 <a>와 </a> 사이에 있는 텍스트
    const attributes = parts[1]
        // 속성 분해
        .split(/\s+/);
    return '<a ' + attributes
        // class, id, href 속성 필요
        .filter(attr => /^(?:class|id|href)[\s=]/i.test(attr))
        // 스페이스 한 칸으로 구분해서 합친다.
        .join(' ')
        // 여는 <a> 태그를 완성
        + '>'
        // 텍스트를 추가
        + parts[2]
        // 마지막으로 태그를 닫는다
        + '</a>';
}


html.match(/<a .*?>(.*?)<\/a>/ig);
// [ '<a class="foo" href="/foo" id="foo">Foo</a>',
//   `<a href='/bar' Class="bar">Bar</a>`,
//   '<a href="/baz">Baz</a>',
//   `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>` ]
// <a> tag found at 0. contents: Foo
// <a> tag found at 44. contents: Bar
// <a> tag found at 79. contents: Baz
// <a> tag found at 102. contents: Qux


html.replace(/<a .*>(.*?)<\/a>/ig, function(m, g1, offset) {
    console.log(`<a> tag found at ${offset}. contents: ${g1}`);
});
/* <a> tag found at 0. contents: Foo
<a> tag found at 44. contents: Bar
<a> tag found at 79. contents: Baz
<a> tag found at 102. contents: Qux
<a> tag found at 0. contents: Foo
<a> tag found at 44. contents: Bar
<a> tag found at 79. contents: Baz
<a> tag found at 102. contents: Qux
undefined
undefined
undefined
undefined */

html.replace(/<a .*?<\/a>/ig, function(m) {
    return santizeATag(m);
});
/* <a> tag found at 0. contents: Foo
<a> tag found at 44. contents: Bar
<a> tag found at 79. contents: Baz
<a> tag found at 102. contents: Qux
<a class="foo" href="/foo" id="foo">Foo</a>
<a href='/bar' Class="bar">Bar</a>
<a href="/baz">Baz</a>
<a href="/qux">Qux</a> */

html.replace(/<a .*<\/a>/ig, santizeATag);
/* <a> tag found at 0. contents: Foo
<a> tag found at 44. contents: Bar
<a> tag found at 79. contents: Baz
<a> tag found at 102. contents: Qux
<a class="foo" href="/foo" id="foo">Foo</a>
<a href='/bar' Class="bar">Bar</a>
<a href="/baz">Baz</a>
<a href="/qux">Qux</a> */