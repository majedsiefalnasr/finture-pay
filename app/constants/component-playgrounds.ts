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
        label: 'Service Card Playground',
        to: '/components/shared/service',
        description: 'Resizable harness to preview the ServiceCard component.',
      },
      {
        label: 'Service Card Playground',
        to: '/components/shared/service0',
        description: 'Resizable harness to preview the ServiceCard component.',
      },
      {
        label: 'Service Card Playground',
        to: '/components/shared/service1',
        description: 'Resizable harness to preview the ServiceCard component.',
      },
    ],
  },
]
