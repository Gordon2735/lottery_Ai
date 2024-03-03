# **Changing Image Size in Markdown**

-   Asked 11 years, 1 month ago
    Modified 3 months ago
    Viewed 1.6m times
    1720

I just got started with Markdown. I love it, but there is one thing bugging me: How can I change the size of an image using Markdown?

The documentation only gives the following suggestion for an image:

![drawing](drawing.jpg)
If it is possible I would like the picture to also be centered. I am asking for general Markdown, not just how GitHub does it.

imagemarkdown
Share
Edit
Follow
edited May 14, 2019 at 10:29
Matthias Braun's user avatar
Matthias Braun
33k2626 gold badges146146 silver badges173173 bronze badges
asked Feb 3, 2013 at 18:42
cantdutchthis's user avatar
cantdutchthis
33k1717 gold badges7575 silver badges115115 bronze badges
1
For top image (like repo logo) I just make a "white padding" in original image before export to PNG. –
Enrique René
Oct 21, 2020 at 22:09
1
You should really fix the accepted answer the to HTML one as the current answer uses non-standard markdown features that don't work broadly –
VoteCoffee
Apr 14, 2021 at 15:22
1
What is that ! about? –
buhtz
Dec 11, 2022 at 12:15
2
@buhtz It is to differentiate a normal HTML link [text](URL) from an image ![alt text](image URL). –
VonC
Dec 24, 2022 at 9:26
7
Note: GitLab 15.7+, Dec. 2022, officially adopts the ![alt text](image URL){width=x height=y} convention. –
VonC
Dec 24, 2022 at 9:43
Show 2 more comments
39 Answers
Sorted by:

Highest score (default)
1
2
Next
1782

You could just use some HTML in your Markdown:

<img src="drawing.jpg" alt="drawing" width="200"/>
Or via style attribute (not supported by GitHub)

<img src="drawing.jpg" alt="drawing" style="width:200px;"/>
Or you could use a custom CSS file as described in this answer on Markdown and image alignment

![drawing](drawing.jpg)
CSS in another file:

img[alt=drawing] { width: 200px; }
Share
Edit
Follow
edited May 1, 2019 at 9:19
answered Feb 7, 2013 at 9:26
Tieme's user avatar
Tieme
63.5k2222 gold badges105105 silver badges157157 bronze badges
75
Using inline style does not work in most websites (e.g. GitHub) site it will get sanitized. Prefer width and height instead as mentioned by @kushdillip. –
Ciro Santilli OurBigBook.com
Nov 22, 2014 at 8:48
10
The solution based on the alt attribute is very bad and you shouldn't use it, it breaks accessibility. –
Regnareb
Oct 17, 2016 at 9:44
11
Would it be a good idea to recommend a percentage instead of device-dependent pixels? E.g. <img src="drawing.jpg" alt="drawing" width="50%"/> ? Tested it on GitHub, it works nicely –
VasiliNovikov
Jan 3, 2021 at 20:29
1
This solution worked for me <img src="miro.medium.com/max/1400/1*bSLNlG7crv-p-m4LVYYk3Q.png" width="450" height="250"> –
Jorge Santos Neill
Apr 17, 2021 at 20:42
3
@JulienColomb alt is always what's displayed as alternative for when the image can't load OR when the user can't see it. It does exactly the same thing. You're thinking of a separate attribute, title which makes hover text. Some browsers, if there's no title supplied, will display the alt text in both places. The accessibility complaint is valid. –
maco
Apr 15, 2022 at 13:02
Show 3 more comments
879

With certain Markdown implementations (including Mou and Marked 2 (only macOS)) you can append =WIDTHxHEIGHT after the URL of the graphic file to resize the image. Do not forget the space before the =.

![](./pic/pic1_50.png =100x20)
You can skip the HEIGHT

![](./pic/pic1s.png =250x)
And Width

