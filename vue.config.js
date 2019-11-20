module.exports = {
	// publicPath  type: {string} default: '/'
	// 将部署应用程序的基本URL, 用法和 webpack 本身的 output.publicPath 一致
	// 默认情况下，Vue CLI假设您的应用程序将部署在域的根目录下
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

	// outputDir type: {string} default: 'dist'
	// 生成生产环境构建文件目录
	outputDir: 'dist',

	// assetsDir type: {string} default: ''
	// 放置生成的静态资源
	assetsDir: 'static',

	//indexPath type: {string} defalut: 'index.html'
	// 指定生成的index.html 的输出路径，

	//filenameHashing type: {Boolean} default: true
	// 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存

	// pages type: {object} default: undefined
	// 在multi-page 模式下构建应用，每个'page' 应该有一个对应的js入口文件，其值应该是一个对象，对象的key是入口的名字，
	// 一个指定了entry template filename title 和 chunks 的对象
	// 或一个指定entry 的字符串
	pages: {
		index: {
			// page 的入口
			entry: 'src/index/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在dist/index.html的输出
			filename: 'index.html',
		  // 当使用title选项时，
		  // template 中的title标签需要是 <title><%= htmlWebpackPlugin.options.title =%></title>
			title: '首页',
			// 在这个页面中包含的块，默认情况下会包含
			//	提取出来的通用 chunk 和 vendor chunk
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		// 当使用只有入口的字符串格式时，
		// 模板会被推导为 `public/subpage.html`
		// 并且如果找不到的话，就回退到 `public/index.html`。
		// 输出文件名会被推导为 `subpage.html`。
		subpage: 'src/subpage/main.js'
	},

	// lintOnSave：{ type:Boolean default:true } 问你是否使用 eslint
	lintOnSave: true,

	// transpileDependencies type: {Array<string | RegExp>} default: []
	// 默认情况下babel-loader会忽略所有node_modules中的文件, 想要通过Babel显试转译一个依赖可以在这个选项列出来


	// productionSourceMap：{ type:Boolean, default:true } 生产源映射
	// 如果您不需要生产时的源映射，那么将此设置为false可以加速生产构建
	productionSourceMap: false,

	// configureWebpack type: {Object | Function}
	// 如果这个值是一个对象，则会通过webpack-merge 合并到最终的配置中
	// 如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本
	// configureWebpack: config => {
	// 	if(process.env.NODE_ENV === 'production') {
	// 		// 为生产环境修改配置...
	// 	} else {
	// 		// 为开发环境修改配置...
	// 	}
	// },
	// devServer:{type:Object} 3个属性host,port,https
	// devServer: {
	// 	port: 8080, // 端口号
	// 	host: 'localhost',
	// 	https: false, // https:{type:Boolean}
	// 	open: true, // 配置自动启动浏览器
	// 	// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
	// 	proxy: {
	// 		'/api': {
	// 			target: '<url>',
	// 			ws: true,
	// 			changeOrigin: true
	// 		},
	// 		'/foo': {
	// 			target: '<other_url>'
	// 		}
	// 	}
	// }
}