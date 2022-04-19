export const DOCUMENTS = {
  name: 'Documentos do Jorge',
  level: 0,
  isFile: false,
  hasChildren: true,
  children: [
    {
      name: 'Jan - 2022',
      level: 1,
      isFile: false,
      hasChildren: false,
      children: [
        {
          name: 'Filho 1 de Jan - 2022',
          level: 2,
          isFile: true,
          hasChildren: false,
          children: [],
        },
      ],
    },
    {
      name: 'Fev - 2022',
      level: 1,
      isFile: false,
      hasChildren: true,
      children: [
        {
          name: 'Filho 1 de Fev - 2022',
          level: 2,
          isFile: true,
          hasChildren: false,
          children: [],
        },
        {
          name: 'Filho 2 de Fev - 2022',
          level: 2,
          isFile: false,
          hasChildren: false,
          children: [
            {
              name: 'Neto de Fev - 2022',
              level: 2,
              isFile: true,
              hasChildren: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Mar - 2022',
      level: 1,
      isFile: false,
      hasChildren: true,
      children: [
        {
          name: 'Filho 1 de Mar - 2022',
          level: 2,
          isFile: true,
          hasChildren: false,
          children: [],
        },
        {
          name: 'Filho 2 de Mar - 2022',
          level: 2,
          isFile: false,
          hasChildren: false,
          children: [
            {
              name: 'Neto 1 de Mar - 2022',
              level: 2,
              isFile: true,
              hasChildren: false,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: 'Document A',
      level: 1,
      isFile: true,
      hasChildren: false,
      children: [],
    },
    {
      name: 'Document B',
      level: 1,
      isFile: true,
      hasChildren: false,
      children: [],
    },
  ],
};
