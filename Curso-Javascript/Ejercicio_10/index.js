import { suma, multiplica } from './module/controller.js'
import chalk from 'chalk'


const sum = suma(1, 2)

const multi = multiplica(4, 5)

console.log(sum)
console.log(chalk.green(multi));