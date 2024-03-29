INSERT INTO users (name, email, phone, password)
VALUES
('Egg Eggerson', 'friedEgg99@hotmail.com', '604789456', 'password'),
('Micheal Schmidt', 'wilkinson.timmothy@hotmail.com', '778456123', 'password'),
('Anderson Stokes', 'reichel_albina@stamm.info', '624123789', 'password');

INSERT INTO order_items (name, price, order_quantity, description, img_url, created_at, order_date)
VALUES
('Mie Ayam', '15', 50, 'Mie Ayam is a common Indonesian dish of seasoned yellow wheat noodles topped with diced chicken meat', '/images/mie_ayam.jpeg', '2022-08-01 10:00:00', '2022-10-01 10:00:00'),
('Satay', '18', 75, 'Satay is an Indonesian dish of seasoned, skewered and grilled meat, served with peanut sauce.', '/images/satay.jpeg', '2022-09-01 10:00:00', '2022-12-01 10:00:00'),
('Nasi Goreng', '12', 30, 'Nasi Goreng is an Indonesian fried rice dish, usually cooked with pieces of meat and vegetables.', '/images/nasi_goreng.jpeg', '2022-09-01 10:00:00', '2022-12-01 10:00:00'),
('Bihun Bakso', '14', 40, 'A very delicious beef meatballs (6) soup dish served with rice vermicelli, topped with fried shallots, chopped green onions, and other condiments', '/images/bakso.jpeg', '2022-09-01 10:00:00', '2023-12-03 10:00:00');

INSERT INTO orders (user_id, item_id, created_at, quantity, location)
VALUES
(1, 1, '2022-08-01 10:00:00', 2, 'Lougheed at 2 PM'),
(2, 1, '2022-08-03 10:00:00', 5, 'Pick Up at 4 PM'),
(3, 1, '2022-08-05 10:00:00', 3, 'Pick Up at 3 PM');

INSERT INTO locations (item_id, name)
VALUES
(1, 'Lougheed at 2 PM'),
(1, 'Pick Up at 4 PM'),
(1, 'Pick Up at 3 PM'),
(2, 'Metrotown at 12 PM'),
(2, 'Surrey at 3 PM'),
(3, 'Downtown at 5 PM'),
(3, 'Burnaby at 3 PM'),
(3, 'Chinatown at 4 PM'),
(4, 'Lougheed at 1 PM'),
(4, 'Brentwood at 2 PM');
