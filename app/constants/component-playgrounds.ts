export interface ComponentPlaygroundPage {
  label: string
  to: string
  description?: string
}

export interface ComponentPlaygroundCategory {
  title: string
  icon?: string
  to?: string
  pages: ComponentPlaygroundPage[]
}

export const componentPlaygroundCategories: ComponentPlaygroundCategory[] = [
  {
    title: 'Shared / Service',
    icon: 'hugeicons:code-folder',
    to: '/components/shared',
    pages: [
      {
        label: 'Service Card',
        to: '/components/shared/service-card',
        description: 'Resizable harness to preview the ServiceCard component.',
      },
      {
        label: 'Feature Card',
        to: '/components/shared/feature-card',
        description: 'Resizable harness to preview the FeatureCard component.',
      },
      {
        label: 'Solution Card',
        to: '/components/shared/solution-card',
        description: 'Resizable harness to preview the SolutionCard component.',
      },
      {
        label: 'How It Works',
        to: '/components/shared/how-it-works',
        description: 'Resizable harness to preview the HowItWorks component.',
      },
      {
        label: 'Get Started',
        to: '/components/shared/get-started',
        description: 'Resizable harness to preview the GetStarted component.',
      },
      {
        label: 'Footer',
        to: '/components/shared/footer',
        description: 'Resizable harness to preview the Footer component.',
      },
      {
        label: 'Mission Statement',
        to: '/components/shared/mission-statement',
        description: 'Resizable harness to preview the MissionStatement component.',
      },
      {
        label: 'Instant Money Transfers',
        to: '/components/shared/instant-money-transfers',
        description: 'Resizable harness to preview the InstantMoneyTransfers component.',
      },
      {
        label: 'Page Header',
        to: '/components/shared/page-header',
        description: 'Resizable harness to preview the PageHeader component.',
      },
    ],
  },
]
