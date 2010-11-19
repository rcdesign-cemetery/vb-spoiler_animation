Description:
------------

vBulletin addon to animate spoilers.

Installation:
-------------
1. Install BB code. To do this go to Custom BB codes -> Add new BB code and add following values:
   - in Title- Spoiler
   - in BB Code Tag Name - spoiler
   - in Replacement  - 
     <div style="margin:2em 0em 2em 1.3em;">* <a style="text-decoration: none; border-width:1px; border-style:none none dashed;" name="spoiler" onclick="if(typeof Spoiler !== 'undefined'){Spoiler.toggle_display(event);}else{obj=this.parentNode.childNodes[2].style; tmp=(obj.height!='0px') ? '0px' : 'auto'; obj.height=tmp;} return false;" href="#">{option}</a><div class="subblock" style="overflow:hidden;height:0px;margin-left:1.7em;margin-top:0.8em;"><div>{param}</div></div></div>
   - in Example - [spoiler=Example]Enter the text we want to hide[/spoiler]
   - in Description - Tag to hide spoiler
   - Use {option} - Yes
   - Button Image (Optional) - leave empty
   - Remove Tag If Empty - Yes
   - Disable BB Code Within This BB Code - No
   - Disable Smilies Within This BB Code - No
   - Disable Word Wrapping Within This BB Code - No
   - Disable Automatic Link Parsing Within This BB Code - No
2. And then Click Save
3. You could use tag as is, but the animation part is added with product installation. To install product follow the standard process.

Released at vborg at:
http://www.vbulletin.org/forum/misc.php?do=producthelp&pid=spoiler_animation