import { challengesType, insuranceType } from "../types/insurance.types";
import { generateUID } from "../utils/uid.generator";

const insuranceData: insuranceType[] = [
  {
    insuranceId: "ins1",
    name: "HealthFirst Insurance",
    description:
      "Comprehensive health insurance coverage for individuals and families.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857946/my-uploads/pexels-totalshape-2383010_tyxang.jpg",
    createdAt: "2024-04-22T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins1",
        name: "Healthy Habits Challenge",
        description:
          "Start a healthy habit and track your progress for 30 days.",
        tokenPrize: "20",
        userStatus: [
          {
            uid: "olT9lP781LjHLLKS",
            status: "FINISHED",
            finishedAt: Date.now().toString(),
          },
        ],
        createdAt: "2024-04-22T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins2",
    name: "SafeDrive Insurance",
    description:
      "Auto insurance with a focus on safe driving and accident prevention.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857949/my-uploads/pexels-pixabay-35967_txxpuv.jpg",
    createdAt: "2024-04-23T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins2",
        name: "Defensive Driving Challenge",
        description:
          "Complete an online defensive driving course and pass the final exam.",
        tokenPrize: "15",
        userStatus: [
          {
            uid: "olT9lP781LjHLLKS",
            status: "ON-GOING",
          },
        ],
        createdAt: "2024-04-23T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins2",
        name: "Mileage Tracker Challenge",
        description:
          "Track your driving mileage for one month to receive a discount on your premium.",
        tokenPrize: "10",
        userStatus: [],
        createdAt: "2024-04-23T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins3",
    name: "TravelGuard Insurance",
    description: "Comprehensive travel insurance for individuals and families.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857949/my-uploads/pexels-andreimike-1271619_qws6br.jpg",
    createdAt: "2024-04-24T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins3",
        name: "Adventure Challenge",
        description:
          "Plan and execute an adventure trip and share your experience.",
        tokenPrize: "25",
        userStatus: [],
        createdAt: "2024-04-24T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins4",
    name: "PetCare Insurance",
    description:
      "Insurance coverage for pets, including veterinary care and treatments.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857948/my-uploads/pexels-freestockpro-1174081_l6joah.jpg",
    createdAt: "2024-04-25T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins4",
        name: "Pet Wellness Challenge",
        description:
          "Adopt healthy habits for your pet and track their progress.",
        tokenPrize: "15",
        userStatus: [],
        createdAt: "2024-04-25T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins4",
        name: "Pet Photo Contest",
        description: "Share your best pet photos for a chance to win prizes.",
        tokenPrize: "10",
        userStatus: [],
        createdAt: "2024-04-25T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins5",
    name: "HomeGuard Insurance",
    description:
      "Insurance coverage for homeowners, protecting against property damage and liability.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857947/my-uploads/pexels-binyaminmellish-1396122_tt6slg.jpg",
    createdAt: "2024-04-26T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins5",
        name: "Home Safety Challenge",
        description: "Take steps to improve home safety and prevent accidents.",
        tokenPrize: "15",
        userStatus: [],
        createdAt: "2024-04-26T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins6",
    name: "FinanceWise Insurance",
    description:
      "Comprehensive financial planning and investment insurance services.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857946/my-uploads/pexels-olia-danilevich-5466785_auixtv.jpg",
    createdAt: "2024-04-27T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins6",
        name: "Financial Health Challenge",
        description:
          "Create and stick to a budget to improve your financial health.",
        tokenPrize: "20",
        userStatus: [],
        createdAt: "2024-04-27T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins6",
        name: "Investment Challenge",
        description:
          "Learn about investing and start building your investment portfolio.",
        tokenPrize: "10",
        userStatus: [],
        createdAt: "2024-04-27T00:00:00Z",
      },
    ],
  },
];

export default insuranceData;
