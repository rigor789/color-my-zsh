var global_directories = [
    'Code', 'Desktop', 'Downloads', 'Pictures', 'Music', 'Documents'
]

var commands = {
    'ls': function (args, terminal) {
        terminal.writeLine('listing stuff bro', false)
    },
    'clear': function (args, terminal) {
        terminal.clear()
    },
    'echo': function (args, terminal) {
        terminal.writeLine(args.join(' '), false)
    },
    'motd': function (args, terminal) {
        terminal.printMotd()
    }
}

export default function execute(terminal, command, args) {
    if (!command) {
        return false
    }
    var cmd = commands[command]
    if (cmd) {
        cmd(args, terminal)
        return true
    }

    terminal.writeLine("zsh: command not found: " + command, false)
}