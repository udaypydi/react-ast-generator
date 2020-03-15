export const myTreeData = [
    {
      name: 'File',
      attributes: {
        start: 0,
        end: 135,
      },
      children: [
        {
          name: 'Program',
          attributes: {
            start: 0,
            end: 135,

          },
          children: [
              {
                  name: 'Import Declaration',
                  attributes: {
                      start: 19,
                      end: 26,
                      value: 'react'
                  }
              },
              {
                  name: 'ClassDeclaration',
                  attributes: {
                      start: 29,
                      end: 134
                  },
                  children: [
                      { 
                        name: 'ClassBody',
                        attributes: {
                            start: 72,
                            end: 134
                        }
                      }
                  ]
              }
          ]
        },
      ],
    },
  ];