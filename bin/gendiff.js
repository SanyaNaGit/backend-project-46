#!/usr/bin/env node
import { program } from 'commander';
import { parsingJson } from '../src/parsing.js';
import path from 'path';
import { searchForDifference } from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .helpOption('-h, --help', 'output usage information')
  .action((filepath1, filepath2) => {
    const resolvedFilepath1 = path.resolve(filepath1);
    const resolvedFilepath2 = path.resolve(filepath2);
    const file1 = parsingJson(resolvedFilepath1);
    const file2 = parsingJson(resolvedFilepath2);
    console.log(searchForDifference(file1, file2));
  });

program.parse(process.argv);