![](./pic/pic1s.png =x250)
Share
Edit
Follow
edited Oct 21, 2021 at 10:26
sud007's user avatar
sud007
5,96344 gold badges5757 silver badges6464 bronze badges
answered Jan 20, 2014 at 19:33
prosseek's user avatar
prosseek
186k218218 gold badges571571 silver badges876876 bronze badges
47
also note that you cannot have a space after the '='. good:"![](./pic/pic1s.png =250x)", bad:"![](./pic/pic1s.png = 250x)" –
cantdutchthis
Jan 21, 2014 at 10:26
89
Not in the standard, so it doesn't work with every Markdown parser –
Marius Soutier
Feb 22, 2014 at 18:53
30
Doesn't seem to work with Redcarpet, which I use with Jekyll, so I'd go with HTML, as @Tieme answered. If you end up running your Markdown through a parser that likes the standard, the HTML will stand up. –
user766353
Feb 27, 2014 at 21:56
11
doesn't work in Bitbucket wiki as well. it's wrongly converted into the title attribute. –
RZKY
Jul 15, 2016 at 12:36
23
Does not work, but the HTML <img src=http//... width="..." height="..."> works. –
BK Batchelor
Jul 20, 2016 at 3:37
Show 17 more comments
499

The accepted answer here isn't working with any Markdown editor available in the apps I have used till date like Ghost, Stackedit.io or even in the StackOverflow editor. I found a workaround here in the StackEdit.io issue tracker.

The solution is to directly use HTML syntax, and it works perfectly:

<img src="http://....jpg" width="200" height="200" />
Share
Edit
Follow
edited Dec 19, 2020 at 14:31
Willi Mentzel's user avatar
Willi Mentzel
28.7k2121 gold badges116116 silver badges122122 bronze badges
answered Feb 23, 2014 at 17:52
kushdilip's user avatar
kushdilip
7,73633 gold badges2424 silver badges3030 bronze badges
15
This worked great for me! Inline CSS wasn't working with GitHub Markdown but the "old school" height/width attributes worked just fine. – 
niczak
 Dec 19, 2014 at 19:53
1
Good thing is that this one also works if you're trying to use a markdown viewer for local files in a browser extension/add-on. – 
code_dredd
 Mar 23, 2018 at 0:16
8
Github likes this. – 
Teoman shipahi
 May 3, 2018 at 20:50
2
Note that on Stack Exchange sites you must use this exact format, and no other attributes (note even alt) are seemingly allowed (you may omit width or height, and the space before /> is optional, but other than that no extra whitespace is allowed). GitHub, by contrast, supports (at least) also alt and title attributes, and allows extra whitespace. – 
mklement0
 Jul 9, 2020 at 21:09
3
On Stack Overflow, the simple solution is to link to a different version of the picture. Each image you upload gets rendered in six different versions, which you can switch between by adding a character to indicate the desired size before the .png extension. For details, see meta.stackoverflow.com/questions/253403/… – 
tripleee
 Oct 30, 2020 at 5:53 
Show 3 more comments
214

Just use:

<img src="Assets/icon.png" width="200">
instead of:

![](Assets/icon.png)
Share
Edit
Follow
answered Nov 6, 2015 at 12:18
Bartłomiej Semańczyk's user avatar
Bartłomiej Semańczyk
60.5k4949 gold badges237237 silver badges371371 bronze badges
4
Most Markdown implementations have a modified syntax for this so you don't need to insert the raw HTML tag, but this is the right thing to do if the implementation you're using doesn't have one. –
Nick McCurdy
Oct 15, 2016 at 22:01
3
This is compatible in github –
thanos.a
Oct 13, 2019 at 17:19
Show 2 more comments
157

Combining two answers I came out with a solution, that might not look that pretty,
but it works!

It creates a thumbnail with a specific size that might be clicked to bring you to the max resolution image.

[<img src="image.png" width="250"/>](image.png)
Here's an example! I tested it on Visual Code and Github. Example markdown

Thanks to the feedback, we know that this also works on:

GitLab
Jupyter Notebook
StackOverflow
Share
Edit
Follow
edited Oct 24, 2023 at 19:28
Shaun Roselt's user avatar
Shaun Roselt
2,45655 gold badges2121 silver badges4949 bronze badges
answered Jan 31, 2020 at 13:23
proximab's user avatar
proximab
2,07511 gold badge1414 silver badges1818 bronze badges
5
Excellent. Works with GitLab Enterprise. –
Sven Haile
Apr 27, 2020 at 17:00
1
@Lwi I'm happy I could help 😊 –
proximab
May 10, 2021 at 11:06
1
works with vscode local viewer too –
Jehad Nasser
Aug 1, 2022 at 10:15
1
Nice one! :) It works in Obsidian. I used style="display: block; margin: auto; " to even center the image! –
khaz
Jan 12 at 0:07
Show 4 more comments
135

