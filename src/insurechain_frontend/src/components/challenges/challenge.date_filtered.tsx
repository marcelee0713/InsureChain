import { ChallengesType } from "../../interfaces/insurance.interface";
import { ChallengeFilteredBox } from "./challenge.filtered_box";
import { ChallengesStatesProps } from "./challenge.states";
import _ from "lodash";

interface props extends ChallengesStatesProps {
  input: string;
  currentStatus: string;
  currentDate: string;
  data: ChallengesType[];
}

export const ChallengeFiltered = ({
  input,
  currentDate,
  currentStatus,
  data,
  uid,
}: props) => {
  if (currentDate === "LATEST") {
    return (
      <div className="flex-1 flex flex-col gap-5">
        {_.orderBy(data, [(obj) => new Date(obj.createdAt)], ["desc"]).map(
          (val) => (
            <ChallengeFilteredBox
              challengeData={val}
              uid={uid}
              key={val.challengesId}
              input={input}
              onStatus={currentStatus}
            />
          )
        )}
      </div>
    );
  } else {
    return (
      <div className="flex-1 flex flex-col gap-5">
        {_.orderBy(data, [(obj) => new Date(obj.createdAt)], ["asc"]).map(
          (val) => (
            <ChallengeFilteredBox
              challengeData={val}
              uid={uid}
              key={val.challengesId}
              input={input}
              onStatus={currentStatus}
            />
          )
        )}
      </div>
    );
  }
};
