/* eslint-disable prettier/prettier */



export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense",
}


export const data: Data = {
    report: [
        {
            id: "uuid",
            source: "Salary",
            amount: 7500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,
        },
        {
            id: "uuid1",
            source: "Youtube",
            amount: 2200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME,
        },
        {
            id: "uuid2",
            source: "Food",
            amount: 500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE,
        },
    ],
}

interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        // type: "income" | "expense";      //it defines that either type is income or expense
        type: ReportType;      //it defines that either type is income or expense
    }[]
}


data.report.push({
    id: "uuid3",
    source: "Salary",
    amount: 7500,
    created_at: new Date(),
    updated_at: new Date(),
    // type: "expense",
    type: ReportType.INCOME,
});