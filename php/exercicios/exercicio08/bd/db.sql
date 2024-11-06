CREATE TABLE genres (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL
);

CREATE TABLE movies (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        title VARCHAR(255) NOT NULL,
                        genre_id INT,
                        year INT,
                        image VARCHAR(255),
                        FOREIGN KEY (genre_id) REFERENCES genres(id)
);

INSERT INTO genres (name) VALUES
                              ('Ficção'),
                              ('Crime'),
                              ('Fantasia'),
                              ('Drama'),
                              ('Suspense'),
                              ('Romance'),
                              ('Ação');

INSERT INTO movies (title, genre_id, year, image) VALUES
                                                      ('Matrix', 1, 1999, 'assets/images/matrix.jpg'),
                                                      ('O Poderoso Chefão', 2, 1972, 'assets/images/o-poderoso-chefao.jpg'),
                                                      ('Interestelar', 1, 2014, 'assets/images/interestelar.jpg'),
                                                      ('O Senhor dos Anéis: O Retorno do Rei', 3, 2003, 'assets/images/senhor-dos-aneis.jpg'),
                                                      ('Vingadores: Ultimato', 1, 2019, 'assets/images/vingadores.jpg'),
                                                      ('Cidade de Deus', 4, 2002, 'assets/images/cidade-de-deus.jpg'),
                                                      ('O Silêncio dos Inocentes', 5, 1991, 'assets/images/o-silencio-dos-inocentes.jpg'),
                                                      ('Titanic', 6, 1997, 'assets/images/titanic.jpg'),
                                                      ('Batman: O Cavaleiro das Trevas', 7, 2008, 'assets/images/batman.jpg');