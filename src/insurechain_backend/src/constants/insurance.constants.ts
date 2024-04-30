import {
  challengesType,
  insuranceType,
} from "../interfaces/insurance.interface";
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
    requiredTokens: "50",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857946/my-uploads/pexels-totalshape-2383010_tyxang.jpg",
    createdAt: "2024-04-22T00:00:00Z",
    benefits: [
      {
        name: "Wellness Programs",
        description:
          "Access to wellness programs and resources aimed at promoting healthy lifestyle choices and preventing illness.",
      },
      {
        name: "Telemedicine Services",
        description:
          "Convenient access to virtual healthcare consultations, allowing for timely medical advice and assistance from qualified professionals.",
      },
      {
        name: "Prescription Drug Coverage",
        description:
          "Coverage for prescription medications, ensuring affordability and accessibility for necessary treatments.",
      },
    ],
    challenges: [
      {
        challengesId: "randomChallengeId12346",
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
    requiredTokens: "45",
    description:
      "Auto insurance with a focus on safe driving and accident prevention.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857949/my-uploads/pexels-pixabay-35967_txxpuv.jpg",
    createdAt: "2024-04-23T00:00:00Z",
    benefits: [
      {
        name: "Safe Driving Discounts",
        description:
          "Opportunities for discounts and rewards for maintaining a safe driving record, encouraging and incentivizing responsible driving behavior.",
      },
      {
        name: "Accident Forgiveness",
        description:
          "Option for accident forgiveness, protecting your premium rates from increasing after your first at-fault accident.",
      },
      {
        name: "24/7 Roadside Assistance",
        description:
          "Access to 24/7 roadside assistance services, providing support in case of vehicle breakdowns, flat tires, or other emergencies while on the road.",
      },
    ],
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
    requiredTokens: "80",
    description: "Comprehensive travel insurance for individuals and families.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857949/my-uploads/pexels-andreimike-1271619_qws6br.jpg",
    createdAt: "2024-04-24T00:00:00Z",
    benefits: [
      {
        name: "Trip Interruption Coverage",
        description:
          "Coverage for trip interruptions due to unforeseen events such as natural disasters, illness, or travel advisories, reimbursing non-refundable trip expenses.",
      },
      {
        name: "Emergency Medical Evacuation",
        description:
          "Coverage for emergency medical evacuation to the nearest adequate medical facility in case of serious illness or injury while traveling.",
      },
      {
        name: "Travel Assistance Services",
        description:
          "Access to travel assistance services, including emergency travel arrangements, medical referrals, and assistance with lost documents or passports.",
      },
    ],
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
    requiredTokens: "70",
    description:
      "Insurance coverage for pets, including veterinary care and treatments.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857948/my-uploads/pexels-freestockpro-1174081_l6joah.jpg",
    createdAt: "2024-04-25T00:00:00Z",
    benefits: [
      {
        name: "Routine Care Coverage",
        description:
          "Option for coverage of routine veterinary care, including vaccinations, wellness exams, and preventive treatments.",
      },
      {
        name: "Multi-Pet Discounts",
        description:
          "Discounts for insuring multiple pets under the same policy, making pet insurance more affordable for households with multiple furry companions.",
      },
      {
        name: "Hereditary Conditions Coverage",
        description:
          "Coverage for hereditary and congenital conditions, ensuring that even genetic health issues are included in the insurance coverage for your pets.",
      },
    ],
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
    requiredTokens: "50",
    description:
      "Insurance coverage for homeowners, protecting against property damage and liability.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857947/my-uploads/pexels-binyaminmellish-1396122_tt6slg.jpg",
    createdAt: "2024-04-26T00:00:00Z",
    benefits: [
      {
        name: "Replacement Cost Coverage",
        description:
          "Option for replacement cost coverage for personal belongings, ensuring that you receive the full cost of replacing items in case of loss or damage.",
      },
      {
        name: "Identity Theft Protection",
        description:
          "Additional coverage for identity theft protection, offering assistance and reimbursement for expenses related to identity theft incidents.",
      },
      {
        name: "Loss of Use Coverage",
        description:
          "Coverage for additional living expenses if your home becomes uninhabitable due to a covered peril, such as fire or natural disaster, helping you maintain your standard of living during repairs or relocation.",
      },
    ],
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
    requiredTokens: "60",
    description:
      "Comprehensive financial planning and investment insurance services.",
    image:
      "https://res.cloudinary.com/dop8qsdej/image/upload/v1713857946/my-uploads/pexels-olia-danilevich-5466785_auixtv.jpg",
    createdAt: "2024-04-27T00:00:00Z",
    benefits: [
      {
        name: "Investment Advisory Services",
        description:
          "Access to investment advisory services, providing personalized investment strategies and recommendations tailored to your financial goals and risk tolerance.",
      },
      {
        name: "Retirement Planning",
        description:
          "Expert guidance and assistance with retirement planning, helping you create a comprehensive retirement savings strategy and maximize your retirement income.",
      },
      {
        name: "Estate Planning Assistance",
        description:
          "Assistance with estate planning, including wills, trusts, and estate tax considerations, helping you protect and distribute your assets according to your wishes.",
      },
    ],
    challenges: [
      {
        challengesId: generateUID(),
        insuranceId: "ins6",
        name: "Financial Health Challenge",
        description:
          "Create and stick to a budget to improve your financial health.",
        tokenPrize: "35",
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
