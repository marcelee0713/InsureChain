import { challengesType, insuranceType } from "../types/insurance.types";
import { generateUID } from "../utils/uid.generator";

const insuranceData: insuranceType[] = [
  {
    insuranceId: "ins1",
    name: "HealthFirst Insurance",
    description:
      "Comprehensive health insurance coverage for individuals and families.",
    image: "healthfirst.jpg",
    createdAt: "2024-04-22T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins1",
        name: "Healthy Habits Challenge",
        description:
          "Start a healthy habit and track your progress for 30 days.",
        challenge: "Maintain a daily exercise routine for 30 days",
        tokenPrize: "20",
        claimedUsers: ["olT9lP781LjHLLKS"],
        createdAt: "2024-04-22T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins2",
    name: "SafeDrive Insurance",
    description:
      "Auto insurance with a focus on safe driving and accident prevention.",
    image: "safedrive.jpg",
    createdAt: "2024-04-23T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins2",
        name: "Defensive Driving Challenge",
        description:
          "Complete an online defensive driving course and pass the final exam.",
        challenge: "Pass the final exam with a score of 80% or higher",
        tokenPrize: "15",
        claimedUsers: [],
        createdAt: "2024-04-23T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins2",
        name: "Mileage Tracker Challenge",
        description:
          "Track your driving mileage for one month to receive a discount on your premium.",
        challenge: "Record driving mileage accurately for one month",
        tokenPrize: "10",
        claimedUsers: [],
        createdAt: "2024-04-23T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins3",
    name: "TravelGuard Insurance",
    description: "Comprehensive travel insurance for individuals and families.",
    image: "travelguard.jpg",
    createdAt: "2024-04-24T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins3",
        name: "Adventure Challenge",
        description:
          "Plan and execute an adventure trip and share your experience.",
        challenge: "Complete a multi-day hiking or camping trip",
        tokenPrize: "25",
        claimedUsers: [],
        createdAt: "2024-04-24T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins4",
    name: "PetCare Insurance",
    description:
      "Insurance coverage for pets, including veterinary care and treatments.",
    image: "petcare.jpg",
    createdAt: "2024-04-25T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins4",
        name: "Pet Wellness Challenge",
        description:
          "Adopt healthy habits for your pet and track their progress.",
        challenge: "Implement a regular exercise routine for your pet",
        tokenPrize: "15",
        claimedUsers: [],
        createdAt: "2024-04-25T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins4",
        name: "Pet Photo Contest",
        description: "Share your best pet photos for a chance to win prizes.",
        challenge: "Submit your cutest pet photo",
        tokenPrize: "10",
        claimedUsers: [],
        createdAt: "2024-04-25T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins5",
    name: "HomeGuard Insurance",
    description:
      "Insurance coverage for homeowners, protecting against property damage and liability.",
    image: "homeguard.jpg",
    createdAt: "2024-04-26T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins5",
        name: "Home Safety Challenge",
        description: "Take steps to improve home safety and prevent accidents.",
        challenge: "Install smoke detectors in every room of your home",
        tokenPrize: "15",
        claimedUsers: [],
        createdAt: "2024-04-26T00:00:00Z",
      },
    ],
  },
  {
    insuranceId: "ins6",
    name: "FinanceWise Insurance",
    description:
      "Comprehensive financial planning and investment insurance services.",
    image: "financewise.jpg",
    createdAt: "2024-04-27T00:00:00Z",
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins6",
        name: "Financial Health Challenge",
        description:
          "Create and stick to a budget to improve your financial health.",
        challenge: "Track your expenses and savings for one month",
        tokenPrize: "20",
        claimedUsers: [],
        createdAt: "2024-04-27T00:00:00Z",
      },
      {
        challengesId: generateUID(),
        insuranceId: "ins6",
        name: "Investment Challenge",
        description:
          "Learn about investing and start building your investment portfolio.",
        challenge: "Invest a set amount of money in stocks or mutual funds",
        tokenPrize: "10",
        claimedUsers: [],
        createdAt: "2024-04-27T00:00:00Z",
      },
    ],
  },
];

export default insuranceData;
