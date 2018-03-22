export interface GetGlobalSettings {
    weekdays  : string[]
    toTime : string[];
    fromTime : string[];
}

export class GetGlobalSettingsModel implements GetGlobalSettings {
    weekdays  : string[];
    toTime : string[];
    fromTime : string[];
    constructor() {
        this.weekdays  = [];
        this.toTime = [];
        this.fromTime = [];
    }
}