If you are writing MarkDown for PanDoc, you can do this:

![drawing](drawing.jpg){ width=50% }
This adds style="width: 50%;" to the HTML <img> tag, or [width=0.5\textwidth] to \includegraphics in LaTeX.

Source: http://pandoc.org/MANUAL.html#extension-link_attributes

Share
Edit
Follow
answered Dec 15, 2016 at 16:40
rudolfbyker's user avatar
rudolfbyker
2,17011 gold badge2121 silver badges2626 bronze badges
2
It is even nicer than specifying size in points directly. I am glad this is the approach Pandoc has chosen! –
jciloa
May 2, 2017 at 10:08
2
@m0z4rt GitHub probably does not use PanDoc to render the MarkDown. –
rudolfbyker
Nov 17, 2017 at 17:54
3
@rudolfbyker thank you so much. For Mkdocs-material it worked with adding -attr_list in markdown_extensions`` in mkdocs.yml`. –
Lilya
Nov 25, 2020 at 10:27
2
This works for GitLab thanks –
Blundell
Nov 2, 2023 at 13:48
Show 4 more comments
83

Maybe this has recently changed but the Kramdown docs show a simple solution.

From the docs

Here is an inline ![smiley](smiley.png){:height="36px" width="36px"}.

And here is a referenced ![smile]

[smile]: smile.png

{: height="36px" width="36px"}
Works on github with Jekyll and Kramdown.

Share
Edit
Follow
answered Jun 22, 2015 at 7:05
sayth's user avatar
sayth
6,8261212 gold badges5959 silver badges102102 bronze badges
11
May have worked in the past but doesn't work now on Github. Adding an old fashioned <img> tag with width and height still works. –
mez.pahlan
Oct 11, 2016 at 15:00
3
This is the best solution if you're using Kramdown or Jekyll (which uses Kramdown by default). –
Nick McCurdy
Oct 15, 2016 at 21:35
4
Block attributes as shown here are a good option with kramdown. The syntax here is slightly wrong, which may be why @piratemurray is having trouble. It should be {: height=36 width=36}; this generates HTML attributes, so it should not have the px suffix. Alternately, you can use css with {: style="height:36px; width:36px"}. –
Quantum7
Jan 18, 2018 at 15:10
1
Works for jekyll! thx. I don't even need height and width, just one is enough. ![alt text](image.png){:height="36px" } –
Matthias
Dec 8, 2018 at 10:13
1
I had to make a small change to get this to work properly in Jekyll. This answer as-written outputs malformed HTML, as the width and height attributes include the "px" part. For me I needed to use {:height="36" width="36"} –
Maximillian Laumeister
Dec 22, 2018 at 21:30
Show 1 more comment
49

Replace ![title](image-url.type) with <img src="https://image-url.type" width="200" height="200"/>

Share
Edit
Follow
edited Sep 24, 2022 at 10:59
answered Oct 5, 2019 at 17:32
prabhu's user avatar
prabhu
93899 silver badges1717 bronze badges
Show 2 more comments
30

One might draw on the alt attribute that can be set in almost all Markdown implementations/renderes together with CSS-selectors based on attribute values. The advantage is that one can easily define a whole set of different picture sizes (and further attributes).

Markdown:

![minipic](mypic.jpg)
CSS:

img[alt="minipic"] {
max-width: 20px;
display: block;
}
Share
Edit
Follow
answered Oct 28, 2014 at 12:36
petermeissner's user avatar
petermeissner
12.5k55 gold badges6565 silver badges6464 bronze badges
1
Isn't this the same as Tieme's earlier answer? –
RedGrittyBrick
Feb 16, 2015 at 12:39
28
This is a misuse of the alt attribute and hurts accessibility. –
sbuck
Mar 22, 2016 at 19:32
3
Yes, it is a hack BUT still seems to be the only thing that works across Markdown flavors. +1 for pointing that out (people using screen readers get problems with that right? They will get also problems with all those not bothering with using alt the right way). –
petermeissner
Apr 2, 2016 at 19:00
Add a comment
23

If you are using kramdown, you can do this:

{:.foo}
![drawing](drawing.jpg)
Then add this to your Custom CSS:

.foo {
text-align: center;
width: 100px;
}
Share
Edit
Follow
edited Oct 16, 2016 at 15:31
Peter Mortensen's user avatar
Peter Mortensen
30.9k2222 gold badges107107 silver badges132132 bronze badges
answered Feb 4, 2013 at 8:51
Zombo's user avatar
Zombo
1
3
I would recommend against setting the width only in CSS. It is useful to tell the browser how large the image element will be before the image and stylesheet are done loading so that it can optimize the layout of elements around the image without doing a reflow. –
Nick McCurdy
Oct 15, 2016 at 21:34
Add a comment
20

Building on from Tiemes answer, if you're using CSS 3 you can use a substring selector:

This selector will match any image with an alt tag that ends with '-fullwidth':

img[alt$="-fullwidth"]{
width: 100%;
display: block;
}
Then you can still use the alt tag for its intended purpose to describe the image.

The Markdown for the above could be something like:

![Picture of the Beach -fullwidth](beach.jpg)
I've been using this in Ghost markdown, and it has been working well.

Share
Edit
Follow
edited Oct 16, 2016 at 15:41
Peter Mortensen's user avatar
Peter Mortensen
30.9k2222 gold badges107107 silver badges132132 bronze badges
answered Dec 31, 2015 at 16:32
bennetimo's user avatar
bennetimo
34122 silver badges44 bronze badges
1
Works perfectly on kramdown+jekyll-3.1.2 as well. –
C--
Feb 27, 2016 at 4:28
Show 1 more comment
19

If you are using reference style images in GitHub Flavored Markdown:

Here is an image of tree:
![alt text][tree]{height=400px width=500px}

[//]: # 'Image References'
[tree]: ./images/tree.png 'This is a tree'

Share
Edit
Follow
edited Aug 28, 2023 at 9:23
robertspierre's user avatar
robertspierre
3,51022 gold badges3535 silver badges5353 bronze badges
answered Apr 23, 2020 at 21:12
zardosht's user avatar
zardosht
3,19122 gold badges2626 silver badges3434 bronze badges
5
This didn't work for me. The reference linked mentions nothing about height/width –
Shubham Chaudhary
Jun 19, 2020 at 7:53
3
Oh, you linked it to explain 'reference style'. In context of the answer, the link doesn't mention anything about the height/width syntax {height=100px width=100px} –
Shubham Chaudhary
Jun 19, 2020 at 8:36
Show 1 more comment
16

For those intereseted in an rmarkdown and knitr solution. There are some ways to resize images in an .rmd file without the use of html:

You can simply specify a width for an image by adding {width=123px}. Don't introduce whitespace in between the brackets:

![image description]('your-image.png'){width=250px}
Another option is to use knitr::include_graphics:

```{r, fig.cap="image description", out.width = '50%'}
knitr::include_graphics('your-image.png')
```

Share
Edit
Follow
edited May 9, 2019 at 6:50
answered May 9, 2019 at 4:45
symbolrush's user avatar
symbolrush
7,28011 gold badge4040 silver badges7070 bronze badges
2
How can I change both height and width? For the first option specifically. I tried putting height and width in the same {} but failed. Separate {}s fail too. –
NelsonGon
Dec 3, 2019 at 8:36
2
@NelsonGon: I never needed to specify both, since the height also scales, when width is specified. Therefore I don't know whether that would be possible and how to achieve it. Good question, though.. –
symbolrush
Dec 3, 2019 at 9:18
2
Thanks, I since figured I can do it like so: {height=x width=y}. It seems this syntax does not recognize commas but I could specify other attributes including style elements. –
NelsonGon
Dec 3, 2019 at 9:30
Add a comment
15

If you have one image in each md file, one handy way to control image size is:

adding css style as follows:

## Who Invented JSON?

`Douglas Crockford`

Douglas Crockford originally specified the JSON format in the early 2000s.
![Douglas Crockford](img/Douglas_Crockford.jpg)

<style type="text/css">
    img {
        width: 250px;
    }
</style>

and the output will be like: enter image description here

If you have more images in each md page, then the handy way to control each image or each customized tag is to define each element in css. For this case for the img tag we could have:

//in css or within style tags:
img[alt="Result1"] {
width: 100px;
}

    img[alt="Result2"] {
    width: 200px;
    }
    img[alt="Result3"] {
    width: 400px;
    }

// try in md one of the methods shown below to insert image in your document:
<br/>
<img src="https://i.stack.imgur.com/xUb54.png" alt="Result1"> <br/>
<img src="https://i.stack.imgur.com/xUb54.png" alt="Result2"> <br/>
<img src="https://i.stack.imgur.com/xUb54.png" alt="Result3"> <br/>

<br/>

in md:<br/>
![Result1](img/res-img-1.png) <br/>

![Result2](img/res-img-2.png) <br/>

![Result3](img/res-img-3.png)
Expand snippet
Share
Edit
Follow
edited Aug 9, 2022 at 23:53
General Grievance's user avatar
General Grievance
4,7143333 gold badges3333 silver badges4848 bronze badges
answered Jun 16, 2021 at 0:11
Ali Safari's user avatar
Ali Safari
1,6171313 silver badges1919 bronze badges
Add a comment
14

I came here searching for an answer. Some awesome suggestions here. And gold information pointing out that markdown supports HTMl completely!

A good clean solution is always to go with pure html syntax for sure. With the tag.

But I was trying to still stick to the markdown syntax so I tried wrapping it around a tag and added whatever attributes i wanted for the image inside the div tag. And it WORKS!!

<div style="width:50%">![Chilling](https://www.w3schools.com/w3images/fjords.jpg)</div>
So this way external images are supported!

Just thought I would put this out there as it isn't in any of the answers. :)

Share
Edit
Follow
answered May 19, 2017 at 3:45
Umang Desai's user avatar
Umang Desai
43822 gold badges55 silver badges1414 bronze badges
1
You cant put markdown inside of HTML, you will need to replace ![chilling](link) with <img src="link" alt="chilling">. –
LuckyPants
Sep 16, 2018 at 4:59
Add a comment
14

For all looking for solutions which work in R markdown/ bookdown, these of the previous solutions do/do not work or need slight adaption:

Working
Append { width=50% } or { width=50% height=50% }

![foo](foo.png){ width=50% }
![foo](foo.png){ width=50% height=50% }

Important: no comma between width and height – i.e. { width=50%, height=30% } won't work!

Append { height="36px" width="36px" }

![foo](foo.png){ height="36px" width="36px" }
Note: {:height="36px" width="36px"} with colon, as from @sayth, seems not to work with R markdown
Not working:
Append =WIDTHxHEIGHT
after the URL of the graphic file to resize the image (as from @prosseek)
neither =WIDTHxHEIGHT ![foo](foo.png =100x20) nor =WIDTH only ![foo](foo.png =250x) work
Share
Edit
Follow
edited Dec 6, 2019 at 16:13
answered Dec 6, 2019 at 16:05
mavericks's user avatar
mavericks
1,07511 gold badge1919 silver badges4545 bronze badges
Add a comment
14

This one works for me it's not in one line but i hope it works for you.

<div>
<img src="attachment:image.png" width="500" height="300"/>
</div>
Share
Edit
Follow
answered Apr 4, 2020 at 18:16
Alfredo Castaneda's user avatar
Alfredo Castaneda
37944 silver badges44 bronze badges
1
<div><img src="attachment:image.png" width="500" height="300"/></div> <- one line :D – 
Bash Stack
 Nov 17, 2021 at 15:38
Add a comment
14

Not a universal solution, but if you're working in Obsidian it has its own syntax for this:

![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
Or, to use the example from the question:

![drawing|200x100](drawing.jpg)
From: Basic formatting syntax - Obsidian Help

Share
Edit
Follow
edited Oct 16, 2023 at 0:36
answered Apr 14, 2023 at 17:52
aboy021's user avatar
aboy021
2,21622 gold badges2525 silver badges2424 bronze badges
1
Nice. But that's not a universal solution. –
Martin
Jul 12, 2023 at 11:49
Show 1 more comment
12

You could use this one as well with kramdown:

markdown
![drawing](drawing.jpg)  
{:.some-css-class style="width: 200px"}
or

markdown
![drawing](drawing.jpg)  
{:.some-css-class width="200"}
This way you can directly add arbitrary attributes to the last html element. To add classes there is a shortcut .class.secondclass.

Share
Edit
Follow
edited Aug 10, 2014 at 7:34
Majid Golshadi's user avatar
Majid Golshadi
2,68622 gold badges2020 silver badges2929 bronze badges
answered Nov 16, 2013 at 22:18
rriemann's user avatar
rriemann
52844 silver badges1818 bronze badges
Add a comment
12

I know that this answer is a bit specific, but it might help others in need.

As many photos are uploaded using the Imgur service, you can use the API detailed here to change the size of the photo.

When uploading a photo in a GitHub issue comment, it will be added through Imgur, so this will help a lot if the photo is very big.

Basically, instead of https://i.stack.imgur.com/Y682Q.gif, you would put http://i.imgur.com/12345m.jpg for medium sized image.

Share
Edit
Follow
edited Nov 15, 2016 at 15:26
answered Nov 9, 2015 at 14:54
Iulian Onofrei's user avatar
Iulian Onofrei
9,3881010 gold badges6767 silver badges114114 bronze badges
Show 1 more comment
11

I scripted the simple tag parser for using a custom-size img tag in Jekyll.

https://gist.github.com/nurinamu/4ccf7197a1bdfb0d7079

{% img /path/to/img.png 100x200 %}
You can add the file to the \_plugins folder.

Share
Edit
Follow
edited Oct 16, 2016 at 15:36
Peter Mortensen's user avatar
Peter Mortensen
30.9k2222 gold badges107107 silver badges132132 bronze badges
answered Sep 7, 2014 at 23:16
nurinamu's user avatar
nurinamu
24044 silver badges99 bronze badges
Add a comment
11

For those using Markdown on Google Colaboratory, there is no need to have the image uploaded to the session storage folder, or linked on Google Drive. If the image has a URL, and it can be included on the Jupyter notebook, and its size changed as follows:

<img src="https://image.png" width="500" height="500" />
enter image description here

Note that entering just the width leaving the height completely out allows the image to adjust to small screens (i.e. phone).

Share
Edit
Follow
edited Jul 2, 2023 at 17:20
answered Jun 7, 2021 at 17:13
Antoni Parellada's user avatar
Antoni Parellada
4,30377 gold badges5555 silver badges118118 bronze badges
Show 1 more comment
7

For R-Markdown, neither of the above solutions worked for me, so I turned to regular LaTeX syntax, which works just fine.

\begin{figure}
\includegraphics[width=300pt, height = 125 pt]{drawing.jpg}
\end{figure}
Then you can use e.g. the \begin{center} statement to center the image.

Share
Edit
Follow
edited Oct 16, 2016 at 15:43
Peter Mortensen's user avatar
Peter Mortensen
30.9k2222 gold badges107107 silver badges132132 bronze badges
answered Sep 5, 2016 at 13:53
Knarpie's user avatar
Knarpie
26944 silver badges1010 bronze badges
1
+1, but better just \centering after \begin{figure} or nothing, if you use ` \includegraphics[width=\linewidth]{drawing.jpg}` that I think that should be the default pandoc output at least when the image is wider that the text. –
Fran
Oct 24, 2017 at 9:26
Add a comment
6

Resizing Markdown Image Attachments in Jupyter Notebook
I'm using jupyter_core-4.4.0 & jupyter notebook.

If you're attaching your images by inserting them into the markdown like this:
![Screen%20Shot%202019-08-06%20at%201.48.10%20PM.png](attachment:Screen%20Shot%202019-08-06%20at%201.48.10%20PM.png)
These attachment links don't work:
<img src="attachment:Screen%20Shot%202019-08-06%20at%201.48.10%20PM.png" width="500"/>
DO THIS. This does work.
Just add div brackets.

<div>
<img src="attachment:Screen%20Shot%202019-08-06%20at%201.48.10%20PM.png" width="500"/>
</div>
Hope this helps!

Share
Edit
Follow
answered Aug 6, 2019 at 21:58
MrFun's user avatar
MrFun
2,37311 gold badge1515 silver badges1616 bronze badges
Show 2 more comments
5

When using Flask (I am using it with flat pages)... I found that enabling explicitly (was not by default for some reason) 'attr_list' in extensions within the call to markdown does the trick - and then one can use the attributes (very useful also to access CSS - class="my class" for example...).

FLATPAGES_HTML_RENDERER = prerender_jinja

and the function:

def prerender_jinja(text):
prerendered_body = render_template_string(Markup(text))
pygmented_body = markdown.markdown(prerendered_body, extensions=['codehilite', 'fenced_code', 'tables', 'attr_list'])
return pygmented_body
And then in Markdown:

![image](https://octodex.github.com/images/yaktocat.png 'This is a tooltip'){: width=200px}
Share
Edit
Follow
edited Oct 16, 2016 at 15:42
Peter Mortensen's user avatar
Peter Mortensen
30.9k2222 gold badges107107 silver badges132132 bronze badges
answered Feb 8, 2016 at 5:10
mat's user avatar
mat
5911 silver badge22 bronze badges
Add a comment
5

There is way with add class and css style
![pic][logo]{.classname}

then write down link and css below
[logo]: (picurl)

<style type="text/css">
    .classname{
        width: 200px;
    }
</style>

Reference Here

Share
Edit
Follow
edited May 23, 2017 at 11:55
Community's user avatar
CommunityBot
111 silver badge
answered Feb 6, 2017 at 7:16
Cropse's user avatar
Cropse
5311 silver badge44 bronze badges
Add a comment
5

The addition of relative dimensions to the source URL will be rendered in the majority of Markdown renderers.

We implemented this in Corilla as I think the pattern is one that follows expectations of existing workflows without pushing the user to rely on basic HTML. If your favourite tool doesn't follow a similar pattern it's worth raising a feature request.

Example of syntax:

![a-kitten.jpg](//corilla.com/a-kitten-2xU3C2.jpg =200x200)

Example of kitten:

kitten

Share
Edit
Follow
answered Feb 8, 2018 at 14:13
davidryan's user avatar
davidryan
2,6302222 silver badges3333 bronze badges
Show 1 more comment
5

For future reference:

Markdown implementation for Joplin allows controlling the size of imported images in the following manner:

<img src=":/7653a812439451eb1803236687a70ca" width="450"/>

This feature was requested here and as promised by Laurent this has been implemented.

It took me a while to figure the Joplin specific answer.

Share
Edit
Follow
answered Aug 14, 2019 at 9:31
kgkmeekg's user avatar
kgkmeekg
52422 gold badges88 silver badges1717 bronze badges
Add a comment
5

Via plain backward compatible MD:

![<alt>](<imguri>#<w>x<h> "<title>")
where w, h defines the bounding box to aspect fit into, as eg in Flutter package https://pub.dev/packages/flutter_markdown

Code: https://github.com/flutter/packages/blob/9e8f5227ac14026c419f481ed1dfcb7b53961475/packages/flutter_markdown/lib/src/builder.dart#L473

Reconsider html workarounds breaking compatibility as people might use native/non-html components/apps to display markdown.

Share
Edit
Follow
edited Jul 28, 2021 at 9:21
answered Jul 27, 2021 at 15:39
0llie's user avatar
0llie
8,79722 gold badges2525 silver badges1313 bronze badges
Add a comment
5

Put the image URL in tag below. Remember to change the width and height accordingly. Like This

<img src="IMAGE_URL_HERE"  width="300" height="300">
You can specify width without height attribute and vice versa.

Alternatively, you can change image size using percentage value like below:

<img src="IMAGE_URL_HERE"  width=50% height=50%>
Share
Edit
Follow
answered Sep 8, 2022 at

1720

I just got started with Markdown. I love it, but there is one thing bugging me: How can I change the size of an image using Markdown?

The documentation only gives the following suggestion for an image:

![drawing](drawing.jpg)
If it is possible I would like the picture to also be centered. I am asking for general Markdown, not just how GitHub does it.

imagemarkdown
Share
Edit
Follow
edited May 14, 2019 at 10:29
Matthias Braun's user avatar
Matthias Braun
33k2626 gold badges146146 silver badges173173 bronze badges
asked Feb 3, 2013 at 18:42
cantdutchthis's user avatar
cantdutchthis
33k1717 gold badges7575 silver badges115115 bronze badges
1
For top image (like repo logo) I just make a "white padding" in original image before export to PNG. –
Enrique René
Oct 21, 2020 at 22:09
1
You should really fix the accepted answer the to HTML one as the current answer uses non-standard markdown features that don't work broadly –
VoteCoffee
Apr 14, 2021 at 15:22
1
What is that ! about? –
buhtz
Dec 11, 2022 at 12:15
2
@buhtz It is to differentiate a normal HTML link [text](URL) from an image ![alt text](image URL). –
VonC
Dec 24, 2022 at 9:26
7
Note: GitLab 15.7+, Dec. 2022, officially adopts the ![alt text](image URL){width=x height=y} convention. –
VonC
Dec 24, 2022 at 9:43
Show 2 more comments
39 Answers
Sorted by:

Highest score (default)
Prev
1
2
4

The sheer <img ... width="50%"> said above, did work on my Github Readme.md document.

However my real issue was, that the image was inside a table cell, just compressing the text in the beside cell. So the other way was to set columns width in Markdown tables, but the solutions did not really seem enough markdownish for my morning.

At last I solved both problems by simply forcing the beside text cell with as much "& nbsp;" as I needed.

I hope this helps. Bye and thanks everybody.

Share
Edit
Follow
answered Feb 20, 2021 at 13:36
Andrea's user avatar
Andrea
4111 bronze badge
Add a comment

Report this ad
3

If we just use normal HTML image tag like this it is working, if you use bootstrap for styling. I use this in website made with Jekyll.

<img class="img-fluid" src="./img/face.jpg" alt="img-verification">
If we add bootstrap classes as per this example it works fine.

Share
Edit
Follow
edited Mar 5, 2021 at 5:04
answered Feb 1, 2021 at 6:46
akshay_sushir's user avatar
akshay_sushir
1,6611313 silver badges99 bronze badges
Show 1 more comment
2

If changing the initial markdown is not an option for you, this hack might work:

newHtml = oldHtml.replace(/<img/g, '<img height="100"');
I used this to be able to resize images before sending them in an email (as Outlook ignores any image css styling)

Share
Edit
Follow
answered Feb 7, 2019 at 14:47
Yannickv's user avatar
Yannickv
53744 silver badges1414 bronze badges
Add a comment

Report this ad
2

Well, some of us do not like warnings. Those warnings come from Markdown linting. So there are two things you need to do:

Use in-line html:
Instead of using: ![drawing](drawing.jpg)

use: <img src="Assets/icon.png" width=250 height=200>

250 and 200 being the preferred width and height of your image, respectively! You can choose to use only one attribute and ignore the other.

Bring down the warnings:
At the root of your project, create a .markdownlint.json file with the following contents:
{
"MD033": false,
"MD013": false
}
To suppress the warnings. Add other warnings you'd like to suppress here!

Share
Edit
Follow
answered Nov 30, 2023 at 15:18
Adioz Daniel's user avatar
Adioz Daniel
41833 silver badges66 bronze badges
Add a comment
1

This will work

<style>
img{width: 50%;}
#foo {color: red;}
</style>

<p id="foo">foo</p>

<p style="color: blue">bar</p>

Share
Edit
Follow
answered Sep 23, 2021 at 8:32
MD SHAYON's user avatar
MD SHAYON
1
Add a comment
1

If you are using markdown-it, first you need to enable HTML render:

const md = require("markdown-it")({
html: true,
});
then you can use in your .md file:

<img src="" alt="drawing" width="100%" height="200"/>
Share
Edit
Follow
answered Jul 3, 2022 at 6:07
Elisei Nicolae's user avatar
Elisei Nicolae
32222 silver badges1313 bronze badges
Show 1 more comment
0

Tieme's answer is best for most cases.

In my case, I am using pandoc to convert markdown to latex. HTML tags won't work here.

My solution is to re-implement \includegraphics

\let\maxincludegraphics\includegraphics
\renewcommand{\includegraphics}[1]{\maxincludegraphics[max width=\textwidth]{#1}}
The is analogous to using CSS after a conversion to HTML.

Share
Edit
Follow
answered Feb 24, 2020 at 13:27
Stewart's user avatar
Stewart
4,59444 gold badges3131 silver badges6464 bronze badges
Add a comment
0

I would just edit the image in some image editor - enlarge the image horizontally, therefore it will get smaller vertically when resized by the renderer to the width of the page.

So, just add some transparent left and right margins.

Share
Edit
Follow
answered Oct 4, 2022 at 7:12
Jakub Homola's user avatar
Jakub Homola
9777 bronze badges
Add a comment
-6

You can set size at the end of the image like this:

![image.png](source **=600x400**)
Share
Edit
Follow
edited Dec 25, 2022 at 16:22
buhtz's user avatar
buhtz
11.4k1919 gold badges7979 silver badges163163 bronze badges
answered Dec 20, 2022 at 19:38
user3342209's user avatar
user3342209
13111 silver badge77 bronze badges
Show 1 more comment
