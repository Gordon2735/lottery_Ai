# Build a Data-Scraping App Using Puppeteer, Node.js, PostgreSQL and Aptible

by Aahil

.tb1c56018-d2e1-4840-b0b5-d32b18dcda9f { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-top { margin-top: -10px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-bottom { margin-top: 10px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-left { margin-left: -10px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-right { margin-left: 10px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .tb1c56018-d2e1-4840-b0b5-d32b18dcda9f.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); }

[![Aahil HackerNoon profile picture](https://cdn.hackernoon.com/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-l193yny.png?auto=format&fit=max&w=3840)](https://hackernoon.com/u/aahil)

## Aahil

### @aahil

_DevOps Engineer & Technical Writer_

10 min readJanuary 21st, 2024

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e)![Read on Terminal Reader](https://hackernoon.imgix.net/computer.png?auto=format&fit=max&w=48)

.t370dca6f-7226-4c08-9606-aec766eeb603 { color: #fff; background: #222; border: 1px solid transparent; border-radius: 3px; padding: 8px 21px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-top { margin-top: -10px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: 0px; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .t370dca6f-7226-4c08-9606-aec766eeb603.place-bottom { margin-top: 10px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: 0px; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .t370dca6f-7226-4c08-9606-aec766eeb603.place-left { margin-left: -10px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: 0px; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .t370dca6f-7226-4c08-9606-aec766eeb603.place-right { margin-left: 10px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t370dca6f-7226-4c08-9606-aec766eeb603.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: 0px; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); } Read this story in a terminal

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e)![Print this story](https://hackernoon.imgix.net/images/Print%20Icon%20%4025px.png?auto=format&fit=max&w=48)

.t2bb1b484-3d0e-4718-8580-94c466ef735f { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-top { margin-top: -10px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-bottom { margin-top: 10px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-left { margin-left: -10px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-right { margin-left: 10px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t2bb1b484-3d0e-4718-8580-94c466ef735f.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); } Print this story

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2720%27%20height=%2720%27/%3e)![Read this story w/o Javascript](https://hackernoon.imgix.net/images/Lite%20Icon%20%4025px.png?auto=format&fit=max&w=48)

.t13a63945-b664-4de8-a7c4-784e2e124645 { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-top { margin-top: -10px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .t13a63945-b664-4de8-a7c4-784e2e124645.place-bottom { margin-top: 10px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .t13a63945-b664-4de8-a7c4-784e2e124645.place-left { margin-left: -10px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .t13a63945-b664-4de8-a7c4-784e2e124645.place-right { margin-left: 10px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t13a63945-b664-4de8-a7c4-784e2e124645.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); } Read this story w/o Javascript

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2750%27%20height=%2715%27/%3e)![Open TLDR](https://hackernoon.imgix.net/tl;dr-dark.png?auto=format&fit=max&w=128)![tldt arrow](https://hackernoon.imgix.net/arrow-dark.png)

## Too Long; Didn't Read

How to build a data scrapping application using Puppeteer, Node.js, PostgreSQL, and Aptible.

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271200%27%20height=%27600%27/%3e)![featured image - Build a Data-Scraping App Using Puppeteer, Node.js, PostgreSQL and Aptible](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-s78355y.png?w=1200&q=75&auto=format)

![featured image - Build a Data-Scraping App Using Puppeteer, Node.js, PostgreSQL and Aptible](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-s78355y.png?w=1200&q=75&auto=format)

Your browser does not support the`audio` element.

1x

Read by **Dr. One** ![voice-avatar](https://hackernoon.imgix.net/avatars/robot-b5.png?auto=format&fit=max&w=96)

Audio Presented by

![AWS Security Live-icon](https://hackernoon.imgix.net/images/img-we33d62.png?auto=format&fit=max&w=3840)

![Aahil HackerNoon profile picture](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-l193yny.png?auto=format&fit=max&w=3840)

.t6608cbcf-ddd6-4874-969f-238a1f26954b { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-top { margin-top: -10px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-bottom { margin-top: 10px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-left { margin-left: -10px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-right { margin-left: 10px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t6608cbcf-ddd6-4874-969f-238a1f26954b.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); }

![Aahil](https://cdn.hackernoon.com/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-l193yny.png)

## Aahil

@aahil

DevOps Engineer & Technical Writer

.td7628a4f-8a6b-4e47-b160-a0bce57742df { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-top { margin-top: -10px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-bottom { margin-top: 10px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-left { margin-left: -10px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-right { margin-left: 10px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .td7628a4f-8a6b-4e47-b160-a0bce57742df.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); } Subcribe to recieve Aahil's content strait to your inbox!

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2715%27%20height=%2715%27/%3e)![](https://cdn.hackernoon.com/images/img-5p03rto.png?auto=format&fit=max&w=32)

.t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3 { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-top { margin-top: -10px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-bottom { margin-top: 10px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-left { margin-left: -10px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-right { margin-left: 10px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .t3f9b06fe-ec0a-441b-8088-c94e4f7b24b3.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); }

## STORY’S CREDIBILITY

![Guide](https://cdn.hackernoon.com/images/img-5p03rto.png)

## Guide

Walkthroughs, tutorials, guides, and tips. This story will teach you how to do something new or how to do something better.

  

Building a data scraping application is common for many developers, especially in fields where data collection, analysis, and storage are crucial. Using the Puppeteer, Node.js, and PostgreSQL trio is an excellent approach.

  

[Puppeteer](https://pptr.dev/?ref=hackernoon.com) is a great choice for this task. It allows you to control a headless browser, which is crucial for scraping dynamic websites. Many websites now use JavaScript to load content, and Puppeteer enables you to interact with and scrape this dynamic content.

  

[Node.js](https://nodejs.org/en/about?ref=hackernoon.com) is well-suited for building scalable and efficient server-side applications. It's non-blocking and event-driven, making it a good fit for handling concurrent requests in a scraping application. Node.js will handle the backend of the data-scraping application.

  

Storing the scraped data for the app will be handled by [PostgreSQL](https://www.postgresql.org/about/?ref=hackernoon.com) because it supports complex queries and indexing, which makes it suitable for storing and retrieving scraped data efficiently.

  

[Aptible](https://www.aptible.com/?ref=hackernoon.com) is a PaaS provider that aids the secure deployment of applications. It also provides database management services, with PostgreSQL being one of its supported databases. Hence, this project will use the managed PostgreSQL service provided by Aptible.

  

In this tutorial, you'll discover how to build a data-scraping application using Puppeteer, Node.js, PostgreSQL, and Aptible. The application will scrape data from a popular movie streaming app, Netflix, and store it in a PostgreSQL database managed by Aptible.

## Prerequisites

To follow along with this tutorial, you will need the following:

  

- A node version of 16.13.2 or greater is installed on your machine. You can install it by following the instructions on the [official Node.js website](https://nodejs.org/en/download/?ref=hackernoon.com).
    
      
    
- An Aptible account. Visit the [Aptible website](https://app.aptible.com/signup?ref=hackernoon.com) to sign up.
    
      
    
- A fundamental understanding of JavaScript and Node.js.
    

### Setting up the project

To get started, create a new directory for the project and initialize a new Node.js project in it by running the following commands:

```bash
mkdir web-scraper
cd web-scraper
npm init -y
```

  

This will create a `package.json` file for you with the following output:

```json
Wrote to /home/user/web-scraper/package.json:

{
  "name": "web-scraper",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Installing dependencies

To install the dependencies for the project, run the following command:

```bash
npm install puppeteer pg dotenv
```

  

This will install the necessary packages, which are Puppeteer, Node-postgres, and dotenv.

### Creating the database

For the PostgreSQL database, you will use the managed database service on Aptible. To do this, follow the steps below:

  

1. Log in to your Aptible account and create a new environment.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27238.80706921944034%27/%3e)![Figure 1: Creating a new environment](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.245Z-birfkj2jeppyrohzbhw84hgn?w=1200&q=75&auto=format)
    
    Figure 1: Creating a new environment
    
      
    
2. Navigate to the new environment and click on **Databases** > **New Database**.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27244.4394618834081%27/%3e)![Figure 2: Creating a new PostgreSQL database on Aptible](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.249Z-ct0xojoz5j5q4f4uv87f578j?w=1200&q=75&auto=format)
    
    Figure 2: Creating a new PostgreSQL database on Aptible
    
      
    
3. Click on the dropdown menu and select **PostgreSQL 16**. This will create a new PostgreSQL database for you.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27263.12686567164184%27/%3e)![Figure 3: Select the latest version of PostgreSQL](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.250Z-a4y0lx7sgf48mq61xbvcrg7z?w=1200&q=75&auto=format)
    
    Figure 3: Select the latest version of PostgreSQL
    
      
    
4. Input the Database Handle and click on **New Database** to create the database.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27237.52416356877322%27/%3e)![Figure 4: Create the database](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.251Z-lntn2cignonuh3dbjp8lprnf?w=1200&q=75&auto=format)
    
    Figure 4: Create the database
    

  

This will provision a new PostgreSQL database for you.

  

You can view the database by clicking the **Databases** tab on the left menu.

![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27240.33136966126656%27/%3e)![Figure 5: View the new PostgreSQL](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.267Z-qm008rua8pn5lz9np6u7exgt?w=1200&q=75&auto=format)

Figure 5: View the new PostgreSQL

### Creating a database endpoint

To connect to the PostgreSQL database, you will need to create a database endpoint. To do this, follow the steps below:

  

1. Navigate to the database you created and click on **Endpoints** > **New Endpoint**.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27241.95461200585655%27/%3e)![Figure 6: Creating a new endpoint](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.261Z-jgq4sp8aomlytd1d3w782736?w=1200&q=75&auto=format)
    
    Figure 6: Creating a new endpoint
    
      
    
2. Include an IP address in the **IP Allowlist** field. This will allow you to connect to the database from your local machine.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27273.1142643764003%27/%3e)![Figure 7: Add IP address to Allowlist field](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.260Z-lhof7qgyhgla751zbwiwonis?w=1200&q=75&auto=format)
    
    Figure 7: Add IP address to Allowlist field
    
      
    
3. After the endpoint has finished provisioning, click on the **ConnectionURL** tab.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27173.63903154805575%27/%3e)![Figure 8: Connection URL tab](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.258Z-b7yaz734w4oqnfzct882qv6v?w=1200&q=75&auto=format)
    
    Figure 8: Connection URL tab
    
      
    
4. Click on the **show** button to copy the connection URL. You will need this to connect to the database.
    
    ![](data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27800%27%20height=%27256.6617754952311%27/%3e)![Figure 9: Copy PostgreSQL endpoint connection URL](https://hackernoon.imgix.net/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-2024-01-21T13:37:49.257Z-ha6lrpsjngthqkcuppfm0838?w=1200&q=75&auto=format)
    
    Figure 9: Copy PostgreSQL endpoint connection URL
    

### Create the scraper script.

This scraper script will scrape data from Netflix and store it in the PostgreSQL database.

  

To create the script, create a new file named `scraper.js` in the root of the project directory and add the following code to it:

```bash
const puppeteer = require("puppeteer");
const { Client } = require("pg");
require("dotenv").config();
```

  

The code above imports the necessary packages and loads the environment variables from the `.env` file.

  

Below is a breakdown of the packages imported:

  

- `puppeteer`: A headless browser automation library for Node.js used for web scraping.
    
      
    
- `Client`: Part of the pg library, a PostgreSQL client for Node.js.
    
      
    
- `dotenv`: A library for loading environment variables from a file, used to load database credentials.
    

  

Next, add the following code to the `scraper.js` file:

```javascript
async function run() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate to the website you want to scrape
  await page.goto("https://netflix.com/");

  // Extract data from the page
  const data = await page.evaluate(() => {
    const title = document.querySelector("h1").innerText;
    const url = window.location.href;

    return { title, url };
  });

  // Close the browser
  await browser.close();

  return data;
}
```

  

The code above creates a function named `run` which will be used to scrape data from the Netflix website.

  

A brief explanation of the code above:

  

- `run` is an asynchronous function that launches a headless browser using Puppeteer.
    
      
    
- It opens a new page, navigates to `https://netflix.com/`, extracts data (title and URL) from the page using a function provided to `page.evaluate`, and then close the browser.
    
      
    
- The extracted data is returned as an object.
    

  

Next, add the following code to the `scraper.js` file:

```javascript
async function saveToDatabase(data) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // Check if the table exists, and create it if not
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS scraped_data (
        id SERIAL PRIMARY KEY,
        title TEXT,
        url TEXT
      );
    `;
    await client.query(createTableQuery);

    // Insert data into the database
    const insertQuery = "INSERT INTO scraped_data (title, url) VALUES ($1, $2)";
    const values = [data.title, data.url];
    await client.query(insertQuery, values);
  } finally {
    await client.end();
  }
}
```

  

The code above creates a function named `saveToDatabase` which will be used to save the scraped data to the PostgreSQL database.

  

A brief explanation of the code above:

  

- `saveToDatabase` is an asynchronous function that connects to the PostgreSQL database using the credentials in the `DATABASE_URL` environment variable.
    
      
    
- It checks if the table `scraped_data` exists and creates it if it doesn't.
    
      
    
- It then inserts the scraped data into the database using an SQL query.
    

  

Next, add the following code to the `scraper.js` file:

```javascript
(async () => {
  try {
    const scrapedData = await run();
    console.log("Scraped Data:", scrapedData);

    // Save data to the database
    await saveToDatabase(scrapedData);
    console.log("Data saved to the database.");
  } catch (error) {
    console.error("Error during scraping:", error);
  }
})();
```

  

The code above calls the `run` function to scrape data from the Netflix website and then call the `saveToDatabase` function to save the scraped data to the PostgreSQL database.

  

A brief explanation of the code above:

  

- This immediately invoked function expression (IIFE) executes the scraping and database saving process.
    
      
    
- It catches any errors that occur during scraping or database operations and logs them.
    
      
    
- If successful, it logs the scraped data and a success message.
    

  

All together, the `scraper.js` file should look like this:

```javascript
const puppeteer = require("puppeteer");
const { Client } = require("pg");
require("dotenv").config();

async function run() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Navigate to the website you want to scrape
  await page.goto("https://netflix.com/");

  // Extract data from the page
  const data = await page.evaluate(() => {
    const title = document.querySelector("h1").innerText;
    const url = window.location.href;

    return { title, url };
  });

  // Close the browser
  await browser.close();

  return data;
}

async function saveToDatabase(data) {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();

    // Check if the table exists, and create it if not
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS scraped_data (
        id SERIAL PRIMARY KEY,
        title TEXT,
        url TEXT
      );
    `;
    await client.query(createTableQuery);

    // Insert data into the database
    const insertQuery = "INSERT INTO scraped_data (title, url) VALUES ($1, $2)";
    const values = [data.title, data.url];
    await client.query(insertQuery, values);
  } finally {
    await client.end();
  }
}

(async () => {
  try {
    const scrapedData = await run();
    console.log("Scraped Data:", scrapedData);

    // Save data to the database
    await saveToDatabase(scrapedData);
    console.log("Data saved to the database.");
  } catch (error) {
    console.error("Error during scraping:", error);
  }
})();
```

### Creating a `.env` file

The `.env` file will contain the database credentials. Create a new file named `.env` in the root of the project directory and add the following code to it:

```bash
DATABASE_URL=postgres://<username>:<password>@<host>:<port>/<database>
```

  

**Note:** Replace the placeholders with the database credentials from the database endpoint you created earlier.

### Running the scraper script

To run the scraper script, run the following command:

```bash
node scraper.js
```

  

This will launch a headless browser, navigate to the Netflix website, scrape data from the page, and save the data to the PostgreSQL database on Aptible.

  

You should see the following output:

```bash
Scraped Data: {
  title: 'Unlimited movies, TV shows, and more',
  url: 'https://www.netflix.com/'
}
Data saved to the database.
```

  

You can verify that the data was saved to the database by logging into the PostgreSQL database using the credentials from the database endpoint.

  

You can do this by running the following command:

```sql
psql <connection_url>
```

  

**Note:** Replace `<connection_url>` with the connection URL from the database endpoint.

  

Once you're logged in, you can list the tables in the database by running the following command:

```sql
\dt
```

  

You should see the `scraped_data` table listed in the output:

```sql
            List of relations
 Schema |     Name     | Type  |  Owner
--------+--------------+-------+---------
 public | scraped_data | table | aptible
(1 row)
```

  

You can view the data in the `scraped_data` table by running the following command:

```sql
SELECT * FROM scraped_data;
```

  

You should see the scraped data listed in the output:

```sql
 id |                title                 |           url
----+--------------------------------------+--------------------------
  1 | Unlimited movies, TV shows, and more | https://www.netflix.com/
(1 row)
```

## Conclusion

​​In this tutorial, you learned how to create a data scrapping application using Puppeteer, Node.js, PostgreSQL, and Aptible.

  

To enhance this project, consider adding more functionality to the scraper script. For instance, you can expand it to scrape data from multiple websites and store it in the database.

  

Furthermore, you can extend the application by incorporating a frontend. This addition lets you visualize the scraped data in a web browser, enhancing the user experience.

  

[![AWS Security LIVE!](https://hackernoon.imgix.net/images/img-u333dol.jpeg?auto=format&fit=max&w=3840)](https://aws.bpc.digital/security-live-register)

  

### About Author

[![Aahil HackerNoon profile picture](https://cdn.hackernoon.com/images/q6t9kyVqaAbMWMb9XJWOGmM6iV92-l193yny.png?auto=format&fit=max&w=3840)](https://hackernoon.com/u/aahil)

**Aahil**[@aahil](https://hackernoon.com/u/aahil)

.te5b678c6-7452-40c5-9265-47b02cf5e35c { color: #fff; background: #222; border: 1px solid transparent; border-radius: undefinedpx; padding: 8px 21px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-top { margin-top: -10px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-top::before { content: ""; background-color: inherit; position: absolute; z-index: 2; width: 20px; height: 12px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-top::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; bottom: -6px; left: 50%; margin-left: -6px; transform: rotate(135deg); } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-bottom { margin-top: 10px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-bottom::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 18px; height: 10px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-bottom::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; top: -6px; left: 50%; margin-left: -6px; transform: rotate(45deg); } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-left { margin-left: -10px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-left::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-left::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; right: -6px; top: 50%; margin-top: -6px; transform: rotate(45deg); } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-right { margin-left: 10px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-right::before { content: ""; background-color: inherit; position: absolute; z-index: -1; width: 10px; height: 18px; } .te5b678c6-7452-40c5-9265-47b02cf5e35c.place-right::after { content: ""; position: absolute; width: 10px; height: 10px; border-top-right-radius: undefinedpx; border: 1px solid transparent; background-color: #222; z-index: -2; left: -6px; top: 50%; margin-top: -6px; transform: rotate(-135deg); } Subcribe to recieve Aahil's content strait to your inbox!

DevOps Engineer & Technical Writer

[Read my stories](https://hackernoon.com/u/aahil)

#### Comments

  

![](https://hackernoon.imgix.net/avatars/robot-a6.png?auto=format&fit=max&w=3840)

[@anyebeblessing737](https://hackernoon.com/u/anyebeblessing737)

3 months ago

This is well detailed! Thank you. 🧡

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

1 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-a1.png?auto=format&fit=max&w=3840)

[@onyeanunaaugustine02](https://hackernoon.com/u/onyeanunaaugustine02)

3 months ago

Nice one bro

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-a3.png?auto=format&fit=max&w=3840)

[@onisokumenandy](https://hackernoon.com/u/onisokumenandy)

3 months ago

Well explained

Nice one

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-a3.png?auto=format&fit=max&w=3840)

[@onisokumenandy](https://hackernoon.com/u/onisokumenandy)

3 months ago

Well explained

Nice one

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-a1.png?auto=format&fit=max&w=3840)

[@Ruthycharles9](https://hackernoon.com/u/Ruthycharles9)

3 months ago

Thank you very much for this article, I'll try using the puppeteer.

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-b3.png?auto=format&fit=max&w=3840)

[@hackerclrav196a0000356pn91jadk8](https://hackernoon.com/u/hackerclrav196a0000356pn91jadk8)

3 months ago

Needed something like this, thanks!

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-b5.png?auto=format&fit=max&w=3840)

[@qorede](https://hackernoon.com/u/qorede)

3 months ago

Well done. This is well detailed

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/avatars/robot-b4.png?auto=format&fit=max&w=3840)

[@hackerclrl24q530000336mahz67ptq](https://hackernoon.com/u/hackerclrl24q530000336mahz67ptq)

3 months ago

Easy to understand 😉

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-b4.png?auto=format&fit=max&w=3840)

[@hackerclrl24q530000336mahz67ptq](https://hackernoon.com/u/hackerclrl24q530000336mahz67ptq)

3 months ago

Easy to understand 😉

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://cdn.hackernoon.com/avatars/robot-b1.png?auto=format&fit=max&w=3840)

[@ezinneanne](https://hackernoon.com/u/ezinneanne)

3 months ago

This is cool. Planning to do some scraping jobs and this tutorial would go a long way. Thank you

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-b2.png?auto=format&fit=max&w=3840)

[@temitopevictoria](https://hackernoon.com/u/temitopevictoria)

3 months ago

This is very detailed. The step-by-step guide is awesome!

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://hackernoon.imgix.net/avatars/robot-b3.png?auto=format&fit=max&w=3840)

[@peacesandy04](https://hackernoon.com/u/peacesandy04)

3 months ago

Well written, you are an excellent Technical Writer

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://cdn.hackernoon.com/avatars/6B3gbFJZ4OOmHrk2vyeNBtQ8LNu1.png?auto=format&fit=max&w=3840)

[@pretty13](https://hackernoon.com/u/pretty13)

3 months ago

Impressive guide on seamlessly integrating Puppeteer. Kudos to the author for the concise and insightful tutorial!🤝

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/images/fireball.gif)   1

![](https://cdn.hackernoon.com/avatars/6B3gbFJZ4OOmHrk2vyeNBtQ8LNu1.png?auto=format&fit=max&w=3840)

[@pretty13](https://hackernoon.com/u/pretty13)

3 months ago

Impressive guide on seamlessly integrating Puppeteer. Kudos to the author for the concise and insightful tutorial!🤝

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/avatars/robot-b5.png?auto=format&fit=max&w=3840)

[@Isaacrejoice011](https://hackernoon.com/u/Isaacrejoice011)

3 months ago

Nicely done!

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://hackernoon.imgix.net/avatars/robot-b5.png?auto=format&fit=max&w=3840)

[@Isaacrejoice011](https://hackernoon.com/u/Isaacrejoice011)

3 months ago

Nicely done!

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

![](https://cdn.hackernoon.com/avatars/robot-a6.png?auto=format&fit=max&w=3840)

[@orionesu](https://hackernoon.com/u/orionesu)

3 months ago

This is quite detailed and concise. Cheers

![](https://hackernoon.imgix.net/images/savage-joy.png)![](https://hackernoon.imgix.net/images/fireball.gif)![](https://hackernoon.imgix.net/images/amaze.gif)![](https://hackernoon.imgix.net/images/thonking.gif)![](https://hackernoon.imgix.net/images/parrot.gif)![](https://hackernoon.imgix.net/images/lamp.png)

😊+

0 0

  

#### TOPICS

[![purcat-img](https://hackernoon.imgix.net/icons/SVG/Cloud.svg)cloud](https://hackernoon.com/c/cloud) [#devops](https://hackernoon.com/tagged/devops) [#the-devops-writing-contest](https://hackernoon.com/tagged/the-devops-writing-contest) [#puppeteer](https://hackernoon.com/tagged/puppeteer) [#data-scraping](https://hackernoon.com/tagged/data-scraping) [#aptible](https://hackernoon.com/tagged/aptible) [#nodejs](https://hackernoon.com/tagged/nodejs) [#postgres](https://hackernoon.com/tagged/postgres) [#data-scraping-guide](https://hackernoon.com/tagged/data-scraping-guide)

#### THIS ARTICLE WAS FEATURED IN...