const input = "Regex pros know the difference between\n" +
        "<i>greedy</i> and <i>lazy</i> matching.";
input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
// Regex pros know the difference between
// <strong>greedy</i> and <i>lazy</strong> matching.

input.replace(/<i>(.*?)<\/i>/ig, '<string>$1</string>');
// Regex pros know the difference between
// <string>greedy</string> and <string>lazy</string> matching.