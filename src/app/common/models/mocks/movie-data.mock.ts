import { Movie } from '../movie.model';
  
export const MOVIES_DATA: Movie[] = [
    {
        tittle: "The New Mutants",
        genres: "Accion",
        price: 5.99,
        urlImage: "https://upload.wikimedia.org/wikipedia/commons/9/96/TheNewMutants.jpg",
        details: [{
            starts: 3.5,
            date: "20/09/2020",
            language: "English",
            description: "In this terrifying, action-fueled film based on the MARVEL comic series, five young people who demonstrate special powers",
        }
        ],
    },
    {
        tittle: "Buddy Games",
        genres: "Comedy",
        price: 4.99,
        urlImage: "https://m.media-amazon.com/images/M/MV5BNmE4ZTZmYjAtNGU2OS00NDFlLWI2OWYtMjYwZmVjOWJlOWE1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY1200_CR90,0,630,1200_AL_.jpg",
        details: [{
            starts: 4,
            date: "20/09/2020",
            language: "English",
            description: "Josh Duhamel (Transformers) stars in this wild and hilarious, no-holds-barred comedy. After six lifelong friends have a five year falling out, Bob (Duhamel)"
        }
        ],
    },
    {
        tittle: "Fatman",
        genres: "Adventure",
        price: 6.99,
        urlImage: "https://m.media-amazon.com/images/M/MV5BZjk1NDc4OTEtY2M3OS00M2E3LTk4YTgtYjczMzI1OWQ1ODVlXkEyXkFqcGdeQXVyNzA0OTM3NQ@@._V1_UY1200_CR99,0,630,1200_AL_.jpg",
        details: [{
            starts: 4,
            date: "20/10/2020",
            language: "English",
            description: "To save his declining business, Chris Cringle (Mel Gibson), also known as Santa Claus, is forced into a partnership with the U.S. military. Making matters worse"
        }
        ],
    },
    {
        tittle: "Unhinged",
        genres: "Thriller",
        price: 4.99,
        urlImage: "https://m.media-amazon.com/images/M/MV5BYjc1Mjg5NjItY2I2MS00NDk3LWI5NGYtNzZjNTNiZmMwZTA3XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
        details: [{
            starts: 5,
            date: "20/08/2020",
            language: "English",
            description: "Academy Award©️ winner, Russell Crowe, stars in Unhinged, a thriller that explores the fragile balance of a society pushed to the edge"
        }
        ],
    },
    {
        tittle: "Elf",
        genres: "Comedy",
        price: 3.99,
        urlImage: "https://www.countdownuntilchristmas.com/wp-content/uploads/2011/10/elf-2003-300x425.jpg",
        details: [{
            starts: 4,
            date: "20/09/2003",
            language: "English",
            description: "When one of Santa's elves learns that he's actually a human whom Santa inadvertently brought back from an orphanage when he was a baby"
        }
        ],
    },
]