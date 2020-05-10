DROP TABLES IF EXISTS Specs, Products, Users, Contact;

CREATE TABLE IF NOT EXISTS Users (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE, 
    username VARCHAR(100) NOT NULL UNIQUE, 
    password VARCHAR(100) NOT NULL, 
    name VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL UNIQUE,
    valid BOOL NOT NULL,
    role ENUM('admin', 'suport', 'user') NOT NULL,
    random TINYINT UNSIGNED NOT NULL
    );

CREATE TABLE IF NOT EXISTS Products (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE, 
    name VARCHAR(200) NOT NULL, 
    picture VARCHAR(100) NOT NULL, 
    price FLOAT(10, 4) UNSIGNED ZEROFILL NOT NULL, 
    currency ENUM('EUR', 'RON') NOT NULL,
    quantity INT UNSIGNED NOT NULL, 
    category ENUM('bicycles', 'accessories', 'clothing') NOT NULL
    );

CREATE TABLE IF NOT EXISTS Specs (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE, 
    id_products INT UNSIGNED NOT NULL, 
    title VARCHAR(100) NOT NULL, 
    description VARCHAR(100) NOT NULL, 
    CONSTRAINT fk_Specs_Products FOREIGN KEY (id_products) REFERENCES Products (id)
    );

CREATE TABLE IF NOT EXISTS Contact (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY UNIQUE, 
    message VARCHAR(1000) NOT NULL, 
    answer VARCHAR(1000) NOT NULL, 
    valid BOOL NOT NULL
    );

INSERT INTO Contact (message, answer, valid) VALUES
    ('Cum pot cauta un anumit produs in magazin?', 'Pentru a cauta un produs, va rugam sa folositi modulul de cautare existent in partea de sus a site-ului. Introduceti informatiile cautate, iar daca acestea se regasesc pe site, vi se va afisa o lista a rezultatelor compatibile.', '0'),
    ('Doresc sa achizitionez un produs care nu este pe stoc. Cum procedez?', 'Pentru mai multe informatii despre disponibilitatea produsului, va rugam sa ne contactati folosind formularul de contact de pe site.', '1'),
    ('Doresc sa obtin informatii suplimentare, care nu se regasesc pe site. Cum procedez?', '', '0');

INSERT INTO Users (username, password, name, email, valid, role, random) VALUES 
    ('admin', '$2a$05$zHPMpKlI1CFcpNEdKaWA4uFjystGdvcy9AsJFXs/3Kl4CEjDcQi/K', 'Admin', 'admin@temapw.ro', '1', 'admin', '0'),
    ('anamaria', '$2a$05$zHPMpKlI1CFcpNEdKaWA4uFjystGdvcy9AsJFXs/3Kl4CEjDcQi/K', 'Popescu Ana-Maria', 'anamaria@gmail.com', '1', 'user', '0'),
    ('mihaicruceru', '$2a$05$zHPMpKlI1CFcpNEdKaWA4uFjystGdvcy9AsJFXs/3Kl4CEjDcQi/K', 'Cruceru Mihai-Viorel', 'crucerumihai@yahoo.com', '1', 'suport', '0'),
    ('sebastianmihai', '$2a$05$zHPMpKlI1CFcpNEdKaWA4uFjystGdvcy9AsJFXs/3Kl4CEjDcQi/K', 'Sebastian Mihai', 'sebastianmihai@gmail.ro', '1', 'user', '0');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Venture 2921', 'Venture_2921.jpg', '1000.00', 'RON', '4', 'bicycles');
INSERT INTO Specs (id_products, title, description) VALUES
    ('1', 'Sport', 'Ciclism'),
    ('1', 'Tip', 'De Munte'),
    ('1', 'Pentru', 'Adulti'),
    ('1', 'Tip Cadru', 'Hardtail'),
    ('1', 'Tip Furca', 'Cu suspensie'),
    ('1', 'Culoare', 'Neagra'),
    ('1', 'Tip Frana', 'Mecanica'),
    ('1', 'Sistem Franare', 'Pe disc'),
    ('1', 'Dimensiune Cadru', '53 cm'),
    ('1', 'Diametru Roata', '29 inch'),
    ('1', 'Cursa suspensie furca', '100 mm');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('SPECIALIZED Rockhopper', 'SPECIALIZED_Rockhopper.jpg', '599.99', 'EUR', '5', 'bicycles');
