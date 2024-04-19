import { Record, text } from "azle";

const createTaskBody = Record({
    userId: text,
    insuranceId: text,
    challengeId: text,
});

export{ createTaskBody };