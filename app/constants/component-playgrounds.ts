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
    ],
  },
]
