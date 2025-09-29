// constants/data.ts
import { Feature, WorkflowStep } from '@/types';

export const FEATURES: Feature[] = [
  {
    icon: "👥",
    title: "Client Management",
    description: "Organize all your clients in one place with quick search and filters.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "📏",
    title: "Measurement Tracking",
    description: "Store precise measurements for each client and clothing type.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "👔",
    title: "Clothing Categories",
    description: "Categorize by gender and clothing type with custom measurement templates.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "📊",
    title: "Business Insights",
    description: "Track your total clients and business growth over time.",
    color: "from-orange-500 to-red-500"
  },
  {
  icon: "📅",
  title: "Delivery Day",
  description: "Set and manage delivery days for your clients with ease.",
  color: "from-indigo-500 to-blue-500"
  },
  {
    icon: "🔒",
    title: "Secure Data",
    description: "Your client data is securely stored and always accessible.",
    color: "from-gray-600 to-gray-800"
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: 1,
    title: "Add Client Information",
    description: "Quickly capture client details including name, phone, and address.",
    image: "📱"
  },
  {
    step: 2,
    title: "Select Clothing Category",
    description: "Choose gender and clothing type with intelligent dropdowns.",
    image: "👗"
  },
  {
    step: 3,
    title: "Record Measurements",
    description: "Store precise measurements with custom fields for each clothing type.",
    image: "📏"
  },
  {
    step: 4,
    title: "Manage & Edit",
    description: "Easily view and update client profiles and measurements.",
    image: "💼"
  }
];