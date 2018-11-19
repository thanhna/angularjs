app.factory('stringService', () => {
    return {
        AddSpace: input => {
            let output = ''
            for (let i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output += " "
                }
                output += input[i]
            }
            return output
        },
        toLower: input => {
            if (!input) return 'No data'
            else return input.toUpperCase()
        }
    }
})