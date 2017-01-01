### zAnchorMenuScroll
***

when you click a item on navbar,page will sroll to the corresponding content . inversely . when you sroll to the page . anchor menu will show which part on the viewport .

tested : ie9 . chrome .

#### demo : [http://17x.github.io/makeWheel/zAnchorMenuScroll/](http://17x.github.io/makeWheel/zAnchorMenuScroll/)

#### USAGE

```bash
    <script src="js/zAnchorScroll.min.js"></script>
    <script>
    var aSections = document.querySelectorAll('.content')[0];
        var alis = document.querySelectorAll('.side>ul')[0];

        zAnchorScroll({
            anchorContainer: alis,
            anchorTagName: 'li',
            scrollContentContainer: aSections,
            scrollTagName: 'section'
        });
    </script>
```