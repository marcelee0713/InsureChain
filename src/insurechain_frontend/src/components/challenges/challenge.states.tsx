import { ChallengesType } from "../../interfaces/insurance.interface";
import { Error, Loading, OnEmpty } from "../univeral_states/states";
import { useState } from "react";
import { dateFilter, statusArr } from "../../constants/filters";
import { Filters } from "./filters/filters";
import { ChallengeFiltered } from "./challenge.date_filtered";

export interface ChallengesStatesProps {
  loading?: boolean;
  error?: any;
  data: ChallengesType[] | undefined;
  uid: string;
}

export const ChallengesStates = ({
  data,
  error,
  loading,
  uid,
}: ChallengesStatesProps) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState(statusArr[0]);
  const [date, setDate] = useState(dateFilter[0]);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };

  if (loading) {
    return <Loading text="Getting your available challenges." />;
  }

  if (error || !data) {
    return <Error />;
  }

  if (data.length === 0) {
    return <OnEmpty />;
  }

  return (
    <div className="flex-1 flex flex-col gap-5">
      <Filters
        element={status}
        input={input}
        arr={statusArr}
        onElementChange={setStatus}
        onInputChange={handleChangeEvent}
        dateArr={dateFilter}
        date={date}
        onDateChange={setDate}
        mode="ALL-IN"
      />

      <ChallengeFiltered
        input={input}
        currentStatus={status}
        data={data}
        currentDate={date}
        uid={uid}
      />
    </div>
  );
};
