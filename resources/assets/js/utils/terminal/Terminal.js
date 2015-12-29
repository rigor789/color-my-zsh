export class Terminal {
    constructor(vm, motd = []) {
        this.$vm = vm
        this.motd = motd
        this.printMotd()
    }

    setInterpreter(interpreter) {
        this.interpreter = interpreter
    }

    execute() {
        var input = this.$vm.input.split(" ")
        var command = input.shift()
        var args = input

        this.writeLine(this.$vm.input)
        this.$vm.input = ''

        if (!this.interpreter) {
            this.writeLine("No interpreter found!", false)
        }

        this.interpreter(this, command, args)
    }

    printMotd() {
        for (let line of this.motd) {
            this.writeLine(line.replace('%date%', new Date()), false)
        }
    }

    clear() {
        this.$vm.lines.splice(0)
    }

    cancel(append = '') {
        this.writeLine(this.$vm.input + append)
        this.$vm.input = ''
    }

    append(text) {
        this.$vm.input += text
    }

    write(text) {
        this.$vm.input = text
    }

    writeLine(text, prompt = true) {
        this.$vm.lines.push({
            prompt: prompt,
            text: text
        })
    }
}
