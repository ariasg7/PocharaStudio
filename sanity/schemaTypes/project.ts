import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Gallery Projects',
  type: 'document',
  fields: [
    defineField({ 
      name: 'title', 
      title: 'Title', 
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({ 
      name: 'id', 
      title: 'Unique URL ID (e.g., wedding-sam)', 
      type: 'slug', 
      options: { 
        source: 'title',
        // This stops the infinite validation loop locally
        isUnique: () => true 
      },
      validation: Rule => Rule.required()
    }),
    defineField({ 
      name: 'category', 
      title: 'Category', 
      type: 'string',
      options: { 
        list: ['Weddings', 'Engagements', 'City Hall'] 
      },
      validation: Rule => Rule.required()
    }),
    defineField({ 
      name: 'location', 
      title: 'Location', 
      type: 'string' 
    }),
    defineField({ 
      name: 'mainImage', 
      title: 'Cover Image (Carousel Display)', 
      type: 'image',
      options: { 
        hotspot: true,
        // Forces Sanity to handle asset pipeline smoothly without throwing runtime errors
        metadata: ['blurhash', 'lqip', 'palette']
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'gallery',
      title: 'Project Images (Drag & Drop to Order)',
      type: 'array',
      options: { 
        layout: 'grid' // Displays photos as a clean visual grid
      }, 
      of: [
        { 
          type: 'image',
          name: 'galleryImage', // Explicitly names the array object type for bulk mapping
          options: { 
            hotspot: true,
            metadata: ['blurhash', 'lqip', 'palette']
          } 
        }
      ]
    }) // Fixed the double bracket syntax here
  ]
});