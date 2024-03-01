const { VueLoaderPlugin } = require('vue-loader');

const glob = require('glob');
const path = require('path');

let list = {};

// {
//     button: './components/lib/button/index.js'
// }
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);

    for (const file of files) {
        const componentName = file.split(/[/.]/)[2];
        list[componentName] = `./${file}`
    }
}

makeList('components/lib', list);

module.exports = {
    entry: list,
    mode: 'development',
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/, use: 'css-loader'
            }
        ]
    }
}