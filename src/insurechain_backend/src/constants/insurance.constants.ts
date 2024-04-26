import { challengesType, insuranceType } from "../types/insurance.types";
import { generateUID } from "../utils/uid.generator";

const insuranceData: insuranceType[] = [
  {
    insuranceId: "ins1",
    name: "HealthFirst Insurance",
    longDescription: `HealthFirst Insurance provides comprehensive health insurance coverage for individuals and 
    families. Our plans are designed to meet diverse healthcare needs, offering access to quality medical services 
    including hospitalization, doctor visits, prescriptions, and preventive care. With flexible options and a wide 
    network of healthcare providers, we prioritize your health and well-being, ensuring peace of mind and financial 
    security for you and your loved ones.`,
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
    longDescription: `SafeDrive Insurance offers auto insurance solutions with a primary focus on safe driving and 
    accident prevention. Our insurance plans are designed to reward responsible drivers while promoting safe driving habits. 
    With a commitment to protecting you and your vehicle, SafeDrive Insurance provides coverage options tailored to your needs, 
    ensuring peace of mind on the road.`,
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
    longDescription: `TravelGuard Insurance offers comprehensive travel insurance tailored for individuals and families.
     With a focus on providing peace of mind during your travels, our insurance plans cover a wide range of unexpected 
     events, including trip cancellations, medical emergencies, lost baggage, and more, ensuring you can explore the world 
     with confidence.`,
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
    longDescription: `PetCare Insurance provides comprehensive coverage for pets, including veterinary care and treatments.
     Our insurance plans are designed to protect your furry companions and provide financial assistance for medical expenses, 
     ensuring their health and well-being is always a top priority.`,
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
    longDescription: `HomeGuard Insurance provides comprehensive coverage for homeowners, offering protection 
    against property damage and liability. Our insurance plans are tailored to safeguard your home and belongings, 
    providing peace of mind and financial security for you and your family.`,
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
    longDescription: `FinanceWise Insurance offers comprehensive financial planning and investment insurance services. 
    Our services are designed to help individuals and families navigate their financial futures with confidence, providing 
    expert guidance and tailored insurance solutions to meet their needs.`,
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
