# Example: Details element can be styled using CSS based on its state

```html
<!doctype html>

<html>
    <head>
        <style>
            details[open] > summary {
                color: green;
            }
        </style>
    </head>

    <body>
        <h1>Details element can be styled using CSS based on its state</h1>

        <p>In this example the label will change color when opened.</p>

        <details>
            <summary>Server status</summary>

            <p>All servers are operating normally.</p>
        </details>
    </body>
</html>
```

​

RUN CODE

```javascript
var editor = CodeMirror(document.getElementById('codeeditor'), {
    value: `${
    <!DOCTYPE html> <html> <head> <style> details[open] > summary { color: green; } </style> </head> <body> <h1>Details element can be styled using CSS based on its state</h1> <p>In this example the label will change color when opened.</p> <details> <summary>Server status</summary> <p>All servers are operating normally.</p> </details> </body> </html>
    }`,
    theme: 'neo',
    mode: 'htmlmixed',
    htmlMode: !1,
    lineNumbers: !1,
    matchBrackets: !1,
    smartIndent: !1
});
$('iframe').contents().find('body').html(editor.getValue()),
    $('button').click(function () {
        $('iframe').contents().find('body').html(editor.getValue());
    });
```

## Further information:

-   [HTML `<details>` Tag](https://www.thewebmaster.com/html/tags/details/)
