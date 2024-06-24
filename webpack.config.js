const webpack = require('webpack');



module.exports = {

  resolve: {

    fallback: {

      util : require.resolve("util/")

    }

  }

};
