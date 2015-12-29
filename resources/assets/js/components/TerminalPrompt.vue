<template>
    <div class="TerminalPrompt">
        <span class="TerminalPrompt__segment"
              v-for="segment in prompt"
              :class="getSegmentClasses(segment)"
        >
                {{{ getSegmentContent(segment) | convertSpaces }}}
        </span>
    </div>
</template>

<script lang="babel">
    export default {
        props: {
            prompt: {
                type: Array,
                default() {
                    return [
                        {color: '-', background: '-', bold: false, content: '%u'},
                        {color: '118', background: '-', bold: false, content: '@'},
                        {color: '-', background: '-', bold: false, content: '%h: '}
                    ]
                }
            }
        },
        methods: {
            getSegmentClasses(segment) {
                var classes = [
                    'color-' + segment.color,
                    'background-' + segment.background
                ]
                if (segment.bold) {
                    classes.push('color-bold')
                }

                return classes
            },
            getSegmentContent(segment) {
                return segment.content.replace('%u', 'root')
                        .replace('%h', 'color-my-zsh')
                        .replace('%p', '~')
            }
        },
        filters: {
            convertSpaces: function (value) {
                return value.replace(' ', '&nbsp;')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .TerminalPrompt {
        display: flex;
    }
</style>