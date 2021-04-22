-- CATEGORIAS
INSERT INTO categorias VALUES (1, 'Frutas y verduras', true);
INSERT INTO categorias VALUES (2, 'Pastelería', true);
INSERT INTO categorias VALUES (3, 'Carnes y pescados', true);
INSERT INTO categorias VALUES (4, 'Lácteos y huevos', true);
INSERT INTO categorias VALUES (5, 'Bebidas', true);
INSERT INTO categorias VALUES (6, 'Licores', true);
INSERT INTO categorias VALUES (7, 'Cuidado personal', true);
INSERT INTO categorias VALUES (8, 'Despensa', true);

-- PRODUCTOS
INSERT INTO productos VALUES (1, 'Guayaba Feijoa', 1, '7029 A42 23', 300, 500, true);
INSERT INTO productos VALUES (2, 'Mango', 1, '0316 R56 01', 2100, 250, true);
INSERT INTO productos VALUES (3, 'Manzana', 1, '7923 T23 19', 700, 130, true);
INSERT INTO productos VALUES (4, 'Aguacate', 1, '9322 Q33 02', 2500, 98, true);
INSERT INTO productos VALUES (5, 'Lechuga', 1, '9742 S22 21', 4000, 86, true);
INSERT INTO productos VALUES (6, 'Tomate', 1, '0483 R00 97', 290, 430, true);
INSERT INTO productos VALUES (7, 'Pera', 1, '9999 X10 01', 750, 210, true);
INSERT INTO productos VALUES (8, 'Apio', 1, '3390 F29 45', 150, 115, true);
INSERT INTO productos VALUES (9, 'Papaya', 1, '5291 J34 32', 4500, 73, true);
INSERT INTO productos VALUES (10, 'Limón', 1, '7886 N18 32', 350, 425, true);
INSERT INTO productos VALUES (11, 'Brownie', 2, '6683 H15 20', 2500, 80, true);
INSERT INTO productos VALUES (12, 'Pan tajado', 2, '5745 F05 47', 4500, 120, true);
INSERT INTO productos VALUES (13, 'Torta', 2, '3831 D97 99', 10000, 35, true);
INSERT INTO productos VALUES (14, 'Tortilla', 2, '4335 Z33 84', 6400, 87, true);
INSERT INTO productos VALUES (15, 'Tostadas', 2, '6584 M19 25', 4000, 45, true);
INSERT INTO productos VALUES (16, 'Chocorramo', 2, '4487 S00 97', 2000, 105, true);
INSERT INTO productos VALUES (17, 'Salmón', 3, '4546 A00 01', 28000, 55, true);
INSERT INTO productos VALUES (18, 'Punta de anca', 3, '3678 E57 22', 12000, 32, true);
INSERT INTO productos VALUES (19, 'Posta', 3, '8893 O01 03', 7800, 40, true);
INSERT INTO productos VALUES (20, 'Costilla de cerdo', 3, '4534 Q12 88', 8600, 70, true);
INSERT INTO productos VALUES (21, 'Tilapia', 3, '5684 R53 02', 17000, 60, true);
INSERT INTO productos VALUES (22, 'Merluza', 3, '3523 R04 00', 23000, 45, true);
INSERT INTO productos VALUES (23, 'Leche de vaca', 4, '2323 T56 33', 2500, 500, true);
INSERT INTO productos VALUES (24, 'Queso', 4, '7786 K19 56', 4000, 300, true);
INSERT INTO productos VALUES (25, 'Huevos de gallina feliz', 4, '3478 M74 01', 400, 1000, true);
INSERT INTO productos VALUES (26, 'Clara de huevo', 4, '7932 R31 46', 3200, 200, true);
INSERT INTO productos VALUES (27, 'Suero costeño', 4, '5463 W23 33', 9000, 110, true);
INSERT INTO productos VALUES (28, 'Agua', 5, '8965 I32 11', 2000, 600, true);
INSERT INTO productos VALUES (29, 'Jugo de naranja', 5, '7445 T87 44', 7400, 200, true);
INSERT INTO productos VALUES (30, 'Gaseosa Colombiana', 5, '3434 R34 63', 3100, 175, true);
INSERT INTO productos VALUES (31, 'Jugo de Lulo', 5, '9753 W33 19', 8250, 630, true);
INSERT INTO productos VALUES (32, 'Tea', 5, '9836 F35 69', 1900, 450, true);
INSERT INTO productos VALUES (33, 'Cerveza', 6, '3432 G67 21', 2100, 800, true);
INSERT INTO productos VALUES (34, 'Tequila', 6, '9529 E45 98', 65000, 764, true);
INSERT INTO productos VALUES (35, 'Ron', 6, '1947 R07 53', 55000, 240, true);
INSERT INTO productos VALUES (36, 'Aguardiente Antioqueño', 6, '3160 A54 94', 40000, 480, true);
INSERT INTO productos VALUES (37, 'Vino', 6, '7891 W46 95', 82000, 560, true);
INSERT INTO productos VALUES (38, 'Crema dental', 7, '6310 C99 73', 7500, 200, true);
INSERT INTO productos VALUES (39, 'Jabón de manos', 7, '9371 J14 75', 4900, 90, true);
INSERT INTO productos VALUES (40, 'Enjuague bucal', 7, '1942 T68 01', 12000, 105, true);
INSERT INTO productos VALUES (41, 'Shampoo', 7, '6789 W01 23', 9300, 200, true);
INSERT INTO productos VALUES (42, 'Desodorante', 7, '7333 S21 36', 6900, 85, true);
INSERT INTO productos VALUES (43, 'Arroz', 8, '4676 I83 00', 3500, 600, true);
INSERT INTO productos VALUES (44, 'Lentejas', 8, '7333 S21 36', 3000, 560, true);
INSERT INTO productos VALUES (45, 'Harina', 8, '7333 S21 36', 1800, 300, true);
INSERT INTO productos VALUES (46, 'Sal', 8, '7333 S21 36', 1400, 500, true);
INSERT INTO productos VALUES (47, 'Aceite', 8, '7333 S21 36', 6500, 135, true);
INSERT INTO productos VALUES (48, 'Cereal', 8, '4673 K53 98', 7000, 75, true);
INSERT INTO productos VALUES (49, 'Frijol', 8, '2745 F40 45', 8200, 270, true);
INSERT INTO productos VALUES (50, 'Café', 8, '6351 R33 92', 7200, 400, true);

