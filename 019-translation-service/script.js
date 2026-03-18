import { NotAvailable } from './errors';

export class TranslationService {
    constructor(api) {
        this.api = api;
    }

    free(text) {
        return this.api.fetch(text).then(t => t.translation);
    }

    batch(texts) {
        if (texts.length === 0) {
            return Promise.reject(new BatchIsEmpty());
        }
        return Promise.all(texts.map(t => this.free(t)));
    }

    request(text) {
        const attempt = (triesLeft) =>
            new Promise((resolve, reject) => {
                this.api.request(text, (err) => {
                    if (!err) return resolve();
                    if (triesLeft === 1) return reject(err);
                    resolve(attempt(triesLeft - 1));
                });
            });

        return attempt(3);
    }

    premium(text, minimumQuality) {
        return this.api.fetch(text)
            .catch(err => {
                if (err instanceof NotAvailable) {
                    return this.request(text).then(() => this.api.fetch(text));
                }
                throw err;
            })
            .then(result => {
                if (result.quality < minimumQuality) {
                    throw new QualityThresholdNotMet(text);
                }
                return result.translation;
            });
    }
}

export class QualityThresholdNotMet extends Error {
    constructor(text) {
        super(
            `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
        );
        this.text = text;
    }
}

export class BatchIsEmpty extends Error {
    constructor() {
        super(
            `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
        );
    }
}
