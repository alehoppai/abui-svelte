import autoprefixer from 'autoprefixer'
import simplevars from 'postcss-simple-vars'
import nested from 'postcss-nested'

export default {
	plugins: [autoprefixer, simplevars, nested],
}
