import axios from 'axios';
import { parse } from 'csv-parse';
import { Request, Response } from 'express';
import { Transform } from 'stream';

export const csvToJsonController = async (req: Request, res: Response) => {
    const csvLink = req.body.data.link;
    const delimiter = req.body.data.delimiter;
    if (!csvLink || !delimiter) {
        return res
            .status(400)
            .json({ error: 'csv link and delimiter is required' });
    }

    const response = await axios({
        url: csvLink,
        method: 'GET',
        responseType: 'stream'
    });

    const stream = response.data;

    const csvParseOptions = {
        delimiter: delimiter,
        columns: true
    };

    const csvTransform = new Transform({
        objectMode: true,
        transform(chunk, encoding, callback) {
            callback(null, JSON.stringify(chunk));
        }
    });

    stream
        .pipe(parse(csvParseOptions))
        .on('error', (err: Error) =>
            res.status(400).json({ error: err.message })
        )
        .pipe(csvTransform)
        .pipe(res.contentType('application/json'));
};
