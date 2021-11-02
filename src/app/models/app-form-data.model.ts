export class AppFormData {
    constructor(
        public marketingName: string = "",
        public technicalName: string = "",
        public description: string = "",
        public condition: string = "",
        public type: string = "",
        public benefitAmount: number | null = null,
        public startDate: Date | null = null,
        public finishDate: Date | null = null,
        public businessConditions: number = 0,
        public promotionConnection: boolean = false,
        public backPromotion: boolean = false
    ) {}
}

export const requiredAppFormDataFields = [
    "marketingName",
    "condition",
    "type",
    "startDate"
] as const;
