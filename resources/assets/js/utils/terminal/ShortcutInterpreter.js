var tab_pressed = false
var prev = ''
var shortcuts = {
    'mod+l': function (terminal) {
        terminal.clear()
    },
    'mod+c': function (terminal) {
        terminal.cancel('^C')
    },
    'tab': function (terminal) {
        tab_pressed = !tab_pressed
        if(tab_pressed) {
            prev = terminal.currentLine
            terminal.write("Tab complete is WIP :P Press tab again ;)")
        } else {
            terminal.write(prev)
        }
    }
}

import Mousetrap from 'mousetrap'

export default function (el, terminal) {
    for (var shortcut in shortcuts) {
        if (!shortcuts.hasOwnProperty(shortcut)) continue
        Mousetrap(el).bind(shortcut, wrapCallback(shortcuts[shortcut], terminal))
    }
}

function wrapCallback(callback, terminal) {
    return function () {
        callback(terminal)
        return false;
    }
}