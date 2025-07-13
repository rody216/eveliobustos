
-- Crear base de datos
CREATE DATABASE IF NOT EXISTS testimonios_db DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE testimonios_db;

-- Tabla de testimonios
CREATE TABLE IF NOT EXISTS testimonios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quote TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    image VARCHAR(255) DEFAULT 'uploads/default.jpg',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar testimonios iniciales
INSERT INTO testimonios (quote, author, image) VALUES
("El servicio de Evelio Bustos Apache ha sido excepcional...", "Ana G. - Empresaria", "uploads/avatar1.jpg"),
("Gracias a su equipo, la contabilidad de mi negocio es mucho más sencilla...", "Carlos M. - Emprendedor", "uploads/avatar2.jpg"),
("Profesionalismo y eficiencia definen su trabajo...", "Sofía P. - Directora Financiera", "uploads/avatar3.jpg"),
("La atención personalizada que recibimos de Evelio Bustos Apache es incomparable...", "Roberto L. - Gerente General", "uploads/avatar4.jpg"),
("Desde que confiamos nuestra contabilidad a este despacho...", "Laura V. - Dueña de PYME", "uploads/avatar5.jpg"),
("Lo que más valoro de Evelio Bustos Apache es su compromiso con la ética...", "Miguel A. - Inversionista", "uploads/avatar6.jpg");

-- Tabla de administrador
CREATE TABLE IF NOT EXISTS admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

-- Insertar usuario administrador por defecto (usuario: evelio, contraseña: admin123)
-- La contraseña ya está hasheada con password_hash('admin123', PASSWORD_DEFAULT)
INSERT INTO admin (username, password_hash) VALUES
('evelio', '$2y$10$kVwnZ9k8jhUPbsSkQZNNmeYZfExWTwLu1aXwrD3TthIBOeLR8a0jy');
