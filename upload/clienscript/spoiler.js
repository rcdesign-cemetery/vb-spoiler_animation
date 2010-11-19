/**
 * Class to animate bbcode spoiler
 */
var Spoiler = {
    anim_block: null,
    anim_speed: 0.25,
    opacity_min_value: 0.2,
    opacity_max_value: 1,

    /**
     * Toggles animation
     * @param click event
     */
    toggle_display: function(event) {
        YAHOO.util.Event.stopEvent(event);
        var elem = event.srcElement? event.srcElement : event.target;
        Spoiler.anim_block = elem.nextSibling;
        var height = Spoiler.anim_block.childNodes[0].offsetHeight;

        if (Spoiler.anim_block)
        {
             if (Spoiler.anim_block.style.height == '0px')
             {
                 Spoiler.display(height);
             }
             else
             {
                 Spoiler.collapse();
             }
        }
    },

    /**
     * Expands
     * @param height of the block
     */
    display: function(height) {
        this.anim_block.style.display = 'block';
        this.setOpacity(this.opacity_min_value);
        var anim = new YAHOO.util.Anim(this.anim_block, { height: {to: height }} , this.anim_speed);
        anim.onTween.subscribe(function (type,data) { 
            // we are getting the current frame in milliseconds
            var anim_time_offset = data[0].currentFrame / 1000;
            var opacity_offset = (Spoiler.opacity_max_value - Spoiler.opacity_min_value) * (anim_time_offset / Spoiler.anim_speed);
            Spoiler.setOpacity(Spoiler.opacity_min_value + opacity_offset);
        });
        anim.onComplete.subscribe(function() {
                YAHOO.util.Dom.removeClass(Spoiler.anim_block, 'splr_anim_hidden');
                Spoiler.anim_block.style.height = 'auto';
            });
        anim.animate();
    },

    /**
     * Collapses
     */
    collapse: function() {
        var anim = new YAHOO.util.Anim(this.anim_block, { height: {to: 0 }} , this.anim_speed);
        anim.onTween.subscribe(function (type,data) { 
            // we are getting the current frame in milliseconds
            var anim_time_offset = data[0].currentFrame / 1000;
            var opacity_offset = (Spoiler.opacity_max_value - Spoiler.opacity_min_value) * (anim_time_offset / Spoiler.anim_speed);
            Spoiler.setOpacity(Spoiler.opacity_max_value - opacity_offset);
        });
        anim.onComplete.subscribe(function() {
                YAHOO.util.Dom.addClass(Spoiler.anim_block, 'splr_anim_hidden');
            });
        anim.animate();
    },

    /**
     * Sets opacity based on browser type
     * @param opacity to set
     */
    setOpacity: function(opacity) {
        if (YAHOO.env.ua.ie)
        {
            var oAlpha = Spoiler.anim_block.filters['DXImageTransform.Microsoft.alpha'] || Spoiler.anim_block.filters.alpha;

            if (oAlpha)
            {
                oAlpha.opacity = opacity*100;
            }
            else
            {
                Spoiler.anim_block.style.filter += "progid:DXImageTransform.Microsoft.Alpha(opacity="+opacity*100+")";
            }
        }
        else
        {
            Spoiler.anim_block.style.opacity = opacity;
        }
    }
};