-- CLIENTES
INSERT INTO clientes VALUES ('4546221', 'Johannes', 'Kepler', 3104583224, 'Cl 3 # 33 - 33', 'kepler@me.com');
INSERT INTO clientes VALUES ('2552243', 'Galileo', 'Galilei', 3462257293, 'Cl 1 # 11 - 11', 'gali@leo.com');
INSERT INTO clientes VALUES ('983824', 'Nicolás', 'Copernico', 3019392466, 'Cl 2 # 22 - 22', 'nico@cope.com');

-- COMPRA
INSERT INTO compras VALUES (1, '4546221', TO_TIMESTAMP('10/08/1992 17:30:00','DD/MM/YYYY HH24:MI:SS'), 'E', '', 'P');
INSERT INTO compras_productos VALUES (1, 1, 10, 3000, true);
INSERT INTO compras_productos VALUES (1, 36, 1, 40000, true);
INSERT INTO compras_productos VALUES (1, 27, 1, 9000, true);
INSERT INTO compras_productos VALUES (1, 49, 2, 16400, true);
INSERT INTO compras_productos VALUES (1, 24, 1, 4000, true);

-- SE REINICIAN LAS SECUENCIAS SEGÚN LOS DATOS INICIALES
SELECT setval('public.productos_id_producto_seq', 50, true);
SELECT setval('public.categorias_id_categoria_seq', 8, true);
SELECT setval('public.compras_id_compra_seq', 1, true);