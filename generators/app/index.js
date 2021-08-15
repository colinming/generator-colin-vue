const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting () {
        return this.prompt([
                {
                    type: 'input', // 使用用户输入的方式去接收信息
                    name: 'name',
                    message: 'Your project name',
                    default: this.appname // appname 为项目生成目录的名称
                }
            ])
            .then(ansers => {
                // answers => { name: 'user input value' }
                // 放在 this 上，供其他地方使用
                this.ansers = ansers
            })
    }
    
    writing () { 
        // 把每一个文件都通过模板转换到目标路径
        const templates = [
            '.browserslistrc',
            '.editorconfig',
            '.env.development',
            '.env.production',
            '.eslintrc.js',
            // '.gitignore',
            'babel.config.js',
            'package.json',
            'postcss.config.js',
            'README.md',
            // 'yarn.lock',
            'public/favicon.ico',
            'public/index.html',
            'src/App.vue',
            'src/main.js',
            'src/router.js',
            'src/assets/logo.png',
            'src/components/HelloWorld.vue',
            'src/store/actions.js',
            'src/store/getters.js',
            'src/store/index.js',
            'src/store/mutations.js',
            'src/store/state.js',
            'src/utils/request.js',
            'src/views/About.vue',
            'src/views/Home.vue'
        ]

        templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.ansers
            )
        })

    }
    
}