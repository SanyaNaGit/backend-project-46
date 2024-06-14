import * as fs from 'fs';

const parsingJson = (filepath1, filepath2) => {
    const file1 = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
    const file2 = JSON.parse(fs.readFileSync(filepath2, 'utf-8'));
    return { file1, file2 };
};

export { parsingJson };
