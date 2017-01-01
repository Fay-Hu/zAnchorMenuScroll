### zAnchorMenuScroll
***

when you click a item on navbar , page will sroll to the corresponding section . inversely . when you sroll to the page . the menu will highlight the section that appears in the viewport .

tested : ie9 . chrome .

#### demo : [http://17x.github.io/makeWheel/zAnchorMenuScroll/](http://17x.github.io/makeWheel/zAnchorMenuScroll/)

#### USAGE

```bash
    <script src="js/zAnchorScroll.min.js"></script>
    <script>
    var aSections = document.querySelectorAll('.content')[0];
        var alis = document.querySelectorAll('.side>ul')[0];

        zAnchorScroll({
            anchorContainer: alis (parentNode of anchors items ),
            anchorTagName: 'li' (tagname of anchors items),
            scrollContentContainer: aSections (parentNode of Sections),
            scrollTagName: 'section' (tagname of sections)
        });
    </script>
```