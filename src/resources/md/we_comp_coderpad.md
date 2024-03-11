# Web Components 101: Vanilla JavaScript

July 14, 2021 • [Development](https://coderpad.io/blog/development/)

By Corbin Crutchley

[![](https://coderpad.io/wp-content/uploads/2021/07/lit_header.jpg)](https://coderpad.io/wp-content/uploads/2021/07/lit_header.jpg)

Many modern web apps today are built using components. While frameworks like React exist to add an implementation, web components seek to make those practices standardized and part of your browser.

In this article, we’ll touch on what web components are, how we can build them without a framework, and some limitations to keep in mind during development. Later, in a follow-up article, we’ll show how a lightweight framework (such as Lit) can provide quality-of-life improvements for those looking to build larger scale applications.

## Learn how to run front-end developer interviews that don’t suck

[Read our guide](https://coderpad.io/blog/interviewing/5-tips-for-interviewing-frontend/)

![](https://coderpad.io/wp-content/uploads/2022/08/Illustration-of-man-with-beard-popping-out-of-computer-chat.png)

## What are Web Components?

There are a lot of misconceptions about what web components even are. While some might assume that it’s simply the ability to make custom elements with dedicated UI, style, and logic in one consolidated place (more on that later), there’s definitely more to it

Web components are a mix of 3 different web standards that, when utilized together, can offer a viable alternative to using a framework like React which offers similar functionality. These web standards consist of:

1. [Custom elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements) – the ability to create new elements that will provide unique UI and app logic when the related HTML tag is added
2. [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) – the ability to keep specific elements segmented off from your main document DOM, allowing you to avoid document collision issues
3. [HTML templates](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) – elements that allow you to write HTML that is not drawn to the page, but can be used as a template for markup to reuse elsewhere

While the Shadow DOM and HTML templates are undoubtedly useful in applications, we’ll be focusing on custom elements today, as we feel they’re the easiest place to start in introducing web components as a whole.

> While these are the only official specifications part of Web Components, they’re often utilized with other JavaScript and browser features to create a cohesive development experience.
>
> One of these features often used is [JavaScript Modules](https://v8.dev/features/modules). While the concept of breaking your app into multiple files has been commonplace with bundlers like Webpack for a while, being built into the browser has been game changing.

## What are Custom Elements?

At their core, custom elements essentially allow you to create new HTML tags. These tags are then used to implement custom UI and logic that can be used throughout your application.

`<!-- page.html -->

<!-- These are custom elements, combined to make a page -->

<page-header></page-header>
<page-contents></page-contents>
<page-footer></page-footer>`Code language: HTML, XML (xml)

These components can be as simple as a styled button or as complex as an entire page of your application, complete with your business logic.

While we tend to think of HTML tags as directly mapping to a single DOM element, that’s not always the case with custom elements. For example, the “page-header” tag in the example above might contain “nav” and “a” elements as a list of their children.

![](https://coderpad.io/wp-content/uploads/2021/07/pasted-image-0.png)

Because of this, we’re able to improve an app’s organization by reducing the amount of tags visible in a single file to read with better flow.

But custom elements aren’t just made up of HTML – you’re able to associate JavaScript logic with these tags as well! This enables you to keep your logic alongside it’s associated UI. Say your header is a dropdown that’s powered by JavaScript. Now you can keep that JavaScript inside of your “page-header” component, keeping your logic consolidated.

Finally, a significant improvement that components provide is composability. You’re able to use these components on different pages, allowing you to keep your header code in sync between pages. This reduces the potential for having variations in standard components – like having multiple differently sized buttons in a page – that might confuse your users. As long as you’re vigilant about utilizing your existing components, you’re able to make your app more consistent this way.

## History

But web components didn’t come from nowhere. While web components enjoy large-scale usage now, that wasn’t always the case. Let’s walk through a short history of web components and the related ecosystem.

-   2010:

    -   Angular.js made open-source

-   2011:

    -   [Web components are announced at a conference by Alex Russell](https://fronteers.nl/congres/2011/sessions/web-components-and-model-driven-views-alex-russell) (then Sr Staff Engineer at Google, working on web platform team)

-   2013:

    -   [Polymer (Google’s web component framework) public development began](https://www.youtube.com/watch?v=DH1vTVkqCDQ)
    -   [React open-sourced](https://www.youtube.com/watch?v=GW0rj4sNH2w)

-   2016:

    -   [YouTube rewritten in Polymer](https://blog.youtube/news-and-events/a-sneak-peek-at-youtubes-new-look-and/)

-   2018:
    -   [Polymer announces start of migration to “LitElement”](https://www.polymer-project.org/blog/2018-05-02-roadmap-update#libraries)
    -   [Firefox enables web components (Polyfills no longer needed)](https://www.mozilla.org/en-US/firefox/63.0/releasenotes/)

While JavaScript frameworks with similar concepts have been around since at least 2010, web components have found a way to standardize those concepts in the browser.

it’s clear that the core concepts at play in web components have allowed for dramatic adoption since then. For example React, which has a lot of the same ideas at play, now has a major market share of websites and applications written in JavaScript.

Now that we’ve seen a short history of web components, let’s take a look at how to build custom elements without using a framework.

## Lifecycle Methods

While many implementations of components have differences, one concept that is fairly universal is “lifecycle methods”. At their core, lifecycle methods enable you to run code when events occur on an element. Even frameworks like React, which haved moved away from classes, still have similar concepts of doing actions when a component is changed in some way.

Let’s take a look at some of the lifecycle methods that are baked into the browser’s implementation.

Custom elements have 4 lifecycle methods that can be attached to a component.

.wp-block-table table, th, td { border: 1px solid black; padding: 10px; } figcaption { line-height: 18px; margin: 10px 0 30px 0; font-size: 12px; }

<table><tbody><tr><td>connectedCallback</td><td>Ran when attached to the DOM</td></tr><tr><td>disconnectedCallback</td><td>Ran when unattached to the DOM</td></tr><tr><td>attributeChangedCallback</td><td>Ran when one of the web component’s attributes is changed. Must explicitly track</td></tr><tr><td>adoptedCallback</td><td>Ran when moved from one HTML document to another</td></tr></tbody></table>

> While each of them has their uses, we’ll primarily be focusing on the first 3. `adoptedCallback` is primarily useful in niche circumstances and is therefore difficult to make a straightforward demo of.

Now that we know what the lifecycle methods are, let’s see an example of them in action.

### Connection Lifecycles

The first two lifecycle methods we’ll be talking about are typically used as a pair together: `connectedCallback` and `disconnectedCallback`

`connectedCallback` is ran when a component is mounted onto the DOM. This means that when you want the element to be shown, you can change your `innerHTML`, add event listeners to elements, or do any other kind of code logic meant to setup your component.

Meanwhile, `disconnectedCallback` is run when the element is being removed from the DOM. This is often used to remove event listeners added during the `connectedCallback`, or do other forms of cleanup required for the element.

Here’s a simple web component that renders a header with the text “Hello world”.

``class MyComponent extends HTMLElement {
  connectedCallback() {
      console.log("I am connecting");
      this.innerHTML = `<h1>Hello world</h1>`;
}

disconnectedCallback() {
console.log("I am leaving");
}
}

customElements.define('my-component', MyComponent);``Code language: JavaScript (javascript)

[frame source](https://coderpad.io/register/)

<!-- <!DOCTYPE html>

<html lang="en"> -->
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="CoderPad is the best tool available for conducting programming phone screen interviews. Edit code and run it with your candidate, realtime in the browser.">
<link rel="shortcut icon" href="https://d1a7p14oqam61r.cloudfront.net/assets/coderpad_logo_32x32_favicon-c192e2443888b80109075a64c17a6f544fbbd5f4c01c918764c05355671bdab5.png">
<link rel="apple-touch-icon" href="https://d1a7p14oqam61r.cloudfront.net/assets/coderpad_logo_32x32_favicon-c192e2443888b80109075a64c17a6f544fbbd5f4c01c918764c05355671bdab5.png">
<title>Java | CoderPad</title>
<meta property="og:title" content="Java | CoderPad">
<meta property="og:description" content="An online IDE for technical interviews offering a better candidate experience.">
<meta property="og:image" content="https://d1a7p14oqam61r.cloudfront.net/assets/coderpad_og_image-fa30e555ba90b1345a211d03525594e1f034e1d524dc675f709e5c0a4146f1ac.png">
<meta property="og:url" content="https://embed.coderpad.io/sandbox?question_id=181059&amp;use_question_button">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" media="all" href="https://d1a7p14oqam61r.cloudfront.net/assets/application-25c4a02d3a3cc9bf5dbc0dce852fd7ceb555eb0bf06d82c5fb555a88d665c06b.css" />
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="MUag+5WcJZORUNGgCoXWLHQ5ZCYkbAZ579WBxXiIF6ynkXfMfZBpzt86U9QddaIpQbqSsMLO1BP2ZY7mZQi6Kw==" />

<script async src="https://www.googletagmanager.com/gtag/js?id=G-BNB68819RG"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-BNB68819RG');
  </script>
<script>
    window.CoderPad = window.CoderPad || {};
    window.CoderPad.FLAGS = {};
    window.CoderPad.STITCH_URL = 'https://hooks.stitchdata.com/v1/clients/151432/token/10f397163d7c1ee5eb232552b0540ffb93e5164ec6811c937a9fd0987d7a12ab';
    window.hsConversationsSettings = {
      loadImmediately: false,
    }
    window.CoderPad.ASSET_HOST = 'https://d1a7p14oqam61r.cloudfront.net'
      window.CoderPad.ASSETS = {
        'focus_time_warning.mp3': 'https://d1a7p14oqam61r.cloudfront.net/assets/focus_time_warning-653d0734307fb164b8881091ca780c436cd8f9332c81e5f69011b90b42484e23.mp3'
      }
    window.CoderPad.AUTOCOMPLETE_URL = 'https://autocomplete.coderpad.io'
    window.CoderPad.CANONICAL_DOMAIN = 'coderpad.io'
    window.CoderPad.CANONICAL_URL = 'https://coderpad.io'
    window.CoderPad.COLORS = ['#36BFF9', '#FBBD23', '#FC6E8D', '#A0D911', '#A78BFA', '#50B4B1']
    window.CoderPad.ENVIRONMENT = 'production'
    window.CoderPad.RELEASE = '7179f305d31a5b3e917500f601646bd18d194c8d'
    window.CoderPad.EXECUTE_URL = 'https://execute.coderpad.io'
    window.CoderPad.AI_CHAT_SERVICE_URL = 'https://ai-chat.coderpad.io'
    window.CoderPad.SESSION_RECORDING_SERVICE_URL = 'https://playback.coderpad.io'
    window.CoderPad.PROJECT_IFRAME_URL_SUFFIX = 'cdpad.io'
    window.CoderPad.SANDBOX_INTROS = [
      "This is a sandbox environment that allows you to experiment with CoderPad's execution capabilities.",
      "It's a temporary throw-away session only visible to you so you can test out the programming environment.",
      "Once you select a language, to execute your code simply hit the 'Run' button which will be located in the",
      "top left hand of your screen.",
      "",
      "To see more information about the language you have selected, hit the 'Info' button beside the language dropdown.",
      "You'll find what version of the language is running and the packages available for the given language."
    ]
    window.CoderPad.SHORTLINK_URL = 'https://cpad.io'
    window.CoderPad.DRAWING_URL = 'https://drawing.coderpad.io'
    window.CoderPad.USERFLOW_APP_ID = 'ct_dexqlwm5vrfmhbwtjxo2brslw4'
    window.CoderPad.USERFLOW_ENTERPRISE_ENV_ID = 'ct_ezu4jlnt3vbfrjvkkvrn7ysq4a'
    window.CoderPad.VARIANCE_WEBHOOK_URL = 'https://coderpad.variance.com/webhook/variance_js/1f1963ca-1123-4bca-aa97-83bdad6417c1'
    window.CoderPad.HUBSPOT_PORTAL_ID = '26307476'
    window.CoderPad.HUBSPOT_CUSTOM_SCRIPT_SRC = 'https://js-eu1.hs-scripts.com/26307476.js'
    window.CoderPad.INTEGRATIONS_SERVICE_URL = 'https://ats-api.coderpad.io'
    window.CoderPad.GOOGLE_CLIENT_ID = '210528517372-afkrdc2g5l84dva5pred8glfe37aiafi.apps.googleusercontent.com'

    window.CoderPad.LANGUAGES = {"bash":{"default_path":"/tmp/project/main.bash","language_client_id":"bash","display":"Bash","version":"GNU bash, version 5.1","tab_size":2,"mode":"text/x-sh","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","example":"for i in `seq 1 10`;\ndo\n  echo \"Hello, World! - \"$i\ndone\n","name":"bash"},"c":{"default_path":"/tmp/project/main.c","language_client_id":"c","display":"C","version":"GCC 12.1 (C17)","tab_size":2,"mode":"text/x-csrc","category":"compiled","execution":true,"custom_file_allowed":true,"autocomplete":{"type":"legacy"},"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"#include \u003cstdio.h\u003e\n\n// To execute C, please define \"int main()\"\n\nint main() {\n  for (int i = 0; i \u003c 5; i++) {\n    printf(\"Hello, World\\n\");\n  }\n  return 0;\n}\n","name":"c"},"clojure":{"default_path":"/tmp/project/main.clj","language_client_id":"clojure","display":"Clojure","version":"Clojure 1.11","tab_size":2,"mode":"clojure","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":";;","example":"(defn hello [times]\n  (prn \"Hello, World\")\n  (cond (\u003e times 1) (hello (- times 1)))\n)\n\n(hello 5)\n","name":"clojure"},"coffeescript":{"default_path":"/tmp/project/main.coffee","display":"CoffeeScript","version":"CoffeeScript 2.7 under Node.js v18","tab_size":2,"mode":"coffeescript","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","block_comment_tokens":["###","###"],"example":"_ = require 'lodash'\n\nsayHello = -\u003e\n  console.log 'Hello, World'\n\nsayHello() for [1..5]\n","name":"coffeescript"},"cpp":{"default_path":"/tmp/project/main.cpp","language_client_id":"cpp","display":"C++","version":"GCC 12.1.0 (C++20)","tab_size":2,"mode":"text/x-c++src","category":"compiled","execution":true,"custom_file_allowed":true,"test_case_grading":true,"autocomplete":{"type":"lsp","diagnostics":false},"database_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"#include \u003ciostream\u003e\nusing namespace std;\n\n// To execute C++, please define \"int main()\"\nint main() {\n  auto words = { \"Hello, \", \"World!\", \"\\n\" };\n  for (const char* const\u0026 word : words) {\n    cout \u003c\u003c word;\n  }\n  return 0;\n}\n","packages":{"libpqxx":{"database":"postgresql","display":"libpqxx (Postgres)","example":"#include \u003ciostream\u003e\n#include \u003cpqxx/pqxx\u003e\n\nint main()\n{\n  try\n  {\n    pqxx::connection C{\"postgresql:///coderpad?host=/tmp/postgresql/socket\"};\n    pqxx::work W{C};\n\n    pqxx::result R{W.exec(\"SELECT id, first_name, last_name, salary FROM employees\")};\n\n    int count = R.size();\n    std::cout \u003c\u003c \"Found \" \u003c\u003c count \u003c\u003c \" employees:\\n\";\n    for (auto row: R)\n      std::cout \u003c\u003c row[0].c_str() \u003c\u003c \" | \" \u003c\u003c row[1].c_str() \u003c\u003c \" | \" \u003c\u003c row[2].c_str() \u003c\u003c '\\n';\n\n    // Execute SQL to insert a record\n    W.exec(\"INSERT INTO employees (first_name, last_name) VALUES ('Person \" + std::to_string(count) + \"', 'C++');\");\n    W.commit();\n    C.disconnect();\n  }\n  catch (std::exception const \u0026e)\n  {\n    std::cerr \u003c\u003c e.what() \u003c\u003c '\\n';\n    return 1;\n  }\n  return 0;\n}\n","name":"libpqxx"},"mysql_connector":{"database":"mysql","display":"MySQL Connector","example":"#include \u003cstdlib.h\u003e\n#include \u003ciostream\u003e\n\n#include \"mysql_connection.h\"\n\n#include \u003ccppconn/driver.h\u003e\n#include \u003ccppconn/exception.h\u003e\n#include \u003ccppconn/resultset.h\u003e\n#include \u003ccppconn/statement.h\u003e\n#include \u003ccppconn/prepared_statement.h\u003e\n\nusing namespace std;\n\nint main(void)\n{\n\ntry {\n  sql::Driver *driver;\n  sql::Connection *connection;\n  sql::Statement *statement;\n  sql::PreparedStatement *prepared_statement;\n  sql::ResultSet *result;\n\n  // Create a connection\n  driver = get_driver_instance();\n  connection = driver -\u003e connect(\"unix:///tmp/mysql/socket/mysqld.sock\", \"coderpad\", \"\");\n  // Connect to the coderpad database\n  connection -\u003e setSchema(\"coderpad\");\n\n  // Select all rows from the employees table.\n  statement = connection-\u003ecreateStatement();\n  result = statement-\u003eexecuteQuery(\"SELECT * FROM employees;\");\n  sql::ResultSetMetaData *result_meta = result -\u003e getMetaData();\n  int columnCount = result_meta -\u003e getColumnCount();\n  int count = 0;\n\n  cout \u003c\u003c \"All rows in the employees table:\" \u003c\u003c endl;\n  while (result -\u003e next()) {\n    // Access result set by index, 1-indexed\n    for (int i = 1; i \u003c= columnCount; i++) {\n      cout \u003c\u003c result -\u003e getString(i) \u003c\u003c \" | \" ;\n    }\n    cout \u003c\u003c endl;\n    count++;\n  }\n  cout \u003c\u003c \"There are \" \u003c\u003c count \u003c\u003c \" rows.\" \u003c\u003c endl;\n\n  // Insert a new row using a prepared statement\n  prepared_statement = connection -\u003e prepareStatement(\"INSERT INTO employees (first_name, last_name) VALUES (?, ?)\");\n  prepared_statement -\u003e setString(1, \"Person \" + to_string(count));\n  prepared_statement -\u003e setString(2, \"C++\");\n  prepared_statement -\u003e executeUpdate();\n  delete prepared_statement;\n\n  delete connection;\n\n} catch (sql::SQLException \u0026e) {\n  cout \u003c\u003c \"# ERR: SQLException in \" \u003c\u003c __FILE__;\n  cout \u003c\u003c \"(\" \u003c\u003c __FUNCTION__ \u003c\u003c \") on line \" \u003c\u003c __LINE__ \u003c\u003c endl;\n  cout \u003c\u003c \"# ERR: \" \u003c\u003c e.what();\n  cout \u003c\u003c \" (MySQL error code: \" \u003c\u003c e.getErrorCode();\n  cout \u003c\u003c \", SQLState: \" \u003c\u003c e.getSQLState() \u003c\u003c \" )\" \u003c\u003c endl;\n}\n\ncout \u003c\u003c endl;\n\nreturn EXIT_SUCCESS;\n}\n","name":"mysql_connector"}},"name":"cpp"},"csharp":{"default_path":"/tmp/project/Main.cs","language_client_id":"csharp","display":"C#","version":".NET Core 7.0","tab_size":4,"mode":"text/x-csharp","category":"compiled","execution":true,"custom_file_allowed":true,"test_case_grading":true,"autocomplete":{"type":"legacy"},"database_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"using System;\n\n// To execute C#, please define \"static void Main\" on a class\n// named Solution.\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        for (var i = 0; i \u003c 5; i++)\n        {\n            Console.WriteLine(\"Hello, World\");\n        }\n    }\n}\n","packages":{"dapper_mysql":{"database":"mysql","display":"Dapper (MySQL)","example":"using System;\nusing Dapper;\nusing MySql.Data.MySqlClient;\n\n// Define a class that matches the employees table.\npublic class Employee\n{\n    #nullable enable\n    public int id { get; set; }\n    public string? first_name { get; set; }\n    public string? last_name { get; set; }\n    public int? salary { get; set; }\n}\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        using (var connection = new MySqlConnection(\"Server=/tmp/mysql/socket/mysqld.sock; Protocol=unix; Database=coderpad; Username=coderpad\") )\n        {\n            // Select all rows from the employees table.\n            string employeesSql = \"SELECT * FROM employees;\";\n            Console.WriteLine($\"Running query: {employeesSql}\");\n            var employees = connection.Query\u003cEmployee\u003e(employeesSql);\n            int count = 0;\n            foreach (var employee in employees)\n            {\n                Console.WriteLine(employee.id + \", \" + employee.first_name + \", \" + employee.last_name + \", \" + employee.salary);\n                count++;\n            }\n\n            // Insert a new row.\n            string insertSql = $\"INSERT INTO employees (first_name, last_name, salary) VALUES ('Person {count}', 'Csharp', {count * 10000});\";\n            Console.WriteLine($\"Running query: {insertSql}\");\n            connection.Execute(insertSql);\n        }\n    }\n}\n","name":"dapper_mysql"},"dapper_postgresql":{"database":"postgresql","display":"Dapper (Postgresql)","example":"using System;\nusing Dapper;\nusing Npgsql;\n\n// Define a class that matches the employees table.\npublic class Employee\n{\n    #nullable enable\n    public int id { get; set; }\n    public string? first_name { get; set; }\n    public string? last_name { get; set; }\n    public int? salary { get; set; }\n}\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        using (var connection = new NpgsqlConnection(\"Host=/tmp/postgresql/socket; Database=coderpad; Username=coderpad\"))\n        {\n            // Select all rows from the employees table.\n            string employeesSql = \"SELECT * FROM employees;\";\n            Console.WriteLine($\"Running query: {employeesSql}\");\n            var employees = connection.Query\u003cEmployee\u003e(employeesSql);\n            int count = 0;\n            foreach (var employee in employees)\n            {\n                Console.WriteLine(employee.id + \", \" + employee.first_name + \", \" + employee.last_name + \", \" + employee.salary);\n                count++;\n            }\n\n            // Insert a new row.\n            string insertSql = $\"INSERT INTO employees (first_name, last_name, salary) VALUES ('Person {count}', 'Csharp', {count * 10000});\";\n            Console.WriteLine($\"Running query: {insertSql}\");\n            connection.Execute(insertSql);\n        }\n    }\n}\n","name":"dapper_postgresql"},"entity_framework_mysql":{"database":"mysql","display":"Entity Framework (MySQL)","example":"using System;\nusing Microsoft.EntityFrameworkCore;\nusing MySql.Data.EntityFrameworkCore;\n\n// Define a class that matches the employees table schema.\npublic class Employee\n{\n    #nullable enable\n    public int id { get; set; }\n    public string? first_name { get; set; }\n    public string? last_name { get; set; }\n    public int? salary { get; set; }\n}\n\npublic class DatabaseContext : DbContext\n{\n    public DbSet\u003cEmployee\u003e employees { get; set; } = null!;\n\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n      optionsBuilder.UseMySQL(\"Server=/tmp/mysql/socket/mysqld.sock; Protocol=unix; Database=coderpad; Username=coderpad\");\n    }\n}\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        using (var db = new DatabaseContext())\n        {\n            // Find all employees.\n            var employees = db.employees;\n            int count = 0;\n            foreach(var employee in employees)\n            {\n                Console.WriteLine(employee.id + \", \" + employee.first_name + \", \" + employee.last_name + \", \" + employee.salary);\n                count++;\n            }\n\n            // Add a new employee.\n            Console.WriteLine($\"Inserting new employee: Person {count}\");\n            var newEmployee = new Employee(){ first_name = $\"Person {count}\", last_name = \"Csharp\", salary = count * 10000 };\n            db.employees.Add(newEmployee);\n            db.SaveChanges();\n        }\n    }\n}\n","name":"entity_framework_mysql"},"entity_framework_postgresql":{"database":"postgresql","display":"Entity Framework (Postgres)","example":"using System;\nusing Microsoft.EntityFrameworkCore;\nusing Npgsql.EntityFrameworkCore.PostgreSQL;\n\n// Define a class that matches the employees table schema.\npublic class Employee\n{\n    #nullable enable\n    public int id { get; set; }\n    public string? first_name { get; set; }\n    public string? last_name { get; set; }\n    public int? salary { get; set; }\n}\n\npublic class DatabaseContext : DbContext\n{\n    public DbSet\u003cEmployee\u003e employees { get; set; } = null!;\n\n    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)\n    {\n      optionsBuilder.UseNpgsql(\"Host=/tmp/postgresql/socket; Database=coderpad; Username=coderpad\");\n    }\n}\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        using (var db = new DatabaseContext())\n        {\n            // Find all employees.\n            var employees = db.employees;\n            int count = 0;\n            foreach(var employee in employees)\n            {\n                Console.WriteLine(employee.id + \", \" + employee.first_name + \", \" + employee.last_name + \", \" + employee.salary);\n                count++;\n            }\n\n            // Add a new employee.\n            Console.WriteLine($\"Inserting new employee: Person {count}\");\n            var newEmployee = new Employee(){ first_name = $\"Person {count}\", last_name = \"Csharp\", salary = count * 10000 };\n            db.employees.Add(newEmployee);\n            db.SaveChanges();\n        }\n    }\n}\n","name":"entity_framework_postgresql"},"mysql_data":{"database":"mysql","display":"MySQL Connector/NET","example":"using System;\nusing MySql.Data.MySqlClient;\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        MySqlConnection connection = new MySqlConnection(\"Host=/tmp/mysql/socket/mysqld.sock; Protocol=unix; Database=coderpad; Username=coderpad\");\n        connection.Open();\n        using var command = new MySqlCommand();\n        command.Connection = connection;\n\n        // Select all rows from the employees table.\n        command.CommandText = \"SELECT * FROM employees;\";\n        Console.WriteLine($\"Running query: {command.CommandText}\");\n        int count = 0;\n        using (MySqlDataReader reader = command.ExecuteReader()) {\n            Console.WriteLine($\"{reader.GetName(0)}, {reader.GetName(1)}, {reader.GetName(2)}, {reader.GetName(3)}\");\n            while (reader.Read())\n            {\n                Console.WriteLine($\"{reader.GetValue(0)}, {reader.GetValue(1)}, {reader.GetValue(2)}, {reader.GetValue(3)}\");\n                count++;\n            }\n        }\n\n        // Insert a new row.\n        command.CommandText = $\"INSERT INTO employees (first_name, last_name, salary) VALUES ('Person {count}', 'Csharp', {count * 10000});\";\n        Console.WriteLine($\"Running query: {command.CommandText}\");\n        command.ExecuteNonQuery();\n    }\n}\n","name":"mysql_data"},"npgsql":{"database":"postgresql","display":"Npgsql","example":"using System;\nusing Npgsql;\n\nclass Solution\n{\n    static void Main(string[] args)\n    {\n        NpgsqlConnection connection = new NpgsqlConnection(\"Host=/tmp/postgresql/socket; Database=coderpad; Username=coderpad\");\n        connection.Open();\n        using var command = new NpgsqlCommand();\n        command.Connection = connection;\n\n        // Select all rows from the employees table.\n        command.CommandText = \"SELECT * FROM employees;\";\n        Console.WriteLine($\"Running query: {command.CommandText}\");\n        int count = 0;\n        using (NpgsqlDataReader reader = command.ExecuteReader()) {\n            Console.WriteLine($\"{reader.GetName(0)}, {reader.GetName(1)}, {reader.GetName(2)}, {reader.GetName(3)}\");\n            while (reader.Read())\n            {\n                Console.WriteLine($\"{reader.GetValue(0)}, {reader.GetValue(1)}, {reader.GetValue(2)}, {reader.GetValue(3)}\");\n                count++;\n            }\n        }\n\n        // Insert a new row.\n        command.CommandText = $\"INSERT INTO employees (first_name, last_name, salary) VALUES ('Person {count}', 'Csharp', {count * 10000});\";\n        Console.WriteLine($\"Running query: {command.CommandText}\");\n        command.ExecuteNonQuery();\n    }\n}\n","name":"npgsql"}},"name":"csharp"},"dart":{"default_path":"/tmp/project/main.dart","language_client_id":"dart","display":"Dart","version":"Dart 3.0","tab_size":2,"mode":"application/dart","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"void main() {\n  for(var i = 0; i \u003c 5; i++) {\n    print('Hello, World!');\n  }\n}\n","name":"dart"},"elixir":{"default_path":"/tmp/project/main.ex","display":"Elixir","version":"Elixir 1.13 (Erlang/OTP 25)","tab_size":2,"mode":"elixir","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","example":"for _ \u003c- 1..5, do: IO.puts \"Hello, World!\"\n","name":"elixir"},"erlang":{"default_path":"/tmp/project/main.erl","display":"Erlang","version":"Erlang/OTP 25","tab_size":2,"mode":"text/x-erlang","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"%","example":"-module(solution).\n-export([start/0]).\n\n% To execute Erlang, please declare the module as \"solution\"\n% and define a method named \"start\" on it.\n\nstart() -\u003e\n  say_hello(5).\n\nsay_hello(0) -\u003e\n  0;\nsay_hello(N) -\u003e\n  io:format(\"Hello, World~n\"),\n  say_hello(N - 1).\n","name":"erlang"},"fsharp":{"default_path":"/tmp/project/Main.fs","display":"F#","version":".NET Core 7.0","tab_size":4,"mode":"text/x-fsharp","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["(*","*)"],"example":"module Solution\n\n[\u003cEntryPoint\u003e]\nlet main argv =\n    printfn \"Hello, World!\"\n    0 // Return an integer exit code\n","name":"fsharp"},"go":{"default_path":"/tmp/project/main.go","language_client_id":"go","display":"Go","version":"Go 1.20","tab_size":2,"mode":"go","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"// To execute Go code, please declare a func main() in a package \"main\"\n\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n  for i := 0; i \u003c 5; i++ {\n    fmt.Println(\"Hello, World!\")\n  }\n}\n","name":"go"},"gsheets":{"display":"Google Sheets","category":"spreadsheets","name":"gsheets"},"haskell":{"default_path":"/tmp/project/Main.hs","display":"Haskell","version":"GHC 9.1","tab_size":2,"mode":"haskell","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"--","block_comment_tokens":["-{","-}"],"example":"-- Solution will run in Haskell Interpreted Mode\n\nmain = putStrLn \"Hello, World!\"\n","name":"haskell"},"html":{"default_path":"/tmp/project/index.html","display":"HTML/JS/CSS","version":"HTML 5","tab_size":2,"mode":"htmlmixed","category":"frontend","execution":true,"block_comment_tokens":["\u003c!--","--\u003e"],"example":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cstyle\u003e\n      body {\n        background-color: #1d2126;\n        color: white;\n      }\n    \u003c/style\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003ch1\u003eHello, World\u003c/h1\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","multifile_example":"\u003chtml\u003e\n  \u003chead\u003e\n    \u003cmeta charset=\"UTF-8\"\u003e\n    \u003ctitle\u003eReact Pad\u003c/title\u003e\n    \u003cscript src=\"https://unpkg.com/react@17.0.2/umd/react.production.min.js\"\u003e\u003c/script\u003e\n    \u003cscript src=\"https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js\"\u003e\u003c/script\u003e\n    \u003cscript src=\"https://unpkg.com/@babel/standalone@7.13.12/babel.min.js\"\u003e\u003c/script\u003e\n  \u003c/head\u003e\n  \u003cbody\u003e\n    \u003cdiv id=\"root\"/\u003e\n  \u003c/body\u003e\n\u003c/html\u003e\n","global_file_path":"/home/coderpad/index.html","global_file_label":"HTML","files":[{"path":"/home/coderpad/index.js","default_path":"/tmp/project/index.js","label":"JS","example":"const Instructions = ()=\u003e{\n  return (\u003cp\u003eWelcome to the 3-pane coding view. We've started you off with a basic \u003cu\u003eReact\u003c/u\u003e project, but feel free to replace it with whatever suits your needs. You can write code separately across the panes or you can write JS and CSS inline in the \u003cb\u003eHTML\u003c/b\u003e file.\u003c/p\u003e)\n}\n\nconst App = () =\u003e {\n  return (\n    \u003cdiv className=\"App\"\u003e\n      \u003ch1\u003eHello React!\u003c/h1\u003e\n      \u003cInstructions/\u003e\n    \u003c/div\u003e\n  )\n}\n\nReactDOM.render(\u003cApp /\u003e, document.getElementById('root'))\n","language":"jsx"},{"path":"/home/coderpad/index.css","default_path":"/tmp/project/index.css","label":"CSS","example":".App {\n  width:500px;\n  border:2px solid black;\n  border-radius:20px;\n  background: linear-gradient(#fff 10%, #f1f1f1 98%, #ccc);\n  padding:0 20px 20px;\n  font-family: monospace;\n}\n\nbody {\n  background: #def;\n}\n","language":"css"}],"name":"html"},"java":{"default_path":"/tmp/project/src/main/java/Solution.java","language_client_id":"java","display":"Java","version":"OpenJDK 20","tab_size":2,"mode":"text/x-java","category":"compiled","execution":true,"test_case_grading":true,"database_allowed":true,"custom_file_allowed":true,"autocomplete":{"type":"lsp","diagnostics":true},"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"/*\n * Click `Run` to execute the snippet below!\n */\n\nimport java.io.*;\nimport java.util.*;\n\n/*\n * To execute Java, please define \"static void main\" on a class\n * named Solution.\n *\n * If you need more classes, simply define them inline.\n */\n\nclass Solution {\n  public static void main(String[] args) {\n    ArrayList\u003cString\u003e strings = new ArrayList\u003cString\u003e();\n    strings.add(\"Hello, World!\");\n    strings.add(\"Welcome to CoderPad.\");\n    strings.add(\"This pad is running Java \" + Runtime.version().feature());\n\n    for (String string : strings) {\n      System.out.println(string);\n    }\n  }\n}\n","packages":{"jdbc_mysql":{"display":"JDBC (MySQL)","database":"mysql","example":"import java.sql.*;\n\nclass Solution {\n  public static void main(String[] args) {\n    try {\n      Connection connection = DriverManager.getConnection(\"jdbc:mysql://localhost:3306/coderpad\",\"coderpad\",\"\");\n\n      System.out.println(\"Current records:\");\n      Statement statement = connection.createStatement();\n      ResultSet resultSet = statement.executeQuery(\"SELECT * from employees\");\n      ResultSetMetaData resultSetMetaData = resultSet.getMetaData();\n      int columnsNumber = resultSetMetaData.getColumnCount();\n      int count = 0;\n      while (resultSet.next()) {\n        count++;\n        for (int i = 1; i \u003c= columnsNumber; i++) {\n          if (i \u003e 1) {\n            System.out.print(\", \");\n          }\n          String columnValue = resultSet.getString(i);\n          System.out.print(resultSetMetaData.getColumnName(i) + \": \" + columnValue);\n        }\n        System.out.println(\"\");\n      }\n      System.out.println(\"There are \" + count + \" records.\");\n\n      String insertSql = \"INSERT INTO employees (first_name, last_name) \"\n        + \"VALUES ('Person \" + count + \"', 'Java')\";\n      System.out.println(\"Running SQL: \" + insertSql);\n      statement.executeUpdate(insertSql);\n\n    } catch (Exception e) {\n      System.out.println(e);\n    }\n  }\n}\n","name":"jdbc_mysql"},"jdbc_postgresql":{"display":"JDBC (Postgres)","database":"postgresql","example":"import java.sql.*;\n\nclass Solution {\n  public static void main(String[] args) {\n    try {\n      Connection connection = DriverManager.getConnection(\"jdbc:postgresql://localhost:5432/coderpad\",\"coderpad\",\"\");\n\n      System.out.println(\"Current records:\");\n      Statement statement = connection.createStatement();\n      ResultSet resultSet = statement.executeQuery(\"SELECT * from employees\");\n      ResultSetMetaData resultSetMetaData = resultSet.getMetaData();\n      int columnsNumber = resultSetMetaData.getColumnCount();\n      int count = 0;\n      while (resultSet.next()) {\n        count++;\n        for (int i = 1; i \u003c= columnsNumber; i++) {\n          if (i \u003e 1) {\n            System.out.print(\", \");\n          }\n          String columnValue = resultSet.getString(i);\n          System.out.print(resultSetMetaData.getColumnName(i) + \": \" + columnValue);\n        }\n        System.out.println(\"\");\n      }\n      System.out.println(\"There are \" + count + \" records.\");\n\n      String insertSql = \"INSERT INTO employees (first_name, last_name) \"\n        + \"VALUES ('Person \" + count + \"', 'Java')\";\n      System.out.println(\"Running SQL: \" + insertSql);\n      statement.executeUpdate(insertSql);\n\n    } catch (Exception e) {\n      System.out.println(e);\n    }\n  }\n}\n","name":"jdbc_postgresql"}},"name":"java"},"javascript":{"sample_template_project_slug":"react","default_path":"/tmp/project/main.js","language_client_id":"javascript","display":"JavaScript","version":"Node.js v18","tab_size":2,"mode":"javascript","category":"interpreted","execution":true,"custom_file_allowed":true,"test_case_grading":true,"database_allowed":true,"autocomplete":{"type":"legacy"},"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"const _ = require('lodash');\n\nfunction sayHello() {\n  console.log('Hello, World');\n}\n\n_.times(5, sayHello);\n","packages":{"sequelize_mysql":{"database":"mysql","display":"Sequelize (MySQL)","example":"const Sequelize = require('sequelize')\n\nasync function main() {\n  try {\n    // Connect to the database.\n    const sequelize = new Sequelize('coderpad', 'coderpad', '', {\n      dialect: 'mysql',\n      dialectOptions: { socketPath: '/tmp/mysql/socket/mysqld.sock' },\n    })\n    await sequelize.authenticate()\n\n    const Employee = sequelize.define('employee', {\n      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },\n      first_name: { type: Sequelize.STRING },\n      last_name: { type: Sequelize.STRING },\n      salary: { type: Sequelize.INTEGER },\n      department_id: { type: Sequelize.INTEGER },\n    }, {\n      timestamps: false\n    })\n\n    // Find existing records.\n    const employees = await Employee.findAll()\n    const count = employees.length\n    console.log(`There are ${count} records:`)\n    for (let employee of employees) {\n      console.log(' ', JSON.stringify(employee))\n    }\n\n    // Insert a new record.\n    const employeeAttrs = {\n      'first_name': `Person ${count}`,\n      'last_name': 'JavaScript',\n    }\n    console.log(`Inserting new record: ${JSON.stringify(employeeAttrs)}`)\n    const newPerson = Employee.build(employeeAttrs)\n    await newPerson.save()\n\n    // Run raw SQL to fetch the last record.\n    const [ sqlResult, _metadata ] = await sequelize.query(`SELECT * FROM employees ORDER BY id DESC LIMIT 1`)\n    console.log(`The last record is: ${JSON.stringify(sqlResult)}`)\n\n  } catch (error) {\n    console.error('Error: ', error)\n  }\n}\nmain()\n","name":"sequelize_mysql"},"sequelize_postgresql":{"database":"postgresql","display":"Sequelize (Postgres)","example":"const Sequelize = require('sequelize')\n\nasync function main() {\n  try {\n    // Connect to the database.\n    const sequelize = new Sequelize('coderpad', 'coderpad', '', {\n      dialect: 'postgres',\n      host: '/tmp/postgresql/socket',\n    })\n    await sequelize.authenticate()\n\n    const Employee = sequelize.define('employee', {\n      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },\n      first_name: { type: Sequelize.STRING },\n      last_name: { type: Sequelize.STRING },\n      salary: { type: Sequelize.INTEGER },\n      department_id: { type: Sequelize.INTEGER },\n    }, {\n      timestamps: false\n    })\n\n    // Find existing records.\n    const employees = await Employee.findAll()\n    const count = employees.length\n    console.log(`There are ${count} records:`)\n    for (let employee of employees) {\n      console.log(' ', JSON.stringify(employee))\n    }\n\n    // Insert a new record.\n    const employeeAttrs = {\n      'first_name': `Person ${count}`,\n      'last_name': 'JavaScript',\n    }\n    console.log(`Inserting new record: ${JSON.stringify(employeeAttrs)}`)\n    const newPerson = Employee.build(employeeAttrs)\n    await newPerson.save()\n\n    // Run raw SQL to fetch the last record.\n    const [ sqlResult, _metadata ] = await sequelize.query(`SELECT * FROM employees ORDER BY id DESC LIMIT 1`)\n    console.log(`The last record is: ${JSON.stringify(sqlResult)}`)\n\n  } catch (error) {\n    console.error('Error: ', error)\n  }\n}\nmain()\n","name":"sequelize_postgresql"},"typeorm_mysql":{"database":"mysql","display":"TypeORM (MySQL)","example":"const typeorm = require('typeorm')\n\n// Define entity for an existing table.\nconst employeesEntity = new typeorm.EntitySchema({\n  name: 'Employees',\n  columns: {\n    id: { primary: true, type: 'int', generated: true },\n    first_name: { type: 'varchar' },\n    last_name: { type: 'varchar' },\n    salary: { type: 'int' },\n    department_id: { type: 'int' },\n  }\n})\n\nasync function main() {\n  try {\n    // Connect to the database.\n    const connection = typeorm.getConnectionManager().create({\n      type: 'mysql',\n      username: 'coderpad',\n      database: 'coderpad',\n      synchronize: false, // Preserve columns of existing tables.\n      extra: { socketPath: '/tmp/mysql/socket/mysqld.sock' },\n      entities: [ employeesEntity ]\n    })\n    await connection.connect()\n    const repository = connection.getRepository('Employees')\n    const manager = connection.manager\n\n    // Find existing records.\n    const employees = await repository.find()\n    const count = employees.length\n    console.log(`There are ${count} records:`)\n    for (let employee of employees) {\n      console.log(JSON.stringify(employee))\n    }\n\n    // Insert a new record.\n    const employeeAttrs = {\n      'first_name': `Person ${count}`,\n      'last_name': 'JavaScript',\n    }\n    console.log(`Inserting new record: ${JSON.stringify(employeeAttrs)}`)\n    await connection\n      .createQueryBuilder()\n      .insert()\n      .into(employeesEntity)\n      .values([ employeeAttrs ])\n      .execute()\n\n    // Run raw SQL to fetch the last record.\n    const sqlResult = await manager.query(`SELECT * FROM employees ORDER BY id DESC LIMIT 1`)\n    console.log(`The last record is: ${JSON.stringify(sqlResult)}`)\n\n  } catch (error) {\n    console.error('Error: ', error)\n  }\n}\nmain()\n","name":"typeorm_mysql"},"typeorm_postgresql":{"database":"postgresql","display":"TypeORM (Postgres)","example":"const typeorm = require('typeorm')\n\n// Define entity for an existing table.\nconst employeesEntity = new typeorm.EntitySchema({\n  name: 'Employees',\n  columns: {\n    id: { primary: true, type: 'int', generated: true },\n    first_name: { type: 'varchar' },\n    last_name: { type: 'varchar' },\n    salary: { type: 'int' },\n    department_id: { type: 'int' },\n  }\n})\n\nasync function main() {\n  try {\n    // Connect to the database.\n    const connection = typeorm.getConnectionManager().create({\n      type: 'postgres',\n      username: 'coderpad',\n      database: 'coderpad',\n      synchronize: false, // Preserve columns of existing tables.\n      extra: { host: '/tmp/postgresql/socket' },\n      entities: [ employeesEntity ]\n    })\n    await connection.connect()\n    const repository = connection.getRepository('Employees')\n    const manager = connection.manager\n\n    // Find existing records.\n    const employees = await repository.find()\n    const count = employees.length\n    console.log(`There are ${count} records:`)\n    for (let employee of employees) {\n      console.log(JSON.stringify(employee))\n    }\n\n    // Insert a new record.\n    const employeeAttrs = {\n      'first_name': `Person ${count}`,\n      'last_name': 'JavaScript',\n    }\n    console.log(`Inserting new record: ${JSON.stringify(employeeAttrs)}`)\n    await connection\n      .createQueryBuilder()\n      .insert()\n      .into(employeesEntity)\n      .values([ employeeAttrs ])\n      .execute()\n\n    // Run raw SQL to fetch the last record.\n    const sqlResult = await manager.query(`SELECT * FROM employees ORDER BY id DESC LIMIT 1`)\n    console.log(`The last record is: ${JSON.stringify(sqlResult)}`)\n\n  } catch (error) {\n    console.error('Error: ', error)\n  }\n}\nmain()\n","name":"typeorm_postgresql"}},"name":"javascript"},"julia":{"default_path":"/tmp/project/main.jl","display":"Julia","version":"1.8.5","tab_size":4,"mode":"text/x-julia","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","block_comment_tokens":["#=","=#"],"example":"function say_hello()\n    println(\"Hello, World!\")\nend\n\nsay_hello()\n","name":"julia"},"kotlin":{"default_path":"/tmp/project/src/main/kotlin/Main.kt","language_client_id":"kotlin","display":"Kotlin","version":"Kotlin 1.9","tab_size":2,"mode":"text/x-kotlin","category":"compiled","execution":true,"custom_file_allowed":true,"autocomplete":{"type":"lsp"},"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"import java.io.*;\nimport java.util.*;\n\n// To execute Kotlin code, please define a top level function named main\n\nfun main() {\n  for (i in 1..5) println(\"Hello, World!\")\n}\n","name":"kotlin"},"lua":{"default_path":"/tmp/project/main.lua","display":"Lua","version":"5.4.4","tab_size":2,"mode":"text/x-lua","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"--","block_comment_tokens":["--[[","]]--"],"example":"function say_hello()\n  print(\"Hello, World!\")\nend\n\nsay_hello()\n","name":"lua"},"markdown":{"default_path":"/tmp/project/main.md","display":"Markdown","version":"marked.js 0.4","tab_size":2,"mode":"gfm","category":"documentation","execution":true,"custom_file_allowed":true,"block_comment_tokens":["\u003c!--","--\u003e"],"example":"CoderPad + Markdown\n===================\n\nWelcome to a real-time collaborative [Markdown][1] editor.\n\nIn addition to all the usual Markdown features, it uses\n[Github-Flavored Markdown][2], except with breaks on newlines\ndisabled.\n\nArbitrary HTML input is disabled, for obvious security reasons,\nand \"smart\" quotes are enabled.\n\nWe also support code fencing, through either backticks or\nindentation.\n\n```javascript\nfunction hello() {\n  var s = \"Hi there!\";\n  console.log(s);\n}\n```\n\n[1]: http://daringfireball.net/projects/markdown/\n[2]: https://help.github.com/articles/github-flavored-markdown\n","name":"markdown"},"mysql":{"default_path":"/tmp/project/main_mysql.sql","language_client_id":"mysql","display":"MySQL","version":"MySQL Server 8.0","tab_size":2,"mode":"text/x-mysql","category":"data","execution":true,"custom_database":true,"database_allowed":true,"line_comment_token":"--","block_comment_tokens":["/*","*/"],"example":"/*\nCoderPad provides a basic SQL sandbox with the following schema.\nYou can also use commands like `show tables` and `desc employees`\n\nemployees                             projects\n+---------------+---------+           +---------------+---------+\n| id            | int     |\u003c----+  +-\u003e| id            | int     |\n| first_name    | varchar |     |  |  | title         | varchar |\n| last_name     | varchar |     |  |  | start_date    | date    |\n| salary        | int     |     |  |  | end_date      | date    |\n| department_id | int     |--+  |  |  | budget        | int     |\n+---------------+---------+  |  |  |  +---------------+---------+\n                             |  |  |\ndepartments                  |  |  |  employees_projects\n+---------------+---------+  |  |  |  +---------------+---------+\n| id            | int     |\u003c-+  |  +--| project_id    | int     |\n| name          | varchar |     +-----| employee_id   | int     |\n+---------------+---------+           +---------------+---------+\n*/\n\nSELECT e.first_name, e.last_name, e.salary,\n  d.name as department_name\nFROM employees   AS e\nJOIN departments AS d ON e.department_id = d.id;\n","name":"mysql"},"objc":{"default_path":"/tmp/project/main.m","language_client_id":"objective-c","display":"Objective-C","version":"Clang 14 with GNUstep and libobjc2","tab_size":2,"mode":"text/x-objectivec","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"#import \u003cFoundation/Foundation.h\u003e\n#import \u003cstdio.h\u003e\n\nint main (int argc, const char * argv[])\n{\n  @autoreleasepool {\n    NSString* hello = @\"Hello, World!\";\n    for (int i = 1; i \u003c= 5; i++) {\n      printf(\"%s #%d\\n\", [hello UTF8String], i);\n    }\n  }\n}\n","name":"objc"},"ocaml":{"default_path":"/tmp/project/main.ml","language_client_id":"ocaml","display":"OCaml","version":"OCaml 5.0.0","tab_size":2,"mode":"text/x-ocaml","category":"compiled","block_comment_tokens":["(*","*)"],"execution":true,"custom_file_allowed":true,"example":"let rec sayHello n =\n  match n with\n  | 0 -\u003e ()\n  | _ -\u003e print_endline \"Hello, World!\"; sayHello (n-1);;\n\nsayHello 5;;\n","name":"ocaml"},"perl":{"default_path":"/tmp/project/main.pl","display":"Perl","version":"Perl 5.30","tab_size":2,"mode":"perl","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","example":"use strict;\nuse warnings;\nuse Data::Dumper;\n\nfor (my $count = 5; $count \u003e= 1; $count--) {\n  print \"Hello, World #$count\\n\";\n}\n","name":"perl"},"php":{"default_path":"/tmp/project/main.php","language_client_id":"php-serenata","display":"PHP","version":"Zend PHP 8.2","tab_size":2,"mode":"php","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"\u003c?php\n\n  // php code is wrapped in \u003c?php tags\n\n  for ( $i = 0; $i \u003c 5; $i++) {\n    echo \"Hello, World\\n\";\n  }\n?\u003e\n","name":"php"},"plaintext":{"default_path":"/tmp/project/main.txt","display":"Plain Text","tab_size":2,"mode":"text/plain","category":"documentation","custom_file_allowed":true,"example":"This is just a simple shared plaintext pad, with no execution capabilities.\n\nWhen you know what language you'd like to use for your interview,\nsimply choose it from the dots menu on the tab, or add a new language\ntab using the Languages button on the left.\n\nYou can also change the default language your pads are created with\nin your account settings: https://app.coderpad.io/settings\n\nEnjoy your interview!\n","name":"plaintext"},"postgresql":{"default_path":"/tmp/project/main_postgres.sql","monaco_language":"postgres","language_client_id":"postgresql","display":"PostgreSQL","version":"PostgreSQL 12.4","tab_size":2,"mode":"text/x-pgsql","category":"data","execution":true,"custom_database":true,"database_allowed":true,"line_comment_token":"--","block_comment_tokens":["/*","*/"],"example":"/*\nCoderPad provides a basic SQL sandbox with the following schema.\nYou can also use commands like '\\dt;' and '\\d employees;'\n\nemployees                             projects\n+---------------+---------+           +---------------+---------+\n| id            | int     |\u003c----+  +-\u003e| id            | int     |\n| first_name    | varchar |     |  |  | title         | varchar |\n| last_name     | varchar |     |  |  | start_date    | date    |\n| salary        | int     |     |  |  | end_date      | date    |\n| department_id | int     |--+  |  |  | budget        | int     |\n+---------------+---------+  |  |  |  +---------------+---------+\n                             |  |  |\ndepartments                  |  |  |  employees_projects\n+---------------+---------+  |  |  |  +---------------+---------+\n| id            | int     |\u003c-+  |  +--| project_id    | int     |\n| name          | varchar |     +-----| employee_id   | int     |\n+---------------+---------+           +---------------+---------+\n*/\n\nSELECT e.first_name, e.last_name, e.salary,\n  d.name as department_name\nFROM employees   AS e\nJOIN departments AS d ON e.department_id = d.id;\n","name":"postgresql"},"python":{"default_path":"/tmp/project/main_python2.py","language_client_id":"python2","display":"Python 2","version":"CPython 2.7","tab_size":4,"mode":{"name":"python","version":2},"category":"interpreted","execution":true,"custom_file_allowed":true,"test_case_grading":true,"database_allowed":true,"autocomplete":{"type":"lsp","diagnostics":true},"line_comment_token":"#","block_comment_tokens":["\"\"\"","\"\"\""],"example":"def say_hello():\n    print 'Hello, World'\n\nfor i in xrange(5):\n    say_hello()\n","packages":{"sqlalchemy_mysql":{"database":"mysql","display":"SQLAlchemy (MySQL)","example":"import sqlalchemy\nfrom sqlalchemy.orm import sessionmaker\n\n# Connect to the DB and reflect metadata.\nengine = sqlalchemy.create_engine('mysql://coderpad:@/coderpad?unix_socket=/tmp/mysql/socket/mysqld.sock')\nconnection = engine.connect()\nSession = sessionmaker(bind=engine)\nsession = Session()\nmetadata = sqlalchemy.MetaData()\nmetadata.reflect(bind=engine)\nemployees_table = metadata.tables['employees']\n\n# Get existing records.\ncount = session.query(employees_table).count()\nprint('There are %s employees:' % count)\nemployees = session.query(employees_table).all()\nfor employee in employees:\n    print(employee)\n\n# Insert a record.\nattrs = {'first_name': ('Person %s' % (count + 1)), 'last_name': 'Python'}\nprint('Inserting new record: %s' % attrs)\nconnection.execute(employees_table.insert().values(attrs))\n\n# Run raw SQL.\nresult = connection.execute('SELECT * FROM employees ORDER BY id DESC LIMIT 1')\nresult_as_list = result.fetchall()\nprint('The last record is: %s' % result_as_list[0])\n","name":"sqlalchemy_mysql"},"sqlalchemy_postgresql":{"database":"postgresql","display":"SQLAlchemy (Postgres)","example":"import sqlalchemy\nfrom sqlalchemy.orm import sessionmaker\n\n# Connect to the DB and reflect metadata.\nengine = sqlalchemy.create_engine('postgresql://coderpad:@/coderpad?host=/tmp/postgresql/socket')\nconnection = engine.connect()\nSession = sessionmaker(bind=engine)\nsession = Session()\nmetadata = sqlalchemy.MetaData()\nmetadata.reflect(bind=engine)\nemployees_table = metadata.tables['employees']\n\n# Get existing records.\ncount = session.query(employees_table).count()\nprint('There are %s employees:' % count)\nemployees = session.query(employees_table).all()\nfor employee in employees:\n    print(employee)\n\n# Insert a record.\nattrs = {'first_name': ('Person %s' % (count + 1)), 'last_name': 'Python'}\nprint('Inserting new record: %s' % attrs)\nconnection.execute(employees_table.insert().values(attrs))\n\n# Run raw SQL.\nresult = connection.execute('SELECT * FROM employees ORDER BY id DESC LIMIT 1')\nresult_as_list = result.fetchall()\nprint('The last record is: %s' % result_as_list[0])\n","name":"sqlalchemy_postgresql"}},"name":"python"},"python3":{"default_path":"/tmp/project/main.py","language_client_id":"python","display":"Python 3","version":"CPython 3.10","tab_size":4,"mode":{"name":"python","version":3},"category":"interpreted","execution":true,"custom_file_allowed":true,"test_case_grading":true,"database_allowed":true,"autocomplete":{"type":"lsp","diagnostics":true},"line_comment_token":"#","block_comment_tokens":["\"\"\"","\"\"\""],"example":"def say_hello():\n    print('Hello, World')\n\nfor i in range(5):\n    say_hello()\n","packages":{"sqlalchemy_mysql":{"database":"mysql","display":"SQLAlchemy (MySQL)","example":"import sqlalchemy\nfrom sqlalchemy.orm import sessionmaker\n\n# Connect to the DB and reflect metadata.\nengine = sqlalchemy.create_engine('mysql://coderpad:@/coderpad?unix_socket=/tmp/mysql/socket/mysqld.sock')\nconnection = engine.connect()\nSession = sessionmaker(bind=engine)\nsession = Session()\nmetadata = sqlalchemy.MetaData()\nmetadata.reflect(bind=engine)\nemployees_table = metadata.tables['employees']\n\n# Get existing records.\ncount = session.query(employees_table).count()\nprint('There are %s employees:' % count)\nemployees = session.query(employees_table).all()\nfor employee in employees:\n    print(employee)\n\n# Insert a record.\nattrs = {'first_name': ('Person %s' % (count + 1)), 'last_name': 'Python'}\nprint('Inserting new record: %s' % attrs)\nconnection.execute(employees_table.insert().values(attrs))\n\n# Run raw SQL.\nresult = connection.execute('SELECT * FROM employees ORDER BY id DESC LIMIT 1')\nresult_as_list = result.fetchall()\nprint('The last record is: %s' % result_as_list[0])\n","name":"sqlalchemy_mysql"},"sqlalchemy_postgresql":{"database":"postgresql","display":"SQLAlchemy (Postgres)","example":"import sqlalchemy\nfrom sqlalchemy.orm import sessionmaker\n\n# Connect to the DB and reflect metadata.\nengine = sqlalchemy.create_engine('postgresql://coderpad:@/coderpad?host=/tmp/postgresql/socket')\nconnection = engine.connect()\nSession = sessionmaker(bind=engine)\nsession = Session()\nmetadata = sqlalchemy.MetaData()\nmetadata.reflect(bind=engine)\nemployees_table = metadata.tables['employees']\n\n# Get existing records.\ncount = session.query(employees_table).count()\nprint('There are %s employees:' % count)\nemployees = session.query(employees_table).all()\nfor employee in employees:\n    print(employee)\n\n# Insert a record.\nattrs = {'first_name': ('Person %s' % (count + 1)), 'last_name': 'Python'}\nprint('Inserting new record: %s' % attrs)\nconnection.execute(employees_table.insert().values(attrs))\n\n# Run raw SQL.\nresult = connection.execute('SELECT * FROM employees ORDER BY id DESC LIMIT 1')\nresult_as_list = result.fetchall()\nprint('The last record is: %s' % result_as_list[0])\n","name":"sqlalchemy_postgresql"}},"name":"python3"},"r":{"default_path":"/tmp/project/main.r","language_client_id":"r","display":"R","version":"R 4.3.1","tab_size":2,"mode":"r","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","example":"for(i in 1:5) {\n  print(paste(\"Hello, World:\", i))\n}\n","name":"r"},"ruby":{"default_path":"/tmp/project/main.rb","language_client_id":"ruby","display":"Ruby","version":"MRI 3.2","tab_size":2,"mode":"ruby","category":"interpreted","line_comment_token":"#","execution":true,"custom_file_allowed":true,"test_case_grading":true,"database_allowed":true,"autocomplete":{"type":"lsp","diagnostics":true},"example":"def say_hello\n  puts 'Hello, World'\nend\n\n5.times { say_hello }\n","packages":{"active_record_mysql":{"database":"mysql","display":"ActiveRecord (MySQL)","example":"require 'active_record'\n\nActiveRecord::Base.establish_connection(\n  adapter: 'mysql2',\n  socket: '/tmp/mysql/socket/mysqld.sock',\n  username: 'coderpad',\n  password: '',\n  database: 'coderpad'\n)\n\n# Define a class of an existing table.\nclass Employee \u003c ActiveRecord::Base; end\n\n# Get existing records.\ncount = Employee.count\nputs \"There are #{count} employees:\"\nEmployee.find_each do |employee|\n  puts employee.inspect\nend\n\n# Insert a new record.\nattrs = { first_name: \"Person #{count + 1}\", last_name: \"Ruby\" }\nputs \"Inserting new record: #{attrs}\"\nEmployee.create!(attrs)\n\n# Run raw SQL.\nresult = ActiveRecord::Base.connection.execute(\"SELECT * FROM employees ORDER BY id DESC LIMIT 1\")\nputs \"The last record is: #{result.first()}\"\n","name":"active_record_mysql"},"active_record_postgresql":{"database":"postgresql","display":"ActiveRecord (Postgres)","example":"require 'active_record'\n\nActiveRecord::Base.establish_connection(\n  adapter: 'postgresql',\n  host: '/tmp/postgresql/socket',\n  username: 'coderpad',\n  password: '',\n  database: 'coderpad'\n)\n\n# Define a class of an existing table.\nclass Employee \u003c ActiveRecord::Base; end\n\n# Get existing records.\ncount = Employee.count\nputs \"There are #{count} employees:\"\nEmployee.find_each do |employee|\n  puts employee.inspect\nend\n\n# Insert a new record.\nattrs = { first_name: \"Person #{count + 1}\", last_name: \"Ruby\" }\nputs \"Inserting new record: #{attrs}\"\nEmployee.create!(attrs)\n\n# Run raw SQL.\nresult = ActiveRecord::Base.connection.execute(\"SELECT * FROM employees ORDER BY id DESC LIMIT 1\")\nputs \"The last record is: #{result.first()}\"\n","name":"active_record_postgresql"},"sequel_mysql":{"database":"mysql","display":"Sequel (MySQL)","example":"require 'sequel'\n\nDB = Sequel.connect(\n  adapter: 'mysql2',\n  socket: '/tmp/mysql/socket/mysqld.sock',\n  user: 'coderpad',\n  password: '',\n  database: 'coderpad'\n)\n\nemployees = DB[:employees]\n\n# Fetch current records.\ncount = employees.count\nputs \"There are #{count} employees:\"\nemployees.all.each do |employee|\n  puts employee.inspect\nend\n\n# Insert a new record.\nnew_attrs = { first_name: \"Person #{count + 1}\", last_name: \"Ruby\" }\nputs \"Inserting new record: #{new_attrs}\"\nemployees.insert(new_attrs)\n\n# Run raw SQL.\nresult = DB.fetch(\"SELECT * FROM employees ORDER BY id DESC LIMIT 1\")\nputs \"The last record is: #{result.first()}\"\n","name":"sequel_mysql"},"sequel_postgresql":{"database":"postgresql","display":"Sequel (Postgres)","example":"require 'sequel'\n\nDB = Sequel.connect(\n  adapter: 'postgres',\n  host: '/tmp/postgresql/socket',\n  user: 'coderpad',\n  password: '',\n  database: 'coderpad'\n)\n\nemployees = DB[:employees]\n\n# Fetch current records.\ncount = employees.count\nputs \"There are #{count} employees:\"\nemployees.all.each do |employee|\n  puts employee.inspect\nend\n\n# Insert a new record.\nnew_attrs = { first_name: \"Person #{count + 1}\", last_name: \"Ruby\" }\nputs \"Inserting new record: #{new_attrs}\"\nemployees.insert(new_attrs)\n\n# Run raw SQL.\nresult = DB.fetch(\"SELECT * FROM employees ORDER BY id DESC LIMIT 1\")\nputs \"The last record is: #{result.first()}\"\n","name":"sequel_postgresql"}},"name":"ruby"},"rust":{"default_path":"/tmp/project/main.rs","language_client_id":"rust","display":"Rust","version":"Rust 1.72.0 (2021 Edition)","tab_size":4,"mode":"text/x-rustsrc","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"fn main() {\n  for n in 0..5 {\n    println!(\"{} - Hello, World!\", n);\n  }\n}\n","name":"rust"},"scala":{"default_path":"/tmp/project/src/main/scala/Main.scala","language_client_id":"scala","display":"Scala","version":"Scala 3.3.0","tab_size":2,"mode":"text/x-scala","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"// To execute Scala code, please define an object named Solution that extends App\n\nobject Solution extends App {\n  for (i \u003c- 0 until 5) println(\"Hello, World!\")\n}\n","name":"scala"},"solidity":{"default_path":"/tmp/project/contract.sol","display":"Solidity","version":"0.8.19","tab_size":2,"mode":"text/x-solidity","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.19;\n\ncontract HelloWorld {\n  string public greet = \"Hello World!\";\n}\n","name":"solidity"},"swift":{"default_path":"/tmp/project/Sources/project/main.swift","language_client_id":"swift","display":"Swift 5","version":"Swift 5.9","tab_size":2,"mode":"text/x-swift","category":"compiled","execution":true,"custom_file_allowed":true,"autocomplete":{"type":"legacy","diagnostics":true},"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"import Foundation\n\nfor _ in 1...5 {\n  print(\"Hello, World!\")\n}\n","name":"swift"},"tcl":{"default_path":"/tmp/project/main.tcl","display":"Tcl","version":"Tcl 8.6","tab_size":2,"mode":"text/x-tcl","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"#","example":"set i 0\nwhile {$i \u003c 5} {\n    puts \"Hello, World!\"\n    incr i\n}\n","name":"tcl"},"typescript":{"sample_template_project_slug":"react","default_path":"/tmp/project/main.ts","language_client_id":"typescript","display":"TypeScript","version":"TypeScript v5 under Node.js v18","tab_size":2,"mode":"text/typescript","category":"interpreted","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"const _ = require('lodash');\n\nclass Greeter {\n    greeting: string;\n    constructor(message: string) {\n        this.greeting = message;\n    }\n    greet() {\n        return \"Hello, \" + this.greeting;\n    }\n}\n\nlet greeter = new Greeter(\"world\");\n\n_.times(4, () =\u003e console.log(greeter.greet()));\n","name":"typescript"},"vb":{"default_path":"/tmp/project/main.vb","display":"Visual Basic","version":".NET Core 7.0","tab_size":4,"mode":"text/x-vb","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"'","example":"' To run VB.net code, please define a \"Sub Main\"\n' on the top level Module\n\nModule Solution\n    Sub Main()\n        Console.WriteLine (\"Hello, World\")\n    End Sub\nEnd Module\n","name":"vb"},"verilog":{"default_path":"/tmp/project/main.v","language_client_id":"verilog","display":"Verilog","version":"Icarus Verilog 11.0","tab_size":2,"mode":"text/x-verilog","category":"compiled","execution":true,"custom_file_allowed":true,"line_comment_token":"//","block_comment_tokens":["/*","*/"],"example":"module main;\n\ninitial begin\n  repeat (5) begin\n    $display(\"Hello, World!\");\n  end\n  $finish;\nend\n\nendmodule\n","name":"verilog"}}
    window.CoderPad.PLANS = [{"id":0,"title":"Free Plan","user_account_limit":1,"monthly_price":0},{"id":12,"title":"Team Plan: Legacy","user_account_limit":20,"monthly_price":300},{"id":14,"title":"Starter Plan","user_account_limit":50,"monthly_price":100},{"id":15,"title":"Plus Plan","user_account_limit":50,"monthly_price":575},{"id":16,"title":"Team Plan","user_account_limit":20,"monthly_price":325},{"id":60,"title":"Starter Annual","user_account_limit":20,"monthly_price":70},{"id":61,"title":"Team Annual: Legacy","user_account_limit":20,"monthly_price":300},{"id":62,"title":"Plus Annual","user_account_limit":50,"monthly_price":575},{"id":64,"title":"Team Annual","user_account_limit":20,"monthly_price":325},{"id":101,"title":"Enterprise","user_account_limit":0,"monthly_price":0}]

    window.CoderPad.USER = window.CoderPad.USER || {};
    window.CoderPad.FLAGS.newSignupFlow = true;

    window.CoderPad.CODINGAME_BASE_URL = 'https://www.codingame.com/work';
    window.CoderPad.CODINGAME_LEGACY_SSO_BASE_URL = 'https://www.codingame.com/work/';

    window.CoderPad.FULLSTORY_ORG_ID = 'RS2RJ';
  </script>
<link rel="preload" href="https://d1a7p14oqam61r.cloudfront.net/assets/roboto-v15-latin-regular-e3dd9a15e7caea392fce4ed32c89db8c807e41234892c5e8b100d7c49c4e0a6a.woff2" as="font" crossorigin="anonymous">
<link rel="preload" href="https://d1a7p14oqam61r.cloudfront.net/assets/roboto-mono-v4-latin-regular-cfee0ada469fa3d79e0cb40f7736822c8fbb3bdcf2224fa009a0ab764cc12a64.woff2" as="font" crossorigin="anonymous">
<link rel="preload" href="https://d1a7p14oqam61r.cloudfront.net/assets/roboto-mono-v4-latin-700-b80b1b6f9287a8365e201937c24981b4536e93016cb48c2b30aaf5afb6489ce8.woff2" as="font" crossorigin="anonymous">
<script nonce="bc198ca8-9d40-43cd-9c3b-b33dc007cf60">try{(function(w,d){!function(du,dv,dw,dx){du[dw]=du[dw]||{};du[dw].executed=[];du.zaraz={deferred:[],listeners:[]};du.zaraz.q=[];du.zaraz._f=function(dy){return async function(){var dz=Array.prototype.slice.call(arguments);du.zaraz.q.push({m:dy,a:dz})}};for(const dA of["track","set","debug"])du.zaraz[dA]=du.zaraz._f(dA);du.zaraz.init=()=>{var dB=dv.getElementsByTagName[dx](0),dC=dv.createElement(dx),dD=dv.getElementsByTagName["title"](0);dD&&(du[dw].t=dv.getElementsByTagName["title"](0).text);du[dw].x=Math.random();du[dw].w=du.screen.width;du[dw].h=du.screen.height;du[dw].j=du.innerHeight;du[dw].e=du.innerWidth;du[dw].l=du.location.href;du[dw].r=dv.referrer;du[dw].k=du.screen.colorDepth;du[dw].n=dv.characterSet;du[dw].o=(new Date).getTimezoneOffset();if(du.dataLayer)for(const dH of Object.entries(Object.entries(dataLayer).reduce(((dI,dJ)=>({...dI[1],...dJ[1]})),{})))zaraz.set(dH[0],dH[1],{scope:"page"});du[dw].q=[];for(;du.zaraz.q.length;){const dK=du.zaraz.q.shift();du[dw].q.push(dK)}dC.defer=!0;for(const dL of[localStorage,sessionStorage])Object.keys(dL||{}).filter((dN=>dN.startsWith("_zaraz_"))).forEach((dM=>{try{du[dw]["z_"+dM.slice(7)]=JSON.parse(dL.getItem(dM))}catch{du[dw]["z_"+dM.slice(7)]=dL.getItem(dM)}}));dC.referrerPolicy="origin";dC.src="/cdn-cgi/zaraz/s.js?z="+btoa(encodeURIComponent(JSON.stringify(du[dw])));dB.parentNode.insertBefore(dC,dB)};["complete","interactive"].includes(dv.readyState)?zaraz.init():du.addEventListener("DOMContentLoaded",zaraz.init)}(w,d,"zarazData","script");})(window,document)}catch(e){throw fetch("/cdn-cgi/zaraz/t"),e;};</script></head>
<body class="pad pad--dark">
<div id="workspace" style>
<div id="header" style="position: absolute; left: -9999px">
<span class="fui-triangle-right-large"></span>
</div>
</div>
<script>
  window.padConfig = {"uiType":"coding","takeHome":false,"publicTakeHome":false,"publicTakeHomeThreshold":null,"takeHomeTimeLimit":120,"takeHomeSubmittedAt":0,"browser":"Chrome 122.0.0.0; Windows 10.0","color":null,"disableCall":true,"disablePadSettings":true,"drawingModified":false,"drawingImageUrl":null,"execEnabled":true,"goldman":null,"invisible":false,"intellisenseDisabledByOrganization":null,"iioLayout":false,"isDemoPad":false,"isExpired":false,"isLoggedIn":false,"isOwner":false,"isPlayback":false,"isPublic":true,"isSandbox":true,"isScratchPad":true,"sandboxEnvironmentPreviewSlug":"question-181059-preview-1710134043","isQuestionDraftPreview":false,"timedTakeHomesDisabled":false,"timedTakeHomesMaintenanceExtraMessage":"","drawingModeMaintenance":false,"drawingBoardId":null,"focusTimeSupported":null,"focusTimeEnabled":false,"hasEnvironments":true,"aiChatEnabled":false,"hasAiChat":false,"hasTranscriptions":null,"playbackV3Variant":null,"hasSpreadsheets":true,"lang":"html","loginUsername":"","logoUrl":"https://d1a7p14oqam61r.cloudfront.net/assets/coderpad_logo_2020_reverse_white-2d5ffb20c2aec5dff5c2ee8b26ceef42f5f867b53f1441161d873ee28e981503.svg","notesEnabled":false,"requestClientEnabled":true,"padCreatedAt":1710130877,"padStartedAt":0,"padOpenedAt":0,"padEndedAt":0,"padOrg":null,"padState":"pending","preloadedPackage":null,"sandboxCode":null,"sandboxSwitcher":false,"sandboxView":"","sandboxModal":false,"sandboxDrawingBoardId":null,"serverTime":1710134044,"slug":"E7AFAXDT","title":null,"username":null,"firebaseAuthorId":"4503601337515710","firebaseShard":"coderpad-4","padParticipants":[],"questionsEnabled":null,"questionLibraryAllowSharedEdit":false,"questionLibraryLanguagesUsed":[],"questionLibraryQuestionsExist":false,"questionLibraryExamplesExist":null,"question":false,"report":false,"databaseUrl":"https://coderpad-4.firebaseio.com","callingEnabled":true,"parentAndChildOrganizations":[]};
</script>
<div class="modal fade " id="language-info-modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content clearfix">
<div class="modal-body"></div>
</div>
</div>
</div>
<div class="modal fade FocusTimeModal" id="focus-time-modal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" role="document">
<div class="modal-content clearfix">
<div id="focus-time-intro-modal-content"></div>
</div>
</div>
</div>
<script>
  </script>
<script>
    window.CP_APP_NOTICE = ""
  </script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/runtime~main-7a193bbf73802447b966.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~home~login~main~onboarding~post_sso~registration~waiting_room-bb348271bbb0db4402a0.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~login~main~onboarding~post_sso~registration~waiting_room-f8c3031593dd7c4e1422.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~login~main~onboarding~post_sso~registration-9ad587f4126f189aa004.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~login~main~onboarding~registration~waiting_room-d45c07c6037c8805d59c.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~login~main~onboarding~registration-fb95a77d8cb687195740.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~login~main~registration~waiting_room-4e66b60d27a66966273c.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~main~onboarding~registration-e85cafcab833d09c5cb1.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~dashboard~main~onboarding~waiting_room-24e7f30e21cfe508fb4e.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~dashboard~main~onboarding-3940a0542bb1ee8e7ae7.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~dashboard~main~waiting_room-8e6c0c1b597bfe79ca80.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~main~onboarding-d57195f7f7610ed5b8ca.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~main~onboarding~waiting_room-e12353b1880cbf413b9a.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~dashboard~main-95f9aa496e119cc7104e.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~dashboard~main-6a53903a3fb3924375f3.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~checkout~main-ac92679d8783b6891abe.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/vendors~main-b688da2d3d58fd9a7549.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/dashboard~main~onboarding-b166a055a28e301ce7db.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/dashboard~main-f9f5944c425eab8fa505.js" defer="defer"></script>
<script src="https://d1a7p14oqam61r.cloudfront.net/packs/main-49ff25cfec082c5c067a.js" defer="defer"></script>
<script>
      window.beamerPromise = new Promise(function (resolve, reject) {
        window.beamerPromiseResolve = resolve
        window.beamerPromiseReject = reject
      })

      function beamerCallback(numPosts) {
        window.beamerPosts = numPosts
        window.beamerPromiseResolve()
      }
      var beamer_config = {
        product_id: "TEOGHkPL43497", //DO NOT CHANGE: This is your product code on Beamer
        selector: '.beamerTrigger', /*Optional: Id, class (or list of both) of the HTML element to use as a button*/
        button: false,
        bounce: false,
        callback: beamerCallback,
        user_plan: 0,
        pad_view: false,
      };
    </script>

<script type="text/javascript" src="https://app.getbeamer.com/js/beamer-embed.js" defer="defer"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"86290f0c0dee32f5","version":"2024.2.4","token":"0a80854bdcba444490f2a2ec16528dc9"}' crossorigin="anonymous"></script>
</body>
</html>

### Attribute Changed

While there are other methods to pass data to an element (which we’ll touch on shortly), the undeniable simplicity of attributes is hard to deny. They’re widely utilized in HTML-spec tags, and most display custom elements should be able to utilize attributes to pass data from a parent trivially.

While `attributeChangedCallback` is the lifecycle method used to detect when an attribute’s value is changed, you must tell the component which attributes to track.

For example, in this example we’re tracking the `message` attribute. If the `message` attribute value changes, it will run `this.render()`. However, any other attribute’s value changing will not trigger `attributeChangedCallback` because nothing else is marked to be tracked.

``class MyComponent extends HTMLElement {
connectedCallback() {
this.render();
}

// Could also be:
// static observedAttributes = ['message'];
static get observedAttributes() {
return ['message'];
}

attributeChangedCallback(name, oldValue, newValue) {
this.render();
}

render() {
const message = this.attributes.message.value || 'Hello world';
this.innerHTML = `<h1>${message}</h1>`;
}
}

customElements.define('my-component', MyComponent);``Code language: JavaScript (javascript)

You’ll notice that the “`attributeChangedCallback`” receives the name of the attribute changed, it’s previous value, and it’s current value. This is useful for granular manual change detection optimizations.

However, utilizing attributes to pass values to a component has its limitations. To explain these limitations, we must first start by talking about serializability.

## Serializability

Serialization is the process of turning a data structure or object into a format that can be stored and reconstructed later. A simple example of serialization is using JSON to encode data.

`SON.stringify([
{hello: 1},
{other: 2}
])

// "[{\"hello\": 1}, {\"other\":2}]"`Code language: JavaScript (javascript)

Because this JavaScript object is simple and only utilizes [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive), it’s relatively trivial to turn into a string. This string can then be saved to a file, sent over HTTP to a server (and back), and be reconstructed when the data is needed again.

> This simplicity of serialization to JSON is one reason why JSON is such a popular format for transferring data over REST endpoints.

### Serializing Limitations

While simple objects and arrays can be serialized relatively trivially, there are limitations. For example, take the following code:

`const obj = {
    method() {
        console.log(window);
    }
}`Code language: JavaScript (javascript)

While this code’s behavior may seem simple to us reading it as developers, think about it from a machine’s perspective.

If we wanted to send this object to a server from a client remotely with the method intact, how should we do that?

`window`, while available in the browser, is not available in NodeJS, which the server may likely be written in. Should we attempt to serialize the `window` object and pass it along with the method? What about methods on the `window` object? Should we do the same with those methods?

On the other end of the scale, while `console.log` **_is_** implemented in both NodeJS and browsers alike, it’s implemented using native code in both runtimes. How would we even begin to serialize native methods, even if we wanted to? _Maybe_ we could pass machine code? Even ignoring the security concerns, how would we handle the differences in machine code between a user’s ARM device and a server’s x86_64 architecture?

All of this becomes a problem before you even consider that your server may well not be running NodeJS. How would you even begin to represent the concept of `this` in a language like Java? How would you handle the differences between a dynamically typed language like JavaScript and C++?

#### Let’s Stringify Some Functions

Now knowing the problems with serializing functions, you may wonder what happens if you run `JSON.stringify()` on `obj`?

`const obj = {
method() {
console.log(this, window);
}
}

JSON.stringify(obj); // "{}"`Code language: JavaScript (javascript)

It simply omits the key from the JSON string. This is important to keep in mind as we go forward.

### HTML Attribute Strings

Why are we talking about serialization in this article? To answer that, I want to mention two truths about HTML elements.

-   HTML attributes are case insensitive
-   HTML attributes must be strings

The first of these truths is simply that for any attribute, you can change the key casing and it will respond the same. According to HTML spec, there is no difference between:

`<input type="checkbox"/>`Code language: HTML, XML (xml)

And:

`<input tYpE="checkbox"/>`Code language: HTML, XML (xml)

The second truth is much more relevant to us in this discussion. While it might seem like you can assign non-string values to an attribute, they’re always parsed as strings under-the-hood.

You might think about being tricky and using JavaScript to assign non-string values to an attribute:

`const el = document.querySelector('input');
el.setAttribute('data-arr', [1, 2, 3, 4]);`Code language: JavaScript (javascript)

However, the attribute’s assigned value may not match your expectations:

`<input type="checkbox" data-arr="1,2,3,4">`Code language: HTML, XML (xml)

You’ll notice the lack of brackets in the attribute. This is because JavaScript is implicitly running `toString` on your array, which turns it into a string before assigning it to the attribute.

No matter how you spin it – your attribute will be a string.

This is also why when trying to use attributes for non-string values you may run into otherwise unexpected behavior. This is true even for built-in elements, such as `input`.

`<input type="checkbox" checked="false"/>`Code language: HTML, XML (xml)

Without being aware of this HTML attribute limitation, you may well expect the checkbox to be unchecked. However, when rendered, it appears checked.

This is because you’re not passing the boolean `false`, you’re passing the string `"false"`, which is (confusingly) truthy.

`console.log(Boolean("false")); // true`Code language: JavaScript (javascript)

Some attributes are smart enough to know when you’re intending to assign a number or other primitive value to an element via an attribute, but the implementation internally might look something like:

`class NumValidator extends HTMLElement {
connectedCallback() {
this.render();
}

static get observedAttributes() {
return ['max'];
}

attributeChangedCallback(name, oldValue, newValue) {
this.render();
}

render() {
// Coerce "attribute.value" to a number. Again, attributes
// can only be passed as a string
const max = Number(this.attributes.max.value || Infinity);
// ...
}
}`Code language: JavaScript (javascript)

While this tends to be the extent of HTML element’s deserializing of attributes, we can extend this functionality much further.

## Pass Array of Strings

As we touched on shortly, if we simply try to pass an array to an attribute using JavaScript’s `setAttribute`, it will not include the brackets. This is due to `Array.toString()`’s output.

If we attempted to pass the array \``["test", "another", "hello"]`\` from JS to an attribute, the output would look like this:

``<script> class MyComponent extends HTMLElement {
connectedCallback() {
this.render();
}

      static get observedAttributes() {
          return ['todos'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.render();
      }

      render() {
          const todos = this.attributes.todos.value || '';
          this.innerHTML = `<p>${todos}</p>`;
      }

}

customElements.define('my-component', MyComponent); </script>

<my-component id="mycomp" todos="test,another,hello"></my-component>``Code language: HTML, XML (xml)

Because of the output of `toString`, it’s difficult to convert the attribute value back into a string. As such, we only display the data inside of a `<p>` tag. But lists don’t belong in a single paragraph tag! They belong in a `ul` with individual `li`s per item in the list. After all, [semantic HTML is integral for an accessible website](https://coderpad.io/blog/introduction-to-web-accessibility-a11y/)!

Lets instead use `JSON.stringify` to serialize this data, pass that string to the attribute value, then deserialize that in the element using `JSON.parse`.

``<script> class MyComponent extends HTMLElement {
connectedCallback() {
this.render();
}

      static get observedAttributes() {
          return ['todos'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.render();
      }

      render() {
          const todosArr = JSON.parse(this.attributes.todos.value || '[]');
          console.log(todosArr);
          const todoEls = todosArr.map(todo => `<li>${todo}</li>`).join('\n');
          this.innerHTML = `<ul>${todoEls}</ul>`;
      }

}

customElements.define('my-component', MyComponent); </script>

<my-component todos="[&quot;hello&quot;,&quot;this&quot;]">
</my-component>``Code language: HTML, XML (xml)

Using this method, we’re able to get an array in our `render` method. From there, we simply `map` over that array to create `li` elements, then pass that to our `innerHTML`.

## Pass Array of Objects

While an array of strings is a straightforward demonstration of serializing attributes, it’s hardly representative of real-world data structures.

Let’s start working towards making our data more realistic. A good start might be to turn our array of strings into an array of objects. After all, we want to be able to mark items “completed” in a todo app.

For now, we’ll keep it small, and we’ll grow it later. Let’s keep track of the “name” of the todo item, and whether or not it’s been completed:

`const data = [{name: "hello", completed: false}];`Code language: JavaScript (javascript)

Let’s take a look at how we can display this in a reasonable manner using our custom element:

``<script> class MyComponent extends HTMLElement {
connectedCallback() {
this.render();
}

      static get observedAttributes() {
          return ['todos'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
          this.render();
      }

      render() {
          const todosArr = JSON.parse(this.attributes.todos.value || '[]');
          const todoEls = todosArr
              .map(todo => `
              <li>
                <!-- checked=”false” doesn’t do what you might think -->
                <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
                ${todo.name}
              </li>
          `)
              .join('\n');
          this.innerHTML = `<ul>${todoEls}</ul>`;
      }

}

customElements.define('my-component', MyComponent); </script>

<my-component
  id="mycomp"
  todos="[{&quot;name&quot;:&quot;hello&quot;,&quot;completed&quot;:false}]">
</my-component>``Code language: HTML, XML (xml)

> Remember, checked=”false” will leave a checkbox checked. This is because “false” is a truthy string. Reference our “serializing limitations” sections for more reading.

Now that we’re displaying these checkboxes, let’s add a way to toggle them!

`var todoList = [];

function toggleAll() {
todoList = todoList.map(todo => ({...todo, completed: !todo.completed}));
changeElement();
}

function changeElement() {
const compEl = document.querySelector('#mycomp');
compEl.attributes.todos.value = JSON.stringify(todoList);  
}`Code language: JavaScript (javascript)

Now, all we need to do is run the function “toggleAll” on a button press and it will update the checkboxes in our custom element.

Now that we have a way to toggle all checkboxes, let’s look at how we can toggle individual todo items.

## Pass Objects with Functions

While there are many ways to have user input in a custom element interact with a parent’s data set, let’s store a method in each todo object and pass it into the custom element.

This pattern follows best practices for components by keeping the data passing unidirectional. In the past, we’ve touched on how to [keep your components unidirectional](https://coderpad.io/blog/master-react-unidirectional-data-flow/) for React and Web Components alike.

Let’s change a todo object to reflect something similar:

`todoList.push({
  name: inputEl.value,
  completed: false,
  id: todoId,
  onChange: () => {
    toggleTodoItem(todoId)
  }
});`Code language: JavaScript (javascript)

Then, we’ll simply implement our `toggleTodoItem` method using the ID to modify the related todo object:

`function toggleTodoItem(todoId) {
thisTodo = todoList.find(todo => todo.id == todoId);
thisTodo.completed = !thisTodo.completed;
changeElement();
}

function changeElement() {
const compEl = document.querySelector('#mycomp');
compEl.attributes.todos.value = JSON.stringify(todoList);
}`Code language: JavaScript (javascript)

With these changes, we have all of the logic we need from our parent to handle the checkbox logic. Now we need to update our custom element to trigger the `onChange` method when the checkbox is checked. In order to bind an event listener the “input” element, we need to access the underlying [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) reference. To do this, we’ll need to migrate away from the `innerHTML` logic we were using previously in favor of `document.createElement`.

``render() {
this.clear();

// Create list element
const todosArr = JSON.parse(this.attributes.todos.value || '[]');
const todoEls = todosArr
.map(todo => {
// Use `createElement` to get access to the element. We can then add event listeners
const checkboxEl = document.createElement('input');
checkboxEl.type = "checkbox";

          // This doesn't work, we'll explain why shortly
          checkboxEl.addEventListener('change', todo.onChange);

          checkboxEl.checked = todo.completed;

          const liEl = document.createElement('li');
          liEl.append(checkboxEl);
          liEl.append(todo.name);
          return liEl;
      });

const ulEl = document.createElement('ul');
for (const liEl of todoEls) {
ulEl.append(liEl);
}

// Add header. This should update to tell us how many items are completed
const header = document.createElement('h1');
header.innerText = todosArr.filter(todo => todo.completed).length;

// Reconstruct logic
this.append(header);
this.append(ulEl);
}``Code language: JavaScript (javascript)

Awesome! Now we’ve made all of the changes required, let’s see if it all works together!

[  
](https://app.coderpad.io/sandbox?question_id=181066)Oh… Weird… While our checkboxes seem to be updating, our `h1` is not. What’s more, if we look in our developer console, we don’t see the `console.log`s we would expect to see during a re-render.

Why is that?

Well, as we mentioned in our section about serialization limitations, functions are not serializable. Because of this, when an object with methods are passed to `JSON.parse`, those keys are removed. When we’re adding our event listener, the function is `undefined`, and therefore doesn’t do anything.

`checkboxEl.addEventListener('change', todo.onChange); // onChange is undefined`Code language: JavaScript (javascript)

The checkbox’s state visually updating without being reflected in our data is an example of a misalignment between the DOM and the data we used to build the DOM.

However, we can verify that our code is correct outside of serialization issues. If we change that line of code to utilize the global function `toggleTodoItem` directly, it functions as expected:

`checkboxEl.addEventListener('change', () => toggleTodoItem(todo.id))`Code language: JavaScript (javascript)

> Update this line of code in the sandbox above to see the correct behavior!

While this works for our current setup, one of the advantages of building custom elements is the ability to split out your application to multiple files in order to keep your app’s codebase organized. As soon as `toggleTodoItem` is no longer in the same scope as the custom element, this code will break.

If this isn’t a good long-term solution, what can we do to fix our issue with serialization?

## Pass via Props, not Attributes

Attributes provide a simple method of passing primitive data to your custom elements. However, as we’ve demonstrated, it falls flat in more complex usage due to the requirement to serialize your data.

Knowing that we’re unable to bypass this limitation using attributes, let’s instead take advantage of JavaScript classes to pass data more directly.

Because our components are classes that extend `HTMLElement`, we’re able to access our properties and methods from our custom element’s parent. Let’s say we want to update `todos` and render once the property is changed.

To do this, we’ll simply add a method to our component’s class called “`setTodos`”. This method will then be accessible when we query for our element using `document.querySelector`.

`class MyComponent extends HTMLElement {
todos = [];

connectedCallback() {
this.render();
}

setTodos(todos) {
this.todos = todos;
this.clear();
this.render();
}

render() {
// ...
}
}

// ...

function changeElement() {
const compEl = document.querySelector('#mycomp');
compEl.setTodos(todoList);
}`Code language: JavaScript (javascript)

Now, if we toggle items in our todo list, our `h1` tag updates as we would expect: we’ve solved the mismatch between our DOM and our data layer!

Because we’re updating the _properties_ of our custom elements, we call this “passing via properties”, which solves the serialization issues of “passing via attributes”.

But that’s not all! Properties have a hidden advantage over attributes for data passing as well: memory size.

When we were serializing our todos into attributes, we were duplicating our data. Not only were we keeping the todo list in-memory within our JavaScript, but the browser keeps loaded DOM elements in memory as well. This means that for every todo we added, not only were we keeping a copy in JavaScript, but in the DOM as well (via attribute string).

But surely, that’s the only way memory is improved when migrating to properties, right? Wrong!

Because keep in mind, on top of being loaded in-memory in JS in our main `script` tag, and in the browser via the DOM, we were also deserializing it in our custom element as well! This meant that we were keeping a _third_ copy of our data initialized in-memory simultaneously!

While these performance considerations might not matter in a demo application, they would add significant complications in production-scale apps.

## Conclusion

We’ve covered a lot today! We’ve introduced some of the core concepts at play with web components, how we’re able to best implement various functionality, and the limitations of the DOM.

While we spoke a lot about passing data by attributes vs. properties today, there are pros and cons to both. Ideally, we would want the best of both worlds: the ability to pass data via property in order to avoid serialization, but keep the simplicity of attributes by reflecting their value alongside the related DOM element.

Something else we’ve lost since the start of this article is code readability in element creation. Originally, when we were using `innerHTML`, we were able to see a visual representation of the output DOM. When we needed to add event listeners, however, we were required to switch to `document.createElement`. Preferably, we could attach event listeners without sacrificing the in-code HTML representation of our custom element’s rendered output.

While these features may not be baked into the web component specifications themselves, there are other options available. In our next article, we’ll take a look at a lightweight framework we can utilize to build better web components that can integrate with many other frontend stacks!

## Related
