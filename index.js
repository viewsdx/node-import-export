#!/usr/bin/env node

const path = require('path')

let index = process.argv[2]
if (!path.isAbsolute(index)) {
  index = path.join(process.cwd(), index)
}

require('import-export')
require(index)
