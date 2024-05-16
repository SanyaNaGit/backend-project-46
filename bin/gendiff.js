#!/usr/bin/env node
import { program } from 'commander';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information')

program.parse();
if (program.help) program.help();
// const args = program.opts(); // Получаем аргументы командной строки
// Проверяем, был ли передан флаг -h или --help, и выводим справку при необходимости
// if (args.help) {
//   program.help();
// }
