<template>
    <div class="Terminal">
        <div class="Terminal__header">
            <div class="Header__dot"></div>
            <div class="Header__dot"></div>
            <div class="Header__dot"></div>
        </div>
        <div class="Terminal__body" v-el:terminal-body @click="focus">
            <div class="Terminal__line" v-for="line in visibleLines">
                <span class="prompt" v-if="line.prompt">
                    <terminal-prompt :prompt="prompt"></terminal-prompt>
                </span>
                {{ line.text }}
            </div>

            <div class="Terminal__line">
                <span class="prompt">
                    <terminal-prompt :prompt="prompt"></terminal-prompt>
                </span>
                <span>{{ input }}</span>
                <span class="Terminal__caret" v-show="isFocused">█</span>
            </div>
        </div>
        <div class="Terminal__input">
            <input type="text"
                   class="mousetrap"
                   v-model="input"
                   v-el:input
                   @keyup.enter="execute"
                   @focus="setFocused(true)"
                   @blur="setFocused(false)"
            >
        </div>
    </div>
</template>

<script lang="babel">
    import TerminalPrompt from './TerminalPrompt.vue'
    import ShortcutInterpreter from '../utils/terminal/ShortcutInterpreter'
    import ZSHCommandInterpreter from '../utils/terminal/ZSHCommandInterpreter'
    import {Terminal} from '../utils/terminal/Terminal'

    export default {
        props: {
            rows: {
                type: Number,
                default: 16
            },
            prompt: {
                type: Array,
                default() {
                    return [
                        {color: '-', background: '-', bold: false, content: '%u'},
                        {color: '118', background: '-', bold: false, content: '@'},
                        {color: '-', background: '-', bold: false, content: '%h: '}
                    ]
                }
            },
            motd: {
                type: Array,
                default() {
                    return [
                        'Welcome to ZSH emulator.',
                        '',
                        'Current date: %date%',
                        '',
                        'Available commands: ls, clear, echo, motd',
                        'Note: This is not connected to an actual system!'
                    ]
                }
            }
        },

        data() {
            return {
                lines: [],
                input: '',
                isFocused: false
            }
        },

        computed: {
            visibleLines() {
                var index = Math.max(this.lines.length - this.rows + 1, 0)
                return this.lines.slice(index)
            }
        },

        created() {
            this.terminal = new Terminal(this, this.motd)
            this.terminal.setInterpreter(ZSHCommandInterpreter)
        },

        ready: function () {
            ShortcutInterpreter(this.$el, this.terminal)
        },

        methods: {
            execute() {
                this.terminal.execute()
            },
            focus() {
                this.$els.input.focus()
            },
            setFocused(focus) {
                this.isFocused = focus
            }
        },

        components: {
            TerminalPrompt
        }
    }
</script>

<style lang="sass" scoped>
    .Terminal {
        box-shadow: 0 4px 12px rgba(0, 0, 0, .5);
    }

    .Terminal__header {
        background: #1A2329;
        padding: 8px 10px;
        border-radius: 4px 4px 0 0;
    }

    .Header__dot {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #4a5c66;
        border-radius: 50%;
        margin: 0 4px 0 0;
    }

    .Terminal__body {
        position: relative;
        margin: 0;
        font-family: monospace;
        font-size: 1.2em;
        line-height: 1.6;
        padding: 10px;
        height: 400px;
        overflow: hidden;
        background: #37474f;
    }

    .Terminal__line {
        min-height: 1.6em;
        display: flex;
        flex-wrap: wrap;
    }

    .Terminal__caret {
        animation: blink 1s steps(2, start) infinite;
    }

    .Terminal__input {
        width: 0;
        height: 0;
        overflow: hidden;
        opacity: 0;
        z-index: -1000;
        tab-index: -1;
    }

    @keyframes blink {
        to {
            visibility: hidden;
        }
        /*0% {*/
        /*opacity: 1.0;*/
        /*}*/
        /*49.9% {*/
        /*opacity: 1.0;*/
        /*}*/
        /*50% {*/
        /*opacity: 0.0;*/
        /*}*/
        /*99.9% {*/
        /*opacity: 0.0;*/
        /*}*/
        /*100% {*/
        /*opacity: 1.0;*/
        /*}*/
    }
</style>
