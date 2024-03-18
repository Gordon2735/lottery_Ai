# Export Your ChatGPT Conversations to Markdown in a Second

[

![Matija Žiberna](https://miro.medium.com/v2/resize:fill:88:88/1*u0T8S68KT8ZuOWiT3Z8vAQ.jpeg)

](https://medium.com/@matijazib?source=post_page-----3af734761c9b--------------------------------)

[Matija Žiberna](https://medium.com/@matijazib?source=post_page-----3af734761c9b--------------------------------)

Jun 12, 2023

Transforming your ChatGPT conversations into a Markdown format has never been easier. Follow these simple steps to take advantage of this capability:

1. Open the ChatGPT conversation you wish to export.
2. Right-click anywhere on the page and select ‘Inspect’ from the context menu.
3. In the new panel that opens, navigate to the ‘Console’ tab.
4. Copy the below code and paste it into the console input field, then press enter:

![](https://miro.medium.com/v2/resize:fit:630/1*bslh2_eux5o7dmLSIH4v7g.png)

```javascript
function h(html) {
    return html.replace(<p> g, '')
    .replace(<p>/g, '')
    .replace(<b>/g, '')
    .replace(<b>/g, '')
    .replace(<i>/g, '')
    .replace(<i>/g, '')
    .replace(<code[^>]>/g, (match) => {
        const lm = match.match(class="" language-(\[^"\]\*)"/);

    return lm ? '' + lm[1] + '' : '';
 })
 .replace(<code[^>]> /g, '')
 .replace(<[^>]> /g, '')
 .replace(Copy code /g, '')
 .replace(This content may violate our content policy. If you believe this to be in error, please submit your feedback — your input will aid our research in this area./g, '')
 .trim();
}

(() => {
    const e = document.querySelectorAll(".text-base");
    let t = "";

    for (const s of e) {
        if (s.querySelector(".whitespace-pre-wrap")) {
            t += `${s.querySelector('img') ? 'You' : 'ChatGPT'}`:
            `${h(s.querySelector(".whitespace-pre-wrap").innerHTML)}`;
    }
 }

 const o = document.createElement("a");
 o.download = "Conversation with ChatGPT.md";
 o.href = URL.createObjectURL(new Blob([t]));
 o.style.display = "none"; document.body.appendChild(o);
 o.click();
})();
```

In just a few moments, a .md file with your full chat history will be downloaded. Now, you can easily edit your conversation using your preferred markdown editor such as VS Code.

Credits for the original code creator goes to the author. Happy exporting!

You can find the original code [here](https://www.reddit.com/r/ChatGPT/comments/zm237o/save_your_chatgpt_conversation_as_a_markdown_file/).

[

ChatGPT

](https://medium.com/tag/chatgpt?source=post_page-----3af734761c9b---------------chatgpt-----------------)
