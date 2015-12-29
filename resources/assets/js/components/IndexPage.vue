<template>
    <h2>Welcome to Color-My-ZSH.</h2>
    <p>
        Easy to use tool for customizing your oh-my-zsh terminal!
    </p>
    <p>
        This tool is open source and you can <a href="#" target="_blank">view it on GitHub</a>.
    </p>

    <h2>Important notes</h2>
    <p>
        This is a work in progress, currently there's no way to transfer the color scheme to your terminal.
        This feature will be added as soon as it is done.
    </p>

    <h2>Help out</h2>
    <p>
        If you'd like to help out with the project, please try it out, and file a bug report for any issues you encounter.
    </p>

    <h2>Create</h2>
    <p>
        Create your first color-my-zsh theme with the editor.
    </p>
    <a v-link="{ path: '/create' }" class="Button">Create your theme now!</a>

</template>

<script lang="babel">
    export default {
        props: [],
        data: function () {
            return {}
        }
    }
</script>

<style lang="scss">

</style>