const movies = [
    {
      id: '1',
      title: 'Particeep - The best',
      category: 'Documentation',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },

    {
      id: '11',
      title: 'Midnight Sun 2',
      category: 'Comedy',
      likes: 4,
      dislikes: 3
    }, {
      id: '12',
      title: 'Les indestructibles 3',
      category: 'Animation',
      likes: 10,
      dislikes: 26
    }, {
      id: '13',
      title: 'Sans un bruit 1',
      category: 'Thriller',
      likes: 30,
      dislikes: 20
    }, {
      id: '14',
      title: 'Creed III',
      category: 'Drame',
      likes: 8,
      dislikes: 17
    }, {
      id: '15',
      title: 'Pulp Fiction 2',
      category: 'Thriller',
      likes: 12,
      dislikes: 7
    },
  ]
  
  export const moviesApi = new Promise((resolve, reject) => setTimeout(resolve, 500, movies))