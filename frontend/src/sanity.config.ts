import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'
import AdminDashboard from './sanity/dashboard/AdminDashboard'

export default defineConfig({
  name: 'default',
  title: 'neotech-cms',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'd9m1wvck',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',

  // The base path must match the Route path where the Studio is rendered
  basePath: '/admin',

  tools: (prev) => [
    ...prev.filter((tool) => tool.name !== 'schedules' && tool.name !== 'tasks'),
    {
      name: 'dashboard',
      title: 'Dashboard',
      component: AdminDashboard,
    }
  ],

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
