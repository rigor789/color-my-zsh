<template>
    <div class="ToggleButton"
         :class="getActiveClass('ToggleButton')"
         @click="toggled = !toggled"
    >
        <div class="ToggleButton__pill"
             :class="getActiveClass('ToggleButton__pill')"
        ></div>
    </div>
</template>

<script lang="babel">
    export default {
        props: {
            toggled: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            getActiveClass: function (baseclass) {
                return this.toggled ? baseclass + '--active' : ''
            }
        }

    }
</script>

<style lang="scss" scoped>
    .ToggleButton {
        width: 32px;
        height: 16px;
        margin: 10px 0;
        cursor: pointer;
        transition: all .4s ease;
        border-radius: 2em;
        background: #F0F0F0;
        border: 1px solid #1A2329;
        padding: 2px;
    }

    .ToggleButton--active {
        background: #00afd7;
    }

    .ToggleButton__pill {
        width: 50%;
        height: 100%;
        display: block;
        position: relative;
        left: 0;
        border-radius: 50%;
        background: #1A2329;
        transition: all .2s ease;
    }

    .ToggleButton__pill--active {
        left: 50%;
    }
</style>