<template>
    <div class="ThemeEditor">
        <div class="ThemeEditor__inputGroup">
            <label class="ThemeEditor__label">
                Theme Name
            </label>
            <input type="text"
                   class="ThemeEditor__input"
                   placeholder="ex. Material Theme"
            >
        </div>
        <div class="ThemeEditor__inputGroup">
            <label class="ThemeEditor__label">
                Author
            </label>
            <input type="text"
                   class="ThemeEditor__input"
                   placeholder="ex. John Doe"
            >
        </div>

        <div class="ThemeEditor__segments">
            <ul class="ThemeEditor__segmentsList">
                <li class="ThemeEditor__segmentsListItem" v-for="segment in theme.prompt">
                    <div :class="getSegmentClasses(segment)"
                         @click="activeSegment = segment"
                    >
                        {{{ segment.content | convertSpaces }}}
                    </div>
                </li>
            </ul>
        </div>

        <div class="ThemeEditor__Controls">
            <div class="Button"
                 @click="addSegment()"
            >
                Add new segment
            </div>
            <div class="Button"
                 @click="removeSegment(activeSegment)"
            >
                Remove segment
            </div>
        </div>

        <div class="ThemeEditor__inputRow">
            <div class="ThemeEditor__inputGroup" style="flex: 2">
                <label class="ThemeEditor__label">
                    Color
                </label>
                <color-picker :color.sync="activeSegment.color"></color-picker>
            </div>

            <div class="ThemeEditor__inputGroup" style="flex: 2">
                <label class="ThemeEditor__label">
                    Background
                </label>
                <color-picker :color.sync="activeSegment.background"></color-picker>
            </div>

            <div class="ThemeEditor__inputGroup" style="min-width: 3em">
                <label class="ThemeEditor__label">
                    Bold
                </label>
                <toggle-button :toggled.sync="activeSegment.bold"></toggle-button>
            </div>

            <div class="ThemeEditor__inputGroup" style="flex: 4">
                <label class="ThemeEditor__label">
                    Content
                </label>
                <input type="text"
                       class="ThemeEditor__input"
                       placeholder="ex. %u"
                       v-model="activeSegment.content"
                >
            </div>
        </div>
    </div>
</template>

<script lang="babel">
    import ColorPicker from './ColorPicker.vue'
    import ToggleButton from './ToggleButton.vue'

    export default {
        props: {
            theme: {
                type: Object,
                default() {
                    return {
                        name: '',
                        author: '',
                        prompt: [
                            {color: '-', background: '-', bold: false, content: '%u'},
                            {color: '118', background: '-', bold: false, content: '@'},
                            {color: '-', background: '-', bold: false, content: '%h: '}
                        ]
                    }
                }
            }
        },
        data() {
            return {
                activeSegment: this.theme.prompt[0]
            }
        },

        methods: {
            addSegment() {
                this.theme.prompt.push({
                    color: '-', background: '-', bold: false, content: 'New Segment'
                })
                this.activeSegment = this.theme.prompt[this.theme.prompt.length-1]
            },
            removeSegment(segment) {
                if (this.theme.prompt.length > 1) {
                    this.theme.prompt.$remove(segment)
                    this.activeSegment = this.theme.prompt[0]
                }
            },
            getSegmentClasses(segment) {
                var classes = [
                    'color-' + segment.color,
                    'background-' + segment.background
                ]
                if (segment.bold) {
                    classes.push('color-bold')
                }
                if (!segment.content) {
                    classes.push('ThemeEditor__segmentsListItem--empty')
                }
                if (this.activeSegment === segment) {
                    classes.push('ThemeEditor__segmentsListItem--selected')
                }

                return classes
            }
        },

        filters: {
            convertSpaces: function (value) {
                return value.replace(' ', '&nbsp;')
            }
        },

        components: {
            ColorPicker,
            ToggleButton
        }
    }
</script>

<style lang="scss" scoped>
    .ThemeEditor {
        background: #37474f;
    }

    .ThemeEditor__segments {
        background: #4C626d;
        padding: 10px;
        border-bottom: 1px solid #00afd7;
    }

    .ThemeEditor__segmentsList {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    .ThemeEditor__segmentsListItem {
        cursor: pointer;
    }

    .ThemeEditor__segmentsListItem:hover {
        background: #617d8b;
    }

    .ThemeEditor__segmentsListItem--selected {
        outline: 1px solid #00afd7;
    }

    .ThemeEditor__segmentsListItem--empty {
        width: 1em;
        height: 1.3em;
        outline: 1px solid #00afd7;
    }

    .ThemeEditor__inputGroup {
        margin: 0;
        padding: 10px 10px 0;
        border-bottom: 1px solid #00afd7;
    }

    .ThemeEditor__inputRow {
        display: flex;
        flex-wrap: wrap;
    }

    .ThemeEditor__inputRow .ThemeEditor__inputGroup {
        min-width: 6em;
        flex: 1;
    }

    .ThemeEditor__label {
        display: block;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    .ThemeEditor__input {
        display: block;
        width: 100%;
        padding: 0;
        font-size: 1em;
        line-height: 2em;
        border: none;
        background: none;
        color: #FFFFFF;
    }

    .ThemeEditor__input:focus {
        outline: none;
    }

    .ThemeEditor__Controls {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #00afd7;
    }

    .ThemeEditor__Controls > *:first-child {
        margin-right: 10px;
    }
</style>