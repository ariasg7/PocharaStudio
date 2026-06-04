import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project' // Import your new file

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project], // Drop it into the array here
}