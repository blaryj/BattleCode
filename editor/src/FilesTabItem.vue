<template>
    <li ref="li" @click="$emit('click', tab)" @mousemove="gradient" @mouseleave="hover= false" :style="{background: hover ? css : null}">
        <a href="#">{{ tab.label }}</a>
    </li>
</template>

<script>
export default {
    props: {
        tab: Object
    },

    data() {
        return {
            css: '',
            hover: false
        };
    },

    methods: {
        gradient(e) {
            this.hover = true;
            var originalBG = '#bdbdbd';
            var
                x, y, xy, bgWebKit, bgMoz,
                lightColor = "rgba(255,255,255,0.75)",
                gradientSize = 100;

var offset = this.$refs.li.getBoundingClientRect();
            x  = e.pageX - offset.left;
            y  = e.pageY - offset.top;
            xy = x + " " + y;

            bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", 100, from(rgba(255,255,255,0.8)), to(rgba(255,255,255,0.0))), " + originalBG;
            // bgMoz    = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBG + " " + gradientSize + "px)";

            this.css = bgWebKit;
        }
    }
};
</script>

<style lang="scss">
</style>
