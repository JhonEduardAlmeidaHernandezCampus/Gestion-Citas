SHOW DATABASES;
CREATE DATABASE gestion_citas;
USE gestion_citas;



CREATE TABLE usuario(
    usu_id INT NOT NULL PRIMARY KEY,
    usu_nombre VARCHAR(50) NOT NULL,
    usu_segdo_nombre VARCHAR(45) NOT NULL,
    usu_primer_apellido_usuar VARCHAR(50) NOT NULL,
    usu_segdo_apellido_usuar VARCHAR(50),
    usu_edad INT NOT NULL,
    usu_telefono VARCHAR(50) NOT NULL,
    usu_direccion VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) NOT NULL,
    usu_tipodoc INT NOT NULL,
    usu_genero INT NOT NULL,
    usu_acudiente INT
);

CREATE TABLE tipo_documento(
    tipdoc_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR (20) NOT NULL
);

CREATE TABLE genero(
    gen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(20) NOT NULL,
    gen_abreviatura VARCHAR(20) NOT NULL
);

CREATE TABLE acudiente(
    acu_codigo INT NOT NULL PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100) NOT NULL,
    acu_direccion VARCHAR(200) NOT NULL
);

CREATE TABLE cita(
    cit_codigo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cit_fecha DATE NOT NULL,
    cit_estadoCita INT NOT NULL,
    cit_medico INT NOT NULL,
    cit_datosUsuario INT NOT NULL
);

CREATE TABLE estado_cita(
    estcita_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estcita_nombre VARCHAR(20) NOT NULL
);

CREATE TABLE medico(
    med_nroMatriculaProsional INT NOT NULL PRIMARY KEY,
    med_nombreCompleto VARCHAR(120) NOT NULL,
    med_consultorio INT NOT NULL,
    med_especialidad INT NOT NULL
);

CREATE TABLE especialidad(
    esp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    esp_nombre VARCHAR(20) NOT NULL
);

CREATE TABLE consultorio(
    cons_codigo INT NOT NULL PRIMARY KEY,
    cons_nombre VARCHAR(50) NOT NULL
);


ALTER TABLE usuario ADD CONSTRAINT fk_usu_tipoDoc FOREIGN KEY(usu_tipodoc) REFERENCES tipo_documento(tipdoc_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_genero FOREIGN KEY(usu_genero) REFERENCES genero(gen_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_acudiente FOREIGN KEY(usu_acudiente) REFERENCES acudiente(acu_codigo);
ALTER TABLE cita ADD CONSTRAINT fk_cita_usuario FOREIGN KEY(cit_datosUsuario) REFERENCES usuario(usu_id);
ALTER TABLE cita ADD CONSTRAINT fk_cita_estadoCit FOREIGN KEY(cit_estadoCita) REFERENCES estado_cita(estcita_id);
ALTER TABLE cita ADD CONSTRAINT fk_cita_medico FOREIGN KEY(cit_medico) REFERENCES medico(med_nroMatriculaProsional);
ALTER TABLE medico ADD CONSTRAINT fk_medico_especialidad FOREIGN KEY(med_especialidad) REFERENCES especialidad(esp_id);
ALTER TABLE medico ADD CONSTRAINT fk_medico_consultorio FOREIGN KEY(med_consultorio) REFERENCES consultorio(cons_codigo);


/* INSERT DATOS */

INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura) VALUES 
("Cedula", "CC"),
("Targeta", "TI"),
("Pasaporte", "PT"),
("Registro Civil", "RC");

INSERT INTO genero (gen_nombre, gen_abreviatura) VALUES 
("Hombre", "H"),
("Mujer", "M"),
("Transgénero", "T"),
("Intersexual", "I"),
("Queer", "Q");

INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES 
(12345, "Jesus Cardona", "+57 13214124", "123 Calle Principal"),
(67890, "Marcelo Luz", "+57 412314124", "Apartamento 456 Avenida del Sol"),
(09876, "Zaira Moran", "+57 51321312", "789 Rua das Flores"),
(54321, "Eduardo Sabater", "+57 12321323", "321 High Street Town XYZ"),
(13579, "Ariel Lledo", "+57 312314123", "Appartement 789");

INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_edad, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES 
(12345, "Sofia", "Andrea", "Johnson", "Sanchez", 11, "+57 123213", "Calle 45", "Sofia@gmail.com", 1, 1, 12345),
(54321, "Liam", "Camila", "Rodriguez", "Perez", 18, "+57 51512213", "Calle 21", "Liam@gmail.com", 2, 2, 67890),
(67890, "Ethan", "Camilo", "Martinez", "Hernandez", 19, "+57 31123213", "Calle 32", "Ethan@gmail.com", 3, 3, 09876),
(09876, "Ava", "Alejandra", "Thompson", "Herrera", 21, "+57 31451512", "Calle 64", "Ava@gmail.com", 4, 4, 54321),
(13579, "Mia", "Fernanda", "Smith", "Rueda", 25, "+57 214315125", "Calle 97", "Mia@gmail.com", 1, 5, 13579);

INSERT INTO estado_cita (estcita_nombre) VALUES 
("Activo"),
("Aprobado"),
("Rechazado"),
("En Espera"),
("Completado");

INSERT INTO especialidad (esp_nombre) VALUES 
("Medico Cardiologo"),
("Medico Dermatologo"),
("Medico Ginecologo"),
("Medico Neurologo"),
("Medico Ortopedista");

INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES 
(1, "Consultorio Cardiología"),
(2, "Consultorio Dermatología"),
(3, "Consultorio Ginecología"),
(4, "Consultorio Neurología"),
(5, "Consultorio Ortopedia");

INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES 
(12345, "Juan Garcia", 1, 1),
(67890, "María Rodriguez", 2, 2),
(09876, "Carlos Lopez", 3, 3),
(54321, "Ana Martinez", 4, 4),
(13579, "Laura Sanchez", 5, 5);
INSERT INTO cita (cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES 
("2023-02-13", 1, 12345, 12345),
("2023-02-14", 2, 67890, 54321),
("2023-02-15", 3, 09876, 67890),
("2023-02-16", 4, 54321, 09876),
("2023-02-17", 5, 13579, 13579);