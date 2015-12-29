<template>
    <h2>Create your theme</h2>
    <theme-editor :theme.sync="theme"></theme-editor>
    <h2>Try your theme</h2>
    <terminal :prompt="theme.prompt"></terminal>
</template>

<script lang="babel">
    import Terminal from './Terminal.vue'
    import ThemeEditor from './ThemeEditor.vue'

    export default {
        data() {
            return {
                theme: {
                    name: '',
                    author: '',
                    prompt: [
                        {color: '011', background: '-', bold: false, content: '⬢ '},
                        {color: '014', background: '-', bold: false, content: '%p '},
                        {color: '011', background: '-', bold: false, content: '(●)'},
                        {color: '009', background: '-', bold: true, content: ' ❯'},
                        {color: '011', background: '-', bold: true, content: '❯'},
                        {color: '010', background: '-', bold: true, content: '❯'}
                    ]
                }
            }
        },

        components: {
            Terminal,
            ThemeEditor
        }
    }
</script>

<style lang="scss">

</style>