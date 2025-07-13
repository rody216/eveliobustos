-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS testimonios_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE testimonios_db;

-- Crear tabla de testimonios
CREATE TABLE IF NOT EXISTS testimonios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  mensaje TEXT NOT NULL,
  avatar VARCHAR(255) DEFAULT 'default.jpg',
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de administradores
CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL
);

-- Insertar testimonios actuales
INSERT INTO testimonios (nombre, mensaje, avatar) VALUES
('Ana G. - Empresaria', 'El servicio de Evelio Bustos Apache ha sido excepcional. Su asesoría fiscal nos ha permitido optimizar nuestros recursos de manera significativa, lo que se ha traducido en un crecimiento notable para nuestra empresa. La claridad y el profesionalismo con los que manejan cada caso son dignos de admiración. ¡Definitivamente, un aliado estratégico indispensable para cualquier negocio que busque solidez financiera y cumplimiento normativo!', 'avatar1.jpg'),

('Carlos M. - Emprendedor', 'Gracias a su equipo, la contabilidad de mi negocio es mucho más sencilla y transparente. Antes, el tema fiscal me generaba mucho estrés, pero ahora tengo la tranquilidad de que todo está en orden y bajo control. Siempre están disponibles para resolver cualquier duda, por pequeña que sea, y su paciencia y conocimiento son invaluables. ¡Recomiendo ampliamente sus servicios a todos los emprendedores!', 'avatar2.jpg'),

('Sofía P. - Directora Financiera', 'Profesionalismo y eficiencia definen su trabajo. Nos ayudaron a regularizar nuestra situación fiscal en tiempo récord, evitando multas y complicaciones futuras. Su enfoque proactivo y su capacidad para anticipar problemas nos han brindado una seguridad que no habíamos encontrado en otros despachos. Un gran aliado para cualquier empresa que valore la seriedad y la efectividad en la gestión contable.', 'avatar3.jpg'),

('Roberto L. - Gerente General', 'La atención personalizada que recibimos de Evelio Bustos Apache es incomparable. Se toman el tiempo para entender nuestras necesidades específicas y nos ofrece soluciones a medida que realmente funcionan. Su equipo es sumamente competente y siempre están un paso adelante en las actualizaciones fiscales. Es un placer trabajar con profesionales de este calibre.', 'avatar4.jpg'),

('Laura V. - Dueña de PYME', 'Desde que confiamos nuestra contabilidad a este despacho, hemos notado una mejora sustancial en la organización de nuestras finanzas. La comunicación es fluida y siempre nos mantienen informados de cualquier novedad. Su experiencia en revisoría fiscal nos ha dado una tranquilidad enorme. ¡Un servicio de primera que supera las expectativas!', 'avatar5.jpg'),

('Miguel A. - Inversionista', 'Lo que más valoro de Evelio Bustos Apache es su compromiso con la ética y la transparencia. Nos han guiado en cada paso para asegurar que nuestras operaciones cumplan con todas las normativas, evitando cualquier riesgo. Su asesoría no solo es técnica, sino también estratégica, ayudándonos a tomar mejores decisiones financieras. ¡Un verdadero socio de negocios!', 'avatar6.jpg');


-- Insertar administrador Evelio con contraseña segura (por ejemplo: admin123)
-- La contraseña está hasheada con password_hash() de PHP usando bcrypt
INSERT INTO admins (username, password_hash)
VALUES (
  'evelio',
  '$2y$10$ZCT4Q9ZgWNGprQWcFzZk7eVOf4TRuGjT30K6uRWCIvPzFKHO4tI1K'
);
    