INSERT INTO Specs (id_products, title, description) VALUES
    ('2', 'Sport', 'Ciclism'),
    ('2', 'Tip', 'De Munte'),
    ('2', 'Pentru', 'Adulti'),
    ('2', 'Tip Cadru', 'Hardtail'),
    ('2', 'Tip Furca', 'Cu suspensie'),
    ('2', 'Culoare', 'Neagra, Verde'),
    ('2', 'Productator', 'Specialized'),
    ('2', 'Tip Frana', 'Mecanica'),
    ('2', 'Sistem Franare', 'Hidraulic'),
    ('2', 'Marime', 'XS'),
    ('2', 'Diametru Roata', '29 inch'),
    ('2', 'Cursa suspensie furca', '100 mm'),
    ('2', 'Transmise', '2x8 viteze');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Bocanci Exclusives Funky Mustard', 'mustard.jpg', '349', 'RON', '100', 'clothing');
INSERT INTO Specs (id_products, title, description) VALUES
    ('3', 'Producator', 'Exclusives'),
    ('3', 'Culoare', 'Mustar'),
    ('3', 'Material', 'Piele de scaun de autobuz'),
    ('3', 'Greutate', '1 kg');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Bocanci Exclusives Boston Original Maro', 'boston.jpg', '449', 'RON', '200', 'clothing');
INSERT INTO Specs (id_products, title, description) VALUES
    ('4', 'Producator', 'Exclusives'),
    ('4', 'Culoare', 'Maro'),
    ('4', 'Material', 'Piele naturala'),
    ('4', 'Greutate', '1.4 kg');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Curea Arcade Smartweave Hudson Navy', 'arcade.jpg', '149.99', 'RON', '24', 'clothing');
INSERT INTO Specs (id_products, title, description) VALUES
    ('5', 'Producator', 'Arcade'),
    ('5', 'Culoare', 'Bleumarin'),
    ('5', 'Greutate', '0.4 kg');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Bicicleta CROSS Dexter HDB maro', '36433_9674_26_Dexter_Brown_DB-01.jpg', '1799.99', 'RON', '12', 'bicycles');
INSERT INTO Specs (id_products, title, description) VALUES
    ('6', 'Pipa', '31.8x45mm'),
    ('6', 'Ghidon', 'Crosser Aluminiu 31.8x780mm'),
    ('6', 'Sa', 'Crosser GW-1168'),
    ('6', 'Tub sa', 'Aluminiu 27.5x350mm'),
    ('6', 'Cadru', 'Aluminiu'),
    ('6', 'Dimensiune Roata', '26 inch'),
    ('6', 'Greutate', '14.1 kg'),
    ('6', 'Culoare', 'maro'),
    ('6', 'Marime', '380 mm'),
    ('6', 'Producator', 'CROSS');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Antifurt Cifru 12X1000MM, Negru', 'atif.jpg', '50', 'EUR', '2', 'accessories');
INSERT INTO Specs (id_products, title, description) VALUES
    ('7', 'Producator', 'Capra'),
    ('7', 'Culoare', 'Negru'),
    ('7', 'Dimensiuni', '12mm(grosime)x1000mm(lungime)'),
    ('7', 'Material', 'sufa din otel imbracata in plastic'),
    ('7', 'Greutat', '0.3 kg');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Ochelari Sport Negru cu Portocaliu', 'ochelari_sport.jpg', '125', 'RON', '13', 'accessories');
INSERT INTO Specs (id_products, title, description) VALUES
    ('8', 'Producator', 'Capra'),
    ('8', 'Rama', 'Negru Lucioasa'),
    ('8', 'Suport nas', 'Reglabil'),
    ('8', 'Lentile', 'policarbonat inteschimbabil'),
    ('8', 'Toc', 'Da'),
    ('8', 'Sac Ochelari', 'Microfibra');

INSERT INTO Products (name, picture, price, currency, quantity, category) VALUES 
    ('Casca Capra', 'capra_m.jpg', '205', 'RON', '123', 'accessories');
INSERT INTO Specs (id_products, title, description) VALUES
    ('9', 'Producator', 'Capra'),
    ('9', 'Material', 'plastic/polistiren/textil'),
    ('9', 'Culoare', 'Turcoaz cu portocaliu, mat'),
    ('9', 'Greutate', '0.350 kg'),
    ('9', 'Marime', 'L (58-61)');

