import { BiBookBookmark } from 'react-icons/bi'

const educational = {
  name: 'educational',
  title: 'Educational',
  type: 'document',
  icon: BiBookBookmark,
  fields: [
    {
      name: 'name',
      title: 'School',
      type: 'string',
      description: 'Nome da instituição',
    },
    {
      name: 'schoolTitle',
      title: 'School Title',
      type: 'string',
      description: 'Especificação do Curso',
    },
    {
      name: 'logo',
      title: 'Instituição Logo',
      type: 'image',
    },
    {
      name: 'description',
      title: 'Descrição do Curso',
      type: 'text',
      rows: 3,
      description: 'Descreva suas atividades no curso',
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      description: 'Add a list of skills',
      of: [{ type: 'string' }],
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    },
  ],
}

export default educational
