// let html = '<a class="nope" href="/yep">Yep</a>';
// html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');    // <a href="/yep">Yep</a>


// let html = '<a class="yep" href="/yep" id="nope">Yep</a>';
// html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');     // <a href="/yep" class="yep">Yep</a>



const input = "One two three";
input.replace(/two/, '($`)');       // One (One ) three
input.replace(/two/, '($&)');       // One (two) three
input.replace(/two/, "($')");       // One ( three) three
input.replace(/two/, "($$)");       // One ($) three
