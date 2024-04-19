import { Record, text } from "azle";

const userBody = Record({
    userId: text,
});

const insuranceBody = Record({
    insuranceId: text,
})

const challengeBody = Record({
    challengeId: text,
})

export{ userBody, insuranceBody, challengeBody };