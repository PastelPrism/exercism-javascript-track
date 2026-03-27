export const checkHumidityLevel = (humidity) => {
    if (humidity > 70) throw new Error('Humidity too high');
};

export class ArgumentError extends Error { }

export class OverheatingError extends Error {
    constructor(temperature) {
        super(`Overheating at ${temperature}°C`);
        this.temperature = temperature;
    }
}

export const reportOverheating = (temperature) => {
    if (temperature === null) {
        throw new ArgumentError('Sensor failure');
    }

    return temperature > 500
        ? (() => { throw new OverheatingError(temperature); })()
        : undefined;
};

export const monitorTheMachine = (actions) => {
    try {
        actions.check();
    } catch (err) {
        switch (true) {
            case err instanceof ArgumentError:
                actions.alertDeadSensor();
                break;

            case err instanceof OverheatingError:
                err.temperature > 600
                    ? actions.shutdown()
                    : actions.alertOverheating();
                break;

            default:
                throw err;
        }
    }
};
