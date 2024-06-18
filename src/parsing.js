import * as fs from 'fs';

const parsingJson = (filepath1, filepath2) => {
    const data = JSON.parse(fs.readFileSync(filepath1, 'utf-8'));
    return data;
};

export { parsingJson };
