import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export const studioConfig = defineConfig({
  name: 'default',
  title: 'eas_platform',

  projectId: '68eeiay5',
  dataset: 'development